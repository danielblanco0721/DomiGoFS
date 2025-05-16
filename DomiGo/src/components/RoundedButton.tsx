import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const RoundedButton = () => {
  return (
    <TouchableOpacity 
    style={styles.roundedButton}
    onPress={() => {}}>
      <Text style={ styles.textButton}>ENTRAR</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    roundedButton:{
        width: '100%',
        height: 50,
        backgroundColor: '#FF6F00',
        alignItems: 'center',

    },
    textButton:{
        color: 'blanck' ,
    }
});