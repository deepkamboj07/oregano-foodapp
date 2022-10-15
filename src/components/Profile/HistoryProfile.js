import { Fragment, useEffect } from "react"
import { useState } from "react";
import HistoryItem from "./HistoryItem"
import Classes from './HistoryItem.module.css';
import { useSelector } from "react-redux";
import Itemloading from '../Spinner/Itemloading';
let start=false;
const HistoryProfile=()=>{

    const ukey=useSelector(state=>state.auth.user_key);
    const[billdata,setBillData]=useState([]);
    const[show,setshow]=useState(true);

    const isUserLoged=localStorage.getItem('stayloged');
    //console.log(isUserLoged);
    const fetchData=async (key)=>{
        const response=await fetch(`https://food-application-7e370-default-rtdb.firebaseio.com/User/${key}/bills.json`);
        if(!response.ok)
        {
            setshow(false);
            return false;
        }
        else
        {
            setshow(false);
            return response.json();
        }
    }
    let databill=false;
    useEffect(()=>{

        if(isUserLoged===null || !isUserLoged)
        {
            window.location.replace('/');
            return;
        }
        try {
            if(ukey!=="" && ( !start || billdata.length ===0))
            {
                const data=fetchData(ukey);
                data.then(d=>{
                    const bills=[];
                    for(const key in d)
                    {
                        const bill={
                            id:key,
                            item:d[key].item,
                            price:d[key].price,
                        }
                        bills.push(bill);
                    }
                    if(bills.length >0)start=true;
                    setBillData(bills);
                })
            }
        } catch (error) {
            console.log(error);
        }
    })

    if(billdata.length>0){
        //console.log(billdata);
        //setshow(false);
        billdata.reverse();
       databill=billdata.map(bill=>(<HistoryItem key={bill.id} id={bill.id} items={bill.item} price={bill.price}/>));
    }
    return(
        <Fragment> 
            {
                (show)?<Itemloading/> :(databill===false)?<div className={Classes.notfound}><h4>No Order Found</h4></div>:<div className={Classes.maincont}>
                <h3>My Orders</h3>
                <hr/>
                {databill}
                </div>
                
            }

        </Fragment>
    )
}
export default HistoryProfile;