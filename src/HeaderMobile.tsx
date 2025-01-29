import React, { useEffect, useState } from 'react';

interface HeaderMobileProps {
    larguraDaTela: number;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ larguraDaTela }) => {

    //o seguinte código cuida de usar a prop para dinamicamente
    //definir a posição left do painel hamburguer escondido
    //à esquerda da margem esquerda
    
    const [hamburguerAberto, setHamburguerAberto] = useState(false);

    function abrirMenu() {
        if (hamburguerAberto) {
            setHamburguerAberto(false)
        } else {
            setHamburguerAberto(true)
        }

    }

    const posicaoEsquerda = hamburguerAberto ? 0 : -larguraDaTela;

    //o seguinte código cuida de detectar que o usuário rolou a página
    //para baixo para aplicar leve sombreamento no header

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
    
    //return

    return (
        <div>
           <div className={`z-50 w-full fixed top-0 left-0 p-8 `}>
                <button onClick={abrirMenu} className='z-10 flex flex-col gap-2'>
                    <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                    <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                    <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                </button>

            <img className='z-50 px-8 py-5 absolute top-0 right-0 w-[100px] scale-[1]' src={"./assets/img/logo.png"} alt="Logo da empresa" />

                <div 
                className={`z-40 absolute w-full h-screen top-0 left-0 flex flex-col gap-5 p-8 pt-20 bg-gray-800/100 font-bold hamburguer-transition`}
                style={{left: `${posicaoEsquerda}px` }}
                >
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal text-sky-200' href="#A">Início</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal text-sky-200' href="#B">Sobre</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal text-sky-200' href="#C">Modalidades</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal text-sky-200' href="#D">Galeria</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal text-sky-200' href="#E">Depoimentos</a>
                    <a onClick={abrirMenu} className='z-40 text-3xl font-normal text-sky-200' href="#F">FAQ</a>
                </div>

            </div> 

            <div className={`z-40 w-full fixed top-0 left-0 p-8 transicao-gradiente ${rolouScroll ? 'gradiente' : 'sem-gradiente'}`}></div>
        </div>
        
    );
};

export default HeaderMobile;