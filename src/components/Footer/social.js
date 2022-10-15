import classes from './Footer.module.css'; 
const Social=()=>{
    return(
        <div className={classes.social}>
            <div>
                <i className='bx bxl-facebook-circle'></i>
            </div>
            <div>
                <i className='bx bxl-instagram'></i>
            </div>
            <div>
                <i className='bx bxl-twitter'></i>
            </div>
        </div>
    )
}
export default Social;