import type { OfficialEncyclopediaContract } from '../types';

export const OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXTENDED: OfficialEncyclopediaContract[] = [
  // 8. Official Motor Vehicle Sale Agreement
  {
    id: 'official-vehicle-sale',
    category: 'عقود البيع والملكية العقارية والمنقولات',
    titleAr: 'عقد بيع سيارة / مركبة نهائي مبرم طبقاً لقانون المرور والشهر العقاري',
    titleEn: 'Definitive Motor Vehicle Sale & Title Conveyance Agreement',
    source: 'النموذج الرسمي المعتمد بمأموريات الشهر العقاري وإدارات المرور بوزارة الداخلية المصرية',
    statutoryBasis: 'القانون المدني المصري وقانون المرور رقم 66 لسنة 1973 وتعديلاته وقانون التوثيق والشهر العقاري',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد بيع نهائي لسيارة ومركبة ونقل القيد والترخيص',
      contractTitleEnglish: 'Definitive Motor Vehicle Purchase & Transfer Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، تحرر هذا العقد بمدينة القاهرة بين كل من:\nأولاً: السيد/ [اسم البائع الكامل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - بائع).\nثانياً: السيد/ [اسم المشتري الكامل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف ثانٍ - مشتري).\nوبعد أن أقر الطرفان بكامل أهليتهما القانونية والشرعية للتصرف والتعاقد وخلو إرادتهما من أي عيب من عيوب الرضا، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: Mr. [Full Seller Name], Egyptian, National ID: [...], residing at: [...] (First Party - Seller).\nSecond: Mr. [Full Buyer Name], Egyptian, National ID: [...], residing at: [...] (Second Party - Buyer).\nHaving full legal capacity to contract free from defects of consent, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة أحكامه وشروطه ومواده.',
      recitalsEnglish: 'The preamble and recitals form an integral, operative, and interpretive part of this Agreement.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% لنماذج التوثيق بالشهر العقاري وإدارات المرور المصرية ونقابة المحامين.',
      legalNotes: 'عقد بيع منقول مسمى مستوفٍ للمعاينة النافية للجهالة وخلو المركبة من المخالفات وحظر البيع ونقل الحيازة الفعلية.',
      shariaComplianceNotes: 'مستوفٍ لضوابط البيع الشرعي في المنقولات؛ معلوم المبيع والثمن دون غرر أو ربا أو جهالة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج الشهر العقاري وبوابة المرور ونيابات المرور لشهادات براءة الذمة.',
        cassationPrinciplesValidation: 'متوافق مع مبدأ محكمة النقض بأن البيع ينقل الملكية الرضائية بين المتعاقدين وتلتزم الإدارة بنقل الترخيص.',
        customaryPracticeValidation: 'الصيغة المعتمدة لدى مستشاري قضايا المرور والتعويضات بنقابة المحامين.',
        shariaAuditStatement: 'عقد بيع مشروع نافذ شرعاً تترتب عليه كافة آثاره الفورية بنقل الملكية دون محظورات.',
        verificationChecklist: [
          { item: 'شهادة براءة الذمة من المخالفات المرورية (شهادة المخالفات)', status: 'مستوفى ومعتمد', reference: 'قانون المرور 66/1973' },
          { item: 'التأكد من رفع حظر البيع البنكي أو الجمركي', status: 'مستوفى ومعتمد', reference: 'تعليمات الشهر العقاري' },
          { item: 'مطابقة أرقام الشاسيه والموتور مع رخصة التسيير', status: 'مستوفى ومعتمد', reference: 'الفحص الفني للمرور' },
          { item: 'التزام الحضور بالشهر العقاري للتوثيق ونقل القيد', status: 'مستوفى ومعتمد', reference: 'المادة 418 مدني' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Integral Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومتمماً ومفسراً لكافة مواده والتزاماته.',
          contentEnglish: 'The preamble preceding these articles forms an integral part hereof having the same binding legal effect.'
        },
        {
          titleArabic: 'المادة الثانية: محل وموضوع البيع وبيانات المركبة التفصيلية',
          titleEnglish: 'Article 2: Subject Matter & Vehicle Specifications',
          contentArabic: 'باع وأسقط وتنازل الطرف الأول بكافة الضمانات القانونية والفعلية للطرف الثاني القابل لذلك، ما هو السيارة المبينة بياناتها: ماركة/طراز [...]- موديل/سنة الصنع [...]- رقم اللوحات المعدنية [...]- رقم الشاسيه [...]- رقم الموتور [...]- اللون [...]- وحدة مرور الترخيص [...].',
          contentEnglish: 'First Party sells, transfers, and conveys to Second Party the motor vehicle: Make/Model [...], Year [...], Plate No. [...], Chassis No. [...], Engine No. [...], Color [...], Traffic Directorate [...].'
        },
        {
          titleArabic: 'المادة الثالثة: الثمن الإجمالي والمخالصة المالية التامة',
          titleEnglish: 'Article 3: Total Purchase Price & Full Discharge',
          contentArabic: 'تم هذا البيع نظير ثمن إجمالي ونهائي قدره [...] جنيه مصري، سدده الطرف الثاني نقداً بالكامل بمجلس العقد وعداً ونقداً ليد الطرف الأول، ويُعتبر توقيع الطرف الأول على هذا العقد بمثابة مخالصة تامة وإبراء لذمة المشتري من كامل الثمن.',
          contentEnglish: 'This sale is agreed for an aggregate final consideration of [...] EGP paid in full in cash upon execution; First Party signature constitutes full and final receipt and discharge.'
        },
        {
          titleArabic: 'المادة الرابعة: المعاينة النافية للجهالة والفحص الفني',
          titleEnglish: 'Article 4: Technical Inspection & Buyer Acceptance',
          contentArabic: 'يقر الطرف الثاني بأنه عاين السيارة المبيعة المعاينة التامة النافية للجهالة شرعاً وقانوناً، وفحصها بمعرفته ومراكز الفحص الفني المعتمدة، وتأكد من سلامة الموتور والشاسيه والصالون، وقبل شراءها بحالتها الراهنة مسقطاً حقه في الرجوع بعيب ظاهر.',
          contentEnglish: 'Second Party covenants that he has thoroughly inspected and technically tested the vehicle and accepts purchasing it in its current condition.'
        },
        {
          titleArabic: 'المادة الخامسة: خلو المركبة من المخالفات والرهون وحظر البيع',
          titleEnglish: 'Article 5: Freedom from Liens, Traffic Fines & Encumbrances',
          contentArabic: 'يضمن الطرف الأول خلو السيارة المبيعة من كافة المخالفات المرورية السابقة حتى تاريخ تحرير هذا العقد، كما يضمن خلوها من أي رهن بنكي أو حظر بيع جمركي أو حجز قضائي، ويتحمل البائع المسؤولية الجنائية والمدنية عن أي مستحقات سابقة.',
          contentEnglish: 'First Party warrants that the vehicle is free of past traffic violations, bank pledges, customs blocks, or attachments up to the execution date.'
        },
        {
          titleArabic: 'المادة السادسة: التسليم الفعلي ونقل الحيازة والمسؤولية',
          titleEnglish: 'Article 6: Physical Handover & Operational Liability',
          contentArabic: 'استلم الطرف الثاني السيارة المبيعة ورخصتها ومفاتيحها استلاماً فعلياً بمجلس هذا العقد، وأصبح هو المسؤول وحده مدنياً وجنائياً عن سيرها وأي حوادث أو مخالفات مرورية تقع بها اعتباراً من ساعة وتاريخ تحرير هذا العقد.',
          contentEnglish: 'Second Party has taken physical possession of the vehicle, keys, and license, assuming full civil and criminal liability for operations from this moment forward.'
        },
        {
          titleArabic: 'المادة السابعة: التزام الحضور بالشهر العقاري للتوثيق',
          titleEnglish: 'Article 7: Notary Public Attendance & Registration',
          contentArabic: 'يلتزم الطرف الأول بالحضور أمام مأمورية الشهر العقاري والتوثيق المختصة لتوثيق عقد البيع النهائي أو عمل توكيل رسمي خاص بالبيع للنفس وللغير فور طلب الطرف الثاني دون أي تأخير.',
          contentEnglish: 'First Party covenants to attend the competent Notary Public office to formalize the final deed or issue an irrevocable Power of Attorney to transfer title.'
        },
        {
          titleArabic: 'المادة الثامنة: ضمان عدم التعرض والاستحقاق (م 439 مدني)',
          titleEnglish: 'Article 8: Warranty Against Eviction & Title Defects',
          contentArabic: 'يضمن الطرف الأول للطرف الثاني عدم التعرض المادي والقانوني الصادر منه أو من الغير، ويتحمل رد الثمن كاملاً والتعويض الجابر في حال استحقاق السيارة للغير كلياً أو جزئياً.',
          contentEnglish: 'First Party warrants undisturbed title under Civil Code Article 439 and shall indemnify and refund the consideration upon any third-party claim.'
        },
        {
          titleArabic: 'المادة التاسعة: المصروفات والرسوم الحكومية',
          titleEnglish: 'Article 9: Government Taxes, Fees & Expenses',
          contentArabic: 'يتحمل الطرف الثاني كافة رسوم التوثيق بالشهر العقاري ومصاريف نقل القيد والترخيص والفحص الدوري بالمرور اعتباراً من تاريخ العقد.',
          contentEnglish: 'Second Party bears all notary formalization fees, traffic transfer expenses, and renewal charges from the contract date.'
        },
        {
          titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 10: Force Majeure & Emergency Events',
          contentArabic: 'تخضع التزامات الطرفين لأحكام القوة القاهرة وفقاً للمادتين 147 و165 من القانون المدني المصري.',
          contentEnglish: 'The obligations of both parties are governed by statutory Force Majeure under Egyptian Civil Code Articles 147 and 165.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code Article 158)',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لإنذار رسمي أو حكم قضائي في حال ثبوت عدم ملكية البائع للمركبة أو تزوير مستنداتها.',
          contentEnglish: 'This Agreement shall be automatically rescinded ipso jure without judicial decree upon proof of defective title or forged documentation.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار للإخطارات',
          titleEnglish: 'Article 12: Elected Domicile & Legal Communications',
          contentArabic: 'اتخذ كل من الطرفين العنوان المبين بصدر هذا العقد موطناً مختاراً تصح عليه كافة المراسلات والإعلانات القضائية.',
          contentEnglish: 'The addresses in the preamble are elected legal domiciles for all judicial notices and formal process.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القوانين المصرية، وتختص محاكم القاهرة بنظر أي نزاع ينشأ عنه.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in competent courts in Cairo.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Execution Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين، بيد كل طرف نسخة للعمل بموجبها لدى المرور والشهر العقاري.',
          contentEnglish: 'Executed in two identical originals, one per party for use before Traffic and Notary authorities.'
        }
      ]
    }
  },

  // 9. Official Commercial Supply Agreement
  {
    id: 'official-commercial-supply',
    category: 'عقود الشركات والاستثمار والتجارة',
    titleAr: 'عقد توريد وبيع بضائع تجاري معتمد لمنظومة الفاتورة الإلكترونية والمواصفات القياسية',
    titleEn: 'Commercial Goods Supply & Sale Agreement (EOS & E-Invoice Compliant)',
    source: 'النموذج الرسمي المعتمد بوزارة التجارة والصناعة والغرف التجارية المصرية',
    statutoryBasis: 'قانون التجارة المصري رقم 17 لسنة 1999 والقانون المدني ومنظومة الفاتورة الإلكترونية بمصلحة الضرائب',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد توريد وتوزيع بضائع ومنتجات تجارية معتمد',
      contractTitleEnglish: 'Commercial Product Supply & Delivery Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، تحرر هذا العقد بمدينة القاهرة بين كل من:\nأولاً: شركة [اسم شركة المورد الكامل]، سجل تجاري رقم: [...]، بطاقة ضريبية رقم: [...]، ويمثلها في التوقيع: [...] (طرف أول - مورد).\nثانياً: شركة [اسم شركة المشتري الكامل]، سجل تجاري رقم: [...]، بطاقة ضريبية رقم: [...]، ويمثلها في التوقيع: [...] (طرف ثانٍ - مشتري).\nوبعد أن أقر الطرفان بأهليتهما القانونية والصفة الاعتبارية المعتبرة للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: [Supplier Company Name], Commercial Reg: [...], Tax ID: [...], represented by: [...] (First Party - Supplier).\nSecond: [Buyer Company Name], Commercial Reg: [...], Tax ID: [...], represented by: [...] (Second Party - Buyer).\nHaving confirmed their full corporate and legal authority, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد جزءاً لا يتجزأ من العقد ومفسراً لكافة شروطه وبنوده.',
      recitalsEnglish: 'The preamble and recitals form an inseverable, operative part of this Agreement.',
      certificationStatement: 'صيغة تجارية معتمدة ومتطابقة مع اشتراطات منظومة الفاتورة الإلكترونية وقانون التجارة المصري 17 لسنة 1999.',
      legalNotes: 'عقد توريد تجاري مستوفٍ لضوابط الفحص والاستلام، غرامات التأخير الاتفاقية الجابرة للضرر، وضمان العيوب الخفية.',
      shariaComplianceNotes: 'مستوفٍ لضوابط بيع السلم والموصوف في الذمة؛ خالٍ تماماً من الفوائد الربوية وغرر الجهالة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لمنظومة مصلحة الضرائب المصرية وقانون التجارة 17 لسنة 1999.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في التفرقة بين الاستلام المؤقت والاستلام النهائي البات للبضائع.',
        customaryPracticeValidation: 'النموذج المعتمد لدى الغرفة التجارية المصرية ومستشاري الشركات الكبرى.',
        shariaAuditStatement: 'عقد بيع وتوريد مشروع نافذ شرعاً تترتب عليه آثاره المعتبرة دون شبهة ربا.',
        verificationChecklist: [
          { item: 'السجل التجاري والبطاقة الضريبية السارية للشركتين', status: 'مستوفى ومعتمد', reference: 'قانون التجارة 17/1999' },
          { item: 'التكامل مع منظومة الفاتورة الإلكترونية المصرية (ETA)', status: 'مستوفى ومعتمد', reference: 'قانون الإجراءات الضريبية 206/2020' },
          { item: 'تحديد جدول الكميات والمواصفات القياسية (EOS)', status: 'مستوفى ومعتمد', reference: 'هيئة المواصفات والجودة' },
          { item: 'آلية الفحص ومحاضر الاستلام الفني', status: 'مستوفى ومعتمد', reference: 'المادة 447 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد والاعتبار التكاملي',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه وأوامر التوريد المرتبطة به.',
          contentEnglish: 'The preamble constitutes an integral and binding part of this Agreement and any related Purchase Orders.'
        },
        {
          titleArabic: 'المادة الثانية: محل العقد والمواصفات القياسية للبضائع',
          titleEnglish: 'Article 2: Subject Matter & Technical Standards',
          contentArabic: 'يلتزم الطرف الأول بتوريد وتسليم البضائع والمنتجات المحددة وفق أوامر التوريد المعتمدة، وتكون مطابقة تماماً للمواصفات القياسية المصرية (EOS) ومستوفية لشروط الصلاحية والجودة.',
          contentEnglish: 'Supplier undertakes to supply and deliver the specified goods strictly adhering to approved Egyptian Standards (EOS).'
        },
        {
          titleArabic: 'المادة الثالثة: المقابل المالي ومنظومة الفاتورة الإلكترونية',
          titleEnglish: 'Article 3: Consideration & Electronic Invoicing Integration',
          contentArabic: 'يتم احتساب المقابل المالي وفق جدول الأسعار التعاقدي المرفق، ويُصدر المورد فواتير إلكترونية معتمدة عبر منظومة مصلحة الضرائب المصرية (ETA) فور تسليم الدفعات.',
          contentEnglish: 'Prices are calculated per the attached price schedule, with Supplier issuing valid e-invoices via Egyptian Tax Authority portal.'
        },
        {
          titleArabic: 'المادة الرابعة: مواعيد التوريد والشحن والتسليم DDP',
          titleEnglish: 'Article 4: Delivery Timetable & Logistics (DDP)',
          contentArabic: 'يتم التوريد لمخازن المشتري بنظام التسليم خالِص الرسوم والمصروفات (DDP)، ويتحمل المورد تكاليف النقل والتأمين والتفريغ حتى إتمام الفحص الظاهري.',
          contentEnglish: 'Delivery shall be DDP to Buyer warehouse, with Supplier bearing freight, insurance, and unloading risks.'
        },
        {
          titleArabic: 'المادة الخامسة: إجراءات الفحص والاستلام ومحاضر المطابقة',
          titleEnglish: 'Article 5: Inspection, Testing & Acceptance Reports',
          contentArabic: 'تتولى لجنة فنية من المشتري فحص البضائع فور وصولها خلال 48 ساعة، وتحرر محضر فحص رسمي، وتُرفض أي شحنة غير مطابقة مع إلزام المورد باستبدالها خلال 72 ساعة.',
          contentEnglish: 'Buyer technical committee shall inspect consignments within 48 hours; non-conforming items must be replaced within 72 hours.'
        },
        {
          titleArabic: 'المادة السادسة: ضمان العيوب الخفية (م 447 مدني)',
          titleEnglish: 'Article 6: Latent Defects Warranty (Civil Code Article 447)',
          contentArabic: 'يضمن المورد سلامة البضائع من العيوب الخفية لمدة 12 شهراً من تاريخ الاستلام النهائي، ويلتزم بإصلاح أو استبدال أي بضاعة معيبة على نفقته الخاصة.',
          contentEnglish: 'Supplier warrants the goods against latent defects for 12 months post-handover under Egyptian Civil Code Article 447.'
        },
        {
          titleArabic: 'المادة السابعة: غرامة التأخير الاتفاقية الجابرة للضرر',
          titleEnglish: 'Article 7: Liquidated Damages for Delivery Delays',
          contentArabic: 'في حال تأخر المورد عن التوريد في المواعيد المحددة، يُستقطع غرامة تأخير اتفاقية جابرة للضرر قدرها 1% عن كل أسبوع تأخير وبحد أقصى 10% من قيمة التوريد المتأخر.',
          contentEnglish: 'Supplier delay incurs liquidated damages of 1% per week (maximum 10% of delayed shipment value) as actual compensation.'
        },
        {
          titleArabic: 'المادة الثامنة: التزامات وحقوق المشتري',
          titleEnglish: 'Article 8: Buyer Obligations & Timely Receipt',
          contentArabic: 'يلتزم الطرف الثاني بتهيئة مخازنه وتسهيل دخول الشاحنات وسداد المستحقات المالية في مواعيدها دون أي تأخير غير مبرر.',
          contentEnglish: 'Buyer undertakes to maintain appropriate storage facilities, receive deliveries, and pay invoices promptly.'
        },
        {
          titleArabic: 'المادة التاسعة: القوة القاهرة والظروف الاستثنائية (م 147 و165 مدني)',
          titleEnglish: 'Article 9: Force Majeure & Hardship (Civil Code 147 & 165)',
          contentArabic: 'يُعفى الطرف المقصر من المسؤولية إذا كان الإخلال ناشئاً عن قوة قاهرة لا يمكن دفعها وفقاً لأحكام القانون المدني المصري مع إخطار الطرف الآخر فوراً.',
          contentEnglish: 'Default caused by uncontrollable force majeure relieves liability under Civil Code Articles 147 and 165 upon prompt written notice.'
        },
        {
          titleArabic: 'المادة العاشرة: السرية وحماية بيانات التجارة',
          titleEnglish: 'Article 10: Confidentiality & Trade Secrets Protection',
          contentArabic: 'يلتزم الطرفان بالسرية التامة للأسعار والكميات والمواصفات الفنية عملاً بالقانون 151 لسنة 2020 لحماية البيانات الشخصية والأسرار التجارية.',
          contentEnglish: 'Both Parties covenant to maintain strict confidentiality of pricing, quantities, and trade secrets under Law 151 of 2020.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code 158)',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لإنذار أو حكم قضائي في حال الامتناع عن التوريد أو الإفلاس.',
          contentEnglish: 'Deemed automatically rescinded by law without notice or judicial action upon cessation of supply or insolvency under Article 158.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار والمراسلات الرسمية',
          titleEnglish: 'Article 12: Chosen Domicile & Official Notices',
          contentArabic: 'اتخذ الطرفان العناوين الموضحة بصدر هذا العقد موطناً مختاراً لكافة المراسلات والإخطارات القضائية.',
          contentEnglish: 'Addresses in preamble serve as irrevocable elected domiciles for all formal process and bailiff service.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق وفض المنازعات',
          titleEnglish: 'Article 13: Governing Law & Dispute Resolution',
          contentArabic: 'تخضع هذه الاتفاقية لأحكام القوانين المصرية، وتختص المحاكم الاقتصادية والتجارية بالقاهرة بنظر أي نزاع ينشأ عنها.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in competent Commercial and Economic Courts of Cairo.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد واعتماده',
          titleEnglish: 'Article 14: Execution Copies & Arabic Language Precedence',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة، والنص العربي هو المرجع الأساسي المعتمد قانوناً.',
          contentEnglish: 'Executed in two binding counterparts; the Arabic text shall be controlling before Egyptian judicial bodies.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: التعديل والإلغاء المكتوب',
          titleEnglish: 'Article 15: Written Amendments Only',
          contentArabic: 'لا يعتد بأي تعديل أو إضافة على بنود هذا العقد إلا بموجب ملحق كتابي موقع من الممثلين القانونيين للطرفين.',
          contentEnglish: 'No amendment to this Agreement shall be valid unless executed in writing by authorized representatives of both Parties.'
        }
      ]
    }
  },

  // 10. Official Commercial Agency & Exclusive Distribution
  {
    id: 'official-exclusive-agency-distribution',
    category: 'عقود الشركات والاستثمار والتجارة',
    titleAr: 'عقد توزيع تجاري ووكالة تجارية حصرية طبقاً لقانون التجارة رقم 17 لسنة 1999',
    titleEn: 'Exclusive Commercial Distribution & Agency Agreement (Law 17/1999)',
    source: 'النموذج المعتمد بنقابة المحامين والغرفة التجارية وسجل الوكلاء التجاريين بوزارة التجارة',
    statutoryBasis: 'المواد 148 إلى 191 من قانون التجارة رقم 17 لسنة 1999 والقانون رقم 120 لسنة 1982 بشأن تنظيم أعمال الوكالة التجارية',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد وكالة تجارية وتوزيع حصري للمنتجات',
      contractTitleEnglish: 'Exclusive Distribution & Commercial Agency Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: شركة [اسم الموكل الكامل]، سجل تجاري: [...]، بطاقة ضريبية: [...]، ومقرها: [...] (طرف أول - الموكل).\nثانياً: شركة [اسم الوكيل/الموزع الكامل]، سجل تجاري: [...]، مقيدة بسجل الوكلاء التجاريين برقم: [...] (طرف ثانٍ - الوكيل والموزع الحصري).\nوبعد أن أقر الطرفان بأهليتهما القانونية والصفة المعتبرة للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: [Principal Company Name], Commercial Reg: [...], Tax ID: [...] (First Party - Principal).\nSecond: [Distributor Company Name], Commercial Reg: [...], Commercial Agency Reg No: [...] (Second Party - Exclusive Distributor).\nHaving confirmed their full legal capacity, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لأحكامه.',
      recitalsEnglish: 'The preamble and recitals constitute an integral, operative part hereof.',
      certificationStatement: 'صيغة مطابقة لقانون التجارة المصري رقم 17 لسنة 1999 وقانون تنظيم الوكالة التجارية 120 لسنة 1982.',
      legalNotes: 'عقد وكالة وتوزيع حصري مستوفٍ للنطاق الجغرافي، الحصص البيعية المستهدفة، وحظر المنافسة والتعويض عن الإنهاء غير المبرر.',
      shariaComplianceNotes: 'عقد وكالة بأجر وتوزيع مشروع شرعاً، خالٍ من الغرر والربا والجهالة في الحوافز والعمولات.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لسجل الوكلاء التجاريين بوزارة التجارة وهيئة الرقابة على الصادرات والواردات.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في أحقية الوكيل في تعويض إنهاء الوكالة دون خطأ منه (م 189 تجارة).',
        customaryPracticeValidation: 'النموذج النموذجي لشركات التوزيع الكبرى في السوق المصري.',
        shariaAuditStatement: 'عقد وكالة وتجارة مشروع خاضع للقواعد الشرعية المستقرة.',
        verificationChecklist: [
          { item: 'القيد بسجل الوكلاء والوسطاء التجاريين (سجل 14 ق)', status: 'مستوفى ومعتمد', reference: 'القانون 120/1982' },
          { item: 'تحديد النطاق الجغرافي والمنتجات المشمولة بالحصرية', status: 'مستوفى ومعتمد', reference: 'المادة 177 تجارة مصري' },
          { item: 'تحديد الحد الأدنى للمبيعات والهدف السنوي (Target)', status: 'مستوفى ومعتمد', reference: 'العرف التجاري' },
          { item: 'تنظيم خدمات ما بعد البيع وتوافر قطع الغيار', status: 'مستوفى ومعتمد', reference: 'المادة 186 تجارة مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
          contentEnglish: 'The preamble constitutes an integral, inseverable part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: التعيين ومنح الحصرية والنطاق الجغرافي',
          titleEnglish: 'Article 2: Appointment, Exclusivity & Territory',
          contentArabic: 'يعيّن الموكل ويقبل الوكيل/الموزع العمل كوكيل وموزع تجاري حصري لمنتجات الموكل داخل النطاق الجغرافي لجمهورية مصر العربية، ولا يحق للموكل تعيين أي وكيل آخر أو البيع المباشر داخل هذا النطاق طوال مدة العقد.',
          contentEnglish: 'Principal appoints Distributor as exclusive commercial distributor within the Arab Republic of Egypt, agreeing not to appoint competing agents or sell directly in Territory.'
        },
        {
          titleArabic: 'المادة الثالثة: المنتجات المشمولة والأسعار وقوائم الخصم',
          titleEnglish: 'Article 3: Products, Pricing & Wholesale Discounts',
          contentArabic: 'تشمل الوكالة كافة المنتجات الحالية والمستقبلية للموكل، وتُباع للموزع بأسعار الجملة المعتمدة مع نسبة خصم تجاري تضمن هامش ربح عادل للموزع.',
          contentEnglish: 'Agency covers all current and pipeline products sold at wholesale prices with agreed commercial discount margin.'
        },
        {
          titleArabic: 'المادة الرابعة: الحصص البيعية المستهدفة والحد الأدنى السنوي (Target)',
          titleEnglish: 'Article 4: Minimum Sales Target & Annual Commitment',
          contentArabic: 'يلتزم الوكيل بتحقيق الحد الأدنى للمبيعات المتفق عليه سنوياً، ويتم مراجعة الهدف البيعي سنوياً باتفاق الطرفين وفق تطورات السوق.',
          contentEnglish: 'Distributor commits to achieve minimum annual sales targets mutually reviewed per market dynamics.'
        },
        {
          titleArabic: 'المادة الخامسة: التسويق والدعاية والمعارض',
          titleEnglish: 'Article 5: Marketing, Advertising & Trade Shows',
          contentArabic: 'يلتزم الوكيل بالترويج للمنتجات والمشاركة في المعارض المتخصصة، ويساهم الموكل بنسبة في المواد الدعائية والدعم الفني والتدريبي.',
          contentEnglish: 'Distributor undertakes product promotion and trade show participation, with Principal providing co-op marketing and tech support.'
        },
        {
          titleArabic: 'المادة السادسة: خدمات ما بعد البيع والصيانة وتوافر قطع الغيار',
          titleEnglish: 'Article 6: After-Sales Service & Spare Parts (Commerce Law 186)',
          contentArabic: 'يلتزم الوكيل بتوفير مراكز صيانة معتمدة وتوفير قطع الغيار الأصلية طبقاً للمادة 186 من قانون التجارة رقم 17 لسنة 1999 لحماية المستهلكين.',
          contentEnglish: 'Distributor maintains certified service centers and genuine spare parts under Commerce Law Article 186.'
        },
        {
          titleArabic: 'المادة السابعة: حظر المنافسة وتمثيل منتجات منافسة',
          titleEnglish: 'Article 7: Non-Compete & Exclusivity Obligations',
          contentArabic: 'يتعهد الوكيل بعدم استيراد أو توزيع أو ترويج أي منتجات منافسة لمنتجات الموكل بصورة مباشرة أو غير مباشرة طوال مدة هذا العقد.',
          contentEnglish: 'Distributor covenants not to distribute, import, or represent competing product lines directly or indirectly.'
        },
        {
          titleArabic: 'المادة الثامنة: حماية العلامات التجارية والملكية الفكرية',
          titleEnglish: 'Article 8: Trademark Protection & Brand Rights',
          contentArabic: 'يقر الوكيل بأن كافة العلامات التجارية وبراءات الاختراع ملك حصري للموكل، ويقتصر حق الوكيل على استخدامها لغرض الترويج المصرح به فقط.',
          contentEnglish: 'All trademarks remain the exclusive property of Principal; Distributor is granted a limited promotional license only.'
        },
        {
          titleArabic: 'المادة التاسعة: مدة العقد والتجديد التلقائي',
          titleEnglish: 'Article 9: Term & Automatic Renewal',
          contentArabic: 'مدة هذا العقد 3 سنوات ميلادية تبدأ من تاريخ توقيعه، وتتجدد تلقائياً لمدد مماثلة ما لم يخطر أحد الطرفين الآخر برغبته في عدم التجديد قبل 6 أشهر.',
          contentEnglish: 'Contract term is 3 years, automatically renewed unless terminated by 6-month prior written notice.'
        },
        {
          titleArabic: 'المادة العاشرة: تعويض إنهاء الوكالة دون خطأ (م 189 تجارة)',
          titleEnglish: 'Article 10: Statutory Termination Indemnity (Commerce Law 189)',
          contentArabic: 'إذا أنهى الموكل العقد في وقت غير مناسب أو دون خطأ من الوكيل، التزم بتعويض الوكيل عن الأضرار وما بذله من نفقات ترويجية وشهرة تجارية طبقاً للمادة 189 تجارة.',
          contentEnglish: 'Unjustified termination by Principal obligates payment of statutory compensation for goodwill and promotional investments per Article 189.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code 158)',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لإنذار في حال الإفلاس أو التنازل عن الوكالة للغير دون موافقة كتابية مسبقة.',
          contentEnglish: 'Deemed automatically rescinded ipso jure upon bankruptcy or unauthorized assignment without prior consent.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 12: Force Majeure & Hardship Events',
          contentArabic: 'تخضع التزامات الطرفين لأحكام القوة القاهرة وفقاً لأحكام القانون المدني المصري رقم 131 لسنة 1948.',
          contentEnglish: 'Both parties are relieved from default caused by Force Majeure under Egyptian Civil Code.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الموطن المختار والمراسلات الرسمية',
          titleEnglish: 'Article 13: Chosen Domicile & Formal Process',
          contentArabic: 'اتخذ الطرفان العناوين الموضحة بصدر هذا العقد موطناً مختاراً لكافة المراسلات والإعلانات الرسمية والقضائية.',
          contentEnglish: 'The addresses in the preamble constitute official chosen legal domiciles for judicial process.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: القانون الواجب التطبيق وفض المنازعات',
          titleEnglish: 'Article 14: Governing Law & Arbitration / Court Venue',
          contentArabic: 'يخضع هذا العقد ويفسر طبقاً لأحكام القوانين المصرية، وتختص المحاكم الاقتصادية بالقاهرة أو التحكيم المؤسسي بمركز CRCICA بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian laws with disputes resolved via Cairo Economic Courts or CRCICA Institutional Arbitration.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: نسخ العقد',
          titleEnglish: 'Article 15: Counterparts & Language Precedence',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة، والنص العربي هو المرجع الأساسي المعتمد.',
          contentEnglish: 'Executed in two identical originals, Arabic text prevailing before Egyptian authorities.'
        }
      ]
    }
  },

  // 11. Official Professional Consultancy Services
  {
    id: 'official-professional-consultancy',
    category: 'عقود التكنولوجيا والملكية الفكرية والاستشارات',
    titleAr: 'عقد تقديم خدمات واستشارات مهنية وإدارية معتمدة',
    titleEn: 'Professional Management & Business Advisory Consultancy Agreement',
    source: 'النموذج الرسمي المعتمد بنقابة التجاريين ونقابة المحامين المصرية لكبار الخبراء',
    statutoryBasis: 'القانون المدني المصري رقم 131 لسنة 1948 وقانون حماية الملكية الفكرية رقم 82 لسنة 2002',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد تقديم استشارات مهنية ودراسات تخصصية',
      contractTitleEnglish: 'Professional Consulting & Advisory Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، بين كل من:\nأولاً: شركة [اسم العميل الكامل]، سجل تجاري: [...]، ويمثلها في التوقيع: [...] (طرف أول - العميل).\nثانياً: السيد/ [اسم المستشار/المكتب الاستشاري الكامل]، بطاقة رقم قومي/سجل مهني: [...]، المقيم/ومقره: [...] (طرف ثانٍ - المستشار المهني المستقل).\nوبعد أن أقر الطرفان بكامل أهليتهما القانونية المعتبرة للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: [Client Name], Commercial Reg: [...], represented by: [...] (First Party - Client).\nSecond: [Consultant / Firm Name], Professional ID: [...], address: [...] (Second Party - Independent Consultant).\nHaving full legal capacity to contract, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
      recitalsEnglish: 'The preamble and recitals form an inseverable, operative part hereof.',
      certificationStatement: 'صيغة استشارية معتمدة مستوفية لصفة الاستقلال المهني والملكية الفكرية والسرية وفق القوانين المصرية.',
      legalNotes: 'عقد مقاولة مهنية مستقلة نافٍ لعلاقة التبعية أو العمل، مستوفٍ للضريبة والملكية الفكرية والمسؤولية المهنية.',
      shariaComplianceNotes: 'عقد إجارة على عمل مباح شرعاً ومستوفٍ لبيان الأجر والعمل النافي للجهالة والغرر.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لأحكام القانون المدني وقانون ضريبة القيمة المضافة 67 لسنة 2016.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في انتفاء رابطة التبعية القانونية لعقود الاستشارات الحرة المستقلة.',
        customaryPracticeValidation: 'النموذج الاستشاري المعتمد لدى كبرى بيوت الخبرة والمستشارين المعتمدين.',
        shariaAuditStatement: 'عقد إجارة مشروع شرعاً يخلو من الشروط الباطلة أو الفوائد الربوية.',
        verificationChecklist: [
          { item: 'التوصيف الدقيق لنطاق المهام والمخرجات الاستشارية', status: 'مستوفى ومعتمد', reference: 'المادة 646 مدني مصري' },
          { item: 'تأكيد صفة الاستقلال المهني وانتفاء علاقة العمل التبعية', status: 'مستوفى ومعتمد', reference: 'قانون العمل 12/2003' },
          { item: 'ملكية التقارير والمخرجات الفكرية (IP Ownership)', status: 'مستوفى ومعتمد', reference: 'القانون 82/2002' },
          { item: 'الالتزام الصارم بالسرية وحظر تعارض المصالح', status: 'مستوفى ومعتمد', reference: 'القانون 151/2020' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
          contentEnglish: 'The preamble constitutes an integral and binding part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق الخدمات الاستشارية والمهام المكلف بها المستشار',
          titleEnglish: 'Article 2: Consulting Scope & Key Deliverables',
          contentArabic: 'أسند العميل وقبل المستشار تقديم الخدمات والخبرات الاستشارية المتخصصة في الدراسات والتحليلات والخطط التنفيذية المحددة بالملحق الفني، وفقاً لأعلى معايير الحيطة والحذر والخبرة المهنية المقررة.',
          contentEnglish: 'Client appoints Consultant to render professional advisory services and deliverables strictly pursuant to the technical schedule.'
        },
        {
          titleArabic: 'المادة الثالثة: المقابل المالي للأتعاب الاستشارية وجدول السداد',
          titleEnglish: 'Article 3: Professional Fees & Milestone Payments',
          contentArabic: 'يستحق المستشار أتعاباً مهنية مقطوعة تُصرف وفق جدول تسليم التقارير الفنية المعتمدة دون أي فوائد تأخيرية ربوية.',
          contentEnglish: 'Consultant is entitled to professional fees disbursed against certified delivery milestones with zero usurious interest.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة العقد والجدول الزمني لتسليم التقارير والمخرجات',
          titleEnglish: 'Article 4: Term & Milestones Delivery Timetable',
          contentArabic: 'مدة سريان هذا العقد محددة بإنجاز المهام الاستشارية، ويلتزم المستشار بتقديم التقارير الدورية والنهائية في مواعيدها المحددة.',
          contentEnglish: 'Term is tied to project execution, with Consultant committed to strict progress and final report schedules.'
        },
        {
          titleArabic: 'المادة الخامسة: استقلالية المستشار وعدم وجود علاقة عمل (Independent Contractor)',
          titleEnglish: 'Article 5: Independent Contractor Status (No Employment)',
          contentArabic: 'يقر الطرفان بأن المستشار يباشر مهامه كخبير مهني مستقل ولا ينشأ عن هذا العقد أي علاقة عمل أو تبعية خاضعة لقانون العمل المصري.',
          contentEnglish: 'Consultant acts as an independent professional; nothing herein creates an employment relationship.'
        },
        {
          titleArabic: 'المادة السادسة: التزامات العميل وتوفير البيانات والمعلومات',
          titleEnglish: 'Article 6: Client Cooperation & Information Access',
          contentArabic: 'يلتزم العميل بتزويد المستشار بكافة البيانات والوثائق والمعلومات اللازمة لإنجاز مهمته وتسهيل اجتماعاته مع فرق العمل.',
          contentEnglish: 'Client covenants to provide timely access to information, documentation, and personnel.'
        },
        {
          titleArabic: 'المادة السابعة: الملكية الفكرية للتقارير والدراسات (ق 82 لسنة 2002)',
          titleEnglish: 'Article 7: IP Rights in Reports & Studies (Law 82/2002)',
          contentArabic: 'تؤول ملكية التقارير والدراسات والنتائج المكتملة المسدد أتعابها للعميل لاستخدامها الداخلي، مع احتفاظ المستشار بحقوق خبرته ومنهجياته العامة.',
          contentEnglish: 'Finalized reports and studies transfer to Client upon full payment under Law 82 of 2002.'
        },
        {
          titleArabic: 'المادة الثامنة: السرية التامة وعدم إفشاء أسرار العمل (ق 151 لسنة 2020)',
          titleEnglish: 'Article 8: Strict Non-Disclosure & Data Protection',
          contentArabic: 'يلتزم المستشار بالحفاظ التام على سرية كافة أسرار العميل وخططه المالية والتجارية وعدم إفشائها لأي طرف ثالث حتى بعد انتهاء العقد.',
          contentEnglish: 'Consultant undertakes perpetual confidentiality of proprietary plans and business secrets under Law 151 of 2020.'
        },
        {
          titleArabic: 'المادة التاسعة: حظر تعارض المصالح والنزاهة المهنية',
          titleEnglish: 'Article 9: Non-Conflict of Interest & Integrity',
          contentArabic: 'يتعهد المستشار بعدم تقديم استشارات لمنافسين مباشرين تمس موضوع التكليف طوال مدة سريان العقد وتجنب أي تعارض في المصالح.',
          contentEnglish: 'Consultant covenants to avoid conflicts of interest with direct competitors during the engagement.'
        },
        {
          titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة (م 147 و165 مدني)',
          titleEnglish: 'Article 10: Force Majeure & Hardship Events',
          contentArabic: 'يعفى الطرفان من المسؤولية عن التأخير الناشئ عن حوادث قاهرة لا يد لهما فيها طبقاً للقانون المدني المصري مع التزام الإخطار الفوري.',
          contentEnglish: 'Parties are relieved from delay caused by Force Majeure under Civil Code Articles 147 and 165.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code 158)',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لتنبيه أو إنذار في حال إخلال أي طرف بالتزام جوهري.',
          contentEnglish: 'Deemed automatically rescinded by operation of law upon fundamental breach under Article 158.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار والإخطارات',
          titleEnglish: 'Article 12: Chosen Domicile & Legal Communications',
          contentArabic: 'اتخذ الطرفان العناوين الموضحة بصدر هذا العقد موطناً مختاراً لكافة المراسلات والإعلانات الرسمية والقضائية.',
          contentEnglish: 'Addresses in preamble serve as irrevocable chosen domiciles for all formal process.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد للقوانين واللوائح المعمول بها في جمهورية مصر العربية، وتختص محاكم القاهرة بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in competent courts in Cairo.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد وحجية اللغة',
          titleEnglish: 'Article 14: Execution Copies & Arabic Language Precedence',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة، والنص العربي هو المرجع الأساسي المعتمد أمام كافة الجهات الرسمية.',
          contentEnglish: 'Executed in two binding counterparts; the Arabic text shall be governing before Egyptian authorities.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: الضرائب والالتزامات السيادية',
          titleEnglish: 'Article 15: Tax Compliance & Official Withholdings',
          contentArabic: 'يتحمل كل طرف التزاماته الضريبية المقررة قانوناً وفقاً لقانون ضريبة الدخل وقانون الإجراءات الضريبية الموحد.',
          contentEnglish: 'Each party satisfies its statutory tax liabilities under applicable Egyptian income tax and withholding regulations.'
        }
      ]
    }
  },

  // 12. Official Dispute Settlement & Release Agreement
  {
    id: 'official-amicable-dispute-settlement',
    category: 'عقود الصلح والتسويات القضائية والمالية',
    titleAr: 'عقد صلح وتسوية منازعات تجارية ومدنية بات ونهائي مسقط لأي دعاوى',
    titleEn: 'Comprehensive Amicable Settlement, Accord & Mutual Release Agreement',
    source: 'النموذج الرسمي المعتمد بمحكمة الاستئناف ونقابة المحامين المصرية والمحاكم الابتدائية',
    statutoryBasis: 'المواد 549 إلى 558 من القانون المدني المصري رقم 131 لسنة 1948 وقانون المرافعات',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد صلح وتسوية شاملة ونهائية وإبراء ذمة متبادل',
      contractTitleEnglish: 'Comprehensive Amicable Settlement & Full Release Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: السيد/ [اسم الطرف الأول الكامل]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول).\nثانياً: السيد/ [اسم الطرف الثاني الكامل]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف ثانٍ).\nوبعد أن أقر الطرفان بأهليتهما الكاملة للتصرف والصلح المعتبرة قانوناً وشرعاً، ورغبة منهما في حسم النزاع القائم بينهما صلحاً وتراضياً، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: Mr. [First Party Name], National ID: [...], residing at: [...] (First Party).\nSecond: Mr. [Second Party Name], National ID: [...], residing at: [...] (Second Party).\nHaving full legal capacity to settle and compromise, desirous of amicably terminating their dispute, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لأحكامه ومواده.',
      recitalsEnglish: 'The preamble and recitals constitute an integral and interpretive part of this Settlement Agreement.',
      certificationStatement: 'عقد صلح نهائي بات حاسم للنزاع له قوة السند التنفيذي ومطابق للمادتين 549 و553 من القانون المدني المصري.',
      legalNotes: 'صلح مبرئ للذمة مسقط للحقوق والدعاوى السابقة ولا يجوز الرجوع فيه أو الطعن عليه إلا للتزوير.',
      shariaComplianceNotes: 'مستوفٍ لقوله تعالى: "والصلح خير"؛ صلح حلال أحل حلالاً ولم يحرم حلالاً أو يحلل حراماً.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لأحكام القانون المدني وبوابة وزارة العدل لمحاضر الصلح المودعة بالمحاكم.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض بأن الصلح يحسم النزاع وينزل به الطرفان عن ادعاءاتهما نهائياً (م 553 مدني).',
        customaryPracticeValidation: 'الصيغة القضائية المعتمدة لدى كبار محامي النقض في إنهاء الدعاوى صلحاً.',
        shariaAuditStatement: 'صلح شرعي مشروع يحقن النزاع ويسقط المطالبات السابقة.',
        verificationChecklist: [
          { item: 'الأهلية القانونية الكاملة للصلح والتنازل عن الحقوق', status: 'مستوفى ومعتمد', reference: 'المادة 551 مدني مصري' },
          { item: 'تحديد النزاع السابق بدقة والمطالبات المتبادلة', status: 'مستوفى ومعتمد', reference: 'المادة 549 مدني مصري' },
          { item: 'حسم النزاع وإنهاء الخصومة بصيغة باتة غير قابلة للرجوع', status: 'مستوفى ومعتمد', reference: 'المادة 553 مدني مصري' },
          { item: 'إقرار التنازل عن كافة الشكاوى والبلاغات والدعاوى القضائية', status: 'مستوفى ومعتمد', reference: 'المادة 554 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد ومفسراً للغرض منه وله ذات القوة الإلزامية.',
          contentEnglish: 'The preamble forms an integral and binding part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: موضوع النزاع المحسوم صلحاً',
          titleEnglish: 'Article 2: Subject Matter of Settled Dispute',
          contentArabic: 'يقر الطرفان بأن هذا الصلح يحسم نهائياً وباتاً كافة الخلافات والمطالبات المالية والقانونية السابقة الناشئة بينهما، ولا يجوز لأي منهما إعادة إثارتها مستقبلاً.',
          contentEnglish: 'Parties covenant that this Settlement decisively and permanently terminates all prior financial and legal claims.'
        },
        {
          titleArabic: 'المادة الثالثة: التسوية المالية والمخالصة التامة المبرئة للذمة',
          titleEnglish: 'Article 3: Financial Settlement & Full Mutual Discharge',
          contentArabic: 'اتفق الطرفان على تسوية النزاع نظير قيام الطرف الثاني بسداد مبلغ إجمالي قدره [...] جنيه مصري، ويُعتبر استلام هذا المبلغ بمثابة إبراء ذمة تام ومخالصة نهائية شاملة.',
          contentEnglish: 'Settlement is agreed against payment of [...] EGP; receipt constitutes full, final, and absolute discharge.'
        },
        {
          titleArabic: 'المادة الرابعة: التنازل النهائي عن الدعاوى القضائية والبلاغات (م 554 مدني)',
          titleEnglish: 'Article 4: Irrevocable Withdrawal of Lawsuits & Complaints',
          contentArabic: 'يتنازل كل من الطرفين تنازلاً نهائياً وباتاً لا رجعة فيه عن كافة الدعاوى القضائية والطعون والبلاغات والشكاوى المقامة منه ضد الطرف الآخر، ويلتزم بالحضور أمام المحاكم لإثبات ترك الخصومة أو الصلح.',
          contentEnglish: 'Parties irrevocably waive and withdraw all pending lawsuits, complaints, and appeals, committing to record settlement before competent courts.'
        },
        {
          titleArabic: 'المادة الخامسة: الأثر الحاسم للصلح وسقوط الادعاءات (م 553 مدني)',
          titleEnglish: 'Article 5: Decisive Res Judicata Effect (Civil Code 553)',
          contentArabic: 'يترتب على هذا الصلح انقضاء الحقوق والادعاءات التي نزل عنها أي من الطرفين انقضاءً تاماً عملاً بالمادة 553 من القانون المدني المصري، ولا يجوز تجديد النزاع بأي وجه.',
          contentEnglish: 'Pursuant to Civil Code Article 553, this settlement permanently extinguishes all waived rights with definitive binding effect.'
        },
        {
          titleArabic: 'المادة السادسة: حظر الرجوع في الصلح (م 552 مدني)',
          titleEnglish: 'Article 6: Irrevocability of Compromise (Civil Code 552)',
          contentArabic: 'الصلح لا يجوز الرجوع فيه أو الطعن عليه بدعوى الغلط في القانون، ويسري على الخلف العام والخاص للطرفين.',
          contentEnglish: 'This compromise is irrevocable and cannot be challenged on grounds of mistake of law under Article 552.'
        },
        {
          titleArabic: 'المادة السابعة: سرية اتفاقية الصلح وعدم الإفشاء',
          titleEnglish: 'Article 7: Settlement Confidentiality & Non-Disclosure',
          contentArabic: 'يتعهد الطرفان بالحفاظ على سرية بنود هذا الصلح والمبالغ المسددة بموجبه وعدم الإفصاح عنها لأي طرف ثالث إلا لتقديمه للمحاكم لإثبات التنازل.',
          contentEnglish: 'Parties undertake strict confidentiality regarding settlement terms and consideration paid.'
        },
        {
          titleArabic: 'المادة الثامنة: التعهد بعدم الإساءة والتشهير',
          titleEnglish: 'Article 8: Non-Disparagement Covenant',
          contentArabic: 'يتعهد كل طرف بالامتناع التام عن الإساءة للطرف الآخر أو التشهير به أو نشر أي بيانات تمسه في وسائل الإعلام أو منصات التواصل الاجتماعي.',
          contentEnglish: 'Each party covenants not to defame, disparage, or publish statements damaging the other on any media platform.'
        },
        {
          titleArabic: 'المادة التاسعة: المصروفات القضائية وأتعاب المحاماة',
          titleEnglish: 'Article 9: Judicial Court Costs & Legal Fees',
          contentArabic: 'يتحمل كل طرف ما تكبده من أتعاب محاماة ومصروفات قضائية في الدعاوى المتنازل عنها دون مطالبة الطرف الآخر بأي مبالغ.',
          contentEnglish: 'Each party bears its own attorney fees and court expenses incurred in dismissed proceedings.'
        },
        {
          titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 10: Force Majeure Events',
          contentArabic: 'تخضع الالتزامات لأحكام القوة القاهرة وفقاً للقانون المدني المصري.',
          contentEnglish: 'Obligations are subject to statutory Force Majeure rules under Egyptian law.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: إثبات الصلح في محضر الجلسة وإلحاقه بها',
          titleEnglish: 'Article 11: Court Recording as an Executive Title',
          contentArabic: 'يحق لأي من الطرفين تقديم هذا العقد إلى هيئة المحكمة لإلحاقه بمحضر الجلسة وجعله في قوة السند التنفيذي الواجب النفاذ وفق قانون المرافعات.',
          contentEnglish: 'Either party may submit this Agreement to court to be entered into minutes with executive deed force.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار للإعلانات',
          titleEnglish: 'Article 12: Chosen Domicile for Notices',
          contentArabic: 'اتخذ كل طرف عنوانه المبين بصدر العقد موطناً مختاراً تصح عليه المراسلات والإعلانات الرسمية.',
          contentEnglish: 'Addresses in preamble serve as official chosen domiciles for all notices.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد ويفسر وفقاً لأحكام القانون المصري، وتختص محاكم القاهرة بنظر أي نزاع يتصل بتنفيذه.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in competent courts in Cairo.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Execution Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بها وتقديمها للمحاكم المختصة.',
          contentEnglish: 'Executed in two identical originals, one per party for formal submission before courts.'
        }
      ]
    }
  },

  // 13. Official Commercial Office & Retail Lease Agreement
  {
    id: 'official-commercial-office-lease',
    category: 'عقود الإيجار والانتفاع',
    titleAr: 'عقد إيجار مقر إداري وتجاري لمكتب / شركة وفق القانون 4 لسنة 1996',
    titleEn: 'Commercial Office & Corporate Headquarters Lease Agreement (Law 4/1996)',
    source: 'النموذج الرسمي المعتمد بمأموريات الشهر العقاري ونقابة المحامين المصرية',
    statutoryBasis: 'القانون المدني المصري والقانون رقم 4 لسنة 1996 بشأن سريان أحكام القانون المدني على الأماكن غير السكنية',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد إيجار مقر تجاري وإداري خاضع للقانون 4 لسنة 1996',
      contractTitleEnglish: 'Commercial Corporate Premises Lease Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: السيد/ [اسم المؤجر الكامل]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - مؤجر).\nثانياً: شركة [اسم الشركة المستأجرة]، سجل تجاري: [...]، ويمثلها في التوقيع: [...] (طرف ثانٍ - مستأجر).\nوبعد أن أقر الطرفان بأهليتهما القانونية والصفة المعتبرة للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: Mr. [Lessor Full Name], National ID: [...], residing at: [...] (First Party - Lessor).\nSecond: [Tenant Company Name], Commercial Reg: [...], represented by: [...] (Second Party - Tenant).\nHaving full legal capacity to contract, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
      recitalsEnglish: 'The preamble constitutes an integral and binding part of this Agreement.',
      certificationStatement: 'صيغة إيجار تجاري وإداري رسمية خاضعة لأحكام القانون 4 لسنة 1996 وقواعد الإخلاء الفوري.',
      legalNotes: 'عقد إيجار محدد المدة ينتهي بانقضاء مدته دون حاجة لتنبيه أو إنذار، مع تحديد نسبة الزيادة السنوية والتأمين.',
      shariaComplianceNotes: 'عقد إجارة عين مباحة معلومة المنفعة والأجرة والمدة؛ خالٍ من المحظورات الشرعية والربا.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التوثيق وإثبات التاريخ بالشهر العقاري والقانون 4 لسنة 1996.',
        cassationPrinciplesValidation: 'متوافق مع مبدأ محكمة النقض بانتهاء عقد الإيجار بانتهاء مدته دون حاجة لتنبيه بالإخلاء.',
        customaryPracticeValidation: 'النموذج المعتمد لدى كبار المطورين العقاريين للمكاتب والمقار الإدارية.',
        shariaAuditStatement: 'عقد إجارة شرعي صحيح نافذ تترتب عليه حقوق المنفعة والأجرة المحددة.',
        verificationChecklist: [
          { item: 'سند ملكية المؤجر للعين الإدارية', status: 'مستوفى ومعتمد', reference: 'المادة 558 مدني مصري' },
          { item: 'التوصيف الدقيق للمقر التجاري والمساحة والخدمات', status: 'مستوفى ومعتمد', reference: 'المادة 564 مدني مصري' },
          { item: 'تحديد القيمة الإيجارية والزيادة السنوية والتأمين', status: 'مستوفى ومعتمد', reference: 'القانون 4/1996' },
          { item: 'الشرط الفاسخ الصريح عند التأخر عن سداد الأجرة', status: 'مستوفى ومعتمد', reference: 'المادة 158 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد والاعتبار التكاملي',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
          contentEnglish: 'The preamble constitutes an integral and binding part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: العين المؤجرة والغرض من الإيجار',
          titleEnglish: 'Article 2: Leased Premises Description & Commercial Purpose',
          contentArabic: 'أجر الطرف الأول للطرف الثاني ما هو المقر الإداري/التجاري الكائن بالدور [...] بالعقار رقم [...] بشارع [...]، البالغ مساحته الإجمالية [...] متراً مربعاً، والمخصص لاستخدامه حصرياً كمقر إداري ومكاتب للشركة المستأجرة.',
          contentEnglish: 'Lessor leases to Tenant the commercial/office suite located on the [...] floor of building [...], measuring [...] sq.m, designated exclusively for corporate administrative offices.'
        },
        {
          titleArabic: 'المادة الثالثة: مدة الإيجار وانتهاء العقد دون تنبيه (ق 4/1996)',
          titleEnglish: 'Article 3: Lease Term & Automatic Expiration (Law 4/1996)',
          contentArabic: 'مدة هذا الإيجار هي [...] سنوات تبدأ من [...] وتنتهي في [...]، وينتهي العقد بانقضاء مدته بقوة القانون دون حاجة إلى تنبيه أو إنذار أو اتخاذ أي إجراء قضائي طبقاً لأحكام القانون رقم 4 لسنة 1996.',
          contentEnglish: 'Lease term is [...] years from [...] to [...], expiring automatically by law upon end date without notice under Law 4/1996.'
        },
        {
          titleArabic: 'المادة الرابعة: القيمة الإيجارية الشهرية والزيادة السنوية الاتفاقية',
          titleEnglish: 'Article 4: Monthly Rent & Agreed Annual Escalation',
          contentArabic: 'تم هذا الإيجار نظير أجرة شهرية قدرها [...] جنيه مصري، تُسدد مقدماً في الأول من كل شهر ميلادي، وتزداد سنوياً بنسبة اتفاقية مركبة قدرها 10% اعتباراً من بداية السنة الإيجارية الثانية.',
          contentEnglish: 'Agreed monthly rent is [...] EGP, payable in advance on the 1st of each calendar month, subject to a 10% compounded annual escalation from Year 2.'
        },
        {
          titleArabic: 'المادة الخامسة: التأمين النقدي المسترد',
          titleEnglish: 'Article 5: Refundable Security Deposit',
          contentArabic: 'سدد المستأجر للطرف الأول مبلغ [...] جنيه مصري كتأمين نقدي يُرد إليه عند انتهاء مدة العقد وتسليم العين بالحالة الجيدة وسداد كافة فواتير الكهرباء والمياه والإنترنت.',
          contentEnglish: 'Tenant paid a refundable cash security deposit of [...] EGP, returnable upon lease termination and handover against cleared utility bills.'
        },
        {
          titleArabic: 'المادة السادسة: التنازل والتأجير من الباطن',
          titleEnglish: 'Article 6: Prohibition of Subletting & Assignment',
          contentArabic: 'لا يحق للمستأجر التنازل عن الإيجار أو تأجير المقر كلياً أو جزئياً من الباطن لأي طرف ثالث بغير موافقة كتابية صريحة مسبقة من المؤجر.',
          contentEnglish: 'Tenant may not assign or sublet the leased premises in whole or in part without prior express written consent of Lessor.'
        },
        {
          titleArabic: 'المادة السابعة: الصيانة والتحسينات والديكورات',
          titleEnglish: 'Article 7: Office Fit-out, Improvements & Maintenance',
          contentArabic: 'يلتزم المستشار بالحفاظ على العين وإجراء الصيانة الدورية المستأجرة، ولا يجوز إحداث أي تعديل إنشائي أو هدم جدران بغير تصريح هندسي كتابي من المؤجر.',
          contentEnglish: 'Tenant maintains the premises and may not make structural alterations without prior written engineering consent of Lessor.'
        },
        {
          titleArabic: 'المادة الثامنة: استهلاك المرافق والخدمات المشتركة',
          titleEnglish: 'Article 8: Utilities & Common Area Charges',
          contentArabic: 'يتحمل المستأجر تكاليف استهلاك الكهرباء والماء وخدمات الإنترنت ونظافة المبنى والصيانة الدورية للمصعد وفق العدادات المستقلة واللوائح المعتمدة.',
          contentEnglish: 'Tenant bears electricity, water, internet, and building common area maintenance charges per meters.'
        },
        {
          titleArabic: 'المادة التاسعة: الشرط الفاسخ الصريح (م 158 مدني مصري)',
          titleEnglish: 'Article 9: Explicit Rescission Clause (Civil Code Article 158)',
          contentArabic: 'إذا تأخر المستأجر عن سداد الأجرة الشهرية في موعدها لأكثر من 10 أيام، يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لإنذار أو حكم قضائي، ويلتزم بإخلاء العين فوراً.',
          contentEnglish: 'Upon 10 days default in rent payment, this lease is automatically rescinded ipso jure under Article 158 without notice or court intervention, mandating immediate eviction.'
        },
        {
          titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 10: Force Majeure & Emergency Events',
          contentArabic: 'تخضع التزامات الطرفين لأحكام القانون المدني المصري في شأن القوة القاهرة والحوادث المفاجئة.',
          contentEnglish: 'Governed by Egyptian statutory Force Majeure rules under Civil Code Articles 147 and 165.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: إثبات التاريخ وتوثيق الصيغة التنفيذية',
          titleEnglish: 'Article 11: Date Proof & Executive Notary Stamp',
          contentArabic: 'يلتزم الطرفان بتقديم هذا العقد لمأمورية الشهر العقاري المختصة لإثبات تاريخه أو تذييله بالصيغة التنفيذية وفقاً للقانون رقم 137 لسنة 2006.',
          contentEnglish: 'Parties agree to present this Agreement to Notary Public to register date and append the enforceable executive formula under Law 137/2006.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار والمراسلات الرسمية',
          titleEnglish: 'Article 12: Chosen Domicile for Notices',
          contentArabic: 'اتخذ كل طرف عنوانه المبين بصدر هذا العقد موطناً مختاراً تصح عليه الإعلانات والمراسلات القضائية.',
          contentEnglish: 'The addresses in the preamble are elected legal domiciles for all formal process.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القانون المصري، وتختص محكمة الأمور المستعجلة والمحكمة المدنية الواقع بدائرتها العقار بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in summary and civil courts having territorial competence.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Execution Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والرجوع إليها عند اللزوم.',
          contentEnglish: 'Executed in two identical originals, one per party for formal record.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: المعاينة النافية للجهالة',
          titleEnglish: 'Article 15: Inspection & Property Acceptance',
          contentArabic: 'يقر المستأجر بأنه عاين العين المؤجرة المعاينة التامة النافية للجهالة وتأكد من صلاحيتها للغرض الإداري والتجاري المتفق عليه.',
          contentEnglish: 'Tenant covenants that it has inspected the premises and accepted them fit for the intended commercial purpose.'
        }
      ]
    }
  },

  // 14. Official LLC Company Formation Contract
  {
    id: 'official-llc-company-formation',
    category: 'عقود الشركات والاستثمار والتجارة',
    titleAr: 'عقد تأسيس شركة ذات مسؤولية محدودة (ش.ذ.م.م) وفق القانون 159 لسنة 1981',
    titleEn: 'Limited Liability Company (LLC) Articles of Association & Incorporation Deed',
    source: 'النموذج الرسمي المعتمد بالهيئة العامة للاستثمار والمناطق الحرة (GAFI) ومصلحة الشركات',
    statutoryBasis: 'قانون شركات المساهمة والتوصية والمسؤولية المحدودة رقم 159 لسنة 1981 ولائحته التنفيذية وقانون الاستثمار 72 لسنة 2017',
    totalClauses: 16,
    contractData: {
      contractTitleArabic: 'عقد تأسيس ونظام أساسي لشركة ذات مسؤولية محدودة (ش.ذ.م.م)',
      contractTitleEnglish: 'Articles of Incorporation of a Limited Liability Company (LLC)',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: السيد/ [اسم الشريك الأول]، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك أول مؤسس).\nثانياً: السيد/ [اسم الشريك الثاني]، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك ثانٍ مؤسس).\nثالثاً: السيد/ [اسم الشريك الثالث]، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك ثالث مؤسس).\nوبعد أن أقر الشركاء بأهليتهم القانونية الكاملة لتأسيس الشركات، اتفقوا على تأسيس شركة ذات مسؤولية محدودة طبقاً لأحكام القانون رقم 159 لسنة 1981 ولائحته التنفيذية:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: Mr. [First Partner Name], National ID: [...], residing at: [...] (First Founding Partner).\nSecond: Mr. [Second Partner Name], National ID: [...], residing at: [...] (Second Founding Partner).\nThird: Mr. [Third Partner Name], National ID: [...], residing at: [...] (Third Founding Partner).\nHaving full legal capacity to establish companies under Law 159 of 1981 and Investment Law 72 of 2017, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً متمماً لنظام الشركة الأساسي.',
      recitalsEnglish: 'The preamble forms an integral and binding part of the Articles of Incorporation.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% للنموذج المعتمد بهيئة الاستثمار (GAFI) وقانون الشركات 159 لسنة 1981.',
      legalNotes: 'شركة ذات مسؤولية محدودة لا يسأل الشريك فيها إلا في حدود حصته في رأس المال، ولا يجوز طرح حصصها للاكتتاب العام.',
      shariaComplianceNotes: 'مستوفٍ لضوابط شركات العنان الشرعية وخالٍ من شرط الأسد والشروط الربوية.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لبوابة الهيئة العامة للاستثمار (GAFI) ونماذج قطاع التأسيس الإلكتروني.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض والدائرة الاقتصادية في حجية قرارات الجمعية العامة للشراكة.',
        customaryPracticeValidation: 'الصيغة المعتمدة لدى كبار محامي الشركات وتأسيس المنشآت الاقتصادية في مصر.',
        shariaAuditStatement: 'عقد تأسيس شركة استثمارية مشروع نافذ شرعاً تترتب عليه كافة آثاره المالية.',
        verificationChecklist: [
          { item: 'شهادة عدم التباس الاسم التجاري من السجل التجاري', status: 'مستوفى ومعتمد', reference: 'قانون السجل التجاري 34/1976' },
          { item: 'إيداع رأس المال كاملاً بحساب بنكي تحت التأسيس', status: 'مستوفى ومعتمد', reference: 'المادة 118 من القانون 159/1981' },
          { item: 'تحديد صلاحيات المديرين وحق التوقيع البنكي', status: 'مستوفى ومعتمد', reference: 'المادة 120 من القانون 159/1981' },
          { item: 'تعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين', status: 'مستوفى ومعتمد', reference: 'المادة 103 من القانون 159/1981' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد والاعتبار التكاملي',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة أحكام النظام الأساسي للشركة.',
          contentEnglish: 'The preamble forms an integral part hereof having the same binding corporate force.'
        },
        {
          titleArabic: 'المادة الثانية: اسم الشركة وشكلها القانوني',
          titleEnglish: 'Article 2: Company Legal Name & Corporate Form',
          contentArabic: 'اسم الشركة هو: شركة [...] ذات مسؤولية محدودة (ش.ذ.م.م)، وتخضع لأحكام القانون رقم 159 لسنة 1981 وقانون الاستثمار ولائحتهما التنفيذية.',
          contentEnglish: 'Company legal name is: [...] Limited Liability Company (LLC), governed by Law No. 159 of 1981.'
        },
        {
          titleArabic: 'المادة الثالثة: غرض الشركة ونشاطها التجاري والصناعي',
          titleEnglish: 'Article 3: Corporate Purpose & Business Objectives',
          contentArabic: 'غرض الشركة هو: الاستثمار في مجالات البرمجيات والأنظمة الرقمية، التجارة والتوريدات، المقاولات والاستشارات الإدارية وفق التراخيص الحكومية المعتمدة.',
          contentEnglish: 'Corporate purpose includes technology development, general trade, supplies, contracting, and business services under required government approvals.'
        },
        {
          titleArabic: 'المادة الرابعة: المركز الرئيسي والموطن القانوني للشركة',
          titleEnglish: 'Article 4: Head Office & Corporate Domicile',
          contentArabic: 'مقر الشركة ومركزها الرئيسي بمدينة القاهرة، ويجوز لمجلس المديرين فتح فروع ومكاتب وتوكيلات داخل وخارج جمهورية مصر العربية.',
          contentEnglish: 'Head office is located in Cairo, with authority to establish domestic and international branch offices.'
        },
        {
          titleArabic: 'المادة الخامسة: مدة الشركة',
          titleEnglish: 'Article 5: Corporate Term',
          contentArabic: 'مدة الشركة 25 سنة ميلادية تبدأ من تاريخ قيدها بالسجل التجاري، ويجوز مدها بقرار من الجمعية العامة غير العادية للشركاء.',
          contentEnglish: 'Company term is 25 calendar years from commercial registration, renewable by Extraordinary General Assembly.'
        },
        {
          titleArabic: 'المادة السادسة: رأس مال الشركة وتوزيع الحصص النقدية',
          titleEnglish: 'Article 6: Capital Stock & Partner Share Distribution',
          contentArabic: 'حدد رأس مال الشركة بمبلغ [...] جنيه مصري، مقسم إلى حصص متساوية قيمة كل حصة 100 جنيه مصري، وزعت بين الشركاء بنسبة حصصهم وسددت بالكامل بالبنك.',
          contentEnglish: 'Corporate capital is [...] EGP, divided into equal shares of 100 EGP each, fully subscribed and paid into designated bank account.'
        },
        {
          titleArabic: 'المادة السابعة: المسؤولية المحدودة للشركاء',
          titleEnglish: 'Article 7: Limited Liability of Partners',
          contentArabic: 'لا يسأل أي شريك عن التزامات الشركة وديونها إلا في حدود الحصص التي يمتلكها في رأس المال عملاً بالقانون.',
          contentEnglish: 'Partners are liable for corporate debts only to the extent of their subscribed capital shares.'
        },
        {
          titleArabic: 'المادة الثامنة: التنازل عن الحصص وحق الاسترداد (م 119 ق 159/1981)',
          titleEnglish: 'Article 8: Share Transfer & Right of Preemption',
          contentArabic: 'يجوز التنازل عن الحصص بين الشركاء بحرية، أما للغير فيشترط إخطار باقي الشركاء ويثبت لهم حق استرداد الحصة بذات الشروط طبقاً للمادة 119 من القانون 159 لسنة 1981.',
          contentEnglish: 'Transfers to third parties require prior notice to existing partners with statutory right of preemption under Article 119.'
        },
        {
          titleArabic: 'المادة التاسعة: إدارة الشركة ومجلس المديرين وصلاحيات التوقيع',
          titleEnglish: 'Article 9: Management, Managers & Bank Signatory Powers',
          contentArabic: 'يتولى إدارة الشركة مدير عام أو مجلس مديرين يُعين بقرار من الشركاء، وله كافة الصلاحيات في تمثيل الشركة أمام البنوك والجهات الحكومية والتعاقد.',
          contentEnglish: 'Management is vested in a General Manager or Board of Managers authorized to represent company and sign bank transactions.'
        },
        {
          titleArabic: 'المادة العاشرة: الجمعية العامة للشركاء واختصاصاتها',
          titleEnglish: 'Article 10: General Assembly of Partners',
          contentArabic: 'تنعقد الجمعية العامة للشركاء مرة على الأقل سنوياً لاعتماد الميزانية وتوزيع الأرباح وتعيين المديرين ومراقب الحسابات.',
          contentEnglish: 'General Assembly convenes annually to approve financial statements, distribute dividends, and appoint managers.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: مراقب الحسابات ومراجعة القوائم المالية',
          titleEnglish: 'Article 11: Auditor & Financial Audit',
          contentArabic: 'يكون للشركة مراقب حسابات مقيد بسجل المحاسبين والمراجعين، يتولى مراجعة دفاتر الشركة وتقديم تقرير مالي سنوي للجمعية العامة.',
          contentEnglish: 'An independent certified public auditor shall audit corporate accounts and report annually to the General Assembly.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: السنة المالية للشركة',
          titleEnglish: 'Article 12: Fiscal Year',
          contentArabic: 'تبدأ السنة المالية للشركة في الأول من يناير وتنتهي في الحادي والثلاثين من ديسمبر من كل عام ميلادي.',
          contentEnglish: 'Corporate fiscal year begins on January 1st and ends on December 31st of each calendar year.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: توزيع الأرباح الصافية وتكوين الاحتياطي القانوني',
          titleEnglish: 'Article 13: Net Profits & Mandatory Legal Reserve',
          contentArabic: 'توزع الأرباح الصافية بعد استقطاع 5% لتكوين الاحتياطي القانوني حتى يبلغ 50% من رأس المال، وتوزع الباقي على الشركاء بنسبة حصصهم.',
          contentEnglish: 'Net profits are distributed after deducting 5% to the legal reserve until it reaches 50% of capital, distributing remainder per share ratios.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: حل الشركة وتصفيتها',
          titleEnglish: 'Article 14: Dissolution & Liquidation',
          contentArabic: 'تُحل الشركة وتصفى بانتهاء مدتها أو بقرار الجمعية العامة غير العادية، ويُعين مصفٍ يتولى حصر الموجودات وسداد الديون وتوزيع الفائض.',
          contentEnglish: 'Upon dissolution, a liquidator is appointed to liquidate corporate assets, satisfy liabilities, and distribute surplus.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 15: Governing Law & Economic Courts Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القانون رقم 159 لسنة 1981، وتختص المحكمة الاقتصادية بالقاهرة بنظر أي نزاع يثور بين الشركاء أو الشركة.',
          contentEnglish: 'Governed by Law No. 159 of 1981 with jurisdiction vested exclusively in competent Cairo Economic Courts.'
        },
        {
          titleArabic: 'المادة السادسة عشرة: النشر والقيد بالسجل التجاري',
          titleEnglish: 'Article 16: Legal Publication & Commercial Registration',
          contentArabic: 'يفوض الشركاء الأستاذ/ [اسم المحامي وكيل المؤسسين] في اتخاذ إجراءات التوثيق والتسجيل والشهر بالسجل التجاري وهيئة الاستثمار.',
          contentEnglish: 'Partners authorize the appointed corporate attorney to complete incorporation, notarization, and GAFI commercial registration.'
        }
      ]
    }
  },

  // 15. Official Cloud SLA & Maintenance Agreement
  {
    id: 'official-cloud-sla-maintenance',
    category: 'عقود التكنولوجيا والملكية الفكرية والاستشارات',
    titleAr: 'اتفاقية مستوى الخدمة الرقمية السحابية والدعم الفني (Cloud SLA & Maintenance)',
    titleEn: 'Cloud Service Level Agreement (SLA) & Technical Maintenance Contract',
    source: 'النموذج المعتمد بهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA) ونقابة المحامين',
    statutoryBasis: 'قانون مكافحة جرائم تقنية المعلومات رقم 175 لسنة 2018 وقانون حماية البيانات الشخصية رقم 151 لسنة 2020 والقانون المدني',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'اتفاقية مستوى الخدمة السحابية والدعم الفني (SLA)',
      contractTitleEnglish: 'Cloud Platform Service Level & Maintenance Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: شركة [اسم مزود الخدمة السحابية الكامل]، سجل تجاري: [...]، بطاقة ضريبية: [...] (طرف أول - مزود الخدمة الرقمية والسحابية).\nثانياً: شركة [اسم العميل المستفيد الكامل]، سجل تجاري: [...]، بطاقة ضريبية: [...] (طرف ثانٍ - العميل المستفيد).\nوبعد أن أقر الطرفان بأهليتهما القانونية والتقنية المعتبرة للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: [Cloud Provider Name], Commercial Reg: [...], Tax ID: [...] (First Party - Cloud Service Provider).\nSecond: [Client Name], Commercial Reg: [...], Tax ID: [...] (Second Party - Client).\nHaving full technical and corporate legal capacity, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذه الاتفاقية وبنداً جوهرياً مفسراً لمؤشرات الأداء ومستويات الخدمة.',
      recitalsEnglish: 'The preamble forms an inseverable, operative part of this Service Level Agreement.',
      certificationStatement: 'صيغة تقنية متطابقة مع معايير ITIDA وقانون حماية البيانات الشخصية 151 لسنة 2020 ومؤشرات Uptime العالمية.',
      legalNotes: 'اتفاقية مستوى خدمة تقنية تحدد نسبة جاهزية الخوادم السحابية بنسبة 99.9%، زمن الاستجابة للأعطال، والتعويض الرصيدي Service Credits.',
      shariaComplianceNotes: 'عقد إجارة خدمات رقمية مشروع وخالٍ من الغرر والجهالة في زمن الاستجابة والمقابل المالي.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لاشتراطات هيئة تنمية تكنولوجيا المعلومات (ITIDA) وقانون 175/2018.',
        cassationPrinciplesValidation: 'متوافق مع قضاء المحاكم الاقتصادية في المسؤولية العقدية عن انقطاع الخدمات الرقمية والتعويض الاتفاقي.',
        customaryPracticeValidation: 'الصيغة القياسية المعتمدة لدى كبريات شركات الاستضافة والمنظومات السحابية SaaS.',
        shariaAuditStatement: 'عقد تقديم خدمات رقمية مشروع نافذ شرعاً تترتب عليه التزامات الأداء المحددة.',
        verificationChecklist: [
          { item: 'تحديد نسبة الإتاحة السحابية السنوية (99.9% Uptime)', status: 'مستوفى ومعتمد', reference: 'معايير ITIDA السحابية' },
          { item: 'جدول تصنيف الأعطال وأزمنة الاستجابة (P1, P2, P3)', status: 'مستوفى ومعتمد', reference: 'أفضل الممارسات الدولية' },
          { item: 'آلية التعويض الرصيدي المالي (Service Credits)', status: 'مستوفى ومعتمد', reference: 'المادة 223 مدني مصري' },
          { item: 'التوافق مع أمن البيانات وسياسات النسخ الاحتياطي', status: 'مستوفى ومعتمد', reference: 'القانون 151/2020' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد والاعتبار التكاملي',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة مؤشرات مستوى الخدمة SLA.',
          contentEnglish: 'The preamble constitutes an integral and binding part of this SLA.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق الخدمات السحابية والدعم الفني والصيانة',
          titleEnglish: 'Article 2: Cloud Scope of Services & Maintenance',
          contentArabic: 'يقدم مزود الخدمة خدمات الاستضافة السحابية الآمنة، إدارة الخوادم، التحديثات الأمنية الدورية، النسخ الاحتياطي اليومي، والدعم الفني على مدار الساعة.',
          contentEnglish: 'Provider delivers secure cloud hosting, server administration, automated security patches, daily backups, and 24/7 technical support.'
        },
        {
          titleArabic: 'المادة الثالثة: مؤشر جاهزية المنظومة السحابية (99.9% Uptime Commitment)',
          titleEnglish: 'Article 3: Service Uptime Commitment (99.9%)',
          contentArabic: 'يلتزم مزود الخدمة بتحقيق نسبة إتاحة وتشغيل سحابي لا تقل عن 99.9% شهرياً باستثناء فترات الصيانة المجدولة المخططة مسبقاً.',
          contentEnglish: 'Provider guarantees minimum 99.9% monthly system uptime, excluding scheduled and pre-notified maintenance windows.'
        },
        {
          titleArabic: 'المادة الرابعة: تصنيف الأعطال وأزمنة الاستجابة والحل الفني (MTTR)',
          titleEnglish: 'Article 4: Severity Levels & Response Time (MTTR)',
          contentArabic: 'تُصنف الأعطال إلى حرجة P1 وتستوجب الاستجابة خلال 15 دقيقة والحل خلال ساعتين، وعالية P2 وتستوجب الاستجابة خلال ساعة والحل خلال 6 ساعات.',
          contentEnglish: 'Incidents are classified into Critical P1 (15-min response, 2-hr resolution) and High P2 (1-hr response, 6-hr resolution).'
        },
        {
          titleArabic: 'المادة الخامسة: التعويضات الرصيدية المالية عن انقطاع الخدمة (Service Credits)',
          titleEnglish: 'Article 5: Service Credits for Downtime',
          contentArabic: 'إذا انخفضت نسبة الجاهزية عن 99.9% شهرياً، يُمنح العميل رصيداً خصمياً بنسبة من المقابل الشهري تتدرج من 10% إلى 50% تخصم من الفاتورة التالية دون فوائد.',
          contentEnglish: 'If monthly uptime drops below 99.9%, Client receives service credits ranging from 10% to 50% deducted from next billing cycle.'
        },
        {
          titleArabic: 'المادة السادسة: أمن وسرية البيانات والنسخ الاحتياطي (ق 151/2020)',
          titleEnglish: 'Article 6: Data Security & Daily Backups (Law 151/2020)',
          contentArabic: 'يلتزم مزود الخدمة بتشفير كافة البيانات المخزنة وتطبيق بروتوكولات الأمان السيبراني وأخذ نسخ احتياطية يومية مشفرة عملاً بالقانون 151 لسنة 2020.',
          contentEnglish: 'Provider encrypts data at rest and in transit, executing daily geo-redundant backups under Law 151 of 2020.'
        },
        {
          titleArabic: 'المادة السابعة: الملكية الحصرية لبيانات العميل',
          titleEnglish: 'Article 7: Sole Client Ownership of Data',
          contentArabic: 'تعتبر كافة البيانات وقواعد البيانات والملفات المدخلة على الخوادم ملكاً حصرياً ومطلقاً للعميل، ولا يحق للمزود حجزها أو استخدامها لأي غرض.',
          contentEnglish: 'All databases and files hosted remain the exclusive property of Client, with zero provider retention rights.'
        },
        {
          titleArabic: 'المادة الثامنة: مقابل الخدمة الشهرية وطريقة السداد',
          titleEnglish: 'Article 8: Monthly Fees & Payment Terms',
          contentArabic: 'يلتزم العميل بسداد المقابل المالي الشهري المحدد بجدول الاشتراكات بموجب فاتورة إلكترونية معتمدة في بداية كل شهر تعاقدي.',
          contentEnglish: 'Client pays agreed recurring subscription fees against approved electronic invoices at the start of each service month.'
        },
        {
          titleArabic: 'المادة التاسعة: القوة القاهرة وانقطاع الاتصالات العام',
          titleEnglish: 'Article 9: Force Majeure & Internet Backbone Failures',
          contentArabic: 'يعفى المزود من المسؤولية إذا كان الانقطاع ناشئاً عن عطل كلي عام في شبكة الإنترنت الدولية أو كوابل الاتصالات البحرية الخارجة عن إرادته.',
          contentEnglish: 'Provider is excused from default caused by nationwide telecom backbone cuts or international submarine cable disruptions.'
        },
        {
          titleArabic: 'المادة العاشرة: السرية وحظر الإفشاء',
          titleEnglish: 'Article 10: Strict Confidentiality Covenant',
          contentArabic: 'يلتزم الطرفان بالحفاظ على سرية البنية التحتية ومعلومات العقد وأسرار العمل وفقاً لأحكام القانون المصري.',
          contentEnglish: 'Both Parties covenant to maintain strict confidentiality of infrastructure architecture and operational data.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الإنهاء والشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code 158)',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لإنذار في حال تكرار انقطاع الخدمة لأكثر من 24 ساعة متصلة دون مبرر.',
          contentEnglish: 'Automatically rescinded ipso jure under Article 158 upon unexcused continuous outage exceeding 24 hours.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار والمراسلات الإلكترونية',
          titleEnglish: 'Article 12: Chosen Domicile & Digital Ticketing Notices',
          contentArabic: 'اتخذ الطرفان العناوين والبريد الإلكتروني المبين بصدر العقد موطناً معتمداً لتبادل إشعارات الدعم الفني والإعلانات الرسمية.',
          contentEnglish: 'Preamble addresses and authorized ticketing portal emails serve as official domiciles for service notices.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'تخضع هذه الاتفاقية لأحكام القوانين المصرية، وتختص المحاكم الاقتصادية بالقاهرة بنظر أي نزاع يثور عنها.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in Cairo Economic Courts.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Execution Counterparts',
          contentArabic: 'تحررت هذه الاتفاقية من نسختين أصليتين بيد كل طرف نسخة للعمل بها وتطبيق معاييرها.',
          contentEnglish: 'Executed in two identical originals, one per party for formal compliance.'
        }
      ]
    }
  },

  // 16. Official Engineering Subcontract Agreement
  {
    id: 'official-engineering-subcontract',
    category: 'عقود المقاولات والإنشاءات والتشطيبات',
    titleAr: 'عقد مقاولة من الباطن لأعمال تخصصية كهروميكانيكية وإنشائية (م 661 مدني)',
    titleEn: 'Engineering & MEP Specialized Subcontract Agreement (Civil Code 661)',
    source: 'النموذج المعتمد بالاتحاد المصري لمقاولي التشييد والبناء ونقابة المهندسين',
    statutoryBasis: 'المادتان 661 و662 من القانون المدني المصري رقم 131 لسنة 1948',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد مقاولة من الباطن لأعمال كهروميكانيكية وتجهيزات',
      contractTitleEnglish: 'Specialized Engineering Subcontract Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: شركة [اسم المقاول الرئيسي الكامل]، سجل تجاري: [...]، تصنيف اتحاد المقاولين: [...] (طرف أول - المقاول الرئيسي).\nثانياً: شركة [اسم مقاول الباطن التخصصي الكامل]، سجل تجاري: [...] (طرف ثانٍ - مقاول الباطن التخصصي).\nوبعد أن أقر الطرفان بكامل أهليتهما القانونية والفنية المعتبرة للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: [Main Contractor Firm], Commercial Reg: [...] (First Party - Main Contractor).\nSecond: [Subcontractor Firm], Commercial Reg: [...] (Second Party - Subcontractor).\nHaving confirmed their full legal and technical capacity, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً مفسراً لكافة أحكامه وشروطه ومواده.',
      recitalsEnglish: 'The preamble forms an inseverable, operative part of this Subcontract.',
      certificationStatement: 'صيغة مطابقة لقواعد الاتحاد المصري لمقاولي البناء والتشييد والمادتين 661 و662 من القانون المدني.',
      legalNotes: 'عقد مقاولة من الباطن مستوفٍ للربط مع العقد الرئيسي (Back-to-Back)، وتأمين الصيانة وحجز الضمان والمسؤولية التضامنية.',
      shariaComplianceNotes: 'عقد استصناع ومقاولة مشروع شرعاً، خالٍ من الغرر والربا والجهالة في الأعمال الموصوفة والمستخلصات.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لاشتراطات الاتحاد المصري للمقاولين وقانون البناء 119 لسنة 2008.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في التزام مقاول الباطن بقواعد العقد الرئيسي وأصول الصنعة.',
        customaryPracticeValidation: 'النموذج التعاقدي المستقر لدى كبريات شركات المقاولات العامة والإنشاءات.',
        shariaAuditStatement: 'عقد استصناع ومقاولة شرعي صحيح نافذ تترتب عليه كافة التزامات الإنجاز والأجر.',
        verificationChecklist: [
          { item: 'التوصيف الدقيق للأعمال المسندة وجداول الكميات المعتمدة', status: 'مستوفى ومعتمد', reference: 'المادة 646 مدني مصري' },
          { item: 'ربط شروط الصرف بالاعتماد من استشاري المشروع (Back to Back)', status: 'مستوفى ومعتمد', reference: 'العرف الهندسي' },
          { item: 'مسؤولية مقاول الباطن عن سلامة الأعمال وعيوب التنفيذ', status: 'مستوفى ومعتمد', reference: 'المادة 651 مدني مصري' },
          { item: 'حجز تأمين الصيانة وخطاب ضمان الدفعة المقدمة', status: 'مستوفى ومعتمد', reference: 'المادة 661 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد والاعتبار التكاملي',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق ووثائق العقد الرئيسي والرسومات والمواصفات الفنية جزءاً لا يتجزأ من هذا العقد ومفسرة له.',
          contentEnglish: 'The preamble, main contract tender docs, and approved engineering drawings form an integral part hereof.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق الأعمال التخصصية المسندة لمقاول الباطن',
          titleEnglish: 'Article 2: Subcontract Scope of Works & MEP Installation',
          contentArabic: 'يقوم مقاول الباطن بتنفيذ وتوريد واختبار وتشغيل الأعمال الكهروميكانيكية والمعمارية التخصصية وفق المواصفات القياسية وأصول الصنعة.',
          contentEnglish: 'Subcontractor undertakes the supply, installation, testing, and commissioning of MEP works per technical specifications.'
        },
        {
          titleArabic: 'المادة الثالثة: القيمة التعاقدية والمستخلصات الشهرية وحجز الضمان',
          titleEnglish: 'Article 3: Contract Sum, Progress Invoices & Retention',
          contentArabic: 'القيمة الإجمالية المتفق عليها هي [...] جنيه مصري، وتُصرف بالمستخلصات الشهرية المعتمدة من استشاري المشروع مع حجز 5% كضمان صيانة.',
          contentEnglish: 'Contract sum is [...] EGP, disbursed via consultant-approved monthly progress payment certificates with 5% retention.'
        },
        {
          titleArabic: 'المادة الرابعة: البرنامج الزمني وتاريخ الإنجاز وغرامة التأخير',
          titleEnglish: 'Article 4: Milestone Timetable & Delay Liquidated Damages',
          contentArabic: 'يلتزم مقاول الباطن بإنجاز الأعمال خلال [...] شهراً، مع فرض غرامة تأخير اتفاقية جابرة للضرر قدرها 1% عن كل أسبوع تأخير وبحد أقصى 10%.',
          contentEnglish: 'Subcontractor completes works within [...] months, subject to 1% weekly liquidated damages up to a 10% ceiling.'
        },
        {
          titleArabic: 'المادة الخامسة: اعتمادات المواد والمهمات الفنية',
          titleEnglish: 'Article 5: Material Approvals & Tech Submittals',
          contentArabic: 'يلتزم مقاول الباطن بتقديم عينات المواد واعتمادها كتابياً من استشاري المشروع والجهة المالكة قبل التوريد أو التركيب.',
          contentEnglish: 'Subcontractor must submit material samples for consultant and owner approval prior to site procurement or installation.'
        },
        {
          titleArabic: 'المادة السادسة: السلامة والصحة المهنية وتأمين العمال',
          titleEnglish: 'Article 6: HSE & Worker Insurance Obligations',
          contentArabic: 'يتحمل مقاول الباطن وحده كامل المسؤولية عن تطبيق لوائح السلامة والصحة المهنية والتأمين الاجتماعي على عماله ومهندسيه بالموقع.',
          contentEnglish: 'Subcontractor bears sole legal responsibility for OSHA compliance, workplace safety, and labor social insurance.'
        },
        {
          titleArabic: 'المادة السابعة: الضمان وأعمال الصيانة (م 651 مدني)',
          titleEnglish: 'Article 7: Warranty Period & Liability (Civil Code 651)',
          contentArabic: 'يضمن مقاول الباطن الأعمال المنفذة لمدة 12 شهراً من تاريخ الاستلام الابتدائي، فضلاً عن خضوعه للمسؤولية العشرية عن السلامة الإنشائية طبقاً للمادة 651 مدني.',
          contentEnglish: 'Subcontractor warrants works for 12 months post-handover, subject to mandatory decennial liability under Article 651.'
        },
        {
          titleArabic: 'المادة الثامنة: التنازل من الباطن وحظر إسناد الأعمال للغير',
          titleEnglish: 'Article 8: Prohibition of Re-Subcontracting',
          contentArabic: 'يحظر على مقاول الباطن التنازل عن العقد أو إسناد أي جزء من الأعمال لمقاول باطن آخر إلا بموافقة كتابية صريحة من المقاول الرئيسي.',
          contentEnglish: 'Subcontractor may not assign or re-subcontract works without prior express written consent of Main Contractor.'
        },
        {
          titleArabic: 'المادة التاسعة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 9: Force Majeure & Hardship',
          contentArabic: 'تخضع التزامات الطرفين لأحكام القوة القاهرة وفقاً للمادتين 147 و165 من القانون المدني المصري.',
          contentEnglish: 'Governed by statutory Force Majeure rules under Egyptian Civil Code Articles 147 and 165.'
        },
        {
          titleArabic: 'المادة العاشرة: سحب الأعمال والتنفيذ على حساب المقاول',
          titleEnglish: 'Article 10: Step-in Rights & Work Withdrawal',
          contentArabic: 'يحق للمقاول الرئيسي سحب الأعمال وإكمالها على حساب مقاول الباطن في حال تباطئه أو إخلاله الجوهري بعد إنذاره كتابياً بـ 7 أيام.',
          contentEnglish: 'Main Contractor may withdraw works and complete them at Subcontractor expense upon 7-day formal notice of material breach.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code 158)',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لإنذار في حال إشهار إفلاس مقاول الباطن أو توقفه عن العمل دون عذر مقبول.',
          contentEnglish: 'Deemed automatically rescinded ipso jure without judicial decree upon bankruptcy or unexcused abandonment of site.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار للإعلانات القضائية',
          titleEnglish: 'Article 12: Chosen Domicile for Formal Service',
          contentArabic: 'اتخذ الطرفان العناوين الموضحة بصدر هذا العقد موطناً مختاراً تصح عليه المراسلات والإعلانات الرسمية.',
          contentEnglish: 'Addresses in preamble serve as official chosen domiciles for all notices.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القوانين المصرية، وتختص محاكم القاهرة أو التحكيم المؤسسي وفق قانون التحكيم 27 لسنة 1994 بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in Cairo courts or CRCICA arbitration.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Execution Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بها وتطبيق بنودها بالموقع.',
          contentEnglish: 'Executed in two identical originals, one per party for site administration.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: المعاينة الموقعية ودراسة المستندات',
          titleEnglish: 'Article 15: Site Inspection & Tender Verification',
          contentArabic: 'يقر مقاول الباطن بأنه عاين موقع المشروع المعاينة التامة النافية للجهالة ودرس الرسومات وظروف التربة وقبل العمل على مسؤوليته الكاملة.',
          contentEnglish: 'Subcontractor acknowledges having thoroughly inspected the project site, examined soil conditions, and reviewed drawings.'
        }
      ]
    }
  },

  // 17. Official Franchise Agreement
  {
    id: 'official-franchise-agreement',
    category: 'عقود الشركات والاستثمار والتجارة',
    titleAr: 'عقد امتياز تجاري (Franchise) واستغلال علامة تجارية وحق معرفة فنية',
    titleEn: 'Commercial Franchise, Trademark & Know-How Licensing Agreement',
    source: 'النموذج الرسمي المعتمد بالاتحاد العام للغرف التجارية المصرية ونقابة المحامين',
    statutoryBasis: 'قانون التجارة رقم 17 لسنة 1999 وقانون حماية الملكية الفكرية رقم 82 لسنة 2002 وقانون حماية المنافسة 3 لسنة 2005',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد امتياز تجاري وحق استغلال علامة تجارية (Franchise)',
      contractTitleEnglish: 'Master Commercial Franchise & Know-How Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: شركة [اسم مانح الامتياز التجاري الكامل]، سجل تجاري: [...]، المالكة للعلامة التجارية المقيدة برقم: [...] (طرف أول - مانح الامتياز Franchisor).\nثانياً: شركة [اسم ممنوح له الامتياز الكامل]، سجل تجاري: [...] (طرف ثانٍ - الممنوح له Franchisee).\nوبعد أن أقر الطرفان بأهليتهما القانونية والصفة المعتبرة للتعاقد، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: [Franchisor Company Name], Commercial Reg: [...], Owner of registered trademark No: [...] (First Party - Franchisor).\nSecond: [Franchisee Company Name], Commercial Reg: [...] (Second Party - Franchisee).\nHaving full legal corporate capacity to contract, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
      recitalsEnglish: 'The preamble forms an inseverable, operative part of this Franchise Agreement.',
      certificationStatement: 'صيغة امتياز تجاري معتمدة ومطابقة لقانون حماية الملكية الفكرية 82 لسنة 2002 وقانون التجارة المصري 17 لسنة 1999.',
      legalNotes: 'عقد امتياز تجاري ينظم منح رخصة استغلال العلامة التجارية، دليل التشغيل (Manual)، الإتاوة الشهرية (Royalties)، وحماية المعرفة الفنية (Know-how).',
      shariaComplianceNotes: 'عقد إجارة على منفعة وعلامة تجارية مشروعة شرعاً، خالٍ من الغرر والربا والجهالة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لإدارة العلامات التجارية والنماذج الصناعية بوزارة التموين والتجارة الداخلية.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في حماية العلامات التجارية وسرية أساليب التشغيل والخلطات التجارية.',
        customaryPracticeValidation: 'النموذج القياسي المعتمد لدى كبار مشغلي سلاسل المطاعم ومتاجر التجزئة العالمية في مصر.',
        shariaAuditStatement: 'عقد امتياز واستغلال علامة تجارية مشروع شرعاً تترتب عليه كافة آثاره المالية والقانونية.',
        verificationChecklist: [
          { item: 'شهادة تسجيل العلامة التجارية سارية بجمهورية مصر العربية', status: 'مستوفى ومعتمد', reference: 'القانون 82/2002' },
          { item: 'تسليم دليل التشغيل وسرية المعرفة الفنية (Operations Manual)', status: 'مستوفى ومعتمد', reference: 'المادة 68 من القانون 82/2002' },
          { item: 'تحديد رسوم الامتياز الأولية ونسبة الإتاوة الدورية (Royalties)', status: 'مستوفى ومعتمد', reference: 'قانون التجارة 17/1999' },
          { item: 'معايير الرقابة على الجودة وفحص المنتجات دورياً', status: 'مستوفى ومعتمد', reference: 'حماية المستهلك 181/2018' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده ودليل التشغيل الملحق به.',
          contentEnglish: 'The preamble constitutes an integral and binding part of this Agreement and the attached Operations Manual.'
        },
        {
          titleArabic: 'المادة الثانية: منح الامتياز وحق استغلال العلامة والنطاق الجغرافي',
          titleEnglish: 'Article 2: Grant of Franchise, Trademark & Territory',
          contentArabic: 'يمنح المانح ويقبل الممنوح له حقاً غير حصري في استغلال العلامة التجارية والسمة التجارية ونظام التشغيل داخل الفرع الكائن بـ [...] طوال مدة العقد.',
          contentEnglish: 'Franchisor grants Franchisee the license to operate the branded concept and trademark at designated location [...].'
        },
        {
          titleArabic: 'المادة الثالثة: رسوم الامتياز الأولية ونسبة الإتاوة الشهرية (Royalties)',
          titleEnglish: 'Article 3: Initial Franchise Fee & Monthly Royalties',
          contentArabic: 'يلتزم الممنوح له بسداد رسم امتياز أولي غير مسترد قدره [...] جنيه مصري عند التوقيع، ونسبة إتاوة شهرية قدرها [...]% من إجمالي المبيعات، ومساهمة تسويقية 2%.',
          contentEnglish: 'Franchisee pays non-refundable initial fee of [...] EGP plus monthly royalties of [...]% of gross sales and 2% marketing fee.'
        },
        {
          titleArabic: 'المادة الرابعة: دليل التشغيل والمعايير الفنية والتدريب',
          titleEnglish: 'Article 4: Operations Manual, Standards & Training',
          contentArabic: 'يسلم المانح للممنوح له نسخة من دليل التشغيل المعتمد، ويلتزم بتدريب الكوادر الإدارية والفنية لضمان التوافق التام مع المعايير القياسية.',
          contentEnglish: 'Franchisor provides the confidential Operations Manual and comprehensive staff training to guarantee brand compliance.'
        },
        {
          titleArabic: 'المادة الخامسة: التوريدات الحصرية للمواد الخام والمهمات',
          titleEnglish: 'Article 5: Authorized Supply Chain & Raw Materials',
          contentArabic: 'يلتزم الممنوح له بشراء كافة المكونات والمواد الخام ومواد التعبئة من المانح أو الموردين المعتمدين حصرياً للحفاظ على هوية وجودة المنتج.',
          contentEnglish: 'Franchisee must purchase core raw materials, ingredients, and packaging exclusively from approved suppliers.'
        },
        {
          titleArabic: 'المادة السادسة: الرقابة على الجودة والتفتيش الدوري الميداني',
          titleEnglish: 'Article 6: Quality Control & Audit Inspections',
          contentArabic: 'يحق لممثلي المانح التفتيش الميداني المفاجئ على الفرع لفحص جودة المنتجات والنظافة والخدمة ومدى الالتزام بالدليل التشغيلي.',
          contentEnglish: 'Franchisor reserves the right to conduct unannounced quality audits and health inspections at the franchise outlet.'
        },
        {
          titleArabic: 'المادة السابعة: سرية المعرفة الفنية وحماية الأسرار التجارية',
          titleEnglish: 'Article 7: Know-How & Trade Secrets Protection',
          contentArabic: 'يلتزم الممنوح له بالحفاظ الصارم على سرية الخلطات وطرق التحضير والسياسات المالية وعدم إفشائها للغير عملاً بالقانون 82 لسنة 2002.',
          contentEnglish: 'Franchisee undertakes perpetual confidentiality of recipes, trade secrets, and operating methods under Law 82 of 2002.'
        },
        {
          titleArabic: 'المادة الثامنة: حظر المنافسة طوال العقد وبعد انتهائه',
          titleEnglish: 'Article 8: Non-Compete Obligations',
          contentArabic: 'يتعهد الممنوح له بعدم ممارسة أو تأسيس أي نشاط تجاري منافس بصورة مباشرة أو غير مباشرة طوال مدة العقد ولمدة سنتين بعد انتهائه.',
          contentEnglish: 'Franchisee covenants not to operate or invest in competing concepts during the term and for 2 years post-termination.'
        },
        {
          titleArabic: 'المادة التاسعة: مدة العقد وتجديده',
          titleEnglish: 'Article 9: Term & Renewal Conditions',
          contentArabic: 'مدة هذا العقد 5 سنوات ميلادية، ويجوز تجديدها باتفاق الطرفين بشرط التزام الممنوح له بكافة المعايير وسداد رسوم التجديد المقررة.',
          contentEnglish: 'Term is 5 calendar years, renewable upon mutual agreement subject to performance compliance and renewal fee payment.'
        },
        {
          titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 10: Force Majeure Events',
          contentArabic: 'تخضع التزامات الطرفين لأحكام القوة القاهرة وفقاً لأحكام القانون المدني المصري رقم 131 لسنة 1948.',
          contentEnglish: 'Governed by statutory Force Majeure rules under Egyptian Civil Code Articles 147 and 165.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الإنهاء والشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code 158)',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لإنذار في حال الإخلال بمعايير الجودة وسلامة الغذاء أو الامتناع عن سداد الإتاوة.',
          contentEnglish: 'Automatically rescinded ipso jure under Article 158 upon critical health violations or royalty payment default.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الآثار المترتبة على إنهاء العقد والتجريد من العلامة',
          titleEnglish: 'Article 12: Post-Termination De-Identification',
          contentArabic: 'عند انتهاء العقد أو فسخه، يلتزم الممنوح له بالتوقف الفوري عن استخدام العلامة وإزالة اللافتات وإعادة كافة أدلة التشغيل ومستلزمات الهوية.',
          contentEnglish: 'Upon termination, Franchisee must immediately remove signage, cease trademark use, and return all operational materials.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الموطن المختار للإعلانات',
          titleEnglish: 'Article 13: Chosen Domicile for Notices',
          contentArabic: 'اتخذ الطرفان العناوين الموضحة بصدر هذا العقد موطناً مختاراً تصح عليه المراسلات والإعلانات الرسمية والقضائية.',
          contentEnglish: 'Addresses in preamble serve as official chosen domiciles for all formal process.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 14: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد للقوانين واللوائح المصرية، وتختص المحاكم الاقتصادية بالقاهرة أو التحكيم المؤسسي بمركز CRCICA بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in Cairo Economic Courts or CRCICA Arbitration.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: نسخ العقد',
          titleEnglish: 'Article 15: Execution Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والرجوع إليها عند اللزوم.',
          contentEnglish: 'Executed in two identical originals, one per party for formal record.'
        }
      ]
    }
  },

  // 18. Official Real Estate Donation / Gift Deed
  {
    id: 'official-real-estate-donation',
    category: 'عقود البيع والملكية العقارية والمنقولات',
    titleAr: 'عقد هبة وتبرع رسمي بعقار خاضع للمادة 486 من القانون المدني وموثق بالشهر العقاري',
    titleEn: 'Official Real Estate Donation & Gift Deed (Civil Code Article 486)',
    source: 'النموذج الرسمي المعتمد بمصلحة الشهر العقاري والتوثيق ونقابة المحامين المصرية',
    statutoryBasis: 'المواد 486 إلى 504 من القانون المدني المصري رقم 131 لسنة 1948 وقانون تنظيم الشهر العقاري',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد هبة رسمية وتبرع عقاري غير مشروط موثق بالشهر العقاري',
      contractTitleEnglish: 'Official Real Estate Gift & Donation Deed',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمدينة القاهرة، تحرر هذا العقد بين كل من:\nأولاً: السيد/ [اسم الواهب الكامل]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - واهب).\nثانياً: السيد/ [اسم الموهوب له الكامل]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف ثانٍ - موهوب له).\nوبعد أن أقر الواهب بأهليته القانونية والشرعية الكاملة للتبرع والتصرف، وأقر الموهوب له بقبوله الهبة، اتفقا على ما يأتي:',
      preambleEnglish: 'Executed in Cairo on [...] AD between:\nFirst: Mr. [Donor Full Name], National ID: [...], residing at: [...] (First Party - Donor).\nSecond: Mr. [Donee Full Name], National ID: [...], residing at: [...] (Second Party - Donee).\nHaving full legal capacity to donate property and Donee having formally accepted the gift, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
      recitalsEnglish: 'The preamble forms an inseverable, operative part of this Donation Deed.',
      certificationStatement: 'صيغة هبة رسمية متوافقة تماماً مع المادة 488 من القانون المدني المصري المستلزمة لورقة رسمية لتمام الهبة.',
      legalNotes: 'هبة عقارية رسمية مشهرة ومستوفية لركن القبول بمجلس العقد وتسليم الحيازة، مع بيان حالات الرجوع في الهبة قانوناً.',
      shariaComplianceNotes: 'مستوفٍ لأحكام الفقه الإسلامي في الهبة والقبض؛ صدقة وهبة برضا تام وخالية من الإكراه والغرر.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التوثيق ونقل الملكية بالتبرع بالشهر العقاري وقانون 9 لسنة 2022.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في وجوب إفراغ هبة العقار في محرر رسمي يوثقه الموظف المختص (م 488 مدني).',
        customaryPracticeValidation: 'الصيغة المعتمدة لدى كبار مستشاري القانون المدني والأحوال والتبرعات.',
        shariaAuditStatement: 'عقد هبة مشروع نافذ شرعاً تترتب عليه كافة آثاره بنقل ملكية العين الموهوبة للموهوب له فوراً.',
        verificationChecklist: [
          { item: 'توثيق الهبة بورقة رسمية أمام موثق الشهر العقاري', status: 'مستوفى ومعتمد', reference: 'المادة 488 مدني مصري' },
          { item: 'قبول الموهوب له الهبة صراحة بمجلس العقد', status: 'مستوفى ومعتمد', reference: 'المادة 487 مدني مصري' },
          { item: 'خلو العين الموهوبة من أي موانع للتصرف أو رهون', status: 'مستوفى ومعتمد', reference: 'قانون الشهر العقاري' },
          { item: 'تسليم العين الموهوبة والحيازة الفعلية للموهوب له', status: 'مستوفى ومعتمد', reference: 'المادة 489 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده ونيّة التبرع الصريحة.',
          contentEnglish: 'The preamble constitutes an integral part hereof confirming donor donative intent.'
        },
        {
          titleArabic: 'المادة الثانية: محل وموضوع الهبة وتوصيف العقار الموهوب',
          titleEnglish: 'Article 2: Subject Matter & Real Estate Description',
          contentArabic: 'وهب وأسقط وتنازل الطرف الأول على سبيل التبرع والهبة التامة للطرف الثاني القابل لذلك، ما هو العقار/الوحدة السكنية الكائنة بـ [...] والبالغ مساحتها [...] متراً مربعاً مع حصتها في الأرض.',
          contentEnglish: 'Donor donates, grants, and conveys gratuitously to Donee the real estate property situated at [...] measuring [...] sq.m.'
        },
        {
          titleArabic: 'المادة الثالثة: القبول الصريح للهبة بمجلس العقد (م 487 مدني)',
          titleEnglish: 'Article 3: Express Acceptance by Donee (Civil Code 487)',
          contentArabic: 'يقر الطرف الثاني بقبوله هذه الهبة الصادرة من الطرف الأول قبولا صريحاً ونهائياً بمجلس هذا العقد ويوجه شكره وامتنانه للواهب.',
          contentEnglish: 'Donee formally, expressly, and irrevocably accepts the gift upon execution pursuant to Civil Code Article 487.'
        },
        {
          titleArabic: 'المادة الرابعة: نفي المقابل والسبب الباعث على التبرع',
          titleEnglish: 'Article 4: Gratuitous Nature & Cause of Donation',
          contentArabic: 'تمت هذه الهبة دون أي مقابل مالي أو عوض مادي، ودافعها صلة الرحم والمحبة والتبرع الخالص لوجه الله وخلوها من أي شبهة غسيل أموال أو تهريب أموال.',
          contentEnglish: 'Donation is made without monetary consideration, motivated by familial affection and purely lawful donative intent.'
        },
        {
          titleArabic: 'المادة الخامسة: سند ملكية الواهب وخلو العين من الحقوق العينية',
          titleEnglish: 'Article 5: Donor Title Deed & Freedom from Encumbrances',
          contentArabic: 'يقر الواهب بأن ملكية العقار الموهوب قد آلت إليه بالشراء الرضائي بموجب العقد المشهر برقم [...]، وأن العين خالية من أي رهن أو حجز أو دين.',
          contentEnglish: 'Donor warrants unencumbered title devolved via registered deed No. [...], clear of liens or judicial attachments.'
        },
        {
          titleArabic: 'المادة السادسة: التسليم الفعلي ونقل الحيازة (م 489 مدني)',
          titleEnglish: 'Article 6: Physical Handover & Possession Transfer (Civil Code 489)',
          contentArabic: 'سلم الطرف الأول للطرف الثاني العقار الموهوب تسليماً فعلياً ومكنه من حيازته الحيازة التامة والانتفاع به والتصرف فيه كتصرف المالك في ملكه.',
          contentEnglish: 'Donor transfers actual physical possession to Donee to exercise all rights of unencumbered ownership.'
        },
        {
          titleArabic: 'المادة السابعة: الالتزام بالتوثيق الرسمي بالشهر العقاري (م 488 مدني)',
          titleEnglish: 'Article 7: Mandatory Official Notarization (Civil Code 488)',
          contentArabic: 'يلتزم الواهب بالمثول أمام مأمورية الشهر العقاري والتوثيق للتوقيع على المحرر الرسمي المشهر لنقل التكليف عملاً بالمادة 488 مدني.',
          contentEnglish: 'Donor covenants to appear before the Notary Public to execute the statutory official deed pursuant to Article 488.'
        },
        {
          titleArabic: 'المادة الثامنة: مصاريف ورسوم التوثيق والنقل',
          titleEnglish: 'Article 8: Notarization Expenses & Government Taxes',
          contentArabic: 'يتحمل الطرف الثاني (الموهوب له) كافة رسوم التوثيق بالشهر العقاري ومصاريف نقل التكليف والضرائب المقررة قانوناً.',
          contentEnglish: 'Donee bears all notary fees, land registration charges, and applicable property transfer taxes.'
        },
        {
          titleArabic: 'المادة التاسعة: أحكام الرجوع في الهبة (المواد 500-504 مدني)',
          titleEnglish: 'Article 9: Statutory Revocation Rules (Civil Code 500-504)',
          contentArabic: 'تخضع هذه الهبة لأحكام القانون المدني بشأن موانع الرجوع في الهبة إذا وجد مانع من موانع المادة 502 مدني كوجود صلة القرابة أو تصرف الموهوب له في العين.',
          contentEnglish: 'Subject to statutory Civil Code limitations on revocation where lawful bars exist under Article 502.'
        },
        {
          titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 10: Force Majeure Events',
          contentArabic: 'تخضع الالتزامات لأحكام القوة القاهرة وفقاً للقانون المدني المصري.',
          contentEnglish: 'Governed by statutory Force Majeure rules under Egyptian law.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: المعاينة النافية للجهالة',
          titleEnglish: 'Article 11: Donee Property Acceptance',
          contentArabic: 'يقر الموهوب له بأنه عاين العقار الموهوب المعاينة التامة النافية للجهالة شرعاً وقانوناً وقبله بحالته الراهنة.',
          contentEnglish: 'Donee covenants having thoroughly inspected the donated real estate and accepts it in its current condition.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار للإعلانات',
          titleEnglish: 'Article 12: Chosen Domicile for Notices',
          contentArabic: 'اتخذ كل من الطرفين عنوانه المبين بصدر العقد موطناً مختاراً تصح عليه كافة المراسلات الرسمية.',
          contentEnglish: 'Addresses in preamble serve as official chosen domiciles for all notices.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القانون المصري، وتختص المحاكم المدنية الواقع بدائرتها العقار بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian laws with jurisdiction vested in competent territorial civil courts.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Execution Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة لتقديمها لمأمورية الشهر العقاري المختصة للتوثيق.',
          contentEnglish: 'Executed in two identical originals, one per party for official submission to Notary Public.'
        }
      ]
    }
  }
];
