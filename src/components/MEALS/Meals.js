import React from "react";
import classes from "./AvailableMeals.module.css";
import AvailableMeals from "./AvailableMeals";
const Meals=(props)=>{
    return(
        <React.Fragment>
            <div className={classes.headline}>
                <h3>Try Our New Dishes</h3>
            </div>
            <AvailableMeals/>
        </React.Fragment>
    )
}
export default Meals;