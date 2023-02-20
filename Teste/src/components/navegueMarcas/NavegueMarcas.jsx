import './navegueMarcas.css'
import VTEX from './imgs/VTEX.png'
import V from './imgs/V.png'
import T from './imgs/T.png'
import E from './imgs/E.png'
import X from './imgs/X.png'

export default function NavegueMarcas(){

    return(
        <div class='navegacao'>
            <div class='tituloMarca'> 
                <p><h1 class='titulo'>Navegue por marcas</h1></p> 
            </div> 
            <div class='itensMarcas'>
            <div className="circulo">
                    <img src={VTEX} alt="Logo VTEX" />
                    <img src={V} alt="V" />
                    <img src={T} alt="T" />
                    <img src={E} alt="E" />
                    <img src={X} alt="X" />
                </div>
                <div className="circulo">
                    <img src={VTEX} alt="Logo VTEX" />
                    <img src={V} alt="V" />
                    <img src={T} alt="T" />
                    <img src={E} alt="E" />
                    <img src={X} alt="X" />
                </div>
                <div className="circulo">
                    <img src={VTEX} alt="Logo VTEX" />
                    <img src={V} alt="V" />
                    <img src={T} alt="T" />
                    <img src={E} alt="E" />
                    <img src={X} alt="X" />
                </div>
                <div className="circulo">
                    <img src={VTEX} alt="Logo VTEX" />
                    <img src={V} alt="V" />
                    <img src={T} alt="T" />
                    <img src={E} alt="E" />
                    <img src={X} alt="X" />
                </div>
                <div className="circulo">
                    <img src={VTEX} alt="Logo VTEX" />
                    <img src={V} alt="V" />
                    <img src={T} alt="T" />
                    <img src={E} alt="E" />
                    <img src={X} alt="X" />
                </div>
            </div>
            
        </div> 
    );
}