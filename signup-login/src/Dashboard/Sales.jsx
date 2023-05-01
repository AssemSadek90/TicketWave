import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Orders from './Orders';


function Sales(Event_id) { 
   const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/ticketData");
      const data = await response.json();
      setTicketData(data);
    };

    fetchData();
  }, []);

  return (
      <div className="eds-l-pad-hor-3 snipcss-DQ9if">
    <div className="eds-l-mar-top-5 eds-g-cell eds-g-cell-12-12 eds-g-cell-sm-8-12">
      <div className="eds-l-mar-bot-6">
        <div className="dashboard-ticket-table eds-l-pad-right-4" data-testid="ticket-type-section">
          <div className="eds-text-hs eds-l-pad-vert-1">
            Sales by ticket type
          </div>
          <div className="ticket-table__header eds-l-mar-top-5">
            <div className="eds-data-table">
              <div className="eds-data-table__wrapper">
                <table className="eds-data-table__main eds-l-mar-vert-2" data-spec="data-table-main">
                  <thead>
                    <tr data-spec="data-table-header" className="eds-data-table-header">
                      <th className="eds-data-table-header__column" data-spec="data-table-header-column">
                        <button aria-label="" disabled="" className="eds-btn--button eds-btn--none eds-btn--disabled eds-data-table-header__column-button" aria-disabled="true" type="button">
                          <span className="eds-text-bm">Ticket type</span>
                          <span className="eds-data-table-header__column__icon"></span>
                        </button>
                      </th>
                      <th className="eds-data-table-header__column" data-spec="data-table-header-column">
                        <button aria-label="" disabled="" className="eds-btn--button eds-btn--none eds-btn--disabled eds-data-table-header__column-button" aria-disabled="true" type="button">
                          <span className="eds-text-bm">Price</span>
                          <span className="eds-data-table-header__column__icon"></span>
                        </button>
                      </th>
                      <th className="eds-data-table-header__column" data-spec="data-table-header-column">
                        <button aria-label="" disabled="" className="eds-btn--button eds-btn--none eds-btn--disabled eds-data-table-header__column-button" aria-disabled="true" type="button">
                          <span className="eds-text-bm">Sold</span>
                          <span className="eds-data-table-header__column__icon"></span>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="eds-table-list"> 
                  {ticketData.map((Event_id) => (
                    <tr className="eds-data-table-list-item" key={Event_id.Ticket_type}>
                      <td className="eds-data-table-list-item__column" data-spec="data-table-list-item-column" >{Event_id.Ticket_type}</td>
                      <td className="eds-data-table-list-item__column" data-spec="data-table-list-item-column">
                        £{Event_id.Price}
                      </td>
                      <td className="eds-data-table-list-item__column" data-spec="data-table-list-item-column">
                          {Event_id.Sold}/{Event_id.Tickets}
                      </td>
                    </tr>) )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <div className="ticket-table__all eds-l-mar-top-4 eds-l-mar-right-2" data-testid="all-ticket-sales">
              <a data-spec="eds-link" href="myevent/591102953847/reports/sales-by-ticket-type/" className="eds-link">
                Go to all ticket sales
              </a>
            </div> */}
          </div>
        </div>
      </div>
    <Orders/>
    </div>
  </div>
  )
}

export default Sales