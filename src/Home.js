import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321009"
            title="cuderia Ferrari Forza Evo Analog Black Dial Men's Watch-0830902"
            price={349.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71pwVPqXxsL._UY879_.jpg"
          />
                   <Product
            id="12434099"
            title="Nike Jordan Stay Loyal 2 Mens Shoes"
            price={749}
            rating={4}
            image="https://m.media-amazon.com/images/I/416PrcWM4EL._UY535_.jpg"
          />

          <Product
            id="49538094"
            title="Safari Pentagon Polypropylene 55 cms Cyan Hardsided Cabin Luggage, 4 Wheel Trolley Bag, Travel Suitcase for Men and Women"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/514xUT1xYVL._UX679_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
                   id= "787899805"
                   title= "Play station game pad"
                   image= "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B638E86650FFF18._V531815327_.jpg"
                   price= {19.96}
                   rating= {5}
          />
        <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
