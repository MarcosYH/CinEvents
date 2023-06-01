import React from 'react'
import Footer from './LandingComponents/Footer';
import Newsletter from './LandingComponents/Newsletter';
import Article from './LandingComponents/Article';
import Navbar from '../components/LandingComponents/Navbar'
import Headers from './LandingComponents/Header';
import Describe from './LandingComponents/Describe';
function Landingpage() {

    return (
        <div>
            <Navbar />
            <Headers/>
            <Describe/>
            <Article/> 
            <Newsletter/>
            <Footer/>
        </div>
    );
}
export default Landingpage;
