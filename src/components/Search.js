import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons'; 


const Search = ({ text, setText }) => {
    const clearText = () => {
        setText(null);
    };

  return (
    <View style={styles.container}>
        <TextInput

        onChangeText={(value) => setText(value)}
        value={text}
        style={styles.input}
        placeholder="Buscar Producto" />
    <Pressable onPress={() => clearText()}>
        <AntDesign name="delete" size={30} color="black" /> 
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
    },

    input: {
        width: "88%",
        borderWidth: 3,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        color: colors.lightBlue,
    },
})

export default Search