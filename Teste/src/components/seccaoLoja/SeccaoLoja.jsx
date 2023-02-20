import React, { useState } from 'react';
import './SeccaoLoja.css'

export default function SeccaoLoja(props) {
    const[clicked, setClick] = useState('quadrado');

    function handleClick(){
        if(clicked === 'quadrado')setClick('quadrado colorido');
        else setClick('quadrado')
    };
    return (
        <div className={clicked} onClick={handleClick}>
            <i className={props.icone}></i>
            <p className='texto-seccao'>{props.texto}</p>
        </div>
    );
}