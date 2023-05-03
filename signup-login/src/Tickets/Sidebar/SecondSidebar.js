import React, { useState } from 'react';
import { FaBackward, FaBackspace, faBack } from 'react-icons/fa';
import SecondCustomNavLink from '../UI/SecondCustomNavLink';
import { useNavigate } from 'react-router-dom';
import CustomNavLink from '../UI/CustomNavLink';
import CustomLink from '../UI/CustomLink';

const icons = [
    {
      name: 'basic-info',
      title: "Basic",
    },
    {
      name: 'details',
      title: "Details",
    },
    {
      name: 'Tickets/admission',
      title: "Tickets",
    },
    {
      name: 'publish',
      title: "Publish",
    }
  ];

const SecondSidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [options, setOptions] = useState(false);
  const [payment, setPayment] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [manage, setManage] = useState(false);


  const history = useNavigate();

//   const [activedIcon, setActivedIcon] = useState(null);


  const handleIconClick = (name) => {
    setActiveIcon(name);
  };

  const handleIconLeave = () => {
    setActiveIcon(null);
  };

  function CloseHandler(){
    history('/Navigation/Events')
  }

//   const handleClick = (name) => {
//     setActivedIcon(name);
//     console.log(name)
//   };

  return (
    <div className="sidebar" style={{marginLeft: '5rem',minWidth: '12rem', maxWidth: '20rem', padding: '10px', position: 'fixed', overflowY: 'auto', overflowX: 'hidden', height: '100%'}}>
      <div style={{width: '100%', backgroundColor: 'none', margin: '1rem', outline: 'none', border: 'none', color: 'blue', fontSize: 'medium', fontWeight: 'bold', paddingBottom: '1rem', borderBottom: '1px solid #ccc', paddingLeft: '1rem', alignItems: 'center', display: 'flex', flexDirection: 'row'}}  id="second-sidebar-back" onClick={CloseHandler}><div style={{fontSize: 'large', marginRight: '1rem'}}><FaBackward /></div><div>Back</div></div>
      <div style={{borderBottom: '1px solid #ccc', width: '100%'}}>
      {icons.map((item) => (
        <div 
        style={{margin: '3px', position: 'relative', height: '3rem'}}
          key={item.name}
          className="sidebar-item"
          onMouseEnter={() => handleIconClick(item.name)}
          onMouseLeave={handleIconLeave}
        //   onClick={() => handleClick(item.name)}
        //   onClick={handleIconClick(item.name)}
        >
            
            <div style={{ fontSize: '1.5rem', color: '#333', backgroundColor: activeIcon === item.name ? 'white' : '', width: '80%', height: '80%', alignItems: 'center', display: 'flex', borderRadius: '6px', overflow: 'hidden'}}
>

<CustomLink exact={false} to={`/Navigation/Events/${item.name}`}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', padding: '10px'}}>
          <div style={{fontSize: 'medium', paddingRight: '10px'}} >● </div>
          <p style={{fontSize: 'medium'}}>{item.title}</p>
          </div>
          </CustomLink>
          </div>
          

          {/* {activeIcon === item.name && (
            <div style={{transform: 'translateX(200%)', fontSize: 'small', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>{item.name}</div>
          )} */}
        </div>
      ))}
      </div>




      <div style={{ fontSize: '1.5rem', color: 'rgb(116, 116, 116)',  width: '100%', display: 'flex', borderRadius: '6px', marginTop: '1rem'}}
>
          <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <button 
          id="second-sidebar-dashboard" style={{height: '2rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setOptions(!options); history('/Navigation/Events/Dashboard')}}>
            Dashboard
            </button>
          <button 
          id="second-sidebar-options" style={{marginTop: '1rem', height: '2rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setOptions(!options); history('/Navigation/Events/Order-Options')}}>
            Order Options
            </button>

<button 
           id="second-sidebar-payment" style={{marginTop: '1rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setPayment(!payment); history('/Navigation/Events/Payments-and-Tax')}}>
            Payments & Tax
            </button>


            <button 
           id="second-sidebar-marketing" style={{marginTop: '1rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setMarketing(!marketing); history('/Navigation/Events/Marketing')}}>
            Marketing
            </button>
            <button 
          id="second-sidebar-manage-attendees" style={{ marginTop: '1rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setManage(!manage)}}>
            Manage Attendees
            </button>
            {manage && 
            <React.Fragment id="second-sidebar-extension">
              <div style={{fontSize: 'medium', paddingLeft: '1rem', lineHeight: '2rem'}}>
            <CustomLink to={`/Navigation/Events/Orders`}>Orders</CustomLink><br/>
            <CustomLink to={`/Navigation/Events/Attendee-Credits`}>Attendee Credits</CustomLink><br/>
            <CustomLink to={`/Navigation/Events/Add-Attendees`}>Add Attendees</CustomLink><br/>
            <CustomLink to={`/Navigation/Events/Attendee-List`}>Attendee List</CustomLink><br/>
            <CustomLink to={`/Navigation/Events/Check-in`}>Check-in</CustomLink><br/>
            <CustomLink to={`/Navigation/Events/Sold-Tickets`}>Sold Tickets</CustomLink>
            </div>
            
            </React.Fragment>
            }
          </div>
          </div>

    </div>
  );
};

export default SecondSidebar;
