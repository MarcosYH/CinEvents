import React from 'react'
import logo from '../../assets/logo.png'
import '../../styles/Register.css'
function Register() {

    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                
                <div className=" bg-white rounded-lg  p-6">
                    <div className=' flex items-center justify-center'>
                        <img
                            src={logo}
                            alt='logo'
                            className='mx-auto logo '
                        />
                    </div>
            <span className="text-4xl text-gray-700 font-medium flex px-10 py-3">
                    Commencer avec CinEvents 
            </span>

                    <form className=''>
                        <div className="mb-4 py-3">
                            <label htmlFor="email" className="block text-gray-700 font-medium text-lg mb-2">
                            Nom
                            </label>
                            <input
                                type="text"
                                id="Nom"
                                className="border border-gray-300 rounded-lg input2 py-2  h-12"
                                placeholder=' Entrer un nom'
                            />
                        </div>
                        <div className="mb-4 py-3">
                            <label htmlFor="email" className="block text-gray-700 font-medium text-lg mb-2">
                            Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="border border-gray-300 rounded-lg input2 py-2  h-12"
                                placeholder='   votre@email.com'
                            />
                        </div>
                        <div className="mb-4 py-3">
                            <label htmlFor="password" className="block text-gray-700 font-medium text-lg mb-2">
                            Mots de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="border border-gray-300 rounded-lg input2 px-3 py-2 h-12"
                                placeholder='***************'
                            />
                        </div>
                        <div className="mb-4 py-3">
                            <label htmlFor="password" className="block text-gray-700 font-medium text-lg mb-2">
                            Confirmé le mots de passe
                            </label>
                            <input
                                type="password"
                                id="confirmepassword"
                                className="border border-gray-300 rounded-lg input2 px-3 py-2 h-12"
                                placeholder='***************'
                            />
                        </div>
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                                <input className="mr-1" type="checkbox" />
                                <span className=' text-lg'>J'accepte les termes et conditions</span>
                            </label>
                            
                        </div>
                        <div className=" flex justify-center py-5">
                            <button className=" bg-red-700 hover:bg-red-900 rounded-lg text-white text-lg font-bold py-2 px-4 mt-6 input2">
                            Créer un compte
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <span className=' text-xl px-24'>
                            Vous avez déjà un compte?
                                <a className=' text-red-600 underline' href="/register">
                                S'identifier
                                </a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )

};
export default Register;