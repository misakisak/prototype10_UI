import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { NavigationContainer, NavigationContext, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import chatScreen from './components/main/Chat'
import liveScreen from './components/main/Live';
import {Main} from './components/Main';


const Stack = createStackNavigator();

export class App extends Component {

  render() {    
      return(
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
              <Stack.Screen 
                name="Chat" 
                component={chatScreen} 
                navigation={this.props.navigation} 
                options={{
                  headerStyle: {backgroundColor: "#95E1D3"},
                  headerTintColor: "white",
                  headerTitleStyle: {fontWeight: 'bold'},
                }}
              />
              <Stack.Screen 
                name="Live" 
                component={liveScreen}
                navigation={this.props.navigation}
                options={{
                  headerStyle: {backgroundColor: "#95E1D3"},
                  headerTintColor: "white",
                  headerTitleStyle: {fontWeight: 'bold'}
                }}
              />
              <Stack.Screen 
                name="Landing" 
                component={LandingScreen} 
                navigation={this.props.navigation}
                options={{
                  headerStyle: {backgroundColor: "#95E1D3"},
                  headerTintColor: "white",
                  headerTitleStyle: {fontWeight: 'bold'},
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
      )
    
  }
}


export default App