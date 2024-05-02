
import { StyleSheet, Text, View } from "react-native";
import React from "react";


function Head(): React.JSX.Element {
    return (
        <View>
            <Text>App teste</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },



});

export default Head;