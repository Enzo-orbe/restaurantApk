import React, {useReducer} from 'react';
import firebaseContext from './firebaseContext';
import FirebaseReducer from './FirebaseReducer';
import firebase from '../../Firebase';
const FirebaseState = props => {
  const initialState = {
    menu: [],
  };

  //usar reducer
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return (
    <firebaseContext.Provider value={{menu: state.menu, firebase}}>
      {props.children}
    </firebaseContext.Provider>
  );
};

export default FirebaseState;
