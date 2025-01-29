import React from 'react';

import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png'

import logo from '../assets/img/logo.png'

const Footer: React.FC = () => {
    return (
        <div className='z-10 overflow-hidden relative p-2 bg-gray-800 leading-4 text-gray-200 text-center'>
            <div className='z-10 w-full text-center text-gray-200'>
                <h5 className='z-10 text-md font-semibold leading-4'>ETEC da Construção Treinamentos 2014 - 2025</h5>
                <h6 className='z-10 text-sm font-normal italic'>Construindo Carreiras e Realizando Sonhos</h6>
            </div>

            <div className='z-10 flex gap-4 items-center p-4 w-full max-w-[1280px] mx-auto'>
                <div id='social-media' className='z-10 flex flex-col gap-2 w-1/2 justify-center'>
                    <div>
                        <p className='text-sm font-thin'>Visite nossas redes sociais</p>
                    </div>

                    <div className='flex gap-2 justify-center'>
                        <a href="#">
                            <img className='z-10 w-8 font-bold hover:scale-125' src={instagram} alt="Ícone com link para Instagram da empresa." />
                        </a>
                        <a href="#">
                            <img className='z-10 w-8 font-bold hover:scale-125 rounded-xl' src={twitter} alt="Ícone com link para Twitter/X da empresa." />
                        </a>
                        <a href="#">
                            <img className='z-10 w-8 font-bold hover:scale-125 rounded-xl' src={facebook} alt="Ícone com link para Facebook da empresa." />
                        </a>

                    </div>
                </div>


                <div className='z-10 flex gap-2 w-1/2 text-sm leading-3 justify-center'>
                    <a className='hover:scale-125 hover:text-amber-400' href="#">Termos e Condições</a>
                </div>



            </div>

            <img className='z-0 w-[500px] scale-[1] top-[-100px] left-[700px] absolute opacity-20' src={logo} alt="Logo da empresa"/>

        </div>
    );
};

export default Footer;