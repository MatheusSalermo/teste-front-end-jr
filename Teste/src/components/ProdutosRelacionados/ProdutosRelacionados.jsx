import React from "react";
import ProductCarousel from "../ProductCarousel";
import './ProdutosRelacionados.css';

const ProdutosRelacionados = () =>{
    return(
        <div>
            <div class='containerProdutos'>
                <div class='tituloProdutos'> 
                    <p><h1 class='titulo'>Produtos Relacionados</h1></p> 
                    <div className="linhaProd">
                        <div class="coluna6Prod"><span>TODAS AS CATEGORIAS</span></div>
                        <div class="coluna6Prod">SUPERMERCADO</div>
                        <div class="coluna6Prod">LIVROS</div>
                        <div class="coluna6Prod">MODA</div>
                        <div class="coluna6Prod">LANÇAMENTOS</div>
                        <div class="coluna6Prod">OFERTAS DO DIA</div>
                    </div>
                </div> 
                <div class='containerProdutos2'>
                    <ProductCarousel/>
                </div>
            </div> 
        </div>
    )
}

export default ProdutosRelacionados;