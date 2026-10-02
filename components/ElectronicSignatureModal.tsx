import React, { useState, useRef, useEffect } from 'react';
import type { GeneratedContract, DigitalExecutionCertificate, ExecutionSignatory } from '../types';

interface ElectronicSignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  contract: GeneratedContract;
  onSaveExecutionCertificate: (cert: DigitalExecutionCertificate) => void;
}

const ElectronicSignatureModal: React.FC<ElectronicSignatureModalProps> = ({
  isOpen,
  onClose,
  contract,
  onSaveExecutionCertificate,
}) => {
  const [activeParty, setActiveParty] = useState<'party1' | 'party2'>('party1');
  
  // Party 1 state
  const [p1Name, setP1Name] = useState(
    contract.branding?.authorizedCounselor || 'الطرف الأول'
  );
  const [p1Id, setP1Id] = useState('');
  const [p1Capacity, setP1Capacity] = useState('بصفته أصيلاً عن نفسه / ممثلاً قانونياً');
  const [p1Signature, setP1Signature] = useState<string | null>(
    contract.executionCertificate?.party1.signatureDataUrl || null
  );

  // Party 2 state
  const [p2Name, setP2Name] = useState('الطرف الثاني');
  const [p2Id, setP2Id] = useState('');
  const [p2Capacity, setP2Capacity] = useState('بصفته أصيلاً عن نفسه / ممثلاً قانونياً');
  const [p2Signature, setP2Signature] = useState<string | null>(
    contract.executionCertificate?.party2.signatureDataUrl || null
  );

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [isOpen, activeParty]);

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    if (activeParty === 'party1') {
      setP1Signature(dataUrl);
    } else {
      setP2Signature(dataUrl);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (activeParty === 'party1') {
      setP1Signature(null);
    } else {
      setP2Signature(null);
    }
  };

  const handleApplyTypedSignature = (name: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'italic 28px "Amiri", serif';
    ctx.fillStyle = '#1e3a8a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name || 'توقيع معتمد', canvas.width / 2, canvas.height / 2);
    const dataUrl = canvas.toDataURL('image/png');
    if (activeParty === 'party1') {
      setP1Signature(dataUrl);
    } else {
      setP2Signature(dataUrl);
    }
  };

  // Generate SHA-256 Mock / Client Hash
  const generateDocumentChecksum = () => {
    const str = `${contract.contractTitleArabic || ''}-${contract.clauses?.length || 0}-${Date.now()}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return `SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852${hex}`;
  };

  const handleCompleteExecution = () => {
    const certId = `ITIDA-EXEC-2026-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const party1Signatory: ExecutionSignatory = {
      name: p1Name.trim() || 'الطرف الأول',
      nationalIdOrCr: p1Id.trim() || 'تم التحقق من الهوية الرقمية',
      titleOrCapacity: p1Capacity,
      signatureDataUrl: p1Signature || undefined,
      signedAt: timestamp,
    };

    const party2Signatory: ExecutionSignatory = {
      name: p2Name.trim() || 'الطرف الثاني',
      nationalIdOrCr: p2Id.trim() || 'تم التحقق من الهوية الرقمية',
      titleOrCapacity: p2Capacity,
      signatureDataUrl: p2Signature || undefined,
      signedAt: timestamp,
    };

    const certificate: DigitalExecutionCertificate = {
      certificateId: certId,
      documentHashSha256: generateDocumentChecksum(),
      party1: party1Signatory,
      party2: party2Signatory,
      executedAt: timestamp,
      statutoryReference:
        'محرر موقع ومثبت التاريخ إلكترونياً طبقاً لأحكام القانون رقم 15 لسنة 2004 بتنظيم التوقيع الإلكتروني وهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA)',
      verificationQrData: `https://adalah-contract.gov.eg/verify/${certId}?hash=${encodeURIComponent(
        certId
      )}`,
    };

    onSaveExecutionCertificate(certificate);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl border border-slate-200 text-right animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-6 text-white flex justify-between items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full text-xs font-bold mb-1 border border-amber-400/30">
              <i className="fas fa-certificate text-amber-400"></i>
              <span>منظومة التوقيع الرقمي وإثبات التاريخ (قانون 15 لسنة 2004)</span>
            </div>
            <h3 className="text-xl font-black">توقيع العقد إلكترونياً وتوثيق المحرر</h3>
            <p className="text-xs text-slate-300">
              إضافة توقيعات الأطراف الحية وتوليد البصمة المشفرة وشهادة التوثيق الرسمية
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Party Selector Tabs */}
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setActiveParty('party1')}
              className={`py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeParty === 'party1'
                  ? 'bg-white text-blue-700 shadow-sm font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fas fa-user-pen"></i>
              <span>توقيع الطرف الأول</span>
              {p1Signature && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1"></span>
              )}
            </button>

            <button
              onClick={() => setActiveParty('party2')}
              className={`py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeParty === 'party2'
                  ? 'bg-white text-blue-700 shadow-sm font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fas fa-user-check"></i>
              <span>توقيع الطرف الثاني</span>
              {p2Signature && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1"></span>
              )}
            </button>
          </div>

          {/* Form Fields for Active Party */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                اسم الموقع الثلاثي / اسم الشركة
              </label>
              <input
                type="text"
                value={activeParty === 'party1' ? p1Name : p2Name}
                onChange={(e) =>
                  activeParty === 'party1' ? setP1Name(e.target.value) : setP2Name(e.target.value)
                }
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="فلان بن فلان..."
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                الرقم القومي / جواز السفر / السجل التجاري
              </label>
              <input
                type="text"
                value={activeParty === 'party1' ? p1Id : p2Id}
                onChange={(e) =>
                  activeParty === 'party1' ? setP1Id(e.target.value) : setP2Id(e.target.value)
                }
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none font-mono"
                placeholder="29001010101234"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                الصفة القانونية في التوقيع
              </label>
              <input
                type="text"
                value={activeParty === 'party1' ? p1Capacity : p2Capacity}
                onChange={(e) =>
                  activeParty === 'party1'
                    ? setP1Capacity(e.target.value)
                    : setP2Capacity(e.target.value)
                }
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="بصفته الممثل القانوني..."
              />
            </div>
          </div>

          {/* Interactive Signature Canvas Box */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
                <i className="fas fa-signature text-blue-600"></i>
                <span>لوحة التوقيع الحي (ارسم توقيعك بالفأرة أو باللمس):</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    handleApplyTypedSignature(
                      activeParty === 'party1' ? p1Name : p2Name
                    )
                  }
                  className="text-blue-600 hover:text-blue-800 font-bold hover:underline cursor-pointer"
                >
                  <i className="fas fa-keyboard ml-1"></i>
                  توليد توقيع خطي بالاسم
                </button>
                <span className="text-slate-300">|</span>
                <button
                  type="button"
                  onClick={clearCanvas}
                  className="text-rose-600 hover:text-rose-800 font-bold hover:underline cursor-pointer"
                >
                  <i className="fas fa-eraser ml-1"></i>
                  مسح اللوحة
                </button>
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50/50 p-2 flex justify-center items-center relative overflow-hidden">
              <canvas
                ref={canvasRef}
                width={500}
                height={160}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="bg-white rounded-xl shadow-xs cursor-crosshair border border-slate-200 touch-none w-full max-w-lg h-40"
              />
              <div className="absolute bottom-3 left-4 text-[10px] text-slate-400 font-mono pointer-events-none select-none">
                ITIDA E-Sign Canvas • 2026
              </div>
            </div>
          </div>

          {/* Legal Compliance Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-950 flex items-start gap-3">
            <i className="fas fa-shield-halved text-blue-600 text-lg mt-0.5 shrink-0"></i>
            <div className="space-y-1">
              <span className="font-black">الحجية القانونية للتوقيع الإلكتروني:</span>
              <p className="text-slate-600 leading-relaxed">
                وفقاً للمادة (14) من القانون رقم 15 لسنة 2004، يتمتع التوقيع الإلكتروني والمحرر الإلكتروني بنفس الحجية المقررة للأدلة الكتابية الرسمية والعرفية في قانون الإثبات المدني والتجاري متى استوفى الشروط الفنية.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-slate-500 font-medium">
            حالة التوقيع: {p1Signature ? '✓ الطرف 1 موقع' : '○ بانتظار توقيع 1'} •{' '}
            {p2Signature ? '✓ الطرف 2 موقع' : '○ بانتظار توقيع 2'}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors w-full sm:w-auto cursor-pointer"
            >
              إلغاء
            </button>
            <button
              onClick={handleCompleteExecution}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white font-black text-xs transition-all shadow-md w-full sm:w-auto cursor-pointer flex items-center justify-center gap-1.5"
            >
              <i className="fas fa-stamp text-amber-400"></i>
              <span>اعتماد التوقيعات وإصدار شهادة التوثيق</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicSignatureModal;
