// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const {height,width} = Dimensions.get('window')
const style = StyleSheet.create({
    Box : {
        backgroundColor : '#B0CA87',
        height : height/7,
        width : width,
        margin : 5,
    },
    BoxMatch : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    image: {
        width:40,
        height:40,
        margin : 10,
    },
    text: {
       color: "black",
       fontSize : 25
    },
    textBoxMatch: {
        color: "white",
        fontSize : 25
     },
     button : {
         backgroundColor : "white",
         width : width/2.5,
         height : 20,
         alignItems : "center",
         borderRadius : 25
     },
     linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
})

const RenderItem = (props) => {
    return(
        
        <View style = {style.Box}>
            <View style = {{alignItems : 'center'}}>
                <Text>19 : 00</Text>
            </View>
        <View style = {style.BoxMatch}>
            <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-around'}}>
                <Image style = {style.image} source = {{uri : props.item.uri}}/>
                <Text style = {style.textBoxMatch}>0</Text>
            </View>
            <View style = {{flexDirection : 'row-reverse', alignItems : 'center', justifyContent : 'space-around'}} >
                <Image style = {style.image} source = {{uri : props.item.uri}}/>
                <Text style = {style.textBoxMatch}>0</Text>
            </View>   
        </View> 
        <View style = {{alignItems : 'center'}}>
            <TouchableOpacity style = {style.button}>
                <Text>Enter Chat</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Dashboard = () => {
    return(
        <View  style = {{flex : 1, alignItems : "center", justifyContent :"flex-start"}}>
            <View style = {{alignItems : "center", justifyContent: "center"}}>
                <Text style = {style.text}>MATCH à VENIR</Text>
            </View>
            <FlatList
                        data={[
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Olympique_lyonnais_%28logo%29.svg/130px-Olympique_lyonnais_%28logo%29.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo_OGC_Nice_2013.svg/130px-Logo_OGC_Nice_2013.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_AS_Saint-%C3%89tienne.svg/130px-Logo_AS_Saint-%C3%89tienne.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Olympique_lyonnais_%28logo%29.svg/130px-Olympique_lyonnais_%28logo%29.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo_OGC_Nice_2013.svg/130px-Logo_OGC_Nice_2013.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_AS_Saint-%C3%89tienne.svg/130px-Logo_AS_Saint-%C3%89tienne.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Olympique_lyonnais_%28logo%29.svg/130px-Olympique_lyonnais_%28logo%29.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b1/Logo_OGC_Nice_2013.svg/130px-Logo_OGC_Nice_2013.svg.png'},
                            {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_AS_Saint-%C3%89tienne.svg/130px-Logo_AS_Saint-%C3%89tienne.svg.png'},
                        
                        ]}
                        renderItem={({item}) => <RenderItem item = {item}/>}
                        keyExtractor={item => item.index}
                        />
        </View>
    )
}
  


export default Dashboard;