import { RecursiveComponent } from "./component/recursive";
// import { GreenSmallButton, RedButton } from "./component/composition";
import { RedButton, SmallRedButton } from "./component/partial"; 

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3"
};

function App() {
  return (
    <>
      {/* <RecursiveComponent data={myNestedObject} /> */}
      {/* <RedButton text="Im red!" />
      <GreenSmallButton text="Im small and green!" /> */}
      <RedButton text="Im red!" />
      <SmallRedButton text="Im small and red!" />
    </>
  );
}

export default App;
