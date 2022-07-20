import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/navbar/Navbar";
import Footer from "../../common/footer/Footer";
import banner_img from '../../images/tv-img1.png';
import "../../App.scss";
import { useAxiosGet } from "../../Hooks/HttpRequests";

function ProductDetails() {
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    let Product = useAxiosGet(url);
    let content = null;

    if (Product.data) {
        content =
            <div className="row justify-content-between">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="prd-detail-img">
                        <img src={Product.data.image} className="img-fluid"></img>
                    </div>
                    <div className="action-buttons">
                        <button className="add-to-cart">Add to Cart</button>
                        <button className="buy-now">Buy Now</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1>{Product.data.title}</h1>
                    <div className="rating-details">
                        <div className="ratings">
                            <span className="rating-value">{Product.data.rating.rate}</span>*
                        </div>
                        <div className="count">
                            <span className="count-value">{Product.data.rating.count}</span>ratings
                        </div>
                    </div>
                    <div className="price-details">
                        <p id="price">$ <span>{Product.data.price}</span></p>
                        <p id="max-price">$ <span>120.50</span></p>
                        <p id="discount"><span>55%</span>off</p>
                    </div>
                    <div className="description">
                        <h6>Description</h6>
                        <p>{Product.data.description}</p>
                    </div>
                </div>

            </div>
    }
    if (Product.error) {
        content =
            <p>There was an error in fetching data. Please try again.</p>
    }
    return (
        <>
            <Navbar />
            <div className="product-details">
                <div className="container-fluid">
                    {content}
                    {/* <div className="row justify-content-between">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="prd-detail-img">
                                <img src={props.Product.image} className="img-fluid"></img>
                            </div>
                            <div className="action-buttons">
                                <button className="add-to-cart">Add to Cart</button>
                                <button className="buy-now">Buy Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h1>Mens Casual Premium Slim Fit T-Shirts</h1>
                            <div className="rating-details">
                                <div className="ratings">
                                    <span className="rating-value">4.1</span>*
                                </div>
                                <div className="count">
                                    <span className="count-value">220</span>ratings
                                </div>
                            </div>
                            <div className="price-details">
                                <p id="price">$ <span>22.3</span></p>
                                <p id="max-price">$ <span>44.6</span></p>
                                <p id="discount"><span>55%</span>off</p>
                            </div>
                            <div className="description">
                                <h6>Description</h6>
                                <p>
                                    Note:The Jackets is US standard size, Please choose size as your usual wear
                                    Material: 100% Polyester;
                                    Detachable Liner Fabric: Warm Fleece.
                                    Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.
                                    Stand Collar Liner jacket, keep you warm in cold weather.
                                    Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.
                                    Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates
                                </p>
                            </div>
                        </div>

                    </div> */}

                </div>
            </div>
            <Footer />
        </>

    )
}

export default ProductDetails;