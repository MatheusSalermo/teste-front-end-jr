import Banner from "./components/Banner/Banner"
import BannersProdutos from "./components/BannersProdutos/BannersProdutos"
import Footer from "./components/Footer/Footer"
import FooterBottom from "./components/FooterBottom/FooterBottom"
import Header from "./components/Header/Header"
import HeaderCategorias from "./components/HeaderCategorias/HeaderCategorias"
import HeaderMid from "./components/HeaderMid/HeaderMid"
import Modals from "./components/Modal/Modals"
import NavegueMarcas from "./components/navegueMarcas/NavegueMarcas"
import Parceiros from "./components/Parceiros/Parceiros"
import { Product } from "./components/Product"
import ProductCarousel from "./components/ProductCarousel"
import ProdutosRelacionados from "./components/ProdutosRelacionados/ProdutosRelacionados"
import ProdutosRelacionados2 from "./components/ProdutosRelacionados2/ProdutosRelacionados2"
import Loja from "./components/seccaoLoja/Loja"




import "./styles/components/app.sass"

function App() {
  
  return (
    <div className="pagina">
      <Header /> 
      <HeaderMid />
      <HeaderCategorias />
      <Banner />
      <Loja />
      <ProdutosRelacionados />
      <Parceiros />
      <ProdutosRelacionados2 />
      <BannersProdutos />
      <NavegueMarcas />
      <ProdutosRelacionados2/>
      <Footer />
      <FooterBottom />  
    </div>
  )
}

export default App
