import React from 'react';
import WishMessage from "./components/WishMessage";
import ProductItem from "./ProductItem";



function App() {
  return (
    <div className="App">
        <div className="navbar navbar-dark bg-dark">
            <a href="/" className="navbar-brand">Events in React-JS</a>
        </div>
        {/*<WishMessage />*/}
        <ProductItem />
    </div>
  );
}

export default App;
