import React from 'react';
import thumbImg from '../assets/img/thumbnail.jpg'



const Curso: React.FC = () => {
    return (
        <div id='B' className=' text-blue-200 p-8 lg:p-16 flex flex-col gap-16 lg:gap-32'>
            <div id='h3' className='flex relative border-b-2 border-l-2 px-4 py-4 border-[#283a7a] items-start w-32 font-bold scale-100 lg:scale-150 origin-top-left'>
                <h3 className='w-[100%] z-10 text-lg'>Sobre</h3>
            </div>

            <div className='flex justify-end text-white'>
                <div className='w-full flex flex-col gap-2'>
                    <p className='z-10 text-left w-3/4 font-thin text-md lg:text-lg'>
                        Dificuldades para aprender construção é realidade na vida de muitas pessoas. Insegurança, medo, e falta de tempo são os fatores que levam grande parte dessas pessoas desistirem no meio do caminho. Por isso, o Curso Técnico em Edificações foi criado. 
                    </p>
                    <p className='z-10 text-left w-3/4 font-thin text-md lg:text-lg'>
                        Desenvolvemos um método seguro, para pessoas que tem dificuldade de compreensão. Este método ensina através de vídeo aulas, que pode assistir quantas vezes forem preciso, e imprimir as apostilas para um melhor acompanhamento.
                    </p>

                    <p className='z-10 text-left w-3/4 font-thin text-md lg:text-lg'>
                        Alinhamos as melhores técnicas de aprendizagem e retenção de conteúdo que fará aprender de forma simples e de fácil assimilação, do básico ao acabamento.
                    </p>

                    <p className='z-10 text-left w-3/4 font-thin text-md lg:text-lg'>
                        Se você é uma pessoa que já teve o sentimento de fracasso, por querer fazer sua própria construção, ou mesmo acompanhar uma obra com mais conhecimento, mas não se sente seguro(a) e realmente gostaria de aprender, Então este é o Curso Certo. Garanta sua vaga!
                    </p>
                    
                    

                </div>

                <div className='w-full flex flex-col justify-center gap-8'>
                    <p className='text-2xl text-center'>
                        Aprenda Construção Civil, com Nosso Exclusivo Método Passo a Passo.
                    </p>

                    <img className='z-20 relative rounded-2xl' src={thumbImg} alt="Thumbnail e link para vídeo" />


                </div>
            </div>
        </div>
    )

}

export default Curso;