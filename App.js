import { useEffect, useRef } from 'react';
import { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import {SAMPLE_DATA} from './assets/data/sampleData';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Chart from './components/Chart';
import { useState } from 'react';
import { getMarketData } from './services/cryptoService';
// import {
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableWithoutFeedback,
// } from '@gorhom/bottom-sheet';


const ListHeader = () => (
      <>
        <View style = {styles.titleWrapper}>
          <Text style={styles.largeTitle}> Markets</Text>
        </View>
        <View style = {styles.divider}/>
      </>
)

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() =>{
    const fetchMarketData  = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }
    fetchMarketData();
  }, []);

    // ref
    const bottomSheetModalRef = useRef(null);
    // variables
    const snapPoints = useMemo(() => [ '40%'], []);

    const openModal = (item) => {
      setSelectedCoinData(item);
      bottomSheetModalRef.current.present();
     }

  return (
    <BottomSheetModalProvider> 
    <SafeAreaView style={styles.container}>
  
      <FlatList 
        keyExtactor= {(item) => item.id}
        data = {data}
        renderItem={({item}) => (
        <ListItem
          name={item.name}
          symbol={item.symbol}
          currentPrice={item.current_price}
          priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
          logoUrl={item.image}
          onPress={() => openModal(item)}
          />
         )}
         ListHeaderComponent ={<ListHeader/>}
         />
    
    </SafeAreaView>

          <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              // onChange={handleSheetChanges}
              style={styles.bottomSheet}
          >
            {selectedCoinData ? (
               <Chart  
                currentPrice={selectedCoinData.current_price}
                priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
                logoUrl={selectedCoinData.image}
                name={selectedCoinData.name}
                symbol={selectedCoinData.symbol}
                sparkline = {selectedCoinData.sparkline_in_7d.price}

               />)
               :
               null
              }
          </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  titleWrapper: {
    marginTop: 20 ,
    paddingHorizontal: 16
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal:16 ,
    marginTop: 16
    

  },
  bottomSheet:{
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  }

});
