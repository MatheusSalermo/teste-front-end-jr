import React from "react";
import ProductCarousel from "../ProductCarousel";
import './ProdutosRelacionados2.css';

const ProdutosRelacionados2 = () =>{
    return(
        <div>
            <div class='containerProdutos'>
                <div class='tituloProdutos'> 
                    <p><h1 class='titulo'>Produtos Relacionados</h1></p> 
                    Ver todos
                </div> 
                <div class='containerProdutos2'>
                    <ProductCarousel/>
                </div>
            </div> 
        </div>
    )
}

export default ProdutosRelacionados2;