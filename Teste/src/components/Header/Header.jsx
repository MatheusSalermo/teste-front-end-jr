import React from "react";
import './Header.css';

import {BiCheckShield} from 'react-icons/bi';
import {FiTruck} from 'react-icons/fi'
import {BsCreditCard} from 'react-icons/bs';

const Header = () =>{
    return(
        <div>
            <div className="linha">
                <div class="coluna3">
                    <BiCheckShield size={25} className="icones"/>
                    Compra <span>100% segura</span>
                </div>
                <div className="coluna3">
                   <FiTruck size={25} className="icones"/>
                    <span>Frete grátis</span> acima de R$200
                    </div>
                <div className="coluna3">
                    <BsCreditCard size={25} className="icones"/>
                    <span>Parcele</span> suas compras
                    </div>
                </div>
        </div>
    )
}

export default Header;