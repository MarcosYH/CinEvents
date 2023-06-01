import React from 'react'
import Navbar from '../components/LandingComponents/Navbar'
import Headers from './LandingComponents/Header';
import Describe from './LandingComponents/Describe';
function Landingpage() {

    return (
        <div>
            <Navbar />
            <Headers/>
            <Describe/>
        </div>
    );
}
export default Landingpage;
