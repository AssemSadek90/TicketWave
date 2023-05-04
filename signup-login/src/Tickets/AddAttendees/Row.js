
import React, { useState, useEffect } from "react";

/** Renders a row for the given item in the table
@param {object} props - Props object containing item, data, myFinalData, backgroundColor, soldTickets, and initialQuantity
@returns {JSX.Element} - Returns a JSX element
*/
    function Row({item, data, myFinalData, backgroundColor, soldTickets, initialQuantity}){

    /**React state hook to manage the quantity of tickets for a specific item */
    const [quantity, setQuantity] = useState(0);
    /**React state hook to manage the total cost of tickets for a specific item*/
    const [total, setTotal] = useState(0);
    /**React state hook to manage the current item*/
    const [currentItem, setCurrentItem] = useState("");
    /**React state hook to manage the available tickets for a specific item*/
    const [available, setAvailable] = useState(item.quantity);

    /**React hook that runs when component mounts or when soldTickets prop changes to update the available tickets for a specific item*/
    useEffect(() => {
      const current = soldTickets.find((e) => e.id === item.id);
      setAvailable(item.quantity - current.soldTickets)
      setCurrentItem(current)
      // console.log("Sold Tickets", current.soldTickets);
    }, [soldTickets]);

    /** Function to handle changing the quantity of tickets for a specific item
@param {object} e - Event object
*/
    function changeHandler(e){
        setQuantity(e.target.value)
        setTotal(item.price * e.target.value)
    }

    /**React hook that runs when the quantity state changes to update the data array with the chosen quantity and total cost for a specific item*/
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