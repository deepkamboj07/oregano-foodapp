// import Cart from "../components/CART/Cart";
// import CartProvider from "../store/CartProvider";
// import SplashScreen from "../components/SplashScreen/SplashScreen";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Crousel from "../components/HEADER/Crousel";
import Meals from '../components/MEALS/Meals'
const HomePage=()=>{
  
  // const [isCartOpen, setCartVisiblity]=useState(false);
  // const showCartHandler=()=>{
  //     setCartVisiblity(true);
  // }
  // const hideCartHandler=()=>{
  //   setCartVisiblity(false);
  // }

  return (
      <div>
        <main>
            <Crousel/>
            <Categories/>
            <Meals/>
        </main>
        <Footer/>
      </div>
  );
};

export default HomePage;