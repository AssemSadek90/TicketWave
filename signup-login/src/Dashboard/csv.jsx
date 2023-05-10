import React, { useState, useEffect } from "react";
import server from "../server";
import "./dashboard.css";
import ExportCSV from "./ExportCSV";
// const mockOrders = [
//   { id: 1, first_name: "John", last_name: "Doe", cost: "123", created: "30/5" },
//   {
//     id: 2,
//     first_name: "Jane",
//     last_name: "Smith",
//     cost: "123",
//     created: "30/5"
//   },
//   { id: 3, first_name: "Bob", last_name: "Johnson", cost: "50", created: "3/5" }
// ];

function CSVExport() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //   const handleDropdownToggle = () => {
  //     setIsDropdownOpen(!isDropdownOpen);
  //   }
  // const [orders, setOrders] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    server
      .get(`/orders/list`, requestOptions)
      .then((response) => {
        const data = response.data.results;
        //console.log('data', data);
        if (data) {
          setOrders(data);
          console.log(data);
          //console.log('orders', orders);
        }
      })
      .catch((error) => console.log(error));
    //console.log('orders', orders);
  }, []);

  return (
    <div className="row">
      <span
        className="eds-text-bm eds-text-weight--heavy atendeereport "
        onClick={handleDropdownToggle}
        id="Attendee summary"
      >
        Attendee summary report{" "}
      </span>
      {isDropdownOpen && (
        <div>
          <ExportCSV orders={orders} />
        </div>
      )}
    </div>
  );
}

export default CSVExport;
