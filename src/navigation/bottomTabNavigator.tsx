import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import { ChatList, ChatView, AddChat } from '../screens/Chat';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Color from '../constants/Color';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(){
    return(
        <BottomTab.Navigator

         tabBarOptions={{activeTintColor:Color.tintColorLight}}>
            <BottomTab.Screen
             name='Home' 
             component={TabOne}
             options={{tabBarIcon:({color})=><TabBarIcon name='ios-home' color={color}/>}}
             />
            <BottomTab.Screen
             name='Messages' 
             component={TabTwo}
             options={{tabBarIcon:({color})=><TabBarIcon name='ios-chatbubbles' color={color}/>}}
             />
             <BottomTab.Screen
             name='Profile' 
             component={TabThree}
             options={{tabBarIcon:({color})=><TabBarIcon name='ios-person' color={color}/>}}
             />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwo(){
    return(
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
             name='ChatList' 
             component={ChatList}
             options={{
                 title:'Chats',
                 headerTitleContainerStyle:{alignItems: 'center',}
             }}
            />
            <TabTwoStack.Screen
             name='ChatView'
             component={ChatView}
             options={({route})=>({ title: route.params.title })}
            />
            <TabTwoStack.Screen
             name='AddChat' 
             component={AddChat}
             options={{
                 title:'Make Chat'
             }}
            />
        </TabTwoStack.Navigator>
    );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThree(){
    return(
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen name='Profile' component={Profile} options={{
                 title:'Profile',
                 headerTitleContainerStyle:{alignItems: 'center',}
             }}/>
        </TabThreeStack.Navigator>
    );
}
const TabOneStack = createStackNavigator<TabOneParamList>();
function TabOne(){
    return(
        <TabOneStack.Navigator>
            <TabOneStack.Screen name='Home' component={Home}
            options={{
                title:'Home',
                headerTitleContainerStyle:{alignItems: 'center',}
            }}/>
        </TabOneStack.Navigator>
    );
}