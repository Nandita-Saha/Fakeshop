import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6" >
            <div className="product-container">
                <Link className="product-link" to={`/${props.Product.id}`} target="_blank">
                    <div className="product-img-container">
                        <img src={props.Product.image} className="img-fluid" />
                    </div>
                    <p className="product-description">{props.Product.title}</p>
                </Link>
                <div className="price-details">
                    <p id="price">$ <span>{props.Product.price}</span></p>
                    <p id="max-price">$ <span>44.6</span></p>
                    <p id="discount"><span>55%</span>off</p>
                </div>
            </div>
        </div>
    );

}

export default ProductCard;