import classes from './Recent.module.css'
import RecentItem from './RecentItem';
const RecentLaunch=()=>{
    const clas=classes.contmain + " container";
    return(
        <div className={clas}>
            <h3>Try our new items</h3>
            <RecentItem/>
        </div>
    )
}
export default RecentLaunch;