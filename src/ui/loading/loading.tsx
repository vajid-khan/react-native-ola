import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from "react-native";

interface loadingProps {
    message: string
}

const loading = (props: loadingProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#000" />
            <Text>{props.message}</Text>
        </View>
    )
}
export default loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});