import { useState } from 'react';
import Classes from './AuthForm.module.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Modal from '../UI/Modal';
const AuthForm=(props)=>{
    const [loginForm,setLoginForm]=useState(true);

    const regisForm=()=>{
        setLoginForm(false);
    }
    const logForm=()=>{
        setLoginForm(true);
    }
    const closeForm=()=>{
        props.close();
    }
    const msg=loginForm?'Welcome Back to Oregano':'Hurry up! Yummy Dishes Waiting For You';
    return(
        <Modal onclose={props.close}>
            <div className={`${Classes.authContainer}`}>
                <h3>{msg}</h3>
                {loginForm && <LoginForm onclose={closeForm} change={regisForm}/>}
                {!loginForm && <RegisterForm change={logForm}/>}
            </div>
        </Modal>
    )
}
export default AuthForm;