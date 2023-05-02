import React from "react";
import CustomNavLink from "../UI/CustomNavLink";


function NavPage(){


    return(
        <div style={{flexDirection: 'row', display: 'flex', borderBottom: '1px solid #ccc', paddingBottom: '2vh', maxWidth: 'max-content'}}>
            
            <div style={{marginRight: '2rem'}}>
            <CustomNavLink exact  to={"/Events/Tickets/admission"}>Admission</CustomNavLink>
            </div>
            
            <div style={{marginRight: '2rem'}}>
            <CustomNavLink to={"/Events/Tickets/add-ons"}>Add-ons</CustomNavLink>
            </div>

            <div style={{marginRight: '2rem'}}>
            <CustomNavLink to={"/Events/Tickets/promo-codes"}>Promo codes</CustomNavLink>
            </div>

            <div style={{marginRight: '2rem'}}>
            <CustomNavLink to={"/Events/Tickets/holds"}>Holds</CustomNavLink>
            </div>

            <div>
            <CustomNavLink to={"/Events/Tickets/event-settings"}>Settings</CustomNavLink>
            </div>
        </div>
    )

};

export default NavPage;