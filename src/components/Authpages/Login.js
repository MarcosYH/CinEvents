import React, { Component } from 'react'
import Imglogin from '../../assets/Imglogin4.png'
import logo from '../../assets/logo.png'
import "../../styles/Login.css" 
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="flex">

          <img
            src={Imglogin}
            alt='Imglogin'
            className="hidden sm:block w-1/2 h-screen"
          />

          <div className=" bg-white rounded-lg  p-6">
            <div className=' flex items-center justify-center'>
              <img
                src={logo}
                alt='logo'
                className='mx-auto logo '
              />
            </div>
            <h1 className="text-6xl font-semibold mb-4 py-5 text-justify px-24 hidden sm:block">Effectuez vos achat de <br />tickets en un rien de <br />temps.</h1>
            <p className="text-2xl text-gray-700 px-24">
              Inscrivez-vous gratuitement et facilité  vos achats de ticket
              dès aujourd'hui avec la meilleure plateforme de vente<br/> de ticket en ligne.
            </p>

            <form className=' py-16'>
              <div className="mb-4 px-24">
                <label htmlFor="email" className="block text-gray-700 font-medium text-lg mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-lg  py-2  input h-12"
                  placeholder='   votre@email.com'
                />
              </div>
              <div className="mb-4 px-24">
                <label htmlFor="password" className="block text-gray-700 font-medium text-lg mb-2">
                  Votre  mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded-lg px-3 py-2 input h-12"
                  placeholder='***************'
                />
              </div>
              <div className='flex flex-col'>
                <span className=' text-xl px-24'>
                  Vous n'avez pas de compte ?
                  <a className=' text-red-600 underline' href="/register">
                    S'inscrire
                  </a>
                </span>
              </div>

              <div className=" flex justify-center py-5">
                <button className=" bg-red-800 hover:bg-red-900 rounded-lg text-white text-lg font-bold py-2 px-4 mt-6">
                Connexion
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}
