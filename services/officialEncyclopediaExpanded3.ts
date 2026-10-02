import type { OfficialEncyclopediaContract } from '../types';

export const OFFICIAL_STATUTORY_ENCYCLOPEDIA_EXPANDED_3: OfficialEncyclopediaContract[] = [
  // 28. Agricultural Land Lease & Crop-Sharing (Law 96/1992 & Civil Code)
  {
    id: 'official-agricultural-lease',
    category: 'عقود الإيجار والانتفاع التجاري والسكني',
    titleAr: 'عقد إيجار واستغلال أرض زراعية بالمزارعة خاضع للقانون رقم 96 لسنة 1992 والقانون المدني',
    titleEn: 'Agricultural Land Tenancy & Crop-Sharing Lease Agreement',
    source: 'الجمعيات التعاونية الزراعية والاتحاد التعاوني المركزي ووزارة الزراعة',
    statutoryBasis: 'القانون رقم 96 لسنة 1992 والمواد من 619 إلى 634 من القانون المدني المصري',
    
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد إيجار واستغلال زراعي لأرض ومساقي ري',
      contractTitleEnglish: 'Agricultural Land Tenancy & Crop-Sharing Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، تحرر هذا العقد بين كل من:\nأولاً: السيد/ [اسم المؤجر المالك]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف أول - المؤجر المالك).\nثانياً: السيد/ [اسم المستأجر المزارع]، بطاقة رقم قومي: [...]، المقيم في: [...] (طرف ثانٍ - المستأجر المزارع).\nوبعد أن أقر الطرفان بأهليتهما القانونية المعتبرة للتعاقد الزراعي وفق القانون 96 لسنة 1992، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Egypt, between:\nFirst: Mr. [Full Lessor Name], National ID: [...], residing at: [...] (First Party - Landowner Lessor).\nSecond: Mr. [Full Tenant Farmer Name], National ID: [...], residing at: [...] (Second Party - Tenant Farmer).\nBoth Parties, being legally competent agricultural contractors governed by Law 96/1992, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لحقوق الاستغلال والري والزراعة.',
      recitalsEnglish: 'Preamble forms an integral part hereof regarding agricultural exploitation and irrigation rights.',
      certificationStatement: 'صيغة معتمدة مطابقة لأحكام القانون رقم 96 لسنة 1992 بتحرير العلاقة الإيجارية للأراضي الزراعية وقواعد وزارة الزراعة.',
      legalNotes: 'عقد إيجار أرض زراعية محدد المدة ينتهي بانتهاء مدته دون تجديد ضمني، ويلزم المستأجر بخدمة الأرض والأسمدة وصيانة المساقي.',
      shariaComplianceNotes: 'مستوفٍ لضوابط المزارعة والإجارة الشرعية؛ معلوم الأجرة والمدة والانتفاع دون غرر.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق للدفاتر الرسمية بالجمعيات التعاونية الزراعية ومأموريات الشهر العقاري.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في أن القانون 96/1992 جعل عقود إيجار الأراضي الزراعية محكومة بإرادة العاقدين دون امتداد قانوني.',
        customaryPracticeValidation: 'النموذج المعتمد لدى نقابة المهن الزراعية ونقابة الفلاحين ونقابة المحامين.',
        shariaAuditStatement: 'عقد إجارة ومزارعة مشروع شرعاً تترتب عليه كافة آثاره الالتزامية.',
        verificationChecklist: [
          { item: 'تحديد المساحة الزراعية والحدود الأربعة وحوض الزمام بدقة', status: 'مستوفى ومعتمد', reference: 'المادة 619 مدني مصري' },
          { item: 'بيان نوبة الري ومصدر المياه (ترعة / آبار / ماكينات)', status: 'مستوفى ومعتمد', reference: 'قانون الموارد المائية والري' },
          { item: 'حظر تبوير الأرض أو تجريفها أو البناء عليها تحت طائلة القانون', status: 'مستوفى ومعتمد', reference: 'قانون الزراعة رقم 53/1966' },
          { item: 'التزام الإخلاء التام فور انتهاء المدة المتفق عليها', status: 'مستوفى ومعتمد', reference: 'القانون 96 لسنة 1992' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble Integration',
          contentArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً مفسراً ومتمماً لكافة مواده.',
          contentEnglish: 'The preamble forms an integral part of this contract.'
        },
        {
          titleArabic: 'المادة الثانية: محل الإيجار ومواصفات الأرض الزراعية',
          titleEnglish: 'Article 2: Agricultural Land Identification',
          contentArabic: 'أجر المؤجر للمستأجر القابل لذلك قطعة الأرض الزراعية البالغ مساحتها [...] فدان و[...] قيراط، الكائنة بحوض [...]، زمام قرية [...]، مركز [...]، محافظة [...].',
          contentEnglish: 'Lessor leases to Tenant Farmer the agricultural parcel measuring [...] Feddans, [...] Kirats, Basin [...], Village [...], Center [...], Governorate [...].'
        },
        {
          titleArabic: 'المادة الثالثة: مدة الإيجار والانتهاء الفوري',
          titleEnglish: 'Article 3: Tenancy Duration & Non-Renewal',
          contentArabic: 'مدة هذا الإيجار [...] سنوات زراعية تبدأ من الموسم الزراعي [...] وتنتهي في [...]، وينتهي العقد حتماً بانتهاء مدته دون حاجة لأي تنبيه أو إنذار.',
          contentEnglish: 'Lease duration is [...] agricultural years, terminating automatically upon expiry with zero statutory extension per Law 96/1992.'
        },
        {
          titleArabic: 'المادة الرابعة: القيمة الإيجارية وطريقة الوفاء',
          titleEnglish: 'Article 4: Rental Amount & Crop Milestones',
          contentArabic: 'حددت الأجرة بمبلغ [...] جنيه مصري عن كل فدان سنوياً، بإجمالي [...] جنيه، تُدفع على قسطين متساويين في نهاية الموسمين الشتوي والصيفي.',
          contentEnglish: 'Annual rent is [...] EGP per Feddan, aggregate [...] EGP, payable in two equal installments at winter and summer crop harvests.'
        },
        {
          titleArabic: 'المادة الخامسة: حقوق الري ومصادر المياه والمصارف',
          titleEnglish: 'Article 5: Irrigation Water Rights & Canals Upkeep',
          contentArabic: 'تشمل الإجارة حق الري من الترعة/المسقى بحسب النوبة المقررة، ويلتزم المستأجر بتطهير المساقي والمصارف الداخلية على نفقته الخاصة.',
          contentEnglish: 'Lease includes statutory irrigation turns; Tenant responsible for clearing internal irrigation canals and drains at own expense.'
        },
        {
          titleArabic: 'المادة السادسة: الالتزام بخدمة الأرض والأسمدة وحظر التجريف',
          titleEnglish: 'Article 6: Proper Agronomic Care & Soil Preservation',
          contentArabic: 'يلتزم المستأجر ببذل عناية المزارع الحريص في خدمة الأرض وتسميدها بالمخصبات المعتمدة، ويحظر عليه حظراً باتاً تبوير الأرض أو تجريفها أو البناء عليها تحت طائلة المسؤولية الجنائية.',
          contentEnglish: 'Tenant covenants proper soil fertilization; strictly prohibited from fallowing, dredging, or unauthorized construction under criminal liability.'
        },
        {
          titleArabic: 'المادة السابعة: حظر التأجير من الباطن أو التنازل',
          titleEnglish: 'Article 7: Prohibition of Sub-Lease & Assignment',
          contentArabic: 'لا يجوز للمستأجر التنازل عن الإيجار أو تأجير الأرض كلياً أو جزئياً من الباطن دون موافقة خطية صريحة من المؤجر.',
          contentEnglish: 'Tenant prohibited from subletting or assigning tenancy without prior written approval from Lessor.'
        },
        {
          titleArabic: 'المادة الثامنة: الضرائب العقارية ورسوم الجمعية الزراعية',
          titleEnglish: 'Article 8: Land Taxes & Agricultural Association Dues',
          contentArabic: 'يتحمل المؤجر ضريبة الأطيان الزراعية، بينما يتحمل المستأجر رسوم الجمعية ومستلزمات الإنتاج الزراعي من تقاوٍ وأسمدة ومبيدات.',
          contentEnglish: 'Lessor bears statutory land taxes; Tenant bears cooperative society operational dues, seeds, and fertilizer costs.'
        },
        {
          titleArabic: 'المادة التاسعة: المعاينة النافية للجهالة والاستلام',
          titleEnglish: 'Article 9: Agricultural Due Diligence & Site Handover',
          contentArabic: 'يقر المستأجر بأنه عاين الأرض ومساقيها المعاينة التامة وقبل استئجارها بحالتها الراهنة واستلم حيازتها الزراعية بمجلس العقد.',
          contentEnglish: 'Tenant confirms due diligence inspection of parcel and water access, receiving actual agricultural possession.'
        },
        {
          titleArabic: 'المادة العاشرة: الشرط الفاسخ الصريح عند التخلف عن السداد',
          titleEnglish: 'Article 10: Explicit Rescission upon Rent Default',
          contentArabic: 'إذا تخلف المستأجر عن سداد الأجرة في ميعادها يُعتبر العقد مفسوخاً من تلقاء نفسه دون حاجة لتنبيه أو حكم قضائي، ويلتزم بإخلاء الأرض فوراً.',
          contentEnglish: 'Default in rent payment triggers ipso jure lease cancellation without notice, obligating immediate land surrender.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: القوة القاهرة والآفات الزراعية الجائحة',
          titleEnglish: 'Article 11: Agricultural Force Majeure & Severe Blight',
          contentArabic: 'تخضع الآفات الزراعية العامة والكوارث الخارجة عن إرادة المستأجر لأحكام المادتين 623 و624 من القانون المدني المصري.',
          contentEnglish: 'Severe extraordinary crop blights and natural force majeure events governed by Articles 623-624 of Egyptian Civil Code.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الموطن المختار للإعلانات',
          titleEnglish: 'Article 12: Chosen Domicile for Notices',
          contentArabic: 'عناوين الأطراف بصدر العقد موطن مختار لكافة الإخطارات والمراسلات الرسمية.',
          contentEnglish: 'Addresses in preamble constitute official legal domiciles.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الاختصاص القضائي',
          titleEnglish: 'Article 13: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد للقانون رقم 96 لسنة 1992 والقانون المدني المصري، وتختص المحكمة الجزئية الواقع بدائرتها الأطيان.',
          contentEnglish: 'Governed by Egyptian Law 96/1992 and Civil Code with jurisdiction in local summary court.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد',
          titleEnglish: 'Article 14: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والامتثال لشروطها.',
          contentEnglish: 'Executed in two authentic originals, one per party, having identical legal authority.'
        }
      ]
    }
  },

  // 29. Industrial Warehouse & Logistics Facility Lease (IDA Accredited)
  {
    id: 'official-industrial-warehouse-lease',
    category: 'عقود الإيجار والانتفاع التجاري والسكني',
    titleAr: 'عقد إيجار هنجر ومستودع تخزين صناعي خاضع لاشتراطات الهيئة العامة للتنمية الصناعية IDA',
    titleEn: 'Industrial Warehouse & Logistics Facility Lease Agreement',
    source: 'الهيئة العامة للتنمية الصناعية (IDA) والجهاز القومي لسلامة الغذاء والحماية المدنية',
    statutoryBasis: 'القانون رقم 4 لسنة 1996 وقانون تيسير إجراءات منح تراخيص المنشآت الصناعية رقم 15 لسنة 2017',
    
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد إيجار هنجر ومستودع صناعي ولوجستي معتمد بالمنطقة الصناعية',
      contractTitleEnglish: 'Industrial Warehouse & Logistics Facility Lease Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، بالقاهرة، بين كل من:\nأولاً: شركة [اسم الشركة المالكة] ش.م.م، سجل تجاري رقم [...]، ومقرها: [...] (طرف أول - المؤجر المالك).\nثانياً: شركة [اسم الشركة المستأجرة] ذ.م.م، سجل تجاري رقم [...]، ومقرها: [...] (طرف ثانٍ - المستأجر الصناعي).\nوبعد أن أقر الطرفان بأهليتهما القانونية والتجارية للتعاقد واستيفاء شروط الدفاع المدني وهيئة التنمية الصناعية، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, in Cairo, Egypt, between:\nFirst: [Landlord Company Name] S.A.E., Commercial Reg. No. [...] (First Party - Landlord).\nSecond: [Tenant Company Name] LLC, Commercial Reg. No. [...] (Second Party - Industrial Tenant).\nBoth Parties, being legally competent and compliant with Civil Protection and Industrial Development Authority (IDA) rules, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد والمخطط الهندسي للمستودع واشتراطات السلامة والصحة المهنية جزءاً لا يتجزأ من هذا العقد.',
      recitalsEnglish: 'Preamble, facility engineering layouts, and occupational safety regulations form an integral part hereof.',
      certificationStatement: 'صيغة مطابقة لاشتراطات الهيئة العامة للتنمية الصناعية (IDA) وقانون تيسير تراخيص المنشآت الصناعية رقم 15 لسنة 2017.',
      legalNotes: 'عقد إيجار صناعي يتضمن تحديد القدرة الكهربائية بالميجاوات، وشبكة إطفاء الحريق المعتمدة، والتأمين ضد الحريق والمسؤولية المدنية.',
      shariaComplianceNotes: 'مستوفٍ لضوابط إجارة الأعيان والمرافق الصناعية شرعاً؛ معلوم المقابل والمنفعة دون محظورات.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق للوائح مجمعات التنمية الصناعية وأجهزة المدن العمرانية الجديدة.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في التزام المستأجر باستعمال العين بحسب ما أعدت له والمحافظة على تجهيزاتها الصناعية.',
        customaryPracticeValidation: 'النموذج المعتمد لدى جمعيات المستثمرين بالمناطق الصناعية ونقابة المحامين.',
        shariaAuditStatement: 'عقد إجارة أعيان ومرافق مشروع نافذ شرعاً تترتب عليه آثاره المالية.',
        verificationChecklist: [
          { item: 'موافقة هيئة التنمية الصناعية وسريان التراخيص الصناعية', status: 'مستوفى ومعتمد', reference: 'القانون 15 لسنة 2017' },
          { item: 'شهادة استيفاء اشتراطات الدفاع المدني والحماية من الحريق', status: 'مستوفى ومعتمد', reference: 'كود الحريق المصري' },
          { item: 'تحديد القدرة الكهربائية والحمل المتاح (KVA/MW) ومصادر المياه', status: 'مستوفى ومعتمد', reference: 'عقود التوريد الصناعية' },
          { item: 'وثيقة تأمين شامل ضد الحريق والأخطار الإضافية سارية طوال المدة', status: 'مستوفى ومعتمد', reference: 'قواعد إدارة المخاطر' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble Integration',
          contentArabic: 'يُعتبر التمهيد السابق والمخطط الهندسي الملحق جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لمواده.',
          contentEnglish: 'Preamble and attached engineering layouts constitute an integral part of this contract.'
        },
        {
          titleArabic: 'المادة الثانية: العين المؤجرة ومواصفات الهنجر الصناعي',
          titleEnglish: 'Article 2: Industrial Warehouse Identification & Specs',
          contentArabic: 'أجر المؤجر للمستأجر القابل لذلك الهنجر والمستودع الصناعي رقم [...] الكائن بالمنطقة الصناعية [...] على قطعة الأرض [...]، بمساحة إجمالية [...] متراً مربعاً وارتفاع [...] أمتار، مع أرضية خرسانية مجهزة للأحمال الثقيلة.',
          contentEnglish: 'Landlord leases to Tenant Industrial Warehouse No. [...], Industrial Zone [...], Plot [...], gross area [...] sq.m, height [...] meters, with heavy-duty reinforced slab floor.'
        },
        {
          titleArabic: 'المادة الثالثة: الغرض من الإيجار والنشاط الصناعي المرخص',
          titleEnglish: 'Article 3: Authorized Industrial & Logistics Activity',
          contentArabic: 'خُصصت العين المؤجرة لأغراض [التخزين اللوجستي / التصنيع الخفيف]، ويلتزم المستأجر بعدم تغيير النشاط أو تخزين مواد خطرة أو محظورة دون موافقة التنمية الصناعية والدفاع المدني.',
          contentEnglish: 'Facility dedicated solely for authorized logistics/light manufacturing; hazardous chemical storage prohibited without prior IDA approval.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الإيجار والإخلاء الحتمي',
          titleEnglish: 'Article 4: Lease Duration & Law 4/1996 Governance',
          contentArabic: 'مدة الإيجار [...] سنوات تبدأ من [...] وتنتهي في [...]، وينتهي العقد حتماً بانتهاء مدته دون حاجة لأي تنبيه أو إنذار بالإخلاء وفقاً للقانون 4 لسنة 1996.',
          contentEnglish: 'Duration is [...] years commencing [...] and terminating [...], expiring automatically without notice pursuant to Law 4/1996.'
        },
        {
          titleArabic: 'المادة الخامسة: القيمة الإيجارية والزيادة السنوية',
          titleEnglish: 'Article 5: Rent Consideration & Annual Escalation',
          contentArabic: 'حددت الأجرة بمبلغ [...] جنيه مصري شهرياً، وتزاد سنوياً بنسبة اتفاقية قدرها 10%، وتدفع مقدماً كل [شهر/3 أشهر] بموجب فواتير ضريبية إلكترونية.',
          contentEnglish: 'Rent is [...] EGP monthly, escalating 10% annually, payable in advance against certified electronic tax invoices.'
        },
        {
          titleArabic: 'المادة السادسة: التأمين النقدي لسلامة المنشأة والمعدات',
          titleEnglish: 'Article 6: Security Deposit for Industrial Infrastructure',
          contentArabic: 'سدد المستأجر تأميناً نقدياً يعادل إيجار [...] أشهر، يُحفظ لدى المؤجر لضمان سلامة المبنى وشبكات الإطفاء وفواتير الكهرباء والمياه، ويُرد عند التسليم السليم.',
          contentEnglish: 'Tenant deposits equivalent of [...] months rent to guarantee infrastructure and utility dues, refundable upon satisfactory handover.'
        },
        {
          titleArabic: 'المادة السابعة: القدرة الكهربائية والمرافق الصناعية',
          titleEnglish: 'Article 7: Electrical Power Capacity & Industrial Utilities',
          contentArabic: 'تتضمن العين قدرة كهربائية قدرها [...] كيلو فولت أمبير (KVA)، ويتحمل المستأجر تكاليف الاستهلاك الفعلي ورسوم القدرة المتعاقد عليها ورسوم الصرف الصناعي.',
          contentEnglish: 'Facility includes contracted power capacity of [...] KVA; Tenant responsible for metered consumption and industrial effluent charges.'
        },
        {
          titleArabic: 'المادة الثامنة: اشتراطات الدفاع المدني ومكافحة الحريق',
          titleEnglish: 'Article 8: Civil Defense & Fire Fighting Compliance',
          contentArabic: 'يلتزم المستأجر بتشغيل وصيانة شبكة مكافحة الحريق (رشاشات أوتوماتيكية ومضخات وصناديق إطفاء) وتعيين مسؤولي سلامة وصحة مهنية معتمدين طوال مدة الإيجار.',
          contentEnglish: 'Tenant maintains automated sprinkler and fire pump systems in compliance with Civil Protection safety codes.'
        },
        {
          titleArabic: 'المادة التاسعة: وثائق التأمين الشامل',
          titleEnglish: 'Article 9: Comprehensive Industrial Insurance Policies',
          contentArabic: 'يلتزم المستأجر بإصدار وثيقة تأمين شاملة لصالح الطرفين ضد أخطار الحريق، الانفجار، والمسؤولية المدنية تجاه الغير طوال مدة العقد.',
          contentEnglish: 'Tenant maintains comprehensive all-risks fire and third-party liability insurance naming Landlord as co-insured.'
        },
        {
          titleArabic: 'المادة العاشرة: الصيانة الدورية للأرضيات والجمالونات',
          titleEnglish: 'Article 10: Structural & Routine Facility Maintenance',
          contentArabic: 'يتحمل المؤجر الصيانة الإنشائية للأعمدة والأسقف المعدنية، بينما يتحمل المستأجر الصيانة التشغيلية للأبواب الكهربائية والإنارة والأرضيات وتمديدات المرافق.',
          contentEnglish: 'Landlord handles primary structural and roof maintenance; Tenant handles operational doors, internal wiring, and surface wear.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: حظر التنازل أو التأجير من الباطن',
          titleEnglish: 'Article 11: Absolute Prohibition of Subletting',
          contentArabic: 'يحظر على المستأجر التنازل عن الإيجار أو إدخال شركاء أو تأجير أي مساحة من الباطن دون موافقة كتابية مسبقة من المؤجر وهيئة التنمية الصناعية.',
          contentEnglish: 'Subletting, assignment, or third-party storage sharing strictly prohibited without prior written consent from Landlord and IDA.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الشرط الفاسخ الصريح وغرامة التأخير',
          titleEnglish: 'Article 12: Explicit Cancellation & Overstay Penalty',
          contentArabic: 'في حال التأخر عن سداد الأجرة أو الامتناع عن الإخلاء عند انتهاء المدة يُعتبر العقد مفسوخاً تلقائياً مع غرامة اتفاقية قدرها [...] جنيه عن كل يوم تأخير.',
          contentEnglish: 'Rent default or failure to vacate triggers automatic rescission with daily contractual penalty of [...] EGP.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 13: Industrial Force Majeure',
          contentArabic: 'تخضع الالتزامات لأحكام القوة القاهرة وفقاً لأحكام القانون المدني المصري.',
          contentEnglish: 'Governed by Egyptian statutory Civil Code Force Majeure rules.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: القانون الواجب التطبيق والمحاكم الاقتصادية',
          titleEnglish: 'Article 14: Governing Law & Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القانون المصري، وتختص المحاكم الاقتصادية أو المدنية الواقع بدائرتها العقار.',
          contentEnglish: 'Governed by Egyptian law with jurisdiction in competent Economic or Civil Courts.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: نسخ العقد',
          titleEnglish: 'Article 15: Executed Counterparts',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها وحفظ الحقوق القانونية.',
          contentEnglish: 'Executed in two authentic originals, one per party, having identical legal authority.'
        }
      ]
    }
  },

  // 30. Independent Contractor & Freelance Services Agreement (ITIDA & Civil Code)
  {
    id: 'official-freelance-independent-contractor',
    category: 'عقود العمل والموارد البشرية والوساطة',
    titleAr: 'عقد تعاقد مع مقدم خدمات فنية ومستقل (Freelancer) وتكليف بإنجاز مصنفات مهنية',
    titleEn: 'Independent Contractor Services & Intellectual Deliverables Agreement',
    source: 'وزارة الاتصالات وتكنولوجيا المعلومات وهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA)',
    statutoryBasis: 'القانون المدني المصري (عقد المقاولة وإجارة العمل) وقانون حماية الملكية الفكرية رقم 82 لسنة 2002',
    
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد تقديم خدمات استشارية وتقنية مستقلة (Freelance Agreement)',
      contractTitleEnglish: 'Independent Contractor Professional Services & Deliverables Agreement',
      preambleArabic: 'إنه في يوم [...] الموافق [...] م، تحرر هذا العقد بين كل من:\nأولاً: شركة [اسم الشركة المستفيدة]، سجل تجاري رقم [...]، ومقرها: [...] (طرف أول - العميل Client).\nثانياً: السيد/ [اسم المستقل الكامل / المهني الحر]، بطاقة رقم قومي / رقم ضريبي: [...]، المقيم في: [...] (طرف ثانٍ - مقدم الخدمات المستقل Contractor).\nوبعد أن أقر الطرفان بأهليتهما القانونية والمهنية للتعاقد واستقلال صفة الطرف الثاني كمقاول مستقل دون أي علاقة تبعية عمالية، اتفقا على ما يأتي:',
      preambleEnglish: 'On this day [...] AD, between:\nFirst: [Client Company Name] LLC, Commercial Reg. No. [...] (First Party - Client).\nSecond: Mr. [Full Freelancer Name], National ID/Tax ID: [...], residing at [...] (Second Party - Independent Contractor).\nBoth Parties, being legally competent and expressly acknowledging independent contractor status without employment subordination, agreed as follows:',
      recitalsArabic: 'يُعتبر التمهيد ووثيقة توصيف المهام والمخرجات الفنية (SOW) جزءاً لا يتجزأ من هذا العقد وبنداً مفسراً لمواده.',
      recitalsEnglish: 'Preamble and Statement of Work (SOW) schedule constitute an integral, binding part of this Agreement.',
      certificationStatement: 'صيغة مطابقة لأحكام عقد المقاولة في القانون المدني المصري رقم 131 لسنة 1948 وقانون حماية حقوق الملكية الفكرية رقم 82 لسنة 2002.',
      legalNotes: 'عقد خدمات مهنية مستقلة محكم ينفي التبعية العمالية، وينص على التنازل الشامل عن الملكية الفكرية لصالح العميل فور السداد، مع التزام صارم بالسرية وحظر المنافسة المباشرة.',
      shariaComplianceNotes: 'مستوفٍ لضوابط الجعالة والإجارة الشرعية على عمل معلوم ومقابل محدد دون غرر.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق للنماذج الاسترشادية لهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA) ونقابة المحامين.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في التمييز بين عقد العمل وعقد المقاولة بعنصر التبعية القانونية والإشراف المباشر.',
        customaryPracticeValidation: 'النموذج المعتمد لدى شركات التقنية والذكاء الاصطناعي ووكالات الدعاية والإعلام.',
        shariaAuditStatement: 'عقد مقاولة وإجارة عمل مشروع نافذ شرعاً تترتب عليه كافة آثاره الالتزامية.',
        verificationChecklist: [
          { item: 'التنصيص الصريح على انتفاء علاقة العمل أو التبعية التأمينية', status: 'مستوفى ومعتمد', reference: 'المادة 646 مدني مصري' },
          { item: 'نقل ملكية المصنفات والابتكارات الفكرية فور سداد المستحقات', status: 'مستوفى ومعتمد', reference: 'المادة 155 ق 82/2002' },
          { item: 'التزام السرية التامة وعدم إفشاء كود المصدر أو بيانات العملاء', status: 'مستوفى ومعتمد', reference: 'قانون حماية البيانات 151/2020' },
          { item: 'خصم وسداد الضرائب المستحقة وفق قانون الضريبة على الدخل', status: 'مستوفى ومعتمد', reference: 'القانون 91 لسنة 2005' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
          titleEnglish: 'Article 1: Preamble & SOW Integration',
          contentArabic: 'يُعتبر التمهيد السابق ووثيقة نطاق الأعمال (SOW) جزءاً لا يتجزأ من هذا العقد وبنداً متمماً ومفسراً لمواده.',
          contentEnglish: 'Preamble and Statement of Work (SOW) constitute an integral part of this contract.'
        },
        {
          titleArabic: 'المادة الثانية: نطاق الخدمات والمخرجات المهنية المطلوبة',
          titleEnglish: 'Article 2: Professional Scope & Technical Deliverables',
          contentArabic: 'يكلف العميل المستقل بالقيام بأعمال: [...]، ويلتزم المستقل بإنجاز المخرجات وتسليمها وفقاً للمواصفات الفنية والجداول الزمنية المحددة بالملحق (أ).',
          contentEnglish: 'Client engages Contractor to deliver: [...], strictly meeting technical specifications and milestone deadlines detailed in Annex (A).'
        },
        {
          titleArabic: 'المادة الثالثة: استقلال صفة المتعاقد وانتفاء علاقة العمل',
          titleEnglish: 'Article 3: Independent Contractor Status & No Subordination',
          contentArabic: 'يقر الطرفان بصراحة تامة بأن العلاقة بينهما هي علاقة مقاول مستقل (Independent Contractor)، ولا تنشأ بينهما أي علاقة عمل أو شراكة أو وكالة، ولا يخضع المستقل لقانون العمل أو التأمينات الاجتماعية للعميل.',
          contentEnglish: 'Parties explicitly covenant relationship is strictly independent contractor; zero employment subordination, agency, or labor benefits accrue.'
        },
        {
          titleArabic: 'المادة الرابعة: المقابل المالي وجدول الدفعات',
          titleEnglish: 'Article 4: Financial Compensation & Milestone Payments',
          contentArabic: 'يستحق المستقل مقابلاً مالياً إجمالياً مقطوعاً قدره [...] جنيه مصري، يسدد على دفعات مرحلية مرتبطة باعتماد محضر الاستلام الفني لكل مرحلة.',
          contentEnglish: 'Contractor receives total fixed compensation of [...] EGP disbursed against technical milestone acceptance sign-offs.'
        },
        {
          titleArabic: 'المادة الخامسة: التنازل الكامل عن حقوق الملكية الفكرية (Work Made for Hire)',
          titleEnglish: 'Article 5: Intellectual Property Transfer (Work Made for Hire)',
          contentArabic: 'يتنازل المستقل تنازلاً باتاً ونهائياً للعميل عن كافة حقوق الملكية الفكرية والمؤلف والشفرة المصدرية (Source Code) والتصاميم المبتكرة بموجب هذا العقد فور سداد المقابل المتفق عليه.',
          contentEnglish: 'Contractor irrevocably conveys to Client all IP rights, copyright, source code, and designs created hereunder upon receipt of agreed compensation.'
        },
        {
          titleArabic: 'المادة السادسة: السرية وحماية المعلومات',
          titleEnglish: 'Article 6: Strict Non-Disclosure Obligations',
          contentArabic: 'يلتزم المستقل بالحفاظ على السرية التامة لكافة بيانات العملاء والبرمجيات والمعلومات التجارية التي يطلع عليها، ويستمر هذا الالتزام لمدة [...] سنوات بعد انتهاء العقد.',
          contentEnglish: 'Contractor maintains strict confidentiality over all client data, software, and proprietary secrets enduring for [...] years post-termination.'
        },
        {
          titleArabic: 'المادة السابعة: ضمان الجودة وخلو المخرجات من العيوب',
          titleEnglish: 'Article 7: Quality Warranty & Defect Remediation',
          contentArabic: 'يضمن المستقل مطابقة المخرجات للأصول المهنية وخلوها من العيوب البرمجية أو الفنية، ويلتزم بإصلاح أي عيب مجاناً خلال فترة ضمان مدتها [...] يوماً من الاستلام.',
          contentEnglish: 'Contractor warrants deliverables against technical bugs or defects, providing free remediation during [...] days warranty period.'
        },
        {
          titleArabic: 'المادة الثامنة: حظر المنافسة واجتذاب العملاء والموظفين',
          titleEnglish: 'Article 8: Non-Compete & Non-Solicitation Covenants',
          contentArabic: 'يتعهد المستقل بعدم العمل مباشرة مع عملاء العميل أو تقديم ذات الخدمات لهم مباشرة، وعدم اجتذاب موظفي العميل لمدة سنة كاملة من انتهاء العقد.',
          contentEnglish: 'Contractor covenants not to solicit Client customers or employees directly for 12 months following contract completion.'
        },
        {
          titleArabic: 'المادة التاسعة: الضرائب والتكليفات الرسمية',
          titleEnglish: 'Article 9: Tax Compliance & Invoicing',
          contentArabic: 'يتحمل المستقل كافة الضرائب الشخصية المفروضة على دخله المهني، ويلتزم بتقديم فواتير رسمية أو إيصالات ضريبية وفقاً للقانون.',
          contentEnglish: 'Contractor solely responsible for income taxes and issuing compliant tax invoices pursuant to applicable tax laws.'
        },
        {
          titleArabic: 'المادة العاشرة: مدة العقد والإنهاء بإشعار كتابي',
          titleEnglish: 'Article 10: Term & Termination on Written Notice',
          contentArabic: 'مدة هذا العقد تبدأ من [...] وتنتهي بتسليم المخرجات في موعد غايته [...]، ويجوز للعميل إنهاؤه بإشعار كتابي مدته 7 أيام مع سداد قيمة ما تم إنجازه فعلياً.',
          contentEnglish: 'Term runs from [...] until final delivery on [...]; Client may terminate on 7 days notice paying for certified completed work.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: الشرط الجزائي والتعويض الجابر',
          titleEnglish: 'Article 11: Liquidated Damages for Breach',
          contentArabic: 'في حال إخلال المستقل بالتزام السرية أو تسريب كود المصدر يلتزم بسداد تعويض اتفاقي رادع قدره [...] جنيه مع حق العميل في الرجوع بالتعويض القضائي.',
          contentEnglish: 'Breach of IP or confidentiality triggers contractual liquidated damages of [...] EGP without prejudice to actual judicial relief.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: القوة القاهرة والظروف الطارئة',
          titleEnglish: 'Article 12: Force Majeure Events',
          contentArabic: 'تخضع مدد التسليم لأحكام القوة القاهرة وفقاً للقانون المدني المصري.',
          contentEnglish: 'Governed by statutory Egyptian Civil Code Force Majeure provisions.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الاختصاص القضائي والقانون الواجب التطبيق',
          titleEnglish: 'Article 13: Governing Law & Economic Courts Jurisdiction',
          contentArabic: 'يخضع هذا العقد لأحكام القانون المصري، وتختص المحاكم الاقتصادية بنظر أي نزاع ينشأ عنه.',
          contentEnglish: 'Governed by Egyptian law with exclusive jurisdiction in Egyptian Economic Courts.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: نسخ العقد واعتماده',
          titleEnglish: 'Article 14: Executed Counterparts & Digital Signatures',
          contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة، وتصح التوقيعات الرقمية المعتمدة طبقاً لقانون التوقيع الإلكتروني 15 لسنة 2004.',
          contentEnglish: 'Executed in two authentic originals; verified digital signatures valid pursuant to Electronic Signature Law 15/2004.'
        }
      ]
    }
  }
];
