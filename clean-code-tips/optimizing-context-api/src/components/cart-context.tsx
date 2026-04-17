import React, { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Provide a valid action.");
  }
};

type StateContext = {
  count: number;
};

type DispatchContext = Dispatch<Action>;

// Without two contexts, one for the state(count) and another for the dispatch(s), 
// meaning only one context for the entire App, when the count changes, both the 
// count number and the +/- buttons get re-rendered, which is not performant since
// the buttons re-render takes time, we want only the count to re-render, not the 
// buttons.  To accomplish this, we separate the context into two different ones,
// one for the count(state) and one for the dispatch(s).

export const StateContext = createContext<StateContext | null>(null);
export const DispatchContext = createContext<DispatchContext | null>(null);

type CartProviderProps = {
    children: ReactNode;
};

export const CartProvider = ({children}: CartProviderProps ) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return(
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

export function useStateContext() {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
};

export function useDispatchContext() {
  const value = useContext(DispatchContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
};


