import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { useWindowDimensions } from 'react-native'

const Home = () => {

const {height, width} = useWindowDimensions()

  return (
    <View>
        <Header title="Categorias" />
        <Categories />
    </View>
  )
}

export default Home