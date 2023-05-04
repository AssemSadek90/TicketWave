import React from "react";
import CustomNavLink from "../UI/CustomNavLink";

/** Renders the navigation page component.
@return {JSX.Element} Navigation page component.
*/
function NavPage(){


    return(
        <div style={{flexDirection: 'row', display: 'flex', borderBottom: '1px solid #ccc', paddingBottom: '2vh', maxWidth: '30rem', minWidth: '30rem'}}>
            
            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-admission" exact  to={"/Tickets/admission"}>Admission</CustomNavLink>
            </div>
            
            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-add-ons" to={"/Tickets/add-ons"}>Add-ons</CustomNavLink>
            </div>

            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-promo-codes" to={"/Tickets/promo-codes"}>Promo codes</CustomNavLink>
            </div>

            <div style={{marginRight: '2rem'}}>
            <CustomNavLink id="nav-page-holds" to={"/Tickets/holds"}>Holds</CustomNavLink>
            </div>

            <div>
            <CustomNavLink id="nav-page-settings" to={"/Tickets/event-settings"}>Settings</CustomNavLink>
            </div>
        </div>
    )

};

export default NavPage;