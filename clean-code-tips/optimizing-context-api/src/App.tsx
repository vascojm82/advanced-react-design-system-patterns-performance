import React from "react";
import { CartProvider } from "./components/cart-context";
import Buttons from "./components/buttons";
import Display from "./components/display";
import "./style.css";

function App() {
  // Split context into two separate context(s) one for Display and one for Buttons
  // to reduce load times as the buttons will not be re-rendered every time the count 
  // changes in this manner.  See 'cart-context.tsx'
  
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}

export default App;