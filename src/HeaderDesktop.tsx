import React, { useEffect, useState } from 'react';
import logoImg from "../assets/img/logo.png"

const HeaderDesktop: React.FC = () => {

    const [rolouScroll, setRolouScroll] = useState(false);

    useEffect(() => {
        const seRolarScroll = () => {
            if (window.scrollY > 50) {
                setRolouScroll(true);
            } else {
                setRolouScroll(false)
            }
        }


        window.addEventListener('scroll', seRolarScroll);

        return () => {
            window.removeEventListener('scroll', seRolarScroll);
        };

    }, []);



    return (
        <div>

            <div id='header-desktop' className='z-50  fixed w-full flex items-center justify-center gap-8'>

                <div>
                    <a href="#A">
                        <img className='w-[100px]' src={logoImg} alt="Logo da empresa" />
                    </a>
                </div>

                <div className='flex items-center justify-center gap-8'>
                    <a className='text-[#283a7a] font-semibold hover:scale-125 hover:text-[#131d41]' href="#A">Início</a>
                    <a className='text-[#283a7a] font-semibold hover:scale-125 hover:text-[#131d41]' href="#B">Área do Aluno</a>
                    <a className='text-[#283a7a] font-semibold hover:scale-125 hover:text-[#131d41]' href="#C">Blog</a>
                    <a className='text-[#283a7a] font-semibold hover:scale-125 hover:text-[#131d41]' href="#D">Cursos</a>

                </div>
            </div>

            <div className={`z-40 w-full fixed top-0 left-0 p-12 transicao-gradiente-desktop ${rolouScroll ? 'gradiente' : 'sem-gradiente'}`}></div>
        </div>

    );
};

export default HeaderDesktop;