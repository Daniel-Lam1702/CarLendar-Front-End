import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';
import Calendar from './tabs/Calendar';
import Create from './tabs/Create';
import Home from './tabs/Home';
import Profile from './tabs/Profile';
//Should create a home tab that will display the posts
//Should make a Create tab that will let the user create a post
//Should have a Calendar tab that will display the timeline of car maintainance
//Should have a Profile tab that will display the user's profile



const MainContainer = ({ navigation, route }) =>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator> 
            <Tab.Screen name="Home" component={Home} initialParams= {route.params} />
            <Tab.Screen name="Create" component={Create} initialParams= {route} />
            <Tab.Screen name='Calendar' component={Calendar} initialParams= {route} />
            <Tab.Screen name='Profile' component={Profile} initialParams= {route} />                
        </Tab.Navigator>
    );
}

export default MainContainer;