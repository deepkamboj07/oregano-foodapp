import '../index.css';
import HistoryProfile from '../components/Profile/HistoryProfile';
import Footer from '../components/Footer/Footer';
import { Fragment } from 'react';
const History=()=>{
    return (
        <Fragment>
            <div className="history_container">
            <HistoryProfile/>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default History;