// #rnfe
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
  return (
    <TouchableOpacity>
      <View style= {styles.itemWrapper}>

        {/* LEFT SIDE */}
        <View style={styles.itemLeft}>
            <Image source = {{uri: logoUrl}} style = {styles.image}/>
            <View style={styles.titlesWrapper}>
                <Text style = {styles.title}>{name}</Text>
                <Text style = {styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
        </View>
        {/* Rightside */}
        <View style={styles.itemRight}>
                <Text style = {styles.title}>${currentPrice.toLocaleString('en-US')}</Text>
                <Text style = {[styles.subtitle, {color: 'red'}]}>{priceChangePercentage7d}</Text>
        </View> 



      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

    itemWrapper: {
     paddingHorizontal: 16,
     marginTop: 24,
     flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       
        borderBottomColor: '#A9ABB1',
        
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemRight: {
        alignItems: "flex-end"
    },
    itemSubtitle: {
    
    },
    image: {
        width: 48,
        height: 48,
    },
    title: {
        fontSize: 18, 
    },
    titlesWrapper: {
         marginLeft: 8,   
    },
    subtitle: {
         fontSize: 14,
        color: "#A9ABB1",
        marginTop: 4,
    }
}   )
export default ListItem