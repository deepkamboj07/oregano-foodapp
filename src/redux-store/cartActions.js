import { cartAction } from "./cart-store";


export const fetchCartData=(key)=>{
    return async (dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch(`https://food-application-7e370-default-rtdb.firebaseio.com/User/${key}/cart.json`);
            if(!response.ok)
            {
              throw new Error('some thing wrong');
            }
            else
            {
              const data=await response.json();
                return data;
            }
        }

        try{
            const cart=await fetchData();
            dispatch(cartAction.replaceCart(cart));
        }catch(err){
            console.log(err);
        }
    }
}

export const sendCartData = (data) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://food-application-7e370-default-rtdb.firebaseio.com/User/${data.key}/cart.json`,
        {
          method: 'PUT',
          body: JSON.stringify(data.cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try{
       sendRequest();
    }
    catch(err){
          console.log(err);
    }
};