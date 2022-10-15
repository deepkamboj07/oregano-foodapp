import classes from './InputError.module.css';
const InputError=(props)=>{
    return(
        <div className={classes.error_cont}>
            <p>{props.message}</p>
        </div>
    )
}
export default InputError;