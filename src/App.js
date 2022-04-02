
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import GetNav from './Components/Navbar/Navbar';
import OneUser from './Components/OneUser/OneUser';
import Home from './Home/Home';
import Notfound from './Notfound/Notfound';
import Users from './Users/Users';


function App() {
  return (
    <div>
        <h1>Welcome to the Page</h1>
        
        
          <GetNav></GetNav>
          <Routes>
          
            <Route exact path = "/" element = {<Home></Home>}></Route>
            <Route path='/about' element = {<About></About>}></Route>
            <Route path='/users' element = {<Users></Users>}></Route>
            <Route path='/user' element = {<OneUser></OneUser>}></Route>
            <Route path = "*" element = {Notfound}></Route>
          </Routes>
        
        
      
      
      
      
      
    </div>
    
  );
}

export default App;
