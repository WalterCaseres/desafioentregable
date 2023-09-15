import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    categoryText:{
        fontSize: 20,
        margin: 5,
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",

        borderColor: colors.white,
        borderWidth: 4,
        borderRadius: 100,
    
        
        textAlign: 'center',
        padding: 10,

    },

})

export default CategoryItem