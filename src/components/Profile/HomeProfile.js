import Classes from './HomeProfile.module.css';
import { useDispatch} from 'react-redux';
import { loginAction } from '../../redux-store/auth-screen';
import { Link } from 'react-router-dom';

const HomeProfile=(props)=>{
    const dipatch=useDispatch();
    const logoutHandler=()=>{
        localStorage.removeItem('stayloged');
        localStorage.removeItem('User_loged_detail');
        dipatch(loginAction.logout());
        props.onclose();
        window.location.replace('/');
    }

    return(
        <div className={Classes.profile_cont}>
            <ul>
                <Link to='/history'><li><span><i className='bx bx-history'></i>User Account</span></li></Link>
                <li onClick={logoutHandler}><span><i className='bx bx-log-out-circle'></i>Logout</span></li>
            </ul>
        </div>
    )
}
export default HomeProfile;