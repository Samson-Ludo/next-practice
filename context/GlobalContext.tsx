import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" };

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const GlobalStateContext = createContext<State | undefined>(undefined);
const GlobalDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProivder");
  }
  return context;
};

export const useGlobalDispatch = () => {
  const context = useContext(GlobalDispatchContext);

  if (context === undefined) {
    throw new Error("useGlobalDispatch must be used within a GlobalProvider");
  }
  return context;
};
