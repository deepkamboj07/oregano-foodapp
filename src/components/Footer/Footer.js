import classes from './Footer.module.css'; 
import FooterHeader from './FooterHeader';
import FooterMain from './FooterMain';
const Footer=()=>{
    return(
        <footer className={classes.footer}>
            <FooterHeader/>
            <FooterMain/>
            <div className={classes.line}></div>
            <p>&#169; Oregano, All rights reserved. <br/>This is just a fake website. All the products and contact details given are not real.</p>
        </footer>
    )
}
export default Footer;