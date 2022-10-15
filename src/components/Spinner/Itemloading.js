import { Fragment } from 'react';
import Classes from './Itemloading.module.css';
const Itemloading=()=>{
    return(
        <Fragment>
            <div className={Classes.loadcont}>
            <label className={Classes.label}></label>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <div className={Classes.total}>
                    <label></label>
                </div>
            </div>
        </div>

        <div className={Classes.loadcont}>
            <label className={Classes.label}></label>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <div className={Classes.total}>
                    <label></label>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default Itemloading;