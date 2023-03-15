import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { View, Text, StyleSheet } from 'react-native';


import homeScreen from './main/Home';
import newLiveScreen from './main/NewLive';
import profileScreen from './main/Profile';

const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {

    render() {
        return ( 
               <Tab.Navigator 
                    initialRouteName="Home" 
                    labeled={false}
                    barStyle={{ backgroundColor: "#95E1D3" }}
               >
                    <Tab.Screen name="Home" component={homeScreen}
                         options={{
                              tabBarIcon: ({ color, size }) => (
                              <MaterialCommunityIcons name="home" color={color} size={26}/>
                              ),
                         }}
                    />
                    <Tab.Screen name="NewLive" component={newLiveScreen} navigation={this.props.navigation}
                         options={{
                              tabBarIcon: ({ color, size }) => (
                                   <MaterialCommunityIcons name="plus-box" color={color} size={26}/>
                              ),
                         }}
                    />
                    <Tab.Screen name="Profile" component={profileScreen}
                         options={{
                              tabBarIcon: ({ color, size }) => (
                                   <MaterialCommunityIcons name="account-group" color={color} size={26}/>
                              ),
                         }}
                    />
                    {/* <Tab.Screen name="AddContainer" component={EmptyScreen}
                         listeners={({ navigation }) => ({
                         tabPress: event => {
                              event.preventDefault();
                              navigation.navigate("Post")
                         }
                         })}
                         options={{
                         tabBarIcon: ({ color, size }) => (
                              <MaterialCommunityIcons name="plus-box" color={color} size={26}/>
                         ),
                         }}
                    /> */}
           </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserPosts, fetchUserFollowing }, dispatch);

// export default connect(mapStateToProps, mapDispatchProps)(Main);

export default Main;