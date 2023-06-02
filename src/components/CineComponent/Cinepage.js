import React from 'react'
import videofilm from "../../assets/Fast-X.mp4"
import cineticket from "../../assets/cineticket.png"
import '../../styles/Cinepage.css'
import productsDataCine from '../../components/datas/Cinedata'
import Footer from '../LandingComponents/Footer';
export default function Cinepage() {
    return (
        <div>
            <h1 className="text-6xl text-center font-bold mb-4 py-28">Trouver le film que vous désirer<br /> et acheter votre ticket !</h1>
            <div className="grid grid-cols-2 gap-4 px-60">
                <div className="">
                    <video
                        src={videofilm}
                        controls
                        className="video2 "
                    ></video>
                </div>
                <div className="">
                    <img src={cineticket} alt="Cineticket" className=" w-auto " />
                </div>
            </div>
            <div className=' flex items-center justify-center py-20'>
                <div className="flex items-center justify-center shadow-md p-8 w-auto rounded-full space-x-10">

                    <div className='flex flex-col'>
                        <label htmlFor="Ville" className="mb-2">
                            Ville
                        </label>
                        <select className="border border-gray-300 rounded-sm w-60 mr-2 h-10 ">
                            <option> Selectionner une ville </option>
                        </select>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="Date" className="mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className='flex flex-col relative top-4 '>
                        <button className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded">
                            Rechercher
                        </button>
                    </div>

                </div>

            </div>
            <div className='flex justify-center py-10 space-x-96' >
                <div className="grid grid-cols-3 gap-10 ">
                    {productsDataCine.map((product) => (
                        <div key={product.id} className="bg-white shadow-md p-4 rounded-xl flex flex-col space-y-2 relative">
                            <div className="aspect-w-full aspect-h-9">
                                <video
                                    src={product.video}
                                    title="Bande d'annonce"
                                    controls
                                    className='w-full'
                                ></video>
                            </div>
                            <h3 className="text-lg font-bold mt-4">{product.nom}</h3>
                            <p className="text-black font-bold text-xl">Date:  <span className=' text-lg font-semibold '>{product.date}</span></p>
                            <p className="text-black font-bold text-xl">Lieu: <span className=' text-lg font-semibold '>{product.lieu}</span></p>
                            <p className="text-black font-bold text-xl">Nombre de tickets: <span className=' text-lg font-semibold '>{product.nombreTickets}</span></p>
                            <button className=" bg-red-700 hover:bg-red-900 rounded-lg text-white text-xl font-bold py-2 px-4 mt-auto">
                                Réserver
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer/>

        </div>
    )
}
