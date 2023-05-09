/**
 * Renders an upper dashboard with netsales data.
 * @returns {JSX.Element} The JSX element containing the upper dashboard.
 */

import React, { useState } from "react";
import "./dashboard.css";
import Netsales from "./Netsales";

function upperdashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Event_id, setEvent_id] = useState("");
  fetch("http://localhost:3000/events")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setEvent_id(data[0]);
    })
    .catch((error) => console.error(error));
  return (
    <div className="eds-data-table__wrapper">
      <div className="cards-carousel eds-g-cell eds-g-cell-12-12">
        <Netsales
          Nsales={Event_id.Nsales}
          Sold={Event_id.Sold}
          Paid={Event_id.Paid}
          Tickets={Event_id.Tickets}
          Gross={Event_id.Gross}
          Free={Event_id.Free}
        />
      </div>
      <div className="eds-g-cell eds-g-cell-12-12 eds-g-cell-sm-4-12"></div>
    </div>
  );
}

export default upperdashboard;
