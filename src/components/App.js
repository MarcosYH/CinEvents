import React from "react";
import Cinema from "./Cinema";
// import Navbar from '../components/LandingComponents/Navbar'
import {HashRouter as Router, Route, Routes,} from 'react-router-dom';
import Error from "./Error";
import Evenement from "./Evenement";
import Landingpage from "./Landingpage";
import Register from "./Authpages/Register";
import Pagestart from "./Authpages/Pagestart";
import Login from "./Authpages/Login";

function App() {
  return (

    <Router>
    <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Evenement" element={<Evenement/>} />
        <Route path="/Cinema" element={<Cinema />} />
        <Route path="/Start" element={<Pagestart/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
</Router>

    // <div>

    //   <Navbar />
    //   {/* <Landingpage />*/}
    //   {/* <Evenement/> */}
    //   <Cinema />
    //   {/* <Pagestart/>
    //     <Login/>
    //     <Register/> */}

    // </div>
  );
}

export default App;
