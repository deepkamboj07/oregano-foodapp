import Classes from './order.module.css';
import SuccessSpinner from '../../Spinner/SuccessSpinner';
import { Fragment, useState } from 'react';
import { cartAction } from '../../../redux-store/cart-store';
import { useDispatch, useSelector } from 'react-redux';
import { sendBillData } from '../../../redux-store/bill-actions';
const OrderForm=(props)=>{
    const dispatch=useDispatch();
    //grab cart item and price
    const cart=useSelector(state=>state.cartHandler);

    const key=useSelector(state=> state.auth.user_key);

    const [error,setError]=useState(false);
    const [msg,setMsg]=useState("");
    const [adress,setadress]=useState("");
    const [city,setcity]=useState("Roorkee");
    const [phone,setphone]=useState("");
    const [payOption, selectpayOption]=useState("Google Pay");

    const [showSucces, setShowSucess]=useState(false);
    const [spin,setspin]=useState(true);

    const clas=`form-group ${Classes.cont}`;
    const addressHandler=(event)=>{
        setError(false);
        setadress(event.target.value);
    }
    const cityHandler=(event)=>{
        setError(false);
        setcity(event.target.value);
        console.log(event.target.value);
    }
    const numberHandler=(event)=>{
        setError(false);
        setphone(event.target.value);
    }
    const paymrntHandler=(event)=>{
        selectpayOption(event.target.value);
    }

    const refreshCart=()=>{
        dispatch(cartAction.replaceCart({items:[],totalQuantity:0,totalPrice:0}));
    }
   
    const submitHandler=(event)=>{
        event.preventDefault();

        if(adress.trim().length===0)
        {
            setError(true);
            setMsg("*Enter Your Address");
            return;
        }
        if(phone.trim().length===0)
        {
            setError(true);
            setMsg("*Enter Your Mobile Number");
            return;
        }
        if(phone.trim().length!==10)
        {
            setError(true);
            setMsg("Enter valid mobile number");
            return;
        }
        if(phone.trim().length===10)
        {
            const regexExp = /^[6-9]\d{9}$/gi;
            if(!regexExp.test(phone.trim()))
            {
                setError(true);
                setMsg("Enter valid mobile number");
                return;
            }
        }
        setShowSucess(true);
        setspin(true);
        const billData={
            item:cart.items,
            price:cart.totalPrice,
            quantity:cart.totalQuantity,
            payment:payOption,
            phone:phone,
            address:adress,
            city:city
        }
        
        try{
            
            const d=sendBillData({cart:billData,key:key});
            d.then(res=>{
                setspin(!res);
                if(res===false)
                {
                    setShowSucess(false);
                    setError(true);
                    setMsg("Server_Error Try after sometime.");

                }
                else
                {
                    refreshCart();
                }
            })
        }
        catch(err)
        {
            console.log(err);
            setShowSucess(false);
        }
        
        setadress("");
        setcity("city");
        setphone("");
    }

   
    return(
        <Fragment>
            {
                !showSucces &&
                <form onSubmit={submitHandler}>
                <div className={clas}>
                <div className={Classes.pay_cont}>
                    <select value={payOption} onChange={paymrntHandler} className="form-select">
                                <option value="Google Pay">Google Pay</option>
                                <option value="UPI">UPI</option>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>
                    
                </div>

                
                <div className={Classes.pay_cont}>
                
                    <input value={adress} onChange={addressHandler} className="form-control form-control-md" type="text" placeholder="Address"/>
                        <select value={city} onChange={cityHandler} className="form-select">
                            <option value="Roorkee">Roorkee</option>
                            <option value="Dehradun">Dehradun</option>
                            <option value="Haridwar">Haridwar</option>
                        </select>
                        <input value={phone} onChange={numberHandler} className="form-control form-control-md" placeholder="Phone No." type="number"/>
                </div>
            </div>
            {error && <p className={Classes.error}>{msg}</p>}
            
            <div className={Classes.total}>
                    <span>Total</span>
                    <span>₹{props.price}</span>
                </div>
                <div className={Classes.actions}>
                    <span className={Classes['button--alt']} onClick={props.close}>Close</span>
                    <button className={Classes.button} type='submit'>Confirm Order</button>
                </div>
        </form>
            }
            {
                showSucces &&
                <div className={Classes.showsuccont}>
                    <SuccessSpinner spin={spin}/>
                </div>
            }
        </Fragment>
    )
}
export default OrderForm;