
import React from "react";
import { useEffect, useState } from "react";


/** Component for displaying dashboard information, including total tickets sold.
@param {Array} soldTicketData - An array of objects representing ticket data.
@returns {JSX.Element} - The Dashboard component.
*/
function Dashboard({soldTicketData}){
/** Represents the total number of sold tickets.
@type {number}
*/
const [sold, setSold] = useState(0);

/** Updates the state of the total number of sold tickets based on the data provided.
@param {Array} soldTicketData - An array of objects containing the sold ticket data. Each object should have a "soldTickets" property.
@returns {void}
*/
useEffect(() => {
    const totalSoldTickets = soldTicketData.reduce((acc, cur) => acc + cur.soldTickets, 0);
    setSold(totalSoldTickets);
    }, [soldTicketData]);
    


    return(
        <div>
            Dashboard

            <br />
            <br />

            Sold Tickets = {sold}
        </div>
    )


};


export default Dashboard;