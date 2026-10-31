// =====================================================
//  MOUSE EFFECTS (only looks, no lesson logic here)
//  - soft light that follows the mouse
//  - floating dust that reacts to the mouse
//  - spotlight + glowing border on cards and buttons
//  - buttons gently pulled toward the mouse
//  - glow orbs move a little with the mouse
//  - ring of light when you click
// =====================================================
(() => {
  const finePointer = matchMedia("(pointer: fine)").matches;   // a real mouse (not a phone)
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const mouse = { x: innerWidth / 2, y: innerHeight / 3, active: false };

  // ---------- Spotlight position on the panel, cards and buttons ----------
  // Panel and cards: the light glides after the mouse (smooth, not jumpy).
  // Buttons: the light sits exactly under the mouse.
  const spots = new Map(); // element -> { x, y, tx, ty }

  function updateSpots(e) {
    for (const el of e.composedPath()) {
      if (!el.classList) continue;
      const isSpot = el.classList.contains("spot");
      if (!isSpot && !el.matches("button")) continue;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (isSpot) {
        const s = spots.get(el) || { x, y, tx: x, ty: y };
        s.tx = x;
        s.ty = y;
        spots.set(el, s);
      } else {
        el.style.setProperty("--mx", x + "px");
        el.style.setProperty("--my", y + "px");
      }
    }
  }

  function glide() {
    spots.forEach((s, el) => {
      const dx = s.tx - s.x;
      const dy = s.ty - s.y;
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) return;
      s.x += dx * (calm ? 1 : 0.14);
      s.y += dy * (calm ? 1 : 0.14);
      el.style.setProperty("--mx", s.x.toFixed(1) + "px");
      el.style.setProperty("--my", s.y.toFixed(1) + "px");
    });
    requestAnimationFrame(glide);
  }
  requestAnimationFrame(glide);

  // ---------- Buttons pulled toward the mouse ----------
  let magnetEl = null;
  function magnet(e) {
    const el = e.target.closest ? e.target.closest(".btn") : null;
    if (magnetEl && magnetEl !== el) magnetEl.style.transform = "";
    magnetEl = el;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.08}px, ${dy * 0.14}px)`;
  }

  addEventListener("pointermove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
    updateSpots(e);
    if (finePointer && !calm) magnet(e);
  });

  document.documentElement.addEventListener("pointerleave", () => {
    mouse.active = false;
    if (magnetEl) magnetEl.style.transform = "";
  });

  // ---------- Ring of light on click ----------
  addEventListener("pointerdown", (e) => {
    if (calm) return;
    const ring = document.createElement("span");
    ring.className = "ripple";
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
    ring.addEventListener("animationend", () => ring.remove());
    document.body.appendChild(ring);
  });

  if (!finePointer || calm) {
    drawDustOnce();
    return; // phones and "reduce motion": keep the page calm
  }

  // ---------- Light that follows the mouse + orbs parallax ----------
  const glow = document.getElementById("cursorGlow");
  const wraps = [...document.querySelectorAll(".orb-wrap")];
  let gx = mouse.x, gy = mouse.y;   // glow position (smooth)
  let px = 0, py = 0;               // parallax (smooth)

  function follow() {
    gx += (mouse.x - gx) * 0.04;
    gy += (mouse.y - gy) * 0.04;
    glow.style.transform = `translate3d(${gx - 450}px, ${gy - 450}px, 0)`;
    glow.classList.toggle("on", mouse.active);

    const tx = (mouse.x / innerWidth - 0.5) * 2;
    const ty = (mouse.y / innerHeight - 0.5) * 2;
    px += (tx - px) * 0.05;
    py += (ty - py) * 0.05;
    wraps.forEach((w) => {
      const d = Number(w.dataset.depth);
      w.style.transform = `translate3d(${px * d}px, ${py * d}px, 0)`;
    });

    requestAnimationFrame(follow);
  }
  requestAnimationFrame(follow);

  // ---------- Floating dust ----------
  const canvas = document.getElementById("dust");
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, dust = [];

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth;
    H = innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round(Math.min(200, (W * H) / 8000));
    dust = Array.from({ length: count }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1 - 0.01,
      r:  Math.random() * 1.6 + 0.5,
      a:  Math.random() * 0.5 + 0.18,
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (const p of dust) {
      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d  = Math.hypot(dx, dy);

        if (d > 1) {
          // ultra-gentle pull — particle barely notices the mouse at first,
          // then very slowly drifts toward it over several seconds
          const pull = Math.min(0.007, 18 / (d * d + 1));
          p.vx += (dx / d) * pull;
          p.vy += (dy / d) * pull;

          // tiny orbit nudge so they swirl instead of collapsing
          if (d < 90) {
            const push = (90 - d) / 90 * 0.045;
            p.vx -= (dx / d) * push;
            p.vy -= (dy / d) * push;
          }
        }
      }

      // very high damping = buttery slow, no jerk ever
      p.vx *= 0.982;
      p.vy *= 0.982;

      // hard cap: nothing moves faster than 0.5 px per frame (~30 px / s)
      const spd = Math.hypot(p.vx, p.vy);
      if (spd > 0.5) { p.vx = p.vx / spd * 0.5; p.vy = p.vy / spd * 0.5; }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
      if (p.y < -5) p.y = H + 5;
      if (p.y > H + 5) p.y = -5;

      // --- glow ---
      const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const near = mouse.active ? Math.max(0, 1 - dist / 260) : 0;

      const alpha = Math.min(1, p.a + near * 0.78);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      if (near > 0.08) {
        ctx.shadowColor = "rgba(255,255,255,1)";
        ctx.shadowBlur  = 22 * near;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r + near * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    requestAnimationFrame(tick);
  }

  addEventListener("resize", resize);
  resize();
  requestAnimationFrame(tick);

  // Phones / reduce motion: draw the dust once, without moving
  function drawDustOnce() {
    const c = document.getElementById("dust");
    const g = c.getContext("2d");
    c.width = innerWidth;
    c.height = innerHeight;
    for (let i = 0; i < 60; i++) {
      g.fillStyle = `rgba(255,255,255,${Math.random() * 0.3 + 0.05})`;
      g.beginPath();
      g.arc(Math.random() * c.width, Math.random() * c.height, Math.random() * 1.2 + 0.3, 0, Math.PI * 2);
      g.fill();
    }
  }
})();
