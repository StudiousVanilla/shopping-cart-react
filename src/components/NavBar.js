import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import potSRC from '../me-kea products/pot.svg'
import sofaSRC from '../me-kea products/sofa.svg'
import tableSRC from '../me-kea products/table.svg'

const NavBar = () => {

    const {cart} = useContext(CartContext);

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

    return ( 
        <nav>
            <div className="nav-links-container">
                <p className="nav-link nav-logo">ME-KEA</p>
                <Link to ="/">
                    <span className="material-icons nav-link">home</span>
                </Link>
                <Link to ="/shopping">
                    <span className="material-icons nav-link">store</span>
                </Link>
                <Link to ="/checkout" className="checkout">
                    <span className="material-icons nav-link">shopping_cart</span> 
                    <span className="nav-link">{cart[0].number+cart[1].number+cart[2].number}</span>
                    <div className="mini-checkout">
                        {cart.map(product => 
                        // maps through the 'cart' array and returns the correct image, name, quantitiy and total price for each product. This acts as a 'mini' checkout cart
                        <section key={product.title} className="product-container mini-product-container">
                            <img src={imgSRC(product.title)} alt={product.title}></img>
                            <p className="product-price mini-product-price">€{product.price}</p>
                            <div className="product-info mini-product-info">
                                <p className="product-price mini-product-price">
                                X{product.number}</p>
                                <p>{product.title}</p>
                            </div>
                            <div className="product-info mini-product-info">
                                <p className="product-price mini-product-price">€{product.number*product.price}</p>
                            </div>    
                        </section>
                        )}
                    </div>
                </Link>
            </div>
            
        </nav>

     );
}
 
export default NavBar;