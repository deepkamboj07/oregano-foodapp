import classes from "./modal.module.css";
import { Fragment } from "react";
import ReactDOM from 'react-dom';

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const Overlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes}>{props.children}</div>
        </div>
    );
}
const portal=document.getElementById('overlay');
const Modal=(props)=>{
    return(
        <Fragment>
          {ReactDOM.createPortal(<Backdrop onClose={props.onclose}/>,portal)}
          {ReactDOM.createPortal(<Overlay className="overflow-auto">{props.children}</Overlay>,portal)}
        </Fragment>
    )
}
export default Modal;