import classes from './Categories.module.css'
import CategoriesItem from "./CategoriesItem";
import ItemWraper from '../UI/itemWraper';
import Next from './next';
const Categories=()=>{

    const item=[
        {
            id:'1',
            name:'Brekfast',
            link:'https://firebasestorage.googleapis.com/v0/b/food-application-7e370.appspot.com/o/breakfast1.jpg?alt=media&token=8c742759-2171-4f6b-a231-bb824c8a7e25'
        },
        {
            id:'2',
            name:'Chinease',
            link:'https://firebasestorage.googleapis.com/v0/b/food-application-7e370.appspot.com/o/chin.jpg?alt=media&token=84c594db-e007-4caf-9024-56d968bebf21'
        },
        {
            id:'3',
            name:'Itellian',
            link:'https://firebasestorage.googleapis.com/v0/b/food-application-7e370.appspot.com/o/itellian.jpg?alt=media&token=038c2ffa-1aef-400b-ad46-7cb3b3c4dbd5'
        },
        {
            id:'4',
            name:'Dessert',
            link:'https://firebasestorage.googleapis.com/v0/b/food-application-7e370.appspot.com/o/desert.jpg?alt=media&token=8800b842-a098-4bcc-8dee-7f80f0a08104'
        }
    ]
    const clas=classes.contmain + " container";
    const Data=item.map(d=><CategoriesItem key={d.id} link={d.link} name={d.name}></CategoriesItem>)
    return(
        <div className={clas}>
            <h3>Food's Categories</h3>
            <ItemWraper>
                {Data}
                <Next/>
            </ItemWraper>
        </div>
    )
}
export default Categories;