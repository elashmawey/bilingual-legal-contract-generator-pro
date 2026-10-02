import type { SmartClauseItem } from '../types';

export const SMART_CLAUSES_BANK: SmartClauseItem[] = [
  // 1. Arbitration & Dispute Resolution
  {
    id: 'clause-crcica-arbitration',
    category: 'فض المنازعات والتحكيم الدولي',
    titleAr: 'شرط التحكيم المؤسسي بمركز القاهرة الإقليمي (CRCICA)',
    titleEn: 'Institutional Arbitration Clause (CRCICA Rules)',
    statutoryBasis: 'قانون التحكيم المصري في المواد المدنية والتجارية رقم 27 لسنة 1994 والمادة 150 من قانون المرافعات',
    importance: 'critical',
    practicalAdvice: 'يُفضل إدراجه في العقود التجارية الكبرى وعقود الاستثمار والشراكات مع أطراف أجنبية لضمان السرعة والحياد والسرية وتفادي بطء التقاضي العادي.',
    contentAr: 'أي نزاع أو خلاف أو مطالبة تنشأ عن هذا العقد أو تتعلق به، أو عن الإخلال به أو إنهائه أو بطلانه، تتم تسويته نهائياً عن طريق التحكيم وفقاً لقواعد تحكيم مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA) السارية وقت بدء إجراءات التحكيم. وتتشكل هيئة التحكيم من [محكم فرد / ثلاثة محكمين]، ويكون مقر التحكيم مدينة القاهرة، وتكون اللغة المستخدمة في إجراءات التحكيم هي [اللغة العربية / اللغة الإنجليزية]، والقانون الواجب التطبيق على موضوع النزاع هو القانون المصري.',
    contentEn: 'Any dispute, controversy or claim arising out of or relating to this contract, or the breach, termination or invalidity thereof, shall be settled by arbitration in accordance with the Arbitration Rules of the Cairo Regional Centre for International Commercial Arbitration (CRCICA). The arbitral tribunal shall consist of [a sole arbitrator / three arbitrators]. The seat of arbitration shall be Cairo, Egypt. The language to be used in the arbitral proceedings shall be [Arabic / English]. The governing substantive law shall be Egyptian Law.'
  },
  {
    id: 'clause-escalation-mediation',
    category: 'فض المنازعات والتحكيم الدولي',
    titleAr: 'شرط التفاوض الودي والوساطة المتدرجة قبل التقاضي (Multi-Tier Escalation)',
    titleEn: 'Multi-Tier Amicable Settlement, Executive Escalation & Mediation Clause',
    statutoryBasis: 'المادة 147 من القانون المدني ومبادئ تسوية المنازعات الودية البديلة (ADR)',
    importance: 'recommended',
    practicalAdvice: 'يضمن عقد اجتماع بين القيادات التنفيذية لكلا الطرفين لمدة 30 يوماً قبل الشروع في أي إجراء قضائي، مما يوفر نفقات باهظة ويحافظ على العلاقات التجارية.',
    contentAr: 'يتعهد الطرفان في حال نشوء أي خلاف أو نزاع بالسعي الجاد لحله ودياً عبر المفاوضات المباشرة بين الممثلين المفوضين خلال مدة أقصاها (15) يوماً من تاريخ استلام إخطار مكتوب بالنزاع. وفي حال تعذر التسوية الودية، يُحال النزاع إلى الإدارة العليا / الرؤساء التنفيذيين للطرفين لعقد جلسة تسوية ختامية خلال (15) يوماً إضافية. ولا يجوز لأي طرف اللجوء للتحكيم أو القضاء إلا بعد استنفاد هذه الإجراءات أو انقضاء مهلة الـ (30) يوماً.',
    contentEn: 'In the event of any controversy, the Parties shall first attempt in good faith to resolve the dispute amicably through senior executive negotiations within fifteen (15) days of written notice. If unresolved, the matter shall escalate to Chief Executive Officers for a final thirty (30) day mediation period before either Party may institute formal arbitration or litigation.'
  },

  // 2. Liquidated Damages & Liability Limitation
  {
    id: 'clause-liquidated-damages-daily',
    category: 'التعويضات وغرامات التأخير والمسؤولية',
    titleAr: 'شرط التعويض الاتفاقي وغرامة التأخير اليومية المحددة (Liquidated Damages)',
    titleEn: 'Liquidated Delay Damages & Penal Clause (Civil Code Article 223)',
    statutoryBasis: 'المواد 223 و224 و225 من القانون المدني المصري (تقدير التعويض اتفاقاً في العقد)',
    importance: 'critical',
    practicalAdvice: 'يعفي الدائن من إثبات وقوع الضرر ومقداره أمام المحكمة لأن التعويض مقدر سلفاً بالاتفاق، مع وضع سقف 10% لضمان عدم تدخّل القاضي لتخفيضه.',
    contentAr: 'في حال تأخر أي طرف عن الوفاء بالتزاماته التعاقدية أو تسليم الأعمال في الميعاد المحدد دون عذر مشروع، يلتزم بسداد تعويض اتفاقي نهائي غير قابل للطعن بواقع (........) جنيه مصري [أو نسبة 0.5%] عن كل يوم تأخير، بحد أقصى (10%) من إجمالي قيمة العقد. ويحق للطرف المتضرر خصم هذه الغرامة مباشرة من أية مستحقات أو خطابات ضمان دون حاجة إلى إنذار رسمي أو حكم قضائي، إعمالاً للمادة 223 من القانون المدني.',
    contentEn: 'If a Party fails to fulfill milestones or deliverables on the agreed due date without valid excuse, it shall pay liquidated damages of [EGP .... or 0.5%] per day of delay, capped at 10% of total contract value. The aggrieved Party may deduct this sum directly from accrued invoices or performance bonds without formal notice or court order pursuant to Article 223 of the Egyptian Civil Code.'
  },
  {
    id: 'clause-liability-cap',
    category: 'التعويضات وغرامات التأخير والمسؤولية',
    titleAr: 'سقف وتحديد المسؤولية المدنية والتعاقدية (Liability Cap & Exclusion of Consequential Loss)',
    titleEn: 'Limitation of Liability & Exclusion of Consequential Damages',
    statutoryBasis: 'المادة 217 من القانون المدني المصري (جواز الاتفاق على تحديد أو الإعفاء من المسؤولية العقدية بشرط عدم ارتكاب غش أو خطأ جسيم)',
    importance: 'critical',
    practicalAdvice: 'يحمي الشركات ومقدمي الخدمات من المطالبات المليونية بالتعويض عن خسارة الأرباح أو تعطل الأعمال، ويحدد أقصى التزام بإجمالي ما تم تحصيله من العقد.',
    contentAr: 'مع مراعاة أحكام المادة 217 من القانون المدني، يتفق الطرفان صراحة على أن الحد الأقصى للمسؤولية التعاقدية أو المدنية الشاملة لأي طرف عن أية أضرار أو مطالبات مباشرة تنشأ عن هذا العقد لن يتجاوز في أي حال من الأحوال إجمالي المبالغ المسددة فعلياً بموجب هذا العقد خلال الـ (12) شهراً السابقة لوقوع الحدث. ولا يتحمل أي طرف بأي حال من الأحوال أية مسؤولية عن خسارة الأرباح غير المباشرة أو الفرص الضائعة أو الأضرار التبعية أو السمعة التجارية.',
    contentEn: 'Subject to Article 217 of the Egyptian Civil Code, each Party aggregate cumulative liability for direct damages arising hereunder shall in no event exceed the total amounts actually paid under this Agreement during the twelve (12) months preceding the incident. Neither Party shall be liable for indirect, punitive, special, loss of profits, or consequential damages.'
  },

  // 3. Force Majeure & Hardship
  {
    id: 'clause-force-majeure-strict',
    category: 'القوة القاهرة والظروف الطارئة',
    titleAr: 'شرط القوة القاهرة والظروف الطارئة المفصل (Force Majeure & Hardship)',
    titleEn: 'Comprehensive Force Majeure & Hardship Clause (Civil Code Articles 147 & 373)',
    statutoryBasis: 'المادتان 147 (الظروف الطارئة وإعادة التوازن المالي) و 373 (انقضاء الالتزام لاستحالة التنفيذ) من القانون المدني المصري',
    importance: 'critical',
    practicalAdvice: 'ضروري في ظل تقلبات سلاسل الإمداد العالمية وأسعار الصرف، حيث يحدد مهلة 60 يوماً قبل أن يحق لأي طرف إنهاء العقد ودياً دون تعويض.',
    contentAr: 'يقصد بالقوة القاهرة أي حادث خارجي لا يد لأي من الطرفين فيه، غير متوقع ولا يمكن دفعه وقت التعاقد، ويجعل تنفيذ الالتزام مستحيلاً بصورة مطلقة أو مرهقاً اقتصادياً إرهاقاً يهدد بخسارة فادحة (مثل الحروب والكوارث الطبيعية والقرارات السيادية بحظر الاستيراد أو التصدير). يلتزم الطرف المتأثر بإخطار الطرف الآخر كتابة خلال (7) أيام مع بذل العناية المعقولة للحد من الآثار. فإذا استمرت القوة القاهرة لأكثر من (60) يوماً متصلة، يحق لأي طرف إنهاء العقد فوراً دون أي التزام بالتعويض مع تسوية الأعمال المنجزة حتى ذلك التاريخ.',
    contentEn: 'Force Majeure shall mean any unavoidable, unforeseeable event beyond reasonable control rendering performance impossible or excessively onerous under Articles 147 & 373 of the Civil Code. The affected Party must give written notice within 7 days. If the condition persists for more than 60 consecutive days, either Party may terminate the Agreement without penalty, settling accrued works to date.'
  },

  // 4. Non-Compete & Restrictive Covenants
  {
    id: 'clause-non-compete-strict',
    category: 'حظر المنافسة وعدم إفشاء الأسرار',
    titleAr: 'شرط حظر المنافسة وعدم استقطاب الموظفين والعملاء (Non-Compete & Non-Solicit)',
    titleEn: 'Post-Termination Non-Compete & Non-Solicitation Covenant (Civil Code Article 686)',
    statutoryBasis: 'المادة 686 من القانون المدني المصري والمادة 12 من قانون العمل 12 لسنة 2003',
    importance: 'critical',
    practicalAdvice: 'لتكون صحيحة قانوناً وغير باطلة أمام المحاكم المصرية، يجب تقييدها بحد أقصى (سنتين) وتحديد النطاق الجغرافي ونوع النشاط بدقة وفقاً للمادة 686 مدني.',
    contentAr: 'يتعهد الطرف الثاني صراحة بأنه طوال فترة سريان هذا العقد ولمدة سنتين كاملتين تبدأ من تاريخ انتهائه أو فسخه لأي سبب، لن يقوم بنفسه أو بالاشتراك مع الغير أو عبر وسيط أو موظف، بتأسيس أو إدارة أو العمل لدى أو تقديم أية خدمات استشارية لأي كيان منافس يمارس نفس النشاط التجاري للطرف الأول داخل النطاق الجغرافي لجمهورية مصر العربية. كما يتعهد بعدم استقطاب أو تشغيل أو تحريض أي من موظفي الطرف الأول أو محاولة جذب عملائه لصالحه أو لصالح الغير، وإلا التزم بسداد تعويض اتفاقي فوري قدره (........) جنيه مصري مع حق الطرف الأول في استصدار أمر وقتي بوقف النشاط.',
    contentEn: 'The covenanting Party agrees that during the term and for a period of two (2) years post-termination, it shall not directly or indirectly engage in, manage, advise, or consult for any direct competitor within the Arab Republic of Egypt pursuant to Article 686 of the Civil Code. It further covenants not to solicit, hire, or induce any employees or customers of the other Party, under a stipulated liquidated penalty of [EGP ....].'
  },
  {
    id: 'clause-confidentiality-strict',
    category: 'حظر المنافسة وعدم إفشاء الأسرار',
    titleAr: 'شرط حماية البيانات السرية وأسرار المهنة (Trade Secrets & IP Protection)',
    titleEn: 'Comprehensive Non-Disclosure & Trade Secrets Covenant',
    statutoryBasis: 'قانون حماية حقوق الملكية الفكرية رقم 82 لسنة 2002 وقانون حماية البيانات الشخصية رقم 151 لسنة 2020',
    importance: 'critical',
    practicalAdvice: 'يمتد التزام السرية لمدة (5) سنوات بعد انتهاء العقد ويشمل الأكواد البرمجية، المخططات، القوائم المالية، وقواعد بيانات العملاء.',
    contentAr: 'تعتبر كافة المعلومات والبيانات الفنية والمالية والتجارية وقوائم العملاء والأكواد والرسومات المتبادلة بين الطرفين "معلومات سرية ومحمية قانوناً". يلتزم الطرف المستلم بعدم إفشاء أو نشر أو استخدام هذه المعلومات لغير الغرض المحدد بهذا العقد، مع اتخاذ كافة التدابير الأمنية لحمايتها. ويسري هذا الالتزام طوال مدة العقد ويظل نافذاً وملزماً لمدة (5) سنوات كاملة بعد إنهائه. وفي حال خرق هذا البند، يتحمل الطرف المخل كافة التعويضات المقررة جنائياً ومدنياً طبقاً للقانون 82 لسنة 2002 والقانون 151 لسنة 2020.',
    contentEn: 'All technical, financial, and commercial data, code repositories, and customer records exchanged constitute strictly confidential trade secrets. The receiving Party covenants not to disclose or exploit such information for any unauthorized purpose, maintaining reasonable safeguards. This obligation survives termination for five (5) consecutive years under Egyptian Intellectual Property Law 82/2002 and Data Protection Law 151/2020.'
  },

  // 5. Intellectual Property & Source Code Escrow
  {
    id: 'clause-ip-work-for-hire',
    category: 'الملكية الفكرية والتقنية وإيداع الكود',
    titleAr: 'شرط التنازل الكامل عن حقوق الملكية الفكرية (Work-for-Hire & IP Assignment)',
    titleEn: 'Complete Intellectual Property Assignment & Moral Rights Waiver',
    statutoryBasis: 'المواد 149 و150 و155 من قانون حماية حقوق الملكية الفكرية رقم 82 لسنة 2002',
    importance: 'critical',
    practicalAdvice: 'يمنع المطور أو المقاول من الادعاء لاحقاً بحقه في المصنفات الرقمية أو البرمجية المنفذة، وينص صراحة على تحويل الحقوق المالية كافة للعميل.',
    contentAr: 'يقر ويتعهد الطرف الثاني بأن كافة الابتكارات والمصنفات الرقمية والبرمجيات والتصاميم والشفرات المصدرية والوثائق الهندسية المبتكرة أو المنفذة تنفيذاً لهذا العقد تعتبر "مصنفاً تم إنجازه لحساب العميل" (Work Made for Hire)، وتنتقل كافة حقوق الاستغلال المالي الحصرية المقررة قانوناً إلى الطرف الأول فور ابتكارها وسداد مقابلها، ويحق للطرف الأول تعديلها أو ترخيصها أو بيعها دون قيد أو شرط، مع تنازل الطرف الثاني عن أي حق في الاعتراض أو طلب مبالغ إضافية.',
    contentEn: 'Second Party acknowledges that all intellectual deliverables, software code, designs, and innovations created under this Agreement constitute Work-for-Hire, and all economic exploitation rights transfer exclusively and irrevocably to First Party upon creation and fee settlement under Egyptian Law 82/2002, with full rights of licensing, modification, and transfer.'
  },
  {
    id: 'clause-source-code-escrow',
    category: 'الملكية الفكرية والتقنية وإيداع الكود',
    titleAr: 'شرط إيداع الكود المصدري لدى جهة وسيطة (Source Code Escrow)',
    titleEn: 'Source Code Escrow Deposit & Trigger Release Terms',
    statutoryBasis: 'قانون تنظيم التوقيع الإلكتروني رقم 15 لسنة 2004 وقانون المعاملات الإلكترونية',
    importance: 'recommended',
    practicalAdvice: 'شرط جوهري للشركات الكبرى والبنوك عند التعاقد على برمجيات حساسة، يضمن استلام الكود في حال إفلاس المطور أو تصفية شركته أو توقفه عن الصيانة.',
    contentAr: 'يلتزم الطرف الثاني بإيداع نسخة كاملة ومحدثة من الكود المصدري (Source Code) والوثائق التقنية لدى جهة إيداع وسيطة معتمدة (Escrow Agent) بالاتفاق مع الطرف الأول. ويحق للطرف الأول الإفراج التلقائي عن الكود واستلامه في حالات: إفلاس الطرف الثاني أو تصفيته، أو إخلاله المستمر بتقديم الدعم الفني لأكثر من (30) يوماً بعد إنذاره، وذلك لتمكين الطرف الأول من مواصلة تشغيل وتطوير نظامه بحرية تامة.',
    contentEn: 'Second Party covenants to deposit an updated copy of the source code and build documentation with an independent Escrow Agent. The escrow deposit shall be released to First Party upon the occurrence of: Second Party bankruptcy, dissolution, or failure to maintain support for more than 30 days following written breach notice.'
  },

  // 6. Tax, E-Invoicing & Withholding
  {
    id: 'clause-einvoice-compliance',
    category: 'الضرائب والفاتورة الإلكترونية والخصم',
    titleAr: 'شرط الامتثال لمنظومة الفاتورة والإيصال الإلكتروني (E-Invoice Mandate)',
    titleEn: 'Egyptian Tax Authority E-Invoicing & E-Receipt Statutory Mandate',
    statutoryBasis: 'قانون الإجراءات الضريبية الموحد رقم 206 لسنة 2020 وقانون الضريبة على الدخل 91 لسنة 2005',
    importance: 'critical',
    practicalAdvice: 'يحمي مشتري الخدمة أو البضاعة من عدم الاعتراف الضريبي بمصروفاته؛ حيث تشترط مصلحة الضرائب المصرية وجود فاتورة إلكترونية معتمدة للخصم.',
    contentAr: 'يقر الطرفان بالتزامهما التام بالتسجيل والامتثال لمنظومة الفاتورة الإلكترونية والإيصال الإلكتروني المعتمدة بمصلحة الضرائب المصرية. ويلتزم الطرف مستحق المقابل بإصدار فواتير ضريبية إلكترونية فورية مسجلة بكود التحقق الرقمي الموحد (UUID) عن كل دفعة، ولا يلزم الطرف الآخر بسداد أية مستحقات إلا بعد تسلم إشعار الفاتورة الإلكترونية المعتمدة على بوابة الضرائب، مع التزام العميل باستقطاع النسبة المقررة قانوناً للخصم تحت حساب الضريبة وتوريدها للمصلحة.',
    contentEn: 'The Parties warrant full compliance with the Egyptian Unified Tax Procedures Law No. 206 of 2020. No invoices shall be payable unless officially issued via the Egyptian Tax Authority E-Invoicing portal bearing a valid UUID. The paying Party shall withhold statutory withholding taxes (WHT) and remit them against official withholding certificates.'
  },

  // 7. Decennial Liability & Engineering Warranties
  {
    id: 'clause-decennial-liability',
    category: 'الضمان العشري وسلامة الإنشاءات',
    titleAr: 'شرط الضمان العشري لسلامة المباني والمنشآت (Decennial Liability)',
    titleEn: 'Decennial Structural Integrity Guarantee (Civil Code Articles 651 & 652)',
    statutoryBasis: 'المادتان 651 و652 من القانون المدني المصري (نظام عام لا يجوز الاتفاق على إسقاطه أو إنقاصه)',
    importance: 'critical',
    practicalAdvice: 'الضمان العشري متعلق بالنظام العام في القانون المصري ويبطل أي شرط يعفي المقاول أو المهندس منه؛ ذكره صراحة يؤكد الالتزام ويوضح آليات التعويض.',
    contentAr: 'يضمن المقاول والمهندس المصمم والمشرف متضامنين سلامة ما شيدوه من مبانٍ أو منشآت ثابتة لمدة عشر سنوات كاملة تبدأ من تاريخ الاستلام النهائي للعمل، وذلك عن كل تهدم كلي أو جزئي فيها، وعن كل عيب يهدد متانة البناء وسلامته، ولو كان التهدم ناشئاً عن عيب في الأرض ذاتها. ويعتبر هذا الضمان من النظام العام إعمالاً لنص المادتين 651 و652 من القانون المدني المصري، ويقع باطلاً بطلاناً مطلقاً كل اتفاق يقصد به إعفاء المقاول أو المهندس من هذا الضمان أو الحد منه.',
    contentEn: 'Contractor and supervising engineer jointly and severally guarantee for a term of ten (10) years from final handover the structural integrity of all erected works against total or partial collapse, or latent defects endangering stability, pursuant to mandatory public order Articles 651 & 652 of the Egyptian Civil Code. Any agreement purporting to waive or restrict this liability is null and void.'
  },

  // 8. Anti-Bribery, Anti-Corruption & Compliance
  {
    id: 'clause-anti-bribery-compliance',
    category: 'الامتثال ومكافحة الرشوة والفساد',
    titleAr: 'شرط مكافحة الرشوة والفساد وغسل الأموال والامتثال المؤسسي',
    titleEn: 'Anti-Bribery, Anti-Money Laundering & Corporate Compliance Clause',
    statutoryBasis: 'قانون العقوبات المصري (المواد الخاصة بالرشوة واستغلال النفوذ) وقانون مكافحة غسل الأموال رقم 80 لسنة 2002',
    importance: 'recommended',
    practicalAdvice: 'شرط أساسي مطلوب من الشركات متعددة الجنسيات والشركات المساهمة والبنوك، يمنح حق الفسخ الفوري في حال ثبوت تقديم أي رشوة أو منفعة غير مشروعة.',
    contentAr: 'يتعهد كل طرف وموظفوه وممثلوه بالامتناع التام عن تقديم أو طلب أو قبول أية رشوة نقدية أو عينية أو عمولات غير مشروعة أو تسهيلات مشبوهة لأي موظف عام أو خاص بهدف الحصول على ميزة تفضيلية أو التأثير على مجريات هذا العقد، وذلك امتثالاً لقانون العقوبات المصري وقانون مكافحة غسل الأموال رقم 80 لسنة 2002. ويترتب على ثبوت أي انتهاك لهذا البند حق الطرف الآخر في فسخ هذا العقد فوراً بإرادته المنفردة مع المطالبة بالتعويض الكامل دون الإخلال بالمسؤولية الجنائية.',
    contentEn: 'Each Party warrants strict adherence to Egyptian Penal Code bribery prohibitions and Anti-Money Laundering Law No. 80 of 2002. Neither Party shall offer, solicit, or accept any improper kickbacks, bribes, or undue advantages. Documented violation entitles the innocent Party to terminate this Agreement immediately with cause and pursue full compensatory damages.'
  }
];
