import React, { useState } from 'react';
import './App.css';
import ShopItem from './components/ShopItem';
import { shopItemData } from './shopItemData';
import './components/styles.css';
import Navbar from './components/NavBar';

function App() {
  const [cart, setCart] = useState(0);

  const addToCart = ()=> {
    setCart(prevCart => prevCart + 1);
  };

  const cards = shopItemData.map(item => (
    <div key={item.id}>
      <ShopItem
        id={item.id}
        title={item.title}
        imageURL={item.imageURL}
        price={item.price}
        quantity={item.quantity}
        isFavorite={item.isFavorite}
        onClick={addToCart}
      />
    </div>
  ));

  return (
    <div className="App">
      <Navbar cart={cart} />
      <section className='shop-container'>
        {cards}
      </section>
    </div>
  );
}

export default App;

