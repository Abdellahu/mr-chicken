import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from './Components/Contact/Contact';
import { Brightness } from './Components/Header/Brightness';
import SharedLayout from './Components/SharedLayout';
import DishDataProvider from './Components/Menu/DishDataProvider';

function App({ }) {
  
  return (
       
    <Brightness>  
        <Routes>
          <Route path='/' element={<SharedLayout /> }>
              <Route index element={<Home />}/> 
              <Route path="menu/" element={<Menu />}/> 
              <Route path="about/" element={<About />}/> 
              <Route path="contact/" element={<Contact />}/> 
          </Route>
        </Routes>
      </Brightness>
  );
}

export default App;
