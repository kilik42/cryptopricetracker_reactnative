// #rnfe
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = () => {
  return (
    <TouchableOpacity>
      <Text style= {styles.itemWrapper}>

        {/* LEFT SIDE */}
        <View style={styles.itemLeft}>
            <Image source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png'}} style = {styles.image}/>
            <View style={styles.titlesWrapper}>
                <Text style = {styles.title}>Ethereum </Text>
                <Text style = {styles.subtitle}>Eth</Text>
            </View>
        </View>
        {/* Rightside */}
        <View style={styles.itemRight}>
                <Text style = {styles.title}>Ethereum </Text>
                <Text style = {[styles.subtitle, {color: 'red'}]}>Eth</Text>
        </View> 



      </Text>
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
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#A9ABB1',
        
    },
    itemLeft: {

    },
    itemRight: {

    },
    itemSubtitle: {

    },
    image: {

    },
    title: {

    },
    titlesWrapper: {

    },
    subtitle: {

    }
}   )
export default ListItem