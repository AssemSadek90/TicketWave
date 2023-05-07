import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom';

/** Functional component for the backdrop.
@param {Object} props - The props object for the component.
@param {Function} props.onClose - The function to handle the backdrop click.
@returns {JSX.Element} - The JSX element for the backdrop.
*/
function Backdrop(props){
    return <div className='body'><div className={classes.backdrop} onClick={props.onClose} /></div>
};

/** Functional component for the modal overlay.
@param {Object} props - The props object for the component.
@param {ReactNode} props.children - The children nodes of the component.
@returns {JSX.Element} - The JSX element for the modal overlay.
*/
function ModalOverlay(props){
    return (
        <div className='body'>
    <div className={classes.backdrop}>{props.children}
        </div>
        </div>
        ) 
};

const overlay = document.getElementById('overlay');

/** Functional component for the modal.
@param {Object} props - The props object for the component.
@param {Function} props.onClose - The function to handle the modal closing.
@param {ReactNode} props.children - The children nodes of the component.
@returns {JSX.Element} - The JSX element for the modal.
*/
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