import React from "react";
import './HeaderMid.css';
import VtexRosa from '../../img/vtexRosa.jpg'
import VTEX from './imgs/VTEX.png'
import V from './imgs/V.png'
import T from './imgs/T.png'
import E from './imgs/E.png'
import X from './imgs/X.png'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const HeaderMid = () =>{
    return(
        <div>
            <div className="linhaNav">
                <div class="colunaLogo">
                    
                <img src={VTEX} alt="Logo VTEX"/>
                    <img src={V} alt="V" />
                    <img src={T} alt="T" />
                    <img src={E} alt="E" />
                    <img src={X} alt="X" />
                </div>
                <div className="colunaInput">
                   
                    <input type="text" class="form-control" placeholder="O que você está buscando?" />
                    </div>
                <div className="colunaIcons">
                    <div class='lastPart'>
                        <AiOutlineCodeSandbox size={42} />
                        <AiOutlineHeart size={42} />
                        <BiUserCircle size={42} />
                        <AiOutlineShoppingCart size={42} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMid;