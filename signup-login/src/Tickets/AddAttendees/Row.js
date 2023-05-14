
import React, { useState, useEffect } from "react";

/** Renders a row for the given item in the table
@param {object} props - Props object containing item, data, myFinalData, backgroundColor, soldTickets, and initialQuantity
@returns {JSX.Element} - Returns a JSX element
*/
    function Row({item, data, myFinalData, backgroundColor, soldTickets, initialQuantity}){

  /** Sets up state for quantity, total, current item, and available quantity values.
@param {number} initialQuantity - The initial quantity value.
@param {number} initialTotal - The initial total value.
@param {string} initialCurrentItem - The initial current item value.
@param {number} initialAvailable - The initial available quantity value.
@returns {[Quantity, SetQuantity, Total, SetTotal, CurrentItem, SetCurrentItem, Available, SetAvailable]} An array with the quantity state, its setter, the total state, its setter, the current item state, its setter, the available quantity state, and its setter.
*/
/** State Hook for quantity value.
@typedef {number} Quantity
@typedef {function} SetQuantity
@type {[Quantity, SetQuantity]} Quantity state and its setter.
*/
    const [quantity, setQuantity] = useState(0);
/** State Hook for total value.
@typedef {number} Total
@typedef {function} SetTotal
@type {[Total, SetTotal]} Total state and its setter.
*/
    const [total, setTotal] = useState(0);
/** State Hook for current item value.
@typedef {string} CurrentItem
@typedef {function} SetCurrentItem
@type {[CurrentItem, SetCurrentItem]} Current item state and its setter.
*/
    const [currentItem, setCurrentItem] = useState("");
/** State Hook for available quantity value.
@typedef {number} Available
@typedef {function} SetAvailable
@type {[Available, SetAvailable]} Available quantity state and its setter.
*/
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

  /** useEffect that updates the data when quantity state changes
@param {Array} data - Array of objects containing item details
@param {Object} item - Object containing details of the current item
@param {number} quantity - The quantity of the current item chosen by the user
@param {function} myFinalData - Function to update the final data with the updated quantity and totalCost
*/
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
      id="row-quantity"
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