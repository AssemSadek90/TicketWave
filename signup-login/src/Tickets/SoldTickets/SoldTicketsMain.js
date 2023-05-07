import React from 'react';
import { Link } from 'react-router-dom';

/** A functional component for rendering the main page of sold tickets.
@param {Object} data - The data of the sold tickets.
@returns {JSX.Element} - The JSX element of the component.
*/
function SoldTicketsMain({ data }) {
  return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '1rem' }}>
      <h2
        style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}
      >
        {data.length !== 0 ? 'Sold Tickets' : 'No Sold Tickets'}
      </h2>
      {data.map((item) => {
        if (item.soldTickets > 0) {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ccc',
                padding: '0.5rem 0',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{item.name}</span>

              <Link to={`/${item.id}`} className="mainButton">
                <button id="sold-tickets-main-view-button">View</button>
              </Link>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default SoldTicketsMain;
