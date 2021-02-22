import React from 'react';
import {
    Text,
    View,
    Alert,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import Icon from '../../ui/icon/Icon';
import { Avatar } from 'react-native-elements';
import * as actions from '../../store/actions/index'
import { NavigationActions } from 'react-navigation';

const sidebarDrawer = (props: object) => {

    const navigateToScreen = (route) => {

        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        props.navigation.closeDrawer();
        props.navigation.dispatch(navigateAction);
    }

    const loggedOutUser = () => {
        Alert.alert(
            'You will be logged out',
            'Please confirm your action',
            [
                // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'Logout', onPress: () => props.logout() },
            ],
            { cancelable: true },
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.closeDrawer}>
                    <TouchableOpacity
                        onPress={() => props.navigation.closeDrawer()}
                    >
                        <Icon
                            name='faTimes'
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.avatarContainer}>
                    <Avatar
                        title=""
                        size="large"
                        rounded
                        source={require('../../assets/images/avatar/female.jpg')}
                    />
                    <Text style={[styles.itemLabel, styles.avatarText]}>
                        {props.auth.user.email}
                    </Text>
                </View>
                <View style={styles.divider} />

            </View>

            <ScrollView
                style={styles.items}
            >
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigateToScreen('Profile')}
                >
                    <Icon
                        name='faUserCircle'
                        size={20}
                        style={styles.icon}
                    />
                    <Text style={styles.itemLabel}>
                        Profile
                    </Text>
                </TouchableOpacity>
                <View style={styles.divider} />

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigateToScreen('bookingLists')}
                >
                    <Icon
                        name='faCar'
                        size={20}
                        style={styles.icon}
                    />
                    <Text style={styles.itemLabel}>
                        My Rides
                    </Text>
                </TouchableOpacity>
                <View style={styles.divider} />

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigateToScreen('transactions')}
                >
                    <Icon
                        name='faCreditCard'
                        size={20}
                        style={styles.icon}
                    />
                    <Text style={styles.itemLabel}>
                        Transactions
                    </Text>
                </TouchableOpacity>
                <View style={styles.divider} />

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigateToScreen('wallet')}
                >
                    <Icon
                        name='faWallet'
                        size={20}
                        style={styles.icon}
                    />
                    <Text style={styles.itemLabel}>
                        Wallet
                    </Text>
                </TouchableOpacity>
                <View style={styles.divider} />

                {
                    !props.auth.token &&
                    <React.Fragment>
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigateToScreen('login')}
                        >
                            <Icon
                                name='faSignInAlt'
                                size={20}
                                style={styles.icon}
                            />
                            <Text style={styles.itemLabel}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                    </React.Fragment>
                }

                {
                    props.auth.token != null &&
                    <React.Fragment>
                        <TouchableOpacity
                            style={styles.item}
                            onPress={loggedOutUser}
                        >
                            <Icon
                                name='faSignOutAlt'
                                size={20}
                                style={styles.icon}
                            />
                            <Text style={styles.itemLabel}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                    </React.Fragment>
                }
            </ScrollView>

            <View
                style={styles.footer}
            >
                <TouchableOpacity style={styles.item}>
                    <Icon
                        name='faInfoCircle'
                        size={20}
                        style={styles.icon}
                    />
                    <Text style={styles.itemLabel}>
                        About
                    </Text>
                </TouchableOpacity>
                <View style={styles.divider} />

                <Text style={styles.version}>
                    Version 1.0.0
                </Text>
            </View>
        </View>

    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.authLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sidebarDrawer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flex: 0.5,
        marginTop: 20,
        justifyContent: 'flex-end',
    },
    closeDrawer: {
        alignItems: 'flex-end',
    },
    avatarContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    avatarText: {
        alignSelf: 'center',
        paddingLeft: 15
    },
    items: {
        flex: 10,
    },
    item: {
        flexDirection: 'row',
        padding: 15,
    },
    icon: {
        marginRight: 10
    },
    itemLabel: {
        fontSize: 20,
    },
    footer: {
        flex: 0.5,
        justifyContent: 'flex-end',
    },
    divider: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        marginHorizontal: -10,
    },
    version: {
        padding: 15,
        textAlign: 'right',
        fontSize: 15,
    }
})