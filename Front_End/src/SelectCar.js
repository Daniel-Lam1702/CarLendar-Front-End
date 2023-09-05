import React from "react";
import { useState, useEffect } from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native';

const SelectCar = ({ navigation, route }) => {
    const [token, updateToken] = useState(route.params.auth_token);
    const [selectedId, setSelectedId] = useState(0);
    const [carsData, setCarsData] = useState([]);


    const Item = ({item, onPress, backgroundColor, textColor}) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
            <View>
                <Text style = {[styles.make, textColor]}>{item.make} {item.model} {item.year} </Text>
                <Text style = {[styles.specs, textColor]}>Mileage: {item.mileage}</Text>
                <Text style = {[styles.specs, textColor]}>Color: {item.color}</Text>
            </View>
        </TouchableOpacity>
    );

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    make: {
        fontSize: 32,
    },
    specs: {
        fontSize: 15,
    }
    });

    const renderItem = ({item}) => {
        const backgroundColor = item.car_id == selectedId ? '#c2e6ff' : '#f9c2ff';
        const color = item.car_id == selectedId ? 'white' : 'yellow';
        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.car_id);
                    navigation.navigate({name : "Main Screen", params : {"auth_token": token, "car": item}, merge : true});
                }}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    const fetchCars = async () => {
        try{
            const response = await fetch('http://26.112.158.194:5000/car/get-cars', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': token
            }
            });
            if(response.ok){
                let responseObject = await response.json();
                updateToken(responseObject["auth_token"]);
                console.log(responseObject["cars"]);
                console.log(responseObject["auth_token"])
                setCarsData(responseObject["cars"]);
            }else{
                let responseObject = await response.json();
                console.log(responseObject["message"]);
            }
        }catch(error){
            console.log(error);
        }
        
    };

    useEffect(() => {
        fetchCars(); // Fetch data when component mounts
    }, []);

    return (
        <SafeAreaView>
            <FlatList
            data = {carsData}
            renderItem = {renderItem}
            keyExtractor = {item => item.id}
            extraData={selectedId}
            />          
        </SafeAreaView>
    );
}

//Create the renderItem function. make them that if  it is clicked then navigate to the maincontainer with the car info and token.

export default SelectCar;