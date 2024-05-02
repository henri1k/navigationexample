
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";


function Home(): React.JSX.Element {
    return (
        <View>
            <Head />
            <Text>Tela Principal</Text>
            <Footer />
        </View>
    );
}



export default Home;