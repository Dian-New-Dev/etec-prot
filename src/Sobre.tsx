import React from 'react';
import gerenciamentoImg from '../assets/icons/gerenciamento.png';
import tecnicasImg from '../assets/icons/tecnicas.png';
import canteiroImg from '../assets/icons/canteiro.png';



const Sobre: React.FC = () => {
    return (
        <div id='C' className='z-10 text-sky-100 p-8 lg:p-16 flex flex-col gap-8  border border-gray-900 bg-gray-700/75 m-4 rounded-3xl'>
            <div id='h3' className='flex relative border-b-2 border-l-2 px-4 py-4 border-[#283a7a] items-start w-32 font-bold scale-100 lg:scale-150 origin-top-left'>
                <h3 className='z-10 w-[100%] text-blue-200 text-lg font-bold'>O Curso</h3>
                
            </div>

            <div className='text-center p-8 flex flex-col gap-2'>
                <p>
                    São <span className='italic font-bold text-blue-400'>3 módulos</span> com duração de <span className='italic font-bold text-blue-400'>30 dias cada</span>, desenvolvidos para seu completo aprendizado.
                </p>
                <p>
                    Você terá de <span className='italic font-bold text-blue-400'>03 a 06 meses</span> para finalizar o curso.  O conteúdo e as avaliações são online. Você recebe o link por e-mail e pode escolher o melhor dia e horário para estudar.
                </p>
            </div>

            <div id="modalidades-flexbox" className='z-10 flex flex-col lg:flex-row lg:justify-center gap-16'>
                <div className='z-10 flex flex-col gap-2 lg:gap-8 p-6 hover:shadow-2xl hover:scale-110 hover:bg-gray-700 rounded-3xl'>
                    <div className='z-10 flex items-center gap-4'>
                        <img className='z-10 w-[100px]' src={canteiroImg} alt="" />
                        <h4 className='z-10 text-lg lg:text-2xl font-bold'>O Canteiro de Obras</h4>
                    </div>
                    <p className='text-md lg:text-md'>Módulo composto por 8 Tópicos, onde o aluno irá aprender, desde a correta implantação do canteiro de obras, até as normas regulamentadoras.</p>
                </div>

                <div className='z-10 flex flex-col gap-2 lg:gap-8 p-6 hover:shadow-2xl hover:scale-110 hover:bg-gray-700 rounded-3xl'>
                    <div className='z-10 flex items-center gap-4'>
                        <img className='z-10 w-[100px]' src={tecnicasImg} alt="" />
                        <h4 className='z-10 text-lg lg:text-2xl font-bold'>Técnicas Construtivas</h4>
                    </div>
                    <p className='text-md lg:text-md'>Módulo onde o aluno irá conhecer os mais diversos, e modernos processos construtivos, desde o básico da obra até o acabamento. Além de dicas e macetes.</p>
                </div>

                <div className='z-10 flex flex-col gap-2 lg:gap-8 p-6 hover:shadow-2xl hover:scale-110 hover:bg-gray-700 rounded-3xl'>
                    <div className='z-10 flex items-center gap-4'>
                        <img className='z-10 w-[100px]' src={gerenciamentoImg} alt="" />
                        <h4 className='z-10 text-lg lg:text-2xl font-bold'>Gerenciamento de Obras</h4>
                    </div>
                    <p className='text-md lg:text-md'>Aprenda Técnicas para  Supervisionar; Gerenciar; e Acompanhar obras. Faça seus orçamentos e suas  planilhas,  Gerencie sua própria equipes de obras.</p>
                </div>
            </div>

        </div>
    )

}



export default Sobre;

