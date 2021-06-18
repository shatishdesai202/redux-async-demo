import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./action";

const App = () => {
  const state = useSelector((state) => state);
  // console.log("state", state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPost());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(addPost())}>hit Me</button>
      <h1>{state.loading}</h1>
      {!state.loading ? (
        <div>
          {state.items.map((item) => (
            <h4 key={item.title}>{item.title}</h4>
          ))}
        </div>
      ) : (
        <h1> loading </h1>
      )}
      {state.error && JSON.stringify(state.error)}
    </div>
  );
};

export default App;
