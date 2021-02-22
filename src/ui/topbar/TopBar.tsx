import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import BackButton from './button/BackButton';

interface topBarProps {
    title: string,
    renderLeftButton: boolean,
    renderRightButton: boolean,
    rightButton: React.ElementType
}

const topBar = (props: topBarProps) => {
    return (
        <View style={style.container}>
            <View style={style.leftButton}>
                {
                    props.renderLeftButton && <BackButton />
                }
            </View>

            <View style={style.titleContainer}>
                <Text style={style.title}>
                    {props.title}
                </Text>
            </View>

            <View style={style.rightButton}>
                {
                    props.renderRightButton && props.rightButton
                }
            </View>
        </View>
    )
}

topBar.defaultProps = {
    renderLeftButton: true,
    renderRightButton: false,
    rightButton: null,
}

export default topBar;

const style = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
    },
    rightButton: {
        flex: 0.1,
        alignItems: 'flex-end',
    },
    titleContainer: {
        flex: 0.8,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    leftButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
});