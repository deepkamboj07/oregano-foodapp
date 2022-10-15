import classes from './Categories.module.css'
const CategoriesItem=(props)=>{
    const im=props.link;
    return(
        <div className={classes.item}>
            <div className={classes.imgcont}>
                <div style={{backgroundImage: `url(${im})`}}></div>
            </div>
            <div className={classes.textcont}>
                {props.name}
            </div>
        </div>
    )
}
export default CategoriesItem;