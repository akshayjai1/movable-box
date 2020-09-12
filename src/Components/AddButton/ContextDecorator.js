import React, { useReducer } from 'react';
import { initialState } from '../../App';
import { BoxContext } from '../../Context/Context';
import { reducer } from '../../Context/Reducer';

export const ContextDecorator = (props) => {
const [state, dispatch] = useReducer(reducer, initialState);
  return <BoxContext.Provider value={{state,dispatch}}>
     {props.children}
     </BoxContext.Provider>
}