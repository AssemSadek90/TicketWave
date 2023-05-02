import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom';

function Backdrop(props){
    return <div className='body'><div className={classes.backdrop} onClick={props.onClose} /></div>
};

function ModalOverlay(props){
    return (
        <div className='body'>
    <div className={classes.backdrop}>{props.children}
        </div>
        </div>
        ) 
};

    const overlay = document.getElementById('overlay');

function Modal(props){
    return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlay)}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
         overlay)}
    </Fragment>
    )
}

export default Modal;