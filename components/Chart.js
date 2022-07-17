import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Chart = ({
    currentPrice, 
    priceChangePercentage7d,
    logoUrl,
    symbol,
    name,
}) => {
  return (
    <View style = {styles.chartWrapper}>

      {/* titles */}
        <View style = {styles.titlesWrapper}>

            <View style = {styles.upperTitles}>
                <View style= {styles.upperLeftTitle}>
                    <Image source={{uri: logoUrl}} style={styles.image}/>
                    <Text style={styles.subtitle}>{name} ({symbol})</Text>

                </View>
                <Text style={styles.subtitle}>7d</Text>

            </View>

            {/* lower section */}
            <View style = {styles.lowerTitles}>
                <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                <Text style={styles.title}>
                    {priceChangePercentage7d.toFixed(2)}%
                    </Text>
            </View>

        </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    chartWrapper:{
        margin: 16,

    },
    titlesWrapper:{

    },
    upperTitles:{
         flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    upperLeftTitle:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    image:{
            width: 24,
            height: 24,
            marginRight: 4,
    },
    subtitle:{
        fontSize: 14,
        color: '#A9ABB1',

    },
    lowerTitles:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',     
            

    },
    boldTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    title:{

    }



})

export default Chart