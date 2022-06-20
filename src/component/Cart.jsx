import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { giam, tang } from './redux/action';
import './Cart.scss';

export default function Cart({toggleCart}) {
    const products = useSelector(state => state.handleCart);
    const dispatch = useDispatch();
    const CartItem = (props) => {
        const p = props.products;
        return (
            <div className="cart-item">
                <div className="cart-left">
                    <img src={p.image} alt="product" />

                </div>
                <div className="cart-right">
                    <p>{p.title}</p>
                    <div className="soLuong">
                        Số lượng:
                        <input type="button" value="-" onClick={() => {
                            dispatch(giam(p))
                        }
                        } />
                        <span> {p.quantity} </span>
                        <input type="button" value="+" onClick={() => {
                            dispatch(tang(p))
                        }
                        } />
                    </div>
                    <p className="cart-price">$ {p.price} * {p.quantity}</p>
                </div>
            </div>
        )
    }
    const showProductInCart = () => {
        return (
            products.map((products, index) => <CartItem key={index} products={products} />)
        )
    }
    const Total = () => {
        let total = 0;
        products.map((products) => total = total + (products.quantity * products.price))
        return (
            total
        )
    }
    return (
        <div className="mask">
            <div className="cart">
                <div className="cart-title">
                    <h3>Giỏ hàng</h3>
                    <i className="fas fa-times" onClick={toggleCart}></i>
                </div>
                {showProductInCart()}
                <div className="cart-total">
                    <div className="cart-price">Tổng: $ <Total /> </div>
                    <button>Thanh toán</button>
                </div>
            </div>
        </div>
    )
}
