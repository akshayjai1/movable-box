import React, { useReducer } from "react";
import styles from "./App.module.css";
import { BoxContext } from "./Context/Context";
import { reducer } from "./Context/Reducer";
import BoxContainer from "./Components/BoxContainer/BoxContainer";
import {Button} from "./Components/AddButton/Button";
import KeyboardButton from "./Components/KeyboardButton/KeyboardButton";
import { Main } from "./Main";

export const initialState = {
  boxesArr: [1],
  keyboard: false,
};
export const fn = () => {
  console.log('called function');
}
export const fn2 = () => {
  console.log('called function2');
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Main />
/*   return (
    <BoxContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Button></Button>
          <p className={styles.info}>
            * Use "A", "S", "D", "W" keys to move box
          </p>
          <KeyboardButton></KeyboardButton>
        </div>
        <BoxContainer></BoxContainer>
      </div>
    </BoxContext.Provider>
  ); */
}

export default App;
