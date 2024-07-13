import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useTranslation } from "react-i18next";

interface DownloadPDFButtonProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ targetRef }) => {
  const { t } = useTranslation();

  const downloadPDF = async () => {
    try {
      if (!targetRef.current) {
        throw new Error("Target element not found");
      }

      const canvas = await html2canvas(targetRef.current, { scale: 1.2 });
      const imgData = canvas.toDataURL("image/png");

      const pdfWidth = targetRef.current.offsetWidth;
      const pdfHeight = targetRef.current.offsetHeight;

      const pdf = new jsPDF({
        orientation: pdfHeight > pdfWidth ? "portrait" : "landscape",
        unit: "pt",
        format: [pdfWidth, pdfHeight],
      });

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("profile.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <button
      onClick={downloadPDF}
      className="px-4 py-2 font-bold text-white Tajawal bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
    >
      {t("download_pdf")}
    </button>
  );
};

export default DownloadPDFButton;
