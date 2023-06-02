import React from 'react'
import fondnewsletter from '../../assets/fondnewsletter.png'
import '../../styles/Newsletter.css'
export default function Newsletter() {
    const Newsletter = {
        backgroundImage: `url(${fondnewsletter})`,
      };
    return (
        <div className='newsletter'>
            <div className='flex flex-col justify-center items-center py-24 bg-center bg-no-repeat' style={Newsletter}>
                <span className="text-4xl text-black font-medium  text-center flex px-10 py-3">
                    Abonnez-vous pour obtenir des informations, les dernières <br /> nouvelles et d'autres<br />
                    offres intéressantes sur CinEvents
                </span>
                <div className=" flex flex-col py-3">
                    <label 
                    htmlFor="email" 
                    className=" text-gray-700 font-medium text-lg relative">
                        Email
                    </label>
                    <div className="flex w-96 space-x-6">
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded-lg py-2 w-full  h-12"
                        placeholder=' votre@email.com'
                    />
                    <button className=" bg-red-700 hover:bg-red-900 rounded-lg text-white text-lg font-bold py-2 px-4">
                    S'inscrire
                            </button>
                        </div>
                </div>
                
            </div>
        </div>
    )
}
