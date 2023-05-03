import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function SoldTickets({data}){

    const [myData, setMyData] = useState({})


    const [myEndDate, setMyEndDate] = useState('')

    const params = useParams();
    const reqId = parseInt(params.id)

    useEffect(() => {
        const reqData = data.find((item) => item.id === reqId);
        setMyData(reqData);


    }, [data, reqId])

    let formattedEndDate = ""
    let formattedStartDate = ""


if (myData) {
    formattedEndDate = myData.endDate?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    formattedStartDate = myData.startDate?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
   
  }





    return(
      <div style={{height: '100%', width: '100%', paddingBottom: '2rem'}}>
        <div style={{position: 'relative', margin: 'auto', maxWidth: '800px', padding: '1rem', backgroundColor: '#fff', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)', borderRadius: '0.5rem'}}>
  <Link to={"/Sold-Tickets"} style={{marginBottom: '1rem', color: '#555', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold'}}>&larr; Back</Link>
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #ccc', paddingBottom: '1rem', marginBottom: '1rem'}}>
    <h1 style={{margin: 0, fontSize: '2.4rem', fontWeight: 'bold'}}>{myData ? myData.name : ''}</h1>
    <p style={{margin: 0, fontSize: '1.6rem', color: '#888'}}>{myData ? myData.soldTickets : ''} sold out of {myData ? myData.quantity : ''}</p>
  </div>
  <div style={{fontSize: '1.4rem', lineHeight: 1.6}}>
    <p style={{marginBottom: '0.5rem'}}><strong>Description:</strong> {myData ? myData.description : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Visibility:</strong> {myData ? myData.Visibility : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Availability:</strong> {myData ? myData.availability : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>E-Ticket:</strong> {myData ? (myData.eTicket ? "True" : "False") : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>End Date:</strong> {formattedEndDate}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>End Time:</strong> {myData ? myData.endTime : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Maximum Quantity:</strong> {myData ? myData.maximumQuantity : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Minimum Quantity:</strong> {myData ? myData.minimumQuantity : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Sales Channel:</strong> {myData ? myData.salesChannel : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Start Date:</strong> {formattedStartDate}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Start Time:</strong> {myData ? myData.startTime : ''}</p>
    <p style={{marginBottom: '0.5rem'}}><strong>Will Call:</strong> {myData ? (myData.willCall ? "True" : "False") : ''}</p>
  </div>
  <div style={{ fontSize: 'xx-large',margin: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'baseline', paddingTop: '1rem', borderTop: '1px solid #ccc' }}>
    <p style={{marginBottom: '0', marginRight: '0.5rem', fontWeight: 'bold'}}>Price:</p>
    <p style={{marginBottom: '0', fontWeight: 'bold'}}>{myData ? myData.price : ''}</p>
    <p style={{fontSize: 'medium', fontWeight: 'normal', marginLeft: '0.5rem'}}> (per Ticket) </p>
  </div>
</div>
</div>



    )


};

export default SoldTickets;