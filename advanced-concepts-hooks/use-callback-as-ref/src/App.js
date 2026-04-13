import { useState, useCallback, useRef } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const realInputRef = useRef();
  const inputRef = useCallback((input) => {
    realInputRef.current = input;

    if(input === null) return;

    input.focus();
  }, []);

  console.log('realInputRef value: ', realInputRef.current);

  return (
    <>
      <button onClick={() => setShowInput(s => !s)}>Switch</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
