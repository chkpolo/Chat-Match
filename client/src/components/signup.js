// In App.js in a new project

import * as React from 'react';
import { View, Text,TextInput,StyleSheet,Dimensions, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const {height,width} = Dimensions.get('window')

const style = StyleSheet.create({
    TextInput : {
        backgroundColor :'white',
        height: 40,
        width: width/1.25,
        borderRadius : 100
    },
    Button : {
        backgroundColor :'white',
        width : width/1.25,
        height : 40,
        borderWidth : 2,
        borderColor : "white",
        alignItems : "center",
        justifyContent : "center"
    },
    TextButton : {
        color : "#0A2342",
        fontSize : 20
    },
    image: {
        width:80,
        height:80,
        margin : 10,
    },
    text: {
       color: "white",
       fontSize : 25
    },
    textForm: {
        color: "white",
        fontSize : 16
     },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
})

const RenderItem = () => {
    return(
        <TouchableOpacity >
        <Image style = {style.image} source = {{uri : props.item.uri}}/>
        </TouchableOpacity>
    )
}

const SignUp = () => {
    return(
        <LinearGradient colors = {['#2ca58d', '#80b192', '#e1e887']} style={style.linearGradient}>
        <View style = {{flex : 1, alignItems : "center" , justifyContent: 'space-evenly'}}>
            
            <View style = {{flex :2}} >
            <Text style = {style.textForm}>Nom d'utilisateur</Text>
            <TextInput style = {style.TextInput} />
            <Text style = {style.textForm}>E-mail</Text>
            <TextInput style = {style.TextInput} />
            <Text style = {style.textForm}>Mot de passe</Text>
            <TextInput style = {style.TextInput} />
            <Text style = {style.textForm}>Confirmer le mot de passe</Text>
            <TextInput style = {style.TextInput} />
            </View>


            <View style = {{flex :1, alignItems: "center"}}>
                <Text style = {style.text}> Choisissez votre club favori </Text>
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
                        renderItem={({item}) => <Image style = {style.image} source = {{uri : item.uri}}/>}
                        horizontal ={true}
                        />
            </View>
            <View style = {{ flex : 1, alignItems : "center" , justifyContent : "space-evenly"}}>
                <TouchableOpacity style = {style.Button}> 
                    <Text style = {style.TextButton} > Sign Up</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {style.Button}> 
                    <Text style = {style.TextButton} > Login </Text> 
                </TouchableOpacity>
                
            </View>
           
        </View> 
        </LinearGradient>
    )
}
  


export default SignUp;