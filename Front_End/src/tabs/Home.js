import React from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = ({route}) => {
/*   const [data, setData] 
    let response = await fetch('http://26.112.158.194:5000/post/get-posts-from-make', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': route.auth_token
        },
        body: JSON.stringify(data)
    });*/
    const call = () => {
        console.log(route.auth_token);
        return route.auth_token;
    }
    return (
    <SafeAreaView>
        <Text>
            This is Home {call()}
        </Text>
    </SafeAreaView>
    );
}

export default Home;