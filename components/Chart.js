import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
import { useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';
export const {width: SIZE} = Dimensions.get('window');

const Chart = ({
    currentPrice, 
    priceChangePercentage7d,
    logoUrl,
    symbol,
    name,
}) => {
    const latestCurrentPrice = useSharedValue(currentPrice);

    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
    useEffect(()=>{
        latestCurrentPrice.value = currentPrice;
    },[currentPrice]);
    
     const formatUSD = value => {
        'worklet';
        if(value === ''){
            return `${currentPrice.toLocaleString('en-US', {currency: 'USD'})}`;
        }

        const formattedValue = `${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
        return `$${value.toLocaleString('en-US', {
            currency: 'USD',
        })}`;
    }
  return (
    <ChartPathProvider data={{ points:sparkline, smoothingStrategy: 'bezier' }}>
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

                <ChartYLabel 
                format={formatUSD}
                style={styles.boldTitle}

                />
                <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                <Text style={[styles.title, {color: priceChangeColor}]}>
                    {priceChangePercentage7d.toFixed(2)}%
                    </Text>
            </View>

        </View>

        {/* chart */}
        <View style = {styles.chartLineWrapper}>
                <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
                <ChartDot style={{ backgroundColor: 'black' }} />
        </View>
    </View>
    </ChartPathProvider>
  )
}

const styles = StyleSheet.create({
    chartWrapper:{
        marginVertical: 16,

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
        fontSize: 18,

    },
    chartLineWrapper:{
        marginTop: 40,
    }



})

export default Chart