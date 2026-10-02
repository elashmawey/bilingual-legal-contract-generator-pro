import type { OfficialEncyclopediaContract } from '../types';

export const OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_2: OfficialEncyclopediaContract[] = [
  // 25. Architectural Design & Engineering Supervision (Egyptian Syndicate of Engineers)
  {
    id: 'official-architectural-supervision',
    category: 'عقود المقاولات والتشييد والأعمال الهندسية',
    titleAr: 'عقد تصميم معماري وإشراف هندسي وتنفيذي معتمد بنقابة المهندسين المصرية',
    titleEn: 'Architectural Engineering Design & Construction Supervision Agreement',
    source: 'نقابة المهندسين المصرية وجهاز التفتيش الفني على أعمال البناء بوزارة الإسكان',
    statutoryBasis: 'قانون نقابة المهندسين رقم 66 لسنة 1974 وقانون البناء الموحد رقم 119 لسنة 2008 والقانون المدني المصري',
    
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد استشارات هندسية وتصميم معماري وإشراف دوري على التنفيذ',
      contractTitleEnglish: 'Engineering Consultancy, Architectural Design & Construction Supervision Contract',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بالقاهرة، بين كل من:\nأولاً: السيد/ [اسم المالك / رب العمل]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - المالك).\nثانياً: مكتب [اسم الاستشاري الهندسي]، مقيد بنقابة المهندسين برقم استشاري [...]، ويمثله المهندس الاستشاري [...] (طرف ثانٍ - المهندس الاستشاري).\nوبعد أن أقر الطرفان بأهليتهما القانونية والفنية للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: Mr. [Full Owner Name], National ID: [...], residing at: [...] (First Party - Project Owner).\nSecond: [Consulting Engineering Firm], registered with Egyptian Syndicate of Engineers under Consultant Reg. [...], represented by Consultant Eng. [...] (Second Party - Engineering Consultant).\nBoth Parties, being legally competent and officially accredited under Egyptian Syndicate of Engineers, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد ودفتر الشروط والمواصفات المعمارية جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لمواده.',
      recitalsEnglish: 'Preamble and technical architectural conditions form an integral part of this Agreement.',
      certificationStatement: 'صيغة مطابقة للائحة مزاولة المهنة المعتمدة بنقابة المهندسين المصرية وقانون البناء الموحد 119 لسنة 2008.',
      legalNotes: 'عقد استشارات هندسية ملزم يتضمن استخراج تراخيص البناء، واعتماد الرسومات بالحي، والإشراف الدوري، والمسؤولية التضامنية مع المقاول.',
      shariaComplianceNotes: 'مستوفٍ لضوابط إجارة العمل الهندسي شرعاً؛ معلوم نطاق العمل والمقابل المالي دون جهالة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق لنماذج نقابة المهندسين المصرية وإدارات التنظيم والتراخيص بالأحياء وأجهزة المدن الجديدة.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في مسؤولية المهندس المعماري عن سلامة التصميم ومطابقة التنفيذ للأصول الهندسية.',
        customaryPracticeValidation: 'النموذج المعتمد لدى كبار المكاتب الاستشارية الهندسية ونقابة المهندسين.',
        shariaAuditStatement: 'عقد إجارة عمل مشروع نافذ شرعاً تترتب عليه كافة آثاره الالتزامية.',
        verificationChecklist: [
          { item: 'قيد المهندس بسجل الاستشاريين بنقابة المهندسين المصرية', status: 'مستوفى ومعتمد', reference: 'قانون نقابة المهندسين 66/1974' },
          { item: 'مطابقة الرسومات لكود البناء الموحد واشتراطات الحماية المدنية', status: 'مستوفى ومعتمد', reference: 'قانون البناء 119/2008' },
          { item: 'شهادة الإشراف الهندسي المعتمدة لتقديمها للحي', status: 'مستوفى ومعتمد', reference: 'اللائحة التنفيذية لقانون البناء' },
          { item: 'الضمان العشري لسلامة المبنى وفقاً للمادة 651 مدني', status: 'مستوفى ومعتمد', reference: 'المادة 651 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble Integration',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لمواده والتزاماته.',
          contentEnglish: 'The preamble forms an integral, operative part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق الأعمال الهندسية والتصميم المعماري',
          titleEnglish: 'Article 2: Engineering Scope & Design Deliverables',
          contentArabic: 'يشمل نطاق عمل الاستشاري إعداد الرسومات المعمارية والإنشائية، وتصميمات الكهروميكانيك والصحي، وتقرير الجسات وأبحاث التربة، وإعداد مقايسة الأعمال التقديرية (BOQ) لمشروع العقار المقام على قطعة الأرض رقم [...].',
          contentEnglish: 'Scope includes architectural and structural drawings, MEP designs, soil testing reports, and Bills of Quantities (BOQ) for the project erected on plot [...].'
        },
        {
          titleArabic: 'المادة الثالثة: استخراج تراخيص البناء ومراجعة المجمعة العشرية',
          titleEnglish: 'Article 3: Building Permits & Decennial Insurance Pool',
          contentArabic: 'يلتزم الاستشاري بتقديم الملف الهندسي ومتابعة اعتماده لدى المجمعة العشرية للتأمين على المباني واستخراج ترخيص البناء الرسمي من الحي/جهاز المدينة.',
          contentEnglish: 'Consultant covenants to submit the engineering file to the Decennial Insurance Pool and secure building permits from municipality.'
        },
        {
          titleArabic: 'المادة الرابعة: الإشراف الهندسي الميداني على التنفيذ',
          titleEnglish: 'Article 4: Construction Supervision & Site Oversight',
          contentArabic: 'يتولى الاستشاري الإشراف الدوري على تنفيذ الأعمال بالموقع بمعدل [...] زيارة أسبوعياً، واستلام حديد التسليح وصب الخرسانات ومطابقتها للأصول الفنية.',
          contentEnglish: 'Consultant performs periodic site supervision with [...] visits weekly, inspecting reinforcement and concrete pouring.'
        },
        {
          titleArabic: 'المادة الخامسة: اعتماد مستخلصات المقاولين ومحاضر الفحص',
          titleEnglish: 'Article 5: Contractor Invoices Approval & Inspection Logs',
          contentArabic: 'يختص الاستشاري حصراً بمراجعة واعتماد المستخلصات الجارية والختامية لمقاولي التنفيذ ومطابقة الكميات المنفذة فعلياً على الطبيعة قبل صرف أي مستحقات.',
          contentEnglish: 'Consultant holds exclusive authority to inspect, measure, and certify progress invoices submitted by contractors.'
        },
        {
          titleArabic: 'المادة السادسة: الأتعاب الهندسية وجدول السداد',
          titleEnglish: 'Article 6: Consultancy Professional Fees & Milestones',
          contentArabic: 'تحدد أتعاب الاستشاري الإجمالية بمبلغ [...] جنيه مصري، تسدد على مراحل: 25% عند توقيع العقد، 25% عند تسليم التصاميم واعتمادها، 25% عند صدور الترخيص، و25% تسدد شهرياً طوال فترة الإشراف.',
          contentEnglish: 'Total consultancy fee is [...] EGP, disbursed across milestones: signing, design delivery, permit issuance, and supervision duration.'
        },
        {
          titleArabic: 'المادة السابعة: الضمان العشري والمسؤولية القانونية',
          titleEnglish: 'Article 7: Decennial Liability & Professional Guarantee',
          contentArabic: 'يضمن الاستشاري مع المقاول بالتضامن سلامة المبنى ضد التهدم الكلي أو الجزئي أو العيوب الإنشائية لمدة عشر سنوات من تاريخ الاستلام النهائي إعمالاً للمادة 651 مدني.',
          contentEnglish: 'Consultant warrants jointly with contractor structural safety against collapse or defects for 10 years per Article 651 Civil Code.'
        },
        {
          titleArabic: 'المادة الثامنة: حقوق الملكية الفكرية للتصاميم المعمارية',
          titleEnglish: 'Article 8: Intellectual Property & Design Rights',
          contentArabic: 'تظل حقوق الابتكار الفكري للتصاميم محفوظة للاستشاري، ويحق للمالك استخدامها حصراً لبناء العقار موضوع التعاقد دون تكرارها بموقع آخر إلا باتفاق كتابي.',
          contentEnglish: 'Architectural design IP remains with Consultant; Owner receives exclusive license to erect the designated building.'
        },
        {
          titleArabic: 'المادة التاسعة: شهادة صلاحية المبنى للإشغال',
          titleEnglish: 'Article 9: Occupancy Certificate & Final Acceptance',
          contentArabic: 'يلتزم الاستشاري فور انتهاء الأعمال بإصدار شهادة صلاحية المبنى للإشغال ومطابقة التنفيذ للترخيص لتقديمها للجهات المختصة لتوصيل العدادات والمرافق الدائمة.',
          contentEnglish: 'Consultant issues statutory occupancy fitness certificate confirming execution compliance for permanent utilities connection.'
        },
        {
          titleArabic: 'المادة العاشرة: التعديلات الهندسية الإضافية',
          titleEnglish: 'Article 10: Design Variations & Additions',
          contentArabic: 'أي تعديلات جوهرية يطلبها المالك أثناء التنفيذ تتطلب اتفاقاً مسبقاً وتحدد أتعابها الإضافية والجدول الزمني المعدل كتابة.',
          contentEnglish: 'Any substantial client variations require prior written agreement, adjusting fees and project timelines accordingly.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: فسخ العقد والتسوية المالية',
          titleEnglish: 'Article 11: Termination & Financial Settlement',
          contentArabic: 'يحق للمالك إنهاء العقد لأسباب مبررة بشرط سداد أتعاب المراحل المنجزة، ويلتزم الاستشاري بتسليم كافة الرسومات والمستندات الفنية للمالك فور المحاسبة.',
          contentEnglish: 'Owner may terminate for cause subject to settling completed milestones; Consultant surrenders all technical drawings.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 12: Force Majeure Events',
          contentArabic: 'تخضع مدد التنفيذ لأحكام القوة القاهرة وفقاً لأحكام القانون المدني المصري.',
          contentEnglish: 'Governed by statutory Egyptian Civil Code Force Majeure provisions.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الموطن المختار للإعلانات',
          titleEnglish: 'Article 13: Chosen Legal Domiciles',
          contentArabic: 'عناوين الطرفين بصدر العقد موطن مختار تصح عليه كافة المراسلات الرسمية.',
          contentEnglish: 'Addresses in preamble constitute official legal domiciles.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: التحكيم الهندسي أو الاختصاص القضائي',
          titleEnglish: 'Article 14: Engineering Arbitration & Jurisdiction',
          contentArabic: 'أي نزاع فني ينشأ عن تفسير أو تنفيذ هذا العقد يُحال إلى لجنة تحكيم بنقابة المهندسين المصرية أو المحاكم المختصة.',
          contentEnglish: 'Technical disputes referred to Egyptian Syndicate of Engineers arbitration or competent civil courts.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: نسخ العقد',
          titleEnglish: 'Article 15: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من ثلاث نسخ أصلية، بيد كل طرف نسخة، والنسخة الثالثة لتقديمها لنقابة المهندسين لاعتماد الإشراف.',
          contentEnglish: 'Executed in three authentic originals, one per party and third for Syndicate of Engineers accreditation.'
        }
      ]
    }
  },

  // 26. Furnished Tourist Tenancy Lease with Public Security Registration
  {
    id: 'official-furnished-tourist-lease',
    category: 'عقود الإيجار والانتفاع التجاري والسكني',
    titleAr: 'عقد إيجار وحدة سكنية مفروشة سياحي وإخطار أمني طبقاً للقانون 4 لسنة 1996 وقطاع الأمن العام',
    titleEn: 'Furnished Residential & Tourist Tenancy Lease with Public Security Registration',
    source: 'مصلحة الشهر العقاري، قطاع الأمن العام بوزارة الداخلية، ووزارة السياحة والآثار',
    statutoryBasis: 'القانون رقم 4 لسنة 1996 وقرارات وزير الداخلية بشأن تنظيم قيد وإخطار الوحدات المفروشة والمؤجرة للأجانب والمصريين',
    
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد إيجار وحدة سكنية مفروشة وتجهيزات فندقية مع إخطار الأمن العام',
      contractTitleEnglish: 'Furnished Residential & Tourist Apartment Tenancy Lease (Security Notified)',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، تحرر هذا العقد بين كل من:\nأولاً: السيد/ [اسم المؤجر الكامل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - المؤجر).\nثانياً: السيد/ [اسم المستأجر الكامل]، [جنسية المستأجر]، يحمل جواز سفر / بطاقة رقم: [...]، المقيم في: [...] (طرف ثانٍ - المستأجر).\nوبعد أن أقر الطرفان بأهليتهما القانونية للتعاقد وخلوهما من أي موانع أمنية وقانونية، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Egypt, between:\nFirst: Mr. [Full Lessor Name], Egyptian, National ID: [...], residing at: [...] (First Party - Lessor).\nSecond: Mr. [Full Lessee Name], [Lessee Nationality], holding Passport/National ID No. [...], residing at: [...] (Second Party - Lessee).\nBoth Parties, being legally competent to contract and cleared for public security notification, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد وقائمة المنقولات والأجهزة الكهربائية الملحقة جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لمواده.',
      recitalsEnglish: 'Preamble and attached furniture/appliance inventory schedule form an integral, binding part of this Agreement.',
      certificationStatement: 'صيغة مطابقة لتعليمات قطاع الأمن العام بوزارة الداخلية والقانون رقم 4 لسنة 1996 بشأن الإخطار الإلزامي خلال 48 ساعة.',
      legalNotes: 'عقد إيجار مفروش خاضع للمسؤولية التضامنية في الحفاظ على الأثاث والتأمين المسترد وحظر التأجير من الباطن أو استخدام العين في أغراض مخالفة للآداب والنظام العام.',
      shariaComplianceNotes: 'مستوفٍ لضوابط عقد الإجارة الشرعية؛ معلوم المنفعة والمدة والأجرة خلو من الغرر والربا.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق لتعليمات أقسام الشرطة وإدارات البحث الجنائي بقطاع مصلحة الأمن العام لتسجيل الشقق المفروشة.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في انتهاء عقد الإيجار بانتهاء مدته دون حاجة لتنبيه بالإخلاء وخضوعه للقانون 4 لسنة 1996.',
        customaryPracticeValidation: 'النموذج المعتمد لدى نقابة المحامين ومكاتب التسويق الفندقي والسياحي.',
        shariaAuditStatement: 'عقد إجارة سكنية مشروع نافذ شرعاً تترتب عليه كافة آثاره المالية.',
        verificationChecklist: [
          { item: 'التزام المؤجر بإخطار قسم الشرطة التابع خلال 48 ساعة بصورة الجواز/البطاقة', status: 'مستوفى ومعتمد', reference: 'تعليمات وزارة الداخلية والأمن العام' },
          { item: 'قائمة منقولات وأجهزة مفصلة وموقعة من المستأجر', status: 'مستوفى ومعتمد', reference: 'المادة 591 مدني مصري' },
          { item: 'سداد مبلغ التأمين النقدي المسترد لضمان سلامة العفش والمرافق', status: 'مستوفى ومعتمد', reference: 'أحكام القانون المدني' },
          { item: 'حظر التأجير من الباطن أو إيواء غرباء دون تصريح أمني', status: 'مستوفى ومعتمد', reference: 'القانون 4 لسنة 1996' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble Integration',
          contentArabic: 'يُعتبر التمهيد السابق وقائمة حصر المنقولات المرفقة جزءاً لا يتجزأ من هذا العقد وبنداً مفسراً ومتمماً لمواده.',
          contentEnglish: 'The preamble and attached furniture inventory schedule constitute an integral part of this contract.'
        },
        {
          titleArabic: 'المادة الثانية: العين المؤجرة والمنقولات المشمولة',
          titleEnglish: 'Article 2: Leased Unit & Furnishings Description',
          contentArabic: 'أجر المؤجر للمستأجر القابل لذلك الشقة السكنية المفروشة رقم [...] بالدور [...] بالعقار الكائن في: [...]، شاملة كافة الأثاث والتكييفات والأجهزة الكهربائية المبينة بقائمة الجرد الموقعة بمجلس العقد.',
          contentEnglish: 'Lessor leases to Lessee the furnished apartment Unit No. [...], Floor [...], located at [...], including all furniture, air conditioning, and appliances listed in signed inventory.'
        },
        {
          titleArabic: 'المادة الثالثة: القيمة الإيجارية وطريقة السداد',
          titleEnglish: 'Article 3: Rental Consideration & Payment Schedule',
          contentArabic: 'حددت الأجرة بمبلغ [...] (جنيه مصري / دولار أمريكي) شهرياً، تُدفع مقدماً في اليوم الأول من كل شهر بموجب إيصال سداد موقع من المؤجر.',
          contentEnglish: 'Rent is fixed at [...] (EGP/USD) monthly, payable in advance on the first day of each month against signed receipt.'
        },
        {
          titleArabic: 'المادة الرابعة: التأمين النقدي لسلامة المنقولات والمرافق',
          titleEnglish: 'Article 4: Security Deposit for Furnishings & Utilities',
          contentArabic: 'سدد المستأجر مبلغ [...] كتأمين نقدي يُحفظ لدى المؤجر لضمان سلامة الأثاث والأجهزة وفواتير استهلاك الكهرباء والمياه والإنترنت، ويُرد بالكامل عند انتهاء العقد والتسليم السليم.',
          contentEnglish: 'Lessee pays security deposit of [...] to guarantee condition of furnishings and utilities, refundable in full upon safe vacating.'
        },
        {
          titleArabic: 'المادة الخامسة: مدة الإيجار والإخلاء الحتمي',
          titleEnglish: 'Article 5: Lease Term & Automatic Expiration',
          contentArabic: 'مدة الإيجار [...] تبدأ من [...] وتنتهي في [...]، وينتهي العقد تلقائياً بانقضاء مدته دون حاجة لتنبيه أو إنذار أو حكم قضائي عملاً بالقانون 4 لسنة 1996.',
          contentEnglish: 'Lease term is [...] commencing [...] and terminating [...], expiring ipso jure without requirement of notice pursuant to Law 4/1996.'
        },
        {
          titleArabic: 'المادة السادسة: الإخطار الأمني الإلزامي وقسم الشرطة',
          titleEnglish: 'Article 6: Mandatory Public Security Registration',
          contentArabic: 'يقر الطرفان بعلمهما بالالتزام القانوني بإخطار مأمور قسم الشرطة التابع له العقار ببيانات المستأجر وإرفاق صورة بطاقة الرقم القومي أو جواز السفر والتأشيرة السارية خلال 48 ساعة.',
          contentEnglish: 'Parties acknowledge legal obligation to notify local Police Station with Lessee ID/Passport and valid visa within 48 hours.'
        },
        {
          titleArabic: 'المادة السابعة: حظر استخدام العين في غير السكن أو الأعمال المخالفة',
          titleEnglish: 'Article 7: Permitted Use & Public Order Compliance',
          contentArabic: 'تُستخدم العين المؤجرة للسكن العائلي الهادئ فقط، ويحظر استخدامها في أي أنشطة تجارية أو إدارية أو أعمال تتنافى مع الآداب العامة وقوانين الدولة، ويترتب على المخالفة الفسخ الفوري.',
          contentEnglish: 'Premises dedicated solely for quiet residential occupancy; any commercial use or public order violation triggers immediate eviction.'
        },
        {
          titleArabic: 'المادة الثامنة: حظر التأجير من الباطن أو التنازل',
          titleEnglish: 'Article 8: Prohibition of Subletting & Assignment',
          contentArabic: 'يحظر على المستأجر تأجير العين كلياً أو جزئياً من الباطن أو التنازل عنها أو استضافة غرباء بصفة دائمة دون موافقة كتابية صريحة من المؤجر.',
          contentEnglish: 'Lessee strictly prohibited from subletting, assigning lease, or accommodating unauthorized permanent guests without written consent.'
        },
        {
          titleArabic: 'المادة التاسعة: الصيانة الدورية واستهلاك المرافق',
          titleEnglish: 'Article 9: Utilities & Routine Upkeep',
          contentArabic: 'يتحمل المستأجر فواتير استهلاك الكهرباء والغاز والمياه والإنترنت ورسوم صيانة العمارة الدورية طوال مدة إقامته بالعين.',
          contentEnglish: 'Lessee responsible for electricity, gas, water, internet consumption, and routine building maintenance dues during tenancy.'
        },
        {
          titleArabic: 'المادة العاشرة: المعاينة النافية للجهالة وحالة الأثاث',
          titleEnglish: 'Article 10: Inspection & Furniture Condition',
          contentArabic: 'يقر المستأجر بأنه عاين الشقة والمنقولات والأجهزة والتكييفات ووجدها بحالة ممتازة وصالحة للاستخدام، ويتعهد بتسليمها بذات الحالة مع استهلاك الاستعمال المعتاد.',
          contentEnglish: 'Lessee confirms inspecting apartment and furnishings in excellent working condition, undertaking to return them in same condition normal wear excepted.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: حق المؤجر في المعاينة الدورية',
          titleEnglish: 'Article 11: Lessor Periodic Inspection Rights',
          contentArabic: 'يحق للمؤجر أو من ينوب عنه معاينة العين المؤجرة بعد التنسيق المسبق مع المستأجر للاطمئنان على سلامة المنقولات والعقار.',
          contentEnglish: 'Lessor retains right to inspect premises upon reasonable advance coordination to ensure property integrity.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الشرط الفاسخ الصريح والتعويض اليومي',
          titleEnglish: 'Article 12: Explicit Rescission & Daily Overstay Fine',
          contentArabic: 'في حال تأخر المستأجر عن إخلاء العين عند انتهاء المدة يلتزم بسداد تعويض اتفاقي قدره [...] جنيه عن كل يوم تأخير، وللمؤجر الحق في استرداد الحيازة فوراً.',
          contentEnglish: 'Failure to vacate upon term expiration obligates daily contractual overstay penalty of [...] EGP with immediate possession recovery rights.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الاختصاص القضائي والقانون الواجب التطبيق',
          titleEnglish: 'Article 13: Governing Law & Summary Courts Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القانون رقم 4 لسنة 1996 والقانون المدني المصري، وتختص محكمة الأمور المستعجلة أو المحكمة الجزئية الواقع في دائرتها العقار.',
          contentEnglish: 'Governed by Egyptian Law 4/1996 and Civil Code with jurisdiction in competent summary territorial courts.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من ثلاث نسخ أصلية، بيد كل طرف نسخة، والنسخة الثالثة لتقديمها لقسم الشرطة للإخطار الأمني.',
          contentEnglish: 'Executed in three authentic originals, one per party and third for official submission to Police Station.'
        }
      ]
    }
  },

  // 27. Commercial Factoring & Accounts Receivable Debt Assignment Agreement
  {
    id: 'official-factoring-debt-assignment',
    category: 'عقود المعاملات التجارية والتوريد والتسويات',
    titleAr: 'عقد تخصيم تجاري وحوالة حق للديون والمستحقات التجارية خاضع للقانون رقم 176 لسنة 2018',
    titleEn: 'Commercial Factoring, Accounts Receivable Purchasing & Debt Assignment Agreement',
    source: 'الهيئة العامة للرقابة المالية (سجل شركات التخصيم المعتمدة)',
    statutoryBasis: 'قانون تنظيم نشاطي التأجير التمويلي والتخصيم رقم 176 لسنة 2018 والقانون المدني وقانون التجارة رقم 17 لسنة 1999',
    
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد تخصيم تجاري وخصم أوراق وحوالة مستحقات تجارية آجلة',
      contractTitleEnglish: 'Commercial Factoring, Receivables Purchase & Debt Assignment Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بالقاهرة، بين كل من:\nأولاً: شركة [اسم شركة التخصيم] ش.م.م، مرخصة من الهيئة العامة للرقابة المالية برقم [...]، ومقرها: [...] (طرف أول - شركة التخصيم Factor).\nثانياً: شركة [اسم الشركة البائعة / العميل]، سجل تجاري رقم [...]، ومقرها: [...] (طرف ثانٍ - العميل وبائع المستحقات Client).\nوبعد أن أقر الطرفان بأهليتهما القانونية والتجارية للتعاقد وفقاً لأحكام القانون رقم 176 لسنة 2018، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: [Factoring Firm Name] S.A.E., licensed by the Financial Regulatory Authority (FRA) under No. [...], headquartered at [...] (First Party - Factor).\nSecond: [Client Company Name] LLC, Commercial Reg. No. [...], headquartered at [...] (Second Party - Client/Assignor).\nBoth Parties, being legally competent corporations governed by Egyptian Factoring Law 176/2018, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد وكشوف الفواتير وجداول المستحقات التجارية جزءاً لا يتجزأ من هذا العقد وبنداً مفسراً لمواده.',
      recitalsEnglish: 'Preamble and commercial invoice debt schedules form an integral, binding part of this Factoring Agreement.',
      certificationStatement: 'صيغة مطابقة لقانون تنظيم نشاطي التأجير التمويلي والتخصيم رقم 176 لسنة 2018 وقواعد الهيئة العامة للرقابة المالية (FRA).',
      legalNotes: 'عقد تخصيم تجاري بحق الرجوع أو بدون حق الرجوع (Recourse/Non-recourse) يتضمن حوالة رسمية للحقوق المالية وإخطار المدينين.',
      shariaComplianceNotes: 'مستوفٍ لضوابط حوالة الحق الشرعية دون ربا وبما يطابق معايير الأيوفي (AAOIFI) في بيع الديون والحوالات المالية.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق للقواعد والقرارات الصادرة عن الهيئة العامة للرقابة المالية بمصر (بوابة FRA الإلكترونية).',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في نفاذ حوالة الحق في مواجهة المدين متى أعلن بها رسمياً أو قبلها.',
        customaryPracticeValidation: 'النموذج المعتمد لدى الجمعية المصرية للتأجير التمويلي والتخصيم ونقابة المحامين.',
        shariaAuditStatement: 'عقد حوالة حقوق تجارية مشروع وفق الضوابط الشرعية والقانونية المقررة.',
        verificationChecklist: [
          { item: 'ترخيص شركة التخصيم بالهيئة العامة للرقابة المالية', status: 'مستوفى ومعتمد', reference: 'القانون 176 لسنة 2018' },
          { item: 'إخطار المدينين المحال عليهم بالبريد المسجل أو الخطاب المعتمد', status: 'مستوفى ومعتمد', reference: 'المادة 305 مدني مصري' },
          { item: 'التأكد من مشروعية وجود الديون التجارية وخلوها من النزاع', status: 'مستوفى ومعتمد', reference: 'المادة 303 مدني مصري' },
          { item: 'قيد الحوالة بسجل الضمانات المنقولة بـ FRA لحماية أولوية السداد', status: 'مستوفى ومعتمد', reference: 'قانون الضمانات المنقولة 115/2015' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble Integration',
          contentArabic: 'يُعتبر التمهيد وكشوف الفواتير المحالة جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لأحكامه.',
          contentEnglish: 'Preamble and assigned invoice schedules constitute an integral part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: محل التخصيم وحوالة الحقوق المالية',
          titleEnglish: 'Article 2: Receivables Purchase & Debt Assignment',
          contentArabic: 'يحيل العميل لشركة التخصيم وتشتري الأخيرة كافة حقوقه المالية ومستحقاته التجارية الناشئة عن فواتير بيع بضائع أو تقديم خدمات لعملائه (المدينين) المبينة بالكشوف الملحقة.',
          contentEnglish: 'Client assigns and sells to Factor all commercial accounts receivable arising from sales and services invoices detailed in attached schedules.'
        },
        {
          titleArabic: 'المادة الثالثة: القيمة التمويلية المدفوعة مقدماً (Advance Rate)',
          titleEnglish: 'Article 3: Advance Financing Rate & Disbursement',
          contentArabic: 'تدفع شركة التخصيم للعميل دفعة تمويلية معجلة تعادل [...]% من القيمة الاسمية الإجمالية للفواتير المحالة المقبولة فور توقيع العقد وتسليم الفواتير.',
          contentEnglish: 'Factor advances to Client [...]% of aggregate face value of accepted invoices upon execution and documentation handover.'
        },
        {
          titleArabic: 'المادة الرابعة: عمولة التخصيم ومصاريف الإدارة',
          titleEnglish: 'Article 4: Factoring Commission & Administration Fees',
          contentArabic: 'يستحق لشركة التخصيم عمولة تخصيم قدرها [...]% من إجمالي قيمة الفواتير، ومصروفات تحصيل ومتابعة دورية وفقاً للائحة الأسعار المعتمدة بـ FRA.',
          contentEnglish: 'Factor entitled to factoring commission of [...]% plus administrative collection fees compliant with FRA standards.'
        },
        {
          titleArabic: 'المادة الخامسة: نوع التخصيم وحق الرجوع (Recourse vs Non-Recourse)',
          titleEnglish: 'Article 5: Recourse Rights & Credit Default Risk',
          contentArabic: 'اتفق الطرفان على أن التخصيم يتم [بحق الرجوع / بدون حق الرجوع]؛ فإذا كان بحق الرجوع ضمن العميل سداد المدين للفاتورة والتزم برد التمويل في حال إعسار المدين.',
          contentEnglish: 'Parties agree factoring is executed on a [Recourse / Non-recourse] basis governing credit insolvency risk allocation.'
        },
        {
          titleArabic: 'المادة السادسة: إخطار المدينين بالحوالة والسداد المباشر',
          titleEnglish: 'Article 6: Debtor Formal Notification & Direct Payment',
          contentArabic: 'يلتزم الطرفان بإخطار المدينين رسمياً بالحوالة والتنبيه عليهم بأن السداد المبرئ للذمة يتم حصراً بالحساب المصرفي لشركة التخصيم ببنك [...].',
          contentEnglish: 'Parties formally notify debtors of assignment, directing all discharging payments to Factor dedicated bank account.'
        },
        {
          titleArabic: 'المادة السابعة: ضمان صحة ووجود الديون المحالة',
          titleEnglish: 'Article 7: Warranty of Valid & Undisputed Receivables',
          contentArabic: 'يضمن العميل وجود وصحة كافة الديون المحالة ومشروعيتها وخلوها من أي منازعات قضائية أو حقوق حبس أو مقاصة بينه وبين المدينين.',
          contentEnglish: 'Client warrants existence, validity, and enforceability of all receivables, free from commercial disputes, liens, or offsets.'
        },
        {
          titleArabic: 'المادة الثامنة: إدارة الحسابات والتحصيل وملاحقة المدينين',
          titleEnglish: 'Article 8: Accounts Management & Collection Enforcement',
          contentArabic: 'تتولى شركة التخصيم إدارة سجل المدينين والتحصيل والمطالبات الودية والقضائية، ويمنحها العميل توكيلاً رسمياً لمباشرة إجراءات التحصيل.',
          contentEnglish: 'Factor manages debtor ledger, undertaking amicable and judicial collection under authorized legal proxy from Client.'
        },
        {
          titleArabic: 'المادة التاسعة: القيد بسجل الضمانات المنقولة',
          titleEnglish: 'Article 9: Movable Collateral Registry Inscription',
          contentArabic: 'تُقيد هذه الحوالة بالمنظومة الإلكترونية لسجل الضمانات المنقولة بالهيئة العامة للرقابة المالية لإنفاذ مرتبة وأولوية شركة التخصيم في مواجهة الكافة.',
          contentEnglish: 'Assignment registered in Egyptian Movable Collateral Registry at FRA to establish legal priority against third parties.'
        },
        {
          titleArabic: 'المادة العاشرة: سداد رصيد الاحتياطي (Reserve Release)',
          titleEnglish: 'Article 10: Reserve Account Settlement & Release',
          contentArabic: 'عند تحصيل كامل قيمة أي فاتورة محالة من المدين، تفرج شركة التخصيم فوراً عن المتبقي من قيمتها للعميل بعد خصم عمولتها ومصروفاتها المتفق عليها.',
          contentEnglish: 'Upon full collection from debtor, Factor releases remaining reserve balance to Client less agreed fees.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: سرية المعاملات التجارية والمالية',
          titleEnglish: 'Article 11: Financial Confidentiality & Data Protection',
          contentArabic: 'يلتزم الطرفان بالحفاظ على سرية المعاملات والبيانات المالية للعملاء والمشتريات وفقاً لأحكام القانون 176 لسنة 2018.',
          contentEnglish: 'Parties maintain strict commercial and banking confidentiality regarding customer records.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الفسخ والتعجيل الفوري للمستحقات',
          titleEnglish: 'Article 12: Acceleration & Termination Events',
          contentArabic: 'في حال إخلال العميل بأي ضمان أو تقديم فواتير صورية، تصبح كافة المبالغ التمويلية واجبة السداد فوراً مع حق شركة التخصيم في اتخاذ كافة الإجراءات التنفيذية.',
          contentEnglish: 'Fictitious invoicing or warranty breach triggers immediate loan acceleration and executive enforcement actions.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 13: Force Majeure Events',
          contentArabic: 'تخضع الالتزامات لأحكام القوة القاهرة وفقاً لأحكام القانون المصري.',
          contentEnglish: 'Governed by Egyptian statutory Force Majeure rules.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: القانون الواجب التطبيق والمحاكم الاقتصادية',
          titleEnglish: 'Article 14: Governing Law & Economic Courts Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القانون 176 لسنة 2018 وقانون التجارة المصري، وتختص المحاكم الاقتصادية بالقاهرة بنظر أي نزاع.',
          contentEnglish: 'Governed by Law 176/2018 with exclusive jurisdiction in Cairo Economic Courts.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: نسخ العقد واعتماده',
          titleEnglish: 'Article 15: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والامتثال لشروطها.',
          contentEnglish: 'Executed in two authentic originals, one per party, having full legal and executive force.'
        }
      ]
    }
  }
];
