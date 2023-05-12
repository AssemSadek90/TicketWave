import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Orders from "./Orders";
import server from "../server";
/**
 * Renders an upper dashboard with netsales data.
 * @returns {JSX.Element} The JSX element containing the upper dashboard.
 */
function Sales() {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    /**
     * Fetches ticket data from the server.
     * @returns {Promise<void>} A promise that resolves when the data is fetched and updated.
     */
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/ticketData");
      const data = await response.json();
      setTicketData(data);
      console.log("data", ticketData);
    };

    fetchData();
  }, []);
  localStorage.setItem("Event_id", 2);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const Event_id = localStorage.getItem("Event_id");

    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    server
      .get(`tickets/?event=${Event_id}`, requestOptions)
      .then((response) => {
        const data = response.data.results;
        //console.log('data', data);
        if (data) {
          setTicketData(data);
          console.log(data);
        }
      })
      .catch((error) => console.log(error));
    //console.log('orders', orders);
  }, []);

  return (
    <div className="eds-l-pad-hor-3 snipcss-DQ9if">
      <div className="eds-l-mar-top-5 eds-g-cell eds-g-cell-12-12 eds-g-cell-sm-8-12">
        <div className="eds-l-mar-bot-6">
          <div
            className="dashboard-ticket-table eds-l-pad-right-4"
            data-testid="ticket-type-section"
          >
            <div className="eds-text-hs eds-l-pad-vert-1">
              Sales by ticket type
            </div>
            <div className="ticket-table__header eds-l-mar-top-5">
              <div className="eds-data-table">
                {/* <div className="eds-data-table__wrapper"> */}
                <table
                  className="eds-data-table__main eds-l-mar-vert-2"
                  data-spec="data-table-main"
                >
                  <thead>
                    <tr
                      data-spec="data-table-header"
                      className="eds-data-table-header"
                    >
                      <th
                        className="eds-data-table-header__column"
                        data-spec="data-table-header-column"
                      >
                        <button
                          aria-label=""
                          disabled=""
                          className="eds-btn--button eds-btn--none eds-btn--disabled eds-data-table-header__column-button"
                          aria-disabled="true"
                          type="button"
                        >
                          <span className="eds-text-bm">Ticket type</span>
                          <span className="eds-data-table-header__column__icon"></span>
                        </button>
                      </th>
                      <th
                        className="eds-data-table-header__column"
                        data-spec="data-table-header-column"
                      >
                        <button
                          aria-label=""
                          disabled=""
                          className="eds-btn--button eds-btn--none eds-btn--disabled eds-data-table-header__column-button"
                          aria-disabled="true"
                          type="button"
                        >
                          <span className="eds-text-bm">Price</span>
                          <span className="eds-data-table-header__column__icon"></span>
                        </button>
                      </th>
                      <th
                        className="eds-data-table-header__column"
                        data-spec="data-table-header-column"
                      >
                        <button
                          aria-label=""
                          disabled=""
                          className="eds-btn--button eds-btn--none eds-btn--disabled eds-data-table-header__column-button"
                          aria-disabled="true"
                          type="button"
                        >
                          <span className="eds-text-bm">Sold</span>
                          <span className="eds-data-table-header__column__icon"></span>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="eds-table-list">
                    {ticketData.map((prop, index) => (
                      <tr
                        className="eds-data-table-list-item"
                        key={`${prop.Name}-${index}`}
                      >
                        <td
                          className="eds-data-table-list-item__column"
                          data-spec="data-table-list-item-column"
                        >
                          {prop.Name}
                        </td>
                        <td
                          className="eds-data-table-list-item__column"
                          data-spec="data-table-list-item-column"
                        >
                          £{prop.price}
                        </td>
                        <td
                          className="eds-data-table-list-item__column"
                          data-spec="data-table-list-item-column"
                        >
                          {prop.Sold}/{prop.Amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Orders />
      </div>
    </div>
  );
}

export default Sales;
