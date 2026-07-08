import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";

function ExportButton({ employees }) {
  function exportExcel() {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Employees"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, "employees.xlsx");
  }

  return (
    <button
      onClick={exportExcel}
      className="w-full sm:w-auto h-14 px-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
    >
      <Download size={20} />
      Export Excel
    </button>
  );
}

export default ExportButton;