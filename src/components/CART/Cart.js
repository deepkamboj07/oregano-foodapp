import classes from './cart.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { toogleCart } from '../../redux-store/ui-cart-slice';
import {useState,Fragment} from 'react';
import OrderForm from './OrderForm/OrderForm';
import CartItem from './CartItem/CartItem';
import Modal from '../UI/Modal';
const Cart=(props)=>{
    const dispatch=useDispatch();
    const cartdata=useSelector(state=>state.cartHandler.items);
    const totalPrice=useSelector(state=>state.cartHandler.totalPrice);
    const [showForm, setShowForm]=useState();
    const closeButton=()=>{
        dispatch(toogleCart.toggleCart());
    }

    const onsubmitHandler=()=>{
        setShowForm(true);
    }

    const data=cartdata.map(item=>(<CartItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price}></CartItem>));
    return(
            <Modal onclose={closeButton}>
                { !showForm && <ul className={classes.list}>
                {data}
                </ul> }
                {showForm && <OrderForm price={totalPrice} close={closeButton} cartitem={cartdata}/>}
                {!showForm && <Fragment>
                    <div className={classes.total}>
                        <span>Total</span>
                        <span>₹{totalPrice}</span>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes['button--alt']} onClick={closeButton}>Close</button>
                        {data.length>0 && <button className={classes.button} onClick={onsubmitHandler}>Order</button>}
                    </div>
                </Fragment>}
            </Modal>
        )
}
export default Cart;