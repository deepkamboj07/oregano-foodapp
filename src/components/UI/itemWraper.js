
import classes from "./ItemCard.module.css";
const ItemWraper=(props)=>{
    return <div  className={classes.wrapper}>
        {props.children}
    </div>
}
export default ItemWraper;