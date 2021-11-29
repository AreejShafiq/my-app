import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Cards 
    Image1="https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    Text="Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets....."
    Title="Pasta"

    Image2="https://media.istockphoto.com/photos/kuzhimanthi-or-spicy-manthi-arabic-chicken-biryani-picture-id1265414381?b=1&k=20&m=1265414381&s=170667a&w=0&h=Gcdfe9sRaHTiANtobMC7rOcdR8v_6h5kTAcwSR5zdWQ=" 
    Text2="The word Biryani is derived from the Persian word Birian, which means 'fried before cooking' and Birinj, the Persian word for rice. "
    Title2="Biryani"

    Image3="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    Text3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae "
    Title3="Pizza"
 />

<Footer/>

    </div>
  );
}

export default App;
