import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";
import { RoundedButton } from "./src/components/RoundedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.ImageBackground}
      />
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logoImage} />
        <Text style={styles.logoText}>DomiGo</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("./assets/email.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Correo electronico"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("./assets/password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton text='LOGIN'/>
        </View>

        <View style={styles.formRegister}>
          <Text>No tienes cuenta</Text>
          <Text style={styles.formRegisterText}>Registrate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    marginTop: 20,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 7,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: "italic",
    color: "#FFCA00",
    borderBottomWidth: 1,
    borderBottomColor: "#FFCA00",
    fontWeight: "bold",
    marginLeft: 10,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "15%", // Cambiado de 10% a 20% para mover más abajo
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 300, // Aumentado el tamaño
    height: 300, // Aumentado el tamaño
    borderRadius: 150, // La mitad del nuevo tamaño
    marginTop: 20,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20, // Aumentado el margen superior
  },
});
