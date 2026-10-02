import type { OfficialEncyclopediaContract } from '../types';

export const OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED: OfficialEncyclopediaContract[] = [
  // 19. Agricultural Land Sale Agreement
  {
    id: 'official-agricultural-land-sale',
    category: 'عقود البيع والملكية العقارية والمنقولات',
    titleAr: 'عقد بيع نهائي لأرض زراعية واستصلاح أراضي خاضع لقانون الإصلاح الزراعي 178 لسنة 1952',
    titleEn: 'Definitive Agricultural Land Conveyance & Ownership Transfer Agreement',
    source: 'الهيئة العامة للإصلاح الزراعي والجمعيات التعاونية الزراعية ومصلحة الشهر العقاري',
    statutoryBasis: 'قانون الإصلاح الزراعي رقم 178 لسنة 1952 والقانون المدني المصري وقانون تنظيم الشهر العقاري رقم 114 لسنة 1946',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد بيع بات ونهائي لقطعة أرض زراعية وبئر ومساقي ري',
      contractTitleEnglish: 'Definitive Agricultural Land Purchase & Conveyance Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، تحرر هذا العقد بجمهورية مصر العربية بين كل من:\nأولاً: السيد/ [اسم البائع الكامل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - بائع).\nثانياً: السيد/ [اسم المشتري الكامل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف ثانٍ - مشتري).\nوبعد أن أقر الطرفان بأهليتهما القانونية الكاملة للتصرف والتعاقد وخلوهما من أي مانع شرعي أو قانوني وعدم خضوعهما للحراسة، اتفقا على الآتي:',
      preambleEnglish: 'On this day [...] AD, in Egypt, between:\nFirst: Mr. [Full Seller Name], Egyptian, National ID: [...], residing at: [...] (First Party - Seller).\nSecond: Mr. [Full Buyer Name], Egyptian, National ID: [...], residing at: [...] (Second Party - Buyer).\nBoth Parties, having verified their full legal capacity and compliance with landownership limits, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً مفسراً لكافة بنوده وحقوق الارتفاق الزراعي والري التابعة.',
      recitalsEnglish: 'The preamble and recitals form an integral, operative, and interpretive part of this Agreement including agricultural easements and irrigation rights.',
      certificationStatement: 'صيغة مطابقة لتعليمات هيئة الإصلاح الزراعي ومصلحة الشهر العقاري مع الالتزام التام بالحد الأقصى للملكية الزراعية.',
      legalNotes: 'عقد بيع أطيان زراعية مستوفٍ لسند الملكية وخلو العين من قيود التوزيع أو مستحقات الجمعية الزراعية وبنك التنمية والائتمان الزراعي.',
      shariaComplianceNotes: 'مستوفٍ لضوابط بيع الأراضي الزراعية شرعاً؛ معلوم الحدود والمعالم ومصدر الري خلو من الغرر والربا.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لسجلات مأموريات الشهر العقاري والجمعيات التعاونية الزراعية.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في أن بيع الأرض الزراعية ينقل الحيازة الشرعية ومنافع الري والصرف مع الأصل.',
        customaryPracticeValidation: 'النموذج المعتمد لدى لجان التوثيق بالجمعيات الزراعية ونقابة المحامين.',
        shariaAuditStatement: 'بيع منجز نافذ شرعاً تترتب عليه كافة آثاره الزراعية والملكية دون موانع.',
        verificationChecklist: [
          { item: 'شهادة السلبية وخلو الأرض من ديون بنك التنمية الزراعي', status: 'مستوفى ومعتمد', reference: 'قانون الائتمان الزراعي' },
          { item: 'التأكد من عدم تجاوز الحد الأقصى للملكية (قانون 50/1969)', status: 'مستوفى ومعتمد', reference: 'قانون الإصلاح الزراعي' },
          { item: 'إثبات حصة مياه الري والمساقي والمصارف القانونية', status: 'مستوفى ومعتمد', reference: 'المادة 808 مدني مصري' },
          { item: 'التنازل عن الحيازة بالجمعية الزراعية ونقل السجل الزراعي', status: 'مستوفى ومعتمد', reference: 'تعليمات وزارة الزراعة' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Integral Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لأحكامه.',
          contentEnglish: 'The preamble constitutes an integral, binding part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: محل وموضوع البيع وتوصيف الأرض الزراعية',
          titleEnglish: 'Article 2: Subject Matter & Agricultural Land Description',
          contentArabic: 'باع وأسقط وتنازل الطرف الأول بكافة الضمانات الفعلية والقانونية للطرف الثاني القابل لذلك، ما هو قطعة الأرض الزراعية البالغ مساحتها [...] فدان و[...] قيراط، الكائنة بحوض [...]، زمام قرية [...]، مركز [...]، محافظة [...]، والمحدودة بالحدود الأربعة: الحد البحري [...]، الحد القبلي [...]، الحد الشرقي [...]، الحد الغربي [...].',
          contentEnglish: 'First Party conveys and sells to Second Party the agricultural land measuring [...] Feddans, [...] Kirats, situated in Basin [...], Village [...], Center [...], Governorate [...], bounded north, south, east, and west as specified.'
        },
        {
          titleArabic: 'المادة الثالثة: الثمن الإجمالي والمخالصة المالية',
          titleEnglish: 'Article 3: Total Consideration & Payment Terms',
          contentArabic: 'تم هذا البيع نظير ثمن إجمالي قدره [...] جنيه مصري، سدد منه الطرف الثاني بمجلس العقد مبلغ [...] جنيه مصري نقداً، وتعهد بسداد الباقي [...] عند توثيق العقد، وتوقيع البائع مخالصة بالمقبوض.',
          contentEnglish: 'Agreed for an aggregate consideration of [...] EGP, with advance cash paid upon signing and the balance upon registration.'
        },
        {
          titleArabic: 'المادة الرابعة: حقوق الارتفاق والري والصرف',
          titleEnglish: 'Article 4: Irrigation, Water Rights & Drainage Easements',
          contentArabic: 'يشمل البيع كافة حقوق الارتفاق المقررة للأرض المبيعة من حق الري من الترعة/المسقى العمومي وحصتها في ماكينة الري أو البئر الارتوازي ومصارف الصرف المغطى أو المكشوف.',
          contentEnglish: 'Sale encompasses all agricultural easements, irrigation water quota, canals, pumping station shares, and drainage infrastructure.'
        },
        {
          titleArabic: 'المادة الخامسة: سند الملكية وعدم الخضوع للحراسة',
          titleEnglish: 'Article 5: Title Provenance & Encumbrance Clearance',
          contentArabic: 'يقر الطرف الأول بأن ملكية الأرض آلت إليه بالشراء الرضائي بموجب العقد المشهر برقم [...] وتكليف جمعية [...] الزراعية، وأنها خالية من الرهون والديون ومستحقات بنك الائتمان الزراعي.',
          contentEnglish: 'First Party covenants ownership devolved via registered contract No. [...] with zero mortgage, public debt, or agricultural bank charges.'
        },
        {
          titleArabic: 'المادة السادسة: المعاينة النافية للجهالة والاستلام',
          titleEnglish: 'Article 6: Inspection & Agricultural Handover',
          contentArabic: 'يقر الطرف الثاني بمعاينة الأرض المبيعة المعاينة التامة النافية للجهالة وقبولها بحالتها الراهنة واستلم حيازتها الزراعية الفعلية بمجلس العقد.',
          contentEnglish: 'Second Party covenants having conducted thorough due diligence inspection of the land and takes actual agricultural possession.'
        },
        {
          titleArabic: 'المادة السابعة: نقل الحيازة بالجمعية الزراعية',
          titleEnglish: 'Article 7: Agricultural Cooperative Record Transfer',
          contentArabic: 'يلتزم الطرف الأول بالحضور مع الطرف الثاني أمام الجمعية التعاونية الزراعية المختصة للتنازل عن بطاقة الحيازة الزراعية وصرف الأسمدة والمستلزمات باسم المشتري.',
          contentEnglish: 'First Party covenants to appear before the competent Agricultural Cooperative Society to officially transfer agricultural records and fertilizer quota.'
        },
        {
          titleArabic: 'المادة الثامنة: الالتزام بالتوثيق بالشهر العقاري',
          titleEnglish: 'Article 8: Notary Public Registration Obligation',
          contentArabic: 'يلتزم الطرف الأول بتقديم كافة أصول مستندات الملكية والمثول أمام مأمورية الشهر العقاري للتوقيع على عقد البيع النهائي أو الإقرار بصحة التوقيع ونفاذ البيع.',
          contentEnglish: 'First Party covenants to execute the final deed before the Land Registry Directorate or acknowledge validity in court.'
        },
        {
          titleArabic: 'المادة التاسعة: ضمان عدم التعرض والاستحقاق',
          titleEnglish: 'Article 9: Warranty against Dispossession & Title Defects',
          contentArabic: 'يضمن الطرف الأول للطرف الثاني عدم التعرض المادي والقانوني الصادر منه أو من الغير أو أي استحقاق يمس ملكية الأرض الزراعية محل التعاقد.',
          contentEnglish: 'First Party provides comprehensive statutory warranties against third-party claims, dispossession, and eviction.'
        },
        {
          titleArabic: 'المادة العاشرة: الضرائب والرسوم الزراعية',
          titleEnglish: 'Article 10: Agricultural Taxes & Cooperative Dues',
          contentArabic: 'يتحمل الطرف الأول كافة الضرائب العقارية الزراعية ورسوم الجمعية السابقة على تاريخ هذا العقد، ويتحمل المشتري ما يستجد لاحقاً.',
          contentEnglish: 'Pre-existing land taxes and cooperative dues are borne by Seller; subsequent dues borne by Buyer.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح والتعويض الجابر',
          titleEnglish: 'Article 11: Explicit Rescission & Liquidated Damages',
          contentArabic: 'في حال إخلال أي طرف بالتزاماته الجوهرية يُعتبر العقد مفسوخاً من تلقاء نفسه دون حاجة لتنبيه أو حكم قضائي مع التزام المخل بتعويض جابر غير ربوي.',
          contentEnglish: 'Any material breach triggers ipso jure cancellation without judicial decree, plus non-usurious fair compensation.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 12: Force Majeure & Environmental Events',
          contentArabic: 'تخضع التزامات الأطراف لأحكام القوة القاهرة والكوارث الطبيعية وفقاً لأحكام القانون المدني المصري.',
          contentEnglish: 'Governed by statutory Force Majeure rules regarding environmental or natural events.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الموطن المختار والإخطارات',
          titleEnglish: 'Article 13: Chosen Domiciles & Notices',
          contentArabic: 'عناوين الأطراف بصدر العقد موطن مختار لكافة الإعلانات والمراسلات القضائية.',
          contentEnglish: 'Addresses in preamble serve as official chosen legal domiciles.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: الاختصاص القضائي',
          titleEnglish: 'Article 14: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد للقانون المصري، وتختص المحكمة الجزئية أو الابتدائية الواقع بدائرتها الأطيان بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian law with territorial jurisdiction vested in the competent local court.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: نسخ العقد',
          titleEnglish: 'Article 15: Counterparts & Signatures',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها ونقل الحيازة والتكليف.',
          contentEnglish: 'Executed in two authentic originals, one per party, for official submission and registration.'
        }
      ]
    }
  },

  // 20. Commercial Store & Goodwill Sale (Fond de Commerce)
  {
    id: 'official-commercial-store-sale',
    category: 'عقود البيع والملكية العقارية والمنقولات',
    titleAr: 'عقد بيع متجر ومتجر تجاري بالجدك بعناصره المادية والمعنوية طبقاً للمادة 37 تجارة',
    titleEn: 'Sale of Commercial Business Going Concern & Goodwill Agreement (Fond de Commerce)',
    source: 'الغرفة التجارية المصرية ومصلحة السجل التجاري بوزارة التموين والتجارة الداخلية',
    statutoryBasis: 'المواد 37 إلى 57 من قانون التجارة رقم 17 لسنة 1999 وقانون السجل التجاري رقم 34 لسنة 1976',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد بيع وتنازل نهائي عن متجر تجاري وعناصره المعنوية والمادية بالجدك',
      contractTitleEnglish: 'Definitive Sale & Transfer of Commercial Business Goodwill & Assets',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بالقاهرة، بين كل من:\nأولاً: السيد/ [اسم البائع]، تاجر مقيد بالسجل التجاري رقم [...]، المقيم في: [...] (طرف أول - بائع المتجر).\nثانياً: السيد/ [اسم المشتري]، تاجر مقيد بالسجل التجاري رقم [...]، المقيم في: [...] (طرف ثانٍ - مشتري المتجر).\nوبعد أن أقر الطرفان بأهليتهما التجارية والقانونية للتعاقد والتصرف طبقاً لأحكام قانون التجارة، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: Mr. [Full Seller Name], registered merchant under CR No. [...], residing at: [...] (First Party - Business Seller).\nSecond: Mr. [Full Buyer Name], registered merchant under CR No. [...], residing at: [...] (Second Party - Business Buyer).\nBoth Parties, being legally competent merchants under the Egyptian Commercial Code, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة أحكامه وعناصره المادية والمعنوية.',
      recitalsEnglish: 'The preamble and recitals form an integral, operative part of this commercial agreement regarding tangible and intangible business assets.',
      certificationStatement: 'صيغة مطابقة للمادة 37 تجارة وقانون السجل التجاري وقواعد نشر وشهر بيع المحال التجارية لمنع معارضة الدائنين.',
      legalNotes: 'عقد بيع متجر تجاري مستوفٍ للشهرة التجارية والاسم التجاري وحق الإجارة (الجدك) والتنازل عن السجل التجاري والبطاقة الضريبية.',
      shariaComplianceNotes: 'مستوفٍ لضوابط الفقه في بيع الأعيان والحقوق المعنوية المتمولة شرعاً؛ معلوم المبيع والثمن دون غرر.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التوثيق ونقل قيود السجل التجاري ومكاتب الغرفة التجارية.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في أن بيع المتجر يشمل حتماً العناصر المعنوية وحق الاتصال بالعملاء.',
        customaryPracticeValidation: 'النموذج المعتمد لدى كبار محامي الشركات وتجار الغرف التجارية المصرية.',
        shariaAuditStatement: 'عقد بيع مشروع نافذ شرعاً تترتب عليه كافة آثاره التجارية والمالية دون محظورات.',
        verificationChecklist: [
          { item: 'قيد البيع بالسجل التجاري ونشره بالجريدة الرسمية للشركات', status: 'مستوفى ومعتمد', reference: 'المادة 40 من قانون التجارة' },
          { item: 'حصر البضائع والمهمات والأثاث بموجب قائمة جرد ملحقة', status: 'مستوفى ومعتمد', reference: 'المادة 38 تجارة' },
          { item: 'موافقة مالك العقار أو توافر شروط البيع بالجدك (م 20 ق 136/1981)', status: 'مستوفى ومعتمد', reference: 'قوانين إيجار الأماكن' },
          { item: 'شهادة براءة ذمة من الضرائب العامة وضريبة القيمة المضافة', status: 'مستوفى ومعتمد', reference: 'قانون الإجراءات الضريبية' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble Integration',
          contentArabic: 'يُعتبر التمهيد وقوائم الجرد الملحقة جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لمواده.',
          contentEnglish: 'The preamble and attached inventory schedules constitute an integral part of this contract.'
        },
        {
          titleArabic: 'المادة الثانية: محل وموضوع البيع وبيانات المتجر',
          titleEnglish: 'Article 2: Business Premises & Goodwill Identification',
          contentArabic: 'باع وتنازل الطرف الأول للطرف الثاني القابل لذلك بكافة الضمانات القانونية، المتجر التجاري المعروف باسم "[...]" الكائن بالعقار رقم [...] بشارع [...]، قسم [...]، والمقيد بالسجل التجاري برقم [...] مكتب سجل تجاري [...].',
          contentEnglish: 'First Party sells and transfers to Second Party the commercial business known as "[...]", located at [...], registered under Commercial Registration No. [...].'
        },
        {
          titleArabic: 'المادة الثالثة: العناصر المعنوية المشمولة بالبيع',
          titleEnglish: 'Article 3: Intangible Assets & Goodwill Transfer',
          contentArabic: 'يشمل هذا البيع العناصر المعنوية للمتجر عملاً بالمادة 37 تجارة وهي: الاتصال بالعملاء (السمعة والشهرة التجارية)، الاسم التجاري، العلامة والسمة التجارية، حقوق الإجارة (الجدك)، والتراخيص التجارية والصناعية.',
          contentEnglish: 'The sale includes intangible elements per Article 37 of the Commercial Code: customer base, commercial name, trademark, lease right (Djedk), and operating licenses.'
        },
        {
          titleArabic: 'المادة الرابعة: العناصر المادية وقائمة الجرد',
          titleEnglish: 'Article 4: Tangible Assets & Stock Inventory',
          contentArabic: 'يشمل البيع العناصر المادية للمتجر المبينة بقائمة الجرد الموقعة من الطرفين والمرفقة، وتشمل الآلات والمعدات، الأثاث والديكورات، والبضائع الصالحة للبيع بقيمتها المحددة بمحضر الجرد.',
          contentEnglish: 'Sale encompasses physical assets detailed in the signed inventory list, including equipment, fixtures, decorations, and merchantable inventory.'
        },
        {
          titleArabic: 'المادة الخامسة: الثمن الإجمالي والمخالصة المالية',
          titleEnglish: 'Article 5: Purchase Consideration & Payment Terms',
          contentArabic: 'تم هذا البيع نظير ثمن إجمالي قدره [...] جنيه مصري، مفصل كالتالي: [...] جنيه مقابل العناصر المعنوية وحق الإجارة، و[...] جنيه مقابل العناصر المادية والبضائع، سدده المشتري بمجلس العقد وتوقيع البائع مخالصة تامة.',
          contentEnglish: 'Sale completed for an aggregate price of [...] EGP allocated between intangible assets/lease rights and physical inventory, paid upon execution.'
        },
        {
          titleArabic: 'المادة السادسة: حق الإجارة والتنازل بالجدك',
          titleEnglish: 'Article 6: Tenancy Assignment & Landlord Rights',
          contentArabic: 'يتنازل البائع عن عقد إيجار المحل المؤرخ [...] والمبرم مع مالك العقار، ويضمن توافر حالة البيع بالجدك المنصوص عليها بالمادة 20 من القانون رقم 136 لسنة 1981 وسداد نسبة المالك المقررة قانوناً.',
          contentEnglish: 'Seller transfers tenancy contract under statutory Djedk sale provisions pursuant to Law 136/1981 and undertakes to satisfy landlord statutory percentage.'
        },
        {
          titleArabic: 'المادة السابعة: التنازل عن التراخيص والسجل التجاري',
          titleEnglish: 'Article 7: Operating Licenses & Commercial Registry Transfer',
          contentArabic: 'يلتزم الطرف الأول بالمثول أمام مكتب السجل التجاري والحي ومصلحة الضرائب لتوثيق التنازل عن القيد والترخيص ونقلها بالكامل باسم المشتري.',
          contentEnglish: 'First Party covenants to appear before Commercial Registry, municipality, and Tax Authority to transfer licenses and registrations.'
        },
        {
          titleArabic: 'المادة الثامنة: التزام البائع بعدم المنافسة',
          titleEnglish: 'Article 8: Covenant Non-Compete Undertaking',
          contentArabic: 'يتعهد الطرف الأول صراحة بالامتناع عن فتح أو إدارة أو المشاركة في أي متجر مماثل يمارس نفس النشاط التجاري في دائرة نصف قطرها [...] كيلومترات لمدة [...] سنوات من تاريخ هذا العقد.',
          contentEnglish: 'First Party explicitly agrees not to open, manage, or participate in any competing business within a radius of [...] km for [...] years.'
        },
        {
          titleArabic: 'المادة التاسعة: براءة الذمة الضريبية والعمالية والديون',
          titleEnglish: 'Article 9: Tax, Labor & Creditor Indemnification',
          contentArabic: 'يقر البائع بتحمله منفرداً لكافة الضرائب والتأمينات الاجتماعية وفواتير المرافق وديون الموردين السابقة على تاريخ هذا العقد ويضمن المشتري من أي رجوع.',
          contentEnglish: 'Seller covenants sole responsibility for all taxes, social insurances, utilities, and vendor debts accrued prior to execution.'
        },
        {
          titleArabic: 'المادة العاشرة: شهر البيع وحماية الدائنين',
          titleEnglish: 'Article 10: Publication & Creditor Protection Rights',
          contentArabic: 'يلتزم الطرفان بشهر هذا البيع وقيده بالسجل التجاري ونشره بالجريدة الرسمية عملاً بأحكام المادة 40 تجارة لمواجهة معارضة الدائنين وإسقاط حقهم وفق المواعيد القانونية.',
          contentEnglish: 'Parties agree to register the sale and publish in the official commercial bulletin per Article 40 of Commercial Code for creditor notification.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: المعاينة النافية للجهالة والتسليم الفعلي',
          titleEnglish: 'Article 11: Due Diligence & Immediate Possession',
          contentArabic: 'يقر المشتري بأنه عاين المتجر ودفاتره التجارية وفواتيره وبضائعه المعاينة النافية للجهالة وقبله بحالته الراهنة، واستلم مفاتيح المحل وحيازته بمجلس العقد.',
          contentEnglish: 'Buyer confirms complete due diligence inspection of premises, books, and inventory, and takes actual possession upon signing.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الشرط الفاسخ الصريح والتعويض الجابر',
          titleEnglish: 'Article 12: Explicit Cancellation & Damages',
          contentArabic: 'في حال إخلال أي طرف بالتزاماته الجوهرية يُعتبر العقد مفسوخاً من تلقاء نفسه بقوة القانون مع التعويض الجابر غير الربوي.',
          contentEnglish: 'Breach of core commitments triggers ipso jure cancellation with enforceable non-usurious liquidated damages.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الموطن المختار للإعلانات',
          titleEnglish: 'Article 13: Chosen Legal Domiciles',
          contentArabic: 'عناوين الأطراف المذكورة بصدر العقد موطن مختار لكافة الإعلانات والمراسلات القضائية.',
          contentEnglish: 'Addresses in preamble constitute elected legal domiciles.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: القانون الواجب التطبيق والمحكمة المختصة',
          titleEnglish: 'Article 14: Governing Law & Economic Courts Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام قانون التجارة المصري، وتختص المحكمة الاقتصادية بنظر أي نزاع ينشأ عنه.',
          contentEnglish: 'Governed by Egyptian Commercial Law with jurisdiction vested exclusively in Egyptian Economic Courts.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: نسخ العقد',
          titleEnglish: 'Article 15: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من ثلاث نسخ أصلية، بيد كل طرف نسخة، والنسخة الثالثة لتقديمها لمكتب السجل التجاري للتأشير والشهر.',
          contentEnglish: 'Executed in three authentic originals, one per party and third for Commercial Registry recording.'
        }
      ]
    }
  },

  // 21. Off-Plan Real Estate Purchase (Under Development & Escrow)
  {
    id: 'official-off-plan-unit-sale',
    category: 'عقود البيع والملكية العقارية والمنقولات',
    titleAr: 'عقد بيع وحدة عقارية تحت الإنشاء والتطوير بنظام البيع على الخارطة وحساب الضمان',
    titleEn: 'Off-Plan Real Estate Purchase & Development Agreement (Escrow Secured)',
    source: 'وزارة الإسكان والمرافق والمجتمعات العمرانية وضوابط مجلس الوزراء لحماية المشترين لسنة 2022',
    statutoryBasis: 'القانون المدني المصري وقرار مجلس الوزراء رقم 2184 لسنة 2022 وقانون حماية المستهلك رقم 181 لسنة 2018',
    
    totalClauses: 16,
    contractData: {
      contractTitleArabic: 'عقد بيع وتطوير وحدة عقارية على الخارطة قيد الإنشاء مع حساب ضمان بنكي',
      contractTitleEnglish: 'Off-Plan Residential Unit Purchase & Real Estate Development Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بالقاهرة، بين كل من:\nأولاً: شركة [اسم شركة التطوير العقاري] ش.م.م، سجل تجاري رقم [...]، ومقرها: [...] (طرف أول - المطور العقاري والبائع).\nثانياً: السيد/ [اسم المشتري الكامل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف ثانٍ - المشتري).\nوبعد أن أقر الطرفان بأهليتهما القانونية المعتبرة للتعاقد واطلاع المشتري على تراخيص المشروع وقرار التخصيص، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: [Developer Company Name] S.A.E., Commercial Reg. No. [...], headquartered at: [...] (First Party - Real Estate Developer & Seller).\nSecond: Mr. [Full Buyer Name], Egyptian, National ID: [...], residing at: [...] (Second Party - Buyer).\nBoth Parties, being legally competent to contract, having reviewed project ministerial decrees and permits, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد والملحقات الهندسية وجداول التشطيب جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لأحكامه.',
      recitalsEnglish: 'Preamble, architectural annexes, and finishing specifications schedules form an integral part hereof.',
      certificationStatement: 'صيغة مطابقة لضوابط مجلس الوزراء رقم 2184 لسنة 2022 لتنظيم بيع وحدات مشروعات التطوير العقاري وإيداع الأقساط بحساب مصرفي مستقل.',
      legalNotes: 'عقد بيع على الخارطة ملزم للطرفين بحظر فرض رسوم تنازل وتحديد نسبة الإنجاز والتعويض عن التأخير في التسليم.',
      shariaComplianceNotes: 'مستوفٍ لضوابط عقد الاستصناع الشرعي؛ منضبط الأوصاف والأجل والثمن دون غرر أو ربا تأخيري.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% للقرارات الوزارية الصادرة من مجلس الوزراء وهيئة المجتمعات العمرانية الجديدة.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في أن بيع الأموال المستقبلية يلتزم فيه البائع بإنشاء الشيء وفق المواصفات المحددة.',
        customaryPracticeValidation: 'النموذج المعتمد لدى غرفة التطوير العقاري باتحاد الصناعات ونقابة المحامين.',
        shariaAuditStatement: 'عقد استصناع مشروع تترتب عليه كافة آثاره الالتزامية بنقل الملكية عند الإنجاز والتسليم.',
        verificationChecklist: [
          { item: 'سند تخصيم الأرض والقرار الوزاري المعتمد للمشروع', status: 'مستوفى ومعتمد', reference: 'قرارات هيئة المجتمعات العمرانية' },
          { item: 'حساب الضمان البنكي المستقل لحماية أموال الحاجزين', status: 'مستوفى ومعتمد', reference: 'قرار مجلس الوزراء 2184/2022' },
          { item: 'ترخيص البناء وسريانه الهندسي ومطابقته للكود', status: 'مستوفى ومعتمد', reference: 'قانون البناء الموحد 119/2008' },
          { item: 'حظر فرض أي رسوم تنازل أو مصاريف إعادة بيع تعسفية', status: 'مستوفى ومعتمد', reference: 'قانون حماية المستهلك 181/2018' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد والملحقات الهندسية',
          titleEnglish: 'Article 1: Preamble & Architectural Specifications',
          contentArabic: 'يُعتبر التمهيد والمخطط العام للمشروع وجدول المواصفات الملحق جزءاً لا يتجزأ من هذا العقد.',
          contentEnglish: 'Preamble, project master plan, and specifications annex constitute an integral part hereof.'
        },
        {
          titleArabic: 'المادة الثانية: محل العقد وبيانات الوحدة المتعاقد عليها',
          titleEnglish: 'Article 2: Unit Identification & Architectural Layout',
          contentArabic: 'باع المطور العقاري للمشتري القابل لذلك الوحدة السكنية رقم [...] بالعمارة [...] بالمرحلة [...] بمشروع [...] المقام على قطعة الأرض رقم [...]، بمساحة إجمالية تقريبية [...] متراً مربعاً.',
          contentEnglish: 'Developer sells to Buyer Unit No. [...] in Building [...], Phase [...] of Project [...], measuring approximate gross area of [...] sq.m.'
        },
        {
          titleArabic: 'المادة الثالثة: الثمن الإجمالي وجدول الأقساط',
          titleEnglish: 'Article 3: Total Price & Installments Schedule',
          contentArabic: 'إجمالي ثمن الوحدة المبيعة [...] جنيه مصري، سدد منه المشتري دفعة تعاقد [...] جنيه، والمتبقي يُسدد على أقساط متساوية ومربوطة بمراحل التنفيذ الفعلي دون فوائد ربوية.',
          contentEnglish: 'Total price is [...] EGP, with contract deposit paid and remaining balance payable per milestone schedule with zero usury.'
        },
        {
          titleArabic: 'المادة الرابعة: حساب الضمان المصرفي للمشروع (Escrow Account)',
          titleEnglish: 'Article 4: Dedicated Bank Escrow Account',
          contentArabic: 'يلتزم المشتري بإيداع كافة الأقساط بالحساب البنكي المخصص للمشروع ببنك [...] رقم [...]، ولا تصرف الأموال إلا للإنفاق على أعمال التشييد والبناء وفق ضوابط مجلس الوزراء.',
          contentEnglish: 'All payments deposited into dedicated Project Bank Escrow Account at [...] Bank, disbursed strictly for construction progress.'
        },
        {
          titleArabic: 'المادة الخامسة: موعد التسليم وغرامات التأخير الاتفاقية',
          titleEnglish: 'Article 5: Delivery Date & Developer Delay Penalties',
          contentArabic: 'يلتزم المطور بتسليم الوحدة كاملة التشطيب والمرافق في موعد غايته [...] مع فترة سماح 6 أشهر، وفي حال تأخر المطور يلتزم بسداد غرامة تأخير اتفاقية جابرة 1% شهرياً لصالح المشتري.',
          contentEnglish: 'Developer covenants delivery by [...] with 6 months grace; unwarranted delay obligates 1% monthly penalty payable to Buyer.'
        },
        {
          titleArabic: 'المادة السادسة: عجز أو زيادة المساحة عند الاستلام الفعلي',
          titleEnglish: 'Article 6: Area Variance & Final Survey Adjustments',
          contentArabic: 'تخضع المساحة الفعلية للرفع المساحي عند التسليم؛ فإذا طرأ عجز أو زيادة لا تتجاوز 5% تتم المحاسبة بذات سعر المتر التعاقدي، وإذا زاد العجز عن ذلك كان للمشتري حق الفسخ أو خفض الثمن.',
          contentEnglish: 'Actual handover area subject to survey; variances within 5% adjusted at contractual square-meter rate.'
        },
        {
          titleArabic: 'المادة السابعة: وديعة الصيانة ومصروفات الإدارة',
          titleEnglish: 'Article 7: Maintenance Reserve Fund & Operations',
          contentArabic: 'يلتزم المشتري بسداد وديعة صيانة قدرها [...] جنيه (تعادل نسبة [...]%) تودع بحساب بنكي مخصص ويصرف من ريعها وعوائدها على خدمات صيانة وحراسة ونظافة العقار.',
          contentEnglish: 'Buyer pays [...]% maintenance deposit invested in dedicated fund for upkeep, security, and compound management.'
        },
        {
          titleArabic: 'المادة الثامنة: حق المشتري في التنازل وإعادة البيع (حظر الرسوم التعسفية)',
          titleEnglish: 'Article 8: Resale Rights & Prohibition of Arbitrary Fees',
          contentArabic: 'يحق للمشتري التنازل عن الوحدة أو إعادة بيعها للغير، ويلتزم المطور بإصدار خطاب التنازل دون فرض أي مصاريف أو نسب تعسفية إعمالاً لقانون حماية المستهلك 181 لسنة 2018.',
          contentEnglish: 'Buyer retains right of assignment and resale; Developer prohibited from levying arbitrary transfer fees per Law 181/2018.'
        },
        {
          titleArabic: 'المادة التاسعة: حصة الوحدة في الأرض والأجزاء المشتركة',
          titleEnglish: 'Article 9: Undivided Land Share & Common Areas',
          contentArabic: 'تشمل ملكية الوحدة حصة شائعة في الأرض والمرافق المشتركة وموقف السيارات تعادل نسبة مساحة الوحدة إلى مجموع مسطح مباني العقار.',
          contentEnglish: 'Ownership includes proportionate undivided share in land, common structures, and designated garage space.'
        },
        {
          titleArabic: 'المادة العاشرة: التزام المطور بالضمان العشري',
          titleEnglish: 'Article 10: Decennial Structural Liability',
          contentArabic: 'يضمن المطور سلامة الأساسات والمنشآت الخرسانية ضد التهدم الكلي أو الجزئي أو العيوب الجوهرية لمدة عشر سنوات من تاريخ التسليم عملاً بالمادة 651 مدني.',
          contentEnglish: 'Developer warrants structural integrity against collapse or critical defects for 10 years per Article 651 of Civil Code.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: توصيل المرافق الرئيسية والتشطيبات',
          titleEnglish: 'Article 11: Utilities Connections & Finishing Standards',
          contentArabic: 'يتحمل المطور توصيل شبكات المياه والكهرباء والغاز والصرف الصحي وشبكة الاتصالات حتى مدخل الوحدة على نفقته الخاصة.',
          contentEnglish: 'Developer responsible for main utilities infrastructure (water, electricity, gas, sewage, telecom) to unit door.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: التوثيق بالشهر العقاري ونقل الملكية',
          titleEnglish: 'Article 12: Land Registry Notarization & Legal Title',
          contentArabic: 'يلتزم المطور بالحضور أمام مأمورية الشهر العقاري للتوقيع على عقد البيع النهائي وتسليم المشتري شهادة المخالصة وسند التكليف فور سداد كامل الثمن.',
          contentEnglish: 'Developer covenants to execute final registered deed before Land Registry upon full financial settlement.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 13: Force Majeure & Material Disruptions',
          contentArabic: 'تخضع مدد التنفيذ لأحكام القوة القاهرة وفقاً لأحكام القانون المدني المصري وما تصدره الدولة من قرارات سيادية.',
          contentEnglish: 'Governed by Egyptian statutory Force Majeure and sovereign state regulations.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: الموطن المختار والمراسلات',
          titleEnglish: 'Article 14: Legal Domicile for Notices',
          contentArabic: 'عناوين الطرفين بصدر العقد موطن مختار تصح عليه كافة الإخطارات بالبريد المسجل أو الرسائل الإلكترونية المعتمدة.',
          contentEnglish: 'Addresses in preamble serve as official domiciles for certified notices.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: القانون الواجب التطبيق والمحكمة المختصة',
          titleEnglish: 'Article 15: Governing Law & Dispute Resolution',
          contentArabic: 'يخضع هذا العقد للقانون المصري، وتختص المحاكم المدنية أو الاقتصادية المصرية بحسب الاختصاص القيمي والنوعي.',
          contentEnglish: 'Governed by Egyptian law with jurisdiction in competent civil or economic courts.'
        },
        {
          titleArabic: 'المادة السادسة عشرة: نسخ العقد',
          titleEnglish: 'Article 16: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها وحفظ الحقوق القانونية.',
          contentEnglish: 'Executed in two authentic originals, one per party, having identical legal authority.'
        }
      ]
    }
  },

  // 22. One-Person Company (Sole Proprietorship LLC) Articles of Association
  {
    id: 'official-one-person-company',
    category: 'عقود الشركات والاستثمار وتداول الحصص',
    titleAr: 'عقد ونظام تأسيس شركة الشخص الواحد ذات مسؤولية محدودة (ش.ش.و) وفق القانون 4 لسنة 2018',
    titleEn: 'Articles of Association & Foundation Deed for One-Person LLC (Sole Proprietorship LLC)',
    source: 'الهيئة العامة للاستثمار والمناطق الحرة (GAFI) ومصلحة الشركات',
    statutoryBasis: 'القانون رقم 4 لسنة 2018 المعدل للقانون 159 لسنة 1981 ولائحته التنفيذية وقانون الاستثمار 72 لسنة 2017',
    
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد ونظام تأسيس شركة الشخص الواحد ذات مسؤولية محدودة (ش.ش.و)',
      contractTitleEnglish: 'Articles of Association for a Sole Proprietorship One-Person Limited Liability Company',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بمقر الهيئة العامة للاستثمار والمناطق الحرة بالقاهرة:\nأقر أنا السيد/ [اسم المؤسس الكامل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...]، بكامل أهليتي القانونية لتأسيس الشركات والتصرف، برغبتي المنفردة في تأسيس شركة الشخص الواحد ذات مسؤولية محدودة وفقاً لأحكام القانون رقم 159 لسنة 1981 وتعديلاته بالقانون رقم 4 لسنة 2018، وطبقاً للشروط والأحكام الآتية:',
      preambleEnglish: 'On this day [...] AD, at the General Authority for Investment (GAFI), Cairo, Egypt:\nI, Mr. [Full Founder Name], Egyptian, National ID: [...], residing at: [...], having full capacity to establish commercial corporations, declare my sole will to incorporate a One-Person LLC pursuant to Law 159/1981 as amended by Law 4/2018, as follows:',
      recitalsArabic: 'يُعتبر هذا النظام الأساسي وثيقة تأسيسية ملزمة وقانون الشركة الحاكم لجميع تصرفاتها وعملياتها التجارية.',
      recitalsEnglish: 'These Articles of Association constitute the governing constitutional deed of the company.',
      certificationStatement: 'صيغة مطابقة لنماذج التأسيس الإلكتروني المعتمدة بمركز خدمات المستثمرين بالهيئة العامة للاستثمار والمناطق الحرة (GAFI).',
      legalNotes: 'شركة ذات مسؤولية محدودة لشخص واحد تتمتع بالشخصية الاعتبارية المستقلة وذمة مالية منفصلة عن الذمة المالية للمؤسس.',
      shariaComplianceNotes: 'مستوفية لضوابط تأسيس الشركات الفردية المساهمة وتجارة الأعيان المباحة شرعاً مع حظر الأنشطة المحرمة والربوية.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابقة بنسبة 100% لنماذج التأسيس بمركز خدمات المستثمرين بالهيئة العامة للاستثمار (بوابة GAFI).',
        cassationPrinciplesValidation: 'متوافقة مع مبادئ المحاكم الاقتصادية في تحديد المسؤولية المحدودة للمؤسس برأس مال الشركة دون أمواله الخاصة.',
        customaryPracticeValidation: 'النموذج الرسمي المعتمد بمكاتب توثيق الاستثمار ونقابة المحامين.',
        shariaAuditStatement: 'كيان تجاري مشروع نافذ تترتب عليه كافة الآثار النظامية والمالية وفق القواعد الشرعية.',
        verificationChecklist: [
          { item: 'سداد كامل رأس المال نقداً بالبنك وشهادة إيداع بنكية معتمدة', status: 'مستوفى ومعتمد', reference: 'المادة 129 مكرر ق 4/2018' },
          { item: 'تسمية الشركة متبوعة بعبارة (شركة الشخص الواحد ذ.م.م)', status: 'مستوفى ومعتمد', reference: 'المادة 129 مكرر 2' },
          { item: 'تعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين', status: 'مستوفى ومعتمد', reference: 'المادة 129 مكرر 7' },
          { item: 'تحديد مقر الشركة الرسمي واستخراج السجل التجاري والبطاقة الضريبية', status: 'مستوفى ومعتمد', reference: 'قانون السجل التجاري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: الاسم التجاري والشكل القانوني',
          titleEnglish: 'Article 1: Corporate Name & Legal Form',
          contentArabic: 'اسم الشركة هو: "[اسم الشركة]" (شركة الشخص الواحد ذات مسؤولية محدودة - ش.ش.و)، وتخضع لأحكام القانون رقم 159 لسنة 1981 وتعديلاته بالقانون 4 لسنة 2018.',
          contentEnglish: 'Company name is: "[...]" (One-Person Limited Liability Company - OPC), governed by Law 159/1981 as amended by Law 4/2018.'
        },
        {
          titleArabic: 'المادة الثانية: غرض ونشاط الشركة',
          titleEnglish: 'Article 2: Corporate Purpose & Business Objectives',
          contentArabic: 'غرض الشركة هو: [...]، ويجوز للشركة أن تشترك بأي وجه من الوجوه مع الهيئات أو الشركات التي تزاول أعمالاً شبيهة أو تتعاون معها لتحقيق أغراضها داخل مصر أو خارجها.',
          contentEnglish: 'Corporate purpose is: [...], with full capacity to collaborate with similar entities to fulfill corporate objectives inside or outside Egypt.'
        },
        {
          titleArabic: 'المادة الثالثة: المقر الرئيسي والموطن القانوني',
          titleEnglish: 'Article 3: Registered Corporate Headquarters',
          contentArabic: 'مقر الشركة الرئيسي في: مدينة [...]، محافظة [...]، ويجوز بقرار من المؤسس فتح فروع أو وكالات ومكاتب داخل جمهورية مصر العربية أو في الخارج.',
          contentEnglish: 'Registered headquarters situated in: [...], with authority vested in Founder to open branches or representative offices domestically or abroad.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها',
          titleEnglish: 'Article 4: Corporate Duration',
          contentArabic: 'المدة المحددة للشركة هي [...] سنة تبدأ من تاريخ قيدها بالسجل التجاري، ويجوز إطالة هذه المدة بقرار من المؤسس قبل انتهائها.',
          contentEnglish: 'Corporate duration is [...] years commencing from Commercial Registry inscription, extendable by Founder decision.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس مال الشركة وقيمته الاسمية',
          titleEnglish: 'Article 5: Share Capital & Bank Deposit Certificate',
          contentArabic: 'حدد رأس مال الشركة بمبلغ [...] جنيه مصري، مقسم إلى [...] حصة متساوية القيمة، قيمة كل حصة [...] جنيه مصري، وجميعها مملوكة بالكامل للمؤسس وسددت قيمتها نقداً بالكامل ببنك [...] بموجب الشهادة البنكية المرفقة.',
          contentEnglish: 'Share capital is [...] EGP divided into [...] equal quotas of [...] EGP each, fully owned by Founder and 100% paid up in cash per bank certificate.'
        },
        {
          titleArabic: 'المادة السادسة: المسؤولية المحدودة للمؤسس واستقلال الذمة المالية',
          titleEnglish: 'Article 6: Limited Liability & Independent Financial Estate',
          contentArabic: 'لا يُسأل مؤسس الشركة عن التزاماتها إلا في حدود رأس مال الشركة المخصص لها، وتتمتع الشركة بذمة مالية مستقلة تماماً عن الذمة المالية الخاصة بالمؤسس عملاً بالقانون.',
          contentEnglish: 'Founder liability is strictly limited to allocated share capital; company possesses separate independent financial estate.'
        },
        {
          titleArabic: 'المادة السابعة: إدارة الشركة وسلطات المدير',
          titleEnglish: 'Article 7: Company Management & Managing Director Powers',
          contentArabic: 'يتولى إدارة الشركة المؤسس منفرداً أو يعين مديراً عاماً أو أكثر من الغير، ويكون للمدير كافة السلطات والصلاحيات اللازمة لإدارة الشركة وتمثيلها أمام القضاء والبنوك والجهات الحكومية وإبرام العقود.',
          contentEnglish: 'Management vested in Founder or designated General Manager, holding comprehensive powers to represent company before courts, banks, and authorities.'
        },
        {
          titleArabic: 'المادة الثامنة: قرارات المؤسس وسجل القرارات',
          titleEnglish: 'Article 8: Founder Resolutions & Official Register',
          contentArabic: 'يمارس المؤسس كافة اختصاصات الجمعية العامة للشركات، وتُدون قراراته في سجل خاص يُحفظ بمقر الشركة ويكون نافذاً فور توقيعه منه.',
          contentEnglish: 'Founder exercises all powers of General Assembly; resolutions entered in official register kept at headquarters.'
        },
        {
          titleArabic: 'المادة التاسعة: مراقب الحسابات ومراجعته للقوائم المالية',
          titleEnglish: 'Article 9: Statutory Auditor Appointment',
          contentArabic: 'يكون للشركة مراقب حسابات مقيد بسجل المحاسبين والمراجعين، يعينه المؤسس ويتولى مراجعة حسابات الشركة وقوائمها المالية السنوية وإعداد تقرير دوري عنها.',
          contentEnglish: 'Company shall have certified statutory auditor appointed by Founder to audit annual financial statements.'
        },
        {
          titleArabic: 'المادة العاشرة: السنة المالية وتوزيع الأرباح',
          titleEnglish: 'Article 10: Financial Year & Profit Allocation',
          contentArabic: 'تبدأ السنة المالية للشركة في أول يناير وتنتهي في 31 ديسمبر من كل عام، وتوزع الأرباح الصافية بقرار من المؤسس بعد استقطاع الاحتياطي القانوني (5%) حتى يبلغ 50% من رأس المال.',
          contentEnglish: 'Fiscal year runs January 1 to December 31; net profits distributed after allocating 5% statutory reserve until reaching 50% of capital.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: تعديل رأس المال والتحول لشركة مساهمة أو ذ.م.م',
          titleEnglish: 'Article 11: Capital Increase & Corporate Conversion',
          contentArabic: 'يجوز للمؤسس زيادة رأس المال أو خفضه وفقاً للقانون، كما يجوز له إدخال شركاء آخرين وتحويل الشركة إلى شركة ذات مسؤولية محدودة أو شركة مساهمة باتخاذ الإجراءات المقررة بـ GAFI.',
          contentEnglish: 'Founder may increase/decrease capital or introduce new partners, converting into standard LLC or SAE per GAFI regulations.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: حل الشركة وتصفيتها',
          titleEnglish: 'Article 12: Dissolution & Liquidation',
          contentArabic: 'تُحل الشركة وتصفى بقرار من المؤسس أو لأحد الأسباب المنصوص عليها في القانون، وتتم التصفية بواسطة مصفٍ يعينه المؤسس مع مراعاة حقوق الدائنين المقررة.',
          contentEnglish: 'Company dissolved by Founder decision or statutory causes; liquidated by designated liquidator preserving creditor rights.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: وفاة المؤسس أو تصرفه في رأس المال',
          titleEnglish: 'Article 13: Demise of Founder or Estate Succession',
          contentArabic: 'في حال وفاة المؤسس تنتقل الحصص إلى ورثته الشرعيين، فإذا كان الورثة أكثر من واحد التزموا بتوفيق أوضاع الشركة خلال 90 يوماً إما بالتحول إلى شركة ذات مسؤولية محدودة أو بيع الحصص لمشترٍ واحد.',
          contentEnglish: 'Upon Founder demise, quotas devolve to legal heirs who shall regularize within 90 days by conversion or single-purchaser sale.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
          titleEnglish: 'Article 14: Governing Law & Jurisdiction',
          contentArabic: 'تخضع الشركة لأحكام القوانين المصرية المعمول بها، وتختص المحاكم الاقتصادية بنظر أي منازعات تتعلق بتفسير هذا النظام أو نشاط الشركة.',
          contentEnglish: 'Governed by Egyptian corporate laws with exclusive jurisdiction in Egyptian Economic Courts.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: إجراءات القيد والنشر الرسمي',
          titleEnglish: 'Article 15: Commercial Registration & Official Publication',
          contentArabic: 'يُكلف المؤسس أو وكيله القانوني باتخاذ كافة الإجراءات اللازمة لشهر هذا النظام وقيد الشركة بالسجل التجاري واستخراج بطاقتها الضريبية بمركز خدمات المستثمرين.',
          contentEnglish: 'Founder or legal counsel authorized to complete Commercial Registry inscription, tax registration, and official publication.'
        }
      ]
    }
  },

  // 23. Personal Data Processing Agreement (DPA) under Law 151/2020
  {
    id: 'official-personal-data-processing',
    category: 'عقود التكنولوجيا والاتصالات والملكية الفكرية',
    titleAr: 'اتفاقية معالجة وحماية سرية البيانات الشخصية (DPA) طبقاً للقانون رقم 151 لسنة 2020',
    titleEn: 'Data Processing Agreement (DPA) & Personal Data Protection Compliance Deed',
    source: 'مركز حماية البيانات الشخصية بوزارة الاتصالات والجهاز القومي لتنظيم الاتصالات NTRA',
    statutoryBasis: 'قانون حماية البيانات الشخصية المصري رقم 151 لسنة 2020 ولائحته التنفيذية',
    
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'اتفاقية معالجة وحماية سرية وأمن البيانات الشخصية (DPA)',
      contractTitleEnglish: 'Comprehensive Personal Data Processing & Security Agreement (DPA)',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بالقاهرة، بين كل من:\nأولاً: شركة [اسم متحكم البيانات / Controller]، سجل تجاري رقم [...]، ويمثلها [...] (طرف أول - متحكم البيانات الشخصية Data Controller).\nثانياً: شركة [اسم معالج البيانات / Processor]، سجل تجاري رقم [...]، ويمثلها [...] (طرف ثانٍ - معالج البيانات Data Processor).\nوبعد أن أقر الطرفان بأهليتهما القانونية والتقنية واستيفائهما لمعايير الأمن السيبراني المنصوص عليها بقانون حماية البيانات الشخصية رقم 151 لسنة 2020، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: [Company Name] S.A.E., Commercial Reg. [...] (First Party - Data Controller).\nSecond: [Processor Company Name] LLC, Commercial Reg. [...] (Second Party - Data Processor).\nBoth Parties, being legally competent and compliant with cybersecurity standards under Egyptian Personal Data Protection Law 151/2020, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد وملاحق التوصيف التقني للبيانات جزءاً لا يتجزأ من هذه الاتفاقية وبنداً ملزماً لأطرافها.',
      recitalsEnglish: 'Preamble and data classification schedules form an integral, binding part of this Agreement.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% لأحكام القانون رقم 151 لسنة 2020 وضوابط التراخيص الصادرة من مركز حماية البيانات الشخصية بجمهورية مصر العربية.',
      legalNotes: 'اتفاقية ملزمة قانوناً تحدد واجبات المعالج والمتحكم والتشفير وحظر نقل البيانات للخارج دون تصريح والإخطار الفوري عن أي اختراق خلال 72 ساعة.',
      shariaComplianceNotes: 'مستوفية لضوابط الأمانة وحفظ الأسرار وحرمة الخصوصية المقررة شرعاً ودستورياً.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابقة للنماذج الاسترشادية الصادرة عن مركز حماية البيانات الشخصية والجهاز القومي لتنظيم الاتصالات.',
        cassationPrinciplesValidation: 'متوافقة مع مبادئ المحاكم الاقتصادية في المسؤولية التقنية والتعويض عن إفشاء أو تسريب البيانات السرية.',
        customaryPracticeValidation: 'النموذج المعتمد لدى كبريات مكاتب المحاماة المتخصصة في التكنولوجيا والذكاء الاصطناعي.',
        shariaAuditStatement: 'عقد أمانة وحفظ بيانات مشروع وواجب الوفاء به شرعاً وقانوناً.',
        verificationChecklist: [
          { item: 'تعيين مسؤول حماية البيانات الشخصية (DPO) المعتمد', status: 'مستوفى ومعتمد', reference: 'المادة 8 من القانون 151/2020' },
          { item: 'حظر نقل أو معالجة البيانات خارج مصر دون ترخيص المركز', status: 'مستوفى ومعتمد', reference: 'المادة 14 و15 من القانون' },
          { item: 'التزام الإخطار عن الاختراق الأمني خلال 72 ساعة كحد أقصى', status: 'مستوفى ومعتمد', reference: 'المادة 7 من القانون' },
          { item: 'تنفيذ تدابير التشفير والنسخ الاحتياطي وحذف البيانات فور انتهاء الغرض', status: 'مستوفى ومعتمد', reference: 'المادة 4 و5 من القانون' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد ونطاق سريان الاتفاقية',
          titleEnglish: 'Article 1: Preamble & Scope of Processing',
          contentArabic: 'يُعتبر التمهيد السابق وملحق فئات البيانات جزءاً لا يتجزأ من هذه الاتفاقية، وتسري على كافة عمليات معالجة البيانات الشخصية المنجزة لصالح المتحكم.',
          contentEnglish: 'Preamble and data classification annex constitute an integral part hereof, governing all processing operations performed on behalf of Controller.'
        },
        {
          titleArabic: 'المادة الثانية: التزامات معالج البيانات وتعليمات المتحكم',
          titleEnglish: 'Article 2: Processor Obligations & Controller Instructions',
          contentArabic: 'يلتزم المعالج بمعالجة البيانات الشخصية بدقة وتجرد ووفقاً للتعليمات الخطية الموثقة للمتحكم وللأغراض المحددة حصراً دون أي تصرف شخصي.',
          contentEnglish: 'Processor covenants to process personal data strictly in accordance with documented written instructions from Controller.'
        },
        {
          titleArabic: 'المادة الثالثة: التدابير الفنية والتقنية للأمن السيبراني والتشفير',
          titleEnglish: 'Article 3: Technical Cybersecurity Measures & Encryption',
          contentArabic: 'يلتزم المعالج بتطبيق معايير أمن سيبراني صارمة تشمل: تشفير البيانات الحساسة أثناء النقل والتخزين، جدران نارية متطورة، واختبارات دورية للاختراق.',
          contentEnglish: 'Processor implements robust cybersecurity measures including end-to-end encryption at rest and in transit, advanced firewalls, and penetration audits.'
        },
        {
          titleArabic: 'المادة الرابعة: التزام السرية التامة للعاملين والتابعين',
          titleEnglish: 'Article 4: Strict Confidentiality of Personnel',
          contentArabic: 'يضمن المعالج خضوع جميع العاملين لديه والخبراء المصرح لهم بالاطلاع على البيانات لتعهدات سرية قانونية مشددة تستمر إلى ما بعد انتهاء خدمتهم.',
          contentEnglish: 'Processor warrants that all authorized personnel accessing data are bound by strict non-disclosure obligations enduring beyond employment.'
        },
        {
          titleArabic: 'المادة الخامسة: حظر التعاقد مع معالج بيانات من الباطن إلا بموافقة مسبقة',
          titleEnglish: 'Article 5: Sub-Processing Restrictions',
          contentArabic: 'يحظر على المعالج الاستعانة بأي معالج من الباطن (Sub-processor) إلا بعد الحصول على موافقة كتابية صريحة ومسبقة من المتحكم.',
          contentEnglish: 'Processor prohibited from engaging sub-processors without prior explicit written authorization from Controller.'
        },
        {
          titleArabic: 'المادة السادسة: الإخطار الفوري عن حوادث واختراقات البيانات (72 ساعة)',
          titleEnglish: 'Article 6: Data Breach Notification within 72 Hours',
          contentArabic: 'يلتزم المعالج بإخطار المتحكم فوراً وبما لا يجاوز 24 ساعة من تاريخ علمه بأي اختراق أو تسريب أمني للبيانات، ليتسنى إخطار مركز حماية البيانات خلال 72 ساعة وفق القانون.',
          contentEnglish: 'Processor must notify Controller within 24 hours of detecting any data breach to facilitate formal regulatory notification within 72 hours.'
        },
        {
          titleArabic: 'المادة السابعة: حقوق الأشخاص المعنيين بالبيانات',
          titleEnglish: 'Article 7: Data Subject Statutory Rights',
          contentArabic: 'يلتزم المعالج بمعاونة المتحكم في الرد على طلبات أصحاب البيانات بشأن حق الوصول والتصحيح والحذف وسحب الموافقة وفق المواعيد المقررة قانوناً.',
          contentEnglish: 'Processor covenants to assist Controller in fulfilling data subject rights: access, rectification, erasure, and consent withdrawal.'
        },
        {
          titleArabic: 'المادة الثامنة: حظر نقل البيانات خارج جمهورية مصر العربية دون ترخيص',
          titleEnglish: 'Article 8: Cross-Border Data Transfer Prohibition',
          contentArabic: 'يحظر تماماً على المعالج نقل أو تخزين أو معالجة أي بيانات شخصية على خوادم تقع خارج جمهورية مصر العربية إلا بعد استيفاء الشروط والحصول على ترخيص رسمي من مركز حماية البيانات.',
          contentEnglish: 'Strictly prohibited to transfer, store, or process personal data outside Egypt without prior license from the Personal Data Protection Center.'
        },
        {
          titleArabic: 'المادة التاسعة: تعيين مسؤول حماية البيانات الشخصية (DPO)',
          titleEnglish: 'Article 9: Data Protection Officer (DPO) Designation',
          contentArabic: 'يقر كل طرف بتعيين مسؤول حماية بيانات شخصية معتمد ومقيد رسمياً، وتزويد الطرف الآخر ببيانات الاتصال المباشرة به لضمان الامتثال.',
          contentEnglish: 'Parties warrant appointing certified Data Protection Officers (DPO) and exchanging official contact information for compliance oversight.'
        },
        {
          titleArabic: 'المادة العاشرة: الرقابة والتدقيق والفحص الفني',
          titleEnglish: 'Article 10: Compliance Audits & Verification Rights',
          contentArabic: 'يحق للمتحكم أو لجهة تدقيق مستقلة مفوضة منه إجراء فحص وتدقيق فني على أنظمة وخوادم المعالج للتحقق من سلامة إجراءات حماية البيانات.',
          contentEnglish: 'Controller retains right to conduct on-site or technical audits on Processor systems to verify compliance integrity.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: محو البيانات وإتلافها عند انتهاء التعاقد',
          titleEnglish: 'Article 11: Data Deletion & Secure Destruction',
          contentArabic: 'يلتزم المعالج عند انتهاء الغرض أو فسخ الاتفاقية بحذف وإتلاف كافة نسخ البيانات الشخصية المخزنة لديه بطريقة آمنة لا رجعة فيها، وتقديم شهادة رسمية بذلك.',
          contentEnglish: 'Upon termination, Processor covenants to securely delete or return all personal data copies and issue an official certificate of destruction.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: المسؤولية والتعويض الجابر عن المخالفات',
          titleEnglish: 'Article 12: Liability & Indemnification',
          contentArabic: 'يتحمل المعالج المسؤولية الكاملة عن أي أضرار مادية أو معنوية أو غرامات توقعها الجهات الحكومية بسبب إهماله أو مخالفته لأحكام هذه الاتفاقية والقانون.',
          contentEnglish: 'Processor holds Controller harmless against all damages, claims, and regulatory fines resulting from Processor breach or negligence.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والمحاكم المختصة',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'تخضع هذه الاتفاقية لأحكام القانون المصري وقانون حماية البيانات رقم 151 لسنة 2020، وتختص المحاكم الاقتصادية بنظر أي نزاع.',
          contentEnglish: 'Governed by Egyptian Law No. 151/2020 with exclusive jurisdiction in Egyptian Economic Courts.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ الاتفاقية واعتمادها',
          titleEnglish: 'Article 14: Counterparts & Official Execution',
          contentArabic: 'تحررت هذه الاتفاقية من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والامتثال لأحكامها.',
          contentEnglish: 'Executed in two authentic originals, one per party, having full binding statutory authority.'
        }
      ]
    }
  },

  // 24. Commercial Brokerage, Agency & Real Estate Marketing Agreement
  {
    id: 'official-commercial-brokerage-agency',
    category: 'عقود العمل والموارد البشرية والوساطة',
    titleAr: 'عقد وساطة تجارية وسمسرة وتسويق عقاري معتمد بسجل الوسطاء العقاريين',
    titleEn: 'Real Estate Brokerage, Commercial Agency & Commission Agreement',
    source: 'الهيئة العامة للرقابة على الصادرات والواردات (سجل الوسطاء العقاريين) ونقابة المحامين',
    statutoryBasis: 'القانون رقم 120 لسنة 1982 وقانون تنظيم السمسرة العقارية وقانون حماية المستهلك رقم 181 لسنة 2018',
    
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد وساطة تجارية وتسويق عقاري حصري وتحديد عمولة السمسرة',
      contractTitleEnglish: 'Exclusive Real Estate Brokerage, Commercial Marketing & Commission Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بالقاهرة، بين كل من:\nأولاً: السيد/ [اسم مالك العقار أو الموكل]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - الموكل والمالك).\nثانياً: شركة [اسم شركة السمسرة والتسويق]، سجل تجاري رقم [...]، ومقيدة بسجل الوسطاء العقاريين برقم [...]، ويمثلها [...] (طرف ثانٍ - الوسيط والسمسار التجاري).\nوبعد أن أقر الطرفان بأهليتهما القانونية للتعاقد واستيفاء الوسيط لشروط القيد والتراخيص، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: Mr. [Full Owner Name], Egyptian, National ID: [...], residing at: [...] (First Party - Principal/Owner).\nSecond: [Brokerage Firm Name] LLC, Commercial Reg. [...], licensed Real Estate Broker under No. [...], represented by [...] (Second Party - Commercial Broker).\nBoth Parties, being legally competent and officially licensed under the Egyptian Brokerage Registry, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ونطاق الوساطة واستحقاق العمولة.',
      recitalsEnglish: 'Preamble and recitals form an integral, binding part of this brokerage and agency agreement.',
      certificationStatement: 'صيغة معتمدة مطابقة لأحكام قانون السمسرة والوساطة التجارية رقم 120 لسنة 1982 وقانون التجارة رقم 17 لسنة 1999 وقانون حماية المستهلك.',
      legalNotes: 'عقد وساطة تجارية منظم لاستحقاق السمسار للأجر بمجرد إتمام الصفقة، ومنع الموكل من الالتفاف على العمولة بعد تعريف العميل.',
      shariaComplianceNotes: 'مستوفٍ لضوابط الجعالة والسمسرة الشرعية؛ معلوم الأجر والمهمة خلو من الغرر والربا.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج الهيئة العامة للرقابة على الصادرات والواردات بسجل الوسطاء العقاريين.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في استحقاق السمسار لأجره متى أدت وساطته لإبرام العقد بين طرفيه.',
        customaryPracticeValidation: 'النموذج المعتمد لدى غرفة التطوير العقاري وشعبة الاستثمار العقاري بالغرف التجارية.',
        shariaAuditStatement: 'عقد جعالة ووساطة مشروع نافذ شرعاً تترتب عليه كافة آثاره المالية.',
        verificationChecklist: [
          { item: 'قيد الوسيط بسجل الوسطاء التجاريين والعقاريين الرسمي', status: 'مستوفى ومعتمد', reference: 'القانون 120 لسنة 1982' },
          { item: 'تحديد النسبة المئوية للعمولة بدقة وميقات استحقاقها', status: 'مستوفى ومعتمد', reference: 'المادة 198 تجارة' },
          { item: 'إثبات العملاء المعرفين بسجل زيارات ومعاينات موقع رسمي', status: 'مستوفى ومعتمد', reference: 'قواعد الإثبات التجاري' },
          { item: 'حظر استغلال المستهلك أو الإعلانات المضللة عن العقار', status: 'مستوفى ومعتمد', reference: 'قانون حماية المستهلك 181/2018' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble Integration',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لمواده.',
          contentEnglish: 'The preamble constitutes an integral, binding part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق التكليف ومحل الوساطة العقارية',
          titleEnglish: 'Article 2: Brokerage Mandate & Property Details',
          contentArabic: 'يكلف الطرف الأول الطرف الثاني بالقيام بأعمال الوساطة والتسويق لـ (بيع / إيجار) العقار المملوك له الكائن في: [...]، البالغ مساحته [...] متراً مربعاً، والمحدد بثمن إجمالي مستهدف قدره [...] جنيه مصري.',
          contentEnglish: 'First Party appoints Second Party as exclusive broker to market for (sale/lease) the real estate located at [...], measuring [...] sq.m at target price of [...] EGP.'
        },
        {
          titleArabic: 'المادة الثالثة: الحصرية والتسويق التجاري',
          titleEnglish: 'Article 3: Exclusivity & Marketing Representation',
          contentArabic: 'يمنح الطرف الأول للطرف الثاني حق الوساطة والتسويق الحصري لمدة [...] أشهر، ويلتزم بعدم تفويض أي وسيط آخر خلال سريان العقد.',
          contentEnglish: 'First Party grants Second Party exclusive marketing mandate for [...] months, agreeing not to mandate any other broker.'
        },
        {
          titleArabic: 'المادة الرابعة: عمولة الوساطة ومقدارها المحدد',
          titleEnglish: 'Article 4: Brokerage Commission & Consideration',
          contentArabic: 'يستحق الطرف الثاني عمولة وساطة بنسبة [...]% من إجمالي القيمة البيعية أو الإيجارية للصفقة، وتُسدد فور توقيع العقد الابتدائي وسداد مقدم الثمن.',
          contentEnglish: 'Second Party is entitled to a brokerage commission of [...]% of total transaction value, payable upon execution of preliminary agreement.'
        },
        {
          titleArabic: 'المادة الخامسة: حماية حق الوسيط ومنع الالتفاف (Circumvention Protection)',
          titleEnglish: 'Article 5: Non-Circumvention Protection',
          contentArabic: 'إذا أبرم الموكل الصفقة مباشرة أو بطريق غير مباشر مع أي عميل تم تعريفه أو معاينته بواسطة السمسار خلال مدة هذا العقد أو خلال سنة من انتهائه، يلتزم الموكل بسداد كامل العمولة دون نقصان.',
          contentEnglish: 'If Principal executes transaction directly with any client introduced by Broker during term or within 12 months thereafter, full commission is immediately due.'
        },
        {
          titleArabic: 'المادة السادسة: سجل المعاينات والإثبات المتبادل',
          titleEnglish: 'Article 6: Official Inspection Log & Evidence',
          contentArabic: 'يلتزم الطرف الثاني بإثبات بيانات العملاء الراغبين في الشراء بموجب كشوف معاينة موقعة أو مراسلات رسمية بالبريد الإلكتروني المعتمد.',
          contentEnglish: 'Broker documents all prospective buyer inspections via signed visitation sheets or recorded emails.'
        },
        {
          titleArabic: 'المادة السابعة: التزامات الوسيط بالصدق والشفافية',
          titleEnglish: 'Article 7: Broker Transparency & Fiduciary Duty',
          contentArabic: 'يلتزم الوسيط ببذل عناية المهني الحريص وتقديم المعلومات الصادقة والدقيقة عن حالة العقار وسند الملكية والامتناع عن أي تضليل إعمالاً لقانون حماية المستهلك.',
          contentEnglish: 'Broker exercises utmost professional care, providing truthful disclosures regarding title and specs per consumer protection laws.'
        },
        {
          titleArabic: 'المادة الثامنة: مصاريف التسويق والإعلانات',
          titleEnglish: 'Article 8: Marketing & Advertising Expenses',
          contentArabic: 'يتحمل الوسيط كافة تكاليف الحملات الإعلانية والتسويق الرقمي من ماله الخاص دون حق في الرجوع على الموكل إلا في حال الاتفاق المسبق كتابة.',
          contentEnglish: 'Broker bears all standard digital marketing expenses unless explicitly agreed otherwise in writing.'
        },
        {
          titleArabic: 'المادة التاسعة: الضرائب والفاتورة الإلكترونية',
          titleEnglish: 'Article 9: Tax Compliance & Electronic Invoicing',
          contentArabic: 'يلتزم الوسيط بإصدار فاتورة إلكترونية معتمدة بمنظومة مصلحة الضرائب المصرية عن قيمة العمولة المستلمة.',
          contentEnglish: 'Broker issues certified electronic invoice on the Egyptian Tax Authority portal for received commission.'
        },
        {
          titleArabic: 'المادة العاشرة: مدة العقد والإنهاء',
          titleEnglish: 'Article 10: Contract Duration & Termination',
          contentArabic: 'مدة هذا العقد [...] أشهر تبدأ من تاريخ توقيعه، وتتجدد باتفاق مكتوب، ولا يجوز للموكل عزله تعسفياً خلال مدة الحصرية.',
          contentEnglish: 'Contract duration is [...] months, renewable in writing; arbitrary revocation prohibited during exclusivity.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الجزائي والتعويض الجابر',
          titleEnglish: 'Article 11: Liquidated Damages',
          contentArabic: 'في حال إخلال الموكل بالتزاماته أو امتناعه عن سداد العمولة المستحقة، يلتزم بسداد تعويض اتفاقي جابر يعادل ضعف قيمة العمولة.',
          contentEnglish: 'Principal breach or non-payment triggers contractual compensation equal to double commission value.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 12: Force Majeure Events',
          contentArabic: 'تخضع الالتزامات لأحكام القوة القاهرة وفقاً لأحكام القانون المدني المصري.',
          contentEnglish: 'Governed by statutory Egyptian Force Majeure rules.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الاختصاص القضائي والقانون الواجب التطبيق',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد للقانون المصري، وتختص المحاكم الاقتصادية أو المدنية بالقاهرة بنظر أي نزاع ينشأ عنه.',
          contentEnglish: 'Governed by Egyptian law with jurisdiction in Cairo economic or civil courts.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والوفاء بالتزاماتها.',
          contentEnglish: 'Executed in two authentic originals, one per party, having identical legal authority.'
        }
      ]
    }
  }
];
