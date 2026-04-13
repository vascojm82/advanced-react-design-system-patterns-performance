import { useState, useRef, useLayoutEffect } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  // useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
  // useEffect fires after the browser has painted the screen on the other hand.

  // useLayoutEffect is a React Hook that performs side effects synchronously after the DOM has been mutated but before the browser has a chance to paint the screen.

  useLayoutEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  }, [show]);

  // const now = performance.now();
  // while (now > performance.now() - 100) {
  //   //Do something
  // }

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
        Show
      </button>
      {show && (
        <div
          className="tooltip"
          style={{
            top: `${top}px`,
          }}
        >
          Some text ...
        </div>
      )}
    </>
  );
}

export default App;
