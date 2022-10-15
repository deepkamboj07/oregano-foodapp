import { Route,Routes,Navigate } from "react-router-dom";
import { useState,useEffect, Fragment } from "react";
import {useDispatch ,useSelector} from "react-redux";
import { loginAction } from "./redux-store/auth-screen";
import { userDetail } from "./redux-store/userInfo";
import { sendCartData,fetchCartData } from "./redux-store/cartActions";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import HomePage from "./Pages/HomePage";
import History from "./Pages/History";
import Header from './components/HEADER/Header';

let start=true;
function App() {
  
  const uid=useSelector(state=>state.auth.user_id);
  let cart=useSelector(state=>state.cartHandler);

  const [splash,setsplash]=useState(false);
  const [userkey,setKey]=useState('false');
  const dispatch=useDispatch();

  useEffect(()=>{
      setsplash(true);
      setTimeout(() => {
        setsplash(false);
      }, 2000);
    const isUserLoged=localStorage.getItem('stayloged');
    if(start===false || isUserLoged==null || isUserLoged==='false')
    {
       
       return;
    }
    if(isUserLoged!=null &&isUserLoged==='true' )
    {
      let data=localStorage.getItem('User_loged_detail');
      data=JSON.parse(data);
      dispatch(loginAction.login({tokenId:data.tokenId, user_id:data.user_id}));

      const fetchUserData=async ()=>{
          const response =await fetch('https://food-application-7e370-default-rtdb.firebaseio.com/User.json');
          if(!response.ok)
          {
            throw new Error("erroe");
          }
          const database=response.json();
          return database;
        } 
          
         fetchUserData().then(database=>{
            for(const key in database)
            {
                if(uid===database[key].id)
                {
                    dispatch(loginAction.addKey(key));
                    setKey(key);
                    dispatch(userDetail.addinfo({u_name:database[key].detail.name,u_email:database[key].detail.email}));
                }
            }
         });
         if(userkey!=='false')
          {
            if(userkey!=='false')
            {
              dispatch(fetchCartData(userkey));
            }
            start=false;
          }
    }
  },[dispatch,uid,userkey]);


  useEffect(()=>{
    if(userkey!=='false' && start===false)
    {  
      sendCartData({cart:cart,key:userkey});   
    }
  })



  return (
    <Routes> 
      <Route path="/" exact element={<Navigate to="/home" replace />}/>
      <Route path="/home" exact element={
        <Fragment>
          <Header/>
          {splash && <SplashScreen/>}
          {!splash && <HomePage/>}
        </Fragment>
      }/>
      <Route path="/history" element={<Fragment><Header/><History/></Fragment>}/>
      <Route path="*" element={<Fragment><h1>Page Not Found</h1></Fragment>}/>
    </Routes>
  );
}

export default App;
