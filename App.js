import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NuevaOrden from './src/views/NuevaOrden';
import Menu from './src/views/Menu';
import ResumenPedido from './src/views/ResumenPedido';
import DetallePlato from './src/views/DetallePlato';
import ProgresoPedido from './src/views/ProgresoPedido';
import Formulario from './src/views/Formulario';
import FirebaseState from './src/context/FirebaseContext/FirebaseState';
import PedidosState from './src/context/Pedidos/PedidosState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidosState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#ffda00',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}>
              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{title: 'Nueva Orden'}}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{title: 'Menu'}}
              />
              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{title: 'Resumen Pedido'}}
              />
              <Stack.Screen
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{title: 'Progreso Pedido'}}
              />
              <Stack.Screen
                name="Detalle"
                component={DetallePlato}
                options={{title: 'Detalle'}}
              />
              <Stack.Screen
                name="Formulario"
                component={Formulario}
                options={{title: 'Realizar Pedido'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidosState>
      </FirebaseState>
    </>
  );
};

export default App;
