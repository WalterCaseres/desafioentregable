import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'
import { SafeAreaView } from 'react-native-safe-area-context'

const Products = ({ route, navigation }) => {
  
    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState("");

    const { item } = route.params;


    useEffect(() => {

    const categoryProducts = products.filter((el) => el.category === item);
    setCategoryProd(categoryProducts)

    if (text) {
      const titleProduct = products.filter((el) => el.title === text);
      setCategoryProd(titleProduct);
    }

  }, [ item, text ]);
  

  return (
    <SafeAreaView>
        <Header title={item} />
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Ir Atras</Text>
        </Pressable>
        <Search text={text} setText={setText} />

        <FlatList 
        data={categoryProd} 
        keyExtractor={products.id}
        renderItem={({item}) => <ProductItem navigation={navigation} item={item} />}
        />

    </SafeAreaView>
  )
}

export default Products