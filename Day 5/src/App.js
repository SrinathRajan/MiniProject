import "./styles.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";



function App() {
      return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Product' element={<Product/>}/>
        </Routes>
        </BrowserRouter>
        
  );
}

export default App;