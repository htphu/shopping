import React from 'react'
import './Card.scss'
import { Link } from "react-router-dom";

export default function Card(props) {
    
  return (
    <div className="card">
        <div className="card-image">
            <img src={props.image} alt="product" />
        </div>
        <div className="card-name">
            {props.title}
        </div>
        
        <div className="card-price">
            $ {props.price}
        </div>
        <div className="card-control">
            <Link to={"/shopping/product/"+props.id}>
                
                <button  className="card-button"><i class="fas fa-cart-arrow-down"></i> Mua</button>
            </Link>
        </div>
    </div>
  )
}
