// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/components/signup';
import Dashboard from './src/components/dashboard';
import Chat from './src/components/chat';
import Profile from './src/components/profile';


const Stack = createStackNavigator();

const Header = () => {
  return(
      <Text style = {{color :'white', fontSize : 30 }}>CHAT-MATCH</Text>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
       
        }}>
        <Stack.Screen name="SignUp" component={SignUp} options ={{
          headerTitle: props => <Header />
          }}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options ={{headerTitle: props => <Header />}}/>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} options ={{headerTitle: props => <Header />}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;