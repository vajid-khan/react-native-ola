import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Animated,
    ImageBackground
} from 'react-native';

import Icon from '../../ui/icon/Icon';
import TopBar from '../../ui/topbar/TopBar';
import { ListItem } from 'react-native-elements';

const MAX_HEADER_HEIGHT = 250;
const MIN_HEADER_HEIGHT = 90;

const _info = {
    name: 'vajid khan',
    phone: 9022903205,
    email: 'khanvajid4@gmail.com',
    gender: 'Male',
    city: 'mumbai',
    state: 'Maharashtra',
    country: 'India',
    pincode: '400086',
    phone_verified: 'verified',
    email_verified: 'verified',
}

export default class Profile extends React.Component {
    animatedValue: Animated.Value;

    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);

    }

    renderInfo = () => {
        const info = [];
        Object.keys(_info).forEach((key) => {
            info.push(
                <ListItem
                    key={key}
                    title={_info[key].toString()}
                    subtitle={key}
                    bottomDivider
                    chevron
                />
            )
        });

        return info;
    }

    render() {

        const animatedHeaderStyle = {
            height: this.animatedValue.interpolate({
                inputRange: [0, MAX_HEADER_HEIGHT],
                outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
                extrapolate: 'clamp'
            }),
        }

        const animatedAvatar = {
            height: this.animatedValue.interpolate({
                inputRange: [0, MAX_HEADER_HEIGHT],
                outputRange: [150, 50],
                extrapolate: 'clamp'
            }),
            width: this.animatedValue.interpolate({
                inputRange: [0, MAX_HEADER_HEIGHT],
                outputRange: [150, 50],
                extrapolate: 'clamp'
            }),
            top: this.animatedValue.interpolate({
                inputRange: [0, MAX_HEADER_HEIGHT],
                outputRange: [90, 30],
                extrapolate: 'clamp'
            }),
            right: this.animatedValue.interpolate({
                inputRange: [0, MAX_HEADER_HEIGHT],
                outputRange: ['5%', '45%'],
                extrapolate: 'clamp'
            })
        }

        const animatedBackground = {
            height: this.animatedValue.interpolate({
                inputRange: [0, MAX_HEADER_HEIGHT],
                outputRange: [MAX_HEADER_HEIGHT, 0],
                extrapolate: 'clamp'
            }),

        }

        return (

            <React.Fragment>
                <Animated.View
                    style={animatedHeaderStyle}

                >
                    <Animated.View
                        style={animatedBackground}
                    >
                        <ImageBackground
                            style={StyleSheet.absoluteFillObject}
                            blurRadius={2}
                            source={require('../../assets/images/avatar/female.jpg')}
                        />

                        <TopBar
                            title="Profile"
                            renderRightButton
                        />
                    </Animated.View>

                    <Animated.View style={[styles.avatarContainer, animatedAvatar]}>
                        <Image
                            style={styles.avatar}
                            source={require('../../assets/images/avatar/female.jpg')}
                        />
                    </Animated.View>
                </Animated.View>

                <View style={styles.detailContainer}>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.animatedValue } } }])}
                    >
                        {
                            this.renderInfo()
                        }
                        {
                            this.renderInfo()
                        }
                    </ScrollView>
                </View>
            </React.Fragment>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarContainer: {
        position: 'absolute',
    },
    avatar: {
        flex: 1,
        width: null,
        height: null,
        borderRadius: 75,
        resizeMode: 'cover',

    },
    userDetail: {
        marginTop: '25%',
        // marginBottom:50,
    },
    userName: {
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 18,
    },
    userPhone: {
        color: 'white',
        fontSize: 16,
    },
    detailContainer: {
        flex: 1,
    },

});