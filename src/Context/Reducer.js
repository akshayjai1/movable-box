import {
  ADD_BOX,
  DELETE_BOX,
  SELECT_BOX,
  MOVE_BOX,
  KEYBOARD,
} from "./ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BOX:
      return {
        ...state,
        boxesArr: [...state.boxesArr, action.payload],
      };

    case DELETE_BOX:
      return {
        ...state,
        boxesArr: state.boxesArr.filter((item) => {
          if (state.keyboard) {
            return !item.selected;
          } else {
            return item;
          }
        }),
      };

    case SELECT_BOX:
      return {
        ...state,
        boxesArr: state.boxesArr.map((item) => {
          if (item.id === action.payload) {
            item.selected = true;
          } else {
            item.selected = false;
          }

          return item;
        }),
      };

    case MOVE_BOX:
      return {
        ...state,
        boxesArr: state.boxesArr.map((item) => {
          if (item.selected === true && state.keyboard === true) {
            if (action.payload === "top") {
              item.bottom = item.bottom - 5;
            } else if (action.payload === "bottom") {
              if(item.bottom < 100)
              item.bottom = item.bottom + 5;
            } else if (action.payload === "right") {
              item.right = item.right + 5;
            } else if (action.payload === "left") {
              item.right = item.right - 5;
            }
          }

          return item;
        }),
      };

    case KEYBOARD:
      return {
        ...state,
        keyboard: !state.keyboard,
      };

    default:
      return state;
  }
};
