import React, { useReducer } from "react";
import styles from "./App.module.css";
import { boxContext } from "./Context/Context";
import { reducer } from "./Context/Reducer";
import BoxContainer from "./Components/BoxContainer/BoxContainer";
import AddButton from "./Components/AddButton/Button";
import KeyboardButton from "./Components/KeyboardButton/KeyboardButton";

let initialState = {
  boxesArr: [],
  keyboard: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <boxContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <div className={styles.top}>
          <AddButton></AddButton>
          <KeyboardButton></KeyboardButton>
        </div>
        <BoxContainer></BoxContainer>
      </div>
    </boxContext.Provider>
  );
}

export default App;
