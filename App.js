import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import {SAMPLE_DATA} from './assets/data/sampleData';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
// import {
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableWithoutFeedback,
// } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { useMemo } from 'react';

const ListHeader = () => (
      <>
        <View style = {styles.titleWrapper}>
          <Text style={styles.largeTitle}> Markets</Text>
        </View>
        <View style = {styles.divider}/>
      </>
)

export default function App() {
    // ref
    const bottomSheetModalRef = useRef(null);
    // variables
    const snapPoints = useMemo(() => [ '50%'], []);

    const openModal = () => {
      bottomSheetModalRef.current.present();
     }

  return (
    <BottomSheetModalProvider> 
    <SafeAreaView style={styles.container}>
  
      <FlatList 
        keyExtactor= {(item) => item.id}
        data = {SAMPLE_DATA}
        renderItem={({item}) => (
        <ListItem
          name={item.name}
          symbol={item.symbol}
          currentPrice={item.current_price}
          priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
          logoUrl={item.image}
          onPress={() => openModal()}
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
          >
                <View style={styles.contentContainer}>
                        <Text>Awesome 🎉</Text>
                </View>
          
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
    

  }

});
