// =====================================================
//  EXTRA DATA FOR EACH LESSON ITEM
//  Key = "<topic id>-<item number>" (the order in script.js, starting at 0).
//  usage    = [English, Arabic]  when to use it
//  example2 = [English, Arabic]  a second example
//  gap      = the key word hidden in Gap mode (sentences only;
//             words and paragraphs use their own key words)
// =====================================================
const ITEM_EXTRAS = {
  // ---------------- Outreach ----------------
  "outreach-0": {
    usage: ["Use it for all the messages you send to people who don't know you yet, on LinkedIn or by email.", "استخدمها لكل الرسائل التي ترسلها لأشخاص لا يعرفونك بعد، على لينكدإن أو عبر البريد الإلكتروني."],
    example2: ["This week, we will focus our outreach on founders of consulting firms.", "هذا الأسبوع، سنركز تواصلنا على مؤسسي شركات الاستشارات."] },
  "outreach-1": { gap: "profile",
    usage: ["Use it when you explain to your team or a client how you prepare before contacting a founder.", "استخدمها عندما تشرح لفريقك أو لعميل كيف تستعد قبل التواصل مع مؤسس."],
    example2: ["I checked her profile first, so I knew she had just hired two new managers.", "تفقدت ملفها أولا، فعرفت أنها وظّفت للتو مديرَين جديدين."] },
  "outreach-2": {
    usage: ["Use this kind of text when you describe your daily routine or explain who your ideal client is.", "استخدم هذا النوع من النصوص عندما تصف روتينك اليومي أو تشرح من هو عميلك المثالي."],
    example2: ["Our ideal client runs a consultancy with about twenty employees and still handles every sale.", "عميلنا المثالي يدير شركة استشارات فيها حوالي عشرين موظفا وما زال يتولى كل عملية بيع."] },
  "outreach-3": {
    usage: ["Use it to describe a message written for one person, not a copy sent to many people.", "استخدمها لوصف رسالة مكتوبة لشخص واحد، وليست نسخة مرسلة لكثير من الناس."],
    example2: ["Every note I send is personalized with something from the founder's last post.", "كل رسالة أرسلها مخصّصة بشيء من آخر منشور للمؤسس."] },
  "outreach-4": { gap: "question",
    usage: ["Use it when you teach someone how to write a first LinkedIn message.", "استخدمها عندما تعلّم شخصا كيف يكتب أول رسالة على لينكدإن."],
    example2: ["Keep your first message under five lines and finish with one clear question.", "اجعل رسالتك الأولى أقل من خمسة أسطر واختمها بسؤال واحد واضح."] },
  "outreach-5": {
    usage: ["Use these ideas when someone accepts your connection request and you write the first DM.", "استخدم هذه الأفكار عندما يقبل شخص طلب التواصل وتكتب له أول رسالة خاصة."],
    example2: ["Thanks for connecting, Sarah. How many hours a week do you still spend on client work?", "شكرا على التواصل يا سارة. كم ساعة في الأسبوع ما زلتِ تقضين في العمل مع العملاء؟"] },
  "outreach-6": {
    usage: ["Use it for a message you send when the first message got no reply.", "استخدمها لرسالة ترسلها عندما لا تحصل الرسالة الأولى على رد."],
    example2: ["I sent a short follow-up on Tuesday, and she replied the same day.", "أرسلت رسالة متابعة قصيرة يوم الثلاثاء، وردّت في نفس اليوم."] },
  "outreach-7": { gap: "polite",
    usage: ["Use it when you explain your follow-up rules and when to stop writing to someone.", "استخدمها عندما تشرح قواعد المتابعة لديك ومتى تتوقف عن مراسلة شخص ما."],
    example2: ["After my third message, I wrote: 'I'll stop here. My door is always open.'", "بعد رسالتي الثالثة، كتبت: 'سأتوقف هنا. بابي مفتوح دائما.'"] },
  "outreach-8": {
    usage: ["Use these ideas when a founder says no and you want to stay professional and friendly.", "استخدم هذه الأفكار عندما يرفض مؤسس وتريد أن تبقى محترفا وودودا."],
    example2: ["Thanks for the honest answer, Mark. If things change later this year, I'm happy to talk.", "شكرا على إجابتك الصادقة يا مارك. إذا تغيرت الأمور لاحقا هذا العام، يسعدني أن نتحدث."] },

  // ---------------- Sales ----------------
  "sales-0": { gap: "notes",
    usage: ["Use it when you explain how you behave during a discovery call.", "استخدمها عندما تشرح كيف تتصرف خلال المكالمة الاستكشافية."],
    example2: ["I asked one question and then listened for almost ten minutes.", "طرحت سؤالا واحدا ثم استمعت لحوالي عشر دقائق."] },
  "sales-1": {
    usage: ["Use it for the first sales call, where you learn about the founder's problem before you offer anything.", "استخدمها لأول مكالمة بيع، حيث تتعرف على مشكلة المؤسس قبل أن تعرض أي شيء."],
    example2: ["Would you be open to a twenty-minute discovery call next week?", "هل أنت مستعد لمكالمة استكشافية مدتها عشرون دقيقة الأسبوع القادم؟"] },
  "sales-2": {
    usage: ["Use these steps to prepare and lead a discovery call with a founder.", "استخدم هذه الخطوات للتحضير لمكالمة استكشافية مع مؤسس وإدارتها."],
    example2: ["What would happen to your company if you took two weeks off next month?", "ماذا سيحدث لشركتك لو أخذت إجازة لمدة أسبوعين الشهر القادم؟"] },
  "sales-3": { gap: "offer",
    usage: ["Use it when a founder asks why you don't work with every company.", "استخدمها عندما يسألك مؤسس لماذا لا تعملون مع كل الشركات."],
    example2: ["We said no to that project because we could not really help them.", "رفضنا ذلك المشروع لأننا لم نكن نستطيع مساعدتهم فعلا."] },
  "sales-4": {
    usage: ["Use it for the document that explains the work, the timeline and the price after a call.", "استخدمها للوثيقة التي تشرح العمل والجدول الزمني والسعر بعد المكالمة."],
    example2: ["I've attached the proposal. Pages two and three explain the first month.", "أرفقت العرض. الصفحتان الثانية والثالثة تشرحان الشهر الأول."] },
  "sales-5": {
    usage: ["Use these ideas when a founder says nobody on their team can do the work as well as they do.", "استخدم هذه الأفكار عندما يقول مؤسس إن لا أحد في فريقه يستطيع القيام بالعمل مثله."],
    example2: ["I understand. A clear system protects your quality even when you are not in the room.", "أفهم ذلك. النظام الواضح يحمي جودة عملك حتى عندما لا تكون حاضرا."] },
  "sales-6": {
    usage: ["Use it for a reason a prospect gives for not buying, like price or timing.", "استخدمها لسبب يقدمه العميل المحتمل لعدم الشراء، مثل السعر أو التوقيت."],
    example2: ["His only objection was the timing, so we agreed to start in January.", "كان اعتراضه الوحيد هو التوقيت، فاتفقنا على البدء في يناير."] },
  "sales-7": { gap: "price",
    usage: ["Use it when a prospect asks how much it costs before a call.", "استخدمها عندما يسأل عميل محتمل عن التكلفة قبل المكالمة."],
    example2: ["The price depends on your team, so let's look at it together on a short call.", "السعر يعتمد على فريقك، فلننظر فيه معا في مكالمة قصيرة."] },
  "sales-8": {
    usage: ["Use these ideas when you write the follow-up message after a sales call.", "استخدم هذه الأفكار عندما تكتب رسالة المتابعة بعد مكالمة البيع."],
    example2: ["Thanks for your time today. Here is a short summary of what we discussed.", "شكرا على وقتك اليوم. إليك ملخصا قصيرا لما ناقشناه."] },

  // ---------------- Delivery ----------------
  "delivery-0": {
    usage: ["Use it for the first steps after a client signs: access, documents and the kick-off call.", "استخدمها للخطوات الأولى بعد توقيع العميل: الصلاحيات والوثائق ومكالمة الانطلاق."],
    example2: ["Onboarding starts with a one-hour call and a short checklist.", "يبدأ إدماج العميل بمكالمة مدتها ساعة وقائمة تحقق قصيرة."] },
  "delivery-1": {
    usage: ["Use these ideas when you explain to a new client how the project starts.", "استخدم هذه الأفكار عندما تشرح لعميل جديد كيف يبدأ المشروع."],
    example2: ["This month, we will list every task you do and decide who should own each one.", "هذا الشهر، سنسرد كل مهمة تقوم بها ونقرر من يجب أن يتولى كل واحدة منها."] },
  "delivery-2": { gap: "interview",
    usage: ["Use it when a client asks what happens in the first week of the project.", "استخدمها عندما يسأل عميل ماذا يحدث في الأسبوع الأول من المشروع."],
    example2: ["Next week, we will interview three people from your team, thirty minutes each.", "الأسبوع القادم، سنجري مقابلات مع ثلاثة أشخاص من فريقك، ثلاثين دقيقة لكل واحد."] },
  "delivery-3": {
    usage: ["Use it for any concrete result you promised to hand over, like a document or a trained person.", "استخدمها لأي نتيجة ملموسة وعدت بتسليمها، مثل وثيقة أو شخص مدرَّب."],
    example2: ["The first deliverable is a full map of your weekly tasks.", "أول ما سنسلّمه هو خريطة كاملة لمهامك الأسبوعية."] },
  "delivery-4": {
    usage: ["Use these ideas when a client thinks writing documents is the whole job.", "استخدم هذه الأفكار عندما يعتقد عميل أن كتابة الوثائق هي كل العمل."],
    example2: ["We will mark this process as done when Sarah can run it alone.", "سنعتبر هذه العملية مكتملة عندما تستطيع سارة تنفيذها وحدها."] },
  "delivery-5": { gap: "process",
    usage: ["Use it when you explain why written processes save the founder's time.", "استخدمها عندما تشرح لماذا توفر العمليات المكتوبة وقت المؤسس."],
    example2: ["The invoicing process is now written down in five simple steps.", "عملية الفوترة مكتوبة الآن في خمس خطوات بسيطة."] },
  "delivery-6": {
    usage: ["Use it for the one person or step that slows everything down.", "استخدمها للشخص الواحد أو الخطوة التي تبطئ كل شيء."],
    example2: ["Every approval goes through you, so you have become the bottleneck.", "كل موافقة تمر عبرك، لذلك أصبحت أنت نقطة الاختناق."] },
  "delivery-7": { gap: "update",
    usage: ["Use it when you agree with a client on how you will report progress.", "استخدمها عندما تتفق مع عميل على طريقة إبلاغه بالتقدم."],
    example2: ["Quick update: the hiring guide is done, and the training plan is in progress.", "تحديث سريع: دليل التوظيف مكتمل، وخطة التدريب قيد التنفيذ."] },
  "delivery-8": {
    usage: ["Use these ideas when you must tell a client about a delay or a problem.", "استخدم هذه الأفكار عندما يجب أن تخبر عميلا بتأخير أو مشكلة."],
    example2: ["I want to tell you early: the training will finish one week later than planned.", "أريد أن أخبرك مبكرا: سينتهي التدريب بعد أسبوع من الموعد المخطط له."] },

  // ---------------- Operations ----------------
  "operations-0": { gap: "system",
    usage: ["Use it when you explain to a founder what a system means.", "استخدمها عندما تشرح لمؤسس ماذا يعني النظام."],
    example2: ["For each task, we write down the owner, the steps and the quality check.", "لكل مهمة، نكتب المسؤول عنها والخطوات وطريقة التحقق من الجودة."] },
  "operations-1": {
    usage: ["Use these ideas when you explain why the team keeps asking the founder questions.", "استخدم هذه الأفكار عندما تشرح لماذا يستمر الفريق في طرح الأسئلة على المؤسس."],
    example2: ["Right now, all the pricing knowledge is in your head. Let's write it down.", "حاليا، كل المعرفة المتعلقة بالتسعير موجودة في رأسك. لنكتبها."] },
  "operations-2": {
    usage: ["Use it for the series of steps a task follows from start to finish.", "استخدمها لسلسلة الخطوات التي تمر بها مهمة من البداية إلى النهاية."],
    example2: ["The new workflow sends every request to one person first.", "سير العمل الجديد يرسل كل طلب إلى شخص واحد أولا."] },
  "operations-3": { gap: "shared",
    usage: ["Use it when you describe a before-and-after change in how the team works.", "استخدمها عندما تصف تغييرا قبل وبعد في طريقة عمل الفريق."],
    example2: ["Instead of asking you, the team now checks the client tracker first.", "بدلا من سؤالك، يتحقق الفريق الآن من سجل متابعة العملاء أولا."] },
  "operations-4": {
    usage: ["Use it for one screen or document that shows the key numbers of the business.", "استخدمها لشاشة أو وثيقة واحدة تعرض الأرقام الأساسية للشركة."],
    example2: ["Please update the dashboard before our call on Monday.", "من فضلك حدّث لوحة المتابعة قبل مكالمتنا يوم الاثنين."] },
  "operations-5": {
    usage: ["Use these ideas when you show a client how a simple change saved time.", "استخدم هذه الأفكار عندما تُري عميلا كيف وفّر تغيير بسيط الوقت."],
    example2: ["You used to spend Monday morning in meetings. Now it takes ten minutes.", "كنت تقضي صباح الاثنين في الاجتماعات. الآن يستغرق ذلك عشر دقائق."] },
  "operations-6": {
    usage: ["Use it when each person is clearly responsible for a result and reports on it.", "استخدمها عندما يكون كل شخص مسؤولا بوضوح عن نتيجة ويقدّم تقريرا عنها."],
    example2: ["Weekly numbers bring accountability without the founder checking everything.", "الأرقام الأسبوعية تخلق المساءلة دون أن يتحقق المؤسس من كل شيء."] },
  "operations-7": { gap: "tools",
    usage: ["Use it when a client wants to buy new software before fixing the process.", "استخدمها عندما يريد عميل شراء برنامج جديد قبل إصلاح العملية."],
    example2: ["Let's start with a shared spreadsheet. We can add a new tool later.", "لنبدأ بجدول بيانات مشترك. يمكننا إضافة أداة جديدة لاحقا."] },
  "operations-8": {
    usage: ["Use these ideas when a founder asks you to automate everything from day one.", "استخدم هذه الأفكار عندما يطلب منك مؤسس أتمتة كل شيء من اليوم الأول."],
    example2: ["Once the process works for a month, we will automate the reminders.", "بعد أن تنجح العملية لمدة شهر، سنؤتمت التذكيرات."] },

  // ---------------- Team & hiring ----------------
  "team-0": {
    usage: ["Use these ideas when a founder says hiring never works for them.", "استخدم هذه الأفكار عندما يقول مؤسس إن التوظيف لا ينجح معه أبدا."],
    example2: ["Before we hire, let's write the role and the training plan.", "قبل أن نوظّف، لنكتب الدور وخطة التدريب."] },
  "team-1": {
    usage: ["Use it when you give a task and its result to someone else.", "استخدمها عندما تعطي مهمة ونتيجتها لشخص آخر."],
    example2: ["This month, try to delegate the weekly client report to Amira.", "هذا الشهر، حاول أن تفوّض التقرير الأسبوعي للعملاء إلى أميرة."] },
  "team-2": { gap: "hiring",
    usage: ["Use it when a founder is about to hire and has no clear plan for the role.", "استخدمها عندما يكون مؤسس على وشك التوظيف دون خطة واضحة للدور."],
    example2: ["Can you list the five tasks your new assistant will own first?", "هل يمكنك أن تسرد المهام الخمس التي سيتولاها مساعدك الجديد أولا؟"] },
  "team-3": {
    usage: ["Use it for the person who runs the daily work so the founder doesn't have to.", "استخدمها للشخص الذي يدير العمل اليومي حتى لا يضطر المؤسس إلى ذلك."],
    example2: ["Your operations manager will run the Monday meeting from now on.", "سيدير مدير العمليات لديك اجتماع الاثنين من الآن فصاعدا."] },
  "team-4": {
    usage: ["Use these ideas when you help a founder hand over a task clearly.", "استخدم هذه الأفكار عندما تساعد مؤسسا على تسليم مهمة بوضوح."],
    example2: ["Here is an example of a finished report, and it's due every Friday at noon.", "إليك مثالا لتقرير مكتمل، وموعد تسليمه كل يوم جمعة عند الظهر."] },
  "team-5": { gap: "result",
    usage: ["Use it when a founder delegates but still checks every small detail.", "استخدمها عندما يفوّض مؤسس لكنه ما زال يتحقق من كل تفصيل صغير."],
    example2: ["You own the result now. Tell me if you need anything from me.", "أنت مسؤول عن النتيجة الآن. أخبرني إذا احتجت أي شيء مني."] },
  "team-6": {
    usage: ["Use it when a person fully owns a task or a result, without being pushed.", "استخدمها عندما يتحمل شخص مسؤولية مهمة أو نتيجة بالكامل دون أن يُدفع إلى ذلك."],
    example2: ["Karim took ownership of client onboarding in his first month.", "تحمّل كريم مسؤولية إدماج العملاء الجدد في شهره الأول."] },
  "team-7": { gap: "feedback",
    usage: ["Use it when you explain why the team doesn't take decisions alone.", "استخدمها عندما تشرح لماذا لا يتخذ الفريق القرارات وحده."],
    example2: ["Good job on the proposal. Next time, let's send it one day earlier.", "عمل جيد في العرض. في المرة القادمة، لنرسله قبل يوم."] },
  "team-8": {
    usage: ["Use these ideas when you describe the kind of team a founder should build.", "استخدم هذه الأفكار عندما تصف نوع الفريق الذي يجب أن يبنيه المؤسس."],
    example2: ["Everyone on the team knows their goals and how their work is measured.", "كل شخص في الفريق يعرف أهدافه وكيف يُقاس عمله."] },

  // ---------------- Clients ----------------
  "clients-0": { gap: "confirm",
    usage: ["Use it when you explain how you organize client meetings.", "استخدمها عندما تشرح كيف تنظّم اجتماعات العملاء."],
    example2: ["Confirming our call tomorrow at 3:00 pm London time. Here is the link.", "أؤكد مكالمتنا غدا الساعة الثالثة مساء بتوقيت لندن. إليك الرابط."] },
  "clients-1": {
    usage: ["Use it for what the client thinks will happen: results, timing and who does what.", "استخدمها لما يتوقع العميل حدوثه: النتائج والتوقيت ومن يفعل ماذا."],
    example2: ["Let's agree on expectations: we send updates every Friday.", "لنتفق على التوقعات: نرسل التحديثات كل يوم جمعة."] },
  "clients-2": {
    usage: ["Use these ideas when you explain why short regular updates matter.", "استخدم هذه الأفكار عندما تشرح لماذا تهم التحديثات القصيرة المنتظمة."],
    example2: ["Quick Friday update: everything is on track for next week.", "تحديث الجمعة السريع: كل شيء يسير حسب الخطة للأسبوع القادم."] },
  "clients-3": { gap: "apologize",
    usage: ["Use it when you need to apologize to a client for a real mistake.", "استخدمها عندما تحتاج إلى الاعتذار لعميل عن خطأ حقيقي."],
    example2: ["You're right, I sent the wrong file. Here is the correct one.", "معك حق، أرسلت الملف الخطأ. إليك الملف الصحيح."] },
  "clients-4": {
    usage: ["Use it for a few sentences a happy client writes about working with you.", "استخدمها لبضع جمل يكتبها عميل راضٍ عن تجربة العمل معك."],
    example2: ["Would you be open to writing a two-line testimonial for our website?", "هل تمانع في كتابة شهادة من سطرين لموقعنا؟"] },
  "clients-5": {
    usage: ["Use these ideas when a client is unhappy or angry with your work.", "استخدم هذه الأفكار عندما يكون عميل غير راضٍ أو غاضبا من عملك."],
    example2: ["Thank you for telling me. We will fix it and send the new version by Thursday.", "شكرا لأنك أخبرتني. سنصلح ذلك ونرسل النسخة الجديدة بحلول يوم الخميس."] },
  "clients-6": { gap: "politely",
    usage: ["Use it when a client asks for a service you don't offer.", "استخدمها عندما يطلب عميل خدمة لا تقدمها."],
    example2: ["Website design is outside what we do, but I can recommend someone great.", "تصميم المواقع خارج نطاق عملنا، لكن يمكنني أن أوصي بشخص ممتاز."] },
  "clients-7": {
    usage: ["Use it when a client introduces you to another person who might need your help.", "استخدمها عندما يعرّفك عميل على شخص آخر قد يحتاج إلى مساعدتك."],
    example2: ["Thank you for the referral. I'll contact James this week.", "شكرا على التوصية. سأتواصل مع جيمس هذا الأسبوع."] },
  "clients-8": {
    usage: ["Use these ideas at the end of a project, when you review results and ask for a testimonial.", "استخدم هذه الأفكار في نهاية المشروع، عندما تراجع النتائج وتطلب شهادة."],
    example2: ["Before the project ends, let's look back at the results together.", "قبل أن ينتهي المشروع، لنراجع النتائج معا."] },

  // ---------------- Founder freedom ----------------
  "founder-0": { gap: "consultancies",
    usage: ["Use it when someone asks you what Liftora does.", "استخدمها عندما يسألك شخص ماذا تفعل ليفتورا."],
    example2: ["I work at Liftora. We help founders step out of daily operations.", "أعمل في ليفتورا. نساعد المؤسسين على الخروج من العمليات اليومية."] },
  "founder-1": {
    usage: ["Use these ideas when you explain why Liftora exists.", "استخدم هذه الأفكار عندما تشرح لماذا وُجدت ليفتورا."],
    example2: ["You started the company for freedom. Let's build a business that gives it back to you.", "بدأت الشركة من أجل الحرية. لنبنِ شركة تعيدها إليك."] },
  "founder-2": {
    usage: ["Use it for a business that can grow without the work growing at the same speed.", "استخدمها لشركة تستطيع النمو دون أن يزيد العمل بنفس السرعة."],
    example2: ["With clear processes, your agency becomes scalable.", "مع عمليات واضحة، تصبح وكالتك قابلة للتوسع."] },
  "founder-3": { gap: "job",
    usage: ["Use it to start a conversation about how much a business depends on its founder.", "استخدمها لبدء محادثة حول مدى اعتماد الشركة على مؤسسها."],
    example2: ["If you stop working tomorrow, does the business stop too?", "إذا توقفت عن العمل غدا، هل تتوقف الشركة أيضا؟"] },
  "founder-4": {
    usage: ["Use it for the deep tiredness that comes from working too much for too long.", "استخدمها للتعب الشديد الذي يأتي من العمل كثيرا لفترة طويلة."],
    example2: ["Working seventy hours a week is a fast road to burnout.", "العمل سبعين ساعة في الأسبوع طريق سريع إلى الاحتراق الوظيفي."] },
  "founder-5": {
    usage: ["Use these ideas when you describe the result a founder can expect.", "استخدم هذه الأفكار عندما تصف النتيجة التي يمكن أن يتوقعها المؤسس."],
    example2: ["Imagine your next holiday without opening your laptop once.", "تخيّل عطلتك القادمة دون أن تفتح حاسوبك ولو مرة واحدة."] },
  "founder-6": { gap: "goal",
    usage: ["Use it when a founder asks if the results will last after the project ends.", "استخدمها عندما يسأل مؤسس إن كانت النتائج ستستمر بعد نهاية المشروع."],
    example2: ["The changes stay after we leave, because your team owns them.", "التغييرات تبقى بعد مغادرتنا، لأن فريقك هو المسؤول عنها."] },
  "founder-7": {
    usage: ["Use it when one action creates much more value than the time it takes.", "استخدمها عندما يصنع عمل واحد قيمة أكبر بكثير من الوقت الذي يستغرقه."],
    example2: ["One good hire gives you more leverage than ten extra hours of work.", "توظيف جيد واحد يمنحك تأثيرا أكبر من عشر ساعات عمل إضافية."] },
  "founder-8": {
    usage: ["Use these ideas when a founder thinks about selling the company or bringing in investors.", "استخدم هذه الأفكار عندما يفكر مؤسس في بيع الشركة أو جلب مستثمرين."],
    example2: ["Buyers pay more for a company that runs without its founder.", "يدفع المشترون أكثر مقابل شركة تعمل من دون مؤسسها."] },
};
