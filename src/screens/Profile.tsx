
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";


function Profile(): React.JSX.Element {
    return (
        <View>
            <Head />
            <Text>Tela Perfil</Text>
            <Footer />
        </View>
    );
}



export default Profile;