import classes from './Footer.module.css'; 
import Social from './social';
const FooterMain=()=>{
    return(
        <div className={classes.main}>
            <div>
                <h5>ABOUT OREGANO</h5>
                <div className={classes.list}>
                    <p>Who we are</p>
                    <p>Blog</p>
                    <p>Work with us</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div>
                <h5>OTHER RESTAURANTS</h5>
                <div className={classes.list}>
                    <p>Olivia</p>
                    <p>Rustic</p>
                </div>
            </div>
            <div>
                <h5>LEARN MORE</h5>
                <div className={classes.list}>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Terms</p>
                </div>
            </div>
            <div>
                <h5>SOCIAL LINKS</h5>
                <Social/>
                <div>
                    <button className='btn btn-dark'><i className='bx bxl-play-store'></i> Download App</button>
                </div>
                <button className='btn btn-dark'><i className='bx bxl-apple'></i> Download App</button>
            </div>
        </div>
    )
}
export default FooterMain;