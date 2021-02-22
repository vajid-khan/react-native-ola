import React from "react";
import {
    View,
    Text,
} from "react-native";

import styles from './style';
import TopBar from '../../ui/topbar/TopBar'

const wallet = (props) => {
    return (

        <View style={styles.container}>
            <TopBar title={'My Wallet'} />
            <Text>wallet page is under contruction</Text>
        </View>
    )
}
export default wallet;

