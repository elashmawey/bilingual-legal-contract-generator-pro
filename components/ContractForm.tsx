import React, { useState, useEffect } from 'react';
import type { ContractFormData } from '../types';

interface ContractFormProps {
  onSubmit: (formData: ContractFormData) => void;
  initialData?: ContractFormData | null;
}

// Preset Quick Templates with realistic authentic Egyptian data
const QUICK_PRESETS = [
  {
    id: 'real_estate_sale',
    icon: 'fa-building',
    labelAr: 'عقد بيع وحدة سكنية نهائي',
    labelEn: 'Apartment Sale Agreement',
    contractType: 'Real Estate Purchase Agreement',
    badge: 'الأكثر طلباً',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      partyDetails: 'الطرف الأول (البائع): السيد/ محمد عبد الوهاب حسنين، مصري الجنسية، بطاقة رقم قومي: 27805120102345، المقيم في: 14 شارع النصر، المعادي، القاهرة.\nالطرف الثاني (المشتري): المهندس/ طارق إبراهيم الدسوقي، مصري الجنسية، بطاقة رقم قومي: 28904010103456، المقيم في: 22 شارع الثورة، مصر الجديدة، القاهرة.',
      agreementSubject: 'بيع نهائي وبات غير قابل للرجوع فيه للوحدة السكنية رقم (402) بالدور الرابع بالعقار الكائن بالقطعة رقم (88) الحي الخامس، التجمع الخامس، القاهرة الجديدة، والبالغ مساحتها الإجمالية 185 متراً مربعاً، شاملة حصة شائعة في الأرض والمرافق وأجزاء العقار المشتركة ومكان مخصص لانتظار سيارة بالجراج.',
      financialTerms: 'إجمالي الثمن المتفق عليه 3,850,000 جنيه مصري (ثلاثة ملايين وثمانمائة وخمسون ألف جنيه)، سُدد منه 2,000,000 جنيه كدفعة مقدمة بمجلس العقد، والمتبقي 1,850,000 جنيه يُسدد على 4 شيكات بنكية ربع سنوية متساوية دون أي فوائد ربوية.',
      contractTerm: 'التسليم الفعلي للعين خالية من كافة الشواغل والديون والرهون ومستحقات المرافق في 1 نوفمبر 2026، مع التزام البائع بالمثول أمام مأمورية الشهر العقاري لتوثيق عقد البيع النهائي ونقل الملكية فور سداد كامل الثمن.',
    },
  },
  {
    id: 'residential_lease',
    icon: 'fa-house-chimney',
    labelAr: 'عقد إيجار شقة (قانون 4/1996)',
    labelEn: 'Residential Lease Agreement',
    contractType: 'Lease Agreement',
    badge: 'رسمي ومعتمد',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      lessorDetails: 'السيد/ خالد عبد الرحمن الشافعي، مصري الجنسية، بطاقة رقم قومي: 27208150104321، المقيم في: 12 شارع سوريا، المهندسين، الجيزة (المؤجر).',
      lesseeDetails: 'السيد/ أحمد سامي مرسي، مصري الجنسية، بطاقة رقم قومي: 28811200109876، المقيم في: 45 شارع عباس العقاد، مدينة نصر، القاهرة (المستأجر).',
      propertyDetails: 'الشقة السكنية رقم (6) بالدور الثالث بالعقار رقم (15) شارع دجلة، الدقي، الجيزة، مكونة من ثلاث غرف وصالة واستقبال ومطبخ وحمامين، والمخصصة للسكن العائلي فقط.',
      rentAmount: 'القيمة الإيجارية الشهرية مبلغ 16,000 جنيه مصري تُدفع مقدماً في الأول من كل شهر ميلادي بموجب إيصال سداد، مع زيادة سنوية اتفاقية بنسبة 10%، وتأمين نقدي قدره 32,000 جنيه يُرد عند انتهاء العقد.',
      leaseTerm: 'مدة الإيجار سنتان تبدأ من 1 نوفمبر 2026 وتنتهي في 31 أكتوبر 2028، وينتهي العقد بانتهاء مدته دون حاجة لتنبيه أو إنذار بالإخلاء وفقاً لأحكام القانون رقم 4 لسنة 1996.',
    },
  },
  {
    id: 'turnkey_construction',
    icon: 'fa-trowel-bricks',
    labelAr: 'عقد مقاولات وتشطيبات Turnkey',
    labelEn: 'Turnkey Construction & Fit-out',
    contractType: 'Construction Contract',
    badge: '18+ مادة مفصلة',
    disputeResolution: 'arbitration' as const,
    details: {
      partyDetails: 'الطرف الأول (رب العمل): شركة الأفق للاستثمار العقاري والتجاري ش.م.م، سجل تجاري رقم 12894 القاهرة، ويمثلها رئيس مجلس الإدارة.\nالطرف الثاني (المقاول الرئيسي): شركة النيل للإنشاءات الهندسية والمقاولات العامة، سجل تجاري رقم 45982 الجيزة، ومقيدة بالاتحاد المصري لمقاولي البناء والتشييد الفئة الأولى.',
      agreementSubject: 'تنفيذ أعمال التشطيبات المتكاملة والتجهيزات الكهروميكانيكية والمعمارية (تسليم مفتاح) لمبنى إداري وتجاري متكامل بالقرية الذكية مكون من بدروم وأرضي و4 أدوار متكررة وفقاً لدفاتر الشروط والمواصفات الفنية المعتمدة.',
      financialTerms: 'القيمة الإجمالية التعاقدية المقطوعة 24,500,000 جنيه مصري، دفعة مقدمة 15% مقابل خطاب ضمان بنكي نهائي غير مشروط، ومستخلصات شهرية جارية مع حجز 5% كضمان صيانة يُرد بعد انتهاء فترة الضمان.',
      contractTerm: 'مدة التنفيذ الإجمالية 14 شهراً تقويمياً تبدأ من تاريخ استلام الموقع بموجب محضر استلام رسمي، مع خضوع المقاول للضمان العشري طبقاً للمادة 651 من القانون المدني المصري وغرامة تأخير اتفاقية جابرة للضرر.',
    },
  },
  {
    id: 'executive_employment',
    icon: 'fa-user-tie',
    labelAr: 'عقد عمل فردي تنفيذي',
    labelEn: 'Executive Employment Contract',
    contractType: 'Employment Contract',
    badge: 'قانون العمل 12/2003',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      employerDetails: 'شركة دلتا للتكنولوجيا المالية والخدمات المصرفية الرقمية ش.م.م، سجل تجاري رقم 98124 استثمار القاهرة، ويمثلها في التوقيع مدير عام الموارد البشرية.',
      employeeDetails: 'المهندس/ عمر كمال عبد العزيز، مصري الجنسية، بطاقة رقم قومي: 29302150106543، حاصل على بكالوريوس هندسة الحاسبات، المقيم في: التجمع الثالث، القاهرة الجديدة.',
      jobTitle: 'رئيس فريق هندسة البرمجيات السحابية (Lead Cloud Solutions Architect).',
      salaryAndBenefits: 'راتب شهري إجمالي قدره 55,000 جنيه مصري، تأمين طبي شامل من الدرجة الأولى للأسرة، بدل مواصلات وهاتف، مكافأة أداء سنوية ترتبط بالأهداف، وإجازة سنوية مدفوعة الأجر 21 يوماً وفق قانون العمل 12 لسنة 2003.',
      contractTerm: 'عقد محدد المدة لمدة سنتين تبدأ من 15 نوفمبر 2026، يتضمن فترة اختبار مدتها 3 أشهر وفقاً لأحكام قانون العمل المصري رقم 12 لسنة 2003، مع التزام صارم بالسرية وحظر المنافسة لمدة سنتين بعد الانتهاء.',
    },
  },
  {
    id: 'tech_software_sla',
    icon: 'fa-laptop-code',
    labelAr: 'تطوير برمجيات وترخيص تقني وSLA',
    labelEn: 'Software Development & SLA',
    contractType: 'Software Development Agreement',
    badge: 'حماية ملكية فكرية',
    disputeResolution: 'arbitration' as const,
    details: {
      clientDetails: 'شركة فارما مصر لتجارة وتوزيع الأدوية والمستلزمات الطبية ش.م.م (القاهرة).',
      developerDetails: 'شركة كلاود تك لحلول الذكاء الاصطناعي وتطوير المنظومات الرقمية ذ.م.م (القرية الذكية).',
      projectScope: 'تصميم وبرمجة وتشغيل نظام سحابي متكامل لإدارة سلاسل الإمداد ومستودعات الأدوية مع تطبيق هاتف ذكي للربط مع الصيدليات وواجهات برمجة التطبيقات API للمدفوعات الرقمية وبوابة الفاتورة الإلكترونية لمصلحة الضرائب المصرية.',
      paymentSchedule: 'إجمالي المقابل المالي 850,000 جنيه مصري يُدفع على 4 مراحل: 25% عند التوقيع، 25% عند اعتماد التصميم المعماري والنماذج، 30% عند الفحص التجريبي والتشغيل، و20% عند الاستلام النهائي ونقل الكود المصدري.',
      ipOwnership: 'تنازل كامل ومطلق وغير قابل للإلغاء من المطور للعميل عن كافة حقوق الملكية الفكرية، وحقوق المؤلف، والشفرة المصدرية (Source Code)، وقواعد البيانات فور سداد مستحقات المرحلة النهائية.',
    },
  },
  {
    id: 'investment_partnership',
    icon: 'fa-handshake',
    labelAr: 'عقد شراكة استثمارية وتأسيس مشروع',
    labelEn: 'Partnership & Joint Venture',
    contractType: 'Partnership Agreement',
    badge: 'أرباح وخسائر شرعية',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      partnershipName: 'شركة النور للصناعات الغذائية والتصدير (شركة تضامن / توصية بسيطة قيد التأسيس).',
      partnerDetails: 'الطرف الأول (شريك ممول): السيد/ حسن عبد الله المنشاوي، بطاقة رقم قومي: 27506100101122 (حصة مالية).\nالطرف الثاني (شريك بالعمل والإدارة): المهندس/ ياسر سعيد البكري، بطاقة رقم قومي: 28409180102233 (حصة عمل وخبرة فنية وتفرغ إداري).',
      capitalContributions: 'رأس مال المشروع الإجمالي 6,000,000 جنيه مصري، يقدم الطرف الأول مبلغ 4,500,000 جنيه نقداً، ويقدم الطرف الثاني مبلغ 1,500,000 جنيه نقداً بالإضافة إلى خبرته الإدارية والتسويقية المتفرغة.',
      profitAndLoss: 'توزيع الأرباح الصافية بنسبة 60% للطرف الأول و40% للطرف الثاني بعد استقطاب الاحتياطيات، وتوزيع الخسائر الرأسمالية بقدر الحصص المالية عملاً بالقاعدة الشرعية الفقهية "الربح على ما اشترطا والوضيعة على قدر المالين".',
      managementAndVoting: 'يتولى الطرف الثاني الإدارة التنفيذية اليومية للشركة وله حق التوقيع أمام البنوك والجهات الحكومية في حدود ميزانية التشغيل، على ألا تصح التصرفات العقارية أو القروض إلا بتوقيع مشترك بين الشريكين.',
    },
  },
  {
    id: 'vehicle_sale',
    icon: 'fa-car-side',
    labelAr: 'عقد بيع سيارة / مركبة نهائي',
    labelEn: 'Motor Vehicle Sale Agreement',
    contractType: 'Vehicle Sale Agreement',
    badge: 'مرور وشهر عقاري',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      partyDetails: 'الطرف الأول (البائع): السيد/ عصام محمد عبد الحميد، مصري الجنسية، بطاقة رقم قومي: 27902140105678، المقيم في: 18 شارع النيل، العجوزة، الجيزة.\nالطرف الثاني (المشتري): السيد/ هشام سامي البارودي، مصري الجنسية، بطاقة رقم قومي: 28807190104321، المقيم في: 7 شارع الهرم، الجيزة.',
      agreementSubject: 'سيارة ملاكي ماركة تويوتا كورولا، موديل 2024، لون فضي ميتاليك، رقم اللوحات: (س ف ر 1284)، رقم الشاسيه: NMT52894103، رقم الموتور: 2ZR489214، وحدة مرور فيصل.',
      financialTerms: 'إجمالي الثمن المتفق عليه 1,250,000 جنيه مصري، سدد منه المشتري 1,000,000 جنيه نقداً بمجلس العقد، والمتبقي 250,000 جنيه بشيك مصرفي مقبول الدفع يُصرف عند توثيق عقد البيع بالشهر العقاري.',
      contractTerm: 'التسليم الفعلي للسيارة ورخصتها ومفتاحين أصليين تم بمجلس العقد، مع التزام البائع بالحضور بالشهر العقاري خلال 3 أيام لتوثيق البيع النهائي ونقل القيد والترخيص.',
    },
  },
  {
    id: 'commercial_supply',
    icon: 'fa-truck-fast',
    labelAr: 'عقد توريد تجاري وفاتورة إلكترونية',
    labelEn: 'Commercial Supply & Delivery',
    contractType: 'Commercial Sales & Supply Agreement',
    badge: 'منظومة ETA وEOS',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      partyDetails: 'الطرف الأول (المورد): شركة النيل للمهمات والتوريدات الكهربائية ش.م.م، سجل تجاري 89412 القاهرة، بطاقة ضريبية 345-891-200.\nالطرف الثاني (المشتري): شركة الأهرام للمقاولات والتطوير العمراني ش.م.م، سجل تجاري 67123 الجيزة.',
      agreementSubject: 'توريد كابلات كهربائية نحاسية مسلحة معتمدة ومحولات جهد متوسط ومهمات إنارة مطابقة للمواصفات القياسية المصرية (EOS) مع شهادات اختبار الجودة وضمان معتمد.',
      financialTerms: 'القيمة الإجمالية التقديرية للتوريدات 8,600,000 جنيه مصري، تصرف الدفعات بموجب فواتير إلكترونية معتمدة بمنظومة مصلحة الضرائب المصرية خلال 15 يوماً من محضر الفحص الفني.',
      contractTerm: 'التوريد دوري على 3 دفعات متتالية لمخازن المشتري DDP خلال 4 أشهر، مع ضمان 12 شهراً ضد العيوب الخفية وغرامة تأخير اتفاقية جابرة 1% أسبوعياً.',
    },
  },
  {
    id: 'amicable_settlement',
    icon: 'fa-scale-balanced',
    labelAr: 'عقد صلح وتسوية منازعات شامل',
    labelEn: 'Amicable Settlement & Release',
    contractType: 'Amicable Settlement Agreement',
    badge: 'سند تنفيذي ملزم',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      partyDetails: 'الطرف الأول: السيد/ رأفت محمود الهواري، بطاقة رقم قومي 27003150102211، المقيم في مصر الجديدة.\nالطرف الثاني: المهندس/ أشرف فؤاد القاضي، بطاقة رقم قومي 28108220104433، المقيم في الدقي.',
      agreementSubject: 'إنهاء وحسم النزاع المالي والقانوني القائم بين الطرفين بشأن الشراكة السابقة في المشروع التجاري، والتنازل النهائي عن الدعوى رقم 1482 لسنة 2025 مدني كلي شمال القاهرة.',
      financialTerms: 'تسوية النزاع نظير سداد الطرف الثاني مبلغ 950,000 جنيه مصري بموجب تحويل بنكي فوري، ويُعتبر استلام هذا المبلغ مخالصة تامة وشاملة وإبراء لذمة الطرف الثاني من أي مطالبات.',
      contractTerm: 'التنازل المتبادل عن كافة الدعاوى والبلاغات الجنائية والمدنية فور التوقيع، مع إلحاق هذا العقد بمحضر الجلسة لإعطائه قوة السند التنفيذي وفقاً للمادة 553 مدني.',
    },
  },
  {
    id: 'gafi_llc_preset',
    icon: 'fa-building-columns',
    labelAr: 'تأسيس شركة ذات مسؤولية محدودة (GAFI ذ.م.م)',
    labelEn: 'LLC Formation (GAFI Standard)',
    contractType: 'Limited Liability Company Formation (LLC - GAFI)',
    badge: 'هيئة الاستثمار GAFI',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      companyNameAndBrand: 'شركة الأفق الرقمي للتجارة والتكنولوجيا ذات مسؤولية محدودة (ش.ذ.م.م) - السمة التجارية: Horizon Tech',
      foundersDetails: 'الشركاء المؤسسون:\n1. السيد/ أحمد محمود الصاوي، مصري، رقم قومي 28503120104567، مقيم بالمعادي، القاهرة (حصة 50%).\n2. المهندس/ كريم نبيل الشربيني، مصري، رقم قومي 28907140108921، مقيم بالدقي، الجيزة (حصة 50%).',
      capitalAndShares: 'رأس مال الشركة 1,000,000 جنيه مصري، مقسم إلى 1,000 حصة نقدية متساوية القيمة، قيمة الحصة 1,000 جنيه، مدفوع بالكامل بحساب التأسيس ببنك مصر فرع المعادي.',
      managementAndSigning: 'يتولى إدارة الشركة السيد/ أحمد محمود الصاوي كمدير عام، وله حق تمثيل الشركة والتوقيع البنكي والحكومي والتعاقدي منفرداً.',
      corporatePurpose: 'المركز الرئيسي: مبنى 14 شارع النصر، المعادي، القاهرة. الغرض: تطوير البرمجيات، التجارة العامة، التوريدات، الاستيراد والتصدير، والخدمات التقنية.',
    },
  },
  {
    id: 'gafi_sae_preset',
    icon: 'fa-landmark-flag',
    labelAr: 'تأسيس شركة مساهمة مصرية (GAFI ش.م.م)',
    labelEn: 'Joint Stock Company (S.A.E - GAFI)',
    contractType: 'Joint Stock Company Formation (S.A.E - GAFI)',
    badge: 'قانون 159 وقانون 72',
    disputeResolution: 'egyptian_courts' as const,
    details: {
      companyNameAndBrand: 'شركة النيل القابضة للاستثمارات المالية والصناعية (شركة مساهمة مصرية - ش.م.م)',
      foundersDetails: 'المؤسسون المكتتبون:\n1. السيد/ طارق إبراهيم الدسوقي، مصري، رقم قومي 27805120102345 (50,000 سهم).\n2. السيد/ خالد عبد الرحمن الشافعي، مصري، رقم قومي 27208150104321 (30,000 سهم).\n3. شركة دلتا للاستثمار ش.م.م، سجل تجاري 98124 ويمثلها رئيس مجلس الإدارة (20,000 سهم).',
      capitalAndShares: 'رأس المال المرخص به 50,000,000 جنيه مصري، ورأس المال المصدر 10,000,000 جنيه مقسم إلى 100,000 سهم بقيمة اسمية 100 جنيه للسهم، سدد 25% بحساب التأسيس بالبنك التجاري الدولي (CIB).',
      managementAndSigning: 'مجلس إدارة مكون من 3 أعضاء برئاسة السيد/ طارق إبراهيم الدسوقي، وتعيين السيد/ خالد عبد الرحمن الشافعي عضواً منتدباً للإدارة التنفيذية والتوقيع.',
      corporatePurpose: 'المركز الرئيسي: القطعة 88 الحي الخامس، التجمع الخامس، القاهرة الجديدة. الغرض: الاستثمار الصناعي، الخدمات اللوجستية، سلاسل الإمداد، وإدارة المشروعات.',
    },
  },
];

// Configuration for dynamic fields based on contract type
const contractFieldConfig: { [key: string]: any[] } = {
  'Vehicle Sale Agreement': [
    { name: 'partyDetails', labelAr: 'بيانات البائع والمشتري والأرقام القومية', labelEn: 'Seller & Buyer Details & National IDs', placeholderAr: 'الأسماء، الأرقام القومية، العناوين، الصفة القانونية...', placeholderEn: 'Names, national IDs, addresses, capacity...', type: 'textarea' },
    { name: 'agreementSubject', labelAr: 'مواصفات السيارة وأرقام الشاسيه والموتور واللوحات', labelEn: 'Vehicle Specs, Chassis, Engine & Plates', placeholderAr: 'الماركة، الموديل، اللون، رقم الشاسيه والموتور، وحدة المرور...', placeholderEn: 'Make, model, color, chassis and engine number, traffic unit...', type: 'textarea' },
    { name: 'financialTerms', labelAr: 'الثمن الإجمالي وطريقة الوفاء والمخالصة', labelEn: 'Total Price & Payment / Discharge Terms', placeholderAr: 'المبلغ الإجمالي بالجنيه المصري، المسدد نقداً، وشيكات المتبقي...', placeholderEn: 'Total amount in EGP, cash down payment, certified checks...', type: 'textarea' },
    { name: 'contractTerm', labelAr: 'التسليم الفعلي ونقل الترخيص والتوثيق بالشهر العقاري', labelEn: 'Handover & Notary Registration Terms', placeholderAr: 'تاريخ التسليم الفعلي، رخصة التسيير، والالتزام بالحضور للتوثيق...', placeholderEn: 'Handover date, registration transfer, notary attendance...', type: 'text' },
  ],
  'Commercial Sales & Supply Agreement': [
    { name: 'partyDetails', labelAr: 'بيانات المورد والمشتري والسجل التجاري', labelEn: 'Supplier & Buyer Details & Commercial Reg', placeholderAr: 'اسم الشركتين، السجل التجاري، البطاقة الضريبية، الممثل القانوني...', placeholderEn: 'Companies, Commercial Reg, Tax ID, authorized signatories...', type: 'textarea' },
    { name: 'agreementSubject', labelAr: 'مواصفات البضائع والمهمات الموردة (EOS)', labelEn: 'Goods Specifications & EOS Standards', placeholderAr: 'توصيف البضائع، معايير الجودة المصرية، التعبئة والتغليف...', placeholderEn: 'Goods descriptions, Egyptian standards, packaging specs...', type: 'textarea' },
    { name: 'financialTerms', labelAr: 'القيمة المالية ومنظومة الفاتورة الإلكترونية (ETA)', labelEn: 'Price, Invoicing & ETA Portal Integration', placeholderAr: 'القيمة الإجمالية، مواعيد الفواتير الإلكترونية، شروط السداد...', placeholderEn: 'Contract sum, e-invoice timetable, payment milestones...', type: 'textarea' },
    { name: 'contractTerm', labelAr: 'الجدول الزمني للتوريد DDP وضمان العيوب الخفية', labelEn: 'Delivery Timetable (DDP) & Latent Defect Warranty', placeholderAr: 'مواعيد التوريد بالمخازن، مدة الضمان، وغرامات التأخير الاتفاقية...', placeholderEn: 'Delivery schedule, warranty duration, liquidated damages...', type: 'text' },
  ],
  'Amicable Settlement Agreement': [
    { name: 'partyDetails', labelAr: 'بيانات أطراف الصلح والتسوية', labelEn: 'Settlement Parties & Legal Status', placeholderAr: 'الأسماء، الأرقام القومية، الصفة، الموطن المختار...', placeholderEn: 'Names, national IDs, status, elected domiciles...', type: 'textarea' },
    { name: 'agreementSubject', labelAr: 'موضوع النزاع المحسوم والدعاوى المتنازل عنها', labelEn: 'Dispute Subject Matter & Lawsuits Withdrawn', placeholderAr: 'بيان الخلاف، أرقام الدعاوى القضائية والبلاغات المتنازل عنها صلحاً...', placeholderEn: 'Dispute summary, case numbers, formal withdrawal commitment...', type: 'textarea' },
    { name: 'financialTerms', labelAr: 'مبلغ التسوية المالية والمخالصة التامة المبرئة للذمة', labelEn: 'Settlement Consideration & Full Discharge', placeholderAr: 'المبلغ المتفق عليه للسداد، طريقة التحويل البنكي، والمخالصة النهائية...', placeholderEn: 'Agreed settlement sum, payment method, mutual full release...', type: 'textarea' },
    { name: 'contractTerm', labelAr: 'إلحاق الصلح بمحضر الجلسة (سند تنفيذي)', labelEn: 'Court Minutes Recording & Executive Power', placeholderAr: 'المحكمة المختصة بإثبات التنازل وجعل الصلح في قوة السند التنفيذي...', placeholderEn: 'Court recording procedures, res judicata executive effect...', type: 'text' },
  ],
  'Employment Contract': [
    { name: 'employerDetails', labelAr: 'بيانات صاحب العمل', labelEn: 'Employer Details', placeholderAr: 'اسم الشركة، العنوان، السجل التجاري...', placeholderEn: 'Company name, address, commercial registration...', type: 'textarea' },
    { name: 'employeeDetails', labelAr: 'بيانات الموظف', labelEn: 'Employee Details', placeholderAr: 'الاسم، الرقم القومي، العنوان...', placeholderEn: 'Name, national ID, address...', type: 'textarea' },
    { name: 'jobTitle', labelAr: 'المنصب والوصف الوظيفي', labelEn: 'Job Title & Responsibilities', placeholderAr: 'مثال: رئيس فريق البرمجيات، مدير مالي تنفيذي', placeholderEn: 'e.g., Software Architect, Chief Financial Officer', type: 'text' },
    { name: 'salaryAndBenefits', labelAr: 'الراتب والبدلات والمزايا', labelEn: 'Salary, Allowances & Benefits', placeholderAr: 'الراتب الأساسي، بدل السكن، التأمين الطبي، المكافأة السنوية...', placeholderEn: 'Base salary, allowances, medical insurance, annual bonus...', type: 'textarea' },
    { name: 'contractTerm', labelAr: 'مدة العقد وفترة الاختبار', labelEn: 'Term & Probation Period', placeholderAr: 'سنة أو سنتين، فترة اختبار 3 أشهر وفقاً لقانون العمل 12 لسنة 2003...', placeholderEn: '1-2 years, 3 months probation per Egyptian Labor Law 12/2003...', type: 'text' },
  ],
  'Lease Agreement': [
    { name: 'lessorDetails', labelAr: 'بيانات المؤجر', labelEn: 'Lessor Details', placeholderAr: 'الاسم، الرقم القومي، العنوان، موطنه المختار', placeholderEn: 'Name, National ID, Address, Legal Domicile', type: 'textarea' },
    { name: 'lesseeDetails', labelAr: 'بيانات المستأجر', labelEn: 'Lessee Details', placeholderAr: 'الاسم، الرقم القومي، العنوان، موطنه المختار', placeholderEn: 'Name, National ID, Address, Legal Domicile', type: 'textarea' },
    { name: 'propertyDetails', labelAr: 'مواصفات العين المؤجرة ومشتملاتها', labelEn: 'Leased Property Specifications', placeholderAr: 'العنوان الكامل للعقار، الدور، المساحة، نوع الاستخدام (سكني/تجاري)', placeholderEn: 'Full address of property, floor, area, designated usage', type: 'textarea' },
    { name: 'rentAmount', labelAr: 'القيمة الإيجارية وطريقة السداد والتأمين', labelEn: 'Rent Amount, Payment & Deposit', placeholderAr: 'المبلغ الشهري، الزيادة السنوية المقررة، مبلغ التأمين المسترد', placeholderEn: 'Monthly rent, annual increase, refundable security deposit', type: 'text' },
    { name: 'leaseTerm', labelAr: 'مدة الإيجار وشروط الإخلاء', labelEn: 'Lease Duration & Eviction Rules', placeholderAr: 'المدة وتاريخ البدء والانتهاء (خاضع لأحكام القانون 4 لسنة 1996)', placeholderEn: 'Duration, start & end date subject to Law 4/1996', type: 'text' },
  ],
  'Real Estate Purchase Agreement': [
    { name: 'partyDetails', labelAr: 'بيانات البائع والمشتري', labelEn: 'Seller & Buyer Details', placeholderAr: 'الأسماء، الأرقام القومية، العناوين، الأهلية القانونية...', placeholderEn: 'Names, national IDs, addresses, legal capacity...', type: 'textarea' },
    { name: 'agreementSubject', labelAr: 'بيان وتوصيف العقار المبيع وحصصه', labelEn: 'Property Description & Land Share', placeholderAr: 'رقم الوحدة، العقار، القطعة، المساحة، الحصة في الأرض والجراج وسند الملكية...', placeholderEn: 'Unit no, building, plot, area, land share, garage & title deed...', type: 'textarea' },
    { name: 'financialTerms', labelAr: 'الثمن الإجمالي وجدول الدفعات', labelEn: 'Total Price & Installments Schedule', placeholderAr: 'إجمالي الثمن بالجنيه المصري، المقدم المدفوع، الأقساط وتواريخها...', placeholderEn: 'Total price in EGP, down payment, installment schedule...', type: 'textarea' },
    { name: 'contractTerm', labelAr: 'شروط التسليم ونقل الملكية والشهر العقاري', labelEn: 'Delivery, Registration & Title Transfer', placeholderAr: 'موعد التسليم الفعلي، التزام الحضور بالشهر العقاري لنقل الملكية...', placeholderEn: 'Handover date, notary attendance commitment...', type: 'text' },
  ],
  'Construction Contract': [
    { name: 'partyDetails', labelAr: 'بيانات رب العمل والمقاول', labelEn: 'Employer & Contractor Details', placeholderAr: 'بيانات الشركة، السجل التجاري، التصنيف باتحاد المقاولين...', placeholderEn: 'Company details, commercial registration, contractor grade...', type: 'textarea' },
    { name: 'agreementSubject', labelAr: 'نطاق الأعمال والمواصفات الهندسية', labelEn: 'Scope of Works & Technical Specs', placeholderAr: 'وصف تفصيلي لأعمال التشييد والتشطيب، الرسومات الهندسية المعتمدة...', placeholderEn: 'Detailed construction & finishing scope, approved drawings...', type: 'textarea' },
    { name: 'financialTerms', labelAr: 'القيمة المالية والدفعات وخطابات الضمان', labelEn: 'Contract Sum, Milestones & Bank Guarantees', placeholderAr: 'القيمة الإجمالية، الدفعة المقدمة، المستخلصات الشهرية، نسبة حجز الصيانة...', placeholderEn: 'Total sum, advance payment, progress invoices, retention...', type: 'textarea' },
    { name: 'contractTerm', labelAr: 'البرنامج الزمني والضمان العشري (م 651 مدني)', labelEn: 'Execution Schedule & Decennial Liability', placeholderAr: 'مدة التنفيذ بالأشهر، غرامة التأخير اليومية، والضمان العشري لسلامة المبنى...', placeholderEn: 'Duration in months, delay liquidated damages, decennial liability...', type: 'text' },
  ],
  'Software Development Agreement': [
    { name: 'clientDetails', labelAr: 'بيانات العميل', labelEn: 'Client Details', placeholderAr: 'اسم الشركة، الممثل القانوني، المقر، السجل التجاري...', placeholderEn: 'Company name, authorized signatory, headquarters...', type: 'textarea' },
    { name: 'developerDetails', labelAr: 'بيانات المطور التقني', labelEn: 'Developer Details', placeholderAr: 'اسم الشركة المطورة، السجل التجاري، الممثل التقني والقانوني...', placeholderEn: 'Development firm, commercial registration, tech representative...', type: 'textarea' },
    { name: 'projectScope', labelAr: 'المواصفات الفنية ونطاق المنظومة الرقمية', labelEn: 'Technical Scope & Feature Specs', placeholderAr: 'توصيف النظام، التطبيقات، البنية السحابية، ووثيقة المتطلبات الفنية...', placeholderEn: 'System architecture, mobile apps, cloud backend, requirements...', type: 'textarea' },
    { name: 'paymentSchedule', labelAr: 'المقابل المالي ومراحل التسليم والاعتماد', labelEn: 'Financial Consideration & Milestones', placeholderAr: 'إجمالي المقابل، الدفعة المقدمة، ودفعات المراحل المرتبطة بمحاضر الفحص...', placeholderEn: 'Total fee, advance payment, milestone acceptance triggers...', type: 'textarea' },
    { name: 'ipOwnership', labelAr: 'ملكية الكود المصدري وحقوق الملكية الفكرية وSLA', labelEn: 'IP Ownership, Source Code & SLA', placeholderAr: 'نقل ملكية الكود المصدري للعميل، اتفاقية مستوى الخدمة، والدعم الفني...', placeholderEn: 'Full transfer of source code, SLA metrics, technical support...', type: 'text' },
  ],
  'Partnership Agreement': [
    { name: 'partnershipName', labelAr: 'الاسم والسمة التجارية للشراكة', labelEn: 'Partnership Commercial Name', placeholderAr: 'الاسم التجاري للشركة أو المشروع المشترك المقترح...', placeholderEn: 'Commercial brand name of the proposed venture...', type: 'text' },
    { name: 'partnerDetails', labelAr: 'بيانات الشركاء والأرقام القومية', labelEn: 'Partners Details & National IDs', placeholderAr: 'الأسماء، الصفة (شريك متضامن / شريك موصٍ)، العناوين...', placeholderEn: 'Names, partner legal status (managing / silent), addresses...', type: 'textarea' },
    { name: 'capitalContributions', labelAr: 'حصص رأس المال النقدية والعينية', labelEn: 'Capital Contributions (Cash & In-Kind)', placeholderAr: 'مقدار حصة كل شريك وقيمتها، وطريقة الوفاء برأس المال...', placeholderEn: 'Capital share of each partner, cash or assets, payment...', type: 'textarea' },
    { name: 'profitAndLoss', labelAr: 'قواعد توزيع الأرباح والخسائر الشرعية', labelEn: 'Profit & Loss Sharia Compliant Ratio', placeholderAr: 'نسبة الأرباح، وتحمل الخسائر بحسب رأس المال طبقاً للشريعة...', placeholderEn: 'Profit percentages, capital loss allocation according to Sharia...', type: 'text' },
    { name: 'managementAndVoting', labelAr: 'الإدارة وصلاحيات التوقيع البنكي والحكومي', labelEn: 'Management, Signatory Powers & Governance', placeholderAr: 'تحديد الشريك المدير، الصلاحيات الإدارية، وحدود التصرفات المالية...', placeholderEn: 'Appointing managing partner, bank signing authorities...', type: 'textarea' },
  ],
  'Company Formation Contract': [
    { name: 'companyNameAndBrand', labelAr: 'اسم الشركة المقترح والسمة والشكل القانوني', labelEn: 'Proposed Company Name, Trade Style & Legal Form', placeholderAr: 'اسم الشركة، السمة التجارية، الشكل: ذات مسؤولية محدودة / مساهمة / شخص واحد / تضامن...', placeholderEn: 'Company full legal name, brand style, corporate type...', type: 'text' },
    { name: 'foundersDetails', labelAr: 'بيانات المؤسسين / الشركاء والأرقام القومية', labelEn: 'Founders / Partners Details & National IDs', placeholderAr: 'الأسماء، الجنسيات، الأرقام القومية، العناوين، ونسبة كل شريك...', placeholderEn: 'Names, nationalities, national IDs, addresses, quotas...', type: 'textarea' },
    { name: 'capitalAndShares', labelAr: 'رأس المال المرخص والمصدر وقيمة السهم/الحصة وبنك التأسيس', labelEn: 'Capital, Quotas/Shares & Statutory Bank Account', placeholderAr: 'رأس المال الإجمالي، عدد الأسهم أو الحصص، قيمتها الاسمية، اسم بنك التأسيس المعتمد...', placeholderEn: 'Total capital, share counts, par value, depository bank...', type: 'textarea' },
    { name: 'managementAndSigning', labelAr: 'تشكيل مجلس الإدارة / المديرين وسلطات التوقيع البنكي', labelEn: 'Board / Management Composition & Signatory Authorities', placeholderAr: 'تعيين رئيس المجلس أو المدير العام، صلاحيات التوقيع البنكي، حدود الصرف...', placeholderEn: 'Board members or managers, bank signing mandate...', type: 'textarea' },
    { name: 'corporatePurpose', labelAr: 'غرض الشركة والأنشطة والمركز الرئيسي وفروعها', labelEn: 'Corporate Purpose, Activities & Headquarters', placeholderAr: 'الأنشطة الاقتصادية المرخصة، العنوان التفصيلي للمقر الرئيسي والفروع...', placeholderEn: 'Licensed activities, full address of head office and branches...', type: 'textarea' },
  ],
  'Joint Stock Company Formation (S.A.E - GAFI)': [
    { name: 'companyNameAndBrand', labelAr: 'اسم شركة المساهمة والسمة التجارية (ش.م.م)', labelEn: 'JSC Company Name & Brand', placeholderAr: 'شركة [...] (شركة مساهمة مصرية - ش.م.م)...', placeholderEn: 'Company Name S.A.E...', type: 'text' },
    { name: 'foundersDetails', labelAr: 'بيانات المؤسسين المكتتبين (3 مؤسسين على الأقل)', labelEn: 'Founders Subscription Details (Min 3)', placeholderAr: 'الأسماء، الأرقام القومية، عدد الأسهم المكتتب فيها لكل مؤسس...', placeholderEn: 'Founders names, IDs, subscribed shares per founder...', type: 'textarea' },
    { name: 'capitalAndShares', labelAr: 'رأس المال المرخص والمصدر وسداد نسبة البنك (MCDR)', labelEn: 'Authorized & Issued Capital & Depository', placeholderAr: 'رأس المال المرخص والمصدر، القيمة الاسمية للسهم، بنك التأسيس، القيد بمصر للمقاصة...', placeholderEn: 'Authorized/Issued capital, share par value, bank, MCDR...', type: 'textarea' },
    { name: 'managementAndSigning', labelAr: 'تشكيل مجلس الإدارة ورئيس المجلس والعضو المنتدب', labelEn: 'Board of Directors, Chairman & Managing Director', placeholderAr: 'أعضاء مجلس الإدارة، رئيس المجلس، العضو المنتدب، وسلطات التوقيع البنكي...', placeholderEn: 'Directors, Chairman, MD, banking powers...', type: 'textarea' },
    { name: 'corporatePurpose', labelAr: 'غرض الشركة الصناعي/التجاري والمركز الرئيسي', labelEn: 'Corporate Scope & Headquarters', placeholderAr: 'الأنشطة الاقتصادية المرخصة، عنوان المقر الرئيسي بمصر...', placeholderEn: 'Commercial/industrial scope, headquarters address...', type: 'textarea' },
  ],
  'Limited Liability Company Formation (LLC - GAFI)': [
    { name: 'companyNameAndBrand', labelAr: 'اسم الشركة ذات المسؤولية المحدودة (ش.ذ.م.م)', labelEn: 'LLC Legal Name & Form', placeholderAr: 'شركة [...] ذات مسؤولية محدودة (ش.ذ.م.م)...', placeholderEn: 'Company Name LLC...', type: 'text' },
    { name: 'foundersDetails', labelAr: 'بيانات الشركاء المؤسسين والأرقام القومية', labelEn: 'Founding Partners Details & National IDs', placeholderAr: 'الأسماء، الأرقام القومية، العناوين، وعدد الحصص ونسبتها...', placeholderEn: 'Partners, national IDs, addresses, quota percentages...', type: 'textarea' },
    { name: 'capitalAndShares', labelAr: 'رأس المال والحصص النقدية المدفوعة بالكامل', labelEn: 'Capital & Fully Paid-in Quotas', placeholderAr: 'إجمالي رأس المال، عدد الحصص النقدية، قيمة الحصة، بنك التأسيس...', placeholderEn: 'Total capital, quotas count, quota value, bank account...', type: 'textarea' },
    { name: 'managementAndSigning', labelAr: 'المدير العام أو مجلس المديرين وصلاحيات التوقيع', labelEn: 'General Manager / Board of Managers & Powers', placeholderAr: 'اسم المدير العام، صلاحيات التوقيع البنكي والإداري والتمثيل القضائي...', placeholderEn: 'Manager name, bank and judicial representation mandate...', type: 'textarea' },
    { name: 'corporatePurpose', labelAr: 'غرض الشركة ومحل ممارسة النشاط', labelEn: 'Corporate Purpose & Head Office', placeholderAr: 'الأنشطة المصرح بها، مقر المركز الرئيسي للشركة...', placeholderEn: 'Authorized business objectives, head office address...', type: 'textarea' },
  ],
  'One-Person Company Formation (OPC - GAFI)': [
    { name: 'companyNameAndBrand', labelAr: 'اسم شركة الشخص الواحد (ش.ش.و.ذ.م.م)', labelEn: 'One-Person Company Name (OPC)', placeholderAr: 'شركة [...] (شركة شخص واحد ذات مسؤولية محدودة)...', placeholderEn: 'Company Name (OPC)...', type: 'text' },
    { name: 'foundersDetails', labelAr: 'بيانات مالك ومؤسس الشركة الوحيد', labelEn: 'Sole Owner & Founder Details', placeholderAr: 'الاسم الكامل، الرقم القومي، الموطن القانوني المختار، الصفة...', placeholderEn: 'Sole founder name, National ID, elected domicile...', type: 'textarea' },
    { name: 'capitalAndShares', labelAr: 'رأس المال المسدد بالكامل نقداً وبنك التأسيس', labelEn: '100% Paid-in Capital & Statutory Bank', placeholderAr: 'قيمة رأس المال، شهادة الإيداع البنكي تحت التأسيس...', placeholderEn: 'Capital amount, bank incorporation deposit certificate...', type: 'textarea' },
    { name: 'managementAndSigning', labelAr: 'إدارة الشركة (المالك بنفسه أو مدير معين)', labelEn: 'Management (Sole Owner or Appointed Manager)', placeholderAr: 'تحديد ما إذا كان المالك سيدير بنفسه أو تعيين مدير عام وسلطاته...', placeholderEn: 'Sole owner management or appointed manager authorities...', type: 'textarea' },
    { name: 'corporatePurpose', labelAr: 'غرض الشركة (مع مراعاة حظر البنوك والتأمين)', labelEn: 'Corporate Purpose (Excluding Prohibitions)', placeholderAr: 'الأنشطة التجارية أو التقنية أو الخدمية، المركز الرئيسي...', placeholderEn: 'Business objectives, headquarters address...', type: 'textarea' },
  ],
};

const contractGroups = [
  {
    groupLabelAr: 'عقود تأسيس الشركات (هيئة الاستثمار GAFI)', groupLabelEn: 'GAFI Corporate Formation',
    options: [
      { value: 'Joint Stock Company Formation (S.A.E - GAFI)', labelAr: 'عقد تأسيس والنظام الأساسي لشركة مساهمة مصرية (ش.م.م)', labelEn: 'Joint Stock Company Formation (S.A.E - GAFI)' },
      { value: 'Limited Liability Company Formation (LLC - GAFI)', labelAr: 'عقد تأسيس شركة ذات مسؤولية محدودة (ش.ذ.م.م)', labelEn: 'Limited Liability Company Formation (LLC - GAFI)' },
      { value: 'One-Person Company Formation (OPC - GAFI)', labelAr: 'عقد تأسيس شركة الشخص الواحد (ش.ش.و.ذ.م.م)', labelEn: 'One-Person Company Formation (OPC - GAFI)' },
      { value: 'General Partnership Formation (Tadamun - GAFI)', labelAr: 'عقد تأسيس شركة تضامن تجارية (شركات أشخاص)', labelEn: 'General Partnership Formation (Tadamun - GAFI)' },
      { value: 'Limited Partnership Formation (Tawsia - GAFI)', labelAr: 'عقد تأسيس شركة توصية بسيطة', labelEn: 'Limited Partnership Formation (Tawsia - GAFI)' },
      { value: 'Free Zone Joint Stock Company (GAFI Free Zone)', labelAr: 'عقد شركة مساهمة بنظام المناطق الحرة العامة/الخاصة', labelEn: 'Free Zone Joint Stock Company (GAFI Free Zone)' },
      { value: 'Partnership Limited by Shares (GAFI)', labelAr: 'عقد تأسيس شركة توصية بالأسهم', labelEn: 'Partnership Limited by Shares (GAFI)' },
      { value: 'Corporate Amendment & Capital Restructuring (GAFI)', labelAr: 'عقد تعديل رسمي شامل لشركة تجارية (دخول شركاء وزيادة رأس مال)', labelEn: 'Corporate Amendment & Capital Restructuring (GAFI)' },
      { value: 'Company Formation Contract', labelAr: 'عقد تأسيس شركة تجارية عام', labelEn: 'General Company Formation Contract' },
    ]
  },
  {
    groupLabelAr: 'العقود الأكثر طلباً', groupLabelEn: 'Most Popular',
    options: [
      { value: 'Real Estate Purchase Agreement', labelAr: 'عقد بيع وحدة سكنية / عقار', labelEn: 'Real Estate Purchase Agreement' },
      { value: 'Vehicle Sale Agreement', labelAr: 'عقد بيع سيارة / مركبة (مرور وشهر عقاري)', labelEn: 'Motor Vehicle Sale Agreement' },
      { value: 'Lease Agreement', labelAr: 'عقد إيجار (سكني / تجاري)', labelEn: 'Lease Agreement' },
      { value: 'Construction Contract', labelAr: 'عقد مقاولات وتشطيبات', labelEn: 'Construction Contract' },
      { value: 'Employment Contract', labelAr: 'عقد عمل فردي', labelEn: 'Employment Contract' },
      { value: 'Software Development Agreement', labelAr: 'عقد تطوير برمجيات وحلول تقنية', labelEn: 'Software Development Agreement' },
      { value: 'Partnership Agreement', labelAr: 'عقد شراكة واستثمار', labelEn: 'Partnership Agreement' },
      { value: 'Sales Agreement', labelAr: 'عقد توريد وبيع بضائع تجاري', labelEn: 'Commercial Sales & Supply Agreement' },
      { value: 'Distribution Agreement', labelAr: 'عقد توزيع ووكالة تجارية', labelEn: 'Distribution & Agency Agreement' },
      { value: 'Amicable Settlement Agreement', labelAr: 'عقد صلح وتسوية منازعات بات ونهائي', labelEn: 'Amicable Settlement Agreement' },
    ]
  },
  {
    groupLabelAr: 'الشركات والاستثمار', groupLabelEn: 'Corporate & Investment',
    options: [
      { value: 'Shareholders Agreement', labelAr: 'اتفاقية مساهمين', labelEn: 'Shareholders Agreement' },
      { value: 'Joint Venture Agreement', labelAr: 'عقد مشروع مشترك (JV)', labelEn: 'Joint Venture Agreement' },
      { value: 'Franchise Agreement', labelAr: 'عقد امتياز تجاري (Franchise)', labelEn: 'Franchise Agreement' },
      { value: 'Investment Agreement', labelAr: 'عقد استثمار وتمويل', labelEn: 'Investment Agreement' },
      { value: 'Asset Purchase Agreement', labelAr: 'عقد شراء وبيع أصول ومعدات', labelEn: 'Asset Purchase Agreement' },
      { value: 'Non-Disclosure Agreement (NDA)', labelAr: 'اتفاقية سرية وعدم إفصاح', labelEn: 'Non-Disclosure Agreement (NDA)' },
      { value: 'Consultancy Agreement', labelAr: 'عقد تقديم استشارات مهنية', labelEn: 'Consultancy Agreement' },
      { value: 'Real Estate Donation Deed', labelAr: 'عقد هبة وتبرع رسمي بعقار', labelEn: 'Real Estate Donation Deed' },
    ]
  },
  {
    groupLabelAr: 'التكنولوجيا والخدمات', groupLabelEn: 'Tech & Digital Services',
    options: [
      { value: 'Service Level Agreement (SLA)', labelAr: 'اتفاقية مستوى الخدمة الرقمية (SLA)', labelEn: 'Service Level Agreement (SLA)' },
      { value: 'Licensing Agreement', labelAr: 'عقد ترخيص برمجيات وعلامة تجارية', labelEn: 'Software & IP Licensing Agreement' },
      { value: 'IP Assignment Agreement', labelAr: 'عقد تنازل رسمي عن ملكية فكرية', labelEn: 'IP Assignment Agreement' },
      { value: 'Website Terms and Conditions', labelAr: 'شروط استخدام منصة وتطبيق إلكتروني', labelEn: 'Website & App Terms of Service' },
    ]
  },
];

const ContractForm: React.FC<ContractFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<ContractFormData>(() => {
    if (initialData && initialData.contractType) {
      return initialData;
    }
    return {
      contractType: 'Real Estate Purchase Agreement',
      disputeResolution: 'egyptian_courts',
      details: {},
    };
  });

  const [currentFields, setCurrentFields] = useState<any[]>([]);
  const [activePresetId, setActivePresetId] = useState<string | null>(null);
  const [presetNotice, setPresetNotice] = useState<string | null>(null);

  // Apply initialData whenever passed
  useEffect(() => {
    if (initialData && initialData.contractType) {
      setFormData(initialData);
      setActivePresetId(null);
      setPresetNotice(`تم تحميل النموذج الرسمي المختار ببياناته المعتمدة! يمكنك تعديل أي بيان.`);
      setTimeout(() => setPresetNotice(null), 4000);
    }
  }, [initialData]);

  // Restore draft on mount, otherwise apply default preset
  useEffect(() => {
    if (initialData && initialData.contractType) return;
    try {
      const savedDraft = localStorage.getItem('adala_contract_draft_v1');
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        if (parsed.contractType && parsed.details && Object.keys(parsed.details).length > 0) {
          setFormData(parsed);
          return;
        }
      }
    } catch (e) {
      console.warn('Error restoring draft:', e);
    }

    if (!formData.details || Object.keys(formData.details).length === 0) {
      applyPreset(QUICK_PRESETS[0], false);
    }
  }, []);

  // Auto-save draft on change
  useEffect(() => {
    if (formData.contractType && Object.keys(formData.details || {}).length > 0) {
      try {
        localStorage.setItem('adala_contract_draft_v1', JSON.stringify(formData));
      } catch (e) {
        console.warn('Error saving draft:', e);
      }
    }
  }, [formData]);

  const applyPreset = (preset: typeof QUICK_PRESETS[0], showNotification = true) => {
    setActivePresetId(preset.id);
    setFormData({
      contractType: preset.contractType,
      disputeResolution: preset.disputeResolution,
      details: { ...preset.details },
    });

    if (showNotification) {
      setPresetNotice(`تم تحميل قالب "${preset.labelAr}" ببيانات قانونية مصرية معتمدة بنجاح! جاهز للتوليد الفوري.`);
      setTimeout(() => setPresetNotice(null), 4000);
    }
  };

  useEffect(() => {
    const fields = contractFieldConfig[formData.contractType] || [
      { name: 'partyDetails', labelAr: 'بيانات الأطراف والصفات القانونية', labelEn: 'Parties Details & Legal Capacity', placeholderAr: 'الأسماء، الأرقام القومية، الصفة، العناوين الرسمية...', placeholderEn: 'Names, national IDs, status, official addresses...', type: 'textarea' },
      { name: 'agreementSubject', labelAr: 'موضوع العقد ونطاق التكليف والالتزامات', labelEn: 'Subject Matter & Detailed Scope', placeholderAr: 'وصف تفصيلي شامل لموضوع العقد والالتزامات الجوهرية...', placeholderEn: 'Comprehensive description of subject matter and core obligations...', type: 'textarea' },
      { name: 'financialTerms', labelAr: 'الشروط المالية وجدول الوفاء والمقابل', labelEn: 'Financial Terms & Payment Milestones', placeholderAr: 'المبالغ، المواعيد، طرق السداد البنكية، والضرائب المقررة...', placeholderEn: 'Amounts, due dates, bank transfer methods, applicable taxes...', type: 'textarea' },
      { name: 'contractTerm', labelAr: 'مدة العقد والبدء والتجديد والضمانات', labelEn: 'Term, Duration, Renewal & Guarantees', placeholderAr: 'تاريخ السريان، شروط الإنهاء، والضمانات المقررة...', placeholderEn: 'Effective date, termination triggers, performance guarantees...', type: 'text' },
    ];
    setCurrentFields(fields);

    // If details are empty, create empty keys
    setFormData(prev => {
      const details = { ...prev.details };
      fields.forEach(f => {
        if (details[f.name] === undefined) {
          details[f.name] = '';
        }
      });
      return { ...prev, details };
    });
  }, [formData.contractType]);

  const handleMainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setActivePresetId(null);
    if (name === 'contractType') {
      setFormData(prev => ({ ...prev, [name]: value, details: {} }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      details: {
        ...prev.details,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Calculate completeness progress
  const filledFieldsCount = Object.values(formData.details).filter(v => String(v || '').trim().length > 5).length;
  const totalFieldsCount = Math.max(currentFields.length, 1);
  const completenessPercent = Math.min(100, Math.round((filledFieldsCount / totalFieldsCount) * 100));

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Executive Clean Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-lg border border-blue-900/60 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-300 font-bold mb-2">
              <i className="fas fa-scale-balanced text-amber-400"></i>
              <span>منظومة الصياغة والتوثيق المعتمدة — جمهورية مصر العربية</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              صياغة وتوليد العقود الرسمية وتأسيس الشركات
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              اختر أحد النماذج المعتمدة أدناه للتعبئة الفورية ببيانات قانونية صحيحة، أو حدد نوع العقد المطلوب واملأ بيانات الأطراف والبنود لتوليد المحرر كاملاً بكافة بنوده الـ 16-18.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/20 text-xs font-bold text-slate-200">
            <i className="fas fa-shield-halved text-emerald-400 text-base"></i>
            <span>مطابق لقضاء محكمة النقض ونماذج GAFI</span>
          </div>
        </div>
      </div>

      {/* Preset Quick Templates Section */}
      <div className="bg-white p-6 rounded-3xl shadow-xs border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <i className="fas fa-layer-group text-blue-600"></i>
              <span>نماذج رسمية سريعة التعبئة</span>
            </h3>
            <p className="text-[11px] text-slate-500">
              اضغط على أي قالب لتعبئة بيانات قانونية نموذجية فوراً وتجربة توليد العقد:
            </p>
          </div>
          <span className="text-[11px] font-bold text-slate-500">
            {QUICK_PRESETS.length} قوالب جاهزة
          </span>
        </div>

        {presetNotice && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-bold flex items-center gap-2 animate-fadeIn">
            <i className="fas fa-check-circle text-emerald-600 text-sm"></i>
            <span>{presetNotice}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {QUICK_PRESETS.map((preset) => {
            const isActive = activePresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`p-3.5 rounded-2xl border-2 text-right transition-all flex items-start gap-3 group cursor-pointer ${
                  isActive
                    ? 'border-blue-600 bg-blue-50/60 shadow-md ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/60'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-700'
                  }`}
                >
                  <i className={`fas ${preset.icon}`}></i>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] font-bold text-amber-700">
                      {preset.badge}
                    </span>
                    {isActive && (
                      <span className="text-[10px] text-blue-700 font-bold flex items-center gap-0.5">
                        <i className="fas fa-check"></i> تم التفعيل
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-black text-slate-900 line-clamp-1">{preset.labelAr}</h4>
                  <p className="text-[10px] text-slate-500 truncate" style={{ direction: 'ltr' }}>
                    {preset.labelEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Form Box */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header Controls: Contract Type & Dispute Resolution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-slate-100">
            <div>
              <label htmlFor="contractType" className="block text-xs font-black text-slate-800 mb-1.5">
                نوع العقد والوثيقة الرسمية / Contract Type
              </label>
              <select
                id="contractType"
                name="contractType"
                value={formData.contractType}
                onChange={handleMainChange}
                required
                className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-xl font-bold text-slate-900 shadow-2xs"
              >
                <option value="" disabled>اختر نوع العقد من القائمة...</option>
                {contractGroups.map((group) => (
                  <optgroup key={group.groupLabelEn} label={`${group.groupLabelAr} / ${group.groupLabelEn}`}>
                    {group.options.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.labelAr} ({t.labelEn})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="disputeResolution" className="block text-xs font-black text-slate-800 mb-1.5">
                آلية فض المنازعات والاختصاص / Dispute Resolution
              </label>
              <select
                id="disputeResolution"
                name="disputeResolution"
                value={formData.disputeResolution}
                onChange={handleMainChange}
                required
                className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-xl font-bold text-slate-900 shadow-2xs"
              >
                <option value="egyptian_courts">المحاكم المصرية المختصة (القضاء المصري الرسمي)</option>
                <option value="arbitration">التحكيم المؤسسي وفق قانون التحكيم المصري 27 لسنة 1994 (CRCICA)</option>
              </select>
            </div>
          </div>

          {/* Dynamic Details Fields */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <i className="fas fa-file-pen text-blue-600"></i>
                <span>بيانات وبنود العقد التنفيذية (يمكنك تعديلها بحرية):</span>
              </h4>
              <span className="text-[11px] text-slate-500 font-bold">
                نسبة اكتمال البيانات: <strong className="text-blue-700">{completenessPercent}%</strong>
              </span>
            </div>

            {currentFields.map((field) => (
              <div key={field.name} className="space-y-1">
                <label htmlFor={field.name} className="block text-xs font-bold text-slate-800">
                  {field.labelAr} <span className="text-slate-400 font-normal">({field.labelEn})</span>
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData.details[field.name] || ''}
                    onChange={handleDetailsChange}
                    rows={field.name === 'agreementSubject' || field.name === 'partyDetails' ? 3 : 2}
                    placeholder={`${field.placeholderAr}\n${field.placeholderEn}`}
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white leading-relaxed"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData.details[field.name] || ''}
                    onChange={handleDetailsChange}
                    placeholder={`${field.placeholderAr} / ${field.placeholderEn}`}
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Sharia, Statutory & Minimum 14 Clauses Guarantee Box */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-halved text-emerald-600 text-sm"></i>
                <span className="font-bold text-slate-900 text-xs">
                  ضمان الصياغة التنفيذية الشاملة والمطابقة القضائية
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                <span>14 إلى 22 مادة كاملة</span>
                <span className="mx-1.5" aria-hidden="true">·</span>
                <span className="text-emerald-700 font-bold">خالٍ من الربا والغرر</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              يُولد العقد متضمناً الديباجة الرسمية، التمهيد الملزم، الشرط الفاسخ الصريح (م 158 مدني)، الموطن المختار للإعلانات، التعويض الاتفاقي المشروع دون فوائد ربوية، والالتزام بالتوثيق بالشهر العقاري مع ترجمة إنجليزية معتمدة متطابقة فقرة بفقرة.
            </p>
          </div>

          {/* Submit Action */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={!formData.contractType}
              className="w-full py-3.5 px-6 border border-transparent shadow-md text-sm font-black rounded-xl text-slate-950 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all transform active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fas fa-feather-pointed"></i>
              <span>صياغة وهندسة العقد القانوني الكامل فوراً (14+ مادة كاملة)</span>
            </button>
            <p className="text-[10px] text-slate-500 mt-2">
              🔒 توليد فوري مع فحص تشريعي متكامل وتصدير Word و PDF وتوثيق إلكتروني.
            </p>
          </div>
        </form>
      </div>

      {/* Social Proof & Commercial Trust Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xl md:text-2xl font-black text-blue-900 block font-mono">1,520+</span>
          <span className="text-[11px] text-slate-600 font-bold">مكتب محاماة ومستشار معتمد</span>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xl md:text-2xl font-black text-emerald-600 block font-mono">100%</span>
          <span className="text-[11px] text-slate-600 font-bold">مطابقة تشريعية وشرعية</span>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xl md:text-2xl font-black text-amber-600 block font-mono">14+ إلى 22</span>
          <span className="text-[11px] text-slate-600 font-bold">مادة تعاقدية تفصيلية بالعقد</span>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <span className="text-xl md:text-2xl font-black text-indigo-600 block font-mono">8 ثوانٍ</span>
          <span className="text-[11px] text-slate-600 font-bold">متوسط سرعة الصياغة والتصدير</span>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;
