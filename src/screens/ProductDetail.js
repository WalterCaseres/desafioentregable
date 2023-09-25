import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { products } from '../data/products';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetail = ({navigation}) => {
    const initialProd = products[1]

  return (
    
    <SafeAreaView>

      <Header title = "Detalles" />
      <Pressable onPress={() => navigation.goBack()}>
          <Text>Ir Atras</Text>
        </Pressable>
      <View style={styles.containerImage}>
        <Image 
        style={styles.image}
        source={{ uri: initialProd.images[2], }}
        />
        <Text style={styles.title}> Titulo: {initialProd.title} </Text>
        <Text style={styles.description}> Descripcion: {initialProd.description} </Text>
        <Text style={styles.precio}> Precio: {initialProd.price} </Text>
        <Text style={styles.rating}> Rating: {initialProd.rating} </Text>
        <Text style={styles.stock}> Stock: {initialProd.stock} </Text>
      </View>
      <Pressable style={styles.button} onPress={() => "Agregar al Carrito"}>
        <Text style={styles.textoButton}> Comprar </Text>
      </Pressable>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    image: {
        height: 350,
        width: 350,
    },

containerImage: {
    alignItems: 'center',
},

title: {
    fontSize: 30,
    fontFamily: "Tipografia2",
    fontWeight: "900",
    color: colors.heavyBlue,
    marginVertical: 15,
},

description: {
    fontSize: 17,
    fontFamily: "Tipografia1",
    fontWeight: "400",
    color: colors.lightBlue,
    marginBottom: 15,
},

precio: {
    fontSize: 31,
    fontFamily: "Tipografia1",
    fontWeight: "400",
    color: colors.lightBlue,
},

rating: {
    fontSize: 17,
    fontFamily: "Tipografia1",
    fontWeight: "400",
    color: colors.lightBlue,
},

stock: {
    fontSize: 17,
    fontFamily: "Tipografia1",
    fontWeight: "400",
    color: colors.lightBlue,
},

button: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
},

textoButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: colors.white,
},

});

export default ProductDetail;