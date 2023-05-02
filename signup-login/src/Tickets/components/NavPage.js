import React from "react";
import CustomNavLink from "../UI/CustomNavLink";


function NavPage(){


    return(
        <div style={{flexDirection: 'row', display: 'flex', borderBottom: '1px solid #ccc', paddingBottom: '2vh', maxWidth: 'max-content'}}>
            
            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-admission" exact  to={"/Navigation/Events/Tickets/admission"}>Admission</CustomNavLink>
            </div>
            
            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-add-ons" to={"/Navigation/Events/Tickets/add-ons"}>Add-ons</CustomNavLink>
            </div>

            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-promo-codes" to={"/Navigation/Events/Tickets/promo-codes"}>Promo codes</CustomNavLink>
            </div>

            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-holds" to={"/Navigation/Events/Tickets/holds"}>Holds</CustomNavLink>
            </div>

            <div>
            <CustomNavLink id="nav-page-settings" to={"/Navigation/Events/Tickets/event-settings"}>Settings</CustomNavLink>
            </div>
        </div>
    )

};

export default NavPage;