import React, { useState } from 'react';
import SeccaoLoja from './SeccaoLoja';
import './SeccaoLoja.css'

const Loja = () =>{

    return (
        <div class ='itensMarcas'>
            <div class='conteudoLoja'>
                <SeccaoLoja texto='Tecnologia' icone='fa-solid fa-computer fa-4x'/>
                <SeccaoLoja texto='Supermercado' icone='fa-solid fa-shop fa-4x'/>
                <SeccaoLoja texto='Bebidas' icone='fa-solid fa-champagne-glasses fa-4x'/>
                <SeccaoLoja texto='Ferramentas' icone='fa-solid fa-screwdriver-wrench fa-4x'/>
                <SeccaoLoja texto='Saúde' icone='fa-solid fa-suitcase-medical fa-4x'/>    
                <SeccaoLoja texto='Esporte e Fitness' icone='fa-solid fa-person-running fa-4x'/>    
                <SeccaoLoja texto='Moda' icone='fa-solid fa-shirt fa-4x'/> 
            </div>
        </div>
    );
}
export default Loja;