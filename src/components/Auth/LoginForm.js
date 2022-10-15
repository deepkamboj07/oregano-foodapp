import { Fragment ,useRef,useState} from 'react';
import { useDispatch } from 'react-redux';
import google from '../../assets/google_png.png';
import CircleSpinner from '../Spinner/CircleSpinner';
import {loginAction} from '../../redux-store/auth-screen';
import './login.css';
const LoginForm=(props)=>{

    const [load,setLoad]=useState(false);
    const [error,setError]=useState(false);
    const [errormsg,setMsg]=useState();

    const dipatch=useDispatch();

    const enterEmailRef=useRef();
    const enterPassRef=useRef();
    const regisRequest=()=>{
        props.change();
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const enterEmail=enterEmailRef.current.value;
        const enterPass=enterPassRef.current.value;
        setLoad(true);

        if(enterEmail.trim().length===0 || enterPass.trim().length===0)
        {
            setLoad(false);
            setError(true);
            setMsg('*Credential Required');
            return;
        }
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQQeJRIEiKrtcq8yGaPAAnO2tTRXngxHs',
        {
            method:'POST',
            body:JSON.stringify({
                email:enterEmail,
                password:enterPass,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((ref)=>{
            if(ref.ok)
            {
               return ref.json();
            }
            else
            {
                return ref.json().then(data=>{
                    throw new Error(data.error.message);
                })
            }
        }).then((data)=>{     
            dipatch(loginAction.login({tokenId:data.idToken, user_id:data.localId}));
            localStorage.setItem('stayloged',true)
            localStorage.setItem('User_loged_detail',JSON.stringify({tokenId:data.idToken,user_id:data.localId}));
             props.onclose();
        }).catch(err=>{
                    setMsg(err.message);
                    setLoad(false);
                    setError(true);
        })
        setError(false);
    }
    return (
        <Fragment>
            <form onSubmit={submitHandler}>
            <div id='form-cont' className="form-group">
            <input type="email" className="form-control"  placeholder="Enter email" ref={enterEmailRef}/>
            <input type="password" className="form-control"placeholder="Password" ref={enterPassRef}/>
            <div>
                {!load && <button type="submit" id='btn' className="btn">SignIn</button>}
                {  load && <div className="spin"><CircleSpinner/></div>}
                {error && <p id="error-in">{errormsg}</p>}
            </div>
            <div id='regis-cont'>
                <span onClick={regisRequest} className='btn__hover__'>Register</span>
                <span className='btn__hover__'>Forget Password</span>
            </div>
            </div>
        </form>

        <div className="or-dash">
                <div/>
                    or
                <div/>
            </div>
            <div>
                <button className="btn btn-google"><img id="ggle_" src={google} alt="google"/>Continue with Google</button>
            </div>
            
        </Fragment>
    )
}
export default LoginForm;