import {React} from "react";
import classes from "./ItemCard.module.css";
import MealsItemForm from "../MEALS/MealsItem/MealsItemForm";
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux-store/cart-store";
const ItemCard=(props)=>{
    const img=props.image;
    const price=`₹${props.price.toFixed(2)}`
    const dispatch=useDispatch();
   
    
    const AddtoCartHandler=(quantity)=>{
        dispatch(cartAction.addToCart({
            id:props.id,
            name:props.name,
            quantity:quantity,
            price:props.price
        }))
    }
    return(
        <div className={classes.itemcard}>
            <div className={classes['img-container']}>
                <img src={img} alt='Delicious Food'/>
            </div>
            <div className={classes['cont-body']}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                <div>
                    <MealsItemForm addToCartHandler={AddtoCartHandler}/>
                </div>
            </div>
        </div>
    );
}
export default ItemCard;