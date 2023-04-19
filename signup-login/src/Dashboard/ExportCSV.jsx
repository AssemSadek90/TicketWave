import React from "react";
import { CSVLink } from "react-csv";
import "./dashboard.css"
function ExportCSV({ data }) {
  const headers = [
    { label: "Total Orders", key: "orders" },
    { label: "Total Atendees", key: "Atendees" }
  ];

  const filename = "my_data.csv";

  return (
    <CSVLink data={data} headers={headers} filename={filename}>
        <div className="Export">Export to CSV</div>
    </CSVLink>
  );
}

export default ExportCSV;