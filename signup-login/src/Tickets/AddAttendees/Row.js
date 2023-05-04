
import React, { useState, useEffect } from "react";

function Row({item, data, myFinalData, backgroundColor, soldTickets, initialQuantity}){


    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [currentItem, setCurrentItem] = useState("");
    const [available, setAvailable] = useState(item.quantity);

    useEffect(() => {
      
    
      const current = soldTickets.find((e) => e.id === item.id);
    

      setAvailable(item.quantity - current.soldTickets)

      setCurrentItem(current)

      // console.log("Sold Tickets", current.soldTickets);


    }, [soldTickets]);
    





    function changeHandler(e){
        setQuantity(e.target.value)
        setTotal(item.price * e.target.value)

    }

    useEffect(() => {
        const itemIndex = data.findIndex((d) => d.id === item.id); // find index of item with item.id


        if (itemIndex >= 0) {
          const updatedData = [...data];
          updatedData[itemIndex].chosenQuantity = +quantity;
          updatedData[itemIndex].totalCost = +total;
          myFinalData(updatedData)
          
        }
        
      }, [quantity]);


      




    return(

        <div
    style={{
      display: "flex",
      flexDirection: "row",
    //   borderBottom: "1px solid black",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      minWidth: '2rem',
      backgroundColor: backgroundColor,
      padding: '0.5rem',
      alignItems: 'center'

    }}
  >
    <div style={{ flex: 2 }}>{item.name}</div>
    <div style={{ flex: 1 }}>
      {currentItem.soldTickets? currentItem.soldTickets : "N/A"}
    </div>
    <div style={{ flex: 1 }}>$ {item.price}</div>
    <div style={{ flex: 1 }}>
      <input
        style={{ width: "50%", fontSize: "0.85rem", padding: '0.5rem' }}
        type="number"
        min="0"
        max={available}
        value={quantity}
        onChange={changeHandler}
      />
    </div>
    <div style={{ flex: 1 }}>$ {item.price * quantity}</div>
  </div>

    )
};

export default Row;