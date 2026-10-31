// =====================================================
//  THE LESSONS: Liftora business English
//  Each topic mixes 3 kinds of practice:
//    type "word"      -> one hard word (+ example sentence)
//    type "sentence"  -> one long sentence
//    type "paragraph" -> a long paragraph
//  "alt"   = other correct answers (Translate mode)
//  "words" = key words shown under the card
// =====================================================
const TOPICS = [
  {
    id: "outreach", en: "Outreach", ar: "التواصل الأول",
    items: [
      { type: "word", ar: "التواصل مع العملاء المحتملين", en: "outreach",
        ex: "Our outreach on LinkedIn brings us most of our first conversations.",
        exAr: "تواصلنا عبر لينكدإن يجلب لنا معظم محادثاتنا الأولى." },
      { type: "sentence", ar: "قبل أن أرسل طلب تواصل، أقرأ ملف المؤسس وآخر ثلاثة منشورات له، حتى تبدو رسالتي شخصية ومناسبة.",
        en: "Before I send a connection request, I read the founder's profile and their last three posts, so my message feels personal and relevant." },
      { type: "paragraph",
        ar: "كل صباح، أبدأ يومي بالبحث عن مؤسسين يناسبون صورة عميلنا المثالي. عادة يديرون شركة تبيع للشركات أو شركة استشارات فيها من عشرة إلى خمسين موظفا، وما زالوا يتولون المبيعات والتنفيذ ومعظم القرارات بأنفسهم. أدوّن ما ينشرونه، والمشاكل التي يذكرونها، وحجم فريقهم. هذا البحث يأخذ وقتا، لكنه السبب في أن رسائلنا تحصل على ردود بدلا من أن يتم تجاهلها.",
        en: "Every morning, I start my day by looking for founders who fit our ideal client profile. They usually run a B2B company or a consultancy with ten to fifty employees, and they still handle sales, delivery, and most decisions themselves. I write down what they post about, what problems they mention, and how big their team is. This research takes time, but it is the reason our messages get replies instead of being ignored.",
        words: [["ideal client profile", "صورة العميل المثالي"], ["handle", "يتولى"], ["research", "بحث"], ["ignored", "يتم تجاهله"]] },
      { type: "word", ar: "مخصّص", en: "personalized",
        ex: "A personalized message gets more replies than a copied one.",
        exAr: "الرسالة المخصّصة تحصل على ردود أكثر من الرسالة المنسوخة." },
      { type: "sentence", ar: "الرسالة الأولى الجيدة قصيرة، وتتحدث عن مشكلة المؤسس، وتنتهي بسؤال واحد بسيط يسهل الإجابة عنه.",
        en: "A good first message is short, talks about the founder's problem, and ends with one simple question that is easy to answer." },
      { type: "paragraph",
        ar: "عندما يقبل مؤسس طلب التواصل، لا أرسل له عرض بيع مباشرة. أولا، أشكره وأطرح سؤالا واحدا عن عمله، مثلا كم ساعة في الأسبوع ما زال يقضيها في العمل مع العملاء. إذا أجاب، أستمع بعناية وأرد على ما قاله فعلا. هدف المحادثة الأولى ليس البيع، بل فهم وضعه وكسب ثقته.",
        en: "When a founder accepts my connection request, I do not send a sales pitch right away. First, I thank them and ask one question about their business, for example how many hours a week they still spend on client work. If they answer, I listen carefully and reply to what they actually said. The goal of the first conversation is not to sell. The goal is to understand their situation and earn their trust.",
        words: [["sales pitch", "عرض بيع"], ["right away", "مباشرة"], ["earn their trust", "يكسب ثقتهم"]] },
      { type: "word", ar: "رسالة متابعة", en: "follow-up",
        ex: "Most replies come after the second follow-up, not the first message.",
        exAr: "معظم الردود تأتي بعد رسالة المتابعة الثانية، وليس بعد الرسالة الأولى." },
      { type: "sentence", ar: "إذا لم يرد المؤسس بعد ثلاث رسائل، أتوقف عن الكتابة وأترك رسالة مهذبة تقول إن الباب ما زال مفتوحا.",
        en: "If a founder does not reply after three messages, I stop writing and leave a polite note that the door is still open.",
        alt: ["If a founder doesn't reply after three messages, I stop writing and leave a polite note that the door is still open"] },
      { type: "paragraph",
        ar: "ليس كل مؤسس سيكون مهتما، وهذا أمر طبيعي تماما. بعضهم مشغول جدا، وبعضهم يعمل بالفعل مع جهة أخرى، وبعضهم ببساطة لا يعاني من هذه المشكلة بعد. عندما يرفض مؤسس، أشكره وأحافظ على علاقة ودية معه. كثير من الناس الذين يرفضون اليوم يعودون بعد أشهر، عندما تكبر شركتهم ويصبح الضغط أكبر من أن يتحملوه وحدهم.",
        en: "Not every founder will be interested, and that is completely normal. Some are too busy, some already work with someone else, and some simply do not have this problem yet. When a founder says no, I thank them and keep the relationship friendly. Many people who say no today come back months later, when their company grows and the pressure becomes too much to handle alone.",
        words: [["completely", "تماما"], ["relationship", "علاقة"], ["pressure", "ضغط"]] },
    ],
  },
  {
    id: "sales", en: "Sales", ar: "المبيعات",
    items: [
      { type: "sentence", ar: "خلال المكالمة، أترك المؤسس يتحدث معظم الوقت، وأدوّن ملاحظات عن كل مشكلة يذكرها.",
        en: "During the call, I let the founder talk most of the time, and I take notes on every problem they mention." },
      { type: "word", ar: "مكالمة استكشافية", en: "discovery call",
        ex: "In the discovery call, we ask questions to understand the founder's biggest problem.",
        exAr: "في المكالمة الاستكشافية، نطرح أسئلة لفهم أكبر مشكلة لدى المؤسس." },
      { type: "paragraph",
        ar: "المكالمة الاستكشافية الجيدة تتبع هيكلا بسيطا. أولا، نطلب من المؤسس أن يصف أسبوعا عاديا: ماذا يفعل كل يوم، وما القرارات التي تصل إليه، وأين يضيع أكثر وقت. ثم نسأله ماذا سيحدث لو أخذ عطلة لمدة أسبوعين. الإجابة عادة تكشف لنا المشكلة الحقيقية بسرعة كبيرة. في نهاية المكالمة، نشرح كيف يمكننا المساعدة ونتفق على الخطوة التالية معا.",
        en: "A good discovery call follows a simple structure. First, we ask the founder to describe a normal week: what they do every day, which decisions come to them, and where they lose the most time. Then we ask what would happen if they took a two-week holiday. The answer usually shows us the real problem very quickly. At the end of the call, we explain how we could help and agree on the next step together.",
        words: [["structure", "هيكل"], ["describe", "يصف"], ["holiday", "عطلة"], ["next step", "الخطوة التالية"]] },
      { type: "sentence", ar: "لا نقدم عرضا إلا عندما نكون متأكدين أننا نستطيع المساعدة فعلا، لأن العميل غير المناسب أسوأ من عدم وجود عميل.",
        en: "We only make an offer when we are sure we can really help, because a bad client is worse than no client." },
      { type: "word", ar: "عرض / مقترح", en: "proposal",
        ex: "We send the proposal within two days after the call.",
        exAr: "نرسل العرض خلال يومين بعد المكالمة." },
      { type: "paragraph",
        ar: "كثير من المؤسسين يخافون من التخلي عن السيطرة. لقد بنوا الشركة بأيديهم، ويعتقدون أن لا أحد غيرهم يستطيع القيام بالعمل بنفس الجودة. في محادثات البيع، لا نقول لهم أبدا إنهم مخطئون. بدلا من ذلك، نريهم أن نظاما واضحا يمكن أن يحمي الجودة التي يهتمون بها، وأن فريقهم يستطيع أن يتعلم تحقيق نفس النتائج دون وجودهم في كل اجتماع.",
        en: "Many founders are afraid to let go of control. They have built the company with their own hands, and they believe nobody else can do the work as well as they do. In sales conversations, we never tell them they are wrong. Instead, we show them that a clear system can protect the quality they care about, and that their team can learn to deliver the same results without them in every meeting.",
        words: [["let go of control", "يتخلى عن السيطرة"], ["protect", "يحمي"], ["quality", "جودة"]] },
      { type: "word", ar: "اعتراض", en: "objection",
        ex: "The most common objection is that the founder thinks nobody can do the work as well as they can.",
        exAr: "الاعتراض الأكثر شيوعا هو أن المؤسس يعتقد أن لا أحد يستطيع القيام بالعمل بنفس جودته." },
      { type: "sentence", ar: "عندما يسأل مؤسس عن السعر، أشرح أنه يعتمد على حجم الفريق وما يجب تغييره.",
        en: "When a founder asks about the price, I explain that it depends on the size of the team and what needs to change." },
      { type: "paragraph",
        ar: "بعد المكالمة، أرسل ملخصا قصيرا خلال أربع وعشرين ساعة. يتضمن المشاكل الرئيسية التي وصفها المؤسس، والنتيجة التي يريدها، والخطوة التالية التي اتفقنا عليها. إذا طلب عرضا، أتأكد من أنه يستخدم كلماته هو، لا كلماتنا. عندما يقرأ المؤسس العرض ويتعرف على وضعه الخاص، يصبح من الأسهل عليه بكثير أن يوافق.",
        en: "After the call, I send a short summary within twenty-four hours. It includes the main problems the founder described, the result they want, and the next step we agreed on. If they asked for a proposal, I make sure it uses their own words, not ours. When the founder reads the proposal and recognizes their own situation, it becomes much easier for them to say yes.",
        words: [["summary", "ملخص"], ["includes", "يتضمن"], ["recognizes", "يتعرف على"]] },
    ],
  },
  {
    id: "delivery", en: "Delivery", ar: "التنفيذ",
    items: [
      { type: "word", ar: "إدماج العميل الجديد", en: "onboarding",
        ex: "Onboarding a new client takes about two weeks.",
        exAr: "إدماج عميل جديد يستغرق حوالي أسبوعين." },
      { type: "paragraph",
        ar: "يبدأ عملنا مع عميل جديد بخريطة كاملة للشركة. نسرد كل مهمة يقوم بها المؤسس في شهر عادي، من الرد على رسائل العملاء إلى الموافقة على الفواتير واتخاذ قرارات التوظيف. ثم نصنف كل مهمة في ثلاث مجموعات: مهام يجب أن يحتفظ بها المؤسس، ومهام يمكن أن تنتقل إلى شخص في الفريق، ومهام يمكن أتمتتها. تصبح هذه الخريطة خطة المشروع بأكمله.",
        en: "Our work with a new client starts with a full map of the business. We list every task the founder does in a normal month, from answering client emails to approving invoices and making hiring decisions. Then we sort each task into three groups: tasks the founder should keep, tasks that can go to someone on the team, and tasks that can be automated. This map becomes the plan for the whole project.",
        words: [["approving", "الموافقة على"], ["sort", "يصنّف"], ["automated", "مؤتمت"]] },
      { type: "sentence", ar: "في الأسبوع الأول، نجري مقابلات مع المؤسس والفريق لإيجاد كل مهمة ما زالت تعتمد على المؤسس.",
        en: "In the first week, we interview the founder and the team to find every task that still depends on the founder." },
      { type: "word", ar: "ما يجب تسليمه (مُخرَج)", en: "deliverable",
        ex: "Each deliverable has an owner and a deadline.",
        exAr: "كل مُخرَج له مسؤول وموعد نهائي." },
      { type: "paragraph",
        ar: "كتابة العملية لا تكفي. العملية لا تنجح إلا عندما يستخدمها الفريق فعلا. لهذا، بعد أن نكتب كل عملية، ندرّب الشخص الذي سيكون مسؤولا عنها ونراقبه وهو ينجز المهمة مرتين أو ثلاثا. نسأله عما كان غير واضح ونحسّن الوثيقة معا. فقط عندما يستطيع الشخص إنجاز المهمة وحده، دون سؤال المؤسس، نعتبر العملية مكتملة.",
        en: "Writing a process is not enough. A process only works when the team actually uses it. That is why, after we write each process, we train the person who will own it and watch them do the task two or three times. We ask what was unclear and improve the document together. Only when the person can do the task alone, without asking the founder, do we mark the process as done.",
        words: [["enough", "كافٍ"], ["own", "يتحمل مسؤولية"], ["unclear", "غير واضح"]] },
      { type: "sentence", ar: "نكتب كل عملية مهمة خطوة بخطوة، حتى يتمكن أي شخص في الفريق من اتباعها دون سؤال المؤسس.",
        en: "We write every important process down step by step, so anyone on the team can follow it without asking the founder." },
      { type: "word", ar: "نقطة الاختناق (عنق الزجاجة)", en: "bottleneck",
        ex: "In most small companies, the founder is the biggest bottleneck.",
        exAr: "في معظم الشركات الصغيرة، المؤسس هو أكبر نقطة اختناق." },
      { type: "sentence", ar: "كل يوم جمعة، نرسل للعميل تحديثا قصيرا بما تم إنجازه، وما هو قيد التنفيذ، وما هو متوقف.",
        en: "Every Friday, we send the client a short update with what is done, what is in progress, and what is blocked." },
      { type: "paragraph",
        ar: "أحيانا لا يسير المشروع كما هو مخطط له. يغادر موظف أساسي، أو يكون العميل مشغولا جدا ولا يعطينا المعلومات التي نحتاجها، أو يتبين أن عملية ما أكثر تعقيدا مما توقعنا. عندما يحدث هذا، نخبر العميل مبكرا وبصدق. نشرح ما الذي تغيّر، وماذا يعني ذلك بالنسبة للجدول الزمني، وما الذي نقترح فعله بعد ذلك. نادرا ما يغضب العملاء بسبب المشاكل، بل يغضبون بسبب المفاجآت.",
        en: "Sometimes a project does not go as planned. A key employee leaves, the client is too busy to give us the information we need, or a process turns out to be more complex than we expected. When this happens, we tell the client early and honestly. We explain what changed, what it means for the timeline, and what we suggest doing next. Clients rarely get angry about problems. They get angry about surprises.",
        words: [["key employee", "موظف أساسي"], ["turns out", "يتبيّن"], ["timeline", "الجدول الزمني"], ["rarely", "نادرا"]] },
    ],
  },
  {
    id: "operations", en: "Operations", ar: "العمليات والأنظمة",
    items: [
      { type: "sentence", ar: "النظام الجيد يجيب عن ثلاثة أسئلة: من يقوم بالمهمة، وكيف يقوم بها، وكيف نعرف أنها أُنجزت بشكل جيد.",
        en: "A good system answers three questions: who does the task, how they do it, and how we know it was done well." },
      { type: "paragraph",
        ar: "معظم الشركات الصغيرة ليست لديها مشكلة في العمليات، بل لديها مشكلة في الذاكرة. كل المعرفة المهمة موجودة في رأس المؤسس: كيف يُسعَّر مشروع، وكيف يُتحدَّث مع عميل صعب، وأي مورّد يمكن الاعتماد عليه. عندما لا يكون المؤسس متاحا، يضطر الفريق إلى التخمين أو الانتظار. مهمتنا هي نقل تلك المعرفة من رأس شخص واحد إلى وثائق بسيطة يستطيع الجميع إيجادها واستخدامها.",
        en: "Most small companies do not have a process problem. They have a memory problem. All the important knowledge lives in the founder's head: how to price a project, how to talk to a difficult client, which supplier is reliable. When the founder is not available, the team has to guess or wait. Our job is to move that knowledge out of one person's head and into simple documents that everyone can find and use.",
        words: [["knowledge", "معرفة"], ["reliable", "موثوق"], ["guess", "يخمّن"], ["available", "متاح"]] },
      { type: "word", ar: "سير العمل", en: "workflow",
        ex: "We designed a new workflow for handling client requests.",
        exAr: "صممنا سير عمل جديدا للتعامل مع طلبات العملاء." },
      { type: "sentence", ar: "بدلا من إرسال عشر رسائل يوميا إلى المؤسس، يستخدم الفريق الآن وثيقة مشتركة واحدة لمتابعة كل عميل.",
        en: "Instead of sending ten messages a day to the founder, the team now uses one shared document to track every client." },
      { type: "word", ar: "لوحة متابعة", en: "dashboard",
        ex: "The founder checks one dashboard every Monday instead of asking ten people.",
        exAr: "يتحقق المؤسس من لوحة متابعة واحدة كل يوم اثنين بدلا من سؤال عشرة أشخاص." },
      { type: "paragraph",
        ar: "كل يوم اثنين، كان المؤسس يقضي الصباح كله في سؤال الفريق عن آخر المستجدات. الآن يملأ الفريق لوحة متابعة بسيطة قبل الساعة التاسعة صباح يوم الاثنين. تُظهر اللوحة حالة كل عميل، والمال الذي دخل الأسبوع الماضي، وأي مشكلة تحتاج إلى قرار. يقرؤها المؤسس في عشر دقائق ولا ينضم إلى اجتماع إلا عندما يحتاج أمر ما فعلا إلى انتباهه. هذا التغيير الواحد أعاد له أربع ساعات كل أسبوع.",
        en: "Every Monday, the founder used to spend the whole morning asking the team for updates. Now the team fills in a simple dashboard before Monday at nine. It shows the status of every client, the money that came in last week, and any problem that needs a decision. The founder reads it in ten minutes and only joins a meeting when something really needs their attention. This one change gave them back four hours every week.",
        words: [["used to", "كان يفعل (في الماضي)"], ["fills in", "يملأ"], ["attention", "انتباه"]] },
      { type: "word", ar: "المساءلة / تحمّل المسؤولية", en: "accountability",
        ex: "Clear roles create accountability in the team.",
        exAr: "الأدوار الواضحة تخلق المساءلة داخل الفريق." },
      { type: "sentence", ar: "نفضّل الأدوات البسيطة التي يعرفها الفريق مسبقا، لأن الأداة المعقدة التي لا يستخدمها أحد أسوأ من عدم وجود أداة.",
        en: "We prefer simple tools that the team already knows, because a complicated tool that nobody uses is worse than no tool." },
      { type: "paragraph",
        ar: "الأتمتة مفيدة، لكنها ليست الخطوة الأولى أبدا. إذا كانت العملية غير واضحة، فإن أتمتتها تجعل الأخطاء تحدث بشكل أسرع فقط. لذلك نبدأ دائما بجعل العملية بسيطة وواضحة، ثم نختبرها مع أشخاص حقيقيين لبضعة أسابيع. بعد ذلك فقط نبحث عن المهام التي يمكن لأداة أن تقوم بها تلقائيا، مثل إرسال التذكيرات، وإنشاء الفواتير، أو نقل المعلومات بين التطبيقات.",
        en: "Automation is useful, but it is never the first step. If a process is unclear, automating it only makes the mistakes happen faster. So we always start by making the process simple and clear, then we test it with real people for a few weeks. Only after that do we look for tasks that a tool can do automatically, like sending reminders, creating invoices, or moving information between apps.",
        words: [["automation", "أتمتة"], ["test", "يختبر"], ["automatically", "تلقائيا"]] },
    ],
  },
  {
    id: "team", en: "Team & hiring", ar: "الفريق والتوظيف",
    items: [
      { type: "paragraph",
        ar: "كثير من المؤسسين يوظّفون متأخرين جدا. ينتظرون حتى يصبحوا منهكين تماما، ثم يوظّفون على عجل. يصل الشخص الجديد، لكن لا أحد لديه وقت لتدريبه، فيعتقد المؤسس أن القيام بالعمل وحده أسرع. بعد بضعة أشهر، يغادر الموظف الجديد، ويقرر المؤسس أن التوظيف لا ينجح. نساعد المؤسسين على كسر هذه الحلقة بتجهيز الدور والعمليات والتدريب قبل أن يبدأ الشخص.",
        en: "Many founders hire too late. They wait until they are completely exhausted, and then they hire in a hurry. The new person arrives, but nobody has time to train them, so the founder thinks it is faster to do the work alone. A few months later, the new hire leaves, and the founder decides that hiring does not work. We help founders break this cycle by preparing the role, the processes, and the training before the person starts.",
        words: [["exhausted", "منهك"], ["in a hurry", "على عجل"], ["new hire", "الموظف الجديد"], ["cycle", "حلقة"]] },
      { type: "word", ar: "يفوّض", en: "delegate",
        ex: "Founders who learn to delegate can finally focus on growth.",
        exAr: "المؤسسون الذين يتعلمون التفويض يستطيعون أخيرا التركيز على النمو." },
      { type: "sentence", ar: "قبل توظيف شخص جديد، يجب على المؤسس أن يكتب بدقة المهام التي سيتولى هذا الشخص مسؤوليتها في أول تسعين يوما.",
        en: "Before hiring a new person, the founder should write down exactly which tasks this person will own in the first ninety days." },
      { type: "word", ar: "مدير العمليات", en: "operations manager",
        ex: "Hiring an operations manager was the turning point for the company.",
        exAr: "كان توظيف مدير العمليات نقطة التحول بالنسبة للشركة." },
      { type: "paragraph",
        ar: "التفويض يفشل عندما لا يكون واضحا. إذا قال المؤسس: 'من فضلك اهتم بتقارير العملاء'، فإن عضو الفريق لا يعرف كيف يبدو التقرير الجيد، ولا متى يجب تسليمه، ولا من يجب أن يراجعه. التسليم الواضح يتضمن مثالا لنتيجة مكتملة، وموعدا نهائيا، والقرارات التي يستطيع الشخص اتخاذها وحده. بهذه الأمور الثلاثة، يستطيع معظم الناس أن يفعلوا أكثر بكثير مما توقعه المؤسس.",
        en: "Delegation fails when it is not clear. If the founder says, 'Please take care of the client reports,' the team member does not know what a good report looks like, when it is due, or who should check it. A clear handover includes an example of a finished result, a deadline, and the decisions the person can make alone. With these three things, most people can do much more than the founder expected.",
        words: [["handover", "التسليم"], ["due", "موعد التسليم"], ["expected", "توقّع"]] },
      { type: "sentence", ar: "تفويض مهمة يعني إعطاء النتيجة لشخص آخر، وليس العمل فقط، ثم الثقة به ليحققها.",
        en: "Delegating a task means giving the result to someone else, not only the work, and then trusting them to deliver it." },
      { type: "word", ar: "تحمّل المسؤولية الكاملة", en: "ownership",
        ex: "We want every team member to take ownership of their results.",
        exAr: "نريد أن يتحمل كل عضو في الفريق مسؤولية نتائجه." },
      { type: "sentence", ar: "الفريق الذي يخاف من ارتكاب الأخطاء سينتظر المؤسس دائما، لذلك نعلّم المؤسسين تقديم الملاحظات دون لوم.",
        en: "A team that is afraid to make mistakes will always wait for the founder, so we teach founders to give feedback without blame." },
      { type: "paragraph",
        ar: "أفضل الفرق التي رأيناها ليست تلك التي تضم أكثر الأشخاص موهبة، بل تلك التي يعرف فيها الجميع دورهم وأهدافهم وكيف يُقاس عملهم. في هذه الفرق، يحل الناس المشاكل الصغيرة بأنفسهم ولا يرفعون إلى المؤسس إلا القرارات الكبيرة. يتوقف المؤسس عن أن يكون الشخص الذي يجيب عن كل سؤال، ويصبح الشخص الذي يحدد الاتجاه للشركة بأكملها.",
        en: "The best teams we have seen are not the ones with the most talented people. They are the ones where everyone knows their role, their goals, and how their work is measured. In these teams, people solve small problems themselves and only bring big decisions to the founder. The founder stops being the person who answers every question and becomes the person who sets the direction for the whole company.",
        words: [["talented", "موهوب"], ["measured", "يُقاس"], ["direction", "اتجاه"]] },
    ],
  },
  {
    id: "clients", en: "Clients", ar: "العملاء",
    items: [
      { type: "sentence", ar: "أؤكد الاجتماعات دائما في اليوم السابق، مع ذكر الوقت حسب المنطقة الزمنية للعميل ورابط الانضمام.",
        en: "I always confirm meetings the day before, with the time in the client's time zone and the link to join." },
      { type: "word", ar: "التوقعات", en: "expectations",
        ex: "We set clear expectations in the first meeting, so there are no surprises later.",
        exAr: "نحدد توقعات واضحة في الاجتماع الأول، حتى لا تكون هناك مفاجآت لاحقا." },
      { type: "paragraph",
        ar: "التواصل الواضح جزء من الخدمة التي نبيعها. عندما لا يسمع العملاء منا، يبدؤون بالقلق، حتى لو كان العمل يسير بشكل جيد. لهذا نرسل تحديثا قصيرا كل يوم جمعة، حتى عندما لا يكون هناك الكثير لنقوله. رسالة مثل 'كل شيء يسير حسب الخطة، والأسبوع القادم سننهي عملية التوظيف' تستغرق دقيقة واحدة لكتابتها، لكنها توفر على العميل ساعات من التوتر.",
        en: "Clear communication is part of the service we sell. When clients do not hear from us, they start to worry, even if the work is going well. That is why we send a short update every Friday, even when there is not much to say. A message like 'Everything is on track, and next week we will finish the hiring process' takes one minute to write, but it saves hours of stress for the client.",
        words: [["worry", "يقلق"], ["on track", "حسب الخطة"], ["stress", "توتر"]] },
      { type: "sentence", ar: "عندما أرتكب خطأ، أقوله بوضوح، وأعتذر مرة واحدة، وأشرح ما سأفعله حتى لا يتكرر.",
        en: "When I make a mistake, I say it clearly, apologize once, and explain what I will do so it does not happen again.",
        alt: ["When I make a mistake, I say it clearly, apologize once, and explain what I will do so it doesn't happen again"] },
      { type: "word", ar: "شهادة عميل", en: "testimonial",
        ex: "A short testimonial from a happy client helps new founders trust us.",
        exAr: "شهادة قصيرة من عميل راضٍ تساعد المؤسسين الجدد على الثقة بنا." },
      { type: "paragraph",
        ar: "عندما يكون العميل غير راضٍ، فإن أسوأ ما يمكننا فعله هو الدفاع عن أنفسنا فورا. أولا، نستمع ونتأكد من أننا نفهم بالضبط ما الذي حدث خطأ من وجهة نظره. ثم نشكره على إخبارنا، ونشرح ما سنغيّره، ونحدد تاريخا واضحا للإصلاح. معظم العملاء لا يتوقعون منا أن نكون مثاليين، بل يتوقعون أن نتحمل المسؤولية ونتصرف بسرعة.",
        en: "When a client is unhappy, the worst thing we can do is defend ourselves immediately. First, we listen and make sure we understand exactly what went wrong from their point of view. Then we thank them for telling us, explain what we will change, and give a clear date for the fix. Most clients do not expect us to be perfect. They expect us to take responsibility and act quickly.",
        words: [["defend", "يدافع"], ["point of view", "وجهة نظر"], ["take responsibility", "يتحمل المسؤولية"]] },
      { type: "sentence", ar: "إذا طلب عميل شيئا خارج نطاق عملنا، أرفض بأدب وأقترح شخصا يستطيع المساعدة.",
        en: "If a client asks for something outside our work, I say no politely and suggest someone who can help." },
      { type: "word", ar: "توصية (إحالة عميل)", en: "referral",
        ex: "Most of our best clients came from a referral.",
        exAr: "معظم أفضل عملائنا جاؤوا عن طريق توصية." },
      { type: "paragraph",
        ar: "في نهاية المشروع، ننظم مكالمة أخيرة مع المؤسس لمراجعة النتائج. نقارن عدد الساعات التي كان يعملها قبل وبعد، والمهام التي لم يعد يقوم بها، وما يتولاه الفريق الآن وحده. إذا كان المؤسس راضيا، نطلب منه شهادة قصيرة ونسأله إن كان يعرف مؤسسا آخر لديه نفس المشكلة. العملاء الراضون هم أفضل مصدر لأعمال جديدة.",
        en: "At the end of a project, we organize a final call with the founder to look back at the results. We compare how many hours they worked before and after, which tasks they no longer do, and what the team now handles alone. If the founder is happy, we ask for a short testimonial and whether they know another founder with the same problem. Happy clients are the best source of new business.",
        words: [["look back at", "يراجع"], ["compare", "يقارن"], ["no longer", "لم يعد"], ["source", "مصدر"]] },
    ],
  },
  {
    id: "founder", en: "Founder freedom", ar: "حرية المؤسس",
    items: [
      { type: "sentence", ar: "تساعد ليفتورا مؤسسي الشركات التي تبيع للشركات وشركات الاستشارات على بناء شركة تعمل من دونهم.",
        en: "Liftora helps founders of B2B companies and consultancies build a business that runs without them." },
      { type: "paragraph",
        ar: "معظم المؤسسين يبدؤون شركاتهم لأنهم يريدون الحرية. يريدون اختيار مشاريعهم وعملائهم ووقتهم. لكن بعد بضع سنوات، يشعر كثير منهم بأنهم محاصرون. تنمو الشركة، لكن كل قرار ما زال يمر عبرهم، ويعملون ساعات أكثر مما عملوا في أي وقت كموظفين. وُجدت ليفتورا لحل هذه المشكلة بالضبط: لمساعدة المؤسسين على بناء شركة تخدم حياتهم، وليس العكس.",
        en: "Most founders start their company because they want freedom. They want to choose their projects, their clients, and their time. But after a few years, many of them feel trapped. The company grows, but every decision still goes through them, and they work more hours than they ever did as employees. Liftora exists to solve exactly this problem: to help founders build a business that serves their life, not the other way around.",
        words: [["freedom", "حرية"], ["trapped", "محاصر"], ["the other way around", "العكس"]] },
      { type: "word", ar: "قابل للتوسع", en: "scalable",
        ex: "A business that depends on one person is not scalable.",
        exAr: "الشركة التي تعتمد على شخص واحد ليست قابلة للتوسع." },
      { type: "sentence", ar: "الشركة التي لا تستطيع العمل لمدة أسبوعين من دون مؤسسها ليست شركة حقيقية بعد. إنها وظيفة.",
        en: "A company that cannot run for two weeks without its founder is not really a company yet. It is a job.",
        alt: ["A company that can't run for two weeks without its founder is not really a company yet. It's a job"] },
      { type: "word", ar: "الإنهاك (الاحتراق الوظيفي)", en: "burnout",
        ex: "Many founders reach burnout before they ask for help.",
        exAr: "كثير من المؤسسين يصلون إلى الاحتراق الوظيفي قبل أن يطلبوا المساعدة." },
      { type: "paragraph",
        ar: "تخيّل مؤسسا لم يأخذ عطلة حقيقية منذ ثلاث سنوات. حتى في عطلات نهاية الأسبوع، يرد على رسائل العملاء ويصلح مشاكل صغيرة للفريق. بعد ستة أشهر من العمل معنا، يذهب المؤسس نفسه في رحلة لمدة أسبوعين ولا يفتح حاسوبه ولو مرة واحدة. يتولى الفريق أمر العملاء، وتُرسل التقارير في وقتها، وتحقق الشركة أفضل شهر لها في السنة. هذه هي النتيجة التي نعمل من أجلها.",
        en: "Imagine a founder who has not taken a real holiday in three years. Even on weekends, they answer client messages and fix small problems for the team. After six months of working with us, the same founder goes on a two-week trip and does not open their laptop once. The team handles the clients, the reports go out on time, and the company has its best month of the year. That is the result we work for.",
        words: [["imagine", "تخيّل"], ["weekends", "عطلات نهاية الأسبوع"], ["on time", "في الوقت المحدد"]] },
      { type: "sentence", ar: "هدفنا ليس أن يعمل المؤسسون أقل لمدة شهر واحد، بل أن نعيد إليهم وقتهم بشكل دائم.",
        en: "Our goal is not to make founders work less for one month, but to give them back their time for good." },
      { type: "word", ar: "رافعة (تأثير مضاعف)", en: "leverage",
        ex: "Good systems give founders leverage, so one hour of their time creates more value.",
        exAr: "الأنظمة الجيدة تمنح المؤسسين تأثيرا مضاعفا، فتصنع ساعة واحدة من وقتهم قيمة أكبر." },
      { type: "paragraph",
        ar: "الشركة التي تعمل من دون مؤسسها تساوي أيضا أكثر بكثير. يعرف المستثمرون والمشترون أنه إذا كان كل شيء يعتمد على شخص واحد، فإن الشركة محفوفة بالمخاطر. عندما تكون المعرفة مكتوبة، والفريق مدرّبا، والأرقام واضحة، تصبح الشركة مستقرة وأسهل في النمو أو البيع. لذلك عملنا لا يعيد للمؤسسين وقتهم فقط، بل يزيد أيضا من قيمة كل ما بنوه.",
        en: "A business that runs without its founder is also worth much more. Investors and buyers know that if everything depends on one person, the company is risky. When the knowledge is written down, the team is trained, and the numbers are clear, the business becomes stable and easier to grow or sell. So our work does not only give founders their time back. It also increases the value of everything they have built.",
        words: [["worth", "يساوي (قيمة)"], ["risky", "محفوف بالمخاطر"], ["stable", "مستقر"], ["value", "قيمة"]] },
    ],
  },
];

// Add the extra fields from extras.js to each item:
//   usage {en, ar}, example2 {en, ar}, gap (key word for Gap mode)
if (typeof ITEM_EXTRAS !== "undefined") {
  TOPICS.forEach((t) => t.items.forEach((it, i) => {
    const x = ITEM_EXTRAS[t.id + "-" + i];
    if (!x) return;
    if (x.usage) it.usage = { en: x.usage[0], ar: x.usage[1] };
    if (x.example2) it.example2 = { en: x.example2[0], ar: x.example2[1] };
    if (x.gap) it.gap = x.gap;
  }));
}

const TYPE_LABEL = { word: "Word", sentence: "Sentence", paragraph: "Paragraph" };

const MODE_HELP = {
  copy: ["Read the Arabic.", "Copy the English.", "اقرأ العربية وانسخ الإنجليزية"],
  challenge: ["The English is hidden.", "Write it from memory.", "اكتبها من ذاكرتك"],
  listen: ["Listen carefully.", "Write what you hear.", "استمع واكتب ما تسمعه"],
  gap: ["One word is missing.", "Type only that word.", "اكتب الكلمة الناقصة فقط"],
  speak: ["Read the English out loud.", "Press the mic and speak.", "اضغط على الميكروفون واقرأ بصوت عال"],
};

const PLACEHOLDER = {
  copy: "Type in English…",
  challenge: "Type in English…",
  listen: "Type what you hear…",
  gap: "Type the missing word…",
  speak: "",
};

// Speech recognition (Speak mode). Missing in Firefox and some browsers.
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;

const SUMMARY_EVERY = 10;     // show a summary after this many completed items
const WEAK_LEAVES_AFTER = 3;  // correct answers in a row to leave Review

// =====================================================
//  STATE
// =====================================================
let view = "mix";            // "mix", "mine", "review", "replay", or a topic number
let mixOrder = shuffledRefs();
let reviewOrder = [];        // weak item keys, most missed first
let replayList = [];         // missed item keys from the last session
let replayReturn = null;     // where to go back after replaying misses
let itemIndex = 0;
let mode = "copy";           // "copy", "challenge", "listen", "gap" or "speak"
let hint = 0;                // how much the hint shows
let solved = false;
let missedThisItem = false;  // already counted as a miss this time
let firstScore = null;       // score of the first try (for the session summary)
let gap = null;              // Gap mode: { text, ar, start, end, answer, type }

// For speed and accuracy (Copy mode)
let startTime = null;
let typedCount = 0;
let errorCount = 0;
let prevLength = 0;

// Speak mode
let recognition = null;
let recording = false;
let heardText = "";
let speechError = "";

// Saved in the browser
let done = new Set(load("lf-done", []));
let custom = load("be-custom", []);   // your own texts: { id, en, ar, reps }
let soundOn = load("be-sound", true);
let weak = load("lf-weak", {});       // key -> { miss, streak, last }
let daily = Object.assign({ goal: 15, days: {}, streak: 0, lastGoalDay: "" }, load("lf-daily", {}));
let session = newSession();

// =====================================================
//  PAGE ELEMENTS
// =====================================================
const $ = (id) => document.getElementById(id);
const cardEl = $("card");
const arabicEl = $("arabic");
const englishEl = $("english");
const typingEl = $("typing");
const feedbackEl = $("feedback");

// =====================================================
//  HELPERS
// =====================================================
function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage blocked: things just won't be saved
  }
}

// Every exercise from every topic, in a random order
function shuffledRefs() {
  const refs = [];
  TOPICS.forEach((t, ti) => t.items.forEach((_, ii) => refs.push({ t: ti, i: ii })));
  for (let k = refs.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [refs[k], refs[j]] = [refs[j], refs[k]];
  }
  return refs;
}

const isMine = () => view === "mine";
const isMix = () => view === "mix";
const isReview = () => view === "review";
const isReplay = () => view === "replay";
const isTopic = () => typeof view === "number";

// Word, sentence or paragraph? (for your own texts)
function typeOf(text) {
  const n = text.split(" ").length;
  return n === 1 ? "word" : n <= 30 ? "sentence" : "paragraph";
}

// ----- Items: every list (topic, Mix, My texts, Review, Replay) is a list of refs -----
// ref = { key, item, src, cid? }
function topicRef(t, i) {
  const tp = TOPICS[t];
  return { key: "lf-" + tp.id + "-" + i, item: tp.items[i], src: tp.en };
}

function mineRef(c) {
  return { key: "mine-" + c.id, item: { type: typeOf(c.en), en: c.en, ar: c.ar }, src: "Your text", cid: c.id };
}

function refFromKey(key) {
  if (key.startsWith("mine-")) {
    const c = custom.find((x) => "mine-" + x.id === key);
    return c ? mineRef(c) : null;
  }
  const m = /^lf-(.+)-(\d+)$/.exec(key);
  if (!m) return null;
  const t = TOPICS.findIndex((x) => x.id === m[1]);
  if (t < 0 || !TOPICS[t].items[Number(m[2])]) return null;
  return topicRef(t, Number(m[2]));
}

function list() {
  if (isMix()) return mixOrder.map((r) => topicRef(r.t, r.i));
  if (isMine()) return custom.map(mineRef);
  if (isReview()) return reviewOrder.map(refFromKey).filter(Boolean);
  if (isReplay()) return replayList.map(refFromKey).filter(Boolean);
  return TOPICS[view].items.map((_, i) => topicRef(view, i));
}

const ref = () => list()[itemIndex];
const item = () => ref().item;
const keyOf = (i) => list()[i].key;
const customOf = (r) => (r && r.cid ? custom.find((c) => c.id === r.cid) : null);

function viewInfo() {
  if (isMix()) return { en: "Mix", ar: "كل المواضيع بترتيب عشوائي" };
  if (isMine()) return { en: "My texts", ar: "نصوصي" };
  if (isReview()) return { en: "Review", ar: "راجع ما أخطأت فيه، الأكثر خطأ أولا" };
  if (isReplay()) return { en: "Replay misses", ar: "أعد التمارين التي أخطأت فيها" };
  return TOPICS[view];
}

// Clean pasted text: one line, simple quotes and dashes you can type
function cleanText(s) {
  return s
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

// Make text simple for comparing: small letters, no punctuation
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Same letter? (big/small letters are OK)
function sameChar(a, b) {
  const fix = (c) => c.toLowerCase().replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-");
  return fix(a) === fix(b);
}

function setFeedback(en, ar, bad) {
  feedbackEl.className = "feedback" + (bad ? " bad" : "");
  feedbackEl.innerHTML = "";
  if (en) {
    const a = document.createElement("span");
    a.textContent = en;
    feedbackEl.appendChild(a);
  }
  if (ar) {
    const b = document.createElement("span");
    b.className = "ar";
    b.textContent = ar;
    feedbackEl.appendChild(b);
  }
}

// Speak when you press a button
function speak(text, rate = 0.9) {
  if (!("speechSynthesis" in window)) return;
  const voice = new SpeechSynthesisUtterance(text);
  voice.lang = "en-US";
  voice.rate = rate;
  speechSynthesis.cancel();
  speechSynthesis.speak(voice);
}

// Speak by itself (only when Sound is ON)
function autoSpeak(text) {
  if (soundOn) speak(text);
}

// What the audio buttons read: in Gap mode, the sentence shown on screen
function audioText() {
  return mode === "gap" && gap ? gap.text : item().en;
}

// Restart an animation
function replay(el, cls) {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

// Compare word by word (finds right words even if one is missing).
// "two-week" counts as two words, so hyphenated words can match too.
function compareWords(answer, typed) {
  const words = answer.split(" ");
  const parts = [];
  words.forEach((w, wi) => normalize(w).split(" ").filter(Boolean).forEach((p) => parts.push({ p, wi })));
  const b = normalize(typed).split(" ").filter(Boolean);
  const n = parts.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = parts[i].p === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const hit = new Set();
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (parts[i].p === b[j]) { hit.add(i); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  // A word is right when all its parts are right (punctuation-only words count as right)
  const matched = new Set();
  words.forEach((_, wi) => {
    const idx = parts.map((p, k) => (p.wi === wi ? k : -1)).filter((k) => k >= 0);
    if (idx.every((k) => hit.has(k))) matched.add(wi);
  });
  return {
    words,
    matched,
    score: n ? hit.size / n : 0,
    precision: m ? hit.size / m : 0,
  };
}

function setStats(acc, wpm) {
  $("statAcc").textContent = acc;
  $("statWpm").textContent = wpm;
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function dateKey(d) {
  return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
}

const todayKey = () => dateKey(new Date());
function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dateKey(d);
}

function formatTime(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(s / 60);
  return m ? `${m} min ${pad2(s % 60)} s` : `${s} s`;
}

// Speech recognition writes numbers as digits ("20"), the lessons use words ("twenty")
const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function numberWord(n) {
  if (n < 20) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? " " + ONES[n % 10] : "");
  return ONES[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + numberWord(n % 100) : "");
}
function numbersToWords(text) {
  return text.replace(/%/g, " percent").replace(/\b\d{1,3}\b/g, (d) => numberWord(Number(d)));
}

// =====================================================
//  WEAK ITEMS (Review)
// =====================================================
function pruneWeak() {
  let changed = false;
  Object.keys(weak).forEach((k) => {
    if (!refFromKey(k)) { delete weak[k]; changed = true; }
  });
  if (changed) save("lf-weak", weak);
}

const weakCount = () => Object.keys(weak).length;

function sortedWeakKeys() {
  return Object.keys(weak).sort((a, b) =>
    (weak[b].miss - weak[a].miss) || ((weak[b].last || 0) - (weak[a].last || 0)));
}

// Wrong answer: count it once per try
function recordMiss() {
  if (missedThisItem) return;
  missedThisItem = true;
  const key = ref().key;
  const w = weak[key] || { miss: 0, streak: 0 };
  w.miss++;
  w.streak = 0;
  w.last = Date.now();
  weak[key] = w;
  save("lf-weak", weak);
  if (!session.misses.includes(key)) session.misses.push(key);
  drawWeakBadge();
  drawTopics();
}

// Right on the first try: one step closer to leaving Review
function recordCorrect(key) {
  if (missedThisItem || !weak[key]) return;
  weak[key].streak++;
  if (weak[key].streak >= WEAK_LEAVES_AFTER) delete weak[key];
  save("lf-weak", weak);
}

function drawWeakBadge() {
  const r = ref();
  $("weakBadge").hidden = !(r && weak[r.key]);
}

// =====================================================
//  DAILY GOAL + STREAK
// =====================================================
function currentStreak() {
  const alive = daily.lastGoalDay === todayKey() || daily.lastGoalDay === yesterdayKey();
  if (!alive && daily.streak) {
    daily.streak = 0; // a day was missed
    save("lf-daily", daily);
  }
  return alive ? daily.streak : 0;
}

// Goal reached today for the first time? Then the streak grows.
function checkGoal() {
  const t = todayKey();
  if ((daily.days[t] || 0) >= daily.goal && daily.lastGoalDay !== t) {
    daily.streak = daily.lastGoalDay === yesterdayKey() ? daily.streak + 1 : 1;
    daily.lastGoalDay = t;
    return true;
  }
  return false;
}

function bumpDaily() {
  const t = todayKey();
  daily.days[t] = (daily.days[t] || 0) + 1;
  // keep only the last 60 days
  Object.keys(daily.days).sort().slice(0, -60).forEach((d) => delete daily.days[d]);
  const reached = checkGoal();
  save("lf-daily", daily);
  drawDaily();
  if (reached) celebrate();
}

function drawDaily() {
  const n = daily.days[todayKey()] || 0;
  $("todayCount").textContent = `${n} / ${daily.goal}`;
  $("todayPill").style.setProperty("--p", Math.min(100, (n / daily.goal) * 100) + "%");
  $("todayPill").classList.toggle("reached", n >= daily.goal);
  const s = currentStreak();
  $("streakCount").textContent = `${s} day${s === 1 ? "" : "s"}`;
}

let celebrateTimer = null;
function celebrate() {
  const n = daily.days[todayKey()] || 0;
  const s = currentStreak();
  $("celebrateText").textContent = `Today ${n} / ${daily.goal} · Streak ${s} day${s === 1 ? "" : "s"}`;
  const el = $("celebrate");
  el.hidden = false;
  replay(el, "show");
  clearTimeout(celebrateTimer);
  celebrateTimer = setTimeout(() => { el.hidden = true; }, 3200);
  if (soundOn) chime();
}

// Two soft notes (Web Audio, built into the browser)
function chime() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    [660, 880].forEach((f, k) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = f;
      const t0 = ctx.currentTime + k * 0.16;
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(0.12, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.6);
      o.connect(g).connect(ctx.destination);
      o.start(t0);
      o.stop(t0 + 0.65);
    });
    setTimeout(() => ctx.close(), 1200);
  } catch {
    // no sound: fine
  }
}

function openGoal(open) {
  $("goalPop").hidden = !open;
  $("goalBtn").setAttribute("aria-expanded", String(open));
  if (open) {
    $("goalInput").value = daily.goal;
    $("goalInput").focus();
    $("goalInput").select();
  }
}

function saveGoal() {
  const g = Math.round(Number($("goalInput").value));
  if (!g || g < 1 || g > 200) {
    $("goalInput").focus();
    return;
  }
  daily.goal = g;
  const reached = checkGoal();
  save("lf-daily", daily);
  drawDaily();
  openGoal(false);
  if (reached) celebrate();
}

// =====================================================
//  SESSION SUMMARY (every 10 completed items)
// =====================================================
function newSession() {
  return { count: 0, acc: [], wpm: [], misses: [], start: Date.now() };
}

const summaryDue = () => session.count >= SUMMARY_EVERY;
const summaryOpen = () => !$("summary").hidden;

function showSummary() {
  stopRecognition();
  const avg = (a) => (a.length ? Math.round(a.reduce((s, x) => s + x, 0) / a.length) : null);
  $("practice").hidden = true;
  $("summary").hidden = false;
  $("sumCount").textContent = `${session.count} items`;
  const acc = avg(session.acc);
  $("sumAcc").textContent = acc === null ? "—" : acc + "%";
  const w = avg(session.wpm);
  $("sumWpm").textContent = w ? w + " wpm" : "—";
  $("sumTime").textContent = formatTime(Date.now() - session.start);

  const misses = session.misses.map(refFromKey).filter(Boolean);
  $("sumMissN").textContent = misses.length;
  const ul = $("sumMisses");
  ul.innerHTML = "";
  if (!misses.length) {
    const li = document.createElement("li");
    li.className = "none";
    li.textContent = "No misses. Clean round.";
    ul.appendChild(li);
  }
  misses.forEach((r) => {
    const li = document.createElement("li");
    const tag = document.createElement("span");
    tag.className = "label";
    tag.textContent = TYPE_LABEL[r.item.type] + " · " + r.src;
    const text = document.createElement("span");
    text.className = "miss-text";
    text.textContent = r.item.en.length > 110 ? r.item.en.slice(0, 110) + "…" : r.item.en;
    li.appendChild(tag);
    li.appendChild(text);
    ul.appendChild(li);
  });
  $("replayBtn").disabled = misses.length === 0;
  $("continueBtn").focus();
}

function continueSession() {
  session = newSession();
  $("summary").hidden = true;
  goNext();
}

function replayMisses() {
  const keys = session.misses.filter((k) => refFromKey(k));
  if (!keys.length) { continueSession(); return; }
  if (!isReplay()) replayReturn = { view, itemIndex };
  replayList = keys;
  view = "replay";
  itemIndex = 0;
  session = newSession();
  $("summary").hidden = true;
  showItem();
}

// =====================================================
//  DRAW
// =====================================================
function drawSound() {
  const btn = $("soundBtn");
  btn.classList.toggle("on", soundOn);
  btn.innerHTML = `<span class="dot"></span>Sound ${soundOn ? "On" : "Off"}`;
}

function openView(v) {
  // Clicking Mix again gives a new random order
  if (v === "mix" && isMix()) mixOrder = shuffledRefs();
  if (v === "review") reviewOrder = sortedWeakKeys();
  if (summaryOpen()) session = newSession(); // leaving the summary = start a new round
  view = v;
  itemIndex = 0;
  replayReturn = null;
  hideComposer();
  hideImporter();
  hideShot();
  $("summary").hidden = true;
  showItem();
}

function drawTopics() {
  const nav = $("topics");
  nav.innerHTML = "";
  const tabs = [
    { v: "mix", label: "Mix · random", ar: "كل المواضيع بترتيب عشوائي", pill: true },
    ...TOPICS.map((t, i) => ({ v: i, label: t.en, ar: t.ar })),
    { v: "mine", label: `My texts · ${custom.length}`, ar: "نصوصي", pill: true },
    { v: "review", label: `Review · ${weakCount()}`, ar: "مراجعة الأخطاء", pill: true },
  ];
  let active = null;
  tabs.forEach((tab) => {
    const btn = document.createElement("button");
    btn.textContent = tab.label;
    btn.title = tab.ar;
    btn.className = (tab.pill ? "mine " : "") + (tab.v === view ? "active" : "");
    btn.onclick = () => openView(tab.v);
    nav.appendChild(btn);
    if (tab.v === view) active = btn;
  });
  // Phones: the tabs scroll sideways, keep the active one visible
  if (active && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = active.offsetLeft - nav.clientWidth / 2 + active.offsetWidth / 2;
  }
}

function drawSegments() {
  const box = $("segments");
  const show = isTopic() || isMine();  // too many items in Mix / Review for little bars
  box.hidden = !show;
  if (!show) return;
  box.innerHTML = "";
  list().forEach((r, i) => {
    const seg = document.createElement("button");
    seg.title = TYPE_LABEL[r.item.type] + " " + (i + 1);
    seg.className = done.has(r.key) ? "done" : i === itemIndex ? "current" : "";
    seg.onclick = () => { itemIndex = i; showItem(); };
    box.appendChild(seg);
  });
}

function drawProgress() {
  const total = TOPICS.reduce((s, t) => s + t.items.length, 0);
  const finished = [...done].filter((k) => k.startsWith("lf-")).length;
  $("statDone").textContent = `${finished} / ${total}`;
}

// Example sentence (words), usage + second example, and key words (paragraphs).
// Hidden until you finish when they could give the answer away.
function drawExtras() {
  const it = item();
  const reveal = mode === "copy" || mode === "speak" || solved;

  // In Gap mode a word's example IS the sentence on screen, so don't repeat it
  const showExample = it.ex && reveal && !(mode === "gap" && it.type === "word" && !solved);
  $("example").hidden = !showExample;
  if (it.ex) {
    $("exampleEn").textContent = "“" + it.ex + "”";
    $("exampleAr").textContent = it.exAr;
  }

  const hasUsage = Boolean(it.usage || it.example2);
  $("usage").hidden = !(hasUsage && reveal);
  $("usageBlock").hidden = !it.usage;
  $("ex2Block").hidden = !it.example2;
  if (it.usage) {
    $("usageEn").textContent = it.usage.en;
    $("usageAr").textContent = it.usage.ar;
  }
  if (it.example2) {
    $("ex2En").textContent = "“" + it.example2.en + "”";
    $("ex2Ar").textContent = it.example2.ar;
  }

  const showWords = it.words && ((mode !== "listen" && mode !== "gap") || solved);
  $("keywords").hidden = !showWords;
  if (showWords) {
    const box = $("chips");
    box.innerHTML = "";
    it.words.forEach(([en, ar]) => {
      const btn = document.createElement("button");
      btn.appendChild(document.createTextNode(en));
      const s = document.createElement("span");
      s.className = "ar";
      s.textContent = ar;
      btn.appendChild(s);
      btn.onclick = () => speak(en, 0.8);
      box.appendChild(btn);
    });
  }
}

// The list of your own texts (+ Import / Export)
function drawLibrary() {
  $("library").hidden = !isMine();
  if (!isMine()) return;

  const box = $("libList");
  box.innerHTML = "";
  custom.forEach((c, i) => {
    const wrap = document.createElement("div");
    wrap.className = "lib-item" + (i === itemIndex ? " active" : "");

    const pick = document.createElement("button");
    pick.textContent = c.en.length > 42 ? c.en.slice(0, 42) + "…" : c.en;
    const reps = document.createElement("span");
    reps.className = "reps";
    reps.textContent = "×" + c.reps;
    pick.appendChild(reps);
    pick.title = "Practiced " + c.reps + " times";
    pick.onclick = () => { itemIndex = i; hideComposer(); hideImporter(); showItem(); };

    // Delete needs two clicks, so you don't delete by mistake
    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "✕";
    del.title = "Delete · احذف";
    del.onclick = () => {
      if (!del.classList.contains("armed")) {
        del.classList.add("armed");
        del.textContent = "Delete?";
        setTimeout(() => { del.classList.remove("armed"); del.textContent = "✕"; }, 3000);
        return;
      }
      done.delete("mine-" + c.id);
      save("lf-done", [...done]);
      delete weak["mine-" + c.id];
      save("lf-weak", weak);
      custom.splice(i, 1);
      save("be-custom", custom);
      itemIndex = Math.max(0, Math.min(itemIndex, custom.length - 1));
      showItem();
    };

    wrap.appendChild(pick);
    wrap.appendChild(del);
    box.appendChild(wrap);
  });

  const addTool = (label, title, onClick) => {
    const wrapEl = document.createElement("div");
    wrapEl.className = "lib-item lib-add";
    const b = document.createElement("button");
    b.textContent = label;
    b.title = title;
    b.style.paddingRight = "14px";
    b.onclick = onClick;
    wrapEl.appendChild(b);
    box.appendChild(wrapEl);
  };
  addTool("+ Add text", "أضف نصا", () => { hideImporter(); hideShot(); showComposer(); });
  addTool("From screenshot", "من صورة: النص الذي في الصورة يصبح تمارين", () => openShot());
  addTool("Import", "استيراد: الإنجليزية | العربية", showImporter);
  addTool("Export", "تصدير إلى ملف نصي", exportTexts);
}

// COPY: every letter turns white (right) or red (wrong), in place
function drawCopy() {
  const target = item().en;
  const typed = typingEl.value;
  englishEl.innerHTML = "";
  for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");
    span.textContent = target[i];
    if (i < typed.length) span.className = sameChar(typed[i], target[i]) ? "ok" : "no";
    else if (i === typed.length) span.className = "now";
    englishEl.appendChild(span);
  }
}

// TRANSLATE / LISTEN: English hidden as ____
function drawHidden() {
  const it = item();
  englishEl.innerHTML = "";

  if (it.type === "word") {
    // hint shows letters one by one
    [...it.en].forEach((c, i) => {
      const span = document.createElement("span");
      span.textContent = i < hint ? c : c === " " ? " " : "_";
      if (i < hint) span.className = "ok";
      englishEl.appendChild(span);
      englishEl.appendChild(document.createTextNode(" "));
    });
    return;
  }

  // hint shows words one by one
  it.en.split(" ").forEach((w, i) => {
    const span = document.createElement("span");
    span.textContent = i < hint ? w : "_".repeat(w.replace(/[^a-zA-Z']/g, "").length || 1);
    if (i < hint) span.className = "ok";
    englishEl.appendChild(span);
    englishEl.appendChild(document.createTextNode(" "));
  });
}

function drawWordResult(result) {
  englishEl.innerHTML = "";
  result.words.forEach((w, i) => {
    const span = document.createElement("span");
    span.textContent = w;
    span.className = result.matched.has(i) ? "word-ok" : "word-no";
    englishEl.appendChild(span);
    englishEl.appendChild(document.createTextNode(" "));
  });
}

// ----- GAP mode -----
// Find a whole word/phrase in the text (not inside another word)
function findWord(text, word) {
  const low = text.toLowerCase();
  const w = word.toLowerCase();
  const isLetter = (c) => /[a-z0-9]/i.test(c || "");
  let from = 0;
  while (true) {
    const at = low.indexOf(w, from);
    if (at < 0) return -1;
    if (!isLetter(text[at - 1]) && !isLetter(text[at + w.length])) return at;
    from = at + 1;
  }
}

// Choose the hidden word: the item's key word(s), or a long word as a fallback
function pickGap(it) {
  let text = it.en;
  let ar = it.ar;
  let candidates;
  let type = it.type;
  if (it.type === "word") {
    if (it.ex) { text = it.ex; ar = it.exAr; type = "sentence"; }
    candidates = [it.en];
  } else {
    candidates = [it.gap, ...(it.words || []).map((w) => w[0])].filter(Boolean);
  }
  let found = candidates
    .map((c) => ({ c, at: findWord(text, c) }))
    .filter((x) => x.at >= 0);
  if (!found.length) {
    const longest = [...new Set(text.match(/[A-Za-z][A-Za-z'-]*[A-Za-z]/g) || [])]
      .filter((w) => w.length >= 4)
      .sort((a, b) => b.length - a.length)
      .slice(0, 3);
    found = longest.map((c) => ({ c, at: findWord(text, c) })).filter((x) => x.at >= 0);
  }
  if (!found.length) {
    return { text, ar, start: 0, end: text.length, answer: text, type };
  }
  const pick = found[Math.floor(Math.random() * found.length)];
  return { text, ar, start: pick.at, end: pick.at + pick.c.length, answer: text.slice(pick.at, pick.at + pick.c.length), type };
}

function drawGap(revealed) {
  englishEl.innerHTML = "";
  const before = document.createElement("span");
  before.className = "plain";
  before.textContent = gap.text.slice(0, gap.start);
  const blank = document.createElement("span");
  blank.className = "gap" + (revealed ? " gap-ok" : "");
  blank.textContent = revealed
    ? gap.answer
    : [...gap.answer].map((ch, i) => (ch === " " ? " " : i < hint ? ch : "_")).join("");
  const after = document.createElement("span");
  after.className = "plain";
  after.textContent = gap.text.slice(gap.end);
  englishEl.append(before, blank, after);
}

// Case does not matter, and a period/comma at the end does not matter
function cleanGap(s) {
  return s
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.,!?;:'")\]]+$/, "")
    .trim();
}

// ----- SPEAK mode: show the sentence to read -----
function drawReading() {
  englishEl.textContent = item().en;
  englishEl.classList.add("reading");
}

function autoGrow() {
  typingEl.style.height = "auto";
  typingEl.style.height = typingEl.scrollHeight + "px";
}

function drawTitle(t) {
  $("title").innerHTML = "";
  $("title").appendChild(document.createTextNode(t.en + "."));
  const ar = document.createElement("span");
  ar.className = "ar";
  ar.textContent = t.ar;
  $("title").appendChild(ar);
}

function showItem() {
  stopRecognition();

  drawTitle(viewInfo());
  drawTopics();
  drawLibrary();
  drawProgress();
  drawDaily();
  $("summary").hidden = true;
  $("emptyReview").hidden = true;

  // "My texts" is empty: show the form to add one (unless Import is open)
  if (isMine() && custom.length === 0) {
    $("practice").hidden = true;
    if ($("importer").hidden && $("shot").hidden) showComposer();
    return;
  }
  // Review is empty
  if ((isReview() || isReplay()) && list().length === 0) {
    $("practice").hidden = true;
    $("emptyReview").hidden = false;
    return;
  }
  $("practice").hidden = false;
  if (itemIndex >= list().length) itemIndex = 0;

  const r = ref();
  const it = r.item;
  solved = false;
  hint = 0;
  startTime = null;
  typedCount = 0;
  errorCount = 0;
  prevLength = 0;
  missedThisItem = false;
  firstScore = null;
  heardText = "";

  typingEl.value = "";
  typingEl.classList.remove("done");
  autoGrow();

  // Pill: kind of exercise (+ its topic in Mix / Review)
  let pill = TYPE_LABEL[it.type];
  if (isMix() || isReview() || isReplay()) pill += " · " + r.src;
  if (isMine()) pill = "Your text · " + pill;
  $("typePill").textContent = pill;
  const total = list().length;
  $("counter").textContent = pad2(itemIndex + 1) + " / " + pad2(total);

  // Gap mode shows a sentence with one word missing
  let ar = it.ar;
  let shownType = it.type;
  gap = null;
  if (mode === "gap") {
    gap = pickGap(it);
    ar = gap.ar;
    shownType = gap.type;
  }

  arabicEl.textContent = ar || "";
  arabicEl.hidden = !ar;
  arabicEl.className = "arabic " + shownType;
  englishEl.className = "english " + shownType;
  replay(arabicEl, "fade");
  replay(englishEl, "fade");

  if (mode === "copy") drawCopy();
  else if (mode === "gap") drawGap(false);
  else if (mode === "speak") drawReading();
  else drawHidden();

  setFeedback("", "");
  const checking = mode === "challenge" || mode === "listen" || mode === "gap";
  $("hintBtn").hidden = !checking;
  $("checkBtn").hidden = !checking;
  typingEl.hidden = mode === "speak";
  typingEl.placeholder = PLACEHOLDER[mode];
  $("speakBox").hidden = mode !== "speak";
  $("heard").textContent = "";
  drawMic();

  drawWeakBadge();
  drawSegments();
  drawExtras();
  // focus without jumping the page down (the top bar stays visible)
  if (mode === "speak") $("micBtn").focus({ preventScroll: true });
  else typingEl.focus({ preventScroll: true });

  if (mode === "listen") autoSpeak(it.en);

  // Your own card without Arabic: translate it now
  const own = customOf(r);
  if (own && !own.ar) ensureArabic(own);
}

// The item is finished
function complete(acc, wpm) {
  solved = true;
  typingEl.classList.add("done");
  replay(cardEl, "success");
  const r = ref();
  done.add(r.key);
  save("lf-done", [...done]);

  const c = customOf(r);
  if (c) {
    c.reps++;
    save("be-custom", custom);
    drawLibrary();
  }

  recordCorrect(r.key);
  session.count++;
  session.acc.push(acc);
  if (wpm) session.wpm.push(wpm);

  drawSegments();
  drawExtras();
  drawProgress();
  drawWeakBadge();
  drawTopics();
  bumpDaily();
}

// Message after finishing (your texts: count how many times)
function doneMessage(en, ar) {
  const c = customOf(ref());
  if (isMine() && c) {
    const n = c.reps;
    setFeedback(`${en} Practiced ${n}× — press Enter to write it again.`, `تدرّبت ${n} مرات`);
  } else {
    setFeedback(en + " Press Enter to continue.", ar);
  }
}

// =====================================================
//  ACTIONS
// =====================================================
function onTypeCopy() {
  const target = item().en;
  const typed = typingEl.value;

  if (!startTime && typed.length) startTime = Date.now();
  for (let i = prevLength; i < typed.length; i++) {
    typedCount++;
    if (i >= target.length || !sameChar(typed[i], target[i])) errorCount++;
  }
  prevLength = typed.length;

  drawCopy();

  const minutes = startTime ? Math.max((Date.now() - startTime) / 60000, 1 / 60) : 1;
  const accuracy = typedCount ? Math.round((100 * (typedCount - errorCount)) / typedCount) : 100;
  const t = typed.trim();
  const exact = t.length === target.length && [...target].every((c, i) => sameChar(t[i], c));

  if (exact) {
    const wpm = Math.round(target.split(" ").length / minutes);
    setStats(accuracy + "%", wpm + " wpm");
    if (accuracy < 90) recordMiss(); // many typos: practice it again in Review
    complete(accuracy, wpm);
    doneMessage("Perfect.", "ممتاز");
    autoSpeak(target);
    return;
  }

  // Live speed while typing (words typed so far)
  if (startTime && typed.length) {
    const words = typed.trim().split(/\s+/).length;
    setStats(accuracy + "%", Math.round(words / minutes) + " wpm");
  }

  if (typed.length > target.length) {
    setFeedback("Too many letters.", "حروف زائدة، احذفها", true);
  } else if ([...typed].some((c, i) => !sameChar(c, target[i]))) {
    setFeedback("Fix the red letters.", "صحّح الحروف الحمراء", true);
  } else {
    setFeedback("", "");
  }
}

function checkAnswer() {
  if (solved) return;
  if (mode === "gap") { checkGap(); return; }
  if (mode === "copy" || mode === "speak") return;

  const it = item();
  const typed = typingEl.value;
  if (!normalize(typed)) {
    setFeedback("Write your answer first.", "اكتب إجابتك أولا", true);
    return;
  }

  const answers = mode === "listen" ? [it.en] : [it.en, ...(it.alt || [])];
  const result = compareWords(it.en, typed);
  const percent = Math.round(result.score * 100);

  if (answers.map(normalize).includes(normalize(typed))) {
    if (firstScore === null) firstScore = 100;
    englishEl.textContent = it.en;
    englishEl.classList.add("all-ok");
    setStats("100%", "—");
    complete(firstScore, null);
    doneMessage("Correct.", "صحيح");
    if (mode === "challenge") autoSpeak(it.en);
    return;
  }

  drawWordResult(result);
  setStats(percent + "%", "—");
  if (firstScore === null) firstScore = percent;

  // Long text: very close is good enough
  if (result.words.length >= 8 && result.score >= 0.85 && result.precision >= 0.85) {
    complete(firstScore, null);
    doneMessage("Almost perfect — check the red words.", "تقريبا مثالي");
  } else {
    recordMiss();
    setFeedback("Not yet. Try again, or use Hint.", "ليس بعد، حاول مرة أخرى", true);
  }
}

function checkGap() {
  const typed = typingEl.value;
  if (!cleanGap(typed)) {
    setFeedback("Type the missing word first.", "اكتب الكلمة الناقصة أولا", true);
    return;
  }
  if (cleanGap(typed) === cleanGap(gap.answer)) {
    if (firstScore === null) firstScore = 100;
    drawGap(true);
    setStats(firstScore + "%", "—");
    complete(firstScore, null);
    doneMessage("Correct.", "صحيح");
    autoSpeak(gap.text);
  } else {
    if (firstScore === null) firstScore = 0;
    recordMiss();
    setStats("0%", "—");
    replay(englishEl, "shake");
    setFeedback("Not this word. Try again, or use Hint.", "ليست هذه الكلمة، حاول مرة أخرى", true);
  }
}

// ----- SPEAK mode -----
function drawMic() {
  const b = $("micBtn");
  b.classList.toggle("rec", recording);
  b.setAttribute("aria-pressed", String(recording));
  $("micLabel").textContent = recording ? "Stop" : "Speak";
}

function stopRecognition() {
  if (recognition) {
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
    try { recognition.abort(); } catch { /* already stopped */ }
    recognition = null;
  }
  recording = false;
}

function startSpeak() {
  if (!SpeechRec || solved || mode !== "speak") return;
  if (recording && recognition) { recognition.stop(); return; }
  if ("speechSynthesis" in window) speechSynthesis.cancel(); // don't record the computer voice

  const it = item();
  heardText = "";
  speechError = "";
  let finalText = "";
  const rec = new SpeechRec();
  rec.lang = "en-US";
  rec.interimResults = true;
  rec.continuous = it.type === "paragraph";
  rec.maxAlternatives = 1;
  rec.onresult = (e) => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const res = e.results[i];
      if (res.isFinal) finalText += res[0].transcript + " ";
      else interim += res[0].transcript + " ";
    }
    heardText = (finalText + interim).trim();
    $("heard").textContent = heardText;
  };
  rec.onerror = (e) => { speechError = e.error || "error"; };
  rec.onend = () => {
    recognition = null;
    recording = false;
    drawMic();
    if (speechError && speechError !== "no-speech" && speechError !== "aborted") {
      showSpeechError(speechError);
      return;
    }
    evaluateSpeech(heardText);
  };

  recognition = rec;
  recording = true;
  drawMic();
  setFeedback("Listening… read the English out loud.", "أنا أستمع، اقرأ الجملة بصوت عال");
  try {
    rec.start();
  } catch {
    recognition = null;
    recording = false;
    drawMic();
    showSpeechError("start");
  }
}

function showSpeechError(code) {
  const msg = {
    "not-allowed": ["The microphone is blocked. Allow it for this page and try again.", "الميكروفون محظور، اسمح به لهذه الصفحة"],
    "service-not-allowed": ["The microphone is blocked. Allow it for this page and try again.", "الميكروفون محظور، اسمح به لهذه الصفحة"],
    "audio-capture": ["No microphone found. Connect one and try again.", "لا يوجد ميكروفون"],
    network: ["Speech recognition needs an internet connection.", "التعرف على الصوت يحتاج إلى الإنترنت"],
  }[code] || ["Speech recognition stopped. Press the mic and try again.", "توقف التعرف على الصوت، حاول مرة أخرى"];
  setFeedback(msg[0], msg[1], true);
}

function evaluateSpeech(text) {
  if (!text) {
    setFeedback("I didn't hear anything. Press the mic and try again.", "لم أسمع شيئا، حاول مرة أخرى", true);
    return;
  }
  const it = item();
  const result = compareWords(it.en, numbersToWords(text));
  const percent = Math.round(result.score * 100);
  englishEl.classList.remove("reading");
  drawWordResult(result);
  setStats(percent + "%", "—");
  if (firstScore === null) firstScore = percent;

  if (percent >= 80) {
    complete(firstScore, null);
    doneMessage(`${percent}% of the words matched.`, "نطق جيد");
  } else {
    recordMiss();
    setFeedback(`${percent}% — the red words were missed. Press the mic and try again.`,
      "الكلمات الحمراء لم تُسمع، حاول مرة أخرى", true);
  }
}

// ----- Moving between items -----
function goNext() {
  if (summaryDue()) { showSummary(); return; }
  const count = list().length;
  if (isMix()) {
    itemIndex++;
    if (itemIndex >= count) { mixOrder = shuffledRefs(); itemIndex = 0; } // finished all: new random order
  } else if (isMine()) {
    itemIndex = count ? (itemIndex + 1) % count : 0;
  } else if (isReview()) {
    // most missed first; skip items that already left the list
    itemIndex++;
    while (itemIndex < reviewOrder.length && !weak[reviewOrder[itemIndex]]) itemIndex++;
    if (itemIndex >= reviewOrder.length) { reviewOrder = sortedWeakKeys(); itemIndex = 0; }
  } else if (isReplay()) {
    if (itemIndex < count - 1) {
      itemIndex++;
    } else {
      // replay finished: go back to where you were
      const back = replayReturn || { view: "mix", itemIndex: -1 };
      replayReturn = null;
      view = back.view;
      itemIndex = back.itemIndex;
      if (isReview()) reviewOrder = sortedWeakKeys();
      goNext();
      return;
    }
  } else if (itemIndex < count - 1) {
    itemIndex++;
  } else {
    view = (view + 1) % TOPICS.length;
    itemIndex = 0;
  }
  showItem();
}

function goBack() {
  const count = list().length;
  if (!isTopic()) {
    itemIndex = count ? (itemIndex - 1 + count) % count : 0;
  } else if (itemIndex > 0) {
    itemIndex--;
  } else {
    view = (view - 1 + TOPICS.length) % TOPICS.length;
    itemIndex = TOPICS[view].items.length - 1;
  }
  showItem();
}

// Enter after finishing: summary, write your text again, or next item
function advance() {
  if (summaryDue()) showSummary();
  else if (isMine()) showItem();
  else goNext();
}

// Jump to a random exercise in the current list
function goRandom() {
  const count = list().length;
  if (count > 1) {
    let r;
    do { r = Math.floor(Math.random() * count); } while (r === itemIndex);
    itemIndex = r;
  }
  showItem();
}

function setMode(newMode) {
  if (newMode === "speak" && !SpeechRec) return;
  mode = newMode;
  document.querySelectorAll("#modes button").forEach((b) => {
    b.classList.toggle("active", b.dataset.mode === mode);
  });
  const [grey, white, ar] = MODE_HELP[mode];
  $("modeHelp").innerHTML = `${grey} <b>${white}</b> <span class="ar">· ${ar}</span>`;
  hideComposer();
  hideImporter();
  if (summaryOpen()) return; // keep the summary on screen
  showItem();
}

// ----- Add your own text -----
function showComposer() {
  $("composer").hidden = false;
  $("composerMsg").textContent = "";
  $("newEn").focus();
}

function hideComposer() {
  $("composer").hidden = true;
}

function saveText() {
  const en = cleanText($("newEn").value);
  const ar = cleanText($("newAr").value);
  if (!/[a-zA-Z]/.test(en)) {
    $("composerMsg").textContent = "Write the English text first. · اكتب النص الإنجليزي أولا";
    $("newEn").focus();
    return;
  }
  custom.push({ id: Date.now().toString(36), en, ar, reps: 0 });
  save("be-custom", custom);
  $("newEn").value = "";
  $("newAr").value = "";
  hideComposer();
  view = "mine";
  itemIndex = custom.length - 1;
  showItem();
}

// ----- Bulk import / export (one card per line: English | Arabic) -----
function showImporter() {
  hideComposer();
  $("importer").hidden = false;
  $("importMsg").textContent = "";
  $("importText").focus();
}

function hideImporter() {
  $("importer").hidden = true;
}

function parseImport(text) {
  const cards = [];
  let skipped = 0;
  text.replace(/^\ufeff/, "").split(/\r?\n/).forEach((line) => {
    if (!line.trim()) return;                 // blank line
    const bar = line.indexOf("|");
    if (bar < 0) { skipped++; return; }       // no pipe
    const en = cleanText(line.slice(0, bar));
    const ar = cleanText(line.slice(bar + 1));
    if (!/[a-zA-Z]/.test(en)) { skipped++; return; }
    cards.push({ en, ar });
  });
  return { cards, skipped };
}

function doImport() {
  const { cards, skipped } = parseImport($("importText").value);
  const base = Date.now().toString(36);
  cards.forEach((c, k) => custom.push({ id: base + "-" + k, en: c.en, ar: c.ar, reps: 0 }));
  save("be-custom", custom);
  const msg = `Created ${cards.length} card${cards.length === 1 ? "" : "s"}` +
    (skipped ? ` · skipped ${skipped} line${skipped === 1 ? "" : "s"} without “|”` : "") +
    ` · تم إنشاء ${cards.length} بطاقة`;
  if (cards.length) {
    $("importText").value = "";
    view = "mine";
    itemIndex = custom.length - cards.length;
    hideComposer();
    showItem();
  }
  $("importer").hidden = false;
  $("importMsg").textContent = msg;
}

function exportTexts() {
  if (!custom.length) {
    $("libMsg").textContent = "Nothing to export yet. · لا توجد نصوص للتصدير";
    return;
  }
  const text = custom.map((c) => `${c.en} | ${c.ar || ""}`).join("\n");
  const blob = new Blob(["\ufeff" + text + "\n"], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "my-texts.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  $("libMsg").textContent = `Exported ${custom.length} card${custom.length === 1 ? "" : "s"} to my-texts.txt`;
}

// ----- From a screenshot: read the English text in a picture (OCR) -----
// Browsers can't read text in pictures by themselves, so we load Tesseract.js
// (free, runs on this computer) the first time it is needed. That needs internet once.
const TESSERACT_URL = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
let ocrWorker = null;
let shotSplit = "sentence";
let shotBusy = false;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (window.Tesseract) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error("load"));
    document.head.appendChild(s);
  });
}

function shotStatus(text, progress) {
  $("shotProgress").hidden = false;
  $("shotStatus").textContent = text;
  const bar = $("shotBar");
  bar.classList.toggle("indeterminate", progress === null);
  bar.style.width = progress === null ? "" : Math.round(progress * 100) + "%";
}

async function getOcr() {
  if (ocrWorker) return ocrWorker;
  shotStatus("Loading the text reader (first time only)… · تحميل قارئ النص", null);
  await loadScript(TESSERACT_URL);
  ocrWorker = await Tesseract.createWorker("eng", 1, {
    logger: (m) => {
      if (m.status === "recognizing text") shotStatus("Reading the text… · قراءة النص", m.progress);
    },
  });
  return ocrWorker;
}

// Screenshots have small letters: make the picture bigger and grey before reading,
// so the reader makes fewer mistakes (for example a lost "I")
async function prepareImage(file) {
  try {
    const bmp = await createImageBitmap(file);
    const scale = Math.min(3, Math.max(1, 2400 / bmp.width));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);
    const g = canvas.getContext("2d");
    g.filter = "grayscale(1) contrast(1.25)";
    g.imageSmoothingQuality = "high";
    g.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    return canvas;
  } catch {
    return file; // older browsers: read the picture as it is
  }
}

// Put text from a picture back into clean sentences and paragraphs
function tidyOcr(raw) {
  return raw
    .replace(/\r/g, "")
    .replace(/([a-z])-\n([a-z])/g, "$1$2")            // word cut at the end of a line
    .split(/\n\s*\n/)                                  // paragraphs
    .map((p) => p.split("\n").map((l) => l.trim()).filter((l) => /[A-Za-z]/.test(l)).join(" "))
    .map((p) => p.replace(/(^|\s)\|(?=\s)/g, "$1I"))   // the reader often sees "I" as "|"
    .map((p) => cleanText(p.replace(/[|_~]+/g, " ")))  // other reading mistakes
    .filter((p) => /[A-Za-z]{2}/.test(p))
    .join("\n\n");
}

function splitShot(text, how) {
  const hasWords = (s) => /[A-Za-z]{2}/.test(s);
  const paragraphs = text.split(/\n\s*\n/).map(cleanText).filter(hasWords);
  if (how === "all") return paragraphs.length ? [paragraphs.join(" ")] : [];
  if (how === "paragraph") return paragraphs;
  return paragraphs
    .flatMap((p) => p.split(/(?<=[.!?])\s+(?=["'“(]?[A-Z0-9])/))
    .map(cleanText)
    .filter(hasWords);
}

function drawShotCount() {
  const n = splitShot($("shotText").value, shotSplit).length;
  $("shotCount").textContent = `${n} card${n === 1 ? "" : "s"}`;
  $("makeShot").disabled = n === 0;
}

function resetShot() {
  $("shotImg").hidden = true;
  $("shotImg").removeAttribute("src");
  $("shotDropText").hidden = false;
  $("shotProgress").hidden = true;
  $("shotResult").hidden = true;
  $("shotMsg").textContent = "";
  $("makeShot").disabled = true;
  $("shotFile").value = "";
}

// Open the screenshot card (in My texts). With a file: read it straight away.
function openShot(file) {
  if (!isMine()) { view = "mine"; itemIndex = 0; }
  hideComposer();
  hideImporter();
  $("summary").hidden = true;
  $("shot").hidden = false;
  showItem();
  if (!shotBusy) resetShot();
  $("shot").scrollIntoView({ behavior: "smooth", block: "start" });
  if (file) readShot(file);
}

function hideShot() {
  $("shot").hidden = true;
}

async function readShot(file) {
  if (!file || !file.type.startsWith("image/") || shotBusy) return;
  shotBusy = true;
  resetShot();
  const img = $("shotImg");
  img.src = URL.createObjectURL(file);
  img.hidden = false;
  $("shotDropText").hidden = true;
  try {
    const worker = await getOcr();
    shotStatus("Reading the text… · قراءة النص", 0);
    const { data } = await worker.recognize(await prepareImage(file));
    const text = tidyOcr(data.text || "");
    $("shotProgress").hidden = true;
    if (!text) {
      $("shotMsg").textContent = "No English text found in this picture. Try a clearer screenshot. · لم أجد نصا إنجليزيا";
      return;
    }
    $("shotResult").hidden = false;
    $("shotText").value = text;
    drawShotCount();
  } catch {
    $("shotProgress").hidden = true;
    $("shotMsg").textContent = "Could not read the picture. The text reader needs internet the first time. · تحقق من الاتصال بالإنترنت";
  } finally {
    shotBusy = false;
  }
}

// ----- Arabic for your own cards (screenshot, import or "Add text" without Arabic) -----
// 1) the browser's own translator when it has one (Chrome, on this computer)
// 2) otherwise the free MyMemory service (needs internet)
let browserTranslator = null;
const translating = new Set();

async function translateToArabic(text) {
  try {
    if ("Translator" in self) {
      if (!browserTranslator) {
        const ok = await Translator.availability({ sourceLanguage: "en", targetLanguage: "ar" });
        if (ok === "available") browserTranslator = await Translator.create({ sourceLanguage: "en", targetLanguage: "ar" });
      }
      if (browserTranslator) return await browserTranslator.translate(text);
    }
  } catch {
    // use the online service below
  }
  // The online service takes up to ~450 letters at a time: send sentence groups
  const chunks = [];
  (text.match(/[^.!?]+[.!?]*\s*/g) || [text]).forEach((s) => {
    if (chunks.length && (chunks[chunks.length - 1] + s).length < 450) chunks[chunks.length - 1] += s;
    else chunks.push(s);
  });
  const out = [];
  for (const chunk of chunks) {
    const url = "https://api.mymemory.translated.net/get?langpair=en|ar&q=" + encodeURIComponent(chunk.trim());
    const data = await (await fetch(url)).json();
    const ar = data && data.responseData && data.responseData.translatedText;
    if (!ar || Number(data.responseStatus) !== 200 || /MYMEMORY WARNING/i.test(ar)) throw new Error("translate");
    out.push(ar);
  }
  return out.join(" ");
}

function drawPendingArabic(c, pending) {
  const r = ref();
  if ($("practice").hidden || !r || r.cid !== c.id) return;
  if (c.ar) {
    arabicEl.textContent = c.ar;
    arabicEl.hidden = false;
    arabicEl.classList.remove("pending");
  } else {
    arabicEl.textContent = pending ? "جارٍ الترجمة إلى العربية…" : "";
    arabicEl.hidden = !pending;
    arabicEl.classList.toggle("pending", pending);
  }
}

// Add the Arabic to one of your cards if it has none
async function ensureArabic(c) {
  if (!c || c.ar || translating.has(c.id)) return true;
  translating.add(c.id);
  drawPendingArabic(c, true);
  try {
    const ar = cleanText(await translateToArabic(c.en));
    if (ar && !c.ar) {
      c.ar = ar;
      save("be-custom", custom);
    }
    return true;
  } catch {
    return false;
  } finally {
    translating.delete(c.id);
    drawPendingArabic(c, false);
  }
}

// Translate several new cards one after another
async function translateCards(cards) {
  let n = 0, failed = 0;
  for (const c of cards) {
    $("libMsg").textContent = `Adding Arabic… ${++n} / ${cards.length} · إضافة الترجمة العربية`;
    if (!(await ensureArabic(c))) failed++;
  }
  $("libMsg").textContent = failed
    ? `Arabic could not be added to ${failed} card${failed === 1 ? "" : "s"} (it needs internet). It will try again when you open them.`
    : `Arabic added to ${cards.length} card${cards.length === 1 ? "" : "s"} · تمت إضافة الترجمة`;
}

function makeShotCards() {
  const parts = splitShot($("shotText").value, shotSplit);
  if (!parts.length) return;
  const base = Date.now().toString(36);
  const first = custom.length;
  parts.forEach((en, k) => custom.push({ id: base + "-s" + k, en, ar: "", reps: 0 }));
  save("be-custom", custom);
  hideShot();
  resetShot();
  view = "mine";
  itemIndex = first;
  showItem();
  $("card").scrollIntoView({ behavior: "smooth", block: "start" });
  translateCards(custom.slice(first));
}

// ----- Shortcuts hint -----
function openKbd(open) {
  $("kbdPop").hidden = !open;
  $("kbdBtn").setAttribute("aria-expanded", String(open));
}

// =====================================================
//  BUTTONS AND KEYBOARD
// =====================================================
typingEl.addEventListener("input", () => {
  autoGrow();
  if (solved) return;
  if (mode === "copy") onTypeCopy();
});

// One keyboard handler for the whole page
document.addEventListener("keydown", (e) => {
  const inForm = e.target.closest && e.target.closest("#composer, #importer, #shot, #goalPop");

  if (e.key === "Escape") {
    if (!$("goalPop").hidden) { openGoal(false); e.preventDefault(); return; }
    if (!$("kbdPop").hidden) { openKbd(false); e.preventDefault(); return; }
    if (!$("celebrate").hidden) { $("celebrate").hidden = true; e.preventDefault(); return; }
    if (inForm || $("practice").hidden) return;
    e.preventDefault();
    showItem(); // repeat the current item
    return;
  }

  if (inForm) {
    if (e.key === "Enter" && e.target.id === "goalInput") { e.preventDefault(); saveGoal(); }
    return;
  }

  if (summaryOpen()) {
    if (e.key === "Enter") { e.preventDefault(); continueSession(); }
    return;
  }
  if ($("practice").hidden) return;

  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    speak(audioText()); // replay audio
    return;
  }
  if (e.altKey && e.key === "ArrowLeft") {
    e.preventDefault();
    goBack();
    return;
  }
  if (e.key === "Enter") {
    e.preventDefault(); // no new lines in the answer box
    if (solved) advance();
    else if (mode === "speak") startSpeak();
    else if (mode !== "copy") checkAnswer();
  }
});

// Phones: tapping a button must not close the keyboard (keep focus in the answer box)
document.addEventListener("mousedown", (e) => {
  if (document.activeElement !== typingEl) return;
  if (e.target.closest("#practice .controls .btn, #modes button, #topics button, #segments button, #kbdBtn")) {
    e.preventDefault();
  }
});

$("nextBtn").onclick = goNext;
$("prevBtn").onclick = goBack;
$("againBtn").onclick = showItem;
$("randomBtn").onclick = goRandom;
$("listenBtn").onclick = () => { speak(audioText()); if (mode !== "speak") typingEl.focus(); };
$("slowBtn").onclick = () => { speak(audioText(), 0.6); if (mode !== "speak") typingEl.focus(); };
$("checkBtn").onclick = checkAnswer;
$("hintBtn").onclick = () => {
  if (solved) return;
  const it = item();
  if (mode === "gap") {
    hint = Math.min(gap.answer.length, hint + 1);
    drawGap(false);
  } else {
    const total = it.type === "word" ? it.en.length : it.en.split(" ").length;
    hint = Math.min(total, hint + (it.type === "paragraph" ? 4 : 1));
    englishEl.className = "english " + it.type;
    drawHidden();
  }
  typingEl.focus();
};
$("micBtn").onclick = startSpeak;

$("soundBtn").onclick = () => {
  soundOn = !soundOn;
  save("be-sound", soundOn);
  if (!soundOn && "speechSynthesis" in window) speechSynthesis.cancel();
  drawSound();
};

$("saveText").onclick = saveText;
$("cancelText").onclick = () => {
  hideComposer();
  if (isMine() && custom.length === 0) view = "mix"; // nothing saved yet: go back
  showItem();
};
$("doImport").onclick = doImport;
$("cancelImport").onclick = () => {
  hideImporter();
  if (isMine() && custom.length === 0) view = "mix";
  showItem();
};

// From a screenshot: choose, drop, or paste a picture
$("shotFile").onchange = () => readShot($("shotFile").files[0]);
$("shotDrop").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); $("shotFile").click(); }
});
$("shotText").addEventListener("input", drawShotCount);
document.querySelectorAll("#shotSplit button").forEach((b) => {
  b.onclick = () => {
    shotSplit = b.dataset.split;
    document.querySelectorAll("#shotSplit button").forEach((x) => x.classList.toggle("active", x === b));
    drawShotCount();
  };
});
$("makeShot").onclick = makeShotCards;
$("cancelShot").onclick = () => {
  hideShot();
  resetShot();
  if (isMine() && custom.length === 0) view = "mix";
  showItem();
};

const imageIn = (list) => [...(list || [])].find((f) => f.type && f.type.startsWith("image/"));

// Paste a screenshot anywhere on the page (Ctrl + V)
document.addEventListener("paste", (e) => {
  const file = imageIn(e.clipboardData && e.clipboardData.files);
  if (!file) return; // normal text paste
  e.preventDefault();
  openShot(file);
});

// Drag a picture onto the page
document.addEventListener("dragover", (e) => {
  if (e.dataTransfer && [...e.dataTransfer.types].includes("Files")) {
    e.preventDefault();
    $("shotDrop").classList.add("over");
  }
});
document.addEventListener("dragleave", (e) => {
  if (!e.relatedTarget) $("shotDrop").classList.remove("over");
});
document.addEventListener("drop", (e) => {
  const file = imageIn(e.dataTransfer && e.dataTransfer.files);
  $("shotDrop").classList.remove("over");
  if (!file) return;
  e.preventDefault();
  openShot(file);
});

$("emptyToMix").onclick = () => openView("mix");
$("shotOpenBtn").onclick = () => openShot();
$("replayBtn").onclick = replayMisses;
$("continueBtn").onclick = continueSession;

$("goalBtn").onclick = () => openGoal($("goalPop").hidden);
$("goalSave").onclick = saveGoal;
$("kbdBtn").onclick = () => openKbd($("kbdPop").hidden);
$("celebrate").onclick = () => { $("celebrate").hidden = true; };

// Click outside a popover closes it
document.addEventListener("click", (e) => {
  if (!$("goalPop").hidden && !e.target.closest(".goal-wrap")) openGoal(false);
  if (!$("kbdPop").hidden && !e.target.closest(".kbd-hint")) openKbd(false);
});

document.querySelectorAll("#modes button").forEach((b) => {
  b.onclick = () => setMode(b.dataset.mode);
});

// Speak mode only where the browser supports it
if (!SpeechRec) {
  document.querySelector('#modes [data-mode="speak"]').hidden = true;
  $("speakNotice").hidden = false;
}

// Start
pruneWeak();
drawSound();
drawDaily();
setMode("copy");
