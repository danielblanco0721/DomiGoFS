import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.jpg')} 
        style={styles.ImageBackground}
      />
      <View style={ styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logoImage}
          />
          <Text style={styles.logoText}>DomiGo</Text>
      </View>

      <View style={styles.form}>      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '20%', // Cambiado de 10% a 20% para mover más abajo
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 300, // Aumentado el tamaño
    height: 300, // Aumentado el tamaño
    borderRadius: 150, // La mitad del nuevo tamaño
    marginTop: 20,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20, // Aumentado el margen superior
  }
});
