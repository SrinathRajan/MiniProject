

import "./styles.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Pages/Login";


function App() {
      return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/Home' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;