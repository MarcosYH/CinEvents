import React, { Component } from 'react'
import video from "../../assets/video1.mp4"
import '../../styles/Describe.css'
import imgdesc from "../../assets/imgdesc.png";
import desc1 from'../../assets/desc1.png';
import { AiOutlineRight } from "react-icons/ai"
import point from '../../assets/pointpoint.png'
export default class Describe extends Component {
    render() {
        return (
            <>
             <div className='describe'>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:order-1 py-10 flex justify-center items-center">
                        <video src={video} controls className=' video1 py-10'></video>
                    </div>
                    <div className="md:order-2">
                        <div className=' py-10' >
                            <img
                                src={imgdesc}
                                alt='imgdesc'
                                className=" w-36 py-10"
                            />
                            <h1
                                className="text-5xl  font-medium mb-4 text-justify  hidden sm:block">
                                Réserver en un clic
                            </h1>
                            <p className="text-3xl text-gray-700">
                                Choissiser votre évènement ou film et acheter le <br />
                                nombre de ticket que vous désirer sans vous
                                déplacer !!        </p>
                        </div>
                        <button className="flex items-center space-x-1 space-y-1 text-gray-600">
                            <span className=' font-bold text-xl'>En savoir plus</span>
                            <AiOutlineRight size={30} />
                        </button>
                    </div>
                </div>
                <div className='flex justify-center items-center py-10'>
                <h1 className="text-5xl font-bold text-justify">
                Nous offrons les meilleurs services
              </h1>
                </div>
                <img src= {point} alt='point' className=' relative float-right'/>
                <div className=' flex items-center justify-center py-20'>
              <img src= {desc1} alt='desc' className=''/>
              </div>
             </div>
               
                
            </>
        )
    }
}
