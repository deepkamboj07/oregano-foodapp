import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../../redux-store/cart-store';
const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  const dispatch=useDispatch();
  const onRemove=()=>{
    dispatch(cartAction.removeItemFromCart(props.id));
  }
  const onAdd=()=>{
    dispatch(cartAction.addToCart({
            id:props.id,
            name:props.name,
            quantity:1,
            price:props.price
    }))
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h4>{props.name}</h4>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
