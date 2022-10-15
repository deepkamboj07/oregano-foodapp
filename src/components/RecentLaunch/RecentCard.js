import {React} from "react";
import classes from "../UI/ItemCard.module.css";
//simport cartContext from "../../store/cart-context";
const RecentCard=(props)=>{
     const img=props.image;
     const price=`$${props.price.toFixed(2)}`

    //const ctx=useContext(cartContext);
    // const AddtoCartHandler=(quantity)=>{
    //     ctx.addItem({
    //         id:props.id,
    //         name:props.name,
    //         quantity:quantity,
    //         price:props.price
    //     })
    // }
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
            </div>
        </div>
    );
}
export default RecentCard;