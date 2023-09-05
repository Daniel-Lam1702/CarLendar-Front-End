import React from 'react';
import {View, Text} from 'react-native';
const Profile = (route) => {
    return (
    <View>
        <Text>
            This is Profile {route.auth_token}
        </Text>
    </View>
    );
}

export default Profile;