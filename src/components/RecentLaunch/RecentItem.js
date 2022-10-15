import Recent_Meal from "./recentMeal";
import RecentCard from "./RecentCard";
import React from "react";
const RecentItem=()=>{
    return(
        <React.Fragment>
            <RecentCard image={Recent_Meal[0].img} name={Recent_Meal[0].name} description={Recent_Meal[0].description} price={Recent_Meal[0].price}/>
        </React.Fragment>
    )
}
export default RecentItem;