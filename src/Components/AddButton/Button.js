import React, { useContext } from "react";
import styles from "./Button.module.css";
import { boxContext } from "../../Context/Context";
import { ADD_BOX } from "../../Context/ActionTypes";

let AddButton = () => {
  const { state, dispatch } = useContext(boxContext);
  console.log(state.boxesArr.length);
  const handleAddBox = () => {
    dispatch({
      type: ADD_BOX,
      payload: {
        id: state.boxesArr.length,
        selected: false,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
    });
  };

  return (
    <div>
      <button className={styles.button} onClick={() => handleAddBox()}>
        Add Box
      </button>
    </div>
  );
};

export default AddButton;
