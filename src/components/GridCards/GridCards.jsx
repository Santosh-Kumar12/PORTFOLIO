import React from 'react';
import './GridCards.css';

const GridCards = () => {
  const cards = [
    { imgSrc: "../images/Chat Application.png", title: "Chat Application", link: "https://chatapplication-zx8i.onrender.com/login" },
    { imgSrc: "../images/Clothing.png", title: "Ecommerce Website", link: "https://santosh-kumar12.github.io/ecommerce/" },
    { imgSrc: "../images/Weather.png", title: "Weather Forecast", link: "https://santosh-kumar12.github.io/weather/" },
    { imgSrc: "../images/Todo.png", title: "Todo Application", link: "https://santosh-kumar12.github.io/todolist/" },
    { imgSrc: "../images/Dictionary.png", title: "Dictionary App", link: "https://santosh-kumar12.github.io/Dictionary/" },
    { imgSrc: "https://via.placeholder.com/", title: "still working", link: "#" }
  ];

  return (
    <div className="grid-container">
      {cards.map((card, index) => (
        <a href={card.link} className="card-link" key={index}>
          <div className="card">
            <img src={card.imgSrc} alt="Placeholder Image" />
            <h3 className="special">{card.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GridCards;
