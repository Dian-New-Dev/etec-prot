import React from 'react';
import Header from './Header'
import Hero from './Hero';
import Sobre from './Sobre';

import CTA1 from './CTA1';
import Footer from './Footer';
import ParaQuem from './ParaQuem';
import Curso from './Curso';

const App: React.FC = () => {
    console.log('env faz diferença?')
    return (
        <div className='bg-gray-800 scroll-smooth'>
            <div id='A' className="px-10 pr-10 2xl:px-20 py-5 h-screen w-full bg-cover bg-[25%] bg-hero bg-blend">
                <Header />

                <Hero />
            </div>


            <div className='relative p-0 sm:p-8 lg:p-16 flex flex-col gap-8 lg:gap-16 w-full max-w-[1440px] mx-auto'>
                <div className='z-0 opacity-25 absolute top-0 left-0 w-full h-full blended-bg '></div>
                <Curso />

                <Sobre />

            </div>

            <CTA1 />

            <div className='w-full h-full bg-galeria'>
                <div className='relative p-0 lg:p-16 w-full max-w-[1440px] mx-auto'>

                    <ParaQuem />

                    

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default App;