// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';


const {height,width} = Dimensions.get('window')

const style = StyleSheet.create({
    TextInput : {
        backgroundColor :'#B0CA87',
        height: 40,
        width: width/1.25,
    },
    Button : {
        backgroundColor :'#719915',
        width : width/1.25,
        height : 40,
        borderWidth : 2,
        borderColor : "white",
        alignItems : "center",
        justifyContent : "center"
    },
    TextButton : {
        color : "white",
        fontSize : 20
    },
    image: {
        width:80,
        height:80,
        margin : 10,
    },
    imageProfile: {
        width:80,
        height:80,
        margin : 10,
        borderRadius : 100
    },
    text: {
       color: "black",
       fontSize : 25
    }
})


const Profile = () => {
    return(
        <View style = {{flex :1, alignItems : "center", justifyContent : "center"}}>
            <View style = {{flex :1, flexDirection : 'row' ,alignItems : "center"}}>
                <Image style = {style.imageProfile} source = {{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/XII_Prix_Di%C3%A1logo_%2818485723248%29_%28cropped%29.jpg/280px-XII_Prix_Di%C3%A1logo_%2818485723248%29_%28cropped%29.jpg'}} />
                <View style = {{alignItems :"center", justifyContent : "center"}}>
                    <Text style = {style.text}>
                            ZINEDINE
                    </Text>
                    <Text style = {style.text}>
                            ZIDANE
                    </Text>
                </View>
                <Image style = {style.image} source = {{uri : 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png'}} />
            </View>
            <View style = {{flex :1, alignItems : "center", justifyContent : "center"}}>
            <TouchableOpacity style = {style.Button}> 
                    <Text style = {style.TextButton} > Ajouter en ami</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {style.Button}> 
                    <Text style = {style.TextButton} > Chattez </Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}
  


export default Profile;