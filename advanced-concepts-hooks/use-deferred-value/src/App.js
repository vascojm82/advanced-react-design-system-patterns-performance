import { useDeferredValue, useState } from "react";
import { HeavyComponent } from "./components/heavy-component";

// useDeferredValue is a React Hook that allows you to defer updating a non-urgent part of the UI.
// HeavyComponent will lag behind the keyword so that the input remains responsive

function App() {
  const [keyword, setKeyword] = useState("");

  // Get a deferred version of the keyword
  const deferredKeyword = useDeferredValue(keyword);

  console.log('keyword: ', keyword);
  console.log('deferredKeyword: ', deferredKeyword);

  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      {/* Passing the deferred value to a slow component */}
      <HeavyComponent keyword={deferredKeyword} />
    </>
  );
}

export default App;
