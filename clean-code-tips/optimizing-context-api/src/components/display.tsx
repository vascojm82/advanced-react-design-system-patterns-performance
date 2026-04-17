import React from "react";
import { useStateContext } from "../components/cart-context";

const Display = () => {
  const { count } = useStateContext();
  return <span className="span">{count}</span>;
};

export default Display;
