import { memo } from "react";

// React.memo is a higher-order component (HOC) used to optimize the performance of functional components 
// by skipping unnecessary re-renders when their props have not changed.

const Component = ({ keyword }) => {
  const init = performance.now();
  while (init > performance.now() - 100) {
    //Slowing down the component on purpose.
  }
  return (
    <>
      <h2>I am a slow component</h2>
      {keyword}
    </>
  );
};

export const HeavyComponent = memo(Component);
