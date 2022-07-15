// #rnfe
import { View, Text, StyleSheet.Image } from 'react-native'
import React from 'react'

const ListItem = () => {
  return (
    <TouchableOpacity>
      <Text style= {styles.itemWrapper}>

        {/* LEFT SIDE */}
        <View style={styles.itemLeft}>
            <Image source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png'}} style = {styles.image}/>
            <View style={styles.itemSubtitle}>
                <Text>Ethereum </Text>
                <Text>Eth</Text>
            </View>
        </View>
        {/* Rightside */}
        <View style={styles.itemRight}>
            <Text style={styles.itemPercentage}>
                +0.00% 
            </Text>'
        </View> 



      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

    itemWrapper: {
     

    },
    itemLeft: {

    },
    itemRight: {

    },
    itemSubtitle: {

    },
    image: {

    }
}   )
export default ListItem