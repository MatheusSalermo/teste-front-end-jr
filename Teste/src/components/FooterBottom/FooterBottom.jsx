import React from "react";
import './FooterBottom.css';
import Logos from '../../img/logos.jpg'

const FooterBottom = () =>{
    return(
        <footer>
        <div class="container-footerBottom">
            <div class="coluna-footerBottom">
                Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. 
                <br/>
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
            </div>
            <div class="coluna-footerBottom2">
                <img src={Logos}/>
            </div>
        </div>
    </footer>
     
    )
}

export default FooterBottom;