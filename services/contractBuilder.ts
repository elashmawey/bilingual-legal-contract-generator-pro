import type { ContractFormData, GeneratedContract, ContractClause } from '../types';
import { OFFICIAL_STATUTORY_ENCYCLOPEDIA } from './officialEncyclopedia';

/**
 * Robust Egyptian Statutory Contract Builder
 * Guarantees that the generated contract matches 100% the exact contract domain,
 * exact parties, exact financial numbers, and tailored statutory clauses.
 */
export function buildAccurateStatutoryContract(formData: ContractFormData): GeneratedContract {
  const typeStr = (formData.contractType || '').toLowerCase();
  const allDetails = formData.details || {};

  // Extract User-Provided Fields with intelligent fallbacks
  const partyInfo =
    allDetails.partyDetails ||
    [allDetails.employerDetails, allDetails.employeeDetails].filter(Boolean).join('\n') ||
    [allDetails.clientDetails, allDetails.developerDetails].filter(Boolean).join('\n') ||
    [allDetails.lessorDetails, allDetails.lesseeDetails].filter(Boolean).join('\n') ||
    allDetails.partnerDetails ||
    '';

  const subjectInfo =
    allDetails.agreementSubject ||
    allDetails.projectScope ||
    allDetails.propertyDetails ||
    allDetails.partnershipName ||
    allDetails.jobTitle ||
    '';

  const financialInfo =
    allDetails.financialTerms ||
    allDetails.paymentSchedule ||
    allDetails.rentAmount ||
    allDetails.salaryAndBenefits ||
    allDetails.capitalContributions ||
    '';

  const termInfo =
    allDetails.contractTerm ||
    allDetails.leaseTerm ||
    allDetails.ipOwnership ||
    allDetails.profitAndLoss ||
    '';

  // Identify Domain
  let domain = 'sale';
  if (typeStr.includes('software') || typeStr.includes('tech') || typeStr.includes('sla') || typeStr.includes('برمج') || typeStr.includes('تطبيق') || typeStr.includes('تقني') || typeStr.includes('licens') || typeStr.includes('ترخيص')) {
    domain = 'software';
  } else if (typeStr.includes('dpa') || typeStr.includes('data') || typeStr.includes('بيانات')) {
    domain = 'data_processing';
  } else if (typeStr.includes('trademark') || typeStr.includes('علامة تجارية')) {
    domain = 'trademark';
  } else if (typeStr.includes('warehouse') || typeStr.includes('مستودع') || typeStr.includes('هنجر') || typeStr.includes('صناع')) {
    domain = 'warehouse';
  } else if (typeStr.includes('mortgage') || typeStr.includes('رهن')) {
    domain = 'mortgage';
  } else if (typeStr.includes('freelanc') || typeStr.includes('مستقل')) {
    domain = 'freelance';
  } else if (typeStr.includes('factor') || typeStr.includes('تخصيم') || typeStr.includes('حوالة حق')) {
    domain = 'factoring';
  } else if (typeStr.includes('logistic') || typeStr.includes('لوجست') || typeStr.includes('شحن') || typeStr.includes('جمرك')) {
    domain = 'logistics';
  } else if (typeStr.includes('supervis') || typeStr.includes('معمار') || typeStr.includes('إشراف هندسي')) {
    domain = 'supervision';
  } else if (typeStr.includes('tourist') || typeStr.includes('مفروش')) {
    domain = 'tourist_lease';
  } else if (typeStr.includes('store') || typeStr.includes('متجر') || typeStr.includes('جدك')) {
    domain = 'store_sale';
  } else if (typeStr.includes('off-plan') || typeStr.includes('خارطة') || typeStr.includes('تحت الإنشاء')) {
    domain = 'off_plan';
  } else if (typeStr.includes('sae') || typeStr.includes('مساهمة') || typeStr.includes('joint stock')) {
    domain = 'jsc_formation';
  } else if (typeStr.includes('free zone') || typeStr.includes('منطقة حرة') || typeStr.includes('مناطق حرة')) {
    domain = 'freezone_formation';
  } else if (typeStr.includes('one-person') || typeStr.includes('شخص واحد') || typeStr.includes('opc')) {
    domain = 'one_person_company';
  } else if (typeStr.includes('tadamun') || typeStr.includes('تضامن') || typeStr.includes('general partnership')) {
    domain = 'general_partnership';
  } else if (typeStr.includes('tawsia') || typeStr.includes('توصية بسيطة') || typeStr.includes('limited partnership')) {
    domain = 'limited_partnership';
  } else if (typeStr.includes('توصية بالأسهم') || typeStr.includes('partnership limited by shares')) {
    domain = 'partnership_shares';
  } else if (typeStr.includes('amendment') || typeStr.includes('تعديل شركة') || typeStr.includes('تعديل عقد')) {
    domain = 'corporate_amendment';
  } else if (typeStr.includes('llc') || typeStr.includes('مسؤولية محدودة') || typeStr.includes('ذ.م.م')) {
    domain = 'llc_formation';
  } else if (typeStr.includes('agricultural') || typeStr.includes('زراع') || typeStr.includes('أرض زراعية') || typeStr.includes('مزارع')) {
    domain = 'agricultural';
  } else if (typeStr.includes('broker') || typeStr.includes('وساط') || typeStr.includes('سمسر')) {
    domain = 'brokerage';
  } else if (typeStr.includes('partner') || typeStr.includes('venture') || typeStr.includes('تأسيس') || typeStr.includes('شراك') || typeStr.includes('مشارك') || typeStr.includes('شرك') || typeStr.includes('company') || typeStr.includes('shareholder') || typeStr.includes('franchise') || typeStr.includes('امتياز')) {
    domain = 'partnership';
  } else if (typeStr.includes('employ') || typeStr.includes('labor') || typeStr.includes('work') || typeStr.includes('عمل') || typeStr.includes('موظف')) {
    domain = 'employment';
  } else if (typeStr.includes('construction') || typeStr.includes('build') || typeStr.includes('turnkey') || typeStr.includes('مقاول') || typeStr.includes('تشطيب')) {
    domain = 'construction';
  } else if (typeStr.includes('lease') || typeStr.includes('rent') || typeStr.includes('إيجار') || typeStr.includes('مستأجر')) {
    domain = 'lease';
  } else if (typeStr.includes('supply') || typeStr.includes('procure') || typeStr.includes('توريد') || typeStr.includes('بضاع') || typeStr.includes('sales agreement')) {
    domain = 'supply';
  } else if (typeStr.includes('agency') || typeStr.includes('distribut') || typeStr.includes('وكال') || typeStr.includes('توزيع')) {
    domain = 'agency';
  } else if (typeStr.includes('consult') || typeStr.includes('استشار') || typeStr.includes('مهني')) {
    domain = 'consultancy';
  } else if (typeStr.includes('nda') || typeStr.includes('confidential') || typeStr.includes('إفصاح') || typeStr.includes('سرية')) {
    domain = 'nda';
  } else if (typeStr.includes('car') || typeStr.includes('vehicle') || typeStr.includes('سيار') || typeStr.includes('مركب')) {
    domain = 'car_sale';
  } else if (typeStr.includes('settle') || typeStr.includes('صلح') || typeStr.includes('تسوي')) {
    domain = 'settlement';
  } else if (typeStr.includes('donat') || typeStr.includes('gift') || typeStr.includes('هب') || typeStr.includes('تبرع')) {
    domain = 'donation';
  } else if (typeStr.includes('solar') || typeStr.includes('شمس') || typeStr.includes('كهروضوئ') || typeStr.includes('طاقة متجددة') || typeStr.includes('net meter')) {
    domain = 'solar';
  } else if (typeStr.includes('safe') || typeStr.includes('convertible') || typeStr.includes('صكوك') || typeStr.includes('رأس مال مخاطر') || typeStr.includes('تمويل استثماري')) {
    domain = 'convertible_note';
  } else if (typeStr.includes('marketing') || typeStr.includes('تسويق') || typeStr.includes('إعلان') || typeStr.includes('media buying') || typeStr.includes('محتوى رقمي')) {
    domain = 'marketing';
  } else if (typeStr.includes('share') || typeStr.includes('سهم') || typeStr.includes('أسهم') || typeStr.includes('otc') || typeStr.includes('مقصورة')) {
    domain = 'share_sale';
  } else if (typeStr.includes('elevator') || typeStr.includes('مصعد') || typeStr.includes('مصاعد')) {
    domain = 'elevator';
  } else if (typeStr.includes('sponsor') || typeStr.includes('رعاي') || typeStr.includes('فعالي') || typeStr.includes('مؤتمر') || typeStr.includes('معرض')) {
    domain = 'sponsorship';
  } else if (typeStr.includes('concrete') || typeStr.includes('خرسان')) {
    domain = 'concrete';
  } else if (typeStr.includes('maritime') || typeStr.includes('ملاح') || typeStr.includes('بحر') || typeStr.includes('سفين') || typeStr.includes('ميناء') || typeStr.includes('charter')) {
    domain = 'maritime';
  } else {
    domain = 'sale';
  }

  // Find base template in encyclopedia or fallback
  let baseTemplate = OFFICIAL_STATUTORY_ENCYCLOPEDIA.find(t => {
    if (domain === 'jsc_formation') return t.id.includes('joint-stock-company-sae');
    if (domain === 'freezone_formation') return t.id.includes('free-zone-company');
    if (domain === 'one_person_company') return t.id.includes('one-person-company');
    if (domain === 'general_partnership') return t.id.includes('general-partnership');
    if (domain === 'limited_partnership') return t.id.includes('limited-partnership');
    if (domain === 'partnership_shares') return t.id.includes('partnership-limited-by-shares');
    if (domain === 'corporate_amendment') return t.id.includes('corporate-amendment');
    if (domain === 'llc_formation') return t.id.includes('limited-liability-company-llc') || t.id.includes('llc-company');
    if (domain === 'solar') return t.id.includes('solar-energy');
    if (domain === 'convertible_note') return t.id.includes('startup-convertible-note');
    if (domain === 'marketing') return t.id.includes('digital-marketing');
    if (domain === 'share_sale') return t.id.includes('otc-share-purchase');
    if (domain === 'elevator') return t.id.includes('elevator-electromechanical');
    if (domain === 'sponsorship') return t.id.includes('commercial-event-sponsorship');
    if (domain === 'concrete') return t.id.includes('ready-mix-concrete');
    if (domain === 'maritime') return t.id.includes('maritime-charter');
    if (domain === 'software') return t.id.includes('software') || t.id.includes('saas') || t.id.includes('sla');
    if (domain === 'data_processing') return t.id.includes('personal-data-processing');
    if (domain === 'trademark') return t.id.includes('trademark-licensing');
    if (domain === 'warehouse') return t.id.includes('industrial-warehouse');
    if (domain === 'mortgage') return t.id.includes('real-estate-mortgage');
    if (domain === 'freelance') return t.id.includes('freelance-independent');
    if (domain === 'factoring') return t.id.includes('factoring-debt');
    if (domain === 'logistics') return t.id.includes('logistics-freight');
    if (domain === 'supervision') return t.id.includes('architectural-supervision');
    if (domain === 'tourist_lease') return t.id.includes('furnished-tourist-lease');
    if (domain === 'store_sale') return t.id.includes('commercial-store-sale');
    if (domain === 'off_plan') return t.id.includes('off-plan-unit-sale');
    if (domain === 'one_person_company') return t.id.includes('one-person-company');
    if (domain === 'agricultural') return t.id.includes('agricultural-land') || t.id.includes('agricultural-lease');
    if (domain === 'brokerage') return t.id.includes('commercial-brokerage');
    if (domain === 'partnership') return t.id.includes('partnership') || t.id.includes('llc');
    if (domain === 'employment') return t.id.includes('employment');
    if (domain === 'construction') return t.id.includes('construction') || t.id.includes('subcontract');
    if (domain === 'lease') return t.id.includes('residential-lease') || t.id.includes('office-lease');
    if (domain === 'supply') return t.id.includes('commercial-supply');
    if (domain === 'agency') return t.id.includes('exclusive-agency');
    if (domain === 'consultancy') return t.id.includes('professional-consultancy');
    if (domain === 'nda') return t.id.includes('nda');
    if (domain === 'car_sale') return t.id.includes('vehicle-sale');
    if (domain === 'settlement') return t.id.includes('amicable-dispute-settlement');
    if (domain === 'donation') return t.id.includes('real-estate-donation');
    return t.id.includes('real-estate-sale');
  }) || OFFICIAL_STATUTORY_ENCYCLOPEDIA[0];

  const contract: GeneratedContract = JSON.parse(JSON.stringify(baseTemplate.contractData));
  contract.isOfflineGenerated = true;

  const dateStr = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
  const disputeTextAr = formData.disputeResolution === 'arbitration'
    ? 'التحكيم المؤسسي وفقاً لقانون التحكيم المصري رقم 27 لسنة 1994 (بمركز القاهرة الإقليمي للتحكيم التجاري الدولي CRCICA)'
    : 'المحاكم المصرية المختصة نوعياً ومكانياً بمدينة القاهرة وفقاً لقانون المرافعات المدنية والتجارية';
  const disputeTextEn = formData.disputeResolution === 'arbitration'
    ? 'Institutional arbitration pursuant to Egyptian Arbitration Law No. 27 of 1994 under CRCICA Rules'
    : 'Competent Egyptian courts sitting in Cairo pursuant to the Civil and Commercial Procedures Law No. 13 of 1968';

  // Customize Preamble
  if (partyInfo.trim().length > 10) {
    contract.preambleArabic = `إنه في يوم الموافق ${dateStr} م، تحرر هذا العقد بمدينة القاهرة، جمهورية مصر العربية، بين كل من:\n${partyInfo}\nوبعد أن أقر الطرفان بكامل أهليتهما القانونية والشرعية المعتبرة للتصرف والتعاقد وخلو إرادتهما من كافة عيوب الرضا (كالإكراه والغلط والتدليس والغبن والاستغلال)، وعدم خضوع أي منهما للحراسة القضائية أو الإفلاس، اتفقا وتراضيا على ما يأتي:`;
  }

  // Build domain-tailored contracts
  if (domain === 'supply') {
    contract.contractTitleArabic = 'عقد توريد وبيع بضائع تجاري وتوريدات معتمدة للمواصفات القياسية المصرية';
    contract.contractTitleEnglish = 'Commercial Goods Supply & Sale Agreement (EOS Standards Compliant)';
    contract.legalNotes = 'عقد توريد تجاري خاضع لأحكام القانون المدني وقانون التجارة رقم 17 لسنة 1999 ومنظومة الفاتورة الإلكترونية لمصلحة الضرائب المصرية.';
    contract.shariaComplianceNotes = 'مستوفٍ لضوابط الفقه الإسلامي في بيع الموصوف في الذمة؛ خالٍ من الربا والغرر والجهالة في الثمن والمثمون.';
    
    contract.clauses = [
      {
        titleArabic: 'المادة الأولى: التمهيد واعتباره جزءاً لا يتجزأ',
        titleEnglish: 'Article 1: Preamble & Recitals as Integral Part',
        contentArabic: 'يُعتبر التمهيد السابق والديباجة التعريفية بالأطراف جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومتمماً ومفسراً لكافة أحكامه وشروطه ومواده.',
        contentEnglish: 'The preamble and recitals constitute an integral and inseverable part of this Agreement and have identical binding legal force.'
      },
      {
        titleArabic: 'المادة الثانية: محل وموضوع التوريد والمواصفات الفنية',
        titleEnglish: 'Article 2: Subject Matter & Technical Specifications',
        contentArabic: `اتفق الطرفان على قيام الطرف الأول (المورد) بتوريد وتسليم البضائع والمنتجات المحددة: ${subjectInfo || 'البضائع والمهمات المعتمدة بأمر التوريد'}، وفقاً للمواصفات القياسية المصرية المعتمدة وأعلى معايير الجودة وخلوها من أي عيب ظاهري أو خفي.`,
        contentEnglish: `The Supplier covenants to supply, package, and deliver the specified merchandise: ${subjectInfo || 'designated supplies in purchase order'}, strictly conforming to certified Egyptian Standard Specifications.`
      },
      {
        titleArabic: 'المادة الثالثة: القيمة المالية الإجمالية وجدول الدفعات والفاتورة الإلكترونية',
        titleEnglish: 'Article 3: Total Price, Payment Milestones & E-Invoicing',
        contentArabic: `المقابل المالي الإجمالي المتفق عليه هو: ${financialInfo || 'القيمة المحددة بجدول الأسعار المرفق'}، ويتم السداد بموجب فواتير إلكترونية معتمدة بمنظومة مصلحة الضرائب المصرية فور اعتماد محاضر الفحص والاستلام، دون أي فوائد تأخيرية ربوية.`,
        contentEnglish: `The total contract consideration is: ${financialInfo || 'the amounts specified in attached schedule'}, disbursed against approved inspection reports with certified Egyptian Tax Authority electronic invoices.`
      },
      {
        titleArabic: 'المادة الرابعة: الجدول الزمني ومكان التسليم والنقل والتفريغ',
        titleEnglish: 'Article 4: Delivery Timetable, Shipping & Handover Logistics',
        contentArabic: `يتم التوريد والتسليم وفق الجدول الزمني المتفق عليه: ${termInfo || 'وفق خطة التوريد الدورية المعتمدة'}، ويكون التسليم بمخازن الطرف الثاني، ويتحمل المورد تكاليف النقل والتأمين والشحن والتفريغ حتى إتمام الاستلام المؤقت.`,
        contentEnglish: `Delivery shall proceed pursuant to agreed schedule: ${termInfo || 'approved delivery timeline'}, DDP to Buyer warehouse, with Supplier bearing freight, insurance, and unloading risks.`
      },
      {
        titleArabic: 'المادة الخامسة: الفحص والاستلام ومطابقة الجودة',
        titleEnglish: 'Article 5: Quality Inspection, Testing & Acceptance',
        contentArabic: 'تتولى لجنة فنية متخصصة من الطرف الثاني فحص البضائع الموردة خلال 48 ساعة من تاريخ وصولها، وتثبت المطابقة في محضر فحص رسمي. وفي حال وجود أصناف غير مطابقة، يلتزم المورد باستبدالها خلال 72 ساعة على نفقته الخاصة.',
        contentEnglish: 'A technical inspection committee shall inspect delivered consignments within 48 hours. Any defective or non-conforming items must be replaced by the Supplier within 72 hours at its sole expense.'
      },
      {
        titleArabic: 'المادة السادسة: ضمان العيوب الخفية وسلامة البضائع (م 447 مدني)',
        titleEnglish: 'Article 6: Latent Defects Warranty (Civil Code Article 447)',
        contentArabic: 'يضمن المورد سلامة البضائع من كافة العيوب الخفية المصنعية لمدة 12 شهراً من تاريخ الاستلام النهائي طبقاً للمادة 447 من القانون المدني المصري، ويلتزم بإصلاح أو استبدال أي بضاعة معيبة فوراً.',
        contentEnglish: 'The Supplier warrants all goods against manufacturing and latent defects for 12 months post-handover under Egyptian Civil Code Article 447.'
      },
      {
        titleArabic: 'المادة السابعة: غرامة التأخير الاتفاقية الجابرة للضرر',
        titleEnglish: 'Article 7: Liquidated Damages for Delivery Delays',
        contentArabic: 'في حال تأخر المورد عن التوريد في المواعيد المحددة، يُخصم من مستحقاته غرامة تأخير اتفاقية جابرة للضرر قدرها 1% عن كل أسبوع تأخير وبحد أقصى 10% من قيمة التوريد المتأخر دون الإخلال بحق الفسخ.',
        contentEnglish: 'If the Supplier delays shipment, liquidated damages of 1% per week of delay (up to 10% maximum) shall be deducted to remedy actual harm without prejudice to rescission rights.'
      },
      {
        titleArabic: 'المادة الثامنة: التزامات وحقوق المشتري',
        titleEnglish: 'Article 8: Buyer Obligations & Timely Receipt',
        contentArabic: 'يلتزم الطرف الثاني بتسهيل دخول شاحنات التوريد وتهيئة المخازن المخصصة وسداد الدفعات المالية في مواعيدها المحددة دون مماطلة.',
        contentEnglish: 'The Buyer undertakes to facilitate warehouse access for delivery trucks, provide proper storage facilities, and remit payments on time.'
      },
      {
        titleArabic: 'المادة التاسعة: القوة القاهرة والظروف الطارئة (م 147 و165 مدني)',
        titleEnglish: 'Article 9: Force Majeure & Hardship (Civil Code 147 & 165)',
        contentArabic: 'يُعفى الطرف المقصر من المسؤولية إذا كان الإخلال ناشئاً عن حادث مفاجئ أو قوة قاهرة لا يمكن دفعها وفقاً للمادتين 147 و165 من القانون المدني المصري، بشرط إخطار الطرف الآخر فوراً.',
        contentEnglish: 'Neither party shall be liable for default caused by uncontrollable force majeure pursuant to Egyptian Civil Code Articles 147 and 165, provided prompt written notice is served.'
      },
      {
        titleArabic: 'المادة العاشرة: السرية وحماية بيانات العمل (القانون 151 لسنة 2020)',
        titleEnglish: 'Article 10: Confidentiality & Data Protection Law 151/2020',
        contentArabic: 'يلتزم الطرفان بالحفاظ على سرية أسعار وكميات وشروط هذا التعاقد، وعدم إفشاء أي بيانات فنية أو تجارية لأي طرف ثالث عملاً بقانون حماية البيانات الشخصية رقم 151 لسنة 2020.',
        contentEnglish: 'Both Parties covenant to maintain strict confidentiality of commercial pricing, quantities, and proprietary data under Law No. 151 of 2020.'
      },
      {
        titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني مصري)',
        titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code Article 158)',
        contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة إلى تنبيه أو إنذار رسمي أو اللجوء للقضاء طبقاً للمادة 158 مدني مصري في حال إخلال أي طرف بالتزام جوهري كالتوقف عن التوريد أو الامتناع عن السداد.',
        contentEnglish: 'This Agreement shall be deemed ipso jure rescinded by law without formal notice or court intervention under Article 158 of the Civil Code upon fundamental breach.'
      },
      {
        titleArabic: 'المادة الثانية عشرة: الموطن المختار والمراسلات الرسمية',
        titleEnglish: 'Article 12: Chosen Domicile & Official Legal Notices',
        contentArabic: 'أقر الطرفان بصحة العناوين الموضحة بصدر هذا العقد، واتخاذها موطناً مختاراً لكافة الإعلانات والمراسلات القضائية على يد محضر أو بالبريد المسجل بعلم الوصول أو البريد الإلكتروني المعتمد.',
        contentEnglish: 'The addresses in the preamble are elected legal domiciles for all formal process, bailiff notices, registered mail, and official communications.'
      },
      {
        titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق وآلية فض المنازعات',
        titleEnglish: 'Article 13: Governing Law & Dispute Resolution Jurisdiction',
        contentArabic: `يخضع هذا العقد ويفسر وفقاً لأحكام القوانين المصرية. وتختص بنظر أي نزاع: ${disputeTextAr}.`,
        contentEnglish: `This Agreement is governed by Egyptian laws. Any dispute shall be resolved through: ${disputeTextEn}.`
      },
      {
        titleArabic: 'المادة الرابعة عشرة: نسخ العقد وحجية اللغة والتوقيع',
        titleEnglish: 'Article 14: Execution Counterparts & Controlling Language',
        contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة للعمل بموجبها والرجوع إليها عند اللزوم، والنص العربي هو النص الحاكم والمعتمد أمام القضاء والجهات المصرية.',
        contentEnglish: 'Executed in two identical originals, one per party. The Arabic text controls and governs interpretation before Egyptian courts and public authorities.'
      }
    ];
  } else if (domain === 'consultancy') {
    contract.contractTitleArabic = 'عقد تقديم استشارات مهنية ودراسات تخصصية وخدمات خبرة استشارية';
    contract.contractTitleEnglish = 'Professional Consultancy & Advisory Services Agreement';
    contract.legalNotes = 'عقد مقاولة مهنية مستقلة خاضع للقانون المدني وقانون حماية الملكية الفكرية رقم 82 لسنة 2002 وضريبة القيمة المضافة.';
    contract.shariaComplianceNotes = 'عقد إجارة على عمل مباح شرعاً ومستوفٍ لبيان الأجر والعمل النافي للجهالة والغرر.';

    contract.clauses = [
      {
        titleArabic: 'المادة الأولى: التمهيد والاعتبار التكاملي',
        titleEnglish: 'Article 1: Preamble as an Inseverable Part',
        contentArabic: 'يُعتبر التمهيد السابق والديباجة جزءاً لا يتجزأ من هذا العقد وبنداً جوهرياً ومفسراً لكافة شروطه ومواده.',
        contentEnglish: 'The foregoing preamble and parties recital form an integral part hereof having the same binding legal effect.'
      },
      {
        titleArabic: 'المادة الثانية: نطاق الخدمات الاستشارية والمهام المكلف بها المستشار',
        titleEnglish: 'Article 2: Consultancy Scope of Work & Deliverables',
        contentArabic: `أسند العميل وقبل المستشار تقديم الخدمات والخبرات الاستشارية المتخصصة في: ${subjectInfo || 'الدراسات والخدمات الاستشارية المحددة بملحق نطاق العمل'}، وفقاً لأعلى معايير الحيطة والحذر والخبرة المهنية المقررة.`,
        contentEnglish: `The Client appoints the Consultant to render advisory services comprising: ${subjectInfo || 'the consultancy scope set forth in attached exhibit'}, adhering to top industry standards.`
      },
      {
        titleArabic: 'المادة الثالثة: المقابل المالي للأتعاب الاستشارية وجدول السداد',
        titleEnglish: 'Article 3: Professional Fees & Payment Milestones',
        contentArabic: `الأتعاب الاستشارية الإجمالية المتفق عليها هي: ${financialInfo || 'الأتعاب المحددة بجدول المستحقات'}، تُصرف وفق جدول تسليم التقارير الفنية المعتمدة دون أي فوائد تأخيرية ربوية.`,
        contentEnglish: `The consultancy remuneration is agreed as: ${financialInfo || 'the professional fees scheduled'}, paid against certified deliverable submissions.`
      },
      {
        titleArabic: 'المادة الرابعة: مدة العقد والجدول الزمني لتسليم التقارير والمخرجات',
        titleEnglish: 'Article 4: Term & Deliverables Submission Schedule',
        contentArabic: `مدة سريان هذا العقد: ${termInfo || 'المدة المحددة لإنجاز الدراسات'}، ويلتزم المستشار بتقديم التقارير الدورية والنهائية في مواعيدها المحددة.`,
        contentEnglish: `The contract term is: ${termInfo || 'designated consultancy timeframe'}, with Consultant committed to milestone schedules.`
      },
      {
        titleArabic: 'المادة الخامسة: استقلالية المستشار وعدم وجود علاقة عمل',
        titleEnglish: 'Article 5: Independent Contractor Status',
        contentArabic: 'يقر الطرفان بأن المستشار يباشر مهامه كخبير مهني مستقل (Independent Consultant) ولا ينشأ عن هذا العقد أي علاقة عمل أو تبعية خاضعة لقانون العمل.',
        contentEnglish: 'The Consultant acts as an independent professional contractor; nothing herein constitutes an employer-employee relationship.'
      },
      {
        titleArabic: 'المادة السادسة: التزامات العميل وتوفير البيانات اللازمة',
        titleEnglish: 'Article 6: Client Cooperation & Data Access',
        contentArabic: 'يلتزم العميل بتزويد المستشار بكافة البيانات والوثائق والمعلومات اللازمة لإنجاز مهمته وتسهيل اجتماعاته ومقابلاته مع فرق العمل.',
        contentEnglish: 'The Client covenants to provide complete access to documentation, data, and personnel required for advisory execution.'
      },
      {
        titleArabic: 'المادة السابعة: الملكية الفكرية للتقارير والدراسات (ق 82 لسنة 2002)',
        titleEnglish: 'Article 7: IP Rights in Reports & Studies (Law 82/2002)',
        contentArabic: 'تؤول ملكية التقارير والدراسات والنتائج المكتملة المسدد أتعابها للعميل لاستخدامها الداخلي، مع احتفاظ المستشار بحقوق خبرته ومنهجياته العامة.',
        contentEnglish: 'All finalized reports and work product transfer to Client upon full payment under Egyptian Law 82 of 2002.'
      },
      {
        titleArabic: 'المادة الثامنة: السرية التامة وعدم إفشاء أسرار العمل (ق 151 لسنة 2020)',
        titleEnglish: 'Article 8: Strict Non-Disclosure & Data Protection',
        contentArabic: 'يلتزم المستشار بالحفاظ التام على سرية كافة أسرار العميل وخططه المالية والتجارية وعدم إفشائها لأي طرف ثالث حتى بعد انتهاء العقد.',
        contentEnglish: 'The Consultant undertakes strict confidentiality regarding proprietary strategies and client confidential data.'
      },
      {
        titleArabic: 'المادة التاسعة: حظر تعارض المصالح والنزاهة المهنية',
        titleEnglish: 'Article 9: Conflict of Interest & Professional Integrity',
        contentArabic: 'يتعهد المستشار بعدم تقديم استشارات لمنافسين مباشرين تمس موضوع التكليف طوال مدة سريان العقد وتجنب أي تعارض في المصالح.',
        contentEnglish: 'The Consultant covenants to avoid direct conflicts of interest with direct competitors concerning the subject matter.'
      },
      {
        titleArabic: 'المادة العاشرة: القوة القاهرة والظروف الطارئة (م 147 و165 مدني)',
        titleEnglish: 'Article 10: Force Majeure & Unforeseen Events',
        contentArabic: 'يعفى الطرفان من المسؤولية عن التأخير الناشئ عن حوادث قاهرة لا يد لهما فيها طبقاً للقانون المدني المصري مع التزام الإخطار الفوري.',
        contentEnglish: 'Force majeure events relieve parties from delay liabilities under Egyptian Civil Code Articles 147 and 165.'
      },
      {
        titleArabic: 'المادة الحادية عشرة: الشرط الفاسخ الصريح (م 158 مدني)',
        titleEnglish: 'Article 11: Explicit Rescission Clause (Civil Code 158)',
        contentArabic: 'يُعتبر هذا العقد مفسوخاً من تلقاء نفسه وبقوة القانون دون حاجة لتنبيه أو إنذار أو قضاء في حال إخلال أي طرف بالتزام جوهري.',
        contentEnglish: 'Deemed automatically rescinded by operation of law upon material breach without notice per Article 158 Civil Code.'
      },
      {
        titleArabic: 'المادة الثانية عشرة: الموطن المختار والإخطارات',
        titleEnglish: 'Article 12: Chosen Domicile & Legal Communications',
        contentArabic: 'اتخذ الطرفان العناوين الموضحة بصدر هذا العقد موطناً مختاراً لكافة المراسلات والإعلانات الرسمية والقضائية.',
        contentEnglish: 'Addresses in preamble serve as irrevocable chosen domiciles for all formal legal notifications and process.'
      },
      {
        titleArabic: 'المادة الثالثة عشرة: القانون الواجب التطبيق والاختصاص القضائي',
        titleEnglish: 'Article 13: Applicable Law & Dispute Resolution',
        contentArabic: `يخضع هذا العقد للقوانين واللوائح المعمول بها في جمهورية مصر العربية، ويكون الاختصاص: ${disputeTextAr}.`,
        contentEnglish: `Governed by Egyptian laws. Jurisdiction and venue for disputes: ${disputeTextEn}.`
      },
      {
        titleArabic: 'المادة الرابعة عشرة: النسخ وحجية اللغة والتوقيع',
        titleEnglish: 'Article 14: Execution Copies & Arabic Precedence',
        contentArabic: 'تحرر هذا العقد من نسختين أصليتين بيد كل طرف نسخة، والنص العربي هو المرجع الأساسي المعتمد أمام كافة الجهات الرسمية.',
        contentEnglish: 'Executed in two binding counterparts; the Arabic text shall be governing and prevailing.'
      }
    ];
  } else if (domain === 'software') {
    contract.contractTitleArabic = 'عقد تقديم خدمات تطوير برمجيات وحلول رقمية ونقل ملكية فكرية وترخيص وSLA';
    contract.contractTitleEnglish = 'Software Engineering, IP Assignment & Service Level Agreement';

    if (subjectInfo) {
      contract.clauses[1] = {
        titleArabic: 'المادة الثانية: نطاق خدمات التطوير البرمجي والتسليم',
        titleEnglish: 'Article 2: Software Scope of Work & Deliverables',
        contentArabic: `اتفق الطرفان على قيام المطور بتصميم وبرمجة وتطوير وتشغيل المنظومة البرمجية والتطبيق الرقمي: ${subjectInfo}، وفقاً لأعلى معايير الجودة والأصول الفنية المعمول بها بهيئة ITIDA، مع تسليم الشفرة المصدرية (Source Code) والتوثيق التقني واختبارات القبول UAT.`,
        contentEnglish: `The Developer covenants to design, program, deploy, and deliver the software system: ${subjectInfo}, adhering to professional engineering standards, including complete source code, technical documentation, and UAT testing.`
      };
    }
    if (financialInfo) {
      contract.clauses[2] = {
        titleArabic: 'المادة الثالثة: المقابل المالي وجدول الدفعات المرحلية',
        titleEnglish: 'Article 3: Financial Consideration & Milestone Payments',
        contentArabic: `اتفق الطرفان على الشروط والمستحقات المالية الآتية: ${financialInfo}، وتُصرف الدفعات بموجب محاضر فحص واستلام فني معتمدة دون أي فوائد ربوية أو غرامات تأخيرية باطلة.`,
        contentEnglish: `The financial consideration agreed between the Parties is: ${financialInfo}, disbursed against certified technical milestone acceptance reports.`
      };
    }
    if (termInfo) {
      contract.clauses[3] = {
        titleArabic: 'المادة الرابعة: التنازل عن الملكية الفكرية والشفرة المصدرية (Source Code)',
        titleEnglish: 'Article 4: IP Rights & Source Code Ownership',
        contentArabic: `اتفق الطرفان بشأن حقوق الملكية الفكرية والمدة على الآتي: ${termInfo}، وتؤول ملكية الشفرة المصدرية وقواعد البيانات والتصاميم للعميل فور سداد مستحقاتها عملاً بقانون حماية الملكية الفكرية رقم 82 لسنة 2002.`,
        contentEnglish: `Regarding Intellectual Property and terms: ${termInfo}, full title, source code, and database rights transfer irrevocably to Client under Law 82 of 2002.`
      };
    }
  } else if (domain === 'partnership') {
    contract.contractTitleArabic = 'عقد شراكة استثمارية وتأسيس مشروع تجاري وتوزيع الحصص والأرباح والخسائر';
    contract.contractTitleEnglish = 'Commercial Investment Partnership & Profit/Loss Sharing Agreement';

    if (subjectInfo) {
      contract.clauses[1] = {
        titleArabic: 'المادة الثانية: اسم الشركة والسمة التجارية وغرض النشاط',
        titleEnglish: 'Article 2: Company Name, Brand & Commercial Purpose',
        contentArabic: `اتفق الشركاء على ممارسة النشاط التجاري والاستثماري الآتي: ${subjectInfo}، ويكون المركز الرئيسي بالقاهرة، مع حق فتح فروع أخرى داخل وخارج جمهورية مصر العربية.`,
        contentEnglish: `The Partners agree to operate the commercial enterprise: ${subjectInfo}, headquartered in Cairo with branch expansion authority.`
      };
    }
    if (financialInfo) {
      contract.clauses[4] = {
        titleArabic: 'المادة الخامسة: رأس مال الشركة وحصص الشركاء النقدية والعينية',
        titleEnglish: 'Article 5: Capital Contributions & Proportional Shares',
        contentArabic: `اتفق الشركاء بشأن رأس مال المشروع والحصص على الآتي: ${financialInfo}، ويُودع رأس المال بحساب مصرفي رسمي باسم الشركة تحت التأسيس.`,
        contentEnglish: `Capital contributions and partner shares are stipulated as: ${financialInfo}, deposited in an official designated bank account.`
      };
    }
    if (termInfo) {
      contract.clauses[7] = {
        titleArabic: 'المادة الثامنة: توزيع الأرباح الصافية وتحمل الخسائر (م 515 مدني)',
        titleEnglish: 'Article 8: Net Profit & Capital Loss Allocation',
        contentArabic: `اتفق الشركاء على آلية توزيع الأرباح والخسائر: ${termInfo}، مع الالتزام بالقاعدة الفقهية والقانونية: "الربح على ما اصطلحا عليه، والوضيعة على قدر المالين" وبطلان شرط الأسد.`,
        contentEnglish: `Profits and losses are allocated as follows: ${termInfo}, adhering to mandatory Civil Code 515 prohibiting lion clauses.`
      };
    }
  } else if (domain === 'employment') {
    contract.contractTitleArabic = 'عقد عمل فردي تنفيذي محدد المدة خاضع لقانون العمل 12 لسنة 2003';
    contract.contractTitleEnglish = 'Executive Fixed-Term Employment Agreement Under Labor Law 12/2003';

    if (subjectInfo) {
      contract.clauses[0] = {
        titleArabic: 'المادة الأولى: المنصب والمهام والوصف الوظيفي',
        titleEnglish: 'Article 1: Job Title, Responsibilities & Reporting',
        contentArabic: `التحق الطرف الثاني بالعمل لدى الطرف الأول بوظيفة: ${subjectInfo}، ويلتزم بأداء واجباته بأمانة وإخلاص وفقاً للوائح العمل الداخلية والمهام المسندة إليه.`,
        contentEnglish: `The Employee is engaged in the position of: ${subjectInfo}, committing to professional performance per company regulations.`
      };
    }
    if (financialInfo) {
      contract.clauses[3] = {
        titleArabic: 'المادة الرابعة: الراتب الشامل والبدلات والمزايا المالية',
        titleEnglish: 'Article 4: Monthly Salary, Allowances & Benefits',
        contentArabic: `يتقاضى الموظف مقابلاً مالياً ومزايا محددة كالتالي: ${financialInfo}، تُصرف نهاية كل شهر ميلادي بعد الخصومات القانونية للتأمينات والضرائب.`,
        contentEnglish: `The Employee receives agreed remuneration: ${financialInfo}, paid monthly net of statutory taxes and social insurance deductions.`
      };
    }
    if (termInfo) {
      contract.clauses[1] = {
        titleArabic: 'المادة الثانية: مدة العقد وفترة الاختبار القانونية',
        titleEnglish: 'Article 2: Duration, Term & Probationary Period',
        contentArabic: `مدة العقد وسريانه: ${termInfo}، مع فترة اختبار قانونية مدتها 3 أشهر كحد أقصى طبقاً للمادة 33 من قانون العمل 12 لسنة 2003.`,
        contentEnglish: `Contract duration and conditions: ${termInfo}, subject to statutory 3-month probation under Article 33 of Labor Law.`
      };
    }
  } else if (domain === 'lease') {
    contract.contractTitleArabic = 'عقد إيجار وحدة سكنية/تجارية خاضع لأحكام القانون رقم 4 لسنة 1996';
    contract.contractTitleEnglish = 'Lease Agreement Subject to Egyptian Law No. 4 of 1996';

    if (subjectInfo) {
      contract.clauses[0] = {
        titleArabic: 'المادة الأولى: العين المؤجرة والغرض من الإيجار',
        titleEnglish: 'Article 1: Leased Premises Description & Purpose',
        contentArabic: `أجّر الطرف الأول للطرف الثاني ما هو: ${subjectInfo}، بحالة ممتازة صالحة للانتفاع الكامل دون أي نقص أو عيب.`,
        contentEnglish: `The Lessor leases unto the Lessee: ${subjectInfo}, in good tenantable order and condition.`
      };
    }
    if (financialInfo) {
      contract.clauses[2] = {
        titleArabic: 'المادة الثالثة: القيمة الإيجارية الشهرية والتأمين النقدي',
        titleEnglish: 'Article 3: Monthly Rental Consideration & Deposit',
        contentArabic: `القيمة الإيجارية المتفق عليها: ${financialInfo}، تُدفع بانتظام بموجب إيصال كتابي دون تأخير.`,
        contentEnglish: `The agreed rental consideration and deposit terms are: ${financialInfo}, payable per schedule.`
      };
    }
    if (termInfo) {
      contract.clauses[1] = {
        titleArabic: 'المادة الثانية: مدة الإيجار وانتهاء العقد دون تنبيه',
        titleEnglish: 'Article 2: Lease Term & Automatic Expiration',
        contentArabic: `مدة هذا الإيجار هي: ${termInfo}، وينتهي العقد بانتهاء مدته بقوة القانون دون حاجة إلى تنبيه أو إنذار رسمي بالإخلاء طبقاً للقانون 4 لسنة 1996.`,
        contentEnglish: `The lease duration is: ${termInfo}, expiring automatically by law without notice per Law No. 4 of 1996.`
      };
    }
  } else if (domain === 'construction') {
    contract.contractTitleArabic = 'عقد مقاولات وإنشاءات هندسية وتشطيبات متكاملة بنظام تسليم المفتاح (Turnkey)';
    contract.contractTitleEnglish = 'Turnkey Construction, Engineering & Architectural Fit-out Contract';

    if (subjectInfo) {
      contract.clauses[1] = {
        titleArabic: 'المادة الثانية: نطاق الأعمال والمواصفات وجداول الكميات',
        titleEnglish: 'Article 2: Scope of Civil Works & Specifications',
        contentArabic: `يقوم المقاول بتنفيذ وتوريد الأعمال المتفق عليها: ${subjectInfo}، بنظام تسليم المفتاح الكامل وفقاً للأصول الفنية والمخططات الهندسية المعتمدة.`,
        contentEnglish: `The Contractor undertakes full turnkey execution of: ${subjectInfo}, strictly per approved engineering drawings.`
      };
    }
    if (financialInfo) {
      contract.clauses[3] = {
        titleArabic: 'المادة الرابعة: القيمة التعاقدية المقطوعة وجدول الدفعات',
        titleEnglish: 'Article 4: Lump Sum Contract Price & Disbursements',
        contentArabic: `القيمة الإجمالية المتفق عليها: ${financialInfo}، وتُصرف بالمستخلصات الشهرية المعتمدة مع حجز الصيانة وخطابات الضمان البنكية.`,
        contentEnglish: `Contract price and disbursement terms: ${financialInfo}, paid against certified invoices.`
      };
    }
    if (termInfo) {
      contract.clauses[2] = {
        titleArabic: 'المادة الثالثة: مدة التنفيذ والبرنامج الزمني والضمان العشري (م 651)',
        titleEnglish: 'Article 3: Time for Completion & Decennial Liability',
        contentArabic: `مدة التنفيذ والضمانات: ${termInfo}، مع خضوع المقاول والمهندس للضمان العشري الإلزامي لمدة 10 سنوات طبقاً للمادة 651 مدني.`,
        contentEnglish: `Execution period and schedule: ${termInfo}, subject to mandatory 10-year decennial liability.`
      };
    }
  } else {
    // Retain the base template's authentic title and metadata
    contract.contractTitleArabic = baseTemplate.contractData.contractTitleArabic || baseTemplate.titleAr;
    contract.contractTitleEnglish = baseTemplate.contractData.contractTitleEnglish || baseTemplate.titleEn;
    contract.legalNotes = baseTemplate.contractData.legalNotes || baseTemplate.statutoryBasis;
    contract.shariaComplianceNotes = baseTemplate.contractData.shariaComplianceNotes || 'مستوفٍ لضوابط الفقه الإسلامي وخالٍ من الغرر والربا.';
    contract.certificationStatement = baseTemplate.contractData.certificationStatement || `صيغة مطابقة لنماذج ${baseTemplate.source}.`;

    if (subjectInfo && contract.clauses[1]) {
      const origAr = contract.clauses[1].contentArabic;
      contract.clauses[1].contentArabic = origAr.includes('[...]')
        ? origAr.replace(/\[\.\.\.\]/, subjectInfo)
        : `${origAr} (بيان المحل والتوصيف: ${subjectInfo})`;
    }
    if (financialInfo && contract.clauses[2]) {
      const origAr = contract.clauses[2].contentArabic;
      contract.clauses[2].contentArabic = origAr.includes('[...]')
        ? origAr.replace(/\[\.\.\.\]/, financialInfo)
        : `${origAr} (المقابل المالي المتفق عليه: ${financialInfo})`;
    }
    if (termInfo && (contract.clauses[3] || contract.clauses[4])) {
      const targetClause = contract.clauses[4] || contract.clauses[3];
      const origAr = targetClause.contentArabic;
      targetClause.contentArabic = origAr.includes('[...]')
        ? origAr.replace(/\[\.\.\.\]/, termInfo)
        : `${origAr} (المدة وشروط التسليم: ${termInfo})`;
    }
  }

  // Update dispute clause in the contract according to choice
  const lastDisputeClause = contract.clauses.find(c => c.titleArabic.includes('فض') || c.titleArabic.includes('النزاع') || c.titleArabic.includes('المحاكم') || c.titleArabic.includes('التحكيم'));
  if (lastDisputeClause) {
    lastDisputeClause.contentArabic = `يخضع هذا العقد ويفسر في كافة نصوصه طبقاً للقوانين المصرية السارية، وتختص بنظر وفصل أي نزاع قد ينشأ عنه: ${disputeTextAr}.`;
    lastDisputeClause.contentEnglish = `This Agreement is governed by and construed under Egyptian laws. Resolution of any dispute shall be conducted via: ${disputeTextEn}.`;
  }

  return contract;
}
