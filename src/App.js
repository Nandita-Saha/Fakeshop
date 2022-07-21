import React from 'react';
import ProductCard from './components/ProductCard';
import Navbar from './common/navbar/Navbar';
import Footer from './common/footer/Footer';
import banner_img from './images/tv-img1.png';
import './App.scss';
import { useAxiosGet } from './Hooks/HttpRequests';


function App() {
  const url = 'https://fakestoreapi.com/products';
  let Products = useAxiosGet(url)
  let content = null;

  if (Products.data) {
    content =
      Products.data.map((Product, key) =>
        <ProductCard Product={Product} key={key} />
      )
  }
  if (Products.error) {
    content =
      <p>There was an error in fetching data. Please try again.</p>
  }


  return (
    <div className="App">
      <Navbar />
      <section className="banner">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="banner-img-container">
                <img src={banner_img} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto">
              <h1>One Stop destination of your essentials.</h1>
              <a href='#bottom' className="bottom">
                <button className="explore d-block">Explore Products</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='bottom' className="product-list">
        <div className="container-fluid">
          <h2>Explore Products</h2>
          <div className="row">
            {content}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
