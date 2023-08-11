import { Button, View } from 'react-native';
import SignUpForm from './SignUpForm';

const InitialPage = ({ navigation }) => {
    const callSignUp = () => {
        navigation.navigate("Sign Up Page");
    }
    const callSignIn = () => {
        navigation.navigate("Sign In Page");
    }
    return( 
    <View>
        <Button title='Sign in' onPress={callSignIn}/>
        <Button title='Sign up' onPress={callSignUp}/>
    </View>);
};
export default InitialPage;