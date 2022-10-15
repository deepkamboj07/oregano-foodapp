import {Fragment, React} from "react";
import classes from "../CART/CartButton.module.css"
import CartIcon from "../../assets/CartIcon";
import {useDispatch,useSelector} from "react-redux";
import Cart from './Cart'
import CartNotification from "../Spinner/cartNotification";

import { toogleCart } from "../../redux-store/ui-cart-slice";
const CartButton=(props)=>{
    const showCart=useSelector(state=>state.cartshow.showCart);
    const cartQuantity=useSelector(state=>state.cartHandler.totalQuantity);
    const dispatch=useDispatch();

    const shownotification=useSelector(state=>state.cartNotification.show);
    const cartVisiblity=()=>{
        dispatch(toogleCart.toggleCart());
    }
    return (
        <Fragment>
            <button className={classes.button} onClick={cartVisiblity}>
                <span className={classes.icon}> <CartIcon/>  </span>
                <span className={classes.badge}>{cartQuantity}</span>
            </button>
            {shownotification && <CartNotification/>}
            {showCart && <Cart/>}
        </Fragment>
    )
}
export default CartButton;