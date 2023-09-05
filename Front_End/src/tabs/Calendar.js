import React from 'react';
import {View, Text} from 'react-native';
const Calendar = (route) => {
    return (
    <View>
        <Text>
            This is Calendar {route.auth_token}
        </Text>
    </View>
    );
}

export default Calendar;