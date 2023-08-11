import {Text, View} from 'react-native';
const Home = ({ navigation, route }) =>{
    return (
    <View>
        <Text>{route.params["auth_token"]}</Text>
    </View>);
}

export default Home;