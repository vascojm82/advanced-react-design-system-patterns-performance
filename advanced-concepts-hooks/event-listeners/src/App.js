import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  // onClick is a bubble up event meaning bottom to top.  
  // IE: Console logs:
  //    Inner div 
  //    Outer div

  // onClickCapture is a capture event which happens top to bottom
  // IE: Console logs:
  //    Outer div
  //    Inner div

  return (
    <div 
      onClickCapture={() => console.log("Outer div")}
      style={{ position: "absolute", marginTop: 200 }}
    >
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <div className="alert" onClickCapture={() => {
      onClose();
      console.log("Inner div");
    }}>
      {children}
    </div>,
    document.querySelector("#alert-holder")
  )
}

export default App;
