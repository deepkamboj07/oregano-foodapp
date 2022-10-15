import { Fragment,useState} from "react";
import { useSelector } from "react-redux";
import Classes from '../HEADER/Header.module.css'
import CartButton from "../CART/CartButton";
import AuthForm from "../Auth/AuthForm";
import HomeProfile from "../Profile/HomeProfile";
import { Link } from "react-router-dom";
const Header=(props)=>{

    const isLogedin=useSelector(state=>state.auth.isLogedin);
    const userName=useSelector(state=>state.userInfo.name)
    

    const [loginForm,setLoginForm]=useState(false);
    const [profile,setProfile]=useState(false);
    const openForm=()=>{
        setLoginForm(true);
    }
    const closeForm=()=>{
        setLoginForm(false);
    }
    const openProfile=()=>{
        setProfile(!profile);
    }

    const first=userName.split(' ')[0];
    return <Fragment>
        <header className={Classes.header}>
            <Link to='/oregano-foodapp'><h1>Oregano</h1></Link>
            <div className={Classes.sign}>
                {isLogedin && <CartButton/>}
                {!isLogedin && <p onClick={openForm}>SignIn</p>}
                {isLogedin && <div className={Classes.profile} onClick={openProfile}><i className={'bx bxs-user-circle ' + Classes.ip}></i><label className={Classes.name_profile}>Welcome {first} <i className='bx bx-chevron-down'></i></label>
                    {profile && <HomeProfile onclose={openProfile}/>}</div>}
            </div>
        </header>
       
        {loginForm && <AuthForm close={closeForm}/>}
    </Fragment>
}
export default Header;