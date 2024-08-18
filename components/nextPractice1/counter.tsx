import React from "react";
import { useGlobalState, useGlobalDispatch } from "@/context/GlobalContext";
import Button1 from "./button1";

const Counter: React.FC = () => {
  const { count } = useGlobalState();
  const dispatch = useGlobalDispatch();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <div className="space-x-4">
        <Button1
          onClick={() => {
            dispatch({ type: "increment" });
          }}
          size="medium"
          color="primary"
          isLoading={false}
          disabled={false}
          className="w-auto"
        >
          Increment
        </Button1>
        <Button1
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
          size="medium"
          color="danger"
          isLoading={false}
          disabled={false}
          className="w-auto"
        >
          Decrement
        </Button1>
      </div>
    </div>
  );
};

export default Counter;
