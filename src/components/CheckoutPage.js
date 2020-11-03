import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import potSRC from '../me-kea products/pot.svg'
import sofaSRC from '../me-kea products/sofa.svg'
import tableSRC from '../me-kea products/table.svg'

const CheckoutPage = () => {

    const {cart, updateCart} = useContext(CartContext)

    const imgSRC = (title) =>{
        if(title === "pot"){
            return potSRC
        }
        else if(title === "sofa"){
            return sofaSRC
        }
        else if(title === "table"){
            return tableSRC
        }
    }

    const totalPrice = cart.reduce((total, product) => {
        return total + parseInt((product.price*product.number))
    }, 0)

    const removeProduct = (e) =>{
        if(e.target.id === "pot"){
            updateCart(0,-1)
        }
        else if(e.target.id === "sofa"){
            updateCart(1,-1)
        }

        else if(e.target.id === "table"){
            updateCart(2,-1)
        }  
    }



    return ( 
        <div className="checkout-container">
            {cart.map(product => 
                // maps through the 'cart' array and returns the correct image, name, quantitiy and total price for each product
                <section key={product.title} className="product-container">
                    <img src={imgSRC(product.title)} alt={product.title}></img>
                    <div className="cart-remove" onClick={removeProduct}>
                        <span className="material-icons" id={product.title}>
                            remove_circle_outline
                        </span>
                    </div>
                    <p className="product-price">€{product.price}</p>
                    <div className="product-info">
                    
                        <p className="product-price">X{product.number}</p>
                        <p>{product.title}</p>
                    </div>
                    <div className="product-info">
                        <p className="product-price">€{product.number*product.price}</p>
                    </div>    
                </section>
            )}
            <div className="total-container">
                <p className="total-price">Total: €{totalPrice}</p>
            </div>
        </div>
     );
}
 
export default CheckoutPage ;