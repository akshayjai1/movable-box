import React, { useContext, useCallback, useState } from "react";
import styles from "./Box.module.css";
import { BoxContext } from "../../Context/Context";
import { DELETE_BOX, SELECT_BOX, MOVE_BOX } from "../../Context/ActionTypes";
import { fn,fn2 } from "../../App";


// function Box( ){
// var keypressed = useCallback();
// var keypressed = useCallback();
// var keypressed = useCallback();
// state, 
// if(key == 1){
//   useCallback  
// }
// lifecycle() {
// s =1 
// key == 1

// }
// }
let Box = (k) => {
  const { state, dispatch } = useContext(BoxContext);
  // call back function after keypress & A S D W keys are detected on keyCode & dispatches action
  const keypressed = useCallback((e) => {
    console.log('calling keypressed');
    e.preventDefault();
    if (e.keyCode === 97) {
      dispatch({
        type: MOVE_BOX,
        payload: "left",
      });
    } else if (e.keyCode === 115) {
      dispatch({
        type: MOVE_BOX,
        payload: "bottom",
      });
    } else if (e.keyCode === 100) {
      dispatch({
        type: MOVE_BOX,
        payload: "right",
      });
    } else if (e.keyCode === 119) {
      dispatch({
        type: MOVE_BOX,
        payload: "top",
      });
    } else if (e.keyCode === 127) {
      dispatch({
        type: DELETE_BOX,
      });
    }
  },[dispatch]);
  // Keyboard Event Lister
  if (state.keyboard === true) {
    window.addEventListener('keypress',keypressed);
  } 

  // dispatches action after clicking on box (selects the box)

  const handleSelect = (id) => {
    dispatch({
      type: SELECT_BOX,
      payload: id,
    });
  };

  return (
    <>
      {state.boxesArr.map((item,index) => (
        <div
          className={styles.box}
          key={index}
          // key={item.id}
          // changes styles the positon of the box if box is selected or clicked
          style={
            item.selected === true
              ? {
                  position: "relative",
                  zIndex: item.id,
                  boxShadow: "0 0 15px rgb(158, 158, 158)",
                  backgroundColor: "rgb(80, 140, 251)",
                  transform: `translate(${item.right}px, ${item.bottom}px)`,
                }
              : {
                  position: "relative",
                  zIndex: item.id,
                  transform: `translate(${item.right}px, ${item.bottom}px)`,
                }
          }
          onClick={() => handleSelect(item.id)}
        >
          <div>
            <p className={styles.id}>{item.id}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
