import React from 'react'
import fondnewsletter from '../../assets/fondnewsletter.png'
import '../../styles/Newsletter.css'
export default function Newsletter() {
    const Newsletter = {
        backgroundImage: `url(${fondnewsletter})`,
      };
    return (
        <div className='newsletter'>
            <div className='flex flex-col justify-center items-center py-20 bg-center bg-no-repeat' style={Newsletter}>
                <span className="text-4xl text-black font-medium  text-center flex px-10 py-3">
                    Abonnez-vous pour obtenir des informations, les dernières <br /> nouvelles et d'autres<br />
                    offres intéressantes sur CinEvents
                </span>
                <div className=" py-3 flex-auto">
                    <label 
                    htmlFor="email" 
                    className=" text-gray-700 font-medium text-lg relative top-4">
                        Email
                    </label>
                    <div className=" space-x-4">
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded-lg input2 py-2 w-96  h-12"
                        placeholder=' votre@email.com'
                    />
                    <button className=" bg-red-700 hover:bg-red-900 rounded-lg text-white text-lg font-bold py-2 px-4 mt-6">
                    S'inscrire
                            </button>
                        </div>
                </div>
                
            </div>
        </div>
    )
}
