import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import chatScreen from "../main/Chat"

// function home() {
export default function Home({navigation}) {

//     const navigation = useNavigation()
    
    return (
          <View style={styles.container}>
               {/* <Text style={{margin:30}}>Home</Text> */}
               <TouchableOpacity 
                    style={{marginTop: 50, marginRight: 10, marginBottom: 10, alignSelf: 'flex-end'}}
                    //  onPress={()=> setState(false)}
               >
                    <MaterialCommunityIcons name="bell" color={'#95E1D3'} size={30}/>
                    <MaterialCommunityIcons name="chat" color={'#95E1D3'} size={30} onPress={() => navigation.navigate(chatScreen)}/>
               </TouchableOpacity>
               
               <FlatList
                    numColumns={1}
                    horizontal={false}
                    //  data={authors}
                    //  keyExtractor={post => post.id}
                    renderItem={
                         <View style={styles.containerImage}>
                              <View style={{flexDirection: 'column', marginLeft: 15}} >
                                   <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 16, margin: 10, fontWeight: '300'}}>Maybe picture</Text>
                                   </View>
                                   <View style={{flexDirection: 'column'}}>
                                        <Text style={{fontSize:16, marginLeft: 10, marginTop: 3, fontWeight: '300'}}>username</Text>
                                   </View>
                              </View>
                              <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignSelf: 'flex-end', marginRight: 15}}>
                                   <TouchableOpacity style={{margin: 5}}>
                                        <Text>Like</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={{margin: 5}}>
                                        <Text>share</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity 
                                        //   onPress={() => navigation.navigate("FeedComment", {nowUser: item.user, userIcon: item.icon, post: item.id})}
                                        style={{margin: 5}}
                                   >
                                        {/* <MaterialCommunityIcons name="chat-outline" color={'#FCE38A'} size={30}/> */}
                                        <Text>comment</Text>
                                   </TouchableOpacity>
                              </View>
                              <View style={{backgroundColor: '#D8F5B4', height: 1}}></View>
                         </View>    
                    } 
               />
          </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EAFFD0',
    },
    containerInfo: {
        margin: 20,
    },
    containerGallery: {
        flex: 1,
    },
    containerImage: {
        flex: 1/3,
        backgroundColor: 'white',
    },
    image: {
        // flex: 1,
        // aspectRatio: 1/1,
        height: 40, 
        width: 40, 
        borderRadius: 100,
        margin: 5
    }
})

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts,
    following: store.userState.following,
})

// export default connect(mapStateToProps, null)(home)

// export default home;