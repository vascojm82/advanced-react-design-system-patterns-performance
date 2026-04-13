import { useState } from "react";
import Counter from "./counter";
import './App.css';

function App() {
  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <>
      {/* Below, if Counter didn't have a key, Counter would not be re-rendered and its state value will be kept the same */}
      {/* whenever there's a change from Shirts to Shoes counts, by adding a key to Counter we force React to re-render Counter */}
      {/* therefore re-setting the state to 0 every time there's a changeShirts */}
      {/* In React, changing a component's key forces it to unmount and remount from scratch — React treats it as a completely */}
      {/* different component instance, not an update to the existing one. */}
      <div>
        {changeShirts ? (
          <>
            <span>Shirts counts: </span> <Counter key="shirts"/>
          </>
        ):
        (
          <>
            <span>Shoes counts: </span> <Counter key="shoes" />
          </>
        )}
        <br />
        <button onClick={() => setChangeShirts(s => !s)}>Switch</button>
      </div>  
      
      <br />

      <div>
        {changeShirts ? (
          <span>Shirts counts: </span>
        ): (
          <span>Shoes counts: </span>
        )}
        <br />
        {/* If there's no key on the input below, the state never changes because React won't re-render the input */}
        {/* if we add a key to the input below, that forces React to destroy the input and re-render it, effectively changing its state */}
        {/* React interprets this as saying if the key changes then this is a brand new input component and I have to re-render it  */}
        <input type="number" key={changeShirts ? "shirts": "shoes"} />
        <br />
        <button onClick={() => setChangeShirts(s => !s)}>Switch</button>
      </div>
    </> 
  );
}

export default App;
