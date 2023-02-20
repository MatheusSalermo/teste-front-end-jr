import React from 'react'; 
import Modals from '../Modal/Modals';

import './Product.css';

const title = "Lorem ipsum dolor sit amet, consectetur adipiscing earticlet.";

export const Product = ({ className, name, photoURL, price }) => {
    return (
        <article className={`card ${className}`}>
            <img src={photoURL} alt={`Picture of ${name}`} />
            <h3>{name}</h3>
            <div className="price-details">
                <dl>
                    <dt className="visually-hidden">Old price:</dt>
                    <dd><s>R${price}</s></dd>
                    <dt className="visually-hidden">Price with descounts:</dt>
                    <dd><strong>R${price * 0.95}</strong></dd>
                </dl>
                <small>ou 2x de R$ { price * 0.95 / 2 } sem juros</small>
                <p>Frete grátis</p>
            </div>
            <Modals/>
        </article>
    );
};