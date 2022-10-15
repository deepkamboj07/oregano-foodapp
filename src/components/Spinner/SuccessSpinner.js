import Classes from './notification.module.css';
import suce from '../../assets/sucess.png'
import { Fragment } from 'react';
const SuccessSpinner=(props)=>{


    return(
        <Fragment>
            {
                props.spin &&
                <div className={'spinner-border text-success '+ Classes.circles} role="status">
                </div>
            }
            {
                !props.spin &&
                <div className={Classes.circlesim}>
                    <img src={suce} alt='sucess'/>
                    <h3>Your order is confirm</h3>
                </div>
                
            }
        </Fragment>
    )
}
export default SuccessSpinner;