import React from "react";
import './Footer.css';
import {FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa'
import Visa from '../../img/iconesFormasPagamento/visa.png'
import Elo from '../../img/iconesFormasPagamento/elo.png'
import Alelo from '../../img/iconesFormasPagamento/alelo.png'
import Dinners from '../../img/iconesFormasPagamento/dinnersClub.png'
import Ifood from '../../img/iconesFormasPagamento/ifood.png'
import Mastercard from '../../img/iconesFormasPagamento/mastercard.png'
import Pix from '../../img/iconesFormasPagamento/pix.png'
import American from '../../img/iconesFormasPagamento/american.png'
import Ticket from '../../img/iconesFormasPagamento/ticket.png'
import Sodexo from '../../img/iconesFormasPagamento/sodexo.png'


const Footer = () =>{
    return(
        <footer>
        <div class="container-footer">
            <div class="row-footer">
                
                <div class="footer-col">
                    <h4>SOBRE NÓS</h4>
                    <ul>
                        <li><a> CONHEÇA </a></li>
                        <li><a> COMO COMPRAR </a></li>
                        <li><a> INDICAÇÃO E DESCONTO </a></li>
                    </ul>
                    <div class="medias-socias">
                        <a> <FaFacebookF className="icFooter" size={20}/></a>
                        <a> <FaInstagram className="icFooter" size={20}/></a>
                        <a> <FaYoutube  className="icFooter" size={20}/></a>
                    </div>
                </div>
               
                <div class="footer-col">
                    <h4>INFORMAÇÕES ÚTEIS</h4>
                    <ul>
                        <li><a>FALE CONOSCO</a></li>
                        <li><a>DÚVIDAS</a></li>
                        <li><a>PRAZOS DE ENTREGA</a></li>
                        <li><a>FORMAS DE PAGAMENTO</a></li>
                        <li><a>POLÍTICA DE PRIVACIDADE</a></li>
                        <li><a>TROCAS E DEVOLUÇÕES</a></li>
                    </ul>
                </div>
           
                <div class="footer-col">
                    <h4>FORMAS DE PAGAMENTO</h4>
                    <ul>
                        <li>
                            <div className="pagamento">
                                <div class="colunaPag">
                                    <img src={Visa} />
                                </div>
                                <div class="colunaPag">
                                    <img src={Elo} />
                                </div>
                                <div class="colunaPag">
                                    <img src={Alelo} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pagamento">
                                <div class="colunaPag">
                                    <img src={Dinners} />
                                </div>
                                <div class="colunaPag">
                                    <img src={Ifood} />
                                </div>
                                <div class="colunaPag">
                                    <img src={Mastercard} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pagamento">
                                <div class="colunaPag">
                                    <img src={Pix} />
                                </div>
                                <div class="colunaPag">
                                    <img src={American} />
                                </div>
                                <div class="colunaPag">
                                    <img src={Ticket} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pagamento">
                                <div class="colunaPag">
                                    <img src={Sodexo} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class="footer-colLast">
                    <h4>CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span></h4>
                    <p>Exceptur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <div class="form-sub">
                        <form>
                        <input type="text" placeholder="SEU E-MAIL"/>
                        <button class="btnForm" value={SubmitEvent}>OK</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     
    )
}

export default Footer;