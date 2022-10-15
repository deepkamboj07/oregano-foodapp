import {React} from "react";
//import Card from "../UI/Card";
//import classes from "./AvailableMeals.module.css";
// import MealsItem from "./MealsItem/MealsItem";
import ItemWraper from "../UI/itemWraper";
import ItemCard from "../UI/ItemCard";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Panner Tikka',
      description: 'Fry Panner with delicious cream',
      img:'https://krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-04.jpg',
      price: 170,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      img:'https://veganonboard.com/wp-content/uploads/2020/09/vegan_schnitzel-8.jpeg',
      price: 190,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      img:'https://spicysouthernkitchen.com/wp-content/uploads/bbq-burger-23.jpg',
      price: 80,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      img:'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/02/14/47779/Ultra-Green-Bowl.jpg?width=768&height=639&mode=crop&quality=75&anchor=middlecenter',
      price: 120,
    },
    {
      id: 'm5',
      name: 'Momoes',
      description: 'Steam Momo with meonise',
      img:'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/m/p/p72227-15749350095ddf99e165e92.jpg?tr=tr:n-medium',
      price: 99,
    }
  ];

 const AvailableMeals=(props)=>{
    
    const meal=DUMMY_MEALS.map(m=><ItemCard key={m.id} id={m.id} image={m.img} name={m.name} description={m.description} price={m.price}/>);
    return (
                <ItemWraper>
                    {meal}
                </ItemWraper>
    );
 }
 export default AvailableMeals;
