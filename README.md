# منشئ العقود القانونية المعتمدة ثنائي اللغة | Bilingual Legal Contract Generator

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-38b2ac.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#)

منظومة قانونية وتقنية متكاملة لصياغة وهندسة وتدقيق العقود القانونية والتجارية والمدنية ثنائية اللغة (**عربي - إنجليزي**) بدقة متناهية، مطابقة بنسبة 100% لأحكام **القانون المصري** (القانون المدني، قانون التجارة، قانون الشركات 159/1981، قانون الاستثمار 72/2017، قانون العمل 12/2003، ولوائح الشهر العقاري والتوثيق) وضوابط **الشريعة الإسلامية** وأحكام **محكمة النقض المصرية**.

---

## 🌟 الميزات الرئيسية (Core Features)

1. **توليد عقود متكاملة (Dynamic Full-Clause Generation):**
   - توليد ما لا يقل عن **14 إلى 18 مادة تعاقدية مفصلة** لكل عقد تغطي كافة الجوانب (الديباجة، الأهلية، التمهيد الملزم، التزامات الأطراف، الشروط المالية، الفحص، الشرط الفاسخ الصريح م 158، القوة القاهرة، السرية، والتحكيم/القضاء).

2. **موسوعة العقود الرسمية المعتمدة (50 عقداً رسمياً):**
   - تغطي عقود البيع العقاري، الإيجار، المقاولات (Turnkey)، العمل التنفيذي، التوريد، البرمجيات وتراخيص SLA، الشراكات الاستثمارية، وعقود هيئة الاستثمار (GAFI) لتأسيس الشركات (مساهمة، ذ.م.م، شخص واحد، مناطق حرة، وتعديل شركات).

3. **بنك الشروط والبنود الذكية (Smart Clause Bank):**
   - مكتبة غنية من الشروط القانونية المقننة وفقاً لأحدث التشريعات المصرية يمكن إدراجها بنقرة زر في أي مسودة.

4. **نظام التدقيق والمطابقة التشريعية (Legal Benchmarking & Audit):**
   - مطابقة نصوص العقد مع بوابة التشريعات المصرية، ونماذج مصلحة الشهر العقاري، وأحكام محكمة النقض، وتقاليد نقابة المحامين المصرية.

5. **فاحص المخاطر بالذكاء الاصطناعي (AI Contract Reviewer):**
   - فحص وكشف الشروط التعسفية والمجحفة ومخاطر الفوائد الربوية واقتراح الصياغة البديلة الآمنة فوراً.

6. **التوثيق والتوقيع الإلكتروني الذكي (Digital Execution Certificate):**
   - توقيع رقمي للأطراف مع توليد شهادة إثبات وبصمة رقمية SHA-256 ورمز QR رسمي للتحقق الفوري.

7. **التصدير الفاخر (Word & PDF):**
   - تصدير فوري إلى مستندات Microsoft Word (`.docx`) منسقة بترويسة وهوية مكاتب المحاماة، وتصدير PDF عالي الدقة جاهز للطباعة والتوقيع.

8. **تكامل المدفوعات وباقات الاشتراك (PayPal Gateway):**
   - ربط مباشر مع PayPal لحساب وتفعيل باقات الاشتراك وشحن الرصيد آلياً.

---

## 🚀 البدء والتشغيل محلياً (Quick Start)

### المتطلبات الأساسية
- **Node.js** (الإصدار 18 أو أحدث)
- مدير الحزم **npm**

### خطوات التثبيت والتشغيل

1. **استنساخ المستودع (Clone Repository):**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bilingual-legal-contract-generator.git
   cd bilingual-legal-contract-generator
   ```

2. **تثبيت الاعتماديات (Install Dependencies):**
   ```bash
   npm install
   ```

3. **إعداد متغيرات البيئة (Environment Variables):**
   قم بنسخ ملف `.env.example` إلى `.env`:
   ```bash
   cp .env.example .env
   ```
   ثم افتح ملف `.env` وضع مفتاحك الخاص بـ Google Gemini أو بيانات PayPal:
   ```env
   # اختياري: مفتاح الذكاء الاصطناعي من Google AI Studio
   GEMINI_API_KEY=your_gemini_api_key_here

   # اختياري: مفاتيح بوابة PayPal
   VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   PAYPAL_MODE=sandbox
   ```
   > 💡 **ملاحظة:** التطبيق مزود بمحرك صياغة قانونية مدمج (Offline Engine) قادر على توليد ومواءمة كافة العقود الـ 50 كاملة بجميع بنودها حتى في حال عدم إدخال مفتاح API!

4. **تشغيل بيئة التطوير (Development Server):**
   ```bash
   npm run dev
   ```
   افتح المتصفح على: `http://localhost:3000`

5. **البناء للإنتاج (Production Build):**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 هيكلية المشروع (Project Structure)

```plaintext
├── components/                 # واجهات ومكونات التطبيق (React Components)
│   ├── ContractForm.tsx        # نموذج إدخال واختيار وتخصيص العقود
│   ├── ContractDisplay.tsx     # عارض ومحرر العقد والتصدير (Word/PDF/QR)
│   ├── OfficialEncyclopediaView.tsx # مستعرض موسوعة العقود الـ 50
│   ├── SmartClauseBank.tsx     # بنك الشروط والبنود الذكية
│   ├── ElectronicSignatureModal.tsx # نافذة التوقيع والشهادة الرقمية
│   ├── BrandingSettingsModal.tsx    # تخصيص هوية وترويسة مكتب المحاماة
│   ├── ContractsArchive.tsx    # الأرشيف المحلي للعقود المحفوظة
│   ├── PricingModal.tsx        # باقات الاشتراك والأسعار
│   └── PayPalCheckoutModal.tsx # نافذة الدفع عبر PayPal
├── services/                   # الخدمات البرمجية والمحركات القانونية
│   ├── contractBuilder.ts      # محرك بناء وهندسة العقود الشامل
│   ├── officialEncyclopedia*.ts# قوالب موسوعة العقود الرسمية المعتمدة (50 عقداً)
│   ├── geminiService.ts        # معالجة وتوليد العقود بالذكاء الاصطناعي
│   ├── clauseBankData.ts       # بيانات وقواعد بنك الشروط الذكية
│   ├── storageService.ts       # التخزين المحلي وإدارة المستخدم والرصيد
│   └── paypalService.ts        # خدمات التحقق من المدفوعات وتحديد الباقات
├── public/                     # الأيقونات وملفات PWA و Service Worker
├── server.ts                   # خادم Express وواجهات API
├── types.ts                    # التعريفات ونماذج البيانات (TypeScript Interfaces)
├── vite.config.ts              # إعدادات Vite
└── package.json                # التبعيات وأوامر التشغيل
```

---

## 🛡️ الأمان والخصوصية (Security & Privacy)

- ملفات التوثيق والمتغيرات السرية (`.env`) مستبعدة ومحمية عبر `.gitignore`.
- تخزين مسودات وبيانات العقود محلياً على جهاز المستخدم (Client-side / LocalStorage).
- متوافق مع قانون حماية البيانات الشخصية المصري رقم 151 لسنة 2020.

---

## 📜 الترخيص (License)

هذا المشروع مرخص تحت رخصة **MIT**. راجع ملف التراخيص لمزيد من التفاصيل.
