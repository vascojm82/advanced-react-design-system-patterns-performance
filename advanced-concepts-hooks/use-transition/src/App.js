import { useState, useTransition } from "react";
import Cover from "./components/cover";
import Reviews from "./components/reviews";
import Writer from "./components/writer";
import { StyledButton } from "./components/styled-elements";

// useTransition is a React Hook that lets you update the state without blocking the user interface. 
// It allows you to mark specific state updates as "Transitions," which React treats as non-urgent and interruptible.

function App() {
  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec) => {
    // This part is ran in order, not async
    console.log("Before");

    startTransition(() => {
      setSection(sec);
      
      console.log("inside");
    });
    
    console.log("after");
  };
  return (
    <>
      <StyledButton onClick={() => sectionHandler("Cover")}>
        Book Cover
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Reviews")}>
        Book Reviews
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Writer")}>
        Book's Writer
      </StyledButton>

      {isPending && "Now Loading..."}

      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

export default App;
