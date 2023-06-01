import React from 'react'
import Imgheader from '../../assets/Imgheader5.png'
import Fondheader from '../../assets/Fondheader5.png'
import '../../styles/Header.css'
function Header() {
    const headerStyle = {
        backgroundImage: `url(${Fondheader})`,
      };
    return (
        <header className=" bg-no-repeat" style={headerStyle}>
    
      <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 py-40 px-24">
                    <h1 className=" sm:text-2xl md:text-6xl lg:text-6xl font-bold mb-4">Réservez vos tickets pour les événements et films les plus en vogue !</h1>
                    <p className="sm:text-lg md:text-xl lg:text-3xl  text-gray-700">
                        Vivez une expérience de salle unique...<br/> Assurez-vous dès à présent une place !
                    </p>
                    <div className=" py-7">
                        <button className=" bg-red-800 hover:bg-red-900 rounded-lg text-white text-xl font-bold py-2 px-4 mt-6">
                            Réserver
                        </button>
                    </div>
                </div>
                <div className=" rounded-md ">
                    <img 
                    src={Imgheader} 
                    alt="Imgheader" 
                    className=" w-auto hidden sm:block py-20 px-10" />
                </div>
            </div>
    </header>
        
        
    )
};
export default Header;
