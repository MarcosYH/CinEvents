import React from 'react'
import logo from '../../assets/logo.png';
import socialmedia from '../../assets/socialmedia.png'
import socialmedia2 from '../../assets/socialmedia3.png'
export default function Footer() {
    return (
        <footer className=" bg-slate-100 relative top-20">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">

                    <div className="text-center md:text-left">
                        <img
                            src={logo}
                            alt='logo'
                            className='mx-auto w-36 '
                        />
                        <p className="text-lg font-medium py-4">
                            CinEvents est une plateforme mondiale de billetterie en
                            libre-service pour des expériences en direct qui permet
                            à chacun de créer, partager, trouver et assister à des
                            événements qui alimentent ses passions et enrichissent sa vie.
                        </p>
                        <img
                            src={socialmedia}
                            alt='socialmedia'
                            className='mx-auto '
                        />
                    </div>

                    <div className="text-rigth py-10 px-28">
                        <h3 className="text-lg font-bold">Services</h3>
                        <p className="text-lg font-medium py-4 ">
                            Créer et configurer <br />
                            Vendre des tickets <br />
                            Payer des tickets<br />
                        </p>
                    </div>

                    <div className=" text-right md:text-left py-10  px-10">
                        <h3 className="text-lg font-bold">Informations</h3>
                        <p className="text-lg font-medium py-4 ">
                            A propos<br />
                            Contacter nous<br />
                            Centre d’aide<br />
                            Politique<br />
                            Confidntialité<br />
                        </p>
                    </div>

                    <div className="text-center md:text-left py-10">
                        <h3 className="text-lg font-bold">Contacter nous</h3>

                        <p className="text-lg font-medium py-4">
                            <img
                                src={socialmedia2}
                                alt='socialmedia'
                                className=' float-left py-2 '
                            />
                            <div className='px-10'>
                            <a href='/num'>+22969070735</a><br />
                            <a href='/mail'>CinEvents@mail.com</a> <br />
                            <a href='/location'>Cotonou-Bénin</a> 
                            </div>

                        </p>

                    </div>
                </div>
            </div>
        </footer>
    )
}
