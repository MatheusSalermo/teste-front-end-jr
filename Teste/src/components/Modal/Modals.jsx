import './Modal.css'
import Modal from 'react-modal'
import{useState} from 'react'
import Celular from '../../img/cel.png'

Modal.setAppElement('#root')

function Modals(){
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal(){
    setIsOpen(true)
  }

  function handleCloseModal(){
    setIsOpen(false)
  }

  const customStyles = {
    content: {
      top:'50%', 
      left: '50%',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
  return(
    <div className='containerModal'>
      <button className='modal-button' onClick={handleOpenModal}>
        Comprar
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={customStyles}>
      
      <div class="modals">
            <div class="modal-img">
                <img src={Celular}/>
            </div>
            <div class="modal-text">
                <span class="fechar" onClick={handleCloseModal}>X</span>
                <h3>IPHONE 11 PRO MAX BRANCO</h3>
                <br/>
                <h2>R$ 14250,00</h2>
                <br/>
                <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                <br/>
                <a href="#">Veja mais detalhes do produto</a>
            </div>
       </div>
    
        </Modal>
    </div>
  );
}

export default Modals;