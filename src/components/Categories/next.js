import classes from './Categories.module.css'
const Next=(props)=>{
    return(
        <div className={classes.item}>
            <div className={classes.next}>
                <span>
                <i className='bx bxs-chevron-right'></i>
                </span>
            </div>
        </div>
    )
}
export default Next;