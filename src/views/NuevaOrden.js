import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text, NativeBaseProvider, Box} from 'native-base';
import globlalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const NuevaOrden = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider style={globlalStyles.contenedor}>
      <Container style={globlalStyles.contenedor}>
        <Box style={[styles.contenido, globlalStyles.contenido]}>
          <Button
            borderRadius="full"
            width="full"
            style={globlalStyles.boton}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={globlalStyles.botonTexto}>Nueva Orden</Text>
          </Button>
        </Box>
      </Container>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default NuevaOrden;
