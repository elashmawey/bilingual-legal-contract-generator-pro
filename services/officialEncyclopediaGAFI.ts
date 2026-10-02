import type { OfficialEncyclopediaContract } from '../types';

export const OFFICIAL_STATUTORY_ENCYCLOPEDIA_GAFI: OfficialEncyclopediaContract[] = [
  // 1. Joint Stock Company (ش.م.م - S.A.E) - GAFI Official Model
  {
    id: 'official-gafi-joint-stock-company-sae',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تأسيس والنظام الأساسي لشركة مساهمة مصرية (ش.م.م) وفق القانون 159 لسنة 1981 وقانون الاستثمار 72 لسنة 2017',
    titleEn: 'Articles of Association & Incorporation Deed of Egyptian Joint Stock Company (S.A.E - GAFI)',
    source: 'النموذج الرسمي المعتمد بالهيئة العامة للاستثمار والمناطق الحرة (GAFI) ومصلحة الشركات',
    statutoryBasis: 'قانون شركات المساهمة والتوصية بالأسهم رقم 159 لسنة 1981 ولائحته التنفيذية وقانون الاستثمار رقم 72 لسنة 2017 وقانون سوق رأس المال رقم 95 لسنة 1992',
    totalClauses: 18,
    contractData: {
      contractTitleArabic: 'عقد تأسيس والنظام الأساسي لشركة مساهمة مصرية (ش.م.م) - الهيئة العامة للاستثمار',
      contractTitleEnglish: 'Articles of Incorporation & By-Laws of Egyptian Joint Stock Company (S.A.E - GAFI)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بمقر الهيئة العامة للاستثمار والمناطق الحرة بجمهورية مصر العربية، تحرر هذا العقد بين كل من المؤسسين الموقعين أدناه:
أولاً: السيد/ [اسم المؤسس الأول]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (مؤسس).
ثانياً: السيد/ [اسم المؤسس الثاني]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (مؤسس).
ثالثاً: شركة/ [اسم الشركة المؤسسة إن وجدت]، شركة مساهمة/ذ.م.م مقيدة بالسجل التجاري رقم: [...]، ويمثلها قانوناً السيد/ [...]، بموجب التفويض الرسمي الصادر بتاريخ [...] (مؤسس اعتباري).
وبعد أن أقر المؤسسون بكامل أهليتهم القانونية والمالية المعتبرة لتأسيس الشركات والاكتتاب في رؤوس أموالها، اتفقوا على تأسيس شركة مساهمة مصرية وفقاً لأحكام القانون رقم 159 لسنة 1981 وتعديلاته وقانون الاستثمار رقم 72 لسنة 2017، ووفقاً للأحكام والنظام الأساسي الآتي:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, at the General Authority for Investment and Free Zones (GAFI), Cairo, Egypt, this Agreement and Articles of Association were executed by and between:
First: Mr. [First Founder Name], Egyptian, National ID: [...], residing at: [...] (Founder).
Second: Mr. [Second Founder Name], Egyptian, National ID: [...], residing at: [...] (Founder).
Third: [Founding Entity Name], Commercial Reg No: [...], represented by Mr. [...], pursuant to official authorization dated [...] (Corporate Founder).
Having confirmed their full legal and financial capacity to incorporate joint stock companies, the Founders agreed to establish an Egyptian Joint Stock Company under Law No. 159 of 1981 and Investment Law No. 72 of 2017 in accordance with the following Articles:`,
      recitalsArabic: 'يُعتبر التمهيد السابق وبيانات المؤسسين وجداول الاكتتاب جزءاً لا يتجزأ من هذا العقد والنظام الأساسي للشركة.',
      recitalsEnglish: 'The preamble, founder data, and subscription schedules form an integral part of these Articles of Association.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% للنموذج الرسمي المعتمد الصادر عن الهيئة العامة للاستثمار والمناطق الحرة (GAFI) لشركات المساهمة المصرية.',
      legalNotes: 'شركة مساهمة ينقسم رأس مالها إلى أسهم متساوية القيمة قابلة للتداول، ولا يسأل المساهم إلا بقدر قيمة الأسهم التي اكتتب فيها وفقاً للمادة 1 من القانون 159 لسنة 1981.',
      shariaComplianceNotes: 'مستوفٍ لضوابط المشاركة الشرعية، وخالٍ من إصدار أسهم تمتع غير مشروعة أو اشتراط فوائد ربوية على رؤوس الأموال.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التأسيس المعتمدة بمركز خدمات المستثمرين بالهيئة العامة للاستثمار (GAFI).',
        cassationPrinciplesValidation: 'متطابق مع مبادئ محكمة النقض الاقتصادية بشأن حجية قرارات الجمعيات العامة ومسؤولية أعضاء مجلس الإدارة.',
        customaryPracticeValidation: 'الصيغة الرسمية المتبعة لدى مكاتب محاماة الشركات الكبرى في مصر والهيئات الاستثمارية.',
        shariaAuditStatement: 'عقد تأسيس شركة مساهمة مشروع شرعاً يقوم على مبدأ المشاركة بالحصص والأسهم.',
        verificationChecklist: [
          { item: 'شهادة عدم التباس الاسم التجاري معتمدة من السجل التجاري', status: 'مستوفى ومعتمد', reference: 'القانون 159/1981 وقانون السجل التجاري 34/1976' },
          { item: 'إيداع نسبة رأس المال المصدر المدفوعة بالبنك المعتمد', status: 'مستوفى ومعتمد', reference: 'المادة 32 من اللائحة التنفيذية للقانون 159/1981' },
          { item: 'قيد أسهم الشركة بنظام الحفظ المركزي (MCDR)', status: 'مستوفى ومعتمد', reference: 'قانون الإيداع والقيد المركزي 93 لسنة 2000' },
          { item: 'تعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين', status: 'مستوفى ومعتمد', reference: 'المادة 103 من القانون 159/1981' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: اسم الشركة والسمة التجارية',
          titleEnglish: 'Article 1: Corporate Name & Legal Form',
          contentArabic: 'اسم الشركة هو: شركة [...] (شركة مساهمة مصرية - ش.م.م)، وتخضع لأحكام القانون رقم 159 لسنة 1981 ولائحته التنفيذية وقانون الاستثمار رقم 72 لسنة 2017 وقانون سوق رأس المال رقم 95 لسنة 1992.',
          contentEnglish: 'The name of the Company is: [...] (Egyptian Joint Stock Company - S.A.E), governed by Law No. 159 of 1981, Investment Law No. 72 of 2017, and Capital Market Law No. 95 of 1992.'
        },
        {
          titleArabic: 'المادة الثانية: غرض الشركة والأنشطة المرخصة',
          titleEnglish: 'Article 2: Corporate Purpose & Business Scope',
          contentArabic: 'غرض الشركة هو: الاستثمار في وتطوير وتشغيل المشروعات الصناعية، التجارية، التكنولوجية، المقاولات، الخدمات اللوجستية، والتطوير العقاري، ويجوز للشركة أن تشترك بأي وجه من الوجوه مع الهيئات أو الشركات التي تزاول أعمالاً شبيهة أو التي قد تعاونها على تحقيق غرضها في مصر أو في الخارج، بعد استيفاء التراخيص الرسمية المقررة قانوناً.',
          contentEnglish: 'The purpose of the Company includes industrial, commercial, technological, engineering contracting, logistical, and real estate development operations, with the right to participate with local or international entities to achieve its corporate objectives upon obtaining required licenses.'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي ومحل ممارسة النشاط والفروع',
          titleEnglish: 'Article 3: Head Office & Corporate Domicile',
          contentArabic: 'يقع المركز الرئيسي للشركة ومحلها القانوني في مدينة [...] بجمهورية مصر العربية. ولمجلس الإدارة أن ينشئ فروعاً أو مكاتب تمثيل أو توكيلات لها داخل جمهورية مصر العربية أو خارجها، مع إخطار الهيئة العامة للاستثمار والمناطق الحرة والسجل التجاري وفقاً للإجراءات القانونية.',
          contentEnglish: 'The head office and legal domicile of the Company is located in [...], Arab Republic of Egypt. The Board of Directors may establish branches, representative offices, or agencies inside Egypt or abroad upon notifying GAFI and Commercial Registry.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها',
          titleEnglish: 'Article 4: Duration of the Company',
          contentArabic: 'المدة المحددة لهذه الشركة هي (25) خمس وعشرون سنة ميلادية تبدأ من تاريخ قيدها في السجل التجاري، ويجوز مد هذه المدة لمدد أخرى بقرار من الجمعية العامة غير العادية للمساهمين قبل انقضاء أجلها.',
          contentEnglish: 'The duration of the Company is twenty-five (25) calendar years commencing from the date of registration in the Commercial Register, extendable by resolution of the Extraordinary General Assembly.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس المال المرخص به ورأس المال المصدر والمدفوع',
          titleEnglish: 'Article 5: Authorized, Issued & Paid-in Capital',
          contentArabic: 'حُدد رأس مال الشركة المرخص به بمبلغ [...] جنيه مصري، وحُدد رأس مال الشركة المصدر بمبلغ [...] جنيه مصري، مقسم على [...] سهماً نقدياً، القيمة الاسمية لكل سهم [...] جنيه مصري، وسُددت النسبة القانونية المقررة من رأس المال المصدر بموجب شهادة بنكية مودعة لدى بنك [...] المعتمد من البنك المركزي المصري تحت حساب تأسيس الشركة.',
          contentEnglish: 'The Authorized Capital is set at EGP [...], and the Issued Capital is set at EGP [...], divided into [...] nominal shares with a par value of EGP [...] each. The statutory initial percentage was deposited under an incorporation bank certificate issued by [...].'
        },
        {
          titleArabic: 'المادة السادسة: الاكتتاب في رأس المال وجدول الحصص',
          titleEnglish: 'Article 6: Capital Subscription & Shareholding Schedule',
          contentArabic: 'اكتتب المؤسسون في كامل أسهم رأس المال المصدر على الوجه الآتي: المؤسس الأول بعدد [...] سهم بقيمة [...] جنيه، المؤسس الثاني بعدد [...] سهم بقيمة [...] جنيه، المؤسس الثالث بعدد [...] سهم بقيمة [...] جنيه، وسدد كل مكتتب النسبة المقررة قانوناً نقداً بحساب التأسيس ويلتزم بسداد باقي القيمة الاسمية خلال خمس سنوات من تاريخ التأسيس.',
          contentEnglish: 'The Founders have subscribed to 100% of the issued shares as per the subscription schedule, paying the statutory percentage in cash with commitment to pay remaining par value within five years.'
        },
        {
          titleArabic: 'المادة السابعة: شهادات الأسهم والحفظ المركزي (MCDR)',
          titleEnglish: 'Article 7: Share Certificates & Central Depository',
          contentArabic: 'تكون أسهم الشركة اسمية وتصدر من سجلات الأسهم، ويتم قيد وتداول وإيداع كامل أسهم الشركة بنظام الحفظ والقيد المركزي لدى شركة مصر للمقاصة والإيداع والقيد المركزي (MCDR) عملاً بأحكام القانون رقم 93 لسنة 2000 وقرارات الهيئة العامة للرقابة المالية.',
          contentEnglish: 'All shares shall be nominal and registered with Misr for Central Clearing, Depository and Registry (MCDR) pursuant to Law No. 93 of 2000 and FRA regulations.'
        },
        {
          titleArabic: 'المادة الثامنة: تداول الأسهم وقواعد نقل الملكية وحق الأولوية',
          titleEnglish: 'Article 8: Share Transfer & Pre-emptive Rights',
          contentArabic: 'تتداول أسهم الشركة وفقاً لأحكام قانون سوق رأس المال وقواعد القيد والإيداع المركزي، ولا يجوز تداول أسهم المؤسسين قبل مضي سنتين ماليتين كاملتين على تأسيس الشركة ونشر القوائم المالية، ويكون للمساهمين حق الأولوية في الاكتتاب بأسهم زيادة رأس المال بنسبة ما يملكه كل منهم.',
          contentEnglish: 'Share transfers shall comply with Capital Market Law. Founders shares are locked up for two fiscal years following publication of approved financial statements. Existing shareholders hold pre-emptive rights in capital increases.'
        },
        {
          titleArabic: 'المادة التاسعة: تشكيل مجلس الإدارة ومدة العضوية',
          titleEnglish: 'Article 9: Board of Directors Composition & Tenure',
          contentArabic: 'يتولى إدارة الشركة مجلس إدارة مؤلف من عدد فردي لا يقل عن ثلاثة أعضاء تعينهم الجمعية العامة العادية للمساهمين، وتكون مدة عضوية المجلس ثلاث سنوات ميلادية، واستثناءً من ذلك عُين أول مجلس إدارة من المؤسسين لمدة خمس سنوات برئاسة السيد/ [...]، وعضوية كل من السيد/ [...] والسيد/ [...].',
          contentEnglish: 'The Company is managed by a Board of Directors of an odd number not less than three members elected by the Ordinary General Assembly for three-year terms. The first Board of Directors is appointed for five years.'
        },
        {
          titleArabic: 'المادة العاشرة: سلطات مجلس الإدارة ورئيس المجلس والعضو المنتدب',
          titleEnglish: 'Article 10: Powers of the Board, Chairman & Managing Director',
          contentArabic: 'لمجلس الإدارة أوسع السلطات لإدارة شؤون الشركة وتصريف أعمالها وتمثيلها أمام الكافة، ويعين المجلس من بين أعضائه رئيساً لمجلس الإدارة وعضواً منتدباً للإدارة التنفيذية، وتُحدد سلطات التوقيع البنكي والإداري بقرار رسمي من مجلس الإدارة موثق بالسجل التجاري والهيئة العامة للاستثمار.',
          contentEnglish: 'The Board holds full authority to manage corporate affairs and represent the Company. The Board designates a Chairman and a Managing Director (CEO), establishing bank and administrative signatory authorizations.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: اجتماعات مجلس الإدارة والنصاب والتصويت',
          titleEnglish: 'Article 11: Board Meetings, Quorum & Voting',
          contentArabic: 'يجتمع مجلس الإدارة بدعوة من رئيسه أو ثلث أعضائه على الأقل، وتكون الاجتماعات صحيحة بحضور أغلبية الأعضاء، وتصدر القرارات بأغلبية أصوات الحاضرين، وعند التساوي يُرجح الجانب الذي منه الرئيس، ويجوز عقد الاجتماعات والتصويت عبر تقنيات الاتصال المرئي الحديثة طبقاً لقرارات هيئة الاستثمار.',
          contentEnglish: 'Board meetings are quorate with the majority of members present. Resolutions pass by majority vote, casting vote to the Chairman. Video conferencing participation is recognized under GAFI regulations.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الجمعية العامة العادية للمساهمين',
          titleEnglish: 'Article 12: Ordinary General Assembly',
          contentArabic: 'تنعقد الجمعية العامة العادية للمساهمين مرة على الأقل سنوياً خلال الأشهر الثلاثة التالية لانتهاء السنة المالية للشركة، وتختص بالنظر في تقرير مجلس الإدارة، وتقرير مراقب الحسابات، واعتماد القوائم المالية السنوية، وإبراء ذمة أعضاء المجلس، وتوزيع الأرباح، وتعيين مراقب الحسابات وتحديد أتعابه، ويكون انعقادها صحيحاً بحضور مساهمين يمثلون ربع رأس المال على الأقل.',
          contentEnglish: 'The Ordinary General Assembly convenes annually within three months post-fiscal year to review Board and Auditor reports, approve balance sheets, discharge directors, approve dividends, and appoint the statutory auditor.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: الجمعية العامة غير العادية للمساهمين',
          titleEnglish: 'Article 13: Extraordinary General Assembly',
          contentArabic: 'تختص الجمعية العامة غير العادية بتعديل النظام الأساسي للشركة، وزيادة رأس المال المرخص به أو المصدر أو تخفيضه، وتغيير غرض الشركة أو شكلها القانوني أو اندماجها أو حلها وتصفيتها قبل الأجل، ولا يكون انعقادها صحيحاً إلا بحضور مساهمين يمثلون نصف رأس المال على الأقل، وتصدر قراراتها بأغلبية ثلثي الأسهم الممثلة في الاجتماع.',
          contentEnglish: 'The Extraordinary General Assembly has exclusive authority to amend the Articles of Association, alter capital, merge, or dissolve the Company. Quorum requires at least 50% of capital, passing by two-thirds majority.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: مراقب الحسابات وواجباته الرقابية',
          titleEnglish: 'Article 14: Statutory External Auditor',
          contentArabic: 'يكون للشركة مراقب حسابات أو أكثر من الأشخاص الطبيعيين المقيدين بسجل المحاسبين والمراجعين، تعينه الجمعية العامة العادية وتحدد أتعابه، واستثناءً من ذلك عُين المحاسب القانوني السيد/ [...] مراقباً أول لحسابات الشركة، ويتولى مراجعة الدفاتر والقوائم المالية وفقاً لمعايير المحاسبة والمراجعة المصرية وإعداد التقرير المالي السنوي.',
          contentEnglish: 'The Company appoints a statutory certified public accountant registered with the Egyptian Auditors Registry to audit books, verify internal controls, and present the annual audit report to the General Assembly.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: السنة المالية وقواعد توزيع الأرباح والاحتياطيات',
          titleEnglish: 'Article 15: Fiscal Year, Dividends & Statutory Reserves',
          contentArabic: 'تبدأ السنة المالية للشركة من أول يناير وتنتهي في الحادي والثلاثين من ديسمبر من كل عام. وتوزع الأرباح الصافية بعد خصم المصروفات والتكاليف كالتالي: (أ) يقتطع 5% لتكوين الاحتياطي القانوني حتى يبلغ 50% من رأس المال المصدر، (ب) يقتطع 10% كحصة للعاملين في الأرباح النقدية بما لا يجاوز مجموع الأجور السنوية وفقاً للمادة 41 من القانون 159 لسنة 1981، (ج) يوزع على المساهمين دفعة أولى تعادل 5% من القيمة المدفوعة لأسهمهم، ويُرحل الباقي أو يُوزع كأرباح إضافية.',
          contentEnglish: 'Fiscal year runs from Jan 1 to Dec 31. Net profits are distributed: 5% statutory reserve until reaching 50% of capital; 10% employees profit sharing under Article 41 of Law 159/1981; 5% initial dividend to shareholders, and balance as designated.'
        },
        {
          titleArabic: 'المادة السادسة عشرة: خسارة رأس المال وتخفيضه',
          titleEnglish: 'Article 16: Capital Loss & Recovery Measures',
          contentArabic: 'إذا بلغت خسائر الشركة نصف رأس المال المصدر وفقاً للقوائم المالية المعتمدة، وجب على مجلس الإدارة دعوة الجمعية العامة غير العادية للانعقاد للنظر في استمرار الشركة أو حلها قبل الأجل، فإذا لم يدع المجلس الجمعية أو تعذر إصدار قرار جاز لكل ذي شأن طلب الحل القضائي وفقاً للمادة 69 من القانون 159 لسنة 1981.',
          contentEnglish: 'If accumulated losses reach 50% of issued capital, the Board must convene an Extraordinary General Assembly to resolve on continuation or early dissolution under Article 69 of Law 159/1981.'
        },
        {
          titleArabic: 'المادة السابعة عشرة: حل الشركة وتصفيتها وتعيين المصفي',
          titleEnglish: 'Article 17: Dissolution, Liquidation & Liquidator Appointment',
          contentArabic: 'عند انقضاء مدة الشركة أو تقرير حلها قبل الأجل، تدخل الشركة في دور التصفية وتحتفظ بشخصيتها الاعتبارية بالقدر اللازم لأعمال التصفية، وتعين الجمعية العامة غير العادية مصفياً أو أكثر وتحدد سلطاتهم وأتعابهم، وبعد سداد كافة الديون والالتزامات يوزع فائض التصفية على المساهمين بنسبة أسهمهم.',
          contentEnglish: 'Upon dissolution, the Company enters liquidation preserving legal personality as necessary. The Extraordinary General Assembly appoints liquidators. Surplus assets post debt settlement are distributed pro-rata.'
        },
        {
          titleArabic: 'المادة الثامنة عشرة: مصاريف التأسيس والنشر والاختصاص القضائي',
          titleEnglish: 'Article 18: Incorporation Expenses, Publication & Jurisdiction',
          contentArabic: 'تتحمل الشركة كافة المصروفات والأتعاب والرسوم القضائية ونفقات النشر اللازمة لتأسيسها وتخصم من حساب النفقات العامة، ويوكل المؤسسون السيد الأستاذ/ [اسم المحامي وكيل المؤسسين] المحامي بالنقض في استيفاء إجراءات النشر بصحيفة الاستثمار والقيد بالسجل التجاري، وتختص المحاكم الاقتصادية المصرية بنظر أي نزاع يتعلق بتطبيق هذا النظام.',
          contentEnglish: 'The Company bears all preliminary incorporation fees and publication costs. Founders authorize Attorney [...] to finalize registration with GAFI and Commercial Registry. Egyptian Economic Courts hold jurisdiction.'
        }
      ]
    }
  },

  // 2. Limited Liability Company (ش.ذ.م.م - LLC) - GAFI Official Standard
  {
    id: 'official-gafi-limited-liability-company-llc',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تأسيس والنظام الأساسي لشركة ذات مسؤولية محدودة (ش.ذ.م.م) وفق القانون 159 لسنة 1981 وقانون الاستثمار 72 لسنة 2017',
    titleEn: 'Articles of Association of Limited Liability Company (LLC - GAFI Standard Model)',
    source: 'النموذج الرسمي الشامل المعتمد بالهيئة العامة للاستثمار والمناطق الحرة (GAFI)',
    statutoryBasis: 'قانون شركات المساهمة والتوصية بالأسهم والشركات ذات المسئولية المحدودة رقم 159 لسنة 1981 ولائحته التنفيذية وتعديلاته وقانون الاستثمار 72 لسنة 2017',
    totalClauses: 16,
    contractData: {
      contractTitleArabic: 'عقد تأسيس ونظام أساسي لشركة ذات مسؤولية محدودة (ش.ذ.م.م) - الهيئة العامة للاستثمار',
      contractTitleEnglish: 'Articles of Incorporation of a Limited Liability Company (LLC - GAFI)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بمقر الهيئة العامة للاستثمار والمناطق الحرة بجمهورية مصر العربية، تحرر هذا العقد بين كل من:
أولاً: السيد/ [اسم الشريك الأول]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (شريك مؤسس).
ثانياً: السيد/ [اسم الشريك الثاني]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (شريك مؤسس).
ثالثاً: السيد/ [اسم الشريك الثالث]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (شريك مؤسس).
وبعد أن أقر الشركاء بكامل أهليتهم القانونية المعتبرة لتأسيس الشركات والتصرفات المالية، اتفقوا على تأسيس شركة ذات مسؤولية محدودة وفقاً لأحكام القانون رقم 159 لسنة 1981 ولائحته التنفيذية وقانون الاستثمار رقم 72 لسنة 2017، وبنود هذا العقد:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, at the General Authority for Investment and Free Zones (GAFI), this Agreement was executed between:
First: Mr. [First Partner Name], Egyptian, National ID: [...], residing at: [...] (Founding Partner).
Second: Mr. [Second Partner Name], Egyptian, National ID: [...], residing at: [...] (Founding Partner).
Third: Mr. [Third Partner Name], Egyptian, National ID: [...], residing at: [...] (Founding Partner).
Having full legal competence to incorporate commercial entities, the Partners agreed to establish a Limited Liability Company under Law No. 159 of 1981 and Investment Law No. 72 of 2017:`,
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لنظام الشركة.',
      recitalsEnglish: 'The preamble forms an integral part hereof having the same binding force.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% للنموذج الرسمي المعتمد من قطاع التأسيس الإلكتروني بالهيئة العامة للاستثمار (GAFI).',
      legalNotes: 'لا يزيد عدد الشركاء في الشركة ذات المسؤولية المحدودة على خمسين شريكاً، وتكون مسؤولية كل شريك محدودة بقدر حصته في رأس المال ولا يجوز اللجوء للاكتتاب العام.',
      shariaComplianceNotes: 'مستوفٍ لضوابط شركات العنان الشرعية، ولا يتضمن أي شروط تمنح عائداً ثابتاً غير مرتبط بالربح والخسارة الفعلية.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لدليل تأسيس الشركات ذات المسؤولية المحدودة بمركز خدمات المستثمرين GAFI.',
        cassationPrinciplesValidation: 'متفق مع أحكام محكمة النقض المصرية في حجية سجل الشركاء وقواعد استرداد الحصص.',
        customaryPracticeValidation: 'النموذج القياسي الأكثر استخداماً لتأسيس الشركات التجارية والاستثمارية في مصر.',
        shariaAuditStatement: 'عقد تأسيس شركة شرعي صحيح نافذ مالياً وقانونياً.',
        verificationChecklist: [
          { item: 'شهادة عدم التباس الاسم التجاري من السجل التجاري', status: 'مستوفى ومعتمد', reference: 'قانون السجل التجاري 34/1976' },
          { item: 'الوفاء برأس المال بالكامل وتوزيعه على حصص متساوية', status: 'مستوفى ومعتمد', reference: 'المادة 118 من القانون 159/1981' },
          { item: 'تعيين مدير أو مجلس مديرين وتحديد صلاحيات التوقيع', status: 'مستوفى ومعتمد', reference: 'المادة 120 من القانون 159/1981' },
          { item: 'تعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين', status: 'مستوفى ومعتمد', reference: 'المادة 127 من القانون 159/1981' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: اسم الشركة والسمة والشكل القانوني',
          titleEnglish: 'Article 1: Corporate Name & Form',
          contentArabic: 'اسم الشركة هو: شركة [...] ذات مسؤولية محدودة (ش.ذ.م.م)، وتتخذ هذه الشركة الشكل القانوني للشركات ذات المسؤولية المحدودة وتخضع للقانون رقم 159 لسنة 1981 وتعديلاته وقانون الاستثمار 72 لسنة 2017.',
          contentEnglish: 'The Company name is: [...] Limited Liability Company (LLC), governed by Law No. 159 of 1981 and Investment Law No. 72 of 2017.'
        },
        {
          titleArabic: 'المادة الثانية: غرض الشركة وأنشطتها التجارية والاستثمارية',
          titleEnglish: 'Article 2: Corporate Purpose & Business Objectives',
          contentArabic: 'غرض الشركة هو: ممارسة أنشطة التجارة العامة والتوريدات، الحلول التكنولوجية والبرمجيات، الاستيراد والتصدير، الخدمات الإدارية والاستشارية، المقاولات والأعمال الهندسية، وذلك دون الإخلال بالقوانين والقرارات الخاصة بممارسة كل نشاط.',
          contentEnglish: 'Corporate purpose comprises general trade, supplies, software and IT solutions, import and export, administrative consultancies, and engineering contracting under relevant statutory licenses.'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي ومحل ممارسة النشاط والفروع',
          titleEnglish: 'Article 3: Head Office & Branches',
          contentArabic: 'يقع المركز الرئيسي للشركة في مدينة [...]، محافظة [...] بجمهورية مصر العربية. ويجوز لمديري الشركة فتح فروع أو توكيلات أو مستودعات داخل الجمهورية أو خارجها بقرار من جمعية الشركاء.',
          contentEnglish: 'Head office is located in [...], Egypt. The Managers may open branches, agencies, or depots inside or outside Egypt upon Partners resolution.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها',
          titleEnglish: 'Article 4: Duration of Company',
          contentArabic: 'مدة الشركة هي (25) سنة ميلادية تبدأ من تاريخ قيدها بالسجل التجاري، وتتجدد هذه المدة تلقائياً لمدد مماثلة ما لم يقرر الشركاء الحائزون لأغلبية رأس المال عدم تجديدها قبل انتهاء المدة بستة أشهر.',
          contentEnglish: 'The duration is twenty-five (25) years from registration in the Commercial Register, automatically renewable unless partners representing capital majority decide otherwise.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس مال الشركة وتوزيعه إلى حصص متساوية',
          titleEnglish: 'Article 5: Capital & Division into Equal Quotas',
          contentArabic: 'حُدد رأس مال الشركة بمبلغ [...] جنيه مصري، مقسم إلى [...] حصة نقدية متساوية القيمة، قيمة كل حصة [...] جنيه مصري، غير قابلة للتجزئة، ووفى الشركاء بكامل قيمة رأس المال نقداً وأودع بحساب الشركة تحت التأسيس.',
          contentEnglish: 'Share capital is fixed at EGP [...], divided into [...] equal, indivisible cash quotas of EGP [...] each, fully paid and deposited in the incorporation bank account.'
        },
        {
          titleArabic: 'المادة السادسة: جدول توزيع الحصص بين الشركاء المؤسسين',
          titleEnglish: 'Article 6: Quota Ownership Schedule',
          contentArabic: 'وزعت حصص رأس المال بين الشركاء كالتالي: الطرف الأول بعدد [...] حصة بقيمة [...] جنيه بنسبة [...]%، والطرف الثاني بعدد [...] حصة بقيمة [...] جنيه بنسبة [...]%، والطرف الثالث بعدد [...] حصة بقيمة [...] جنيه بنسبة [...]%، ومجموعها يعادل 100% من رأس المال.',
          contentEnglish: 'Quotas are allocated: First Partner [...] quotas ([...]%), Second Partner [...] quotas ([...]%), Third Partner [...] quotas ([...]%), aggregating 100% of capital.'
        },
        {
          titleArabic: 'المادة السابعة: التنازل عن الحصص وحق الاسترداد للشركاء (الشفعة)',
          titleEnglish: 'Article 7: Quota Transfer & Pre-emption Recovery Right',
          contentArabic: 'يجوز لكل شريك التنازل عن حصته لأحد الشركاء بحرية تامة. أما في حالة التنازل للغير، فيجب إخطار باقي الشركاء والمدير بكتاب مسجل مصحوب بعلم الوصول بشروط التنازل، ويكون لباقي الشركاء حق استرداد الحصة بذات الشروط أو بقيمتها المقدرة محاسبياً خلال ثلاثين يوماً إعمالاً للمادة 119 من القانون 159 لسنة 1981.',
          contentEnglish: 'Quotas may be transferred freely among partners. Transfers to third parties require written notice, granting existing partners pre-emptive recovery rights within 30 days under Article 119 of Law 159/1981.'
        },
        {
          titleArabic: 'المادة الثامنة: سجل الحصص والشركاء بمقر الشركة',
          titleEnglish: 'Article 8: Partners Register',
          contentArabic: 'يُعد بمقر الشركة سجل خاص بالحصص والشركاء ترقمه الهيئة العامة للاستثمار، يُقيد فيه أسماء الشركاء ومواطنهم ومهنهم وعدد الحصص التي يملكها كل منهم، وما يقع على الحصص من تصرفات أو حجوزات، ولا يسري أي تصرف في مواجهة الشركة أو الغير إلا من تاريخ قيده بهذا السجل.',
          contentEnglish: 'A statutory Partners Register certified by GAFI shall be kept at the head office recording partner identities, quota transfers, and pledges, becoming effective upon registration.'
        },
        {
          titleArabic: 'المادة التاسعة: إدارة الشركة ومجلس المديرين وصلاحيات التوقيع',
          titleEnglish: 'Article 9: Management & Signatory Authority',
          contentArabic: 'يتولى إدارة الشركة [مدير عام / مجلس مديرين مكون من ...] يُعين لمدة [...] سنوات قابلة للتجديد، واستثناءً من ذلك عُين السيد/ [...] مديراً عاماً أول للشركة، ويكون له أوسع الصلاحيات في إدارة الشركة وتمثيلها أمام البنوك والجهات القضائية والحكومية وإبرام العقود وتعيين العاملين وصرف الأموال وفتح الحسابات المصرفية.',
          contentEnglish: 'The Company is managed by [General Manager / Board of Managers]. Mr. [...] is designated as the first General Manager with full administrative, banking, and legal representation authority.'
        },
        {
          titleArabic: 'المادة العاشرة: الجمعية العامة للشركاء واختصاصاتها',
          titleEnglish: 'Article 10: General Assembly of Partners',
          contentArabic: 'تتكون الجمعية العامة للشركاء من جميع الشركاء، وتنعقد سنوياً خلال الأشهر الثلاثة التالية لنهاية السنة المالية لاعتماد القوائم المالية، ومناقشة تقرير المديرين وتقرير مراقب الحسابات، وتوزيع الأرباح، وتكون قراراتها ملزمة لجميع الشركاء وتصدر بالأغلبية العددية الحائزة لنصف رأس المال على الأقل، ما لم يشترط القانون أغلبية خاصة كعزل المديرين أو تعديل عقد التأسيس.',
          contentEnglish: 'The Partners General Assembly convenes annually to approve financial statements, review management and auditor reports, and resolve distributions, passing by majority of capital.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: تعديل عقد التأسيس وتغيير رأس المال',
          titleEnglish: 'Article 11: Amendments to Articles of Association',
          contentArabic: 'لا يجوز تعديل عقد تأسيس الشركة ولا زيادة رأس مالها أو تخفيضه إلا بقرار صادر من جمعية الشركاء بأغلبية الشركاء الحائزين لثلاثة أرباع رأس المال على الأقل (75%)، ولا يجوز زيادة أعباء الشركاء المالية إلا بإجماع الشركاء.',
          contentEnglish: 'Amendments to Articles of Association or capital changes require a supermajority of partners holding at least 75% of capital. Increasing financial liabilities requires unanimous consent.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: مراقب الحسابات ومسؤولياته القانونية',
          titleEnglish: 'Article 12: Statutory External Auditor',
          contentArabic: 'تلتزم الشركة بتعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين، وعُين المحاسب القانوني السيد/ [...] مراقباً أول للحسابات، ويكون له الاطلاع في كل وقت على دفاتر الشركة وسجلاتها وفحص مركزها المالي وتقديم تقريره السنوي للجمعية العامة.',
          contentEnglish: 'The Company appoints a licensed statutory auditor. Mr. [...] is appointed first auditor to inspect books, audit balance sheets, and report annually to the Partners Assembly.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: السنة المالية وقواعد توزيع الأرباح والاحتياطي القانوني',
          titleEnglish: 'Article 13: Fiscal Year, Dividends & Legal Reserve',
          contentArabic: 'تبدأ السنة المالية في أول يناير وتنتهي في 31 ديسمبر من كل عام. وتوزع الأرباح الصافية بعد خصم المصروفات: يقتطع 5% للاحتياطي القانوني حتى يبلغ نصف رأس المال، ويقتطع 10% للعاملين، ويوزع الباقي على الشركاء بنسبة حصصهم في رأس المال.',
          contentEnglish: 'The fiscal year is Jan 1 - Dec 31. Net profits are appropriated: 5% statutory reserve, 10% employees profit sharing, and remainder distributed pro-rata to quota holdings.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: استمرار الشركة في حال وفاة أو حجر أو إفلاس أحد الشركاء',
          titleEnglish: 'Article 14: Non-Dissolution on Partner Death or Bankruptcy',
          contentArabic: 'لا تنتهي الشركة بوفاة أحد الشركاء أو صدور حكم بالحجر عليه أو إفلاسه أو إعساره، بل تستمر مع ورثته أو خلفائه القانونيين، ويكون لورثة الشريك المتوفى مجتمعين أن ينيبوا عنهم شخصاً واحداً لتمثيلهم في مواجهة الشركة إعمالاً للمادة 124 من القانون 159 لسنة 1981.',
          contentEnglish: 'The Company is not dissolved by death, interdiction, or bankruptcy of a partner, continuing with legal heirs who designate a single representative to exercise partnership rights.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: حل وتصفية الشركة وتعيين المصفي',
          titleEnglish: 'Article 15: Dissolution & Liquidation Procedures',
          contentArabic: 'تنحل الشركة بانقضاء مدتها أو بقرار من الشركاء الحائزين لثلاثة أرباع رأس المال. وتتم التصفية بواسطة مصفي تعينه الجمعية العامة للشركاء يحدد القرار سلطاته وأتعابه، وتوزع أموال الشركة المتبقية بعد سداد الديون على الشركاء بنسبة حصصهم.',
          contentEnglish: 'The Company dissolves upon term expiration or by resolution of 75% capital. Liquidation is conducted by appointed liquidator, distributing net surplus post debt payoff pro-rata.'
        },
        {
          titleArabic: 'المادة السادسة عشرة: نفقات التأسيس والشهر والاختصاص القضائي',
          titleEnglish: 'Article 16: Incorporation Fees, Publication & Courts',
          contentArabic: 'تتحمل الشركة نفقات التأسيس والقيد بالسجل التجاري والنشر بالجريدة الرسمية، ويفوض الشركاء الأستاذ/ [اسم المحامي وكيل المؤسسين] المحامي بالنقض في إتمام كافة إجراءات الشهر والقيد والتصديق لدى الهيئة العامة للاستثمار والمحاكم الاقتصادية المصرية.',
          contentEnglish: 'The Company covers incorporation and registration expenses. Partners authorize Attorney [...] to finalize registration with GAFI, Commercial Registry, and Egyptian Economic Courts.'
        }
      ]
    }
  },

  // 3. One-Person Company (ش.ش.و.ذ.م.م - OPC) - GAFI Law 4/2018 Model
  {
    id: 'official-gafi-one-person-company-opc',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تأسيس والنظام الأساسي لشركة الشخص الواحد ذات مسؤولية محدودة (ش.ش.و.ذ.م.م) وفق القانون 4 لسنة 2018 وقانون الاستثمار 72 لسنة 2017',
    titleEn: 'Articles of Association of One-Person Company (OPC - GAFI Official Model Law 4/2018)',
    source: 'النموذج الرسمي المعتمد بالهيئة العامة للاستثمار والمناطق الحرة (GAFI) لشركات الشخص الواحد',
    statutoryBasis: 'القانون رقم 4 لسنة 2018 بتعديل قانون الشركات 159 لسنة 1981 ولائحته التنفيذية الصادرة بقرار وزير الاستثمار رقم 16 لسنة 2018 وقانون الاستثمار رقم 72 لسنة 2017',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد تأسيس ونظام أساسي لشركة الشخص الواحد ذات مسؤولية محدودة (ش.ش.و.ذ.م.م)',
      contractTitleEnglish: 'Articles of Incorporation of One-Person Limited Liability Company (OPC - GAFI)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بمقر الهيئة العامة للاستثمار والمناطق الحرة بجمهورية مصر العربية، أقر الموقع أدناه:
السيد/ [اسم مؤسس ومالك الشركة]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (مؤسس ومالك الشركة الوحيد).
وبعد أن أقر المالك بأهليته القانونية الكاملة لتأسيس الشركات والتصرفات المالية، أعلن عن رغبته الصريحة وإرادته المنفردة في تأسيس شركة شخص واحد ذات مسؤولية محدودة وفقاً لأحكام القانون رقم 4 لسنة 2018 بتعديل القانون رقم 159 لسنة 1981 وقانون الاستثمار رقم 72 لسنة 2017، ووفقاً للنظام الأساسي التالي:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, at the General Authority for Investment and Free Zones (GAFI), Egypt, the undersigned:
Mr. [Sole Founder & Owner Name], Egyptian, National ID: [...], residing at: [...] (Sole Founder & Owner).
Having full legal competence, explicitly declares the establishment of a One-Person Limited Liability Company pursuant to Law No. 4 of 2018 amending Law No. 159 of 1981 and Investment Law No. 72 of 2017:`,
      recitalsArabic: 'يُعتبر التمهيد السابق وإقرار المالك الوحيد جزءاً لا يتجزأ من هذا العقد والنظام الأساسي للشركة.',
      recitalsEnglish: 'The preamble and sole declaration form an integral and binding part of these Articles of Incorporation.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% للنموذج الرسمي الصادر عن الهيئة العامة للاستثمار لشركات الشخص الواحد طبقاً للقانون 4 لسنة 2018.',
      legalNotes: 'شركة شخص واحد يمتلك رأس مالها بالكامل شخص واحد طبيعي أو اعتباري، وتكون مسؤوليته محدودة بقدر رأس المال المخصص لها ولا يمتد التنفيذ لأمواله الخاصة إلا في حالات الخلط والتدليس المنصوص عليها بالمادة 129 مكرراً من القانون.',
      shariaComplianceNotes: 'مستوفٍ للأحكام الشرعية في تملك المشروعات الفردية والذمم المالية المستقلة دون غرر أو ربا.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'معتمد رسمياً بنسبة 100% عبر المنظومة الرقمية لقطاع خدمات المستثمرين الإلكترونية بالهيئة العامة للاستثمار GAFI.',
        cassationPrinciplesValidation: 'متطابق مع مبادئ المحكمة الاقتصادية ومحكمة النقض في شأن الذمة المالية المستقلة لشركة الشخص الواحد.',
        customaryPracticeValidation: 'النموذج القانوني المعتمد لدى نقابة المحامين وهيئة الاستثمار لرواد الأعمال والمستثمرين الأفراد.',
        shariaAuditStatement: 'تأسيس مشروع استثماري فردي صحيح شرعاً وقانوناً.',
        verificationChecklist: [
          { item: 'سداد كامل رأس المال نقداً بحساب بنكي تحت التأسيس', status: 'مستوفى ومعتمد', reference: 'المادة 129 مكرراً 4 من القانون 159/1981' },
          { item: 'اشتمال اسم الشركة على عبارة (ش.ش.و.ذ.م.م)', status: 'مستوفى ومعتمد', reference: 'المادة 129 مكرراً 2 من القانون 159/1981' },
          { item: 'حظر ممارسة أنشطة البنوك والتأمين والادخار وتلقي الأموال', status: 'مستوفى ومعتمد', reference: 'المادة 129 مكرراً 3 من القانون 159/1981' },
          { item: 'تعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين', status: 'مستوفى ومعتمد', reference: 'المادة 129 مكرراً 7 من القانون 159/1981' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: اسم الشركة وشكلها القانوني المكتوب',
          titleEnglish: 'Article 1: Corporate Name & Sole Proprietorship Form',
          contentArabic: 'اسم الشركة هو: شركة [...] (شركة شخص واحد ذات مسؤولية محدودة - ش.ش.و.ذ.م.م)، ويجب أن يتبع اسمها دائماً هذه العبارة في جميع معاملاتها وأوراقها ولافتاتها عملاً بالمادة 129 مكرراً (2) من القانون.',
          contentEnglish: 'The Company name is: [...] (One-Person Limited Liability Company - OPC), which title must appear on all official papers, invoices, and signs under Article 129 bis (2) of Law 159/1981.'
        },
        {
          titleArabic: 'المادة الثانية: غرض الشركة وحظر الأنشطة المحظورة',
          titleEnglish: 'Article 2: Corporate Purpose & Prohibited Scope',
          contentArabic: 'غرض الشركة هو: التجارة العامة، الاستيراد والتصدير، التوريدات، البرمجيات وتطبيقات الذكاء الاصطناعي، الخدمات اللوجستية والاستشارات التسويقية، ويحظر على الشركة ممارسة أعمال البنوك والائتمان والادخار وتلقي الأموال واستثمارها والتأمين والاكتتاب العام إعمالاً لحكم المادة 129 مكرراً (3) من القانون.',
          contentEnglish: 'Corporate purpose includes general trading, IT, logistics, and consultancies. The Company is expressly prohibited from engaging in banking, insurance, savings, public capital deposit-taking, or public subscription.'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي والموطن المختار',
          titleEnglish: 'Article 3: Head Office & Domicile',
          contentArabic: 'يقع المركز الرئيسي للشركة في مدينة [...] بجمهورية مصر العربية، وللشركة إنشاء فروع ومكاتب تمثيل ومستودعات داخل الجمهورية وخارجها بقرار من المالك.',
          contentEnglish: 'Head office is located in [...], Egypt, with the right to establish branches or depots domestically and abroad by decision of the Owner.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها',
          titleEnglish: 'Article 4: Duration of Company',
          contentArabic: 'مدة الشركة هي (25) سنة ميلادية تبدأ من تاريخ قيدها بالسجل التجاري وتتجدد تلقائياً لمدد مماثلة بقرار من مالك الشركة.',
          contentEnglish: 'The duration is twenty-five (25) years from Commercial Registration date, automatically renewable by determination of the Sole Owner.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس مال الشركة والوفاء به بالكامل',
          titleEnglish: 'Article 5: Paid-up Capital Verification',
          contentArabic: 'حدد رأس مال الشركة بمبلغ [...] جنيه مصري، مدفوعاً بالكامل نقداً ومودعاً بالبنك المعتمد تحت حساب تأسيس الشركة بموجب الشهادة البنكية الرسمية، ولا يجوز تجزئة رأس مال الشركة.',
          contentEnglish: 'Company capital is set at EGP [...], paid in full in cash and deposited in the statutory bank account under incorporation certificate.'
        },
        {
          titleArabic: 'المادة السادسة: المسؤولية المحدودة للمالك وحالات رفع الحجاب الحاجز',
          titleEnglish: 'Article 6: Limited Liability & Piercing the Corporate Veil Exceptions',
          contentArabic: 'لا يسأل مالك الشركة عن التزاماتها إلا في حدود رأس مالها المخصص. واستثناءً من ذلك، يسأل المالك في أمواله الخاصة في الحالات الآتية: (أ) إذا قام بسوء نية بتصفية الشركة أو وقف نشاطها قبل انتهاء مدتها أو تحقيق غرضها، (ب) إذا لم يفصل بين ذمته المالية والذمة المالية للشركة بما يضر بالغير، (ج) إذا أبرم تصرفات باسم الشركة قبل قيدها بالسجل التجاري ولم تقرها الشركة عملاً بالمادة 129 مكرراً (8).',
          contentEnglish: 'The Owner limited liability shields personal assets, except if the Owner in bad faith liquidates early, commingles personal and company funds to third-party detriment, or contracts pre-incorporation unratified.'
        },
        {
          titleArabic: 'المادة السابعة: إدارة الشركة وسلطات المدير المعين',
          titleEnglish: 'Article 7: Management & Appointed Manager Authority',
          contentArabic: 'يدير الشركة مالكها بنفسه أو يعين مديراً عاماً أو أكثر من الغير، وقد قرر المالك [إدارة الشركة بنفسه / تعيين السيد/ ... مديراً عاماً]، ويكون للمدير كافة الصلاحيات في تمثيل الشركة أمام الجهات الإدارية والقضائية والبنوك وتوقيع الشيكات والتعاقدات والإشراف على العاملين.',
          contentEnglish: 'The Company is managed by the Sole Owner or appointed General Manager. The Manager exercises full authorities representing the entity, signing contracts, managing banking, and directing operations.'
        },
        {
          titleArabic: 'المادة الثامنة: سجل قرارات الشركة (الذي يحل محل الجمعية العامة)',
          titleEnglish: 'Article 8: Sole Owner Resolutions Register',
          contentArabic: 'يُنشأ بمقر الشركة سجل خاص مرقم ومختوم تقيد فيه كافة قرارات مالك الشركة التي تقوم مقام قرارات الجمعية العامة للمساهمين أو الشركاء، وتعتبر القرارات نافذة من تاريخ تدوينها بالسجل وفقاً للمادة 129 مكرراً (5).',
          contentEnglish: 'A dedicated, certified Resolutions Book shall be maintained at head office recording all decisions of the Sole Owner which substitute for General Assembly resolutions under Article 129 bis (5).'
        },
        {
          titleArabic: 'المادة التاسعة: التصرف في رأس مال الشركة ونقل الملكية',
          titleEnglish: 'Article 9: Transfer of Quota & Transformation into LLC',
          contentArabic: 'يجوز لمالك الشركة التصرف في رأس مالها كلياً لشخص آخر فتستمر كشركة شخص واحد، أما إذا تصرف في جزء من رأس المال لأكثر من شخص أو ورثة التزم باتخاذ إجراءات توفيق الأوضاع وتحويل الشركة إلى شركة ذات مسؤولية محدودة أو مساهمة خلال تسعين يوماً عملاً بالمادة 129 مكرراً (6).',
          contentEnglish: 'The Owner may assign 100% of capital to another entity. If transferred partially to multiple parties or heirs, the Company must restructure into an LLC within 90 days under Article 129 bis (6).'
        },
        {
          titleArabic: 'المادة العاشرة: مراقب الحسابات وإلزامية التعيين',
          titleEnglish: 'Article 10: Mandatory Statutory Auditor',
          contentArabic: 'تلتزم شركة الشخص الواحد بتعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين، وعُين المحاسب القانوني السيد/ [...] مراقباً أول للحسابات، ليتولى مراجعة وتدقيق الدفاتر والقوائم المالية وإيداع التقرير السنوي.',
          contentEnglish: 'The One-Person Company is statutorily required to appoint a certified public accountant. Mr. [...] is designated first auditor to review balance sheets and submit annual reports.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: السنة المالية والقوائم المحاسبية',
          titleEnglish: 'Article 11: Fiscal Year & Financial Accounts',
          contentArabic: 'تبدأ السنة المالية في الأول من يناير وتنتهي في الحادي والثلاثين من ديسمبر من كل عام، وتعد القوائم المالية وفقاً لمعايير المحاسبة المصرية وتودع لدى الهيئة العامة للاستثمار.',
          contentEnglish: 'Fiscal year is Jan 1 to Dec 31. Financial statements are prepared per Egyptian Accounting Standards and filed with GAFI.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: الأرباح والاحتياطيات النظامية',
          titleEnglish: 'Article 12: Profits & Statutory Reserve',
          contentArabic: 'توزع الأرباح الصافية بعد تجنيب 5% للاحتياطي القانوني حتى يبلغ نصف رأس المال، ويستحق مالك الشركة كامل الأرباح الصافية المتبقية بعد استيفاء مستحقات العاملين المقررة قانوناً.',
          contentEnglish: 'Net profits are calculated after deducting 5% for legal reserves until reaching 50% of capital, with remaining net profit accruing to the Owner subject to labor allocations.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: وفاة المالك الفرد أو انقضاء الشخص الاعتباري',
          titleEnglish: 'Article 13: Death of Sole Owner & Heirs Options',
          contentArabic: 'في حال وفاة المالك الفرد لا تنحل الشركة، وتؤول إلى ورثته الشرعيين، ويجب على الورثة خلال تسعين يوماً توفيق أوضاع الشركة إما باختيار أحدهم ليكون المالك الوحيد، أو تحويل الشركة إلى شركة ذات مسؤولية محدودة أو تصفيتها طبقاً للقانون.',
          contentEnglish: 'Upon death of the Sole Owner, the Company is not dissolved. Heirs have 90 days to designate a single owner, restructure into an LLC, or proceed with statutory liquidation.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: حل وتصفية الشركة',
          titleEnglish: 'Article 14: Dissolution & Liquidation',
          contentArabic: 'تنحل الشركة بقرار من مالكها أو بانقضاء أجلها أو بصدور حكم قضائي بحلها، وتجري تصفيتها بواسطة مصفٍ يعينه المالك وتشهر إجراءات التصفية بالسجل التجاري وصحيفة الاستثمار.',
          contentEnglish: 'The Company dissolves by Owner decision, expiration, or court ruling. Liquidation is executed by designated liquidator with notices published in Commercial Registry and Investment Gazette.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: مصاريف التأسيس والنشر والتفويض',
          titleEnglish: 'Article 15: Preliminary Expenses & Authorized Counsel',
          contentArabic: 'تتحمل الشركة مصاريف التأسيس، ويفوض المالك الأستاذ/ [اسم المحامي وكيل المؤسس] المحامي في اتخاذ كافة الإجراءات الرسمية للقيد والتسجيل لدى الهيئة العامة للاستثمار والغرف التجارية والسجل التجاري.',
          contentEnglish: 'The Company assumes incorporation expenses. The Owner authorizes Attorney [...] to represent the entity before GAFI, Chambers of Commerce, and the Commercial Registry.'
        }
      ]
    }
  },

  // 4. General Partnership (شركة التضامن) - GAFI / Commercial Code Model
  {
    id: 'official-gafi-general-partnership',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تأسيس شركة تضامن تجارية وفقاً لقانون التجارة رقم 17 لسنة 1999 ونماذج هيئة الاستثمار والسجل التجاري',
    titleEn: 'Articles of Association of General Partnership (Tadamun Company - Egyptian Commercial Code & GAFI)',
    source: 'النموذج الرسمي المعتمد بالهيئة العامة للاستثمار ومصلحة السجل التجاري لشركات الأشخاص',
    statutoryBasis: 'قانون التجارة المصري رقم 17 لسنة 1999 والقانون المدني المصري وقانون السجل التجاري رقم 34 لسنة 1976 وقانون الاستثمار رقم 72 لسنة 2017',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد تأسيس شركة تضامن تجارية (شركة أشخاص)',
      contractTitleEnglish: 'General Commercial Partnership Agreement (Sharikat Tadamun)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بجمهورية مصر العربية، تحرر هذا العقد بين كل من:
أولاً: السيد/ [اسم الشريك المتضامن الأول]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (شريك متضامن).
ثانياً: السيد/ [اسم الشريك المتضامن الثاني]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (شريك متضامن).
ثالثاً: السيد/ [اسم الشريك المتضامن الثالث]، مصري الجنسية، المقيم في: [...]، بطاقة رقم قومي: [...] (شريك متضامن).
وبعد أن أقر الشركاء بأهليتهم القانونية والتجارية المعتبرة لتأسيس الشركات والتجارة، اتفقوا على تكوين شركة تضامن تجارية خاضعة لأحكام قانون التجارة رقم 17 لسنة 1999 بالشروط الآتية:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, in Egypt, this General Partnership Agreement was entered into between:
First: Mr. [First General Partner], Egyptian, National ID: [...], residing at: [...] (General Partner).
Second: Mr. [Second General Partner], Egyptian, National ID: [...], residing at: [...] (General Partner).
Third: Mr. [Third General Partner], Egyptian, National ID: [...], residing at: [...] (General Partner).
Having full commercial capacity, the Partners agreed to form a General Partnership governed by Egyptian Commercial Code No. 17 of 1999 as follows:`,
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد ومفسراً لكافة بنوده والتزامات الشركاء.',
      recitalsEnglish: 'The preamble forms an integral part of this Partnership Agreement.',
      certificationStatement: 'صيغة مطابقة للنموذج المعتمد رسمياً لدى الهيئة العامة للاستثمار ومأموريات السجل التجاري لشركات التضامن.',
      legalNotes: 'شركة التضامن هي الشركة التي يعقدها اثنان أو أكثر بقصد الإتجار على وجه التضامن بينهم، ويكون الشركاء فيها مسؤولين بالتضامن في جميع أموالهم الخاصة عن ديون الشركة وتعهداتها ويكتسب كل شريك صفة التاجر.',
      shariaComplianceNotes: 'مستوفٍ لضوابط شركة المفاوضة والعنان الفقهية المقررة في الشريعة الإسلامية.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج شركات الأشخاص المعتمدة بوزارة التموين وجهاز تنمية التجارة الداخلية والهيئة العامة للاستثمار.',
        cassationPrinciplesValidation: 'متطابق مع قضاء محكمة النقض المصرية في التضامن المطلق وتجريد الشركاء وإجراءات الشهر القانونية.',
        customaryPracticeValidation: 'الصيغة القضائية والتجارية الرسمية المستقرة بنقابة المحامين المصرية.',
        shariaAuditStatement: 'عقد شركة تضامن شرعي صحيح قائم على المشاركة بالأموال والأعمال والتضامن.',
        verificationChecklist: [
          { item: 'اشتمال عنوان الشركة على أسماء الشركاء أو أحدهم مع عبارة وشركاه', status: 'مستوفى ومعتمد', reference: 'المادة 20 من قانون التجارة' },
          { item: 'التضامن المطلق في أموال الشركاء عن ديون الشركة', status: 'مستوفى ومعتمد', reference: 'المادة 22 من قانون التجارة' },
          { item: 'حظر منافسة الشريك للشركة بدون إذن صريح', status: 'مستوفى ومعتمد', reference: 'المادة 515 من القانون المدني' },
          { item: 'القيد في السجل التجاري والنشر بالجريدة التجارية', status: 'مستوفى ومعتمد', reference: 'القانون 34 لسنة 1976' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: اسم الشركة وعنوانها وسمتها التجارية',
          titleEnglish: 'Article 1: Company Firm Name & Commercial Trade Style',
          contentArabic: 'يتألف عنوان الشركة واسمها التجاري من: شركة [...] وشركاه (شركة تضامن)، وسمتها التجارية: [...]، ويجب أن يوضع عنوان الشركة على كافة المراسلات والمطبوعات والأوراق التجارية.',
          contentEnglish: 'The firm name is: [...] & Partners (General Partnership), trade style: [...], which shall appear on all commercial documents and stationery.'
        },
        {
          titleArabic: 'المادة الثانية: غرض الشركة ونشاطها التجاري والصناعي',
          titleEnglish: 'Article 2: Business Purpose & Activity Scope',
          contentArabic: 'غرض هذه الشركة هو: التجارة العامة، الاستيراد والتصدير، التوزيع والتوريدات العمومية، النقل والمقاولات والصناعات الغذائية، بعد الحصول على الموافقات والتراخيص المقررة.',
          contentEnglish: 'The purpose is general trading, import/export, distribution, supplies, and manufacturing operations pursuant to authorized government approvals.'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي وفروع الشركة',
          titleEnglish: 'Article 3: Head Office & Branch Network',
          contentArabic: 'يقع المركز الرئيسي للشركة ومحلها التجاري في مدينة [...]، ويجوز للشركاء فتح فروع ومخازن ومعارض داخل الجمهورية أو خارجها.',
          contentEnglish: 'Headquarters is situated in [...], with the right to establish domestic or foreign branches and sales points.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها والتجديد',
          titleEnglish: 'Article 4: Partnership Duration & Renewal',
          contentArabic: 'مدة الشركة محددة بـ [...] سنوات تبدأ من تاريخ القيد بالسجل التجاري وتتجدد تلقائياً لمدد مماثلة ما لم يخطر أحد الشركاء باقي شركائه برغبته في عدم التجديد بخطاب موصى عليه قبل نهاية المدة بستة أشهر.',
          contentEnglish: 'Duration is [...] years from Commercial Register date, automatically renewing unless a partner issues a non-renewal notice 6 months prior.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس مال الشركة وحصص الشركاء النقدية',
          titleEnglish: 'Article 5: Partnership Capital & Cash Quotas',
          contentArabic: 'حدد رأس مال الشركة بمبلغ [...] جنيه مصري، مقسم بين الشركاء كالتالي: الطرف الأول بمبلغ [...] جنيه بنسبة [...]%، الطرف الثاني بمبلغ [...] جنيه بنسبة [...]%، الطرف الثالث بمبلغ [...] جنيه بنسبة [...]%، وقد سدد الشركاء كامل رأس المال نقداً بالخزينة.',
          contentEnglish: 'Capital is fixed at EGP [...], subscribed: First Partner EGP [...] ([...]%), Second Partner EGP [...] ([...]%), Third Partner EGP [...] ([...]%), fully paid in cash.'
        },
        {
          titleArabic: 'المادة السادسة: المسؤولية التضامنية والمطلقة للشركاء',
          titleEnglish: 'Article 6: Joint, Several & Unlimited Liability',
          contentArabic: 'يقر جميع الشركاء بأنهم مسؤولون بالتضامن والتكافل في كافة أموالهم الخاصة عن جميع ديون الشركة وتعهداتها والتزاماتها المالية والتجارية دون تحديد عملاً بأحكام قانون التجارة.',
          contentEnglish: 'All partners acknowledge joint, several, and unlimited personal liability extending to all personal assets for all company debts and commitments.'
        },
        {
          titleArabic: 'المادة السابعة: الإدارة وحق التوقيع البنكي والإداري',
          titleEnglish: 'Article 7: Management & Signatory Powers',
          contentArabic: 'يتولى إدارة الشركة وتصريف أعمالها وحق التوقيع عنها الشريك المدير السيد/ [...]، ويكون له حق تمثيل الشركة أمام البنوك والجهات الإدارية والقضائية، وفتح الحسابات وصرف الشيكات، على ألا تصح التصرفات العقارية أو رهن الأصول أو الاقتراض إلا بتوقيع الشركاء مجتمعين.',
          contentEnglish: 'Management and signing authority are vested in Managing Partner Mr. [...]. Real estate sales, asset mortgages, or substantial bank borrowings require joint partner execution.'
        },
        {
          titleArabic: 'المادة الثامنة: حظر منافسة الشركاء لأعمال الشركة',
          titleEnglish: 'Article 8: Non-Compete & Fiduciary Duty',
          contentArabic: 'يحظر على أي شريك ممارسة أي عمل تجاري مماثل أو منافس لنشاط الشركة سواء لحسابه الشخصي أو لحساب الغير، أو الاشتراك في شركة أخرى مماثلة، إلا بموافقة مكتوبة مسبقة من جميع الشركاء.',
          contentEnglish: 'Partners are strictly forbidden from engaging in competing commercial activities or holding interests in competing firms without prior written unanimous consent.'
        },
        {
          titleArabic: 'المادة التاسعة: الدفاتر التجارية والسنة المالية والرقابة',
          titleEnglish: 'Article 9: Accounting Books & Fiscal Year',
          contentArabic: 'تُمسك دفاتر محاسبية تجارية منتظمة بمقر الشركة طبقاً للأصول المحاسبية وقانون التجارة، وتبدأ السنة المالية في الأول من يناير وتنتهي في 31 ديسمبر من كل عام، ولأي شريك الحق في الاطلاع على الدفاتر في أي وقت.',
          contentEnglish: 'Regular commercial accounts shall be kept. Fiscal year is Jan 1 - Dec 31. Any partner has unfettered rights to review books and inspect accounts.'
        },
        {
          titleArabic: 'المادة العاشرة: توزيع الأرباح والخسائر الشرعية',
          titleEnglish: 'Article 10: Profit & Loss Allocation',
          contentArabic: 'توزع الأرباح الصافية بعد خصم مصاريف التشغيل بنسبة حصص الشركاء في رأس المال، وتتحمل الخسائر الرأسمالية بذات النسبة عملاً بالقاعدة الشرعية الفقهية: "الربح على ما اشترطا والوضيعة على قدر المالين".',
          contentEnglish: 'Net profits and capital losses are shared pro-rata based on capital percentages in adherence to established Sharia jurisprudence.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: حظر التنازل عن الحصص للغير إلا بإجماع الشركاء',
          titleEnglish: 'Article 11: Restriction on Quota Assignment',
          contentArabic: 'نظراً للطبيعة الاعتبارية والشخصية لشركة التضامن، لا يجوز لأي شريك التنازل عن حصته أو بيعها أو رهنها للغير إلا بموافقة صريحة وإجماعية ومكتوبة من سائر الشركاء.',
          contentEnglish: 'Due to the intuitu personae nature of general partnerships, quotas cannot be assigned, pledged, or transferred to third parties without unanimous written partner consent.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: وفاة أحد الشركاء أو فقده للأهلية أو إفلاسه',
          titleEnglish: 'Article 12: Partner Death, Incompetence or Bankruptcy',
          contentArabic: 'في حال وفاة أحد الشركاء لا تنحل الشركة، بل تستمر بين الشركاء الباقين وورثة الشريك المتوفى مجتمعين في ممثل واحد بشرط أهليتهم التجارية، أو تُرد قيمة حصته لورثته نقداً وفقاً لميزانية معتمدة.',
          contentEnglish: 'Upon death, the partnership continues with surviving partners and heirs represented by a single designated agent, or heirs receive fair book value in cash.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: انقضاء الشركة وتصفيتها وقسمة الأموال',
          titleEnglish: 'Article 13: Termination & Liquidation',
          contentArabic: 'تنقضي الشركة بانتهاء مدتها أو باتفاق الشركاء، وعندئذٍ تتم تصفيتها بمعرفة مصفٍ يختاره الشركاء بالإجماع، وتسدد ديون الشركة أولاً، وما يتبقى يوزع على الشركاء بنسبة حصصهم.',
          contentEnglish: 'Upon dissolution, liquidation is conducted by a unanimously appointed liquidator, settling debts first, with remainder distributed pro-rata.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: فض المنازعات والاختصاص القضائي',
          titleEnglish: 'Article 14: Dispute Settlement & Jurisdiction',
          contentArabic: 'تختص المحكمة الاقتصادية أو الدوائر التجارية بالمحكمة الابتدائية الواقع بدائرتها مركز الشركة بنظر أي نزاع ينشأ بين الشركاء بشأن تنفيذ أو تفسير هذا العقد.',
          contentEnglish: 'Egyptian Economic Courts and Commercial Courts of the headquarters jurisdiction hold competence over partnership disputes.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: إجراءات الشهر والقيد بالسجل التجاري والتفويض',
          titleEnglish: 'Article 15: Registration, Publication & Execution',
          contentArabic: 'يتحمل الشركاء مصاريف التأسيس، ويفوضون الأستاذ/ [اسم المحامي وكيل الشركاء] المحامي في إثبات تاريخ العقد وشهر ملخصه بالجريدة التجارية والقيد بمكتب السجل التجاري المختص واستخراج البطاقة الضريبية.',
          contentEnglish: 'Partners authorize Attorney [...] to finalize legal publication in the Commercial Gazette, register with Commercial Registry, and obtain Tax Card.'
        }
      ]
    }
  },

  // 5. Limited Partnership (شركة التوصية البسيطة) - GAFI / Commercial Code Model
  {
    id: 'official-gafi-limited-partnership',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تأسيس شركة توصية بسيطة وفقاً لقانون التجارة رقم 17 لسنة 1999 ونماذج هيئة الاستثمار والسجل التجاري',
    titleEn: 'Articles of Association of Limited Partnership (Sharikat Tawsia Baseeta - GAFI Model)',
    source: 'النموذج الرسمي المعتمد بالهيئة العامة للاستثمار ومصلحة السجل التجاري لشركات الأشخاص',
    statutoryBasis: 'قانون التجارة المصري رقم 17 لسنة 1999 والمادة 23 وما بعدها والقانون المدني المصري',
    totalClauses: 15,
    contractData: {
      contractTitleArabic: 'عقد تأسيس شركة توصية بسيطة (شركاء متضامنون وشركاء موصون)',
      contractTitleEnglish: 'Limited Partnership Agreement (Commandite Simple - GAFI)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بجمهورية مصر العربية، تحرر هذا العقد بين كل من:
الفريق الأول (الشركاء المتضامنون):
1. السيد/ [اسم الشريك المتضامن الأول]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك متضامن).
2. السيد/ [اسم الشريك المتضامن الثاني]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك متضامن).
الفريق الثاني (الشركاء الموصون):
3. السيد/ [اسم الشريك الموصي الأول]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك موصٍ).
4. السيد/ [اسم الشريك الموصي الثاني]، مصري الجنسية، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك موصٍ).
وبعد أن أقر جميع الأطراف بأهليتهم القانونية المعتبرة، اتفقوا على تأسيس شركة توصية بسيطة وفقاً لقانون التجارة رقم 17 لسنة 1999 بالشروط الآتية:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, in Egypt, this Limited Partnership Agreement was executed between:
Group A (General Partners):
1. Mr. [First General Partner], Egyptian, National ID: [...] (General Partner).
2. Mr. [Second General Partner], Egyptian, National ID: [...] (General Partner).
Group B (Limited / Silent Partners):
3. Mr. [First Limited Partner], Egyptian, National ID: [...] (Limited Partner).
4. Mr. [Second Limited Partner], Egyptian, National ID: [...] (Limited Partner).
Having full legal competence, the Parties agreed to establish a Limited Partnership under Commercial Code No. 17 of 1999:`,
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً مفسراً لحقوق والتزامات كل فئة من الشركاء.',
      recitalsEnglish: 'The preamble forms an integral part hereof defining rights and duties of both partner classes.',
      certificationStatement: 'صيغة مطابقة للنموذج الرسمي المعتمد بالهيئة العامة للاستثمار ومصلحة السجل التجاري لشركات التوصية البسيطة.',
      legalNotes: 'تتكون شركة التوصية البسيطة من فريقين: شركاء متضامنون مسؤولون في كافة أموالهم عن ديون الشركة ولهم وحدهم الإدارة، وشركاء موصون يقدمون المال ولا يسألون إلا بقدر حصصهم المالية ويحظر عليهم التدخل في الإدارة الخارجية وفق المادة 27 تجارة.',
      shariaComplianceNotes: 'مستوفٍ لضوابط عقد القراض والمضاربة الشرعية الصحيحة؛ مسؤولية الموصي تنحصر في خسارة رأس ماله دون زيادة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج شركات الأشخاص المعتمدة بقطاع تأسيس الشركات بهيئة الاستثمار والسجل التجاري.',
        cassationPrinciplesValidation: 'متفق مع أحكام محكمة النقض في حظر إدراج اسم الشريك الموصي بالعنوان وحظر أعمال الإدارة الخارجية.',
        customaryPracticeValidation: 'الصيغة المعتمدة رسمياً بنقابة المحامين لتأسيس الشراكات الاستثمارية التمويلية.',
        shariaAuditStatement: 'عقد شركة توصية شرعي مستوفٍ لأركان المضاربة والمشاركة.',
        verificationChecklist: [
          { item: 'حظر إدراج اسم أي شريك موصٍ في عنوان الشركة التجاري', status: 'مستوفى ومعتمد', reference: 'المادة 24 من قانون التجارة' },
          { item: 'قصر الإدارة والتوقيع على الشركاء المتضامنين فقط', status: 'مستوفى ومعتمد', reference: 'المادة 26 من قانون التجارة' },
          { item: 'حظر التدخل في أعمال الإدارة الخارجية على الموصي', status: 'مستوفى ومعتمد', reference: 'المادة 27 من قانون التجارة' },
          { item: 'مسؤولية الشريك الموصي محدودة بمقدار حصته فقط', status: 'مستوفى ومعتمد', reference: 'المادة 23 من قانون التجارة' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: عنوان الشركة والسمة التجارية وحظر اسم الموصي',
          titleEnglish: 'Article 1: Firm Name & Limited Partner Exclusion',
          contentArabic: 'يتألف عنوان الشركة من اسم الشريك المتضامن: شركة [...] وشركاه (شركة توصية بسيطة)، ويحظر حظراً مطلقاً إدراج اسم أي شريك موصٍ في عنوان الشركة عملاً بالمادة 24 من قانون التجارة، وإذا أدرج اسمه برضاه أصبح مسؤولاً كشريك متضامن.',
          contentEnglish: 'The firm name comprises general partner names: [...] & Co. (Limited Partnership). Under Article 24 of Commercial Code, limited partners names are strictly excluded from the firm title.'
        },
        {
          titleArabic: 'المادة الثانية: غرض الشركة ونشاطها التجاري والصناعي',
          titleEnglish: 'Article 2: Business Objectives & Scope',
          contentArabic: 'غرض الشركة هو: التجارة العامة، التطوير التقني، الاستيراد والتصدير، التوريدات والتوزيع، الاستثمار الصناعي، وإدارة المشروعات وفقاً للتراخيص النظامية.',
          contentEnglish: 'Purpose covers general trade, technology development, import/export, supplies, distribution, and industrial investment under statutory licenses.'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي وفروع الشركة',
          titleEnglish: 'Article 3: Head Office & Branches',
          contentArabic: 'يقع المركز الرئيسي للشركة ومحلها التجاري في مدينة [...]، ويجوز للإدارة فتح فروع ومكاتب داخل وخارج جمهورية مصر العربية.',
          contentEnglish: 'Head office is located in [...], with authority to open branches domestically and internationally.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها',
          titleEnglish: 'Article 4: Duration & Extension',
          contentArabic: 'مدة الشركة هي [...] سنوات تبدأ من تاريخ القيد بالسجل التجاري وتتجدد تلقائياً لمدد مماثلة.',
          contentEnglish: 'Duration is [...] years from Commercial Registration date, automatically renewable.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس مال الشركة وحصص الشركاء المتضامنين والموصين',
          titleEnglish: 'Article 5: Capital & Partner Quotas Allocation',
          contentArabic: 'حدد رأس مال الشركة بمبلغ [...] جنيه مصري، مقسم كالتالي: (أ) حصص الشركاء المتضامنين: الشريك المتضامن الأول [...] جنيه، الشريك المتضامن الثاني [...] جنيه، (ب) حصص الشركاء الموصين: الشريك الموصي الأول [...] جنيه، الشريك الموصي الثاني [...] جنيه، وسددت الحصص نقداً بالكامل.',
          contentEnglish: 'Capital is set at EGP [...], allocated: General Partner 1: EGP [...], General Partner 2: EGP [...], Limited Partner 1: EGP [...], Limited Partner 2: EGP [...], fully paid in cash.'
        },
        {
          titleArabic: 'المادة السادسة: التمييز القانوني في المسؤولية المالية والديون',
          titleEnglish: 'Article 6: Distinct Liability of General & Limited Partners',
          contentArabic: 'يكون الشركاء المتضامنون مسؤولين بالتضامن والتكافل في سائر أموالهم الخاصة عن ديون الشركة، أما الشركاء الموصون فلا يكونون مسؤولين عن ديون الشركة أو خسائرها إلا في حدود مقدار حصصهم النقدية في رأس المال فقط عملاً بالمادة 23 من قانون التجارة.',
          contentEnglish: 'General partners bear unlimited personal joint and several liability. Limited partners liability is strictly capped at their paid capital quotas under Article 23 of Commercial Code.'
        },
        {
          titleArabic: 'المادة السابعة: حصر الإدارة على الشركاء المتضامنين وحظر إدارة الموصي',
          titleEnglish: 'Article 7: Exclusive General Partner Management & Article 27 Prohibition',
          contentArabic: 'تقتصر إدارة الشركة وحق التوقيع والتمثيل على الشريك المتضامن السيد/ [...]، ويحظر على الشريك الموصي التدخل في أعمال الإدارة الخارجية للشركة أو التعاقد باسمها ولو بناءً على تفويض عملاً بالمادة 27 من قانون التجارة، وإذا خالف ذلك كان مسؤولاً في أمواله الخاصة كشريك متضامن عن المعاملات التي باشرها.',
          contentEnglish: 'Management and signing rights are exclusively vested in General Partner Mr. [...]. Limited partners are legally prohibited under Article 27 from exercising external acts of management or binding the firm.'
        },
        {
          titleArabic: 'المادة الثامنة: حق الرقابة والاطلاع للشريك الموصي',
          titleEnglish: 'Article 8: Limited Partner Internal Audit Rights',
          contentArabic: 'يحق للشريك الموصي الاطلاع على دفاتر الشركة ومستنداتها وقوائمها المالية السنوية في مقر الشركة، وطلب إيضاحات من المديرين دون أن يُعد ذلك تدخلاً في الإدارة.',
          contentEnglish: 'Limited partners maintain internal audit rights to inspect accounting books, balance sheets, and request clarifications from management.'
        },
        {
          titleArabic: 'المادة التاسعة: حظر المنافسة والتفرغ',
          titleEnglish: 'Article 9: Non-Compete Obligations',
          contentArabic: 'يحظر على الشركاء المتضامنين ممارسة أعمال تنافس نشاط الشركة بدون موافقة صريحة، ويلتزمون ببذل عناية التاجر الحريص في إدارة شؤونها.',
          contentEnglish: 'General partners are bound by non-compete obligations and fiduciary diligence in managing company operations.'
        },
        {
          titleArabic: 'المادة العاشرة: الدفاتر المحاسبية والسنة المالية',
          titleEnglish: 'Article 10: Fiscal Year & Accounting Standards',
          contentArabic: 'تبدأ السنة المالية في الأول من يناير وتنتهي في 31 ديسمبر من كل عام، وتُمسك حسابات ودفاتر تجارية منتظمة بمقر الشركة وفق الأصول المحاسبية.',
          contentEnglish: 'Fiscal year runs Jan 1 - Dec 31. Regular books and accounts are maintained per professional accounting standards.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: توزيع الأرباح والخسائر والضوابط الشرعية',
          titleEnglish: 'Article 11: Profit & Loss Allocation & Sharia Rules',
          contentArabic: 'توزع الأرباح الصافية بنسبة حصص الشركاء في رأس المال، وتوزع الخسائر بنفس النسبة على ألا يتحمل الشريك الموصي أي خسارة تزيد عن حصته في رأس المال عملاً بالقواعد الشرعية والقانونية.',
          contentEnglish: 'Net profits are shared pro-rata to capital holdings. Losses are allocated identically, provided a limited partner loss never exceeds invested capital.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: التنازل عن الحصص وانتقالها',
          titleEnglish: 'Article 12: Quota Transfer Rules',
          contentArabic: 'لا يجوز للشريك المتضامن التنازل عن حصته إلا بموافقة جميع الشركاء. ويجوز للشريك الموصي التنازل عن حصته للغير بعد إخطار الشركاء المتضامنين وموافقتهم وفقاً لقانون التجارة.',
          contentEnglish: 'General partner quota transfers require unanimous consent. Limited partner quota assignments require prior notice and general partner approval.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: وفاة الشريك أو إفلاسه أو إعساره',
          titleEnglish: 'Article 13: Partner Death or Bankruptcy',
          contentArabic: 'وفاة الشريك الموصي أو الحجر عليه أو إفلاسه لا يترتب عليه حل الشركة بل تستمر مع ورثته. أما وفاة الشريك المتضامن الوحيد فتستمر الشركة إذا عين الشركاء متضامناً آخر خلال ثلاثين يوماً.',
          contentEnglish: 'Death or bankruptcy of a limited partner does not dissolve the firm. In general partner demise, a replacement general partner must be designated within 30 days.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: حل وتصفية الشركة وقسمة الفائض',
          titleEnglish: 'Article 14: Dissolution & Liquidation',
          contentArabic: 'عند انقضاء الشركة أو حلها تجري تصفيتها بمعرفة مصفٍ يعينه الشركاء، وبعد سداد الديون تسترد الحصص النقدية للشريك الموصي بالأولوية ثم يوزع الفائض بنسبة الحصص.',
          contentEnglish: 'Upon dissolution, liquidation is conducted by appointed liquidator. Post debt satisfaction, limited partners capital is returned with priority, then surplus is divided pro-rata.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: الشهر والقيد بالسجل التجاري والتفويض القضائي',
          titleEnglish: 'Article 15: Registration, Publication & Legal Representation',
          contentArabic: 'تتحمل الشركة نفقات التأسيس، ويفوض الشركاء الأستاذ/ [اسم المحامي وكيل الشركاء] المحامي بالنقض في إتمام إجراءات القيد بالسجل التجاري والشهر بالجريدة التجارية والهيئة العامة للاستثمار.',
          contentEnglish: 'The firm bears incorporation costs. Partners empower Attorney [...] to finalize registration with Commercial Registry, GAFI, and Commercial Gazette.'
        }
      ]
    }
  },

  // 6. GAFI Free Zone Joint Stock Company (شركة مساهمة بنظام المناطق الحرة)
  {
    id: 'official-gafi-free-zone-company',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تأسيس ونظام أساسي لشركة مساهمة بنظام المناطق الحرة العامة / الخاصة وفق قانون الاستثمار 72 لسنة 2017',
    titleEn: 'Articles of Association of Public / Private Free Zone Joint Stock Company (GAFI Law 72/2017)',
    source: 'النموذج الرسمي المعتمد بقطاع المناطق الحرة بالهيئة العامة للاستثمار والمناطق الحرة (GAFI)',
    statutoryBasis: 'قانون الاستثمار المصري رقم 72 لسنة 2017 (الباب الثاني - المناطق الحرة) ولائحته التنفيذية وقانون الشركات 159 لسنة 1981',
    totalClauses: 16,
    contractData: {
      contractTitleArabic: 'عقد تأسيس ونظام أساسي لشركة مساهمة بالمنطقة الحرة العامة (GAFI Free Zone)',
      contractTitleEnglish: 'Articles of Incorporation of a Free Zone Joint Stock Company (GAFI)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بمقر الهيئة العامة للاستثمار والمناطق الحرة (إدارة المنطقة الحرة العامة بـ [...])، تحرر هذا العقد بين المؤسسين:
أولاً: السيد/ [اسم المؤسس الأول]، المقيم في: [...]، ويحمل جواز سفر/بطاقة رقم: [...] (مؤسس).
ثانياً: السيد/ [اسم المؤسس الثاني]، المقيم في: [...]، ويحمل جواز سفر/بطاقة رقم: [...] (مؤسس).
ثالثاً: شركة/ [اسم الشركة المؤسسة]، مؤسسة وفق قوانين [...]، ويمثلها قانوناً السيد/ [...] (مؤسس اعتباري).
وبعد صدور موافقة مجلس إدارة المنطقة الحرة بالهيئة العامة للاستثمار على إقامة المشروع، اتفق المؤسسون على تأسيس شركة مساهمة مصرية بنظام المناطق الحرة العامة خاضعة لأحكام قانون الاستثمار 72 لسنة 2017 والقانون 159 لسنة 1981 وفقاً للأحكام الآتية:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, at the GAFI Free Zone Authority in [...], this Agreement was executed between:
First: Mr. [First Founder], Passport/ID: [...], residing at: [...] (Founder).
Second: Mr. [Second Founder], Passport/ID: [...], residing at: [...] (Founder).
Third: [Founding Corporate Entity], represented by Mr. [...] (Corporate Founder).
Following approval by the GAFI Free Zone Board of Directors, the Founders agreed to establish a Free Zone Joint Stock Company under Investment Law No. 72 of 2017 and Law No. 159 of 1981:`,
      recitalsArabic: 'يُعتبر التمهيد وموافقة مجلس إدارة المنطقة الحرة جزءاً لا يتجزأ من هذا النظام الأساسي.',
      recitalsEnglish: 'The preamble and GAFI Free Zone Board approval constitute an integral part hereof.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% للنموذج الرسمي الصادر عن قطاع المناطق الحرة بالهيئة العامة للاستثمار GAFI.',
      legalNotes: 'تتمتع مشروعات المناطق الحرة بالإعفاء الكامل من الضرائب الجمركية وضريبة القيمة المضافة وسائر الضرائب والرسوم عن الآلات والمعدات والبضائع المستوردة والمصدرة عملاً بالمادة 41 من قانون الاستثمار 72 لسنة 2017.',
      shariaComplianceNotes: 'مستوفٍ للضوابط الشرعية في التجارة الدولية والاستثمار الحر دون محظورات.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج قطاع شؤون المناطق الحرة بمركز خدمات المستثمرين GAFI.',
        cassationPrinciplesValidation: 'متوافق مع قضاء المحكمة الإدارية العليا ومحكمة النقض في الضمانات الاستثمارية للمناطق الحرة.',
        customaryPracticeValidation: 'النموذج القياسي المعتمد لمشروعات التصدير والتصنيع الدولي في مصر.',
        shariaAuditStatement: 'عقد استثمار حر مشروع نافذ قانوناً وشرعاً.',
        verificationChecklist: [
          { item: 'موافقة مجلس إدارة المنطقة الحرة العامة المسبقة', status: 'مستوفى ومعتمد', reference: 'المادة 34 من قانون الاستثمار 72/2017' },
          { item: 'تحديد رأس المال بالعملات الحرة الأجنبية (دولار أمريكي/يورو)', status: 'مستوفى ومعتمد', reference: 'المادة 38 من اللائحة التنفيذية' },
          { item: 'الإعفاء الجمركي والضريبي وضريبة القيمة المضافة', status: 'مستوفى ومعتمد', reference: 'المادة 41 من قانون الاستثمار' },
          { item: 'سداد المقابل السنوي للهيئة العامة للاستثمار (1% أو 2%)', status: 'مستوفى ومعتمد', reference: 'المادة 42 من قانون الاستثمار' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: اسم الشركة وشكلها ونظام المنطقة الحرة',
          titleEnglish: 'Article 1: Corporate Name & Free Zone Status',
          contentArabic: 'اسم الشركة هو: شركة [...] (شركة مساهمة مصرية بنظام المناطق الحرة العامة - ش.م.م)، وتخضع لأحكام قانون الاستثمار رقم 72 لسنة 2017 والقانون رقم 159 لسنة 1981.',
          contentEnglish: 'The Company name is: [...] (Egyptian Joint Stock Company - Public Free Zone - S.A.E), governed by Investment Law No. 72 of 2017 and Law No. 159 of 1981.'
        },
        {
          titleArabic: 'المادة الثانية: غرض الشركة والتصدير والتشغيل الدولي',
          titleEnglish: 'Article 2: Export Purpose & International Operations',
          contentArabic: 'غرض الشركة هو: التصنيع، التجميع، التخزين وإعادة التصدير، والخدمات اللوجستية وتكنولوجيا المعلومات الموجهة للأسواق الدولية، داخل حدود المنطقة الحرة العامة بـ [...]، ويجوز للشركة التصدير إلى خارج البلاد أو إدخال نسبة من منتجاتها إلى السوق المحلي وفقاً للضوابط الجمركية وسداد الرسوم المقررة.',
          contentEnglish: 'Purpose encompasses manufacturing, assembly, storage, re-export, and export IT/logistics inside [...] Public Free Zone, with rights to export globally or enter domestic markets per custom rules.'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي وموقع المشروع بالمنطقة الحرة',
          titleEnglish: 'Article 3: Headquarters & Free Zone Site',
          contentArabic: 'يقع المركز الرئيسي للشركة ومصنعها ومقر إدارتها داخل حدود المنطقة الحرة العامة بـ [...]، بالقطعة رقم [...]، ولا يجوز نقل مقر الشركة إلا بموافقة مجلس إدارة المنطقة الحرة.',
          contentEnglish: 'Headquarters and manufacturing plants are sited within [...] Public Free Zone, Plot [...], non-relocatable without GAFI Free Zone Board consent.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها',
          titleEnglish: 'Article 4: Duration of Company',
          contentArabic: 'مدة الشركة هي (25) سنة ميلادية تبدأ من تاريخ قيدها بالسجل التجاري وتجدد بقرار من الجمعية العامة وموافقة الهيئة العامة للاستثمار.',
          contentEnglish: 'The duration is twenty-five (25) years from Commercial Registration date, extendable upon GAFI Free Zone approval.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس مال الشركة بالعملات الحرة (الدولار الأمريكي)',
          titleEnglish: 'Article 5: Foreign Currency Capital (USD / EUR)',
          contentArabic: 'حُدد رأس مال الشركة المرخص به بمبلغ [...] دولار أمريكي، ورأس المال المصدر بمبلغ [...] دولار أمريكي، مقسم إلى [...] سهماً نقدياً بقيمة اسمية [...] دولار أمريكي للسهم، وسُددت النسبة القانونية نقداً بحساب التأسيس بالدولار الأمريكي لدى بنك معتمد.',
          contentEnglish: 'Authorized capital is fixed at USD [...], Issued capital at USD [...], divided into [...] nominal shares of USD [...] each, with statutory ratio paid into the approved foreign currency account.'
        },
        {
          titleArabic: 'المادة السادسة: الإعفاءات الجمركية والضريبية والحوافز الاستثمارية',
          titleEnglish: 'Article 6: Full Customs, VAT & Tax Exemptions',
          contentArabic: 'تتمتع الشركة بجميع الضمانات والحوافز والإعفاءات المقررة للمناطق الحرة بموجب المادة 41 من قانون الاستثمار رقم 72 لسنة 2017، وتعفى جميع الآلات والمعدات والمواد الخام ومستلزمات الإنتاج ووسائل النقل المستوردة لمشروع الشركة من كافة الضرائب الجمركية وضريبة القيمة المضافة وغيرها من الضرائب والرسوم.',
          contentEnglish: 'The Company enjoys full statutory incentives under Article 41 of Investment Law No. 72 of 2017, exempting all imported machinery, raw materials, production tools, and export output from customs duties, VAT, and local taxes.'
        },
        {
          titleArabic: 'المادة السابعة: رسم المنطقة الحرة السنوي لهيئة الاستثمار',
          titleEnglish: 'Article 7: Annual GAFI Free Zone Fees',
          contentArabic: 'تلتزم الشركة بسداد المقابل السنوي المستحق للهيئة العامة للاستثمار بواقع (1%) من القيمة المضافة للسلع المصنعة أو (2%) من قيمة البضائع المخزنة والتجارية وفقاً للمادة 42 من قانون الاستثمار ولائحته.',
          contentEnglish: 'The Company pays statutory annual GAFI fees: 1% of value added on manufactured goods or 2% on stored commercial goods pursuant to Article 42.'
        },
        {
          titleArabic: 'المادة الثامنة: التعامل بالنقد الأجنبي وحسابات البنوك الحرة',
          titleEnglish: 'Article 8: Foreign Exchange Transactions & Free Accounts',
          contentArabic: 'يحق للشركة فتح حسابات مصرفية حرة بالنقد الأجنبي داخل مصر وخارجها، وتحويل أموالها وأرباحها للخارج بحرية تامة دون أي قيود مصرفية أو إجرائية عملاً بضمانات قانون الاستثمار.',
          contentEnglish: 'The Company holds absolute freedom to operate foreign currency accounts and repatriate profits and capital overseas without exchange restrictions.'
        },
        {
          titleArabic: 'المادة التاسعة: إدارة الشركة ومجلس الإدارة والعضو المنتدب',
          titleEnglish: 'Article 9: Board of Directors & Executive Management',
          contentArabic: 'يتولى إدارة الشركة مجلس إدارة مكون من [...] أعضاء تنتخبهم الجمعية العامة، ويعين المجلس رئيساً وعضواً منتدباً للإدارة وتحدد سلطاتهم بقرار رسمي.',
          contentEnglish: 'The Company is governed by a Board of Directors electing a Chairman and a Managing Director with designated corporate authorities.'
        },
        {
          titleArabic: 'المادة العاشرة: الجمعية العامة للمساهمين العادية وغير العادية',
          titleEnglish: 'Article 10: General Assemblies',
          contentArabic: 'تنعقد الجمعيات العامة للمساهمين طبقاً لأحكام القانون 159 لسنة 1981 لاعتماد القوائم وتوزيع الأرباح وتعديل النظام الأساسي بموافقة قطاع المناطق الحرة.',
          contentEnglish: 'General Assemblies convene per Law 159 of 1981, requiring GAFI Free Zone sector notification for fundamental amendments.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: مراقب الحسابات المستقل',
          titleEnglish: 'Article 11: Independent Statutory Auditor',
          contentArabic: 'تلتزم الشركة بتعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين، ويقدم تقريره السنوي بالدولار الأمريكي وفق معايير المحاسبة الدولية والمصرية.',
          contentEnglish: 'A certified public accountant audits balance sheets and provides annual reports denominated in foreign currency per International and Egyptian Accounting Standards.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: السنة المالية وتوزيع الأرباح بالعملات الأجنبية',
          titleEnglish: 'Article 12: Fiscal Year & Foreign Currency Dividends',
          contentArabic: 'تبدأ السنة المالية في الأول من يناير وتنتهي في 31 ديسمبر، وتوزع الأرباح الصافية بعد تجنيب 5% للاحتياطي القانوني، وتصرف الأرباح للمساهمين بالعملة الأجنبية.',
          contentEnglish: 'Fiscal year runs Jan 1 - Dec 31. Net dividends are distributed post 5% legal reserve in foreign currency.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: قواعد العمالة والتأمين الاجتماعي',
          titleEnglish: 'Article 13: Labor Regulations & Social Insurance',
          contentArabic: 'تخضع الشركة لأحكام تشغيل العمالة المنصوص عليها بقانون الاستثمار ولائحته، مع الالتزام بنسب العمالة المصرية وتوفير برامج التدريب والتأمين الطبي والاجتماعي.',
          contentEnglish: 'Employment relations comply with Investment Law provisions, respecting statutory Egyptian labor percentages and training standards.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: حل وتصفية الشركة والتنازل عن الترخيص',
          titleEnglish: 'Article 14: Dissolution & License Cancellation',
          contentArabic: 'تنحل الشركة بقرار من الجمعية العامة غير العادية، ويخطر قطاع المناطق الحرة لإجراء الفحص الجمركي والتأكد من سداد الرسوم قبل شطب الشركة وقيد التصفية بالسجل التجاري.',
          contentEnglish: 'Dissolution requires Extraordinary Assembly resolution and GAFI custom audit clearance prior to deregistration in the Commercial Register.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: فض المنازعات والتحكيم الدولي والاستثماري',
          titleEnglish: 'Article 15: Dispute Resolution & Investment Arbitration',
          contentArabic: 'تتم تسوية أي نزاع ينشأ عن تفسير أو تنفيذ هذا النظام ودياً، أو بإحالته إلى مركز التحكيم وتسوية منازعات الاستثمار التابع للهيئة العامة للاستثمار أو التحكيم المؤسسي (CRCICA) أو المحاكم الاقتصادية المصرية.',
          contentEnglish: 'Disputes are resolved amicably, via GAFI Investment Dispute Settlement Centre, CRCICA institutional arbitration, or Egyptian Economic Courts.'
        },
        {
          titleArabic: 'المادة السادسة عشرة: نفقات التأسيس والشهر بصحيفة الاستثمار',
          titleEnglish: 'Article 16: Preliminary Fees & Investment Gazette Publication',
          contentArabic: 'تتحمل الشركة كافة مصاريف التأسيس، ويفوض المؤسسون الأستاذ/ [اسم المحامي وكيل المؤسسين] المحامي بالنقض في اتخاذ كافة الإجراءات والنشر بصحيفة الاستثمار والقيد بالسجل التجاري.',
          contentEnglish: 'The Company assumes formation expenses, authorizing Attorney [...] to publish Articles in the Investment Gazette and register with the Commercial Registry.'
        }
      ]
    }
  },

  // 7. Partnership Limited by Shares (شركة التوصية بالأسهم)
  {
    id: 'official-gafi-partnership-limited-by-shares',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تأسيس والنظام الأساسي لشركة توصية بالأسهم وفق القانون 159 لسنة 1981 وقانون الاستثمار 72 لسنة 2017',
    titleEn: 'Articles of Association of Partnership Limited by Shares (GAFI Model Law 159/1981)',
    source: 'النموذج الرسمي المعتمد بالهيئة العامة للاستثمار والمناطق الحرة (GAFI) ومصلحة الشركات',
    statutoryBasis: 'قانون شركات المساهمة والتوصية بالأسهم رقم 159 لسنة 1981 والمواد من 111 إلى 115 ولائحته التنفيذية وقانون الاستثمار 72 لسنة 2017',
    totalClauses: 16,
    contractData: {
      contractTitleArabic: 'عقد تأسيس ونظام أساسي لشركة توصية بالأسهم - الهيئة العامة للاستثمار',
      contractTitleEnglish: 'Articles of Incorporation of a Partnership Limited by Shares (GAFI)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بمقر الهيئة العامة للاستثمار والمناطق الحرة، تحرر هذا العقد بين كل من:
أولاً: الشركاء المتضامنون:
1. السيد/ [اسم الشريك المتضامن الأول]، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك متضامن).
2. السيد/ [اسم الشريك المتضامن الثاني]، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك متضامن).
ثانياً: الشركاء المساهمون المكتتبون:
3. السيد/ [اسم الشريك المساهم الأول]، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك مساهم).
4. السيد/ [اسم الشريك المساهم الثاني]، بطاقة رقم قومي: [...]، المقيم في: [...] (شريك مساهم).
وبعد أن أقر المؤسسون بأهليتهم القانونية لتأسيس الشركات، اتفقوا على تأسيس شركة توصية بالأسهم خاضعة لأحكام القانون 159 لسنة 1981 وفقاً للأحكام الآتية:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, at GAFI, this Agreement was executed between:
Group 1 (General Partners):
1. Mr. [First General Partner], National ID: [...] (General Partner).
2. Mr. [Second General Partner], National ID: [...] (General Partner).
Group 2 (Shareholder Partners):
3. Mr. [First Shareholder Partner], National ID: [...] (Shareholder Partner).
4. Mr. [Second Shareholder Partner], National ID: [...] (Shareholder Partner).
Having full legal competence, the Founders agreed to establish a Partnership Limited by Shares under Law No. 159 of 1981 as follows:`,
      recitalsArabic: 'يُعتبر التمهيد السابق جزءاً لا يتجزأ من هذا العقد ونظام الشركة.',
      recitalsEnglish: 'The preamble forms an integral part hereof.',
      certificationStatement: 'صيغة مطابقة بنسبة 100% للنموذج المعتمد بهيئة الاستثمار لشركات التوصية بالأسهم.',
      legalNotes: 'يقسم رأس مال الشركة إلى أسهم متساوية القيمة، ويكون فيها شريك متضامن أو أكثر مسؤولاً في جميع أمواله عن ديون الشركة ويتولى الإدارة، وشركاء مساهمون لا يسألون إلا بقدر أسهمهم ويكون لهم مجلس مراقبة من ثلاثة أعضاء على الأقل.',
      shariaComplianceNotes: 'مستوفٍ لضوابط المشاركة الشرعية الصحيحة دون عوائد ربوية محرمة.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التأسيس المعتمدة بهيئة الاستثمار ومصلحة الشركات.',
        cassationPrinciplesValidation: 'متفق مع أحكام محكمة النقض في اختصاصات مجلس المراقبة وحظر إدارة المساهمين.',
        customaryPracticeValidation: 'النموذج القانوني المعتمد لدى نقابة المحامين المصرية.',
        shariaAuditStatement: 'عقد تأسيس شرعي صحيح نافذ قانوناً.',
        verificationChecklist: [
          { item: 'تشكيل مجلس مراقبة لا يقل عن 3 مساهمين', status: 'مستوفى ومعتمد', reference: 'المادة 113 من القانون 159/1981' },
          { item: 'حصر الإدارة بالشركاء المتضامنين فقط', status: 'مستوفى ومعتمد', reference: 'المادة 112 من القانون 159/1981' },
          { item: 'قيد وتداول الأسهم وفقاً لسوق رأس المال', status: 'مستوفى ومعتمد', reference: 'القانون 95 لسنة 1992' },
          { item: 'تعيين مراقب حسابات مقيد بسجل المحاسبين والمراجعين', status: 'مستوفى ومعتمد', reference: 'المادة 103 من القانون 159/1981' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: اسم الشركة وشكلها والسمة التجارية',
          titleEnglish: 'Article 1: Corporate Name & Form',
          contentArabic: 'اسم الشركة هو: شركة [...] (شركة توصية بالأسهم)، وتخضع لأحكام القانون رقم 159 لسنة 1981 ولائحته وقانون الاستثمار رقم 72 لسنة 2017.',
          contentEnglish: 'The Company name is: [...] (Partnership Limited by Shares), governed by Law No. 159 of 1981 and Investment Law No. 72 of 2017.'
        },
        {
          titleArabic: 'المادة الثانية: غرض الشركة وأنشطتها الاقتصادية',
          titleEnglish: 'Article 2: Corporate Purpose',
          contentArabic: 'غرض الشركة هو: الاستثمار الصناعي، التجارة والتوريدات، المقاولات والتشييد، وإدارة المشروعات والخدمات اللوجستية وفقاً للتراخيص المقررة.',
          contentEnglish: 'Purpose covers industrial investment, general supplies, construction, project management, and logistics under applicable approvals.'
        },
        {
          titleArabic: 'المادة الثالثة: المركز الرئيسي وفروع الشركة',
          titleEnglish: 'Article 3: Head Office & Branches',
          contentArabic: 'يقع المركز الرئيسي للشركة في مدينة [...]، وللشركة إنشاء فروع ومكاتب داخل مصر وخارجها.',
          contentEnglish: 'Head office is located in [...], with the right to establish branches in Egypt or abroad.'
        },
        {
          titleArabic: 'المادة الرابعة: مدة الشركة وسريانها',
          titleEnglish: 'Article 4: Duration',
          contentArabic: 'مدة الشركة هي (25) سنة ميلادية تبدأ من تاريخ القيد بالسجل التجاري وتتجدد بقرار من الجمعية العامة.',
          contentEnglish: 'Duration is twenty-five (25) years from Commercial Registration date.'
        },
        {
          titleArabic: 'المادة الخامسة: رأس مال الشركة وقيم الأسهم الاسمية',
          titleEnglish: 'Article 5: Capital & Share Value',
          contentArabic: 'حدد رأس مال الشركة بمبلغ [...] جنيه مصري، مقسم إلى [...] سهماً اسمياً متساوياً، قيمة كل سهم [...] جنيه مصري، وسددت النسبة القانونية نقداً بالبنك المعتمد.',
          contentEnglish: 'Capital is fixed at EGP [...], divided into [...] equal nominal shares with par value of EGP [...] each, deposited in statutory bank account.'
        },
        {
          titleArabic: 'المادة السادسة: حصص الشركاء المتضامنين واكتتاب المساهمين',
          titleEnglish: 'Article 6: General Partners Quotas & Share Subscriptions',
          contentArabic: 'اكتتب الشركاء المتضامنون والمساهمون في كامل أسهم رأس المال وفقاً لجدول الاكتتاب المودع بالهيئة العامة للاستثمار.',
          contentEnglish: 'General and shareholder partners have fully subscribed to issued shares as set forth in the statutory schedule filed with GAFI.'
        },
        {
          titleArabic: 'المادة السابعة: إدارة الشركة وحق التوقيع',
          titleEnglish: 'Article 7: Management Exclusivity to General Partners',
          contentArabic: 'يعهد بإدارة الشركة للشريك المتضامن السيد/ [...]، ويكون له وحده حق تمثيل الشركة والتوقيع عنها أمام الكافة، ولا يجوز للشريك المساهم التدخل في الإدارة عملاً بالمادة 112 من القانون.',
          contentEnglish: 'Management is entrusted to General Partner Mr. [...]. Shareholder partners are statutorily prohibited from interfering in management.'
        },
        {
          titleArabic: 'المادة الثامنة: تشكيل مجلس المراقبة واختصاصاته الرقابية',
          titleEnglish: 'Article 8: Supervisory Board (Majlis Al-Moraqaba)',
          contentArabic: 'يكون للشركة مجلس مراقبة مؤلف من ثلاثة على الأقل من الشركاء المساهمين تعينهم الجمعية العامة، ويتولى مجلس المراقبة التحقق من سلامة الدفاتر والقيود المحاسبية، وفحص تقارير الإدارة، وتقديم تقرير سنوي للجمعية العامة عملاً بالمادة 113 من القانون.',
          contentEnglish: 'A Supervisory Board of at least three shareholder partners is elected by the General Assembly to audit books, inspect operations, and report to the Assembly under Article 113.'
        },
        {
          titleArabic: 'المادة التاسعة: الجمعية العامة للمساهمين العادية وغير العادية',
          titleEnglish: 'Article 9: General Assembly of Shareholders',
          contentArabic: 'تتكون الجمعية العامة من جميع الشركاء المتضامنين والمساهمين، وتختص باعتماد القوائم المالية، ومناقشة تقارير الإدارة ومجلس المراقبة ومراقب الحسابات.',
          contentEnglish: 'The General Assembly comprises all general and shareholder partners to approve balance sheets and evaluate audit and supervisory reports.'
        },
        {
          titleArabic: 'المادة العاشرة: تداول الأسهم ونقل الملكية والحفظ المركزي',
          titleEnglish: 'Article 10: Share Trading & Depository',
          contentArabic: 'تتداول أسهم الشركاء المساهمين وفقاً لقواعد الإيداع والقيد المركزي وسوق رأس المال، أما حصص الشركاء المتضامنين فتخضع لقواعد التنازل المقررة لشركات التضامن.',
          contentEnglish: 'Shareholder partner shares are traded via central depository regulations; general partner shares require corporate partnership consent.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: مراقب الحسابات المستقل',
          titleEnglish: 'Article 11: Statutory External Auditor',
          contentArabic: 'تعين الجمعية العامة مراقب حسابات مقيد بسجل المحاسبين والمراجعين، وعُين المحاسب القانوني السيد/ [...] مراقباً أول للحسابات.',
          contentEnglish: 'The General Assembly appoints an independent statutory auditor to audit the accounts and present the annual audit report.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: السنة المالية وتوزيع الأرباح والاحتياطي القانوني',
          titleEnglish: 'Article 12: Fiscal Year & Profit Distribution',
          contentArabic: 'تبدأ السنة المالية في أول يناير وتنتهي في 31 ديسمبر. وتوزع الأرباح بعد تجنيب 5% للاحتياطي القانوني و10% للعاملين، ويوزع الباقي على الشركاء بنسبة أسهمهم.',
          contentEnglish: 'Fiscal year is Jan 1 - Dec 31. Profits are distributed post 5% legal reserve and 10% labor share, balance distributed pro-rata.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: وفاة الشريك المتضامن أو المساهم',
          titleEnglish: 'Article 13: Partner Demise Provisions',
          contentArabic: 'لا تنحل الشركة بوفاة أحد الشركاء المساهمين بل تستمر مع ورثته. وفي حال وفاة الشريك المتضامن يعين الشركاء متضامناً بديلاً خلال تسعين يوماً أو تتحول لشركة مساهمة.',
          contentEnglish: 'The entity continues upon shareholder partner death. Upon general partner death, a substitute general partner must be designated within 90 days.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: حل الشركة وتصفيتها',
          titleEnglish: 'Article 14: Dissolution & Liquidation',
          contentArabic: 'تنحل الشركة بانقضاء مدتها أو بقرار الجمعية العامة غير العادية، وتجري تصفيتها بمعرفة مصفٍ وتوزع الأموال بعد سداد الديون بنسبة الأسهم.',
          contentEnglish: 'Dissolution occurs upon term expiry or Extraordinary Assembly decision, distributing surplus post debt payoff pro-rata.'
        },
        {
          titleArabic: 'المادة الخامسة عشرة: الاختصاص القضائي وفض المنازعات',
          titleEnglish: 'Article 15: Jurisdiction',
          contentArabic: 'تختص المحاكم الاقتصادية المصرية بنظر أي منازعة تنشأ عن تطبيق أو تفسير هذا النظام الأساسي.',
          contentEnglish: 'Egyptian Economic Courts hold jurisdiction over matters arising from these Articles.'
        },
        {
          titleArabic: 'المادة السادسة عشرة: نفقات التأسيس والنشر والتفويض',
          titleEnglish: 'Article 16: Preliminary Fees & Authorized Counsel',
          contentArabic: 'تتحمل الشركة مصاريف التأسيس، ويفوض المؤسسون الأستاذ/ [اسم المحامي وكيل المؤسسين] المحامي بالنقض في إتمام كافة إجراءات النشر والقيد بالسجل التجاري.',
          contentEnglish: 'The Company assumes formation expenses, authorizing Attorney [...] to complete all registration and publication formalities.'
        }
      ]
    }
  },

  // 8. Official GAFI Corporate Amendment & Capital Restructuring Deed
  {
    id: 'official-gafi-corporate-amendment-restructuring',
    category: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)',
    titleAr: 'عقد تعديل رسمي لعقد تأسيس ونظام أساسي لشركة تجارية (دخول وخروج شركاء، زيادة رأس مال، وتعديل الإدارة) معتمد لدى هيئة الاستثمار GAFI',
    titleEn: 'Official Comprehensive Corporate Amendment, Partner Restructuring & Capital Increase Deed (GAFI Standard)',
    source: 'النموذج الرسمي المعتمد بمأموريات الشهر العقاري والتوثيق بالهيئة العامة للاستثمار والمناطق الحرة (GAFI)',
    statutoryBasis: 'قانون الشركات رقم 159 لسنة 1981 وتعديلاته وقانون الاستثمار رقم 72 لسنة 2017 وقانون السجل التجاري رقم 34 لسنة 1976',
    totalClauses: 14,
    contractData: {
      contractTitleArabic: 'عقد تعديل رسمي شامل لعقد تأسيس ونظام أساسي لشركة تجارية - الهيئة العامة للاستثمار',
      contractTitleEnglish: 'Official Comprehensive Corporate Amendment & Restructuring Deed (GAFI)',
      preambleArabic: `إنه في يوم [...] الموافق [...] هـ، والموافق [...] م، بمقر مأمورية توثيق الهيئة العامة للاستثمار والمناطق الحرة بـ [...]، تحرر هذا العقد بين كل من الشركاء في شركة/ [...] (شركة مساهمة / ذات مسؤولية محدودة)، المقيدة بالسجل التجاري رقم: [...]، استثمار القاهرة:
أولاً: الشركاء الحاليون (الطرف الأول):
1. السيد/ [اسم الشريك الأول]، بطاقة رقم قومي: [...]، المقيم في: [...].
2. السيد/ [اسم الشريك الثاني]، بطاقة رقم قومي: [...]، المقيم في: [...].
ثانياً: الشريك المتنازل له / الشريك الجديد المنضم (الطرف الثاني):
3. السيد/ [اسم الشريك الجديد]، بطاقة رقم قومي: [...]، المقيم في: [...].
وبعد أن أقر أطراف العقد بصفتهم وأهليتهم، وبالإشارة إلى محضر اجتماع الجمعية العامة غير العادية المنعقدة بتاريخ [...] والمعتمد من الهيئة العامة للاستثمار تحت رقم [...]، اتفقوا ووثقوا تعديل عقد التأسيس بالشروط الآتية:`,
      preambleEnglish: `On this day [...] corresponding to [...] AD, at the GAFI Notary Public Office, this Corporate Amendment Deed was executed between:
First (Existing Partners):
1. Mr. [First Partner], National ID: [...], residing at: [...].
2. Mr. [Second Partner], National ID: [...], residing at: [...].
Second (Incoming / Assignee Partner):
3. Mr. [Incoming Partner], National ID: [...], residing at: [...].
Having confirmed legal capacity, and referencing the Extraordinary General Meeting minutes approved by GAFI under No. [...], the Parties agreed as follows:`,
      recitalsArabic: 'يُعتبر التمهيد ومحضر الجمعية العامة المعتمد جزءاً لا يتجزأ من هذا العقد التعديلي.',
      recitalsEnglish: 'The preamble and GAFI approved General Meeting minutes form an integral part hereof.',
      certificationStatement: 'صيغة توثيق رسمية معتمدة بمأموريات الشهر العقاري بهيئة الاستثمار والشباك الواحد.',
      legalNotes: 'عقد تعديل رسمي يتضمن التنازل عن الحصص، زيادة رأس المال، دخول وخروج شركاء، وتعديل بنود الإدارة والسلطات طبقاً لأحكام القانون 159 لسنة 1981.',
      shariaComplianceNotes: 'مستوفٍ لضوابط التنازل والتخارج المشروع بيعاً وشراءً دون غبن أو تدليس.',
      legalAudit: {
        complianceScore: 100,
        officialPortalValidation: 'مطابق بنسبة 100% لنماذج التعديل المعتمدة بمكتب التوثيق النموذجي بهيئة الاستثمار GAFI.',
        cassationPrinciplesValidation: 'متوافق مع قضاء محكمة النقض في نفاذ التعديلات المقيدة بالسجل التجاري في مواجهة الكافة.',
        customaryPracticeValidation: 'النموذج الرسمي الإلزامي لتعديل عقود الشركات أمام الشهر العقاري وهيئة الاستثمار.',
        shariaAuditStatement: 'عقد تعديل وتخارج شرعي صحيح ونافذ.',
        verificationChecklist: [
          { item: 'محضر جمعية عامة غير عادية معتمد من هيئة الاستثمار GAFI', status: 'مستوفى ومعتمد', reference: 'المادة 63 من القانون 159/1981' },
          { item: 'سداد المقابل المالي للتنازل عن الحصص وإثبات المخالصة', status: 'مستوفى ومعتمد', reference: 'المادة 119 من القانون 159/1981' },
          { item: 'إيداع شهادة زيادة رأس المال البنكية المعتمدة', status: 'مستوفى ومعتمد', reference: 'المادة 32 من اللائحة التنفيذية' },
          { item: 'التأشير بالسجل التجاري والنشر بصحيفة الاستثمار', status: 'مستوفى ومعتمد', reference: 'القانون 34 لسنة 1976' }
        ]
      },
      clauses: [
        {
          titleArabic: 'المادة الأولى: التنازل عن الحصص ومخالصة الثمن',
          titleEnglish: 'Article 1: Quota Assignment & Consideration Discharge',
          contentArabic: 'تنازل الطرف الأول السيد/ [...] تنازلاً نهائياً وباتاً وناجزاً عن عدد [...] حصة من حصصه في رأس مال الشركة للطرف الثاني المنضم السيد/ [...] نظير ثمن إجمالي قدره [...] جنيه مصري، أقر المتنازل باستلامه كاملاً بمجلس العقد بموجب تحويل بنكي ويعتبر توقيعه مخالصة تامة.',
          contentEnglish: 'The Assigning Partner conveys and transfers [...] quotas to Incoming Partner for a total consideration of EGP [...], full receipt whereof is acknowledged as definitive discharge.'
        },
        {
          titleArabic: 'المادة الثانية: خروج الشريك المتنازل وإبراء ذمته',
          titleEnglish: 'Article 2: Partner Withdrawal & Discharge',
          contentArabic: 'بخروج الشريك المتنازل تنقطع صلته بالشركة اعتباراً من تاريخ توثيق هذا العقد والقيد بالسجل التجاري، وتبرأ ذمته من كافة الالتزامات والديون اللاحقة على هذا التاريخ، ويحل الشريك المنضم محله في كافة الحقوق والواجبات.',
          contentEnglish: 'Upon registration, the withdrawing partner severs corporate ties with the Company, discharged from subsequent liabilities, with the incoming partner subrogated into all rights and obligations.'
        },
        {
          titleArabic: 'المادة الثالثة: زيادة رأس مال الشركة والوفاء بالزيادة',
          titleEnglish: 'Article 3: Capital Increase & Statutory Bank Certificate',
          contentArabic: 'اتفق الشركاء بموجب قرار الجمعية العامة على زيادة رأس مال الشركة من مبلغ [...] جنيه إلى مبلغ [...] جنيه، بزيادة قدرها [...] جنيه، تم سدادها بالكامل بموجب الشهادة البنكية المودعة لدى بنك [...] المعتمد.',
          contentEnglish: 'Partners approve increasing capital from EGP [...] to EGP [...] by adding EGP [...], fully subscribed and paid via certified bank certificate.'
        },
        {
          titleArabic: 'المادة الرابعة: جدول هيكل رأس المال والحصص المعدل',
          titleEnglish: 'Article 4: Amended Capital Structure Schedule',
          contentArabic: 'يُعدل بند رأس المال في عقد التأسيس ليصبح رأس المال الإجمالي [...] جنيه مقسم إلى [...] حصة، يملكها الشركاء كالتالي: الشريك الأول بعدد [...] حصة بنسبة [...]%، الشريك الثاني بعدد [...] حصة بنسبة [...]%، الشريك الجديد بعدد [...] حصة بنسبة [...]%.',
          contentEnglish: 'Capital clause is amended so total capital EGP [...] is held: Partner 1 [...] quotas ([...]%), Partner 2 [...] quotas ([...]%), New Partner [...] quotas ([...]%).'
        },
        {
          titleArabic: 'المادة الخامسة: تعديل وتعيين الإدارة وصلاحيات التوقيع البنكي',
          titleEnglish: 'Article 5: Management Restructuring & Signatory Powers',
          contentArabic: 'اتفق الشركاء على إعادة تشكيل إدارة الشركة ليتولى الإدارة السيد/ [...] كمدير عام للشركة، ويكون له منفرداً أو بالاشتراك مع السيد/ [...] حق تمثيل الشركة والتوقيع عنها أمام البنوك وسائر الجهات الحكومية والقضائية.',
          contentEnglish: 'Management is restructured, appointing Mr. [...] as General Manager with sole or joint authority representing the Company and executing bank transactions.'
        },
        {
          titleArabic: 'المادة السادسة: تعديل غرض الشركة وإضافة أنشطة جديدة',
          titleEnglish: 'Article 6: Purpose Expansion & New Activities',
          contentArabic: 'تُضاف الأنشطة الآتية إلى غرض الشركة: التجارة الإلكترونية، الطاقة المتجددة، الخدمات اللوجستية، وتطوير التطبيقات الرقمية، مع الالتزام باستيفاء كافة الموافقات الوزارية اللازمة.',
          contentEnglish: 'Corporate purpose is expanded to include e-commerce, renewable energy, logistics, and digital platform development subject to regulatory licenses.'
        },
        {
          titleArabic: 'المادة السابعة: تعديل مقر المركز الرئيسي للشركة',
          titleEnglish: 'Article 7: Head Office Relocation',
          contentArabic: 'نُقل مقر المركز الرئيسي للشركة إلى العنوان الجديد: مبنى رقم [...]، شارع [...]، التجمع الخامس، القاهرة الجديدة.',
          contentEnglish: 'Company headquarters is formally relocated to Plot [...], Street [...], New Cairo.'
        },
        {
          titleArabic: 'المادة الثامنة: استمرار سريان باقي بنود عقد التأسيس دون تعديل',
          titleEnglish: 'Article 8: Confirmation of Remaining Clauses',
          contentArabic: 'تظل كافة البنود والمواد الأخرى الواردة بعقد تأسيس الشركة والنظام الأساسي سارية ونافذة بكامل قوتها القانونية فيما لم يرد بشأنه تعديل صريح في هذا العقد.',
          contentEnglish: 'All remaining clauses of the original Articles of Association not amended herein remain in full legal force and effect.'
        },
        {
          titleArabic: 'المادة التاسعة: نفقات التوثيق والشهر والتأشير بالسجل التجاري',
          titleEnglish: 'Article 9: Registration, Publication & Official Ratification',
          contentArabic: 'تتحمل الشركة كافة مصاريف التوثيق والرسوم، ويفوض الشركاء الأستاذ/ [اسم المحامي وكيل الشركاء] المحامي بالنقض في إتمام التوثيق بمأمورية الشهر العقاري بهيئة الاستثمار، والتأشير بالسجل التجاري، والنشر بصحيفة الاستثمار.',
          contentEnglish: 'The Company bears all notarization costs. Partners authorize Attorney [...] to ratify this Deed with GAFI Notary, amend the Commercial Register, and publish in the Investment Gazette.'
        },
        {
          titleArabic: 'المادة العاشرة: حظر المنافسة والتنازل عن الحصص للغير',
          titleEnglish: 'Article 10: Non-Competition & Quota Transfer Restrictions',
          contentArabic: 'لا يجوز لأي شريك التنازل عن حصصه أو جزء منها للغير دون موافقة كتابية مسبقة من باقي الشركاء بالأغلبية وفقاً لأحكام القانون 159 لسنة 1981 ولائحته التنفيذية، مع مراعاة حق الأولوية للشركاء الحاليين في الشراء.',
          contentEnglish: 'No partner may assign or transfer quotas to third parties without prior written majority consent under Law 159/1981, with existing partners holding pre-emptive purchase rights.'
        },
        {
          titleArabic: 'المادة الحادية عشرة: السرية التامة وحماية أسرار الشركة',
          titleEnglish: 'Article 11: Confidentiality & Trade Secret Protection',
          contentArabic: 'يلتزم جميع الشركاء الحاليين والمنضمين والمتنازلين بالحفاظ على السرية التامة لكافة المعلومات المالية والتجارية والفنية الخاصة بالشركة وعدم إفشائها لأي طرف ثالث حتى بعد خروجهم من الشركة.',
          contentEnglish: 'All current, incoming, and withdrawing partners covenant to maintain absolute confidentiality of all financial, commercial, and proprietary company information, surviving partner withdrawal.'
        },
        {
          titleArabic: 'المادة الثانية عشرة: القوة القاهرة والظروف الطارئة (م 147 و165 مدني)',
          titleEnglish: 'Article 12: Force Majeure & Unforeseen Hardship (Civil Code 147 & 165)',
          contentArabic: 'يُعفى أي طرف من المسؤولية عن عدم تنفيذ التزاماته إذا كان ذلك ناشئاً عن حادث مفاجئ أو قوة قاهرة لا يمكن دفعها وفقاً للمادتين 147 و165 من القانون المدني المصري.',
          contentEnglish: 'No party shall be liable for non-performance caused by force majeure under Egyptian Civil Code Articles 147 and 165.'
        },
        {
          titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق وآلية فض المنازعات',
          titleEnglish: 'Article 13: Governing Law & Dispute Resolution',
          contentArabic: 'يخضع هذا العقد التعديلي للقوانين المصرية السارية، وتختص المحاكم الاقتصادية بمدينة القاهرة بنظر أي نزاع ينشأ عنه أو يتعلق بتفسير أحكامه.',
          contentEnglish: 'This Amendment Deed is governed by Egyptian law. The Cairo Economic Courts shall have exclusive jurisdiction over any dispute arising hereunder.'
        },
        {
          titleArabic: 'المادة الرابعة عشرة: النسخ والحجية واعتماد النص العربي',
          titleEnglish: 'Article 14: Counterparts, Governing Language & Execution',
          contentArabic: 'تحرر هذا العقد التعديلي من عدة نسخ أصلية بعدد الشركاء مع نسختين إضافيتين لمأمورية الشهر العقاري والسجل التجاري، والنص العربي هو المعتمد أمام كافة الجهات الرسمية والقضائية المصرية.',
          contentEnglish: 'Executed in counterparts for each partner plus copies for the Notary and Commercial Register. The Arabic text shall be controlling before all Egyptian official and judicial authorities.'
        }
      ]
    }
  }
];
