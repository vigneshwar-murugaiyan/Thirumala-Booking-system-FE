import {
  Routes,Route,
}from "react-router-dom";
import Home from "./pages/home/Home"; 
import List from "./pages/home/list/List";
import Booking from "./pages/home/booking/Booking";
import Signup from "./components/Signuppage/Signup";
import Login from "./components/Loginpage/Login";
import Calculator from "./components/Calculator/Calculator";

import LoginButton from "./components/Loginpage/Login";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId ="929003680891-119jtisrogokacs0dk5muu6qs8ohke4k.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };
    gapi.load('client:auth2', start);
  });

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookings" element={<List/>}/>
        <Route path="/bookings/:id" element={<Booking/>}/>
        <Route path ="/S" element={<Signup/>}/>
        <Route path ="/l" element={<LoginButton/>}/>
        <Route path ="/T" element={<Calculator/>}/>
      </Routes>
     
  )
}


export default App;
