import React, {
    useEffect,
    useState,
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default (props) => {

    const [animation, setAnimation] = useState('slideInDown');

    useEffect(()=> {
        setTimeout(()=>{
            _handleHideSnackBar();
        }, props.timeOut - 500);
    }, [props.timeOut])

    _handleHideSnackBar = () => {
        setAnimation('slideOutUp');
        setTimeout(() => {
            props.timeOutCallBack();
        }, 500);
    }

    return (
        <Animatable.View 
            animation={animation}
            duration={500}
            style={styles.container}
            >
            <View style={styles.mainContent}>
                <View style={styles.messageBox}>
                    <Text style={styles.message}>
                        {
                            props.message || 'Error Occurred'
                        }
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={_handleHideSnackBar}
                >
                    <Text style={styles.buttonText}>
                        OK
                    </Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        zIndex:1000,
        paddingTop:30,
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'#000',
        height:100
    },
    mainContent: {
        paddingTop:30,
        padding:10,
        flexDirection:'row'
    },
    messageBox: {
        width:'90%',
    },
    message: {
        color:'#fff',
        fontSize:20
    },
    button:{
        paddingRight:10,
        width:'10%',
        alignItems:'flex-end',
        alignContent:'center'
    },
    buttonText:{
        fontSize: 20,
        color:'yellow'
    }
})