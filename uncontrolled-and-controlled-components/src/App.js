import { useState } from "react";
import { ControlledForm } from "./components/controlled-form";
import { ControlledModal } from "./components/controlled-modal";
import { UncontrolledForm } from "./components/uncontrolled-form";
import { UncontrolledModal } from "./components/uncontrolled-modal";
import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-flow";

const StepOne = ({ goNext }) => {
  return(
    <>
      <h1>Step # 1: Enter your name:</h1>
      <button onClick={() => goNext({name: 'My Name'})}>Next</button>
    </>
  );
}

const StepTwo = ({ goNext }) => {
  return(
    <>
      <h1>Step # 2: Enter your age:</h1>
      <button onClick={() => goNext({age: 43})}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return(
    <>
      <h1>Congratualtions! You qualify for a gift!</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
}

const StepFour = ({ goNext }) => {
  return(
    <>
      <h1>Step # 3: Enter your country:</h1>
      <button onClick={() => goNext({country: 'UK'})}>Next</button>
    </>
  );
}

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [currentStepIndex, setCurrentStepindex] = useState(0);
  const [data, setData] = useState({});

  const goNext = ( dataFromStep ) => {
    const updatedData = { ...data, ...dataFromStep };
    setData(updatedData);
    setCurrentStepindex(currentStepIndex + 1);
  }

  return (
    <>
      <UncontrolledForm />

      <ControlledForm />

      <br />
      
      <UncontrolledModal>
        <h1>Body of Uncontrolled Modal</h1>
      </UncontrolledModal>
      
      <br />
      
      <ControlledModal 
        shouldDisplay={shouldDisplay} 
        onClose={() => setShouldDisplay(false)} 
      >
        <h1>Body of Controlled Modal</h1>
      </ControlledModal>
      <br />
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>{shouldDisplay? "Hide Controlled Modal": "Display Controlled Modal"}</button>
      
      <br />

      <h2>Uncontrolled Flow</h2>
      <UncontrolledFlow onDone={data => {
        console.log("Data:", data);
        alert("You made it to the final step!");
      }}>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </UncontrolledFlow>

      <br />

      <h2>Controlled Flow</h2>
      <ControlledFlow
        onDone={(dataFromStep) => {
          const finalData = { ...data, ...dataFromStep };
          console.log("Data:", finalData);
          alert("You made it to the final step!");
        }}
        currentIndex={currentStepIndex}
        onNext={goNext}
      >
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
