import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';
import { useFonts } from 'expo-font';
import ProductDetail from './src/screens/ProductDetail';

export default function App() {

  const [fontsLoaded] = useFonts({

    Tipografia1: require("./assets/Fonts/CroissantOne-Regular.ttf"),
    Tipografia2: require("./assets/Fonts/Pacifico-Regular.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <SafeAreaView>
    {/*<Home />*/}
    {/*<Search />*/}
    {/*<Products category="smartphones" />*/}
    <ProductDetail />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
