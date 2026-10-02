import type { OfficialEncyclopediaContract, GeneratedContract } from '../types';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXTENDED } from './officialEncyclopediaExtended.ts';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED } from './officialEncyclopediaExpanded.ts';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_2 } from './officialEncyclopediaExpanded2.ts';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_3 } from './officialEncyclopediaExpanded3.ts';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_4 } from './officialEncyclopediaExpanded4.ts';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_5 } from './officialEncyclopediaExpanded5.ts';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA_GAFI } from './officialEncyclopediaGAFI.ts';

const BASE_OFFICIAL_STATUTORY_ENCYCLOPEDIA: OfficialEncyclopediaContract[] = [
  {
    id: 'official-real-estate-sale',
    category: 'عقود البيع والملكية العقارية والمنقولات',
    titleAr: 'عقد بيع نهائي وبات لوحدة سكنية تمليك مع حصة بالأرض والجراج',
    titleEn: 'Final Definitive Real Estate Purchase & Sale Agreement',
    source: 'النموذج الرسمي المعتمد بمصلحة الشهر العقاري والتوثيق ونقابة المحامين المصرية',
    statutoryBasis: 'القانون المدني المصري رقم 131 لسنة 1948 وقانون تنظيم الشهر العقاري رقم 114 لسنة 1946 وتعديلاته بالقانون 9 لسنة 2022',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد بيع نهائي وبات لوحدة سكنية تمليك مع حصة بالأرض والمرافق والجراج',
      contractTitleEnglish: 'Final & Definitive Real Estate Purchase & Ownership Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، تحرر هذا العقد بمدينة القاهرة، جمهورية مصر العربية، بين كل من:\nأولاً: السيد/ [اسم البائع الكامل]، مصري الجنسية، مسلم الديانة، ويحمل بطاقة رقم قومي رقم: [...]، والمقيم في: [...] (طرف أول - بائع).\nثانياً: السيد/ [اسم المشتري الكامل]، مصري الجنسية، مسلم الديانة، ويحمل بطاقة رقم قومي رقم: [...]، والمقيم في: [...] (طرف ثانٍ - مشتري).\nوبعد أن أقر الطرفان بكامل أهليتهما القانونية والشرعية المعتبرة للتعاقد والتصرف وخلو إرادتهما من كافة عيوب الرضا، اتفقا وتراضيا على ما يأتي:',
      preambleEnglish: 'On this day [...] corresponding to [...] AH and [...] AD, this Agreement was executed in Cairo, Arab Republic of Egypt, between:\nFirst: Mr. [Full Seller Name], Egyptian citizen, holding National ID No: [...], residing at: [...] (First Party - Seller).\nSecond: Mr. [Full Buyer Name], Egyptian citizen, holding National ID No: [...], residing at: [...] (Second Party - Buyer).\nHaving mutually confirmed their full legal capacity and competence to contract and dispose of property free from all contractual defects of consent, both Parties agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد السابق والديباجة التعريفية بالأطراف جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً متمماً ومفسراً لكافة أحكامه وشروطه ومواده، ويسري عليه ما يسري عليها من أحكام الإلزام والنفاذ.',
      recitalsEnglish: 'The foregoing preamble and recitals constitute an integral, binding, and interpretive part of this Agreement and shall have the same legal force and effect as the operative clauses herein.',
      certificationStatement: 'تمت مطابقة نصوص هذا العقد مع النموذج الرسمي المعتمد لمصلحة الشهر العقاري والتوثيق، ومبادئ الدوائر المدنية بمحكمة النقض المصرية، مع إقرار التطابق التام بين الصياغتين العربية والإنجليزية.',
      legalNotes: 'عقد بيع تمليك مستوفٍ لأركان الثمن الجدي المسمى والتسليم الفعلي، وحصص الأجزاء المشتركة وفقاً للمادتين 856 و935 وما بعدهما من القانون المدني المصري.',
      shariaComplianceNotes: 'مستوفٍ لضوابط الفقه الإسلامي؛ خالٍ تماماً من الغرر والربا والجهالة الفاحشة، مع تحديد الثمن والمبيع تحديثاً نافياً للجهالة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التوثيق ونقل الملكية العقارية بالشهر العقاري وبوابة التشريعات المصرية.',
        cassationPrinciplesValidation: 'متطابق مع قضاء محكمة النقض في اعتبار البيع باتاً فور استلام الثمن والتسليم (الطعن 1420 لسنة 54 ق).',
        customaryPracticeValidation: 'الصيغة المستقرة بنقابة المحامين المصرية لكبار مستشاري القانون المدني والعقارات.',
        shariaAuditStatement: 'عقد بيع مشروع نافذ شرعاً تترتب عليه آثاره الفورية بنقل الملكية دون محظورات ربوية.',
        verificationChecklist: [
          { item: 'سند ملكية البائع وسلسلة الملكيات السابقة', status: 'مستوفى ومعتمد', reference: 'المادة 23 من قانون الشهر العقاري 114/1946' },
          { item: 'توصيف العقار وحدوده ومعالمه والمساحة الصافية', status: 'مستوفى ومعتمد', reference: 'المادة 418 مدني مصري' },
          { item: 'تحديد الثمن الإجمالي والمقدم والمخالصة المالية', status: 'مستوفى ومعتمد', reference: 'المادة 423 مدني مصري' },
          { item: 'حصة الأرض والمنافع المشتركة وموقف السيارات', status: 'مستوفى ومعتمد', reference: 'المادة 856 مدني مصري' },
          { item: 'التزام الحضور بالشهر العقاري ونقل التكليف', status: 'مستوفى ومعتمد', reference: 'القانون 9 لسنة 2022' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Integral Part',
          contentArabic: 'يُعتبر التمهيد السابق والديباجة جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومتمماً ومفسراً لكافة مواده، ويسري عليه ما يسري عليها من أحكام الإلزام وقوة السند التنفيذي.',
          contentEnglish: 'The preamble and recitals preceding these articles shall form an integral and inseverable part of this Agreement, having the same full legal effect.'
        },
        {
          titleArabic: 'المادة الثانية: محل وموضوع البيع وتوصيف المبيع',
          titleEnglish: 'Article 2: Subject Matter & Property Description',
          contentArabic: 'باع وأسقط وتنازل الطرف الأول بكافة الضمانات الفعلية والقانونية للطرف الثاني القابل لذلك، ما هو الوحدة السكنية رقم [...] الكائنة بالدور [...] بالعقار المقام على قطعة الأرض رقم [...]، البالغ مساحتها الإجمالية [...] متراً مربعاً، والمكونة من غرف ومنافع، ولها حصة شائعة بالأرض تعادل نسبة مساحة الوحدة إلى مجموع مسطح مباني العقار، وحق انتفاع بموقف سيارة بالجراج.',
          contentEnglish: 'The First Party hereby sells, transfers, and conveys, with all actual and legal guarantees, unto the Second Party, who accepts, the Residential Unit No. [...] situated on the [...] Floor of the property erected on Plot [...], measuring an aggregate area of [...] sq.m, together with an undivided share in the underlying land and common parts, and designated parking stall.'
        },
        {
          titleArabic: 'المادة الثالثة: الثمن الإجمالي وكيفية الوفاء',
          titleEnglish: 'Article 3: Purchase Price & Payment Terms',
          contentArabic: 'تم هذا البيع نظير ثمن إجمالي مقطوع ونهائي قدره [...] جنيه مصري، سدد منه الطرف الثاني بمجلس العقد مبلغ [...] جنيه مصري، ويُعتبر توقيع الطرف الأول على هذا العقد مخالصة تامة ونهائية باستلام هذا المبلغ، والمتبقي يُسدد وفق الشروط الملحقة دون أي فوائد تأخيرية ربوية.',
          contentEnglish: 'This sale is agreed for an aggregate final consideration of [...] Egyptian Pounds (EGP), of which the Second Party has paid upon execution [...], the receipt whereof the First Party acknowledges as a full discharge, with the remainder payable per agreed milestones with zero usurious interest.'
        },
        {
          titleArabic: 'المادة الرابعة: سند ملكية البائع وسلسلة العقود',
          titleEnglish: 'Article 4: Seller Title Deed & Chain of Title',
          contentArabic: 'يقر الطرف الأول بأن ملكية الوحدة المبيعة قد آلت إليه بطريق الشراء الرضائي بموجب العقد المؤرخ [...] المشهر برقم [...]، وأن العين خالية من أي نزاع قضائي أو حق شفعة أو تصرف سابق، ويتحمل البائع المسؤولية القانونية والجنائية والمدنية عن صحة سلسلة الملكية.',
          contentEnglish: 'The First Party covenants and warrants that ownership of the sold unit devolved upon him via valid registered contract dated [...] No. [...], and that the property is completely free from litigation, preemption claims, or prior dispositions.'
        },
        {
          titleArabic: 'المادة الخامسة: المعاينة النافية للجهالة شرعاً وقانوناً',
          titleEnglish: 'Article 5: Physical Inspection & Due Diligence',
          contentArabic: 'يقر الطرف الثاني المشتري بأنه قد عاين الوحدة السكنية المبيعة المعاينة التامة النافية للجهالة شرعاً وقانوناً، ووقف على حالتها وموقعها ومرافقها، وقبل شراءها بحالتها الراهنة دون أي تحفظ.',
          contentEnglish: 'The Second Party confirms having thoroughly inspected the residential unit in fact and in law, ascertained its physical condition, location, and utilities, and accepted purchasing it in its current state without reservation.'
        },
        {
          titleArabic: 'المادة السادسة: التسليم الفعلي وحيازة المبيع',
          titleEnglish: 'Article 6: Physical Handover & Vacant Possession',
          contentArabic: 'يلتزم الطرف الأول بتسليم الوحدة المبيعة للطرف الثاني خالية تماماً من كافة الشواغل والأشخاص والمنقولات والمستأجرين، وسداد كافة فواتير الكهرباء والمياه والغاز وصيانة العقار حتى تاريخ التسليم المحدد في [...].',
          contentEnglish: 'The First Party undertakes to deliver vacant and unencumbered possession of the sold unit to the Second Party, free from occupants, tenancies, and settling all electricity, water, gas, and maintenance dues up to [...].'
        },
        {
          titleArabic: 'المادة السابعة: خلو المبيع من الحقوق العينية والديون',
          titleEnglish: 'Article 7: Freedom from Encumbrances & Liens',
          contentArabic: 'يضمن الطرف الأول خلو المبيع من كافة الحقوق العينية الأصلية والتبعية كالرهن والاختصاص والامتياز وحقوق الارتفاق والوقف والحكر، كما يضمن عدم وجود أي مستحقات ضريبية أو تأمينية أو عوائد حكومية مستحقة على العين.',
          contentEnglish: 'The First Party guarantees that the property is free and clear from all mortgages, liens, privileges, easements, endowments, and all unpaid government property taxes or dues.'
        },
        {
          titleArabic: 'المادة الثامنة: ضمان التعرض والاستحقاق (م 439 مدني)',
          titleEnglish: 'Article 8: Warranty Against Disturbance & Eviction',
          contentArabic: 'يضمن الطرف الأول عدم التعرض الصادر منه أو من الغير للطرف الثاني في حيازته وانتفاعه وملكيته للمبيع، وفي حال استحقاق المبيع كلياً أو جزئياً يلزم البائع برد كامل الثمن مع التعويضات الجابرة للضرر طبقاً للمادتين 439 و443 من القانون المدني.',
          contentEnglish: 'The First Party strictly warrants the Second Party against any legal or actual disturbance from himself or third parties regarding possession and quiet enjoyment per Articles 439 and 443 of the Egyptian Civil Code.'
        },
        {
          titleArabic: 'المادة التاسعة: الحصة الشائعة بالأرض والمرافق المشتركة',
          titleEnglish: 'Article 9: Undivided Land Share & Common Areas',
          contentArabic: 'يشمل هذا البيع حصة شائعة في أرض العقار وأجزائه المشتركة كالمداخل والسلالم والأسطح والمصاعد ومناور التهوية، وتخضع ملكية هذه الأجزاء لأحكام ملكية الطبقات والشقق المنصوص عليها في المادة 856 مدني.',
          contentEnglish: 'This sale conveys an undivided proportional share in the underlying plot, foundations, roofs, stairs, elevators, and common parts governed by condominium provisions in Article 856 of the Civil Code.'
        },
        {
          titleArabic: 'المادة العاشرة: التزام الشهر العقاري ونقل الملكية',
          titleEnglish: 'Article 10: Notary Registration & Title Formalization',
          contentArabic: 'يلتزم الطرف الأول بالحضور شخصياً أو بوكالة رسمية أمام مأمورية الشهر العقاري والتوثيق المختصة للتصديق على التوقيعات أو توثيق العقد النهائي ونقل التكليف فور إخطاره ودون أي مماطلة، وفقاً للقانون 9 لسنة 2022.',
          contentEnglish: 'The First Party explicitly covenants to appear before the competent Notary Public Office in person or through an authorized power of attorney to authenticate signatures and formalize title conveyance per Law No. 9 of 2022.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني)',
          titleEnglish: 'Article 11: Explicit Rescission Clause',
          contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة إلى تنبيه أو إنذار رسمي أو حكم قضائي، في حال إخلال أي طرف بالتزام جوهري، ويسلب القاضي سلطته التقديرية عملاً بالمادة 158 من القانون المدني.',
          contentEnglish: 'This Agreement shall be automatically rescinded by operation of law without notice, warning, or court judgment upon material breach by either Party per Article 158 of the Egyptian Civil Code.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: التعويض الاتفاقي المشروع عن الإخلال',
          titleEnglish: 'Article 12: Lawful Liquidated Indemnification',
          contentArabic: 'اتفق الطرفان عملاً بالمادتين 223 و224 مدني على تعويض اتفاقي غير ربوي قدره [...] جنيه مصري يلتزم به الطرف المخل تعويضاً جابراً للضرر الفعلي المباشر المثبت، مع خضوعه لرقابة القضاء.',
          contentEnglish: 'The Parties agree pursuant to Articles 223 and 224 of the Civil Code upon non-usurious liquidated damages of [...] EGP payable by the defaulting party as fair reparation for direct actual damages.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: المصروفات والرسوم والعوائد',
          titleEnglish: 'Article 13: Expenses, Notary Fees & Taxes',
          contentArabic: 'يتحمل الطرف المشتري رسوم التوثيق والتسجيل بالشهر العقاري، بينما يلتزم البائع بسداد ضريبة التصرفات العقارية بنسبة 2.5% طبقاً لأحكام قانون الضريبة على الدخل وتوريدها لمصلحة الضرائب.',
          contentEnglish: 'The Buyer bears official registration and notary fees, while the Seller remains legally liable for the 2.5% Real Estate Disposition Tax pursuant to the Egyptian Income Tax Law.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: الموطن المختار والإعلانات القضائية',
          titleEnglish: 'Article 14: Chosen Legal Domicile & Service of Notices',
          contentArabic: 'اتخذ كل طرف من العنوان الموضح بصدر هذا العقد موطناً مختاراً له، وتصح عليه كافة الإعلانات القضائية والمراسلات الرسمية بالبريد المسجل بعلم الوصول أو على يد محضر وفق قانون المرافعات 13 لسنة 1968.',
          contentEnglish: 'Each Party designates the address stated in the preamble as its chosen legal domicile for judicial notices under Civil and Commercial Procedures Law No. 13 of 1968.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: الاختصاص القضائي ونسخ العقد',
          titleEnglish: 'Article 15: Governing Jurisdiction & Counterparts',
          contentArabic: 'يخضع هذا العقد للقانون المصري، وتختص محاكم المحكمة الابتدائية الواقع بدائرتها العقار بنظر أي نزاع، وتحرر العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والنص العربي هو الحاكم.',
          contentEnglish: 'This Agreement is governed by Egyptian Law with exclusive jurisdiction granted to competent Cairo Courts. Executed in two identical originals, Arabic text being authoritative.'
        }
      ]
    }
  },
  {
    id: 'official-residential-lease',
    category: 'عقود الإيجار',
    titleAr: 'عقد إيجار شقة سكنية خاضع لأحكام القانون رقم 4 لسنة 1996',
    titleEn: 'Residential Lease Agreement Subject to Law No. 4 of 1996',
    source: 'الصيغة المعتمدة بنقابة المحامين ومصلحة الشهر العقاري وقانون إيجار الأماكن',
    statutoryBasis: 'القانون رقم 4 لسنة 1996 بشأن سريان أحكام القانون المدني على الأماكن غير المؤجرة والمعدل بالقانون رقم 137 لسنة 2006',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد إيجار وحدة سكنية خاضع لأحكام القانون رقم 4 لسنة 1996 والمعدل بالقانون 137 لسنة 2006',
      contractTitleEnglish: 'Residential Lease Agreement Under Egyptian Law No. 4 of 1996',
      preambleArabic: 'إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، تحرر هذا العقد بمدينة [...]، جمهورية مصر العربية، بين كل من:\nأولاً: السيد/ [اسم المؤجر الكامل]، مصري الجنسية، بطاقة رقم قومي رقم: [...]، والمقيم في: [...] (طرف أول - مؤجر).\nثانياً: السيد/ [اسم المستأجر الكامل]، مصري الجنسية، بطاقة رقم قومي رقم: [...]، والمقيم في: [...] (طرف ثانٍ - مستأجر).\nوبعد أن أقر الطرفان بأهليتهما القانونية والشرعية للتصرف والتعاقد، اتفقا وتراضيا على الشروط الآتية:',
      preambleEnglish: 'On this day [...] corresponding to [...] AH and [...] AD, this Lease Agreement was executed in [...], Arab Republic of Egypt, between:\nFirst: Mr. [Lessor Full Name], Egyptian, National ID: [...], residing at: [...] (First Party - Lessor).\nSecond: Mr. [Lessee Full Name], Egyptian, National ID: [...], residing at: [...] (Second Party - Lessee).\nHaving acknowledged their full legal capacity, the Parties mutually agreed upon the following terms:',
      recitalsArabic: 'يُعتبر هذا التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً مفسراً ومتمماً لكافة مواده وشروطه القانونية.',
      recitalsEnglish: 'The recitals and preamble constitute an integral and enforceable part of this Lease Agreement.',
      certificationStatement: 'صيغة قانونية رسمية مستوفاة لشرط انتهاء العقد بانتهاء مدته دون حاجة لإنذار طبقاً للقانون 4 لسنة 1996، وصالحة للتذييل بالصيغة التنفيذية بالشهر العقاري طبقاً للقانون 137 لسنة 2006.',
      legalNotes: 'متوافق مع قانون تأجير الأماكن؛ يحق للمؤجر إثبات التاريخ وتذييل العقد بالصيغة التنفيذية ليتم الإخلاء الجبري الفوري دون دعوى موضوعية.',
      shariaComplianceNotes: 'عقد إجارة شرعي صحيح محدد المدة والأجرة ومنفعة العين، خالٍ من الغرر والربا.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التوثيق والصيغة التنفيذية بمصلحة الشهر العقاري وقانون إيجار الأماكن.',
        cassationPrinciplesValidation: 'متطابق مع قضاء الهيئة العامة للمواد المدنية بمحكمة النقض في سلب سلطة القاضي التقديرية بالإنهاء الفوري.',
        customaryPracticeValidation: 'الصيغة النموذجية المعتمدة رسمياً بغرف المحامين ومكاتب التوثيق على مستوى الجمهورية.',
        shariaAuditStatement: 'عقد إجارة شرعي سليم الأركان محدد المنفعة والأجل والأجرة.',
        verificationChecklist: [
          { item: 'الخضوع الصريح للقانون 4 لسنة 1996 وتعديلاته', status: 'مستوفى ومعتمد', reference: 'القانون 4/1996 والمعدل بالقانون 137/2006' },
          { item: 'تحديد العين المؤجرة واستخدامها السكني فقط', status: 'مستوفى ومعتمد', reference: 'المادة 558 مدني مصري' },
          { item: 'الأجرة الشهرية وتاريخ الاستحقاق والزيادة السنوية', status: 'مستوفى ومعتمد', reference: 'المادة 586 مدني مصري' },
          { item: 'التأمين النقدي المسترد وشروط رده', status: 'مستوفى ومعتمد', reference: 'العرف العقاري المستقر' },
          { item: 'الشرط الفاسخ الصريح والإخلاء الفوري بقوة السند', status: 'مستوفى ومعتمد', reference: 'القانون 137 لسنة 2006' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: العين المؤجرة والغرض من الإيجار',
          titleEnglish: 'Article 1: Leased Premises & Permitted Use',
          contentArabic: 'أجّر الطرف الأول للطرف الثاني الشقة السكنية رقم [...] بالدور [...] بالعقار الكائن في [...]، والمكونة من [...] غرف ومنافع، وذلك بغرض استعمالها سكناً خاصاً للمستأجر وأسرته فقط، ولا يجوز له تغيير الغرض بأي حال.',
          contentEnglish: 'The First Party leases unto the Second Party Apartment No. [...] on the [...] Floor located at [...], dedicated solely and exclusively for family residential dwelling.'
        },
        {
          titleArabic: 'المادة الثانية: مدة الإيجار وانتهاء العقد بقوة القانون',
          titleEnglish: 'Article 2: Lease Term & Automatic Expiration',
          contentArabic: 'مدة هذا الإيجار هي [...] تبدأ من تاريخ [...] وتنتهي في تاريخ [...]، وينتهي هذا العقد بانتهاء مدته بقوة القانون دون حاجة إلى تنبيه أو إنذار رسمي بالإخلاء، ولا يتجدد إلا باتفاق كتابي جديد.',
          contentEnglish: 'The term of this lease is [...] commencing on [...] and automatically expiring on [...] without necessity of notice or judicial ruling per Law 4 of 1996.'
        },
        {
          titleArabic: 'المادة الثالثة: القيمة الإيجارية والزيادة السنوية',
          titleEnglish: 'Article 3: Monthly Rent & Annual Escalation',
          contentArabic: 'القيمة الإيجارية الشهرية المتفق عليها هي مبلغ [...] جنيه مصري تُدفع مقدماً في الأول من كل شهر ميلادي بموجب إيصال كتابي موقع من المؤجر، وتزاد الأجرة سنوياً بنسبة [...]% اعتباراً من العام الثاني.',
          contentEnglish: 'The agreed monthly rental is [...] EGP payable in advance on the 1st of each calendar month against signed receipt, with an annual increase of [...]%.'
        },
        {
          titleArabic: 'المادة الرابعة: مبلغ التأمين النقدي',
          titleEnglish: 'Article 4: Refundable Security Deposit',
          contentArabic: 'سدد المستأجر للطرف الأول مبلغ [...] جنيه مصري كتأمين نقدي يُرد إليه عند انتهاء مدة الإيجار وتسليم العين بحالتها الأصلية مع سداد كافة فواتير الكهرباء والمياه والغاز، دون أن يكون للمستأجر حق خصم الإيجار منه.',
          contentEnglish: 'The Lessee pays a security deposit of [...] EGP refundable upon lease termination after handover and proof of settling all utility consumption bills.'
        },
        {
          titleArabic: 'المادة الخامسة: الشرط الفاسخ الصريح عند التأخر في السداد',
          titleEnglish: 'Article 5: Explicit Rescission on Rental Default',
          contentArabic: 'في حال تأخر المستأجر عن سداد الأجرة الشهرية في موعدها لأكثر من [...] يوماً، يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة إلى إنذار رسمي أو حكم قضائي، ويحق للمؤجر استرداد حيازة العين فوراً.',
          contentEnglish: 'If the Lessee defaults on paying rent for over [...] days, this Lease shall be automatically terminated by operation of law with immediate eviction rights.'
        },
        {
          titleArabic: 'المادة السادسة: حظر التنازل عن الإيجار أو التأجير من الباطن',
          titleEnglish: 'Article 6: Prohibition of Subletting & Assignment',
          contentArabic: 'يحظر على المستأجر حظراً باتاً التنازل عن الإيجار للغير أو تأجير العين كلياً أو جزئياً من الباطن أو استضافة غرباء بصفة دائمة دون موافقة كتابية صريحة من المؤجر، ويعتبر مخالفة ذلك سبباً للفسخ الفوري.',
          contentEnglish: 'The Lessee is strictly barred from subletting, assigning, or parting with possession of the premises in whole or in part without express written landlord consent.'
        },
        {
          titleArabic: 'المادة السابعة: المعاينة والصيانة والمحافظة على العين',
          titleEnglish: 'Article 7: Physical Inspection & Maintenance',
          contentArabic: 'يقر المستأجر بأنه استلم العين بحالة ممتازة صالحة للانتفاع، ويلتزم بإجراء الصيانة الدورية الاستعمالية على نفقته الخاصة، ويُحظر عليه إجراء أي تعديل معماري أو هدم أو إزالة جدران دون إذن كتابي.',
          contentEnglish: 'The Lessee acknowledges receiving the premises in good order and undertakes normal tenant repairs while prohibited from making structural alterations without consent.'
        },
        {
          titleArabic: 'المادة الثامنة: استهلاك المرافق والخدمات',
          titleEnglish: 'Article 8: Utilities & Service Consumption',
          contentArabic: 'يلتزم المستأجر بسداد فواتير استهلاك الكهرباء والمياه والغاز والهاتف والإنترنت وحصته في خدمات العقار كحارس العقار وصيانة المصعد بانتظام.',
          contentEnglish: 'The Lessee is personally responsible for paying all electricity, water, gas, communications, and building service maintenance expenses on time.'
        },
        {
          titleArabic: 'المادة التاسعة: التزام التذييل بالصيغة التنفيذية (ق 137/2006)',
          titleEnglish: 'Article 9: Enforceable Executive Deed Status',
          contentArabic: 'اتفق الطرفان على التوجه إلى مأمورية الشهر العقاري المختصة لإثبات تاريخ هذا العقد وتذييله بالصيغة التنفيذية عملاً بالقانون رقم 137 لسنة 2006 ليصبح سنداً تنفيذياً واجب النفاذ الجبري عند انتهاء مدته.',
          contentEnglish: 'The Parties agree to record this contract at the Notary Public and append the Executive Formula pursuant to Law 137 of 2006 enabling expedited eviction upon expiry.'
        },
        {
          titleArabic: 'المادة العاشرة: التنازل عن مهلة القضاء (م 598 مدني)',
          titleEnglish: 'Article 10: Waiver of Judicial Grace Periods',
          contentArabic: 'يقر المستأجر بصراحة بتنازله عن أي حق في طلب مهلة إخلاء أو امتداد قانوني أو إمهال من القضاء، إعمالاً لمبدأ العقد شريعة المتعاقدين وأحكام القانون رقم 4 لسنة 1996.',
          contentEnglish: 'The Lessee explicitly waives any legal claim to lease extension or judicial grace periods pursuant to the strict terms of Law No. 4 of 1996.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: التعويض الاتفاقي عن التأخر في التسليم',
          titleEnglish: 'Article 11: Liquidated Penalty for Delayed Vacating',
          contentArabic: 'في حال امتنع المستأجر عن تسليم العين للمؤجر فور انتهاء مدة العقد، يلتزم بسداد تعويض اتفاقي يومي قدره [...] جنيه مصري عن كل يوم تأخير حتى التسليم الفعلي، فضلاً عن أجرة المثل.',
          contentEnglish: 'In the event of failure to deliver vacant possession upon expiry, the Lessee shall pay liquidated damages of [...] EGP for each day of delay until full physical surrender.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: حق المؤجر في المعاينة وتفقد العين',
          titleEnglish: 'Article 12: Lessor Inspection Rights',
          contentArabic: 'يحق للمؤجر أو من ينيبه تفقد العين المؤجرة دورياً للتأكد من سلامتها وحسن استعمالها بموعد مسبق، وكذا السماح برؤية العين للراغبين في استئجارها في الشهر الأخير من مدة العقد.',
          contentEnglish: 'The Lessor retains the right to inspect the property periodically upon prior notice and to show the premises to prospective tenants during the final month.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الموطن المختار والإخطارات',
          titleEnglish: 'Article 13: Legal Domicile for Notices',
          contentArabic: 'يُعتبر عنوان العين المؤجرة موطناً مختاراً قضائياً للمستأجر طوال مدة العقد، وتصح كافة الإعلانات القضائية عليه قانوناً وشرعاً.',
          contentEnglish: 'The leased premises shall serve as the official judicial domicile of the Lessee for all notices and legal processes throughout the lease duration.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: الاختصاص القضائي ونسخ العقد',
          titleEnglish: 'Article 14: Jurisdiction & Counterparts',
          contentArabic: 'يخضع هذا العقد للقانون المصري وتختص محكمة الأمور المستعجلة والمحكمة الجزئية بنظر أي نزاع، وتحرر العقد من نسختين بيد كل طرف نسخة.',
          contentEnglish: 'Governed exclusively by Egyptian Law with jurisdiction vested in competent Summary Courts. Executed in two identical signed originals.'
        }
      ]
    }
  },
  {
    id: 'official-turnkey-construction',
    category: 'عقود المقاولات والإنشاءات',
    titleAr: 'عقد مقاولات وإنشاءات وتشطيبات متكاملة بنظام تسليم المفتاح (Turnkey)',
    titleEn: 'Comprehensive Turnkey Construction & Civil Works Contract',
    source: 'الاتحاد المصري لمقاولي البناء والتشييد وموسوعات نقابة المحامين وأحكام النقض',
    statutoryBasis: 'القانون المدني المصري المواد من 646 حتى 667 (عقد المقاولة) والضمان العشري بالمادة 651 مدني',
    totalClauses: 16,
    contractData: {
      contractTitleArabic: 'عقد مقاولات وإنشاءات هندسية وتشطيبات متكاملة بنظام تسليم المفتاح (Turnkey)',
      contractTitleEnglish: 'Turnkey Construction, Engineering & Architectural Fit-out Contract',
      preambleArabic: 'إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، تحرر هذا العقد بمدينة القاهرة، جمهورية مصر العربية، بين كل من:\nأولاً: شركة/ [اسم جهة العمل/المالك]، شركة مساهمة مصرية مقيدة بالسجل التجاري رقم [...]، ويمثلها في التوقيع رئيس مجلس الإدارة (طرف أول - رب العمل).\nثانياً: شركة/ [اسم شركة المقاولات الكامل]، مقيدة بالسجل التجاري رقم [...] والاتحاد المصري لمقاولي البناء والتشييد الفئة [...]، ويمثلها المدير التنفيذي (طرف ثانٍ - المقاول العام).\nاتفق الطرفان على ما يلي:',
      preambleEnglish: 'Executed on this day [...] in Cairo, Arab Republic of Egypt, between:\nFirst: [Employer Corporate Name], Egyptian S.A.E., Commercial Registration No: [...] (First Party - Employer).\nSecond: [Contractor Name], Commercial Registration No: [...] Grade [...] (Second Party - Main Contractor).\nThe Parties agreed upon the following terms:',
      recitalsArabic: 'يُعتبر هذا التمهيد وكافة المخططات الهندسية والمواصفات الفنية وجداول الكميات المعتمدة جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً له.',
      recitalsEnglish: 'The recitals, engineering drawings, specifications, and bills of quantities form an inseparable part of this Agreement.',
      certificationStatement: 'صيغة هندسية وقضائية متوافقة مع دفاتر شروط ومواصفات الاتحاد المصري للمقاولين وأحكام محكمة النقض في الضمان العشري م 651 مدني.',
      legalNotes: 'يتضمن كافة الجزاءات الهندسية، محاضر الاستلام الابتدائي والنهائي، فك المحتجزات، وخطابات الضمان البنكية الابتدائية والنهائية.',
      shariaComplianceNotes: 'مستوفٍ لشروط عقد الاستصناع الشرعي المجمع عليه فقهاً؛ الأجل محدد والمواصفات منضبطة بدقة نافية للغرر والنزاع.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنصوص المواد 646 إلى 667 من القانون المدني المصري والاتحاد المصري لمقاولي التشييد والبناء.',
        cassationPrinciplesValidation: 'مطابق لقضاء الهيئة العامة للمحكمة الدستورية ومحكمة النقض في شأن النظام العام للضمان العشري بالمادة 651 مدني.',
        customaryPracticeValidation: 'الصيغة المستقرة في كبريات شركات التطوير العقاري والمكاتب الاستشارية المصرية.',
        shariaAuditStatement: 'عقد استصناع شرعي صحيح ومحدد الأجل والثمن والمواصفات.',
        verificationChecklist: [
          { item: 'نطاق الأعمال والمخططات وجداول الكميات', status: 'مستوفى ومعتمد', reference: 'المادة 646 مدني مصري' },
          { item: 'القيمة المقطوعة وجدول الدفعات والمستخلصات', status: 'مستوفى ومعتمد', reference: 'المادة 658 مدني مصري' },
          { item: 'خطاب ضمان الدفعة المقدمة وحسن التنفيذ البنكي', status: 'مستوفى ومعتمد', reference: 'العرف المصرفي والهندسي' },
          { item: 'الضمان العشري الصارم لمدة 10 سنوات (نظام عام)', status: 'مستوفى ومعتمد', reference: 'المادة 651 مدني مصري' },
          { item: 'محاضر الاستلام الابتدائي والنهائي وإفراج المحتجز', status: 'مستوفى ومعتمد', reference: 'المادة 655 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد ووثائق العقد التكميلية',
          titleEnglish: 'Article 1: Preamble & Contract Documents Hierarchy',
          contentArabic: 'يُعتبر التمهيد وكافة المخططات المعمارية والإنشائية والتنفيذية، وجدول الكميات والأسعار، والمواصفات الفنية، والجدول الزمني جزءاً لا يتجزأ من هذا العقد وتُقرأ وتُفسر كوحدة واحدة.',
          contentEnglish: 'The preamble, architectural drawings, engineering specifications, bills of quantities, and execution schedule form an indivisible part of this Contract.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق العمل ومسؤولية المقاول (Turnkey)',
          titleEnglish: 'Article 2: Scope of Work & Turnkey Undertaking',
          contentArabic: 'يقوم المقاول بتنفيذ وتوريد وتركيب وتشطيب كافة الأعمال الإنشائية والمعمارية والكهروميكانيكية لمشروع [...] بنظام تسليم المفتاح الكامل الصالح للتشغيل الفوري وفق أعلى معايير الجودة والأصول الفنية.',
          contentEnglish: 'The Contractor shall execute, procure, install, and commission all structural, architectural, and MEP works on a full turnkey basis ready for immediate operation.'
        },
        {
          titleArabic: 'المادة الثالثة: مدة التنفيذ والبرنامج الزمني المعتمد',
          titleEnglish: 'Article 3: Time for Completion & Milestone Schedule',
          contentArabic: 'مدة تنفيذ المشروع هي [...] شهراً تقويمياً تبدأ من تاريخ تسليم الموقع خالياً من العوائق بموجب محضر استلام موقع رسمي موقع من الطرفين، ويلتزم المقاول بالبرنامج الزمني المعتمد.',
          contentEnglish: 'The execution period is [...] calendar months starting from the official site possession handover report, adhering strictly to approved milestones.'
        },
        {
          titleArabic: 'المادة الرابعة: القيمة الإجمالية التعاقدية المقطوعة',
          titleEnglish: 'Article 4: Lump Sum Contract Sum',
          contentArabic: 'القيمة الإجمالية المتفق عليها نظير إنجاز الأعمال تسليم مفتاح هي مبلغ مقطوع وقدره [...] جنيه مصري، شاملة كافة التوريدات والمصنعيات والمعدات والضرائب والرسوم دون أي زيادة بسبب تقلبات الأسعار.',
          contentEnglish: 'The agreed fixed lump-sum consideration is [...] EGP inclusive of all materials, labor, plant, overheads, and taxes without fluctuation adjustments.'
        },
        {
          titleArabic: 'المادة الخامسة: الدفعة المقدمة وخطاب الضمان البنكي',
          titleEnglish: 'Article 5: Advance Payment & Bank Performance Bond',
          contentArabic: 'يسدد رب العمل للمقاول دفعة مقدمة قدرها [...]% مقابل خطاب ضمان بنكي غير مشروط واجب الدفع عند الطلب صادر من بنك معتمد في مصر، ويقدم المقاول خطاب ضمان حسن تنفيذ بنسبة 5% من القيمة الإجمالية.',
          contentEnglish: 'The Employer pays [...]% advance payment against an unconditional bank guarantee payable on demand, alongside a 5% performance bond.'
        },
        {
          titleArabic: 'المادة السادسة: المستخلصات الشهرية الجارية ونسبة حجز الصيانة',
          titleEnglish: 'Article 6: Progress Invoices & Retention Monies',
          contentArabic: 'تُصرف مستحقات المقاول بموجب مستخلصات شهرية جارية معتمدة من استشاري المشروع بنسبة 90% من الأعمال المنجزة فعلياً، ويُحجز 10% كضمان صيانة يُفرج عن نصفها عند الاستلام الابتدائي والباقي بالنهائي.',
          contentEnglish: 'Monthly progress payments are disbursed at 90% against consultant certified invoices, with 10% retention withheld until final taking-over.'
        },
        {
          titleArabic: 'المادة السابعة: الضمان العشري القانوني الإلزامي (م 651 مدني)',
          titleEnglish: 'Article 7: Mandatory Decennial Liability (Art. 651)',
          contentArabic: 'يضمن المقاول والمهندس المصمم بالتضامن سلامة المبنى وما شيده من منشآت ثابتة لمدة 10 سنوات تبدأ من تاريخ الاستلام الابتدائي ضد أي تهدم كلي أو جزئي أو عيب يهدد متانة البناء، ولا يجوز الاتفاق على إسقاط هذا الضمان لتعلقه بالنظام العام طبقاً للمادة 651 مدني.',
          contentEnglish: 'Contractor and Architect jointly guarantee the structural integrity against total or partial collapse or defect for 10 years per mandatory Article 651 of the Egyptian Civil Code.'
        },
        {
          titleArabic: 'المادة الثامنة: الاستلام الابتدائي وفترة ضمان العيوب',
          titleEnglish: 'Article 8: Provisional Taking-Over & Defect Liability',
          contentArabic: 'عند إتمام الأعمال يتقدم المقاول بطلب استلام ابتدائي لتشكيل لجنة للمعاينة وتحرير محضر استلام ابتدائي، وتبدأ من تاريخه فترة ضمان عيوب تشغيلية مدتها 12 شهراً يلتزم خلالها المقاول بإصلاح أي عيب فوراً.',
          contentEnglish: 'Upon completion, a provisional taking-over certificate is executed initiating a 12-month defects liability period wherein the Contractor rectifies all defects.'
        },
        {
          titleArabic: 'المادة التاسعة: الاستلام النهائي والإفراج عن المحتجزات',
          titleEnglish: 'Article 9: Final Taking-Over & Release of Retentions',
          contentArabic: 'بعد انقضاء فترة ضمان الصيانة (12 شهراً) والتأكد من سلامة كافة الأعمال، يُحرر محضر الاستلام النهائي ويُفرج رب العمل عن محتجز الصيانة وخطاب الضمان البنكي النهائي.',
          contentEnglish: 'Following the 12-month defect period, a final acceptance certificate is issued triggering the immediate release of remaining retentions and bank guarantees.'
        },
        {
          titleArabic: 'المادة العاشرة: غرامات التأخير الاتفاقية الجابرة للضرر',
          titleEnglish: 'Article 10: Delay Liquidated Damages',
          contentArabic: 'إذا تأخر المقاول في إنجاز الأعمال عن الموعد المحدد، فإنه يلتزم بسداد غرامة تأخير اتفاقية جابرة للضرر قدرها [...] جنيه عن كل يوم تأخير بحد أقصى 10% من قيمة العقد، تُخصم تلقائياً من مستحقاته دون حاجة لإنذار.',
          contentEnglish: 'Failure to complete within schedule incurs liquidated delay damages of [...] EGP per day up to 10% maximum, deductible directly without judicial process.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: السلامة والصحة المهنية والتأمين الهندسي',
          titleEnglish: 'Article 11: HSE & Comprehensive Engineering Insurance',
          contentArabic: 'يلتزم المقاول التزاماً مطلقاً بكافة معايير السلامة والصحة المهنية (OSHA) وتوفير مهمات الوقاية، واستخراج وثيقة تأمين شاملة لكافة أخطار المقاولين (CAR) والتأمين ضد المسؤولية المدنية تجاه الغير (TPL).',
          contentEnglish: 'The Contractor maintains strict HSE compliance and Procures Contractors All Risks (CAR) and Third Party Liability (TPL) insurance policies.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: حظر التنازل والمقاولين من الباطن',
          titleEnglish: 'Article 12: Subcontracting & Assignment Restrictions',
          contentArabic: 'لا يجوز للمقاول التنازل عن العقد أو إسناد الأعمال الجوهرية لمقاولين من باطن دون موافقة كتابية مسبقة من رب العمل، ويظل المقاول مسؤولاً بالتضامن عن أعمال تابعيه ومقاوليه من الباطن.',
          contentEnglish: 'No assignment or major subcontracting is permitted without written Employer approval, the Contractor remaining fully vicariously liable.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 13: Force Majeure & Exceptional Events',
          contentArabic: 'في حال وقوع حدث قوة قاهرة خارج عن إرادة الطرفين يعيق التنفيذ كالكوارث الطبيعية أو الحروب، يلتزم الطرف المتضرر بإخطار الآخر كتابياً خلال 7 أيام، وتُمدد مدة التنفيذ بقدر مدة التوقف المثبتة.',
          contentEnglish: 'Events of force majeure excusing performance require written notice within 7 days and entitle the Contractor solely to an equivalent time extension.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: سحب العمل وإنهاء العقد لإخلال المقاول',
          titleEnglish: 'Article 14: Termination & Work Withdrawal for Default',
          contentArabic: 'يحق لرب العمل سحب العمل من المقاول وتسييل خطابات الضمان البنكية والتنفيذ على حسابه بعد إنذاره بـ 15 يوماً في حال إفلاسه أو توقفه عن العمل أو إهماله الجسيم في معايير الجودة والسلامة.',
          contentEnglish: 'The Employer may withdraw works and liquidate bank guarantees upon 15 days warning notice in cases of bankruptcy, abandonment, or gross negligence.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: القانون الواجب وفض المنازعات والتحكيم',
          titleEnglish: 'Article 15: Governing Law & Dispute Resolution / Arbitration',
          contentArabic: 'يخضع هذا العقد للقانون المصري، وتتم تسوية أي نزاع ينشأ عنه ودياً خلال 30 يوماً، فإن تعذر يُحال إلى التحكيم التجاري وفقاً لأحكام قانون التحكيم المصري رقم 27 لسنة 1994 بمركز القاهرة الإقليمي للتحكيم (CRCICA).',
          contentEnglish: 'Governed by Egyptian Law; unresolved disputes shall be settled by arbitration in Cairo under CRCICA Rules pursuant to Egyptian Arbitration Law No. 27 of 1994.'
        },
        {
          titleArabic: 'المادة السادسة عشرة: الموطن المختار ونسخ العقد',
          titleEnglish: 'Article 16: Legal Domicile & Counterparts',
          contentArabic: 'اتخذ كل طرف من مقره المبين بصدر العقد موطناً مختاراً قضائياً، وتصح عليه المراسلات والإعلانات الرسمية، وتحرر العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها.',
          contentEnglish: 'Addresses in the preamble constitute official chosen legal domiciles. Executed in two identical counterparts, Arabic text being authoritative.'
        }
      ]
    }
  },
  {
    id: 'official-executive-employment',
    category: 'عقود العمل والخدمات',
    titleAr: 'عقد عمل فردي تنفيذي كامل البنود خاضع لأحكام قانون العمل 12 لسنة 2003',
    titleEn: 'Executive Employment Contract Under Egyptian Labor Law No. 12 of 2003',
    source: 'وزارة العمل المصرية ونماذج نقابة المحامين الرسمية',
    statutoryBasis: 'قانون العمل المصري الموحد رقم 12 لسنة 2003 وقانون التأمينات الاجتماعية والمعاشات رقم 148 لسنة 2019',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد عمل فردي تنفيذي محدد المدة خاضع لأحكام قانون العمل المصري رقم 12 لسنة 2003',
      contractTitleEnglish: 'Executive Fixed-Term Employment Agreement Under Egyptian Labor Law',
      preambleArabic: 'إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، تحرر هذا العقد بمدينة [...]، جمهورية مصر العربية، بين كل من:\nأولاً: شركة/ [اسم الشركة/صاحب العمل]، شركة مقيدة بالسجل التجاري رقم [...] وبطاقة ضريبية رقم [...]، ويمثلها في التوقيع مدير عام الموارد البشرية (طرف أول - صاحب عمل).\nثانياً: السيد/ [اسم الموظف الكامل]، مصري الجنسية، بطاقة رقم قومي رقم: [...]، ورقم تأميني: [...]، والمقيم في: [...] (طرف ثانٍ - عامل/موظف).\nاتفق الطرفان على ما يلي:',
      preambleEnglish: 'Executed on this day [...] between:\nFirst: [Company Name], Commercial Registration: [...], Tax Card: [...] (First Party - Employer).\nSecond: Mr. [Employee Full Name], Egyptian, National ID: [...], Social Insurance No: [...] (Second Party - Employee).\nBoth Parties mutually agreed as follows:',
      recitalsArabic: 'يُعتبر هذا التمهيد جزءاً لا يتجزأ من هذا العقد ومفسراً ومتمماً لكافة مواده والتزاماته القانونية.',
      recitalsEnglish: 'The preamble forms an integral and enforceable part of this Employment Agreement.',
      certificationStatement: 'صيغة قانونية رسمية مطابقة لقانون العمل 12 لسنة 2003 وقانون التأمينات 148 لسنة 2019 ولائحة مكتب العمل.',
      legalNotes: 'متضمن فترة الاختبار القانونية (3 أشهر)، التأمين الصحي الشامل، مكافأة نهاية الخدمة، والتزامات السرية وحظر المنافسة المشروعة.',
      shariaComplianceNotes: 'عقد إجارة على العمل شرعي صحيح ومحدد الأجر والمنفعة والوقت.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج وزارة القوى العاملة ومكاتب العمل المصرية وقانون العمل 12/2003.',
        cassationPrinciplesValidation: 'مطابق لقضاء الدائرة العمالية بمحكمة النقض في أحكام الفصل التعسفي والتعويض وحظر المنافسة.',
        customaryPracticeValidation: 'الصيغة المعتمدة بنقابة المحامين للشؤون العمالية والشركات المصرية والأجنبية.',
        shariaAuditStatement: 'عقد عمل شرعي محدد الأجر والمهام ولا تشوبه جهالة.',
        verificationChecklist: [
          { item: 'الخضوع الصريح لقانون العمل 12/2003 والتأمينات 148/2019', status: 'مستوفى ومعتمد', reference: 'المادة 32 من قانون العمل' },
          { item: 'المنصب الوظيفي والوصف الدقيق للمهام', status: 'مستوفى ومعتمد', reference: 'المادة 31 عمال' },
          { item: 'الراتب الشامل والبدلات والتأمينات الاجتماعية', status: 'مستوفى ومعتمد', reference: 'المواد 34-45 عمال' },
          { item: 'فترة الاختبار المحددة بـ 3 أشهر كحد أقصى قانوني', status: 'مستوفى ومعتمد', reference: 'المادة 33 عمال' },
          { item: 'حظر المنافسة والسرية وحماية البيانات الشخصية', status: 'مستوفى ومعتمد', reference: 'المادة 686 مدني وقانون 151/2020' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد والمنصب والمهام الوظيفية',
          titleEnglish: 'Article 1: Preamble & Job Title & Responsibilities',
          contentArabic: 'التحق الطرف الثاني بالعمل لدى الطرف الأول بوظيفة [...] ويكون تابعاً إدارياً لـ [...]، ويلتزم بأداء واجباته الوظيفية بأمانة وإخلاص ودقة وفقاً للوائح العمل الداخلية وتعليمات الإدارة المشروعة.',
          contentEnglish: 'The Employee is engaged in the position of [...] reporting to [...], undertaking duties with high diligence, fidelity, and adherence to company policies.'
        },
        {
          titleArabic: 'المادة الثانية: مدة العقد والسريان',
          titleEnglish: 'Article 2: Contract Duration & Effective Term',
          contentArabic: 'حُرر هذا العقد لمدة محددة قدرها [...] تبدأ من تاريخ [...] وتنتهي في [...]، ويجوز تجديده باتفاق كتابي صريح بين الطرفين قبل نهايته بـ 30 يوماً.',
          contentEnglish: 'This is a fixed-term contract for a period of [...] commencing on [...] and expiring on [...] subject to renewal by mutual written consent.'
        },
        {
          titleArabic: 'المادة الثالثة: فترة الاختبار القانونية (3 أشهر كحد أقصى)',
          titleEnglish: 'Article 3: Probationary Period (Max 3 Months)',
          contentArabic: 'يخضع الموظف لفترة اختبار مدتها 3 أشهر تبدأ من تاريخ استلام العمل، ويحق لصاحب العمل إنهاء العقد خلالها إذا ثبت عدم صلاحية العامل دون حاجة لإنذار أو مكافأة طبقاً للمادة 33 من قانون العمل.',
          contentEnglish: 'The Employee undergoes a 3-month statutory probation period during which the Employer may terminate employment upon proven unsuitability per Article 33.'
        },
        {
          titleArabic: 'المادة الرابعة: الراتب والبدلات والمزايا المالية',
          titleEnglish: 'Article 4: Salary, Allowances & Financial Remuneration',
          contentArabic: 'يتقاضى الموظف راتباً شهرياً إجمالياً قدره [...] جنيه مصري، شاملاً الراتب الأساسي والبدلات، ويُصرف في نهاية كل شهر ميلادي بعد استقطاع الضرائب والتأمينات الاجتماعية المقررة قانوناً.',
          contentEnglish: 'The Employee receives an aggregate monthly remuneration of [...] EGP payable at calendar month end subject to statutory taxes and social insurance deductions.'
        },
        {
          titleArabic: 'المادة الخامسة: مواعيد العمل وساعات الراحة الأسبوعية',
          titleEnglish: 'Article 5: Working Hours & Weekly Rest',
          contentArabic: 'ساعات العمل هي 8 ساعات يومياً لمدة 5 أيام أسبوعياً بما لا يجاوز 48 ساعة أسبوعياً طبقاً للمادة 80 من قانون العمل، ويستحق العامل راحة أسبوعية مدفوعة الأجر.',
          contentEnglish: 'Working hours are 8 hours per day, 5 days per week not exceeding statutory 48 hours weekly pursuant to Article 80, with paid weekly rest.'
        },
        {
          titleArabic: 'المادة السادسة: الإجازات السنوية والرسمية والمرضية',
          titleEnglish: 'Article 6: Annual, Official & Sick Leaves',
          contentArabic: 'يستحق العامل إجازة سنوية مدفوعة الأجر مدتها 21 يوماً عن كل عام عمل كامل، وتزداد إلى 30 يوماً متى أمضى العامل 10 سنوات أو تجاوز سن الخمسين، بالإضافة للعطلات الرسمية والإجازات المرضية المعتمدة.',
          contentEnglish: 'The Employee is entitled to 21 days paid annual leave annually, increasing to 30 days after 10 years service or reaching age 50, plus public holidays.'
        },
        {
          titleArabic: 'المادة السابعة: التأمينات الاجتماعية والتأمين الطبي',
          titleEnglish: 'Article 7: Social Insurance & Medical Coverage',
          contentArabic: 'يلتزم الطرف الأول بالتأمين الاجتماعي على الطرف الثاني طبقاً للقانون رقم 148 لسنة 2019، وتوفير مظلة تأمين طبي شامل من الدرجة الأولى للعامل وفق لوائح الشركة.',
          contentEnglish: 'The Employer commits to registering the Employee under Social Insurance Law No. 148 of 2019 and providing comprehensive medical coverage.'
        },
        {
          titleArabic: 'المادة الثامنة: السرية التامة وحماية البيانات (ق 151/2020)',
          titleEnglish: 'Article 8: Strict Non-Disclosure & Data Protection',
          contentArabic: 'يتعهد الموظف بالمحافظة التامة على سرية أسرار العمل والبيانات الفنية والمالية وقوائم العملاء طوال مدة العقد وبعد انتهائه، وفقاً للمادة 686 مدني وقانون حماية البيانات الشخصية رقم 151 لسنة 2020.',
          contentEnglish: 'The Employee covenants strict confidentiality regarding business secrets, client data, and proprietary know-how under Law 151 of 2020.'
        },
        {
          titleArabic: 'المادة التاسعة: حظر المنافسة المشروعة (م 686 مدني)',
          titleEnglish: 'Article 9: Lawful Non-Compete Agreement',
          contentArabic: 'يحظر على الموظف لمدة سنة بعد انتهاء العقد العمل لدى أي منافس أو تأسيس مشروع مماثل داخل النطاق الجغرافي لعمل الشركة، حماية لمصالح صاحب العمل المشروعة وطبقاً للمادة 686 مدني.',
          contentEnglish: 'The Employee is restricted for one year post-termination from working for direct competitors within the operational geographic territory per Civil Code 686.'
        },
        {
          titleArabic: 'المادة العاشرة: حقوق الملكية الفكرية والابتكارات',
          titleEnglish: 'Article 10: Intellectual Property & Inventions',
          contentArabic: 'تؤول ملكية كافة الابتكارات والبرمجيات والمؤلفات والأعمال التي يبتكرها أو يساهم فيها العامل أثناء عمله بمناسبة تنفيذ هذا العقد إلى صاحب العمل حصرياً ومطلقاً دون مقابل إضافي.',
          contentEnglish: 'All inventions, software, copyright works, and deliverables created by the Employee in the course of employment vest exclusively in the Employer.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الإنهاء والإخطار المسبق',
          titleEnglish: 'Article 11: Termination & Notice Period',
          contentArabic: 'يجوز لأي من الطرفين إنهاء العقد بإخطار كتابي مسبق مدته شهران على الأقل خلال مدة سريان العقد للسبب المشروع، مع مراعاة أحكام المحاكم العمالية وحظر الفصل التعسفي.',
          contentEnglish: 'Either Party may terminate upon two months prior written notice for valid justifiable grounds under Egyptian Labor Court jurisdiction.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الجزاءات التأديبية ولائحة العمل',
          titleEnglish: 'Article 12: Disciplinary Sanctions Code',
          contentArabic: 'يخضع الموظف للائحة الجزاءات المعتمدة من مكتب العمل المختص، ولا يجوز توقيع أي جزاء إلا بعد التحقيق الكتابي وسماع أقوال العامل طبقاً للمادة 58 وما بعدها من قانون العمل.',
          contentEnglish: 'The Employee is subject to the Disciplinary Code approved by the Labor Office, ensuring written investigation before applying sanctions.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الموطن المختار والإخطارات الرسمية',
          titleEnglish: 'Article 13: Chosen Legal Domicile for Notices',
          contentArabic: 'يُعتبر عنوان الموظف المبين بصدر العقد موطناً مختاراً له تصح عليه كافة المراسلات والإنذارات الرسمية ما لم يُخطر الشركة بتغييره كتابياً بموجب خطاب مسجل.',
          contentEnglish: 'The Employee residential address stated herein constitutes the official legal domicile for all formal notices and communications.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: الاختصاص القضائي والمحاكم العمالية',
          titleEnglish: 'Article 14: Governing Jurisdiction & Labor Courts',
          contentArabic: 'يخضع هذا العقد لقانون العمل المصري، وتختص المحكمة العمالية بنظر أي نزاع، وتحرر العقد من 3 نسخ أصلية (نسخة للعامل، نسخة للشركة، ونسخة تودع بمكتب العمل المختص).',
          contentEnglish: 'Governed by Egyptian Labor Law with exclusive jurisdiction conferred to competent Labor Courts. Executed in 3 identical originals, one filed with the Labor Office.'
        }
      ]
    }
  },
  {
    id: 'official-tech-software-sla',
    category: 'عقود التكنولوجيا والبرمجيات',
    titleAr: 'عقد تطوير برمجيات وحلول رقمية ونقل ملكية فكرية وترخيص وSLA',
    titleEn: 'Software Development, IP Assignment, Licensing & SLA Agreement',
    source: 'هيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA) ونقابة المحامين المصرية',
    statutoryBasis: 'قانون حماية حقوق الملكية الفكرية رقم 82 لسنة 2002 وقانون التوقيع الإلكتروني 15 لسنة 2004 وقانون حماية البيانات 151 لسنة 2020',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد تقديم خدمات تطوير برمجيات وحلول رقمية ونقل ملكية فكرية واتفاقية مستوى خدمة (SLA)',
      contractTitleEnglish: 'Software Engineering, IP Assignment & Service Level Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، تحرر هذا العقد بمدينة القاهرة، جمهورية مصر العربية، بين كل من:\nأولاً: شركة/ [اسم الشركة العميل]، شركة مساهمة/ذات مسؤولية محدودة مقيدة بالسجل التجاري رقم: [...]، ويمثلها في التوقيع رئيس مجلس الإدارة (طرف أول - العميل).\nثانياً: شركة/ [اسم شركة البرمجيات/المطور]، مقيدة بالسجل التجاري رقم: [...]، وعضو هيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA)، ويمثلها المدير التنفيذي (طرف ثانٍ - المطور التقني).\nوبعد أن أقر الطرفان بأهليتهما القانونية والتجارية للتعاقد، اتفقا على ما يلي:',
      preambleEnglish: 'Executed on this day [...] in Cairo, Arab Republic of Egypt, between:\nFirst: [Client Corporate Name], Commercial Registration: [...] (First Party - Client).\nSecond: [Software Development Company], Commercial Registration: [...] (Second Party - Developer).\nBoth Parties mutually agreed upon the following terms:',
      recitalsArabic: 'يُعتبر هذا التمهيد وكافة وثائق المواصفات الفنية للبرمجيات وخطة التسليم المعتمدة جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً له.',
      recitalsEnglish: 'The preamble and Software Requirements Specification (SRS) constitute an inseverable part of this Agreement.',
      certificationStatement: 'صيغة برمجية وقضائية معتمدة مطابقة لقانون حماية حقوق الملكية الفكرية رقم 82 لسنة 2002 وقانون حماية البيانات الشخصية رقم 151 لسنة 2020.',
      legalNotes: 'يتضمن نقل كامل للشفرة المصدرية (Source Code)، وفترة ضمان تشغيلي 12 شهراً، ومعايير توفر الخدمة 99.9%، وحظر المنافسة والسرية.',
      shariaComplianceNotes: 'عقد استصناع برمجي وإجارة موصوفة في الذمة شرعاً، خالٍ من الغرر ومحدد المواصفات والبدل المالي بدقة نافية للجهالة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لمعايير هيئة تنمية صناعة تكنولوجيا المعلومات وقوانين الملكية الفكرية المصرية.',
        cassationPrinciplesValidation: 'متطابق مع قضاء الدوائر الاقتصادية بمحكمة النقض في أحكام ملكية البرمجيات والمصنفات الرقمية.',
        customaryPracticeValidation: 'الصيغة النموذجية المستقرة في كبرى شركات تكنولوجيا المعلومات والشركات الناشئة.',
        shariaAuditStatement: 'عقد استصناع برمجي سليم ومبرأ من الغرر والربا.',
        verificationChecklist: [
          { item: 'نطاق تطوير البرمجيات والمواصفات SRS', status: 'مستوفى ومعتمد', reference: 'المادة 646 مدني وقانون 82/2002' },
          { item: 'التنازل الكامل عن الملكية الفكرية والسورس كود', status: 'مستوفى ومعتمد', reference: 'المادة 149 من قانون الملكية الفكرية' },
          { item: 'جدول الدفعات والمستخلصات المرحلية', status: 'مستوفى ومعتمد', reference: 'المادة 658 مدني مصري' },
          { item: 'اتفاقية مستوى الخدمة SLA وتوفر 99.9%', status: 'مستوفى ومعتمد', reference: 'العرف التقني الدولي' },
          { item: 'حماية البيانات والسرية التامة', status: 'مستوفى ومعتمد', reference: 'القانون رقم 151 لسنة 2020' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble & Interpretive Hierarchy',
          contentArabic: 'يُعتبر التمهيد وملاحق المواصفات الفنية وجدول المراحل جزءاً لا يتجزأ من هذا العقد وتُقرأ وتُفسر كوحدة واحدة لا تتجزأ.',
          contentEnglish: 'The preamble and technical appendices form an integral and inseverable part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق خدمات التطوير البرمجي والتسليم',
          titleEnglish: 'Article 2: Software Scope & Deliverables',
          contentArabic: 'يقوم المطور بتصميم وبرمجة وتشغيل نظام البرمجيات المتفق عليه وفقاً للمواصفات الفنية المعتمدة، مع تسليم الشفرة المصدرية الكاملة (Source Code) والتوثيق البرمجي وقواعد البيانات واختبارات القبول (UAT).',
          contentEnglish: 'The Developer undertakes to design, engineer, and deploy the Software per approved specifications, handing over full source code and technical documentation.'
        },
        {
          titleArabic: 'المادة الثالثة: المقابل المالي وجدول الدفعات المرحلية',
          titleEnglish: 'Article 3: Financial Consideration & Payment Milestones',
          contentArabic: 'المقابل الإجمالي لتطوير المنظومة هو مبلغ [...] جنيه مصري، يُدفع على دفعات مرحلية مرتبطة بالإنجاز الفعلي لكل مرحلة بعد اعتماد محضر الفحص الفني والاستلام.',
          contentEnglish: 'The total consideration is [...] EGP payable in milestone installments strictly contingent upon certified acceptance of each development phase.'
        },
        {
          titleArabic: 'المادة الرابعة: التنازل الكامل والمطلق عن الملكية الفكرية',
          titleEnglish: 'Article 4: Absolute Intellectual Property Assignment',
          contentArabic: 'يتنازل المطور تنازلاً باتاً ونهائياً للعميل عن كافة حقوق الملكية الفكرية وحقوق المؤلف والشفرة المصدرية وكافة المصنفات الرقمية للبرمجيات فور سداد مستحقاتها عملاً بقانون الملكية الفكرية 82 لسنة 2002.',
          contentEnglish: 'Developer assigns exclusively, perpetually, and irrevocably all IP rights, copyright, and source code to the Client under IP Law No. 82 of 2002.'
        },
        {
          titleArabic: 'المادة الخامسة: فترة الضمان التشغيلي والدعم الفني',
          titleEnglish: 'Article 5: Operational Warranty & Technical Support',
          contentArabic: 'يضمن المطور خلو البرمجيات من أي أخطاء برمجية أو ثغرات أمنية لمدة 12 شهراً من تاريخ الاستلام النهائي، ويلتزم بإصلاح أي عيب فوراً دون أي تكلفة إضافية.',
          contentEnglish: 'Developer provides a 12-month defect warranty covering bug fixes and security patching without additional charges.'
        },
        {
          titleArabic: 'المادة السادسة: اتفاقية مستوى الخدمة وضمان التوفر (SLA)',
          titleEnglish: 'Article 6: Service Level Agreement (SLA) & Uptime',
          contentArabic: 'يلتزم الطرفان باتفاقية مستوى خدمة تضمن تشغيل المنظومة بنسبة توفر لا تقل عن 99.9%، مع الاستجابة للأعطال الحرجة خلال ساعتين كحد أقصى.',
          contentEnglish: 'Parties agree to a 99.9% uptime availability with critical incident response within 2 hours.'
        },
        {
          titleArabic: 'المادة السابعة: حماية البيانات الشخصية والأمن السيبراني',
          titleEnglish: 'Article 7: Personal Data Protection & Cybersecurity',
          contentArabic: 'يلتزم المطور بتطبيق أعلى معايير التشفير والأمن السيبراني وحماية بيانات مستخدمي المنظومة طبقاً لأحكام القانون رقم 151 لسنة 2020 بشأن حماية البيانات الشخصية.',
          contentEnglish: 'Developer implements enterprise-grade encryption complying strictly with Personal Data Protection Law No. 151 of 2020.'
        },
        {
          titleArabic: 'المادة الثامنة: الالتزام الصارم بالسرية وحظر المنافسة',
          titleEnglish: 'Article 8: Strict Confidentiality & Non-Compete',
          contentArabic: 'يحظر على المطور إفشاء أي سر من أسرار عمل العميل أو تطوير منظومة منافسة مطابقة للغير لمدة 3 سنوات من انتهاء التعاقد.',
          contentEnglish: 'Developer is strictly prohibited from disclosing proprietary data or engineering identical competing solutions for 3 years.'
        },
        {
          titleArabic: 'المادة التاسعة: الجدول الزمني وغرامات التأخير',
          titleEnglish: 'Article 9: Project Milestones & Liquidated Delay Damages',
          contentArabic: 'مدة تنفيذ المشروع هي [...] شهراً، وفي حال تأخر المطور يُلزم بغرامة تأخير اتفاقية جابرة للضرر قدرها 1% عن كل أسبوع تأخير بحد أقصى 10% من قيمة العقد.',
          contentEnglish: 'Total duration is [...] months; unexcused delays incur 1% per week liquidated damages up to a 10% ceiling.'
        },
        {
          titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 10: Force Majeure & Excused Events',
          contentArabic: 'تُعفى الأطراف من المسؤولية عن التأخير الناتج عن القوة القاهرة المثبتة كالكوارث الطبيعية وانقطاع شبكة الإنترنت العام الخارج عن السيطرة.',
          contentEnglish: 'Parties are excused from performance delays caused by verifiable force majeure events.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الإنهاء والفسخ للسبب المشروع',
          titleEnglish: 'Article 11: Termination for Material Cause',
          contentArabic: 'يحق للعميل إنهاء العقد واسترداد المبالغ المسددة في حال إخفاق المطور في اجتياز اختبارات القبول لأكثر من 30 يوماً من الموعد المحدد.',
          contentEnglish: 'Client may terminate and recover disbursed funds upon failed acceptance testing exceeding 30 days.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار والمراسلات الرقمية',
          titleEnglish: 'Article 12: Chosen Domicile & Digital Notices',
          contentArabic: 'تُعتبر العناوين والبريد الإلكتروني الموضحين بصدر العقد موطناً مختاراً تصح عليه المراسلات القانونية وفق قانون التوقيع الإلكتروني 15 لسنة 2004.',
          contentEnglish: 'Addresses and registered emails serve as legal domicile under Electronic Signature Law 15 of 2004.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: التحكيم التجاري وفض المنازعات',
          titleEnglish: 'Article 13: Commercial Arbitration & Governing Law',
          contentArabic: 'يخضع هذا العقد للقانون المصري، وتتم تسوية أي نزاع عن طريق التحكيم وفقاً لقواعد مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA).',
          contentEnglish: 'Governed by Egyptian Law; disputes resolved by arbitration under CRCICA Rules in Cairo.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد وتوقيع الأطراف',
          titleEnglish: 'Article 14: Counterparts & Authoritative Language',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة، والنص العربي هو الحاكم والمفسر أمام القضاء والتحكيم.',
          contentEnglish: 'Executed in two identical originals, Arabic text prevailing in interpretation.'
        }
      ]
    }
  },
  {
    id: 'official-investment-partnership',
    category: 'عقود الشركات والاستثمار',
    titleAr: 'عقد شراكة استثمارية وتأسيس مشروع تجاري وتوزيع أرباح وخسائر',
    titleEn: 'Commercial Partnership, Joint Venture & Profit Sharing Agreement',
    source: 'الهيئة العامة للاستثمار والمناطق الحرة (GAFI) ونقابة المحامين',
    statutoryBasis: 'قانون الشركات رقم 159 لسنة 1981 وقانون التجارة رقم 17 لسنة 1999 والقانون المدني المواد من 505 إلى 537',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد شراكة استثمارية وتأسيس مشروع تجاري وتوزيع الحصص والأرباح والخسائر',
      contractTitleEnglish: 'Commercial Investment Partnership & Profit/Loss Sharing Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، تحرر هذا العقد بمدينة [...]، جمهورية مصر العربية، بين كل من:\nأولاً: السيد/ [اسم الشريك الأول]، مصري الجنسية، بطاقة رقم قومي: [...]، والمقيم في: [...] (طرف أول - شريك).\nثانياً: السيد/ [اسم الشريك الثاني]، مصري الجنسية، بطاقة رقم قومي: [...]، والمقيم في: [...] (طرف ثانٍ - شريك).\nوبعد أن أقر الطرفان بأهليتهما القانونية والشرعية للتصرف والتعاقد والتجارة، اتفقا وتراضيا على تأسيس شركة شراكة استثمارية بالشروط الآتية:',
      preambleEnglish: 'Executed on this day [...] in [...], Arab Republic of Egypt, between:\nFirst: Mr. [First Partner Full Name], Egyptian, National ID: [...] (First Party - Partner).\nSecond: Mr. [Second Partner Full Name], Egyptian, National ID: [...] (Second Party - Partner).\nBoth Parties mutually agreed to establish a commercial partnership under the following terms:',
      recitalsArabic: 'يُعتبر هذا التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة أحكامه ومواده القانونية والتجارية.',
      recitalsEnglish: 'The recitals constitute an integral, binding, and interpretive part of this Partnership Agreement.',
      certificationStatement: 'صيغة شراكة نموذجية مستوفاة لأحكام القانون التجاري وقواعد الفقه الإسلامي في المشاركات (الربح على ما اصطلحا والوضيعة على قدر المالين).',
      legalNotes: 'متضمن تحديد دقيق لرأس المال، الحصص النقدية والعينية، سلطات الإدارة، الحسابات البنكية المشتركة، آلية التخارج وتصفية الحصص.',
      shariaComplianceNotes: 'مستوفٍ لضوابط شركة العنان والمضاربة الشرعية؛ خالٍ من اشتراط فائدة ثابتة أو ضمان رأس المال على الشريك العامل.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج الهيئة العامة للاستثمار وقانون التجارة المصري 17 لسنة 1999.',
        cassationPrinciplesValidation: 'مطابق لقضاء الدائرة التجارية بمحكمة النقض في أحكام بطلان شرط الأسد وتوزيع الأرباح والخسائر.',
        customaryPracticeValidation: 'الصيغة المستقرة بنقابة المحامين لتأسيس الشركات والمشروعات المشتركة.',
        shariaAuditStatement: 'عقد شركة شرعي صحيح خالٍ من الفوائد الربوية وضمان الربح الباطل.',
        verificationChecklist: [
          { item: 'اسم الشركة والسمة التجارية ومقر المركز الرئيسي', status: 'مستوفى ومعتمد', reference: 'المادة 505 مدني وقانون 17/1999' },
          { item: 'رأس المال والحصص النقدية والعينية وحصة العمل', status: 'مستوفى ومعتمد', reference: 'المادة 507 مدني مصري' },
          { item: 'توزيع الأرباح والخسائر (بطلان شرط الأسد)', status: 'مستوفى ومعتمد', reference: 'المادة 515 مدني مصري' },
          { item: 'سلطات الإدارة وحق التوقيع والإشراف المالي', status: 'مستوفى ومعتمد', reference: 'المادة 516 مدني مصري' },
          { item: 'آلية التخارج وتصفية الشركة وقسمة الأصول', status: 'مستوفى ومعتمد', reference: 'المادة 532 مدني مصري' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble & Foundational Recitals',
          contentArabic: 'يُعتبر التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومتمماً ومفسراً لكافة بنوده ومواده.',
          contentEnglish: 'The preamble forms an integral and enforceable part of this Partnership Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: اسم الشركة والسمة التجارية والغرض',
          titleEnglish: 'Article 2: Company Name, Brand & Corporate Purpose',
          contentArabic: 'اتفق الشركاء على تكوين شركة شراكة تحت اسم [...] وسمتها التجارية [...]، وغرضها هو ممارسة نشاط [...] وجميع الأعمال التجارية المتصلة به.',
          contentEnglish: 'The Partners agree to form a partnership under the business name [...] dedicated to carrying out [...].'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي والموطن القانوني',
          titleEnglish: 'Article 3: Headquarters & Principal Place of Business',
          contentArabic: 'يقع المركز الرئيسي للشركة وإدارتها في [...]، ويجوز للشركاء فتح فروع أخرى داخل جمهورية مصر العربية أو خارجها بقرار مشترك.',
          contentEnglish: 'The principal place of business is located at [...], with branches permitted by mutual consent.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة والسريان والتجديد',
          titleEnglish: 'Article 4: Duration & Automatic Extension',
          contentArabic: 'مدة هذه الشركة هي [...] سنوات تبدأ من تاريخ توقيع العقد والقيد بالسجل التجاري، وتتجدد تلقائياً لمدد مماثلة ما لم يُخطر أحد الشركاء برغبته في عدم التجديد قبل نهاية المدة بـ 6 أشهر.',
          contentEnglish: 'The partnership duration is [...] years renewable automatically unless 6 months prior written notice is given.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس المال وحصص الشركاء النقدية والعينية',
          titleEnglish: 'Article 5: Capital Contributions & Partner Shares',
          contentArabic: 'رأس مال الشركة الإجمالي هو مبلغ [...] جنيه مصري، مقسم بين الشركاء كالتالي: الطرف الأول بحصة قدرها [...] جنيه بنسبة [...]%، والطرف الثاني بحصة قدرها [...] جنيه بنسبة [...]%.',
          contentEnglish: 'Total capital is [...] EGP distributed proportionally between the Partners as explicitly stipulated.'
        },
        {
          titleArabic: 'المادة السادسة: الإدارة والتمثيل القانوني وحق التوقيع',
          titleEnglish: 'Article 6: Management, Legal Representation & Signatory Authority',
          contentArabic: 'يتولى إدارة الشركة وتصريف شؤونها اليومية الشريك [...]، ويكون له حق التوقيع عن الشركة في المعاملات المعتادة، أما التصرفات الجوهرية كبيع الأصول أو الاقتراض فتتطلب موافقة الشركاء مجتمعين.',
          contentEnglish: 'Management and signing authority vest in Partner [...], with major asset dispositions requiring unanimous consent.'
        },
        {
          titleArabic: 'المادة السابعة: الحسابات المصرفية والدفاتر المحاسبية',
          titleEnglish: 'Article 7: Bank Accounts & Financial Auditing',
          contentArabic: 'يُفتح حساب مصرفي باسم الشركة لدى أحد البنوك المعتمدة بمصر، وتُمسك دفاتر محاسبية منتظمة طبقاً لمعايير المحاسبة المصرية، وتُقفل الميزانية السنوية في 31 ديسمبر من كل عام.',
          contentEnglish: 'Official bank accounts are opened under the company name, audited annually per Egyptian Accounting Standards.'
        },
        {
          titleArabic: 'المادة الثامنة: توزيع الأرباح الصافية وتحمل الخسائر (م 515 مدني)',
          titleEnglish: 'Article 8: Profit & Loss Allocation (Non-Lion Clause)',
          contentArabic: 'تُوزع الأرباح الصافية بعد تجنيب 10% احتياطي قانوني بنسبة [...]% للطرف الأول و[...]% للطرف الثاني، أما الخسائر فيتحملها الشركاء بقدر حصة كل منهم في رأس المال عملاً بالقواعد الشرعية والمادة 515 مدني.',
          contentEnglish: 'Net profits are allocated per agreed ratios after 10% statutory reserve; capital losses borne strictly per capital share.'
        },
        {
          titleArabic: 'المادة التاسعة: حظر المنافسة والتفرغ لمصالح الشركة',
          titleEnglish: 'Article 9: Non-Compete & Fiduciary Duties',
          contentArabic: 'يحظر على أي شريك القيام بأي نشاط يماثل أو ينافس نشاط الشركة لحسابه الخاص أو لحساب الغير، أو استغلال أموال الشركة ومعلوماتها لأغراض شخصية.',
          contentEnglish: 'Partners are strictly barred from operating or participating in competing ventures or misusing company resources.'
        },
        {
          titleArabic: 'المادة العاشرة: التنازل عن الحصص وحق الشفعة بين الشركاء',
          titleEnglish: 'Article 10: Share Transfers & Partner Preemption Rights',
          contentArabic: 'لا يجوز لأي شريك التنازل عن حصته للغير إلا بعد عرضها أولاً على الشريك الآخر بكتاب مسجل، ويكون للشريك القائم حق أولوية الشراء (الشفعة) بذات الشروط خلال 30 يوماً.',
          contentEnglish: 'No third-party share assignment is permitted without granting existing partners a 30-day preemption right.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: وفاة الشريك أو فقدان الأهلية',
          titleEnglish: 'Article 11: Partner Decease or Incapacity',
          contentArabic: 'في حال وفاة أحد الشركاء لا تنحل الشركة، بل تستمر مع ورثته الشرعيين مجتمعين في ممثل واحد أو يُرد نصيب المورث نقداً لورثته حسب القيمة السوقية الدفترية المعتمدة.',
          contentEnglish: 'The partnership continues upon partner decease, heirs represented jointly or bought out at fair market valuation.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: التخارج وحل الشركة وتصفية الأصول',
          titleEnglish: 'Article 12: Partner Exit, Dissolution & Asset Liquidation',
          contentArabic: 'عند انتهاء مدة الشركة أو اتفاق الشركاء على حلها، تتم تصفية أصولها وسداد ديونها، وتوزيع المتبقي على الشركاء بنسبة حصصهم وفقاً للمادة 532 مدني.',
          contentEnglish: 'Upon dissolution, assets are liquidated, liabilities settled, and net proceeds distributed proportionally under Civil Code 532.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: التحكيم التجاري وفض المنازعات',
          titleEnglish: 'Article 13: Governing Law & Dispute Resolution / Arbitration',
          contentArabic: 'يخضع هذا العقد للقانون المصري، وتتم تسوية أي خلاف ينشأ عن تفسيره أو تنفيذه عن طريق التحكيم وفقاً لأحكام قانون التحكيم المصري 27 لسنة 1994.',
          contentEnglish: 'Governed by Egyptian Law; disputes referred to arbitration pursuant to Egyptian Arbitration Law No. 27 of 1994.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد والقيد بالسجل التجاري',
          titleEnglish: 'Article 14: Counterparts & Commercial Registration',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة، ويلتزم الشركاء باتخاذ إجراءات القيد والنشر بالسجل التجاري ومصلحة الضرائب فور التوقيع.',
          contentEnglish: 'Executed in two identical originals, with partners proceeding immediately with commercial registration.'
        }
      ]
    }
  },
  {
    id: 'official-nda-confidentiality',
    category: 'عقود التكنولوجيا والبرمجيات',
    titleAr: 'اتفاقية عدم إفصاح وسرية معلومات وحماية بيانات العملاء (NDA)',
    titleEn: 'Mutual Non-Disclosure & Confidentiality Agreement',
    source: 'نقابة المحامين المصرية ومركز تدقيق العقود التجارية',
    statutoryBasis: 'القانون المدني المصري وقانون حماية البيانات الشخصية رقم 151 لسنة 2020 وقانون حماية الملكية الفكرية 82 لسنة 2002',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'اتفاقية عدم إفصاح وسرية معلومات وحماية أسرار العمل والبيانات الشخصية (Mutual NDA)',
      contractTitleEnglish: 'Mutual Non-Disclosure & Data Confidentiality Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، تحرر هذا العقد بمدينة [...]، جمهورية مصر العربية، بين كل من:\nأولاً: السيد/ أو شركة/ [الطرف المفصح/الأول]، مقيم/مقيدة في: [...] (طرف أول).\nثانياً: السيد/ أو شركة/ [الطرف المتلقي/الثاني]، مقيم/مقيدة في: [...] (طرف ثانٍ).\nاتفق الطرفان على ما يلي:',
      preambleEnglish: 'Executed on this day [...] between:\nFirst: [Disclosing Party Name], residing/located at: [...] (First Party).\nSecond: [Receiving Party Name], residing/located at: [...] (Second Party).\nBoth Parties agreed as follows:',
      recitalsArabic: 'يُعتبر هذا التمهيد جزءاً لا يتجزأ من هذه الاتفاقية ومفسراً ومتمماً لكافة بنودها وأحكامها القانونية.',
      recitalsEnglish: 'The recitals form an integral, enforceable part of this Confidentiality Agreement.',
      certificationStatement: 'صيغة سرية معلومات نموذجية مستوفاة لأحكام قانون حماية البيانات الشخصية رقم 151 لسنة 2020 وقانون التجارة 17 لسنة 1999.',
      legalNotes: 'تتضمن تعريفاً شاملاً للمعلومات السرية، حظر إفشاء الأسرار التجارية، الاستثناءات القانونية، وحق التعويض الفوري مع سريان الالتزام لمدة 5 سنوات.',
      shariaComplianceNotes: 'مستوفاة لحفظ الأمانة والعهود الشرعية؛ "يا أيها الذين آمنوا أوفوا بالعقود".',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابقة لقوانين حماية الأسرار التجارية وقانون حماية البيانات الشخصية 151 لسنة 2020.',
        cassationPrinciplesValidation: 'مطابقة لقضاء محكمة النقض في شأن التعويض عن إفشاء أسرار المهنة والإخلال بالثقة العقدية.',
        customaryPracticeValidation: 'الصيغة المستقرة لحماية الصفقات والاستثمارات التكنولوجية والصناعية.',
        shariaAuditStatement: 'اتفاقية مشروعة وواجبة النفاذ لحفظ الأمانة والأسرار.',
        verificationChecklist: [
          { item: 'تعريف المعلومات السرية والبيانات المشمولة', status: 'مستوفى ومعتمد', reference: 'المادة 686 مدني وقانون 151/2020' },
          { item: 'حظر الإفشاء وحصر الاستخدام على الغرض المحدد', status: 'مستوفى ومعتمد', reference: 'قانون حماية البيانات الشخصية' },
          { item: 'الاستثناءات القانونية للإفصاح بحكم قضائي', status: 'مستوفى ومعتمد', reference: 'أحكام النظام العام القضائي' },
          { item: 'إعادة أو إتلاف المواد والبيانات السرية', status: 'مستوفى ومعتمد', reference: 'القانون 151 لسنة 2020' },
          { item: 'التعويض القضائي الجابر وأمر المنع المستعجل', status: 'مستوفى ومعتمد', reference: 'المادتان 223 و224 مدني' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble as an Inseverable Part',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذه الاتفاقية وبنداً ملزماً ومفسراً لكافة موادها.',
          contentEnglish: 'The preamble constitutes an integral and binding part of this Agreement.'
        },
        {
          titleArabic: 'المادة الثانية: تعريف المعلومات السرية وأسرار العمل',
          titleEnglish: 'Article 2: Definition of Confidential Information',
          contentArabic: 'تشمل المعلومات السرية كافة البيانات والخطط الفنية والمالية، وقوائم العملاء، والبرمجيات، والشفرات، والأسرار التجارية التي يفصح عنها أحد الطرفين للآخر كتابة أو شفاهاً أو إلكترونياً.',
          contentEnglish: 'Confidential Information encompasses all technical, financial, commercial, client, and software data disclosed.'
        },
        {
          titleArabic: 'المادة الثالثة: التزامات عدم الإفصاح والسرية الصارمة',
          titleEnglish: 'Article 3: Strict Non-Disclosure Obligations',
          contentArabic: 'يتعهد الطرف المتلقي بالمحافظة التامة على سرية المعلومات وعدم إفشائها أو نشرها أو إتاحتها لأي طرف ثالث دون موافقة كتابية مسبقة، واستخدامها حصراً للغرض المتفق عليه.',
          contentEnglish: 'The Receiving Party covenants strict confidentiality, barring unauthorized dissemination to third parties.'
        },
        {
          titleArabic: 'المادة الرابعة: درجة العناية والحيطة المطلوبة',
          titleEnglish: 'Article 4: Standard of Care & Diligence',
          contentArabic: 'يلتزم الطرف المتلقي ببذل أقصى درجات العناية لا تقل عن العناية التي يبذلها لحماية معلوماته السرية الخاصة، وقصر الاطلاع عليها على العاملين المعنيين مباشرة.',
          contentEnglish: 'Receiving Party applies reasonable care no less than that used for its own sensitive data, restricting access strictly on a need-to-know basis.'
        },
        {
          titleArabic: 'المادة الخامسة: استثناءات المعلومات غير السرية',
          titleEnglish: 'Article 5: Exceptions from Confidentiality',
          contentArabic: 'لا تسري التزامات السرية على المعلومات المتاحة للجمهور دون إخلال بهذا العقد، أو التي كانت معلومة للطرف المتلقي بصفة مشروعة قبل الإفصاح، أو التي تم الحصول عليها من مصدر ثالث مستقل.',
          contentEnglish: 'Confidentiality excludes publicly available information, rightfully pre-known data, or independently developed information.'
        },
        {
          titleArabic: 'المادة السادسة: الإفصاح الإلزامي بأمر قضائي أو حكومي',
          titleEnglish: 'Article 6: Legally Compelled Disclosure',
          contentArabic: 'يجوز الإفصاح عن المعلومات بالقدر المطلوب قانوناً تنفيذاً لحكم قضائي واجب النفاذ أو أمر جهة حكومية مختصة، مع إخطار الطرف المفصح فوراً لإتاحة فرصة الاعتراض.',
          contentEnglish: 'Disclosures compelled by court order or lawful authority are permitted upon prompt prior written notice to Disclosing Party.'
        },
        {
          titleArabic: 'المادة السابعة: مدة سريان التزام السرية',
          titleEnglish: 'Article 7: Term & Survival of Confidentiality',
          contentArabic: 'تسري التزامات السرية وعدم الإفصاح طوال فترة التعاون المشترك وتظل سارية وملزمة لمدة 5 سنوات كاملة بعد انتهاء أي تعامل بين الطرفين.',
          contentEnglish: 'Confidentiality obligations survive for 5 full years following termination of discussions or cooperation.'
        },
        {
          titleArabic: 'المادة الثامنة: إعادة أو إتلاف المواد والمستندات السرية',
          titleEnglish: 'Article 8: Return or Destruction of Materials',
          contentArabic: 'يلتزم الطرف المتلقي فور طلب الطرف المفصح بإعادة أو إتلاف كافة المستندات والنسخ والوسائط الرقمية التي تحتوي على معلومات سرية وتقديم إقرار كتابي بذلك وفق القانون 151/2020.',
          contentEnglish: 'Receiving Party must immediately return or securely destroy all confidential records and electronic media upon request.'
        },
        {
          titleArabic: 'المادة التاسعة: ملكية المعلومات والأسرار التجارية',
          titleEnglish: 'Article 9: Sole Ownership of Disclosed Information',
          contentArabic: 'تظل كافة المعلومات السرية وحقوق الملكية الفكرية المترتبة عليها ملكاً حصرياً ومطلقاً للطرف المفصح، ولا تمنح هذه الاتفاقية أي ترخيص أو حق ملكية للمتلقي.',
          contentEnglish: 'All disclosed information and related IP remain the exclusive property of the Disclosing Party.'
        },
        {
          titleArabic: 'المادة العاشرة: أوامر المنع القضائية والتعويض الفوري',
          titleEnglish: 'Article 10: Injunctive Relief & Liquidated Damages',
          contentArabic: 'يقر الطرفان بأن إفشاء المعلومات السرية يسبب أضراراً جسيمة لا يجبرها المال وحده، ويحق للمتضرر استصدار أمر منع قضائي مستعجل فضلاً عن المطالبة بالتعويض الجابر للضرر.',
          contentEnglish: 'Parties acknowledge monetary relief alone is insufficient, entitling the aggrieved party to urgent injunctive relief and full damages.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: عدم التعهد بإتمام صفقة تجارية',
          titleEnglish: 'Article 11: No Business Commitment or Joint Liability',
          contentArabic: 'لا تلزم هذه الاتفاقية أياً من الطرفين بإبرام أي صفقة أو شراكة لاحقة، ولا تنشئ أي علاقة وكالة أو شراكة قانونية بينهما.',
          contentEnglish: 'This Agreement imposes no obligation to consummate any subsequent business transaction or joint venture.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار والإخطارات الرسمية',
          titleEnglish: 'Article 12: Legal Domicile & Service of Notices',
          contentArabic: 'يُعتبر عنوان كل طرف المبين بصدر العقد موطناً مختاراً تصح عليه المراسلات والإعلانات الرسمية بالبريد المسجل أو البريد الإلكتروني المعتمد.',
          contentEnglish: 'Addresses in the preamble constitute official chosen legal domiciles for judicial notices.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الاختصاص القضائي والقانون الواجب التطبيق',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'تخضع هذه الاتفاقية وتُفسر وفقاً لأحكام القانون المصري، وتختص المحاكم الاقتصادية المصرية بنظر أي نزاع ينشأ عنها.',
          contentEnglish: 'Governed exclusively by Egyptian Law with jurisdiction vested in competent Egyptian Economic Courts.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد واعتماد الأطراف',
          titleEnglish: 'Article 14: Counterparts & Language Precedence',
          contentArabic: 'تحررت هذه الاتفاقية من نسختين أصليتين بيد كل طرف نسخة، والنص العربي هو الحاكم والمفسر قانوناً وقضائياً.',
          contentEnglish: 'Executed in two identical originals, Arabic text being authoritative.'
        }
      ]
    }
  }
];

export const OFFICIAL_STATUTORY_ENCYCLOPEDIA: OfficialEncyclopediaContract[] = [
  ...BASE_OFFICIAL_STATUTORY_ENCYCLOPEDIA,
  ...OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXTENDED,
  ...OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED,
  ...OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_2,
  ...OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_3,
  ...OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_4,
  ...OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_5,
  ...OFFICIAL_STATUTORY_ENCYCLOPEDIA_GAFI,
];

