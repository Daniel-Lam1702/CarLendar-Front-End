import React from 'react';
import {View, Text} from 'react-native';
const Create = (route) => {
    return (
    <View>
        <Text>
            This is Create {route.auth_token}
        </Text>
    </View>
    );
}

export default Create;