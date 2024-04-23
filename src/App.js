import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
  const [shoes, setShoes] = useState([
    { img: `${process.env.PUBLIC_URL}/images/shoe%201.jpg`, name: "LOGO 9540 BKA", price: "Rs. 17,500", isSold: false },
    { img: `${process.env.PUBLIC_URL}/images/shoe%202.jpg`, name: "LOGO 9539 BKA", price: "Rs. 17,500", isSold: true },
    { img: `${process.env.PUBLIC_URL}/images/shoe%203.jpg`, name: "LOGO 9538 BKA", price: "Rs. 16,500", isSold: false },
    { img: `${process.env.PUBLIC_URL}/images/shoe%204.jpg`, name: "LOGO 9569 BKA", price: "Rs. 18,000", isSold: true },
    { img: `${process.env.PUBLIC_URL}/images/shoe%205.jpg`, name: "LOGO 9541 BKA", price: "Rs. 18,000", isSold: true },
    { img: `${process.env.PUBLIC_URL}/images/shoe%206.jpg`, name: "LOGO 9576 BKA", price: "Rs. 18,000", isSold: false }

  ]);


  const changeAllShoes = () => {
    // Assuming you have an array of unique image identifiers for simplicity
    let availableImages = Array.from({length: 13}, (_, i) => i + 1); // [1, 2, ..., 13]
    availableImages = availableImages.sort(() => Math.random() - 0.5); // Shuffle
  
    setShoes(shoes.map((shoe, index) => ({
      ...shoe,
      img: `${process.env.PUBLIC_URL}/images/shoe%20${availableImages[index]}.jpg`, // Ensures unique images
      name: `LOGO ${Math.floor(9500 + Math.random() * 500)} BKA`,
      price: `Rs. ${Math.floor(17500 + Math.random() * 5000)}`,
      isSold: Math.random() > 0.5
    })));
  };
  
    

  return (
    <div className="App">
      <Header />
      <div className="cards">
        {shoes.map((shoe, index) => (
          <Card key={index} {...shoe} />
        ))}
      </div>
      <button onClick={changeAllShoes}>Change All Shoes</button>
    </div>
  );
}

export default App;
