import "./styles.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Order from "./Pages/Order";
import Thanku from "./Pages/Thanku";

function App() {
      return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Shop' element={<Shop/>}/>
         <Route path='/Order' element={<Order/>}/>
         <Route path='/Thanku' element={<Thanku/>}/>
        </Routes>
        </BrowserRouter>
        
  );
}

export default App;