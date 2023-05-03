
import React from "react";
import { useEffect, useState } from "react";



function Dashboard({soldTicketData}){
    
    const [sold, setSold] = useState(0);


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