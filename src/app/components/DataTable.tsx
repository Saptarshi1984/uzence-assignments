import React from "react";

interface Column {
  key: string;
  label: string;
}

const columns: Column[] = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "email", label: "Email" },
  { key: "city", label: "City" },
  { key: "phone", label: "Phone" },
];

interface Data {
  
  [key: string]: string | number;
}

interface DataTableProps {
  data: Data[];
  columns: Column[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: []) => void;
}

const DataTable = ({ data, columns, loading, selectable }: DataTableProps) => {
  return (
    <div className="w-[50%] border rounded-xl overflow-x-auto">
      {loading ? (<div>loading...</div>) : (data.length == 0 ? <div>No Data Avaialable</div>:
      
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        {/* COLUMN HEADERS */}
        <thead className="bg-gray-700">
          <tr>
            {columns.map((col) => 
              <th key={col.key} className="text-left p-3 border-b">{col.label}</th>)} {/* Column Mapping */}
          </tr>
        </thead>

        {/* ROW DATA */}
        <tbody>
          {/* Row 1 */}
          {data.map ((row, j) => <tr key={j} className="even:bg-gray-500 odd:bg-black hover:bg-gray-600 transition">
            {columns.map((col, i) => <td key={i} className="p-3 border-b">{row[col.key]}</td>)}
          </tr> )}       
        </tbody>
      </table>
    
    )
      }
      
    </div>
  );
};

export default DataTable;
