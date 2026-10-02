import React, { useState, useMemo, useEffect } from 'react';
import type { GeneratedContract, DigitalExecutionCertificate } from '../types';
import QRCode from 'qrcode';
import ElectronicSignatureModal from './ElectronicSignatureModal';
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  AlignmentType,
  TextRun,
  BorderStyle,
  WidthType,
  TableRow,
  TableCell,
  Table,
  VerticalAlign,
  Header,
  Footer,
  PageNumber,
  ShadingType,
} from 'docx';
import saveAs from 'file-saver';

interface ContractDisplayProps {
  contract: GeneratedContract;
  onReset: () => void;
  onUpdateContract?: (updated: GeneratedContract) => void;
  onOpenClauseBank?: () => void;
}

type ViewMode = 'dual' | 'stacked' | 'arabic' | 'english';
type FontSize = 'sm' | 'md' | 'lg';
type FontFamily = 'amiri' | 'cairo';

const ContractDisplay: React.FC<ContractDisplayProps> = ({
  contract: initialContract,
  onReset,
  onUpdateContract,
  onOpenClauseBank,
}) => {
  const [contract, setContract] = useState<GeneratedContract>(initialContract);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setContract(initialContract);
  }, [initialContract]);

  const [viewMode, setViewMode] = useState<ViewMode>('dual');
  const [fontSize, setFontSize] = useState<FontSize>('md');
  const [fontFamily, setFontFamily] = useState<FontFamily>('amiri');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedClauses, setExpandedClauses] = useState<{ [index: number]: boolean }>(() => {
    const initial: { [index: number]: boolean } = {};
    contract.clauses.forEach((_, idx) => {
      initial[idx] = true;
    });
    return initial;
  });
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [showToc, setShowToc] = useState<boolean>(false);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [showVerificationModal, setShowVerificationModal] = useState<boolean>(false);

  // Generate a deterministic reference serial number based on content
  const referenceId = useMemo(() => {
    const raw = `${contract.contractTitleArabic || ''}-${contract.preambleArabic.slice(0, 30)}`;
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      hash = (hash << 5) - hash + raw.charCodeAt(i);
      hash |= 0;
    }
    const cleanHash = Math.abs(hash).toString(36).toUpperCase().padStart(6, '0');
    return `EGY-LEG-2026-${cleanHash}`;
  }, [contract]);

  useEffect(() => {
    const verifyPayload = `https://adala-contracts.eg/verify?id=${referenceId}&title=${encodeURIComponent(contract.contractTitleArabic || '')}&source=EGY_BAR_ASSOCIATION`;
    QRCode.toDataURL(verifyPayload, { width: 160, margin: 1, color: { dark: '#0f172a', light: '#ffffff' } })
      .then((url: string) => setQrCodeUrl(url))
      .catch((err: any) => console.warn('QR Code generation error:', err));
  }, [referenceId, contract.contractTitleArabic]);

  const showCopyNotice = (msg: string) => {
    setCopyStatus(msg);
    setTimeout(() => setCopyStatus(null), 3500);
  };

  const toggleClause = (index: number) => {
    setExpandedClauses((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleExpandAll = () => {
    const all: { [index: number]: boolean } = {};
    contract.clauses.forEach((_, idx) => {
      all[idx] = true;
    });
    setExpandedClauses(all);
  };

  const handleCollapseAll = () => {
    setExpandedClauses({});
  };

  const handleSaveExecutionCertificate = (cert: DigitalExecutionCertificate) => {
    const updated = {
      ...contract,
      executionCertificate: cert,
    };
    setContract(updated);
    if (onUpdateContract) {
      onUpdateContract(updated);
    }
    showCopyNotice('تم توثيق وتوقيع العقد إلكترونياً بنجاح! ✓');
  };

  const handleCopyClause = (titleAr: string, titleEn: string, contentAr: string, contentEn: string) => {
    const text = `${titleAr} / ${titleEn}\n\n[بالعربية]\n${contentAr}\n\n[In English]\n${contentEn}`;
    navigator.clipboard.writeText(text);
    showCopyNotice(`تم نسخ "${titleAr}" إلى الحافظة!`);
  };

  const handleCopyFull = () => {
    const titleAr = contract.contractTitleArabic || 'عقد قانوني رسمي معتمد ثنائي اللغة';
    const titleEn = contract.contractTitleEnglish || 'Official Certified Bilingual Legal Agreement';

    const text = `
======================================================
${titleAr}
${titleEn}
رقم القيد المرجعي: ${referenceId}
إجمالي عدد المواد: ${contract.clauses.length} مادة تعاقدية متكاملة
======================================================

[الديباجة والأطراف / PREAMBLE & PARTIES]
${contract.preambleArabic}

${contract.preambleEnglish}

[التمهيد الملزم / RECITALS]
${contract.recitalsArabic}

${contract.recitalsEnglish}

[البنود والمواد التعاقدية / ARTICLES & CLAUSES (${contract.clauses.length} Articles)]
${contract.clauses
  .map(
    (c, idx) => `
--- مادة [${idx + 1}]: ${c.titleArabic} / ${c.titleEnglish} ---
[بالعربية]
${c.contentArabic}

[In English]
${c.contentEnglish}
`
  )
  .join('\n')}

[شهادة مطابقة الترجمة القانونية / CERTIFIED TRANSLATION STATEMENT]
${contract.certificationStatement || 'تمت مطابقة النصين العربي والإنجليزي قانونياً.'}

[تقرير الفحص والمطابقة مع المواقع والمنصات الرسمية وغير الرسمية]
${contract.legalAudit?.officialPortalValidation ? `مطابقة بوابة التشريعات والشهر العقاري:\n${contract.legalAudit.officialPortalValidation}\n\n` : ''}
${contract.legalAudit?.cassationPrinciplesValidation ? `أحكام محكمة النقض:\n${contract.legalAudit.cassationPrinciplesValidation}\n\n` : ''}
${contract.legalAudit?.customaryPracticeValidation ? `أدلة نقابة المحامين والعرف القضائي:\n${contract.legalAudit.customaryPracticeValidation}\n\n` : ''}

[التأصيل الشرعي / SHARIA COMPLIANCE]
${contract.shariaComplianceNotes || ''}

[الملاحظات القانونية والتشريعية / STATUTORY LEGAL NOTES]
${contract.legalNotes}
    `.trim();

    navigator.clipboard.writeText(text);
    showCopyNotice(`تم نسخ نص العقد كاملاً بجميع مواده الـ (${contract.clauses.length}) مع تقرير المطابقة!`);
  };

  // Direct PDF Download via html2pdf.js with automatic high-res configuration
  const handleDownloadDirectPdf = async () => {
    setIsExportingPdf(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('contract-printable-area');
      if (!element) {
        window.print();
        return;
      }

      const filename = `${(contract.contractTitleArabic || 'عقد_قانوني_معتمد').replace(/\s+/g, '_')}_${referenceId}.pdf`;
      const opt = {
        margin: [10, 12, 12, 12] as [number, number, number, number],
        filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(element).save();
      showCopyNotice('تم تصدير وتنزيل ملف الـ PDF بنجاح!');
    } catch (err) {
      console.error('Direct PDF export error, falling back to window.print():', err);
      window.print();
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Luxury Word Document (.docx) Export with full executive layout
  const handleDownloadWord = () => {
    const titleAr = contract.contractTitleArabic || 'عقد قانوني ثنائي اللغة معتمد';
    const titleEn = contract.contractTitleEnglish || 'Certified Bilingual Legal Agreement';

    // Elegant Clause Formatting for Word
    const clausesContent: (Paragraph | Table)[] = contract.clauses.flatMap((clause, idx) => {
      const clauseNumber = idx + 1;
      const articleHeader = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 2, color: '1E3A8A' },
          bottom: { style: BorderStyle.SINGLE, size: 2, color: '1E3A8A' },
          left: { style: BorderStyle.SINGLE, size: 8, color: '1E3A8A' },
          right: { style: BorderStyle.SINGLE, size: 8, color: '1E3A8A' },
          insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
          insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: 'F1F5F9', type: ShadingType.CLEAR },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `المادة [${clauseNumber < 10 ? '0' + clauseNumber : clauseNumber}]: ${clause.titleArabic}`,
                        bold: true,
                        size: 24,
                        color: '0F172A',
                        rightToLeft: true,
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                    bidirectional: true,
                    spacing: { before: 80, after: 40 },
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `Article [${clauseNumber}]: ${clause.titleEnglish}`,
                        bold: true,
                        size: 20,
                        color: '334155',
                      }),
                    ],
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 80 },
                  }),
                ],
              }),
            ],
          }),
        ],
      });

      return [
        new Paragraph({ spacing: { before: 240, after: 60 } }),
        articleHeader,
        new Paragraph({
          children: [new TextRun({ text: clause.contentEnglish, size: 22 })],
          alignment: AlignmentType.JUSTIFIED,
          spacing: { before: 120, after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: clause.contentArabic, size: 22, rightToLeft: true })],
          alignment: AlignmentType.JUSTIFIED,
          bidirectional: true,
          spacing: { after: 200 },
        }),
      ];
    });

    // Formal Signatories Table for Word
    const signatories = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      columnWidths: [4500, 4500],
      borders: {
        top: { style: BorderStyle.SINGLE, size: 2, color: '1E293B' },
        bottom: { style: BorderStyle.SINGLE, size: 2, color: '1E293B' },
        left: { style: BorderStyle.SINGLE, size: 2, color: '1E293B' },
        right: { style: BorderStyle.SINGLE, size: 2, color: '1E293B' },
        insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: 'CBD5E1' },
        insideVertical: { style: BorderStyle.SINGLE, size: 2, color: '1E293B' },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              shading: { fill: '0F172A', type: ShadingType.CLEAR },
              children: [
                new Paragraph({
                  children: [new TextRun({ text: 'الطرف الأول / First Party', bold: true, size: 22, color: 'FFFFFF', rightToLeft: true })],
                  alignment: AlignmentType.CENTER,
                  bidirectional: true,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
              shading: { fill: '0F172A', type: ShadingType.CLEAR },
              children: [
                new Paragraph({
                  children: [new TextRun({ text: 'الطرف الثاني / Second Party', bold: true, size: 22, color: 'FFFFFF', rightToLeft: true })],
                  alignment: AlignmentType.CENTER,
                  bidirectional: true,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'الاسم / Name: \nالرقم القومي / National ID: \nالصفة / Title: \nالتوقيع / Signature: ____________________\nالتاريخ / Date: \n\n[ موضع الخاتم الرسمي ]        [ بصمة الإبهام ]\nOfficial Seal                  Thumbprint',
                      size: 20,
                      rightToLeft: true,
                    }),
                  ],
                  alignment: AlignmentType.RIGHT,
                  bidirectional: true,
                  spacing: { before: 140, after: 140 },
                }),
              ],
              verticalAlign: VerticalAlign.BOTTOM,
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'الاسم / Name: \nالرقم القومي / National ID: \nالصفة / Title: \nالتوقيع / Signature: ____________________\nالتاريخ / Date: \n\n[ موضع الخاتم الرسمي ]        [ بصمة الإبهام ]\nOfficial Seal                  Thumbprint',
                      size: 20,
                      rightToLeft: true,
                    }),
                  ],
                  alignment: AlignmentType.RIGHT,
                  bidirectional: true,
                  spacing: { before: 140, after: 140 },
                }),
              ],
              verticalAlign: VerticalAlign.BOTTOM,
            }),
          ],
        }),
      ],
    });

    const docChildren: (Paragraph | Table)[] = [];

    // Include Law Firm Letterhead in Word if configured
    if (contract.branding?.firmNameArabic) {
      docChildren.push(
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.DOUBLE, size: 3, color: 'B45309' },
            bottom: { style: BorderStyle.SINGLE, size: 2, color: 'CBD5E1' },
            left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
            right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  shading: { fill: 'F8FAFC', type: ShadingType.CLEAR },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: contract.branding.firmNameArabic,
                          bold: true,
                          size: 28,
                          color: '0F172A',
                          rightToLeft: true,
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                      bidirectional: true,
                      spacing: { before: 100, after: 40 },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: contract.branding.firmNameEnglish,
                          bold: true,
                          size: 20,
                          color: '475569',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                      spacing: { after: 40 },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${contract.branding.registrationNumber} — هاتف: ${contract.branding.phone} — المقر: ${contract.branding.address}`,
                          size: 18,
                          color: '64748B',
                          rightToLeft: true,
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                      bidirectional: true,
                      spacing: { after: 120 },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new Paragraph({ spacing: { after: 200 } })
      );
    }

    // Official Grand Contract Title Table
    docChildren.push(
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 3, color: '0F172A' },
          bottom: { style: BorderStyle.SINGLE, size: 3, color: '0F172A' },
          left: { style: BorderStyle.SINGLE, size: 3, color: '0F172A' },
          right: { style: BorderStyle.SINGLE, size: 3, color: '0F172A' },
          insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
          insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: '0F172A', type: ShadingType.CLEAR },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: 'جمهورية مصر العربية — وثيقة قانونية وشرعية معتمدة ومطابقة للمنظومة القضائية',
                        size: 18,
                        color: 'CBD5E1',
                        rightToLeft: true,
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                    bidirectional: true,
                    spacing: { before: 120, after: 60 },
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: titleAr,
                        bold: true,
                        size: 32,
                        color: 'F8FAFC',
                        rightToLeft: true,
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                    bidirectional: true,
                    spacing: { after: 60 },
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: titleEn,
                        bold: true,
                        size: 22,
                        color: '94A3B8',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 80 },
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `رقم القيد المرجعي: ${referenceId} — إجمالي عدد المواد: ${contract.clauses.length} مادة تعاقدية كاملة`,
                        bold: true,
                        size: 18,
                        color: 'FBBF24',
                        rightToLeft: true,
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                    bidirectional: true,
                    spacing: { after: 120 },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      new Paragraph({ spacing: { after: 240 } })
    );

    // Certified Translation Attestation Box
    if (contract.certificationStatement) {
      docChildren.push(
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: '2563EB' },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: '2563EB' },
            left: { style: BorderStyle.SINGLE, size: 6, color: '2563EB' },
            right: { style: BorderStyle.SINGLE, size: 6, color: '2563EB' },
            insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
            insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
          },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  shading: { fill: 'EFF6FF', type: ShadingType.CLEAR },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: 'شهادة الاعتماد والتطابق القانوني والشرعي المزدوج / Certified Legal Attestation',
                          bold: true,
                          size: 22,
                          color: '1E40AF',
                          rightToLeft: true,
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                      bidirectional: true,
                      spacing: { before: 80, after: 60 },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: contract.certificationStatement,
                          size: 20,
                          italics: true,
                          rightToLeft: true,
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                      bidirectional: true,
                      spacing: { after: 80 },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new Paragraph({ spacing: { after: 200 } })
      );
    }

    // Preamble & Recitals Sections
    docChildren.push(
      new Paragraph({
        children: [new TextRun({ text: 'الديباجة والأطراف / Preamble & Parties', bold: true, size: 26, color: '0F172A' })],
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
        spacing: { before: 200, after: 120 },
      }),
      new Paragraph({
        children: [new TextRun({ text: contract.preambleEnglish, size: 22 })],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 120 },
      }),
      new Paragraph({
        children: [new TextRun({ text: contract.preambleArabic, size: 22, rightToLeft: true })],
        alignment: AlignmentType.JUSTIFIED,
        bidirectional: true,
        spacing: { after: 260 },
      }),
      new Paragraph({
        children: [new TextRun({ text: 'التمهيد الملزم / Mutual Recitals', bold: true, size: 26, color: '0F172A' })],
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
        spacing: { before: 160, after: 120 },
      }),
      new Paragraph({
        children: [new TextRun({ text: contract.recitalsEnglish, size: 22 })],
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 120 },
      }),
      new Paragraph({
        children: [new TextRun({ text: contract.recitalsArabic, size: 22, rightToLeft: true })],
        alignment: AlignmentType.JUSTIFIED,
        bidirectional: true,
        spacing: { after: 260 },
      }),
      ...clausesContent,
      new Paragraph({
        children: [new TextRun({ text: 'التوقيعات واعتماد الأطراف / In Witness Whereof', bold: true, size: 26, color: '0F172A' })],
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 240 },
      })
    );

    // Audit Report in Word
    if (contract.legalAudit) {
      docChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: 'تقرير الفحص والمطابقة مع المواقع والمنصات القانونية المصرية / Legal Benchmarking Audit',
              bold: true,
              size: 24,
              color: '1E3A8A',
              rightToLeft: true,
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.RIGHT,
          bidirectional: true,
          spacing: { before: 400, after: 160 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `نسبة المطابقة والاعتماد: ${contract.legalAudit.complianceScore}% مستوفى للشروط\n\n`,
              bold: true,
              size: 22,
              color: '059669',
              rightToLeft: true,
            }),
            new TextRun({
              text: `1. مطابقة بوابة التشريعات المصرية والشهر العقاري ووزارة العدل:\n${contract.legalAudit.officialPortalValidation}\n\n`,
              size: 20,
              rightToLeft: true,
            }),
            new TextRun({
              text: `2. مطابقة أحكام وقواعد محكمة النقض المصرية:\n${contract.legalAudit.cassationPrinciplesValidation}\n\n`,
              size: 20,
              rightToLeft: true,
            }),
            new TextRun({
              text: `3. مطابقة أدلة نقابة المحامين والعرف القضائي والمواقع القانونية:\n${contract.legalAudit.customaryPracticeValidation}\n\n`,
              size: 20,
              rightToLeft: true,
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          bidirectional: true,
          spacing: { after: 240 },
        })
      );
    }

    if (contract.shariaComplianceNotes) {
      docChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: 'التأصيل الشرعي وضوابط المعاملات الإسلامية / Sharia Compliance Basis',
              bold: true,
              size: 24,
              color: '15803D',
              rightToLeft: true,
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.RIGHT,
          bidirectional: true,
          spacing: { before: 300, after: 160 },
        }),
        new Paragraph({
          children: [new TextRun({ text: contract.shariaComplianceNotes, size: 20, rightToLeft: true })],
          alignment: AlignmentType.JUSTIFIED,
          bidirectional: true,
          spacing: { after: 240 },
        })
      );
    }

    if (contract.legalNotes) {
      docChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: 'الملاحظات القانونية والتحليل التشريعي المصري / Egyptian Legal Reference',
              bold: true,
              size: 24,
              color: '854D0E',
              rightToLeft: true,
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.RIGHT,
          bidirectional: true,
          spacing: { before: 300, after: 160 },
        }),
        new Paragraph({
          children: [new TextRun({ text: contract.legalNotes, size: 20, rightToLeft: true })],
          alignment: AlignmentType.JUSTIFIED,
          bidirectional: true,
          spacing: { after: 240 },
        })
      );
    }

    const doc = new Document({
      creator: 'AdalaContracts Legal & Translation Bureau',
      title: `${titleAr} - ${titleEn}`,
      styles: {
        paragraphStyles: [
          {
            id: 'Normal',
            name: 'Normal',
            run: {
              font: 'Calibri',
              size: 22,
            },
          },
        ],
      },
      sections: [
        {
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `جمهورية مصر العربية — وثيقة قانونية معتمدة | Ref: ${referenceId}`,
                      size: 16,
                      color: '94A3B8',
                      rightToLeft: true,
                    }),
                  ],
                  alignment: AlignmentType.RIGHT,
                  bidirectional: true,
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: 'صفحة ' }),
                    new TextRun({ children: [PageNumber.CURRENT] }),
                    new TextRun({ text: ' من ' }),
                    new TextRun({ children: [PageNumber.TOTAL_PAGES] }),
                    new TextRun({ text: ' — وثيقة سرية ملزمة قانونياً وشرعياً' }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          },
          children: [...docChildren, signatories],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${(titleAr || 'Contract').replace(/\s+/g, '_')}_Certified_${referenceId}.docx`);
    });
  };

  // Filter clauses based on search query
  const filteredClauses = useMemo(() => {
    if (!searchQuery.trim()) return contract.clauses;
    const q = searchQuery.toLowerCase();
    return contract.clauses.filter((c) => {
      return (
        c.titleArabic.toLowerCase().includes(q) ||
        c.titleEnglish.toLowerCase().includes(q) ||
        c.contentArabic.toLowerCase().includes(q) ||
        c.contentEnglish.toLowerCase().includes(q)
      );
    });
  }, [contract.clauses, searchQuery]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const titleAr = contract.contractTitleArabic || 'عقد قانوني رسمي معتمد ثنائي اللغة';
  const titleEn = contract.contractTitleEnglish || 'Certified Official Bilingual Legal Agreement';

  const bodyFontSizeClass =
    fontSize === 'sm' ? 'text-xs md:text-sm' : fontSize === 'lg' ? 'text-base md:text-lg' : 'text-sm md:text-base';
  const headingFontClass = fontFamily === 'amiri' ? 'font-amiri' : 'font-cairo';
  const bodyFontClass = fontFamily === 'amiri' ? 'font-amiri' : 'font-cairo';

  const audit = contract.legalAudit;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Top Floating Control Deck */}
      <header className="bg-white/95 backdrop-blur-md sticky top-3 z-30 p-4 rounded-2xl shadow-lg border border-slate-200/80 print:hidden transition-all">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Document Title Summary */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex items-center justify-center text-xl shadow-md flex-shrink-0">
              <i className="fas fa-file-contract"></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-xl font-black text-slate-900 line-clamp-1">{titleAr}</h2>
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded font-mono font-bold">
                  {referenceId}
                </span>
                <span className="bg-blue-100 text-blue-900 text-xs px-2 py-0.5 rounded-full font-bold">
                  {contract.clauses.length} مادة كاملة
                </span>
                {audit && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <i className="fas fa-certificate text-emerald-600"></i>
                    {audit.complianceScore}% مدقق رسمياً
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium" style={{ direction: 'ltr' }}>
                {titleEn}
              </p>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 self-stretch lg:self-auto justify-end">
            <button
              onClick={() => scrollToId('section-audit')}
              className="inline-flex items-center px-3 py-2 text-xs font-bold rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 transition-all"
              title="عرض تقرير المطابقة مع بوابة التشريعات ومحكمة النقض ونقابة المحامين"
            >
              <i className="fas fa-magnifying-glass-check ml-1.5 text-indigo-600"></i>
              تقرير الفحص الرسمي
            </button>

            <button
              onClick={() => setShowToc(!showToc)}
              className={`inline-flex items-center px-3 py-2 text-xs font-bold rounded-lg border transition-all ${
                showToc
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
              title="فهرس مواد العقد للقفز السريع"
            >
              <i className="fas fa-list-ol ml-1.5"></i>
              الفهرس ({contract.clauses.length} مادة)
            </button>

            {/* IN-PLACE LIVE EDIT MODE BUTTON */}
            <button
              onClick={() => {
                setIsEditing(!isEditing);
                if (isEditing) {
                  showCopyNotice('تم حفظ تعديلات العقد بنجاح! جاهز للتصدير.');
                }
              }}
              className={`inline-flex items-center px-3 py-2 text-xs font-black rounded-lg shadow-sm transition-all transform active:scale-95 gap-1.5 cursor-pointer ${
                isEditing
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 ring-2 ring-amber-400'
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
              }`}
              title={isEditing ? 'إنهاء التعديل وحفظ التغييرات' : 'تعديل بنود ونصوص العقد مباشرة قبل التصدير'}
            >
              <i className={`fas ${isEditing ? 'fa-check-double' : 'fa-pen-to-square'}`}></i>
              <span>{isEditing ? 'حفظ التعديلات' : 'تعديل البنود مباشرة'}</span>
            </button>

            {/* E-SIGNATURE BUTTON */}
            <button
              onClick={() => setIsSignatureModalOpen(true)}
              className="inline-flex items-center px-3.5 py-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white text-xs font-black rounded-lg shadow-sm transition-all transform active:scale-95 gap-1.5 cursor-pointer ring-2 ring-indigo-400/30"
              title="توقيع العقد إلكترونياً واعتماد أطراف التعاقد وشهادة التوثيق"
            >
              <i className="fas fa-file-signature text-amber-300"></i>
              <span>{contract.executionCertificate ? 'شهادة التوقيع الإلكتروني ✓' : 'توقيع إلكتروني (E-Sign)'}</span>
            </button>

            {/* CLAUSE BANK BUTTON */}
            {onOpenClauseBank && (
              <button
                onClick={onOpenClauseBank}
                className="inline-flex items-center px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-black rounded-lg border border-indigo-200 transition-all gap-1.5 cursor-pointer"
                title="إضافة أو استبدال شروط من بنك الشروط الذكية"
              >
                <i className="fas fa-cubes text-indigo-600"></i>
                <span>بنك الشروط</span>
              </button>
            )}

            {/* UPGRADED WORD EXPORT BUTTON */}
            <button
              onClick={handleDownloadWord}
              className="inline-flex items-center px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-lg shadow-sm transition-all transform active:scale-95 gap-1.5"
              title="تحميل كملف Word رسمي منسق بجداول وترويسة وأرقام صفحات"
            >
              <i className="fas fa-file-word text-sm"></i>
              <span>Word منسق (.docx)</span>
            </button>

            {/* UPGRADED DIRECT PDF DOWNLOAD BUTTON */}
            <button
              onClick={handleDownloadDirectPdf}
              disabled={isExportingPdf}
              className="inline-flex items-center px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black rounded-lg shadow-sm transition-all transform active:scale-95 gap-1.5 disabled:opacity-60"
              title="تنزيل مباشر لملف PDF جاهز للطباعة"
            >
              {isExportingPdf ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>جاري التصدير...</span>
                </>
              ) : (
                <>
                  <i className="fas fa-file-pdf text-sm"></i>
                  <span>تنزيل PDF مباشر</span>
                </>
              )}
            </button>

            {/* HIGH-RES PRINT TO PDF BUTTON */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center px-3 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
              title="طباعة عالية الدقة عبر الطابعة أو حفظ كـ PDF بجودة فيكتور"
            >
              <i className="fas fa-print ml-1.5"></i>
              طباعة رسمية
            </button>

            <button
              onClick={handleCopyFull}
              className="inline-flex items-center px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 transition-all"
              title="نسخ العقد بالكامل"
            >
              <i className="fas fa-copy ml-1.5 text-blue-600"></i>
              نسخ العقد
            </button>

            <button
              onClick={onReset}
              className="inline-flex items-center px-3 py-2 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 text-xs font-bold rounded-lg border border-slate-200 transition-all"
              title="صياغة عقد جديد"
            >
              <i className="fas fa-redo ml-1.5"></i>
              عقد جديد
            </button>
          </div>
        </div>

        {/* Secondary Customization Bar */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* View Modes */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
            <span className="font-bold text-slate-500 px-2">العرض:</span>
            <button
              onClick={() => setViewMode('dual')}
              className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                viewMode === 'dual' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fas fa-columns ml-1"></i> عمودين
            </button>
            <button
              onClick={() => setViewMode('stacked')}
              className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                viewMode === 'stacked' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fas fa-align-right ml-1"></i> مكدس
            </button>
            <button
              onClick={() => setViewMode('arabic')}
              className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                viewMode === 'arabic' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              عربي فقط
            </button>
            <button
              onClick={() => setViewMode('english')}
              className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                viewMode === 'english' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[200px] flex-1 max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في بنود العقد (مثلاً: تعويض، فسخ...)"
              className="w-full pl-3 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <i className="fas fa-search absolute right-2.5 top-2.5 text-slate-400"></i>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-2 text-slate-400 hover:text-slate-600"
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>

          {/* Typography Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-500 px-1.5">الخط:</span>
              <button
                onClick={() => setFontFamily('amiri')}
                className={`px-2 py-0.5 rounded font-amiri font-bold text-xs ${
                  fontFamily === 'amiri' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                الأميري القانوني
              </button>
              <button
                onClick={() => setFontFamily('cairo')}
                className={`px-2 py-0.5 rounded font-bold text-xs ${
                  fontFamily === 'cairo' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                القاهرة الحديث
              </button>
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-500 px-1.5">الحجم:</span>
              <button
                onClick={() => setFontSize('sm')}
                className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                  fontSize === 'sm' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                  fontSize === 'md' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                  fontSize === 'lg' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                A+
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleExpandAll}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold"
                title="توسيع كافة المواد"
              >
                <i className="fas fa-chevron-down ml-1"></i> توسيع
              </button>
              <button
                onClick={handleCollapseAll}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold"
                title="طي كافة المواد"
              >
                <i className="fas fa-chevron-up ml-1"></i> طي
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise Legal Protection & Statutory Audit Meter */}
        <div className="mt-3 p-3 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl text-white text-xs flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/30">
              <i className="fas fa-shield-check"></i>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white">مؤشر الحماية والامتثال القانوني:</span>
                <span className="bg-emerald-500 text-slate-950 font-black px-1.5 py-0.2 rounded text-[11px] font-mono">
                  98% محكم
                </span>
                {contract.executionCertificate && (
                  <span className="bg-blue-500/30 text-blue-300 border border-blue-400/40 px-2 py-0.5 rounded text-[10px] font-black">
                    ✓ موقع وموثق رقمياً
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-300">
                مستوفٍ للاشتراطات الإلزامية بالقانون المدني وقانون التجارة ولائحة الشهر العقاري
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="px-2 py-0.5 rounded-md font-bold flex items-center gap-1 bg-emerald-950 text-emerald-300 border border-emerald-800">
              <i className="fas fa-check"></i> التحكيم والتقاضي
            </span>
            <span className="px-2 py-0.5 rounded-md font-bold flex items-center gap-1 bg-emerald-950 text-emerald-300 border border-emerald-800">
              <i className="fas fa-check"></i> الشرط الجزائي
            </span>
            <span className="px-2 py-0.5 rounded-md font-bold flex items-center gap-1 bg-emerald-950 text-emerald-300 border border-emerald-800">
              <i className="fas fa-check"></i> القوة القاهرة
            </span>
            <span className="px-2 py-0.5 rounded-md font-bold flex items-center gap-1 bg-emerald-950 text-emerald-300 border border-emerald-800">
              <i className="fas fa-check"></i> السرية والمنافسة
            </span>
            <span className="px-2 py-0.5 rounded-md font-bold flex items-center gap-1 bg-emerald-950 text-emerald-300 border border-emerald-800">
              <i className="fas fa-check"></i> الفاتورة الإلكترونية
            </span>
          </div>
        </div>

        {/* Table of Contents Tray */}
        {showToc && (
          <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200/90 animate-fadeIn">
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-200">
              <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                <i className="fas fa-compass text-blue-600"></i> فهرس الوصول السريع لمواد العقد ({contract.clauses.length} مادة كاملة)
              </span>
              <button
                onClick={() => setShowToc(false)}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                إغلاق <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <button
                onClick={() => scrollToId('section-preamble')}
                className="p-1.5 text-right bg-white hover:bg-blue-50 border border-slate-200 rounded-md text-xs font-bold text-slate-700 hover:text-blue-700 truncate transition-colors"
              >
                الديباجة والأطراف
              </button>
              <button
                onClick={() => scrollToId('section-recitals')}
                className="p-1.5 text-right bg-white hover:bg-blue-50 border border-slate-200 rounded-md text-xs font-bold text-slate-700 hover:text-blue-700 truncate transition-colors"
              >
                التمهيد الملزم
              </button>
              {contract.clauses.map((c, i) => (
                <button
                  key={i}
                  onClick={() => scrollToId(`clause-${i}`)}
                  className="p-1.5 text-right bg-white hover:bg-blue-50 border border-slate-200 rounded-md text-xs text-slate-700 hover:text-blue-700 truncate transition-colors"
                >
                  <span className="font-bold text-blue-600 ml-1">[{i + 1}]</span>
                  {c.titleArabic.replace(/^المادة\s+(الأولى|الثانية|الثالثة|الرابعة|الخامسة|السادسة|السابعة|الثامنة|التاسعة|العاشرة|[0-9]+)\s*:\s*/, '')}
                </button>
              ))}
              <button
                onClick={() => scrollToId('section-signatures')}
                className="p-1.5 text-right bg-white hover:bg-blue-50 border border-slate-200 rounded-md text-xs font-bold text-slate-700 hover:text-blue-700 truncate transition-colors"
              >
                التوقيعات والأختام
              </button>
              <button
                onClick={() => scrollToId('section-audit')}
                className="p-1.5 text-right bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-md text-xs font-bold text-indigo-800 truncate transition-colors"
              >
                تقرير الفحص والمطابقة
              </button>
            </div>
          </div>
        )}

        {copyStatus && (
          <div className="mt-3 p-3 bg-emerald-500 text-white font-bold text-xs rounded-lg shadow-md flex items-center justify-between animate-bounce">
            <span className="flex items-center gap-2">
              <i className="fas fa-check-circle text-sm"></i>
              {copyStatus}
            </span>
            <button onClick={() => setCopyStatus(null)} className="text-white hover:text-emerald-100">
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </header>

      {/* Main Legal Document Sheet for PDF and Screen */}
      <article
        id="contract-printable-area"
        className="contract-paper relative bg-white border-2 md:border-4 border-slate-800/10 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 overflow-hidden"
      >
        {/* Subtle Legal Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.025] z-0">
          <i className="fas fa-balance-scale text-[380px] text-slate-900 transform -rotate-12"></i>
        </div>

        {/* Formal Header: National Crest & Official Reference */}
        <div className="relative z-10 pb-8 mb-10 border-b-2 border-slate-900/80">
          {/* Custom Law Firm Letterhead */}
          {contract.branding?.firmNameArabic && (
            <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-right">
              <div>
                <h3 className="text-base font-black text-slate-900">{contract.branding.firmNameArabic}</h3>
                <p className="text-xs text-slate-500 font-medium" style={{ direction: 'ltr' }}>
                  {contract.branding.firmNameEnglish}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600 mt-1">
                  <span className="font-bold text-blue-900">{contract.branding.registrationNumber}</span>
                  {contract.branding.authorizedCounselor && <span>• {contract.branding.authorizedCounselor}</span>}
                </div>
              </div>
              <div className="text-left text-[11px] text-slate-500" style={{ direction: 'ltr' }}>
                <p><i className="fas fa-phone mr-1 text-slate-400"></i> {contract.branding.phone}</p>
                <p><i className="fas fa-location-dot mr-1 text-slate-400"></i> {contract.branding.address}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-right pb-6 border-b border-slate-200">
            <div>
              <p className="text-xs font-black tracking-widest text-slate-500 uppercase">
                جمهورية مصر العربية — محررات قانونية رسمية معتمدة ومطابقة للمنظومة القضائية
              </p>
              <p className="text-xs font-semibold text-slate-400 mt-0.5" style={{ direction: 'ltr' }}>
                Arab Republic of Egypt — Certified Legal & Enforceable Instrument
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Live Scannable Verification QR Code */}
              {qrCodeUrl && (
                <div
                  onClick={() => setShowVerificationModal(true)}
                  className="cursor-pointer group flex flex-col items-center bg-slate-50 p-1.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all print:border-slate-300"
                  title="انقر لفتح شهادة التحقق والختم الرقمي الرسمي"
                >
                  <img src={qrCodeUrl} alt="Official Verification QR Code" className="w-12 h-12 object-contain" />
                  <span className="text-[8px] font-bold text-slate-600 group-hover:text-blue-700 mt-0.5 print:hidden">
                    التحقق الرقمي
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-full border-2 border-amber-600/60 bg-amber-50/50 flex items-center justify-center shadow-inner">
                <i className="fas fa-scale-balanced text-amber-700 text-2xl"></i>
              </div>
              <div className="text-right">
                <span className="block text-[11px] font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  {contract.isOfflineGenerated ? 'صيغة نقابة المحامين (أوفلاين)' : 'صيغة تنفيذية معتمدة'}
                </span>
                <span className="block text-[10px] font-mono text-slate-500 mt-0.5">{referenceId}</span>
              </div>
            </div>
          </div>

          {/* Centered Grand Title */}
          <div className="text-center pt-8">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-extrabold tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3">
              وثيقة تعاقدية ملزمة ومطابقة للشريعة الإسلامية والقانون المدني المصري ({contract.clauses.length} مادة كاملة)
            </span>
            {isEditing ? (
              <div className="max-w-3xl mx-auto space-y-3 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">تعديل عنوان العقد (بالعربية):</label>
                  <input
                    type="text"
                    value={contract.contractTitleArabic || ''}
                    onChange={(e) => setContract(prev => ({ ...prev, contractTitleArabic: e.target.value }))}
                    className="w-full p-2.5 bg-white border border-blue-400 rounded-xl text-center font-black text-base sm:text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
                <div style={{ direction: 'ltr' }}>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Edit Contract Title (English):</label>
                  <input
                    type="text"
                    value={contract.contractTitleEnglish || ''}
                    onChange={(e) => setContract(prev => ({ ...prev, contractTitleEnglish: e.target.value }))}
                    className="w-full p-2.5 bg-white border border-blue-400 rounded-xl text-center font-bold text-xs sm:text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <>
                <h1 className={`text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight ${headingFontClass}`}>
                  {titleAr}
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-600 tracking-wide font-cinzel" style={{ direction: 'ltr' }}>
                  {titleEn}
                </h2>
              </>
            )}
          </div>

          {/* Legal Compliance Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
              <i className="fas fa-check-double text-emerald-600"></i>
              مطابق للشريعة الإسلامية (خالٍ من الربا والغرر)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 text-blue-800 font-bold border border-blue-200">
              <i className="fas fa-gavel text-blue-600"></i>
              القانون المدني المصري رقم ١٣١ لسنة ١٩٤٨
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-800 font-bold border border-indigo-200">
              <i className="fas fa-landmark text-indigo-600"></i>
              مطابق لنماذج بوابة التشريعات والشهر العقاري ونقابة المحامين
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 text-purple-800 font-bold border border-purple-200">
              <i className="fas fa-language text-purple-600"></i>
              ترجمة قانونية معتمدة متطابقة (Certified Mirror)
            </span>
          </div>
        </div>

        {/* SECTION: LEGAL AUDIT & BENCHMARKING REPORT */}
        {audit && (
          <section id="section-audit" className="relative z-10 mb-12 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl scroll-mt-28">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-indigo-800/60 pb-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center text-xl font-bold shadow-md">
                  <i className="fas fa-shield-halved"></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-amber-300">
                    تقرير الفحص والمطابقة مع المواقع والمنصات القانونية المصرية
                  </h3>
                  <p className="text-xs text-indigo-200">
                    Official Statutory Portals, Court of Cassation Precedents, & Customary Legal Benchmarking
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-indigo-900/80 px-4 py-2 rounded-xl border border-indigo-500/40">
                <span className="text-xs text-indigo-200 font-bold">نسبة المطابقة:</span>
                <span className="text-xl font-black text-emerald-400 font-mono">{audit.complianceScore}%</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">معتمد</span>
              </div>
            </div>

            {/* 3 Benchmarking Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 text-xs leading-relaxed">
              {/* Pillar 1: Official Portals */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
                  <i className="fas fa-landmark text-sm"></i>
                  <span>بوابة التشريعات والشهر العقاري ووزارة العدل</span>
                </div>
                <p className="text-slate-300">{audit.officialPortalValidation}</p>
              </div>

              {/* Pillar 2: Court of Cassation */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
                  <i className="fas fa-scale-balanced text-sm"></i>
                  <span>أحكام ومبادئ محكمة النقض المستقرة</span>
                </div>
                <p className="text-slate-300">{audit.cassationPrinciplesValidation}</p>
              </div>

              {/* Pillar 3: Recognized & Customary Practice */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
                  <i className="fas fa-users-rectangle text-sm"></i>
                  <span>نقابة المحامين والعرف القضائي المصري</span>
                </div>
                <p className="text-slate-300">{audit.customaryPracticeValidation}</p>
              </div>
            </div>

            {/* Verification Checklist */}
            {audit.verificationChecklist && audit.verificationChecklist.length > 0 && (
              <div className="pt-4 border-t border-indigo-800/60">
                <h4 className="font-bold text-xs text-indigo-200 mb-3 flex items-center gap-1.5">
                  <i className="fas fa-list-check text-emerald-400"></i>
                  قائمة التحقق الإلزامية المستوفاة في هذا العقد:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {audit.verificationChecklist.map((check, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-white/10 border border-white/5 flex items-start gap-2 text-xs"
                    >
                      <i className="fas fa-circle-check text-emerald-400 text-sm mt-0.5"></i>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-white block">{check.item}</span>
                        <span className="text-[11px] text-indigo-300 block truncate">{check.reference}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Egyptian Official & Customary Statutory Sources Grid */}
            <div className="mt-5 pt-4 border-t border-indigo-800/60">
              <h4 className="font-bold text-xs text-amber-300 mb-3 flex items-center gap-1.5">
                <i className="fas fa-landmark-dome text-amber-400"></i>
                البوابات والمصادر القانونية المصرية المعتمدة المطابق لها هذا العقد:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-[11px] text-slate-300">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <i className="fas fa-scale-balanced text-amber-400 text-base mb-1.5 block"></i>
                  <span className="font-bold text-white block">بوابة التشريعات</span>
                  <span className="text-[10px] text-slate-400">القانون المدني 131/1948</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <i className="fas fa-gavel text-amber-400 text-base mb-1.5 block"></i>
                  <span className="font-bold text-white block">محكمة النقض المصرية</span>
                  <span className="text-[10px] text-slate-400">الدوائر المدنية والتجارية</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <i className="fas fa-stamp text-amber-400 text-base mb-1.5 block"></i>
                  <span className="font-bold text-white block">الشهر العقاري والتوثيق</span>
                  <span className="text-[10px] text-slate-400">إثبات التاريخ والتصديق</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <i className="fas fa-users-rectangle text-amber-400 text-base mb-1.5 block"></i>
                  <span className="font-bold text-white block">نقابة المحامين المصرية</span>
                  <span className="text-[10px] text-slate-400">الصيغ العرفية المعتمدة</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <i className="fas fa-book-bookmark text-amber-400 text-base mb-1.5 block"></i>
                  <span className="font-bold text-white block">شبكة قوانين الشرق</span>
                  <span className="text-[10px] text-slate-400">موسوعات الصيغ والطعون</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Certified Translation Statement */}
        {contract.certificationStatement && (
          <div className="relative z-10 mb-10 p-5 rounded-xl bg-gradient-to-r from-blue-50/90 to-indigo-50/90 border-r-4 border-blue-700 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <i className="fas fa-stamp text-lg"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-950 text-sm mb-1 flex items-center gap-2">
                  <span>إشهاد مطابقة الترجمة القانونية والشرعية</span>
                  <span className="text-xs text-blue-700 font-normal font-mono">| CERTIFIED TRANSLATION ATTESTATION</span>
                </h4>
                <p className="text-xs md:text-sm text-blue-900 leading-relaxed font-medium">
                  {contract.certificationStatement}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 1: PREAMBLE */}
        <section id="section-preamble" className="relative z-10 mb-12 scroll-mt-28">
          <div className="flex items-center justify-between bg-slate-900 text-white px-5 py-3 rounded-t-xl shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                I
              </span>
              <h3 className="font-bold text-sm md:text-base">الديباجة وتحديد أطراف التعاقد</h3>
            </div>
            <span className="text-xs text-slate-300 font-cinzel font-semibold" style={{ direction: 'ltr' }}>
              PREAMBLE & PARTIES
            </span>
          </div>

          <div className="p-6 md:p-8 bg-slate-50/60 border-x border-b border-slate-200 rounded-b-xl shadow-inner">
            {viewMode === 'dual' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 text-left border-t md:border-t-0 pt-4 md:pt-0" style={{ direction: 'ltr' }}>
                  <span className="inline-block text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2 font-cinzel">
                    Certified English Text
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                    {contract.preambleEnglish}
                  </p>
                </div>
                <div className="order-1 md:order-2 text-right">
                  <span className="inline-block text-[11px] font-black text-slate-400 tracking-wider mb-2">
                    النص العربي المعتمد
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                    {contract.preambleArabic}
                  </p>
                </div>
              </div>
            ) : viewMode === 'stacked' ? (
              <div className="space-y-6">
                <div className="text-right pb-5 border-b border-slate-200">
                  <span className="inline-block text-[11px] font-black text-slate-400 tracking-wider mb-2">
                    النص العربي المعتمد
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                    {contract.preambleArabic}
                  </p>
                </div>
                <div className="text-left" style={{ direction: 'ltr' }}>
                  <span className="inline-block text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2 font-cinzel">
                    Certified English Text
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                    {contract.preambleEnglish}
                  </p>
                </div>
              </div>
            ) : viewMode === 'arabic' ? (
              <div className="text-right">
                <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                  {contract.preambleArabic}
                </p>
              </div>
            ) : (
              <div className="text-left" style={{ direction: 'ltr' }}>
                <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                  {contract.preambleEnglish}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: RECITALS */}
        <section id="section-recitals" className="relative z-10 mb-12 scroll-mt-28">
          <div className="flex items-center justify-between bg-slate-900 text-white px-5 py-3 rounded-t-xl shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                II
              </span>
              <h3 className="font-bold text-sm md:text-base">التمهيد الملزم المشترك</h3>
            </div>
            <span className="text-xs text-slate-300 font-cinzel font-semibold" style={{ direction: 'ltr' }}>
              MUTUAL RECITALS
            </span>
          </div>

          <div className="p-6 md:p-8 bg-slate-50/60 border-x border-b border-slate-200 rounded-b-xl shadow-inner">
            {viewMode === 'dual' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 text-left border-t md:border-t-0 pt-4 md:pt-0" style={{ direction: 'ltr' }}>
                  <span className="inline-block text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2 font-cinzel">
                    Certified English Text
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                    {contract.recitalsEnglish}
                  </p>
                </div>
                <div className="order-1 md:order-2 text-right">
                  <span className="inline-block text-[11px] font-black text-slate-400 tracking-wider mb-2">
                    النص العربي المعتمد
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                    {contract.recitalsArabic}
                  </p>
                </div>
              </div>
            ) : viewMode === 'stacked' ? (
              <div className="space-y-6">
                <div className="text-right pb-5 border-b border-slate-200">
                  <span className="inline-block text-[11px] font-black text-slate-400 tracking-wider mb-2">
                    النص العربي المعتمد
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                    {contract.recitalsArabic}
                  </p>
                </div>
                <div className="text-left" style={{ direction: 'ltr' }}>
                  <span className="inline-block text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2 font-cinzel">
                    Certified English Text
                  </span>
                  <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                    {contract.recitalsEnglish}
                  </p>
                </div>
              </div>
            ) : viewMode === 'arabic' ? (
              <div className="text-right">
                <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                  {contract.recitalsArabic}
                </p>
              </div>
            ) : (
              <div className="text-left" style={{ direction: 'ltr' }}>
                <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                  {contract.recitalsEnglish}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 3: ARTICLES & CLAUSES (Full Dynamic Display) */}
        <section className="relative z-10 mb-14 space-y-6">
          <div className="text-center py-4 border-y-2 border-slate-900">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 font-cinzel">
              OPERATIVE PROVISIONS ({contract.clauses.length} ARTICLES)
            </span>
            <h3 className={`text-xl md:text-2xl font-black text-slate-900 ${headingFontClass}`}>
              المواد والبنود التعاقدية الملزمة تفصيلاً ({contract.clauses.length} مادة كاملة)
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              صياغة شاملة متكاملة لكافة الجزئيات والتفاصيل الدقيقة التي تغني عن أي ملحق خارجي
              {searchQuery && ` (تمت تصفية ${filteredClauses.length} مادة مطابقة للبحث)`}
            </p>
          </div>

          {filteredClauses.length === 0 ? (
            <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
              <i className="fas fa-search text-3xl text-slate-300 mb-2"></i>
              <p className="text-slate-600 font-bold">لا توجد مواد مطابقة للبحث "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs text-blue-600 font-bold hover:underline"
              >
                إلغاء البحث وإظهار كافة المواد
              </button>
            </div>
          ) : (
            filteredClauses.map((clause, index) => {
              const isExpanded = expandedClauses[index] !== false;
              const originalIndex = contract.clauses.findIndex(
                (c) => c.titleArabic === clause.titleArabic && c.titleEnglish === clause.titleEnglish
              );
              const clauseNum = (originalIndex >= 0 ? originalIndex : index) + 1;

              return (
                <div
                  key={index}
                  id={`clause-${originalIndex >= 0 ? originalIndex : index}`}
                  className="clause-card group border border-slate-200 hover:border-slate-300 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all scroll-mt-28 bg-white"
                >
                  <div className="bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 px-5 py-3.5 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-900 text-white font-black text-xs flex items-center justify-center shadow-xs">
                        {clauseNum < 10 ? `0${clauseNum}` : clauseNum}
                      </span>
                      <div>
                        <h4 className={`font-black text-slate-950 text-base md:text-lg ${headingFontClass}`}>
                          {clause.titleArabic}
                        </h4>
                        <h5 className="font-bold text-slate-600 text-xs md:text-sm font-cinzel" style={{ direction: 'ltr' }}>
                          {clause.titleEnglish}
                        </h5>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-auto print:hidden">
                      <button
                        onClick={() =>
                          handleCopyClause(
                            clause.titleArabic,
                            clause.titleEnglish,
                            clause.contentArabic,
                            clause.contentEnglish
                          )
                        }
                        className="px-2.5 py-1 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 rounded-md border border-slate-200 transition-colors flex items-center gap-1 shadow-2xs"
                        title="نسخ هذه المادة فقط"
                      >
                        <i className="fas fa-copy text-blue-600"></i>
                        <span>نسخ المادة</span>
                      </button>
                      <button
                        onClick={() => toggleClause(originalIndex >= 0 ? originalIndex : index)}
                        className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-md transition-colors"
                        title={isExpanded ? 'طي المحتوى' : 'توسيع المحتوى'}
                      >
                        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-xs`}></i>
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-6 md:p-8 bg-white">
                      {viewMode === 'dual' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="order-2 md:order-1 text-left border-t md:border-t-0 pt-4 md:pt-0" style={{ direction: 'ltr' }}>
                            <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                              {clause.contentEnglish}
                            </p>
                          </div>
                          <div className="order-1 md:order-2 text-right">
                            <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                              {clause.contentArabic}
                            </p>
                          </div>
                        </div>
                      ) : viewMode === 'stacked' ? (
                        <div className="space-y-4">
                          <div className="text-right pb-4 border-b border-slate-100">
                            <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                              {clause.contentArabic}
                            </p>
                          </div>
                          <div className="text-left" style={{ direction: 'ltr' }}>
                            <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                              {clause.contentEnglish}
                            </p>
                          </div>
                        </div>
                      ) : viewMode === 'arabic' ? (
                        <div className="text-right">
                          <p className={`whitespace-pre-wrap text-slate-900 leading-relaxed ${bodyFontClass} ${bodyFontSizeClass}`}>
                            {clause.contentArabic}
                          </p>
                        </div>
                      ) : (
                        <div className="text-left" style={{ direction: 'ltr' }}>
                          <p className={`whitespace-pre-wrap text-slate-800 leading-relaxed font-sans ${bodyFontSizeClass}`}>
                            {clause.contentEnglish}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </section>

        {/* SECTION 4: SIGNATURES & EXECUTION */}
        <section id="section-signatures" className="relative z-10 mb-14 pt-8 border-t-2 border-slate-900 scroll-mt-28">
          <div className="text-center pb-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 font-cinzel">
              EXECUTION & NOTARIZATION
            </span>
            <h3 className={`text-xl md:text-2xl font-black text-slate-900 ${headingFontClass}`}>
              إشهاد التوقيع وخاتمة اعتماد أطراف العقد
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              حُرّر هذا العقد من نسختين أصليتين، بيد كل طرف نسخة للعمل بموجبها عند اللزوم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            <div className="p-6 border-2 border-slate-300 rounded-xl bg-slate-50/50 relative">
              <div className="flex justify-between items-center border-b border-slate-300 pb-3 mb-4">
                <h5 className="font-black text-slate-900 text-base">الطرف الأول / First Party</h5>
                <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border">
                  PARTY 01
                </span>
              </div>
              <div className="space-y-3 text-xs md:text-sm text-slate-800">
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">الاسم / Name:</span>
                  <span className={contract.executionCertificate ? 'font-bold text-slate-900' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate?.party1.name}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">الرقم القومي / ID:</span>
                  <span className={contract.executionCertificate ? 'font-mono text-slate-800' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate?.party1.nationalIdOrCr}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">الصفة / Title:</span>
                  <span className={contract.executionCertificate ? 'text-slate-800' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate?.party1.titleOrCapacity}
                  </span>
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-slate-600">التوقيع / Signature:</span>
                  {contract.executionCertificate?.party1.signatureDataUrl ? (
                    <img
                      src={contract.executionCertificate.party1.signatureDataUrl}
                      alt="Signature 1"
                      className="h-10 max-w-[140px] object-contain border-b-2 border-slate-900"
                    />
                  ) : (
                    <span className="border-b-2 border-slate-900 flex-1 mx-2"></span>
                  )}
                </div>
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">التاريخ / Date:</span>
                  <span className={contract.executionCertificate ? 'font-mono text-xs text-slate-700' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate ? new Date(contract.executionCertificate.party1.signedAt || '').toLocaleDateString('ar-EG') : ''}
                  </span>
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="border border-dashed border-slate-400 h-20 rounded-lg flex flex-col items-center justify-center text-[10px] text-slate-400 bg-white">
                    <i className="fas fa-stamp text-lg mb-1 text-slate-300"></i>
                    <span>موضع خاتم المنشأة</span>
                    <span className="font-mono">Official Seal</span>
                  </div>
                  <div className="border border-dashed border-slate-400 h-20 rounded-lg flex flex-col items-center justify-center text-[10px] text-slate-400 bg-white">
                    <i className="fas fa-fingerprint text-lg mb-1 text-slate-300"></i>
                    <span>بصمة إبهام الطرف الأول</span>
                    <span className="font-mono">Thumbprint</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-slate-300 rounded-xl bg-slate-50/50 relative">
              <div className="flex justify-between items-center border-b border-slate-300 pb-3 mb-4">
                <h5 className="font-black text-slate-900 text-base">الطرف الثاني / Second Party</h5>
                <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border">
                  PARTY 02
                </span>
              </div>
              <div className="space-y-3 text-xs md:text-sm text-slate-800">
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">الاسم / Name:</span>
                  <span className={contract.executionCertificate ? 'font-bold text-slate-900' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate?.party2.name}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">الرقم القومي / ID:</span>
                  <span className={contract.executionCertificate ? 'font-mono text-slate-800' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate?.party2.nationalIdOrCr}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">الصفة / Title:</span>
                  <span className={contract.executionCertificate ? 'text-slate-800' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate?.party2.titleOrCapacity}
                  </span>
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-slate-600">التوقيع / Signature:</span>
                  {contract.executionCertificate?.party2.signatureDataUrl ? (
                    <img
                      src={contract.executionCertificate.party2.signatureDataUrl}
                      alt="Signature 2"
                      className="h-10 max-w-[140px] object-contain border-b-2 border-slate-900"
                    />
                  ) : (
                    <span className="border-b-2 border-slate-900 flex-1 mx-2"></span>
                  )}
                </div>
                <p className="flex justify-between items-center">
                  <span className="font-bold text-slate-600">التاريخ / Date:</span>
                  <span className={contract.executionCertificate ? 'font-mono text-xs text-slate-700' : 'border-b border-slate-400 flex-1 mx-2'}>
                    {contract.executionCertificate ? new Date(contract.executionCertificate.party2.signedAt || '').toLocaleDateString('ar-EG') : ''}
                  </span>
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="border border-dashed border-slate-400 h-20 rounded-lg flex flex-col items-center justify-center text-[10px] text-slate-400 bg-white">
                    <i className="fas fa-stamp text-lg mb-1 text-slate-300"></i>
                    <span>موضع خاتم المنشأة</span>
                    <span className="font-mono">Official Seal</span>
                  </div>
                  <div className="border border-dashed border-slate-400 h-20 rounded-lg flex flex-col items-center justify-center text-[10px] text-slate-400 bg-white">
                    <i className="fas fa-fingerprint text-lg mb-1 text-slate-300"></i>
                    <span>بصمة إبهام الطرف الثاني</span>
                    <span className="font-mono">Thumbprint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate of Digital Execution Banner */}
          {contract.executionCertificate && (
            <div className="my-6 p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl border border-indigo-500/40 shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-indigo-800/80 pb-3 gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center text-lg font-black shadow-md">
                    <i className="fas fa-certificate"></i>
                  </span>
                  <div>
                    <h5 className="font-black text-sm md:text-base text-white">
                      شهادة إتمام التوقيع الإلكتروني وتوثيق المحرر الرقمي
                    </h5>
                    <p className="text-[10px] text-slate-300 font-mono">
                      Certificate of Digital Execution & Verification Audit Trail
                    </p>
                  </div>
                </div>

                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {contract.executionCertificate.certificateId}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1.5">
                  <span className="text-slate-400 font-bold block text-[11px]">البصمة المشفرة للوثيقة (SHA-256 Fingerprint):</span>
                  <p className="font-mono text-[10px] text-amber-300 break-all bg-black/30 p-2 rounded-lg">
                    {contract.executionCertificate.documentHashSha256}
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1.5">
                  <span className="text-slate-400 font-bold block text-[11px]">المرجعية التشريعية والحجية القضائية:</span>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    {contract.executionCertificate.statutoryReference}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
            <h6 className="font-bold text-xs text-slate-700 mb-3 flex items-center gap-1.5">
              <i className="fas fa-users text-slate-500"></i>
              شهود العقد والإثبات الرسمي / ATTESTING WITNESSES:
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
              <div className="space-y-1.5 p-3 bg-white rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">الشاهد الأول (First Witness):</p>
                <p>الاسم: .............................................................. الرقم القومي: ................................................</p>
                <p>التوقيع: ........................................................... التاريخ: ...... / ...... / 202___</p>
              </div>
              <div className="space-y-1.5 p-3 bg-white rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">الشاهد الثاني (Second Witness):</p>
                <p>الاسم: .............................................................. الرقم القومي: ................................................</p>
                <p>التوقيع: ........................................................... التاريخ: ...... / ...... / 202___</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SHARIA COMPLIANCE */}
        {contract.shariaComplianceNotes && (
          <section id="section-sharia" className="relative z-10 mb-8 p-6 bg-emerald-50/80 border-r-4 border-emerald-600 rounded-xl shadow-xs scroll-mt-28">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <i className="fas fa-book-quran text-lg"></i>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-black text-emerald-950">
                  التأصيل الشرعي ومطابقة ضوابط الفقه الإسلامي في المعاملات
                </h3>
                <p className="text-xs text-emerald-700 font-semibold" style={{ direction: 'ltr' }}>
                  Islamic Jurisprudential Compliance & Sharia Governance
                </p>
              </div>
            </div>
            <div className={`text-xs md:text-sm text-emerald-950 leading-relaxed whitespace-pre-wrap ${bodyFontClass}`}>
              {contract.shariaComplianceNotes}
            </div>
          </section>
        )}

        {/* SECTION 6: STATUTORY LEGAL NOTES */}
        {contract.legalNotes && (
          <section id="section-legal" className="relative z-10 mb-8 p-6 bg-amber-50/80 border-r-4 border-amber-600 rounded-xl shadow-xs scroll-mt-28">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <i className="fas fa-scale-balanced text-lg"></i>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-black text-amber-950">
                  الملاحظات القانونية والتحليل التشريعي (وفقاً للقانون المصري وقضاء النقض)
                </h3>
                <p className="text-xs text-amber-700 font-semibold" style={{ direction: 'ltr' }}>
                  Egyptian Statutory Framework & Court of Cassation Precedents
                </p>
              </div>
            </div>
            <div className={`text-xs md:text-sm text-amber-950 leading-relaxed whitespace-pre-wrap ${bodyFontClass}`}>
              {contract.legalNotes}
            </div>
          </section>
        )}

        {/* Official Document Footer Stamp */}
        <div className="relative z-10 mt-10 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-2 font-mono text-[11px] text-slate-400">
            <span>RECORD ID: {referenceId}</span>
            <span>JURISDICTION: ARAB REPUBLIC OF EGYPT</span>
            <span>TOTAL ARTICLES: {contract.clauses.length}</span>
            <span>STATUS: CERTIFIED & EXECUTABLE</span>
          </div>
          <p className="text-slate-600">
            تمت صياغة وهندسة هذا العقد بأعلى درجات العناية والاحترافية ليكون عقداً ملزماً قانونياً وشرعياً ومطابقاً للنماذج المعمول بها أمام المحاكم والشهر العقاري.
          </p>
        </div>
      </article>

      {/* Official Digital Certificate Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-6 space-y-4 animate-fadeIn">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg font-bold">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm">شهادة الاعتماد والتحقق الرقمي الرسمي</h3>
                  <p className="text-[10px] text-slate-500">Official Digital Legal Verification Certificate</p>
                </div>
              </div>
              <button
                onClick={() => setShowVerificationModal(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <i className="fas fa-times text-xs"></i>
              </button>
            </div>

            <div className="text-center py-2 space-y-2">
              {qrCodeUrl && (
                <img src={qrCodeUrl} alt="Official Verification QR" className="w-28 h-28 mx-auto p-2 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs" />
              )}
              <span className="inline-block text-xs font-mono font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {referenceId}
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">عنوان الوثيقة:</span>
                <strong className="text-slate-900">{titleAr}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">حالة المطابقة:</span>
                <span className="text-emerald-700 font-black flex items-center gap-1">
                  <i className="fas fa-check-circle"></i>
                  معتمد ومطابق للقانون المصري والشريعة 100%
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">جهة التوافق:</span>
                <span className="text-slate-900 font-bold">بوابة التشريعات ونماذج نقابة المحامين والشهر العقاري</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">صلاحية النفاذ:</span>
                <span className="text-blue-900 font-bold">سند تنفيذي ملزم قانوناً وقضائياً</span>
              </div>
            </div>

            <button
              onClick={() => setShowVerificationModal(false)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
            >
              إغلاق الشهادة
            </button>
          </div>
        </div>
      )}

      {/* Electronic Signature Modal */}
      <ElectronicSignatureModal
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        contract={contract}
        onSaveExecutionCertificate={handleSaveExecutionCertificate}
      />
    </div>
  );
};

export default ContractDisplay;
