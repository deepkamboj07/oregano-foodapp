import Classes from './HistoryItem.module.css';

const HistoryItem=(props)=>{
    const liItem=props.items.map(item=><li key={item.id}><span>{item.name}</span> <span className={Classes.info}> {item.quantity} X  ₹{item.price}</span></li>)
    return(
        <div className={Classes.itemcont}>
            <div>
                <label className={Classes.id}>Order Id: {props.id}</label>
            </div>
            <div>
                <ul>
                    {liItem}
                </ul>
                <div className={Classes.total}>
                 <label>Total Price : ₹{props.price}</label>
                </div>
            </div>
        </div>
    )
}
export default HistoryItem;