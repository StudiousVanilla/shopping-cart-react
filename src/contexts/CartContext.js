import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([
        {title:"pot", number:0, price:15},
        {title:"sofa", number:0,price:100},
        {title:"table", number:0,price:40}
    ])

    const updateCart = (product, quantity) =>{
        if(product === 0){
            if(cart[0].number > 0){
                setCart([
                    {title:"pot", number: parseInt(cart[0].number)+quantity , price:15},
                    {title:"sofa", number:parseInt(cart[1].number), price:100},
                    {title:"table", number:parseInt(cart[2].number), price:40}
                ])
            }
            else if(cart[0].number === 0 && quantity > 0){
                setCart([
                    {title:"pot", number:parseInt(cart[0].number)+quantity, price:15},
                    {title:"sofa", number:parseInt(cart[1].number), price:100},
                    {title:"table", number:parseInt(cart[2].number), price:40}
                ])
            }  
        }
        else if(product === 1){
            if(cart[1].number > 0){
                setCart([
                    {title:"pot", number:parseInt(cart[0].number), price:15},
                    {title:"sofa", number:parseInt(cart[1].number)+quantity, price:100},
                    {title:"table", number:parseInt(cart[2].number), price:40}
                ])
            }
            else if(cart[1].number === 0 && quantity > 0){
                setCart([
                    {title:"pot", number:parseInt(cart[0].number), price:15},
                    {title:"sofa", number:parseInt(cart[1].number)+quantity, price:100},
                    {title:"table", number:parseInt(cart[2].number), price:40}
                ])
            }
        }
        else if(product === 2){
            if(cart[2].number > 0){
                setCart([
                    {title:"pot", number:parseInt(cart[0].number), price:15},
                    {title:"sofa", number:parseInt(cart[1].number), price:100},
                    {title:"table", number:parseInt(cart[2].number)+quantity, price:40}
                ])
            }
            else if(cart[2].number === 0 && quantity > 0){
                setCart([
                    {title:"pot", number:parseInt(cart[0].number), price:15},
                    {title:"sofa", number:parseInt(cart[1].number), price:100},
                    {title:"table", number:parseInt(cart[2].number+quantity), price:40}
                ])
            }
        }  
    }

    return ( 
        <CartContext.Provider value={{cart,updateCart}}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;