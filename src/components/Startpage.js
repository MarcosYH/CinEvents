import React from 'react'
import Imgstart from "../assets/Imgstart.png"
import '../styles/Startpage.css'
function Startpage() {
    return (
        <>
           <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 py-40 px-24">
        <h1 className="text-7xl font-bold mb-4">Réservez votre place dès maintenant !</h1>
        <p className="text-4xl text-gray-700">
        Laissez-nous vous aider à créer des souvenirs magiques : réservez aujourd'hui et acheter facilement les tickets de vos évènements et films cinéma en étant chez vous.
        </p>
        <div className=" py-7">
        <button className=" bg-red-800 hover:bg-red-900 rounded-lg text-white text-2xl font-bold py-2 px-4 mt-6">
          Commencer
        </button>
      </div>
      </div>
      <div className="imgstart hover:animate-pulse rounded-md">
      <img src={Imgstart} alt="imgstart" className=" w-full py-32" />
      </div>
    </div>
        </>
    );

}
export default Startpage;
