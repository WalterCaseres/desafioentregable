import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        height: 85,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },

    headerText: {
        fontSize: 25,
        marginVertical: 18,
        fontWeight: "600",
        color: colors.heavyBlue,
        fontFamily: "Tipografia1",
    }
})

export default Header;