import logo from '../../assets/cover_oregano.jpg'
import Classes from '../HEADER/Header.module.css'
const Crousel=()=>{
    return(
        <div className={Classes['main-image']}>
                <div style={{backgroundImage:`url(${logo})`}}>
                    <h2>Oregano</h2>
                </div>
        </div>
    )
}
export default Crousel;