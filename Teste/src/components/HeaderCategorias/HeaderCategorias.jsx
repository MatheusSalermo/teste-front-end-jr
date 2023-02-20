import React from "react";
import './HeaderCategorias.css';
import {BiCrown} from 'react-icons/bi'


const HeaderCategorias = () =>{
    return(
            <div className="linhaCat">
                <div class="coluna7Cat">TODAS AS CATEGORIAS</div>
                <div class="coluna7Cat">SUPERMERCADO</div>
                <div class="coluna7Cat">LIVROS</div>
                <div class="coluna7Cat">MODA</div>
                <div class="coluna7Cat">LANÇAMENTOS</div>
                <div class="coluna7Cat"><span>OFERTAS DO DIA</span></div>
                <div class="coluna7Cat"><BiCrown className="iconeCat"/>ASSINATURA</div>
            </div>
     
    )
}

export default HeaderCategorias;