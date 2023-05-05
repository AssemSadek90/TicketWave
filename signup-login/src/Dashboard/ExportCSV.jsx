import React from "react";
import { CSVLink } from "react-csv";
import "./dashboard.css"
function ExportCSV(props) {
  const { orders } = props;

  const data = orders.map((order) => {
    return {
      "Order no.": order.id,
      "Name": `${order.first_name} ${order.last_name}`,
      "Price": order.cost,
      "Date": order.created.substr(0,10),
    };
  });

  return (
    <CSVLink data={data} filename={"orders.csv"}>
      Export to CSV
    </CSVLink>
  );
}

export default ExportCSV;