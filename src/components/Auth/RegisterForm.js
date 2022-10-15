import { useRef,useState } from "react";
import { Fragment } from "react";
import './login.css';
import CircleSpinner from "../Spinner/CircleSpinner";
import google from '../../assets/google_png.png';

const RegisterForm=(props)=>{
    const [load,setLoad]=useState(false);
    const [error,setError]=useState(false);
    const [errormsg,setMsg]=useState();
    const nameInputHandler=useRef();
    const emailInputHandler=useRef();
    const passwordInputHandler=useRef();

    const regisRequest=()=>{
        props.change();
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        setLoad(true);
        const enterName=nameInputHandler.current.value;
        const enterEmail=emailInputHandler.current.value;
        const enterPass=passwordInputHandler.current.value;
        if(enterName.trim().length===0 || enterEmail.trim().length===0 || enterPass.trim().length===0)
        {
            setError(true);
            setLoad(false);
            setMsg('*All field are required');
            return;
        }
        else
        {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQQeJRIEiKrtcq8yGaPAAnO2tTRXngxHs',
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
            }).then((res)=>{
                if(res.ok)
                {
                    res.json().then(d=>{
                        fetch(`https://food-application-7e370-default-rtdb.firebaseio.com/User.json`,{
                            method:'POST',
                            body:JSON.stringify({
                                    id:d.localId,
                                    detail:{
                                        name:enterName,
                                        email:enterEmail
                                    }
                            }),
                            headers:{
                                'Content-Type':'application/json'
                            }
                        }).then((res)=>{
                            if(res.ok)
                            {
                                props.change();
                                return;
                            }
                            else
                            {
                                setLoad(false);
                                return res.json().then(data=>{
                                    console.log(data);
                                })
                            }
                        });
                    });
                }
                else
                {
                    setLoad(false);
                    return res.json().then(data=>{
                        if(data.error.message==='EMAIL_EXISTS')
                                setMsg('Email is already registered');
                        else
                            setMsg(data.error.message)
                        setError(true);
                    })
                }
            });
            setError(false);
        }
    }
    return(
        <Fragment>
            <form onSubmit={submitHandler}>
            <div id='form-cont' className="form-group">
                <input type="text" className="form-control"  placeholder="Enter Name" ref={nameInputHandler}/>
                <input type="email" className="form-control"  placeholder="Enter email" ref={emailInputHandler}/>
                <input type="password" className="form-control"placeholder="Password" ref={passwordInputHandler}/>
                <div>
                    { !load && <button type="submit" id='btn2' className="btn">Create account</button>}
                    {  load && <div className="spin"><CircleSpinner/></div>}
                </div>
                {error && <p id="error-in">{errormsg}</p>}
            </div>
            </form>
            <div id='regis-cont2'>
                        <span onClick={regisRequest} className='btn__hover__'>Already Have Account</span>
                    </div>
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
export default RegisterForm;