import { useEffect, useState } from 'react'
import {getProducts} from '../../../services/consumer/consumer'
import ProductCard from '../../../components/ProductCard'
import Modal from '../../../components/Modal'
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Container, Content, ModalContainer, ModalBody, ModalHeader } from "./style"
import { ButtonRequest, CartContainer, CartList } from "./style";
import CartItem from "../../../components/CartItem";
import { useRequests } from "../../../providers/requests/requests";
import formatter from "../../../utils/formatter";

const MenuPage = () => {

    const { sendRequestData } = useRequests()

    const [products, setProducts] = useState()
    const [productInModal, setProductInModal] = useState()
    const [portionsPicked, setPortionsPicked] = useState([])
    const [extrasPicked, setExtrasPicked] = useState([])
    const [productsInCart, setProductsInCart] = useState([])
    const [openCart, setOpenCart] = useState(false);
    const [shouldOpenProductModal, setShouldOpenProductModal] = useState(false)
    const [categoryMain, setCategoryMain] = useState("Entradas")

    const handleMainCategory = (category) => {
      setCategoryMain(category)
    }

    const handleOpenModal = (product) => {
      setShouldOpenProductModal(true)
      setProductInModal(product)
    }

    const handleAddProduct = (product) => {
      setShouldOpenProductModal(false)
      setOpenCart(true)
      setProductsInCart([...productsInCart, product])
    }

    const handleRequest = () => {
      setOpenCart(!openCart);
      sendRequestData(productsInCart);
    };

    const handleAddToPreview = (portion) => {
      const newPortionsArr = [...portionsPicked, portion]
      setPortionsPicked(newPortionsArr)
    }

    const handleRemoveToPreview = (portion) => {
      let sizePickedArr = portionsPicked.filter((size) => size.name === portion.name)
      let otherSizesPickedArr = portionsPicked.filter((size) => size.name !== portion.name)
      sizePickedArr.pop()
      const newPickedArr = otherSizesPickedArr.concat(sizePickedArr)
      setPortionsPicked(newPickedArr)

    }

    const renderProducts = (value, category) => {
      return (
        value.filter((product) => product.category === category).map(((product) => {
            return (
              <ProductCard 
                product={product} 
                productImage={product.imageUrl} 
                click={() => handleOpenModal(product)}
              />
            )   
          }
        ))
      )
    }

    const renderModal = (product) => {
      const extras = product.extras
      const portions = product.portions

      if(shouldOpenProductModal){
        return(
          <Modal 
            flex 
            width={"48rem"} 
            height={"36rem"} 
            state={shouldOpenProductModal}
            align="center"
            justify="center"
            padding="15px"
          >
            <ModalContainer>
              <ModalHeader>
                <AiOutlineCloseCircle size="24px" />
                <span onClick={() => setShouldOpenProductModal(false)}>
                  <AiOutlineCloseCircle size="24px" />
                </span>
                <div className='header'>
                  <div className='image-place'>
                    <img src={product.imageUrl} alt="product-pic" />
                    <p>estrelas</p>
                  </div>
                  <div className='product-description'>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.waitingTime}</p>
                    <p>Ver valor nutricional</p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className='product-adds'>
                  <h2>Adicionais</h2>
                  {!!extras  && extras.map((extra)=>{
                    return <p>{extra.name}..........{extra.price}</p>
                  })}
                </div>
                <div className='product-size'>
                  <h2>Porções</h2>
                  {!!portions && portions.map((portion) => {
                    const sizePickeds = portionsPicked.filter((size) => size.name === portion.name)
                    return (
                      <div class="sizes">
                        <div className='minus' onClick={() => handleRemoveToPreview(portion)}>
                          <AiOutlineMinusCircle size="20px" />
                        </div>
                        <p>{portion.name}</p>
                        <p>Preço: {formatter.format(portion.price)}</p>
                        <div className='plus' onClick={() => handleAddToPreview(portion)}>
                          <AiOutlinePlusCircle size="24px" />
                        </div>
                        <p>
                          {sizePickeds.length}
                        </p>
                      </div>
                    )
                  })}
                  <button onClick={() => handleAddProduct(product)}>Adicionar ao Pedido</button>
                </div>
              </ModalBody>
            </ModalContainer>
          </Modal>
        )
      }
    }

    const renderCart = (cartproducts) => {
      return(
        <Modal flex={"flex"} state={openCart}>
          <CartContainer>
          <spam onClick={() => setOpenCart(false)}>x</spam>
           <CartList>
             {cartproducts.map((el) => (
               <CartItem product={el} />
             ))}
           </CartList>
           <ButtonRequest onClick={handleRequest}>Fazer Pedido</ButtonRequest>
         </CartContainer>
       </Modal>
      )
    }

    useEffect(() => {
        const loadProducts = async() => {
            const response = await getProducts()
            setProducts(response)
        }
        loadProducts()
        return;
    }, [])

    return(
      <Container>
        {shouldOpenProductModal && renderModal(productInModal)}
        <nav className='desktop--nav'>
            <div onClick={() => handleMainCategory("Entradas")}>Entradas</div>
            <div onClick={() => handleMainCategory("Pratos principais")}>Pratos principais</div>
            <div onClick={() => handleMainCategory("Sobremesas")}>Sobremesas</div>
            <div onClick={() => handleMainCategory("Bebidas")}>Bebidas</div>
        </nav>
        <div className="foodsection">
            {categoryMain}
        </div>
        <Content>
          {!!products && renderProducts(products, categoryMain)}
          {openCart && renderCart(productsInCart)}
        </Content>
      </Container>
    )
}
export default MenuPage
