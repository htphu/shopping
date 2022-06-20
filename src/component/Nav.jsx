import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './Nav.scss';
import Cart from './Cart';

export default function Nav() {
  const [sCart, setSCart] = useState(false);

  const products = useSelector(state => state.handleCart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const Count =()=>{
    let count = 0;
    products.map((products)=>count = count + products.quantity)
    return(count)
  }
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-left">
          <i className="fal fa-shopping-basket" onClick={()=>navigate("/shopping")}></i>
        </div>
        <div className="nav-mid">
          <span><NavLink to="/shopping">Home</NavLink></span>
          <span><NavLink to="/shopping/about">About</NavLink></span>
          <span><NavLink to="/shopping/blog">Blog</NavLink></span>
          <span><NavLink to="/shopping/contact">Contact</NavLink></span>
        </div>
        <div className="nav-right">
          <i className="fas fa-shopping-cart" onClick={() => setSCart(!sCart)}>
            <div className="count"><Count/></div>
          </i>
          {sCart && <Cart toggleCart={()=>setSCart(!sCart)}/>}
        </div>
      </div>
    </div>
  )
}
