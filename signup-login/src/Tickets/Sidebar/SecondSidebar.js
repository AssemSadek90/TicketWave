import React, { useState } from 'react';
import { FaBackward, FaBackspace, faBack } from 'react-icons/fa';
import SecondCustomNavLink from '../UI/SecondCustomNavLink';
import { useHistory } from 'react-router-dom';
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


  const history = useHistory();

//   const [activedIcon, setActivedIcon] = useState(null);


  const handleIconClick = (name) => {
    setActiveIcon(name);
  };

  const handleIconLeave = () => {
    setActiveIcon(null);
  };

  function CloseHandler(){
    history.push('/Events')
  }

//   const handleClick = (name) => {
//     setActivedIcon(name);
//     console.log(name)
//   };

  return (
    <div className="sidebar" style={{marginLeft: '5rem', width: '11rem', padding: '10px', position: 'fixed'}}>
      <div style={{width: '100%', backgroundColor: 'none', margin: '1rem', outline: 'none', border: 'none', color: 'rgb(77, 77, 224)', fontSize: 'medium', fontWeight: 'bold', paddingBottom: '1rem', borderBottom: '1px solid #ccc', paddingLeft: '1rem', alignItems: 'center', display: 'flex', flexDirection: 'row'}} onClick={CloseHandler}><div style={{fontSize: 'large', marginRight: '1rem'}}><FaBackward /></div><div>Back</div></div>
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

<CustomLink exact={false} to={`/Events/${item.name}`}>
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




      <div style={{ fontSize: '1.5rem', color: 'rgb(116, 116, 116)',  width: '100%', height: '80%', display: 'flex', borderRadius: '6px', overflow: 'hidden', marginTop: '1rem'}}
>
          <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <button 
          style={{height: '2rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setOptions(!options)}}>
            Dashboard
            </button>
          <button 
          style={{marginTop: '1rem', height: '2rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setOptions(!options)}}>
            Order Options
            </button>

<button 
          style={{marginTop: '1rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setPayment(!payment)}}>
            Payments & Tax
            </button>


            <button 
          style={{marginTop: '1rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setMarketing(!marketing)}}>
            Marketing
            </button>
            <button 
          style={{ marginTop: '1rem', fontSize: 'medium', border: 'none', cursor: 'pointer', height: '2rem', background: 'none', color: 'rgb(116, 116, 116)', textAlign: 'left'}} onClick={() => {setManage(!manage)}}>
            Manage Attendees
            </button>
          </div>
          </div>

    </div>
  );
};

export default SecondSidebar;
