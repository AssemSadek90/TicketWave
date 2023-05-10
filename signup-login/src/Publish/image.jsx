import React from "react";
function EventImage(Event_id){
    return(
    <aside className='event-preview-card__image-container'>
    <img  className="imgEvent" src={Event_id.logo} alt=''></img>
    <div className='event-preview-card__image-placeholder'>

    </div>
    </aside>  )
    }
 export default EventImage;
 