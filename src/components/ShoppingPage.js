import React, {useContext, useState} from 'react';
import { CartContext } from '../contexts/CartContext';
import potSRC from '../me-kea products/pot.svg'
import sofaSRC from '../me-kea products/sofa.svg'
import tableSRC from '../me-kea products/table.svg'

const ShoppingPage = () => {

    const {updateCart} = useContext(CartContext);

    const [products, setProducts] = useState([
        {title:"pot", number:0},
        {title:"sofa", number:0,},
        {title:"table", number:0,}
    ])

    const increaseProductNumber = (product) =>{
        if(product === 0){
            setProducts([
                {title:"pot", number: parseInt(products[0].number)+1},
                {title:"sofa", number:products[1].number},
                {title:"table", number:products[2].number}
            ])
        }
        else if(product === 1){
            setProducts([
                {title:"pot", number: products[0].number},
                {title:"sofa",number:parseInt(products[1].number)+1},
                {title:"table", number:products[2].number}
            ])
        }
        else if(product === 2){
            setProducts([
                {title:"pot", number: products[0].number},
                {title:"sofa", number:products[1].number},
                {title:"table", number:parseInt(products[2].number)+1}
            ])
        }
    }

    const decreaseProductNumber = (product) =>{
        if(product === 0){
            if(products[0].number>0){
                setProducts([
                    {title:"pot", number: parseInt(products[0].number)-1},
                    {title:"sofa", number:products[1].number},
                    {title:"table", number:products[2].number}
                ])
            }            
        }
        else if(product === 1){
            if(products[1].number>0){
                setProducts([
                    {title:"pot", number: products[0].number},
                    {title:"sofa",number:parseInt(products[1].number)-1},
                    {title:"table", number:products[2].number}
                ])
            }
        }
        else if(product === 2){
            if(products[2].number>0){
                setProducts([
                    {title:"pot", number: products[0].number},
                    {title:"sofa", number:products[1].number},
                    {title:"table", number:parseInt(products[2].number)-1}
                ])
            }
        }
    }

    const setProductNumber = (product,inputValue) =>{
        if(product === 0){
            setProducts([
                {title:"pot", number:inputValue},
                {title:"sofa", number:products[1].number},
                {title:"table", number:products[2].number}
            ])
        }
        else if(product === 1){
            setProducts([
                {title:"pot", number:products[0].number},
                {title:"sofa", number:inputValue},
                {title:"table", number:products[2].number}
            ])
        }
        else if(product === 2){
            setProducts([
                {title:"pot", number:products[0].number},
                {title:"sofa", number:products[1].number},
                {title:"table", number:inputValue}
            ])
        }    
    }

    const addToCart = (product)  => e => {
        e.preventDefault()
        const quantity = parseInt((e.target.querySelector('input')).value)
        updateCart(product, quantity)        
    }

    // should have used .map() to dynamically adjust the state, dependent on the product title or another unique identifier. Current system does not allo for dynamic product addition to shopping page as 'product' identifier variables (0, 1 or 2) are hard coded.


    return ( 
        <main className="shopping-container">
            <section className="product-container">
                <img src={potSRC} alt="pot"></img>
                <div className="product-info">
                    <p className="product-price">€15</p>
                    <p>Cooking pot</p>
                        <form className="add-remove-form" onSubmit={addToCart(0)}>

                            <span className="material-icons add-remove remove" onClick={()=>decreaseProductNumber(0)}>
                            remove
                            </span>

                            <input type="number" className="product-num" 
                            value={products[0].number} onChange={(e)=>setProductNumber(0,e.target.value)}/>

                            <span className="material-icons add-remove add" onClick={()=>increaseProductNumber(0)}>
                            add
                            </span>

                            <button className="add-cart" type="submit">
                            Add
                            </button>

                        </form>
                </div>
            </section>

            <section className="product-container">
                <img src={sofaSRC} alt="sofa"></img>
                <div className="product-info">
                    <p className="product-price">€100</p>
                    <p>Comfy Sofa</p>
                        <form className="add-remove-form" onSubmit={addToCart(1)}>

                            <span className="material-icons add-remove remove" onClick={()=>decreaseProductNumber(1)}>
                            remove
                            </span>

                            <input type="number" className="product-num" 
                            value={products[1].number} onChange={(e)=>setProductNumber(1,e.target.value)}/>

                            <span className="material-icons add-remove add" onClick={()=>increaseProductNumber(1)}>
                            add
                            </span>
                            <button className="add-cart" type="submit">
                            Add
                            </button>
                        </form>
                </div>
            </section>

            <section className="product-container">
                <img src={tableSRC} alt="table"></img>
                <div className="product-info">
                    <p className="product-price">€40</p>
                    <p>Work Table</p>
                        <form className="add-remove-form" onSubmit={addToCart(2)}>

                            <span className="material-icons add-remove remove" onClick={()=>decreaseProductNumber(2)}>
                            remove
                            </span>

                            <input type="number" className="product-num" 
                            value={products[2].number} onChange={(e)=>setProductNumber(2,e.target.value)}/>

                            <span className="material-icons add-remove add" onClick={()=>increaseProductNumber(2)}>
                            add
                            </span>

                            <button className="add-cart" type="submit">
                            Add
                            </button>
                        </form>
                </div>
            </section>
        </main>
     );
}
 
export default ShoppingPage ;