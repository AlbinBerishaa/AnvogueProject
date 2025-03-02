import { data1, data2 } from "./ProductInfo.js";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import ListCollection from "./components/ListCollection.jsx";
import Product from "./components/Products.jsx";
import Testmonials from "./components/Testmonials.jsx";
import InstaSection from "./components/InstaSection.jsx";
import Brands from "./components/Brands.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import { useState } from "react";
import HeaderProduct from "./components/HeaderProduct.jsx";
import BreadCrumbs from "./components/BreadCrumbs.jsx";
import MainProduct from "./components/MainProduct.jsx";

function App() {
  let cssClass = "margin-bottom";

  const [isProductPage, setIsProductPage] = useState(false);

  function handleProductPage() {
    setIsProductPage(true);
  }

  function handleHomePage() {
    setIsProductPage(false);
  }

  return (
    <>
      {!isProductPage && (
        <>
          <Header onChange={handleProductPage} onUnChange={handleHomePage} />

          <Hero />
          <Banner />
          <ProductInfo
            sectionClass={"benefit-section"}
            cardClass={"benefit-cards"}
            items={data1}
          />
          <ListCollection />
          <div className="menu-categories">
            <button className="menu-categories-btn">
              <p>Best Sellers</p>
            </button>
            <button className="menu-categories-btn" id="btn-active">
              <p>On Sale</p>
            </button>
            <button className="menu-categories-btn">
              <p>Arrivals</p>
            </button>
          </div>
          <Product />
          <h1 className="related-products">Related Products</h1>
          <Product />
          <Testmonials />
          <InstaSection />
          <Brands />
          <Footer />
        </>
      )}
      {isProductPage && (
        <>
          <HeaderProduct
            onChange={handleProductPage}
            onUnChange={handleHomePage}
          />
          <BreadCrumbs />
          <MainProduct />
          <ProductInfo
            sectionClass={"mat-description"}
            cardClass={"mat-card"}
            items={data2}
          />
          <h1 className="related-products">Related Products</h1>
          <Product onMargin={cssClass} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
