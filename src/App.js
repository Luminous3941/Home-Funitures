import React from 'react';
import './App.css';
import Header from './Header';
// import ProductSlideshow from './ProductSlideshow';
import ProductsSection from './ProductsSection';
import CheckOut from './CheckOut';
// import ProductPage from './ProductPage';
// import CartPage from './CartPage';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <ProductSlideshow /> */}
      <ProductsSection />
      <CheckOut />
      {/* <ProductPage></ProductPage> */}
      {/* <CartPage/> */}
      <Footer />
    </div>
  );
};

export default App;
