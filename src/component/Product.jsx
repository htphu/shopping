import './Product.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from './redux/action';
import { Store } from 'react-notifications-component';
import 'animate.css';


export default function Product() {
    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();

    const dispatch = useDispatch();
    const products = useSelector(state => state.handleCart);

    useEffect(() => {
        const getProducts = () => {
            fetch('https://fakestoreapi.com/shopping/products/' + id)
                .then(res => res.json())
                .then(json => {
                    setProduct(json)
                    setLoading(false)
                })
                .catch(error => console.log(console.log(error)))
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="loading">
                    Loading...
                </div>
            </>
        )
    }

    const handleAddCart = () =>{
        dispatch(addCart(product));
        Store.addNotification({
            title: "Đã thêm vào giỏ hàng",
            message: "",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 1500,
              showIcon: true
            },
          });
    }
    
    const ShowProducts = () => {
        return (
            <>
                <div className="left">
                    <img src={product.image} alt="product" />
                </div>
                <div className="right">
                    <div className="name">
                        <h1>
                            {product.title}
                        </h1>
                    </div>

                    <div className="price">
                        <h3>
                            $ {product.price}
                        </h3>
                    </div>
                    <div className="description">
                        {product.description}
                    </div>

                    <button onClick={() => 
                        handleAddCart()
                    }>
                        <i class="fas fa-cart-arrow-down"></i> Mua
                    </button>
                
                </div>
            </>
        )
    }

    return (
        <div className="container-product">
            {isLoading ? <Loading /> : <ShowProducts />}
        </div>
    )
}
