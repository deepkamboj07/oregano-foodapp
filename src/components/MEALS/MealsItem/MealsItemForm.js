import { useRef,useState } from "react";
import classes from "./MealsItemForm.module.css";
import InputButton from "../../UI/InputButton";
import { cartNotificationAction } from "../../../redux-store/cartNotification-slice";
import { useSelector , useDispatch} from "react-redux";
const MealsItemForm=(props)=>{

    const isLoged=useSelector((state)=>state.auth.isLogedin);
    const dispatch=useDispatch();

    const[valid,setValidation]=useState(false);
    const amountRef=useRef();
    const submitHandler=(evet)=>{
        evet.preventDefault();
        const quantity=amountRef.current.value;
        const numquantity=+quantity;
        if(quantity.trim().length===0 || numquantity < 1 || numquantity >5)
        {
            setValidation(true);
            return;
        }
        else{
            setValidation(false);
            props.addToCartHandler(numquantity);
            setTimeout(()=>{
                dispatch(cartNotificationAction.toogle());
            },2000);
            dispatch(cartNotificationAction.toogle());
        }
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {isLoged && <InputButton 
                ref={amountRef}
                label="Amount"input={{
                id:'amount_'+props.id ,
                type:'number',
                min:'1',
                max:'10',
                step:'1',
                defaultValue:'1'
                }}/>}
            {isLoged && <button>+ Add</button>}
            {valid && <p className={classes.valid}>Enter Valid quantity</p>}
        </form>
    )
}
export default MealsItemForm;