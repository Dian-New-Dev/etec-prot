import React from 'react';
import logoArquiteturaImg from '../assets/img/aarquiteta-selo-associados-abed-0.webp';
import logoMinisterioImg from '../assets/img/Logo-Ministerio-da-Educacao-MEC.webp'

const CTA1: React.FC = () => {
    return (
        <div className='w-full p-16 flex flex-col items-center gap-12 bg-gray-200'>
            <div>
                <p className='text-gray-600 font-bold'>Seja seu próprio construtor com um curso totalmente reconhecido!</p>  
            </div>
            <div className='flex gap-8'>
                <img className='w-[100px]' src={logoArquiteturaImg} alt="" />
                <img className='w-[400px]' src={logoMinisterioImg} alt="" />
            </div>  

            <button className='bg-sky-800 hover:bg-sky-900 font-bold py-2 px-4 rounded-lg text-sky-100 font-roboto w-56'>
                Quero me inscrever!    
            </button>       
        </div>
    );
};

export default CTA1;