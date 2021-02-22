import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from '../../ui/icon/Icon'

export default drawerButton = props => {

    return (

        <TouchableOpacity
            style={styles.container}
            onPress={() => props.navigation.toggleDrawer()}
        >
            <Icon
                style={styles.button}
                name="faBars"
                size={22}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        opacity: 0.5,
        position: 'absolute',
        top: '5%',
        left: '3%',
        padding: 8,
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 1,
    },
    button: {
        fontSize: 25
    }
})