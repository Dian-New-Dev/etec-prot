import React from 'react';



const Hero: React.FC = () => {
    return (
        <div className='px-0 lg:px-16 xl:px-32 2xl:px-64 flex flex-col items-start w-full justify-end sm:pl-0 md:pl-0 lg:pl-80 pt-32  md:pt-80 gap-5 origin-top-right scale-[1]'>
            <div className='flex flex-col items-start gap-5 w-1/2'>
                
                <h3 className='font-roboto text-sky-100 italic border-b border-sky-100/50 w-[50%]'>
                    ETEC da Construção Treinamentos 
                </h3>
                
                <h1 className='text-start text-3xl md:text-5xl text-sky-100 font-roboto'>
                    
                    CURSO DE EDIFICAÇÕES E GERENCIAMENTO DE OBRAS

                </h1>
                <h2 className='text-start text-1xl text-sky-100 font-roboto'>
                    
                    Aprenda as Mais Novas e Modernas Técnicas de Construção, e Destaque-se no Mercado da Construção Civil.
                </h2>

                <h2 className='text-start text-1xl text-sky-100 font-roboto'>
                    
                    Curso <span className='underline italic '>100% online</span>.
                </h2>
                <button className='bg-sky-800 hover:bg-sky-900 font-bold py-2 px-4 rounded-lg text-sky-100 font-roboto w-56'>
                    Quero me inscrever!
                </button>

                <button className='bg-sky-800 hover:bg-sky-900 font-bold py-2 px-4 rounded-lg text-sky-100 font-roboto w-56'>
                    Quero saber mais.
                </button>
            </div>
        </div>
    )

}



export default Hero;

