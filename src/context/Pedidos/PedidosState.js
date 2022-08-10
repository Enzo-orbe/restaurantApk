import React, {useReducer} from 'react';
import PedidosContext from './PedidosContext';
import PedidosReducer from './PedidosReducer';

const PedidosState = props => {
  const initialState = {
    pedido: [],
  };

  //usar reducer
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  return (
    <PedidosContext.Provider value={{pedido: state.pedido}}>
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
