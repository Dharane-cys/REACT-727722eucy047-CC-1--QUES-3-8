import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './Product';
import img from './images/shoe.jpeg'
import im from './images/sneak.jpeg'
import ima from './images/scarf.webp'
import Theme from './Theme'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Product count="0" item="Common Projects Bball High" amount="$549" imgUrl={img}/>
  <Product count="0" item="Maison Margiela Future Sneakers" amount="$870" imgUrl={im}/>
  <Product count="0" item="Our Legacy Brushed Scarf" amount="$349" imgUrl={ima}/>
  <Theme/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
