export const sendBillData = (data) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://food-application-7e370-default-rtdb.firebaseio.com/User/${data.key}/bills.json`,
        {
          method: 'POST',
          body: JSON.stringify(data.cart),
          headers:{
            'Content-Type':'application/json' 
          }
        }
      );
      if (!response.ok) {
        return false;
      }
      else return true;
    };
    
    try{
       return sendRequest();
    }
    catch(err){
          return false;
    }
};

// export const fetchBillData=(key)=>{
//   return async ()=>{
//       const fetchData=async()=>{
//           const response=await fetch(`https://food-application-7e370-default-rtdb.firebaseio.com/User/${key}/bills.json`);
//           if(!response.ok)
//           {
//             throw new Error('some thing wrong');
//           }
//           else
//           {
//             const data=await response.json();
//               return data;
//           }
//       }

//       try{
//           const cart=await fetchData();
//           console.log(cart);
//       }catch(err){
//           console.log(err);
//       }
//   }
// }