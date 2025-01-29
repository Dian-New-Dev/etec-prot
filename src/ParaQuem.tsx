import { useState } from 'react';


const ParaQuem: React.FC = () => {

    //logica para alternar a exibição entre os 3 princípios
    const [mostrar, setMostrar] = useState<number>(0);

    function renderizarPrincipio(index:number) {
        if (index === 1) {
            setMostrar(index)
        } else if (index === 2) {
            setMostrar(index)
        } else if (index === 3) {
            setMostrar(index)
        } else if (index === 4) {
            setMostrar(index)
        }
        
    }



        return (
        <div id='D' className='z-10 text-sky-100 font-bold p-8 flex gap-8 lg:gap-32 '>
            
            <div className='flex flex-col gap-16  w-1/2'>
                <div id='h3' className='flex relative border-b-2 border-l-2 px-4 py-4 border-gray-100/50 items-start w-32 font-bold scale-100 lg:scale-150 origin-top-left'>
                    <h3 className='w-[100%] z-10 text-lg'>Público Alvo</h3>
                </div>

                <div className='text-lg text-left'>
                    Para quem é este curso e como ele irá ajudar em sua qualificação? 
                </div>

                <div id="sobre" className="scroll-mt-[100px] text-white w-full">
                    <div className="relative w-full flex  sm:flex-row gap-4 items-start">

                        
                        <div className="w-full z-20 flex flex-col gap-8 text-left sm:text-left items-start" id="hero-texto">

                            <div className="flex flex-col items-start gap-4 w-full">
                                <div className="flex flex-col gap-1 items-start w-full">
                                    <button onClick={() => renderizarPrincipio(1)} className="neon-sobre text-blue-300 font-bold w-full text-left"> + Leitura e Desenvolvimento de Projetos Arquitetônicos</button>
                                    <div className={`${mostrar === 1 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 italic text-left font-normal">Além de aprender a ler, e desenvolver projetos no Autocad, que continua sendo o software mais utilizado. O aluno tambem terá aprenderá a ler e desenvolver manualmente suas plantas baixas, dentro das leis e normas.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 items-start w-full">
                                    <button onClick={() => renderizarPrincipio(2)} className="neon-sobre text-blue-300 font-bold w-full text-left"> + Aprenda Supervisão e Gerenciamento de Obras.</button>
                                    <div className={`${mostrar === 2 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 italic text-left font-normal">Com várias aulas voltadas a gerenciamento, Normas regulamentadoras, e Técnicas de Segurança no Trabalho, o aluno estará preparado para Supervisionar, ou Gerenciar, ou fiscalizar obras do alicerce ao acabamento.  </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 items-start w-full">
                                    <button onClick={() => renderizarPrincipio(3)} className="neon-sobre text-blue-300 font-bold w-full text-left"> + Ofereça Serviços Como Faz Tudo.</button>
                                    <div className={`${mostrar === 3 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 italic text-left font-normal">Você que esta disponível no mercado de trabalho, pode ainda faturar rapidamente, com pequenos trabalhos de alvenaria, Elétrica residencial, Instalações Hidráulicas, projetos de construção, e várias outras formas, ganhando por horas trabalhadas. Descubra este excelente nicho de mercado para faturar.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 items-start w-full">
                                    <button onClick={() => renderizarPrincipio(4)} className="neon-sobre text-blue-300 font-bold w-full text-left"> + Tenha sua Própria Empreiteira de Obras.</button>
                                    <div className={`${mostrar === 4 ? 'block' : 'hidden'}`}>
                                        <p className="leading-7 italic text-left font-normal">Conheça Materiais, Ferramentas, e Técnicas Construtivas, NRs, EPIs, Alvenarias, Técnicas de acabamentos, e tudo que precisa saber para constituir sua própria Empreiteira ou Construtora de Obras com total conhecimento, do básico ao acabamento. </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>

            <div className='w-1/2  relative'>

            </div>




        </div>

    );
};

export default ParaQuem;