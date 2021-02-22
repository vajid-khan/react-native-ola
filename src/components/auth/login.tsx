import React from 'react';
import styles from './styles';

import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from '../../ui/icon/Icon';
import TopBar from '../../ui/topbar/TopBar';
import * as actions from '../../store/actions/index';

class Login extends React.Component {

    state = {
        input: {
            email: '',
            password: '',
        },
        error: {}
    }

    _handleInputChange = (value, type) => {
        let input = { ...this.state.input }
        input[type] = value;

        this.setState({ input: input });
    }

    _handleLogin = () => {
        let error = {};

        if (!this.state.input.email) {
            error.email = 'Email is required';
        }

        if (!this.state.input.password) {
            error.password = 'Passwprd is required';
        }

        this.setState({ error: error });

        if (error.email || error.password) {
            return;
        }
        this.props.userLogin({
            email: this.state.input.email,
            password: this.state.input.password
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.token) {
            this.props.navigation.navigate('Map')
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.logoContainer}>

                        <TopBar
                            title="Login to continue"
                        />

                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/car.png')} />
                    </View>
                    <View style={styles.form}>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <View style={styles.inputBox}>
                                <Icon
                                    style={styles.inputIcon}
                                    name='faEnvelope'
                                    color='green' />
                                <TextInput
                                    placeholder="joe@example.com"
                                    textContentType="emailAddress"
                                    returnKeyType="next"
                                    style={styles.input}
                                    value={this.state.email}
                                    onChangeText={(email) => this._handleInputChange(email, 'email')}
                                />
                                <View style={styles.errorIconContainer}>
                                    {
                                        this.state.error.email &&
                                        <Icon
                                            style={styles.inputIcon}
                                            color='red'
                                            name='faExclamationCircle' />
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={styles.fieldGroup}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <View style={styles.inputBox}>
                                <Icon
                                    style={styles.inputIcon}
                                    name='faLock'
                                    color='green' />
                                <TextInput
                                    secureTextEntry
                                    placeholder="******"
                                    style={styles.input}
                                    value={this.state.password}
                                    onChangeText={(password) => this._handleInputChange(password, 'password')}
                                />
                                <View style={styles.errorIconContainer}>
                                    {
                                        this.state.error.password &&
                                        <Icon
                                            style={styles.inputIcon}
                                            color='red'
                                            name='faExclamationCircle' />
                                    }
                                </View>
                            </View>
                        </View>

                        <View style={styles.seperator} />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this._handleLogin}
                        >
                            <View style={styles.textIcon}>
                                <Icon
                                    color="#fff"
                                    style={styles.buttonIcon}
                                    name='faArrowRight'
                                />
                                <Text style={styles.buttonText}>
                                    Sign in
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.seperator} />

                        <TouchableOpacity
                            style={styles.link}
                        >
                            <Text style={styles.linkText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.seperator} />

                        <View style={styles.socialButtons}>
                            <TouchableOpacity
                                style={styles.fbButton}
                            >
                                <View style={styles.textIcon}>
                                    <Icon
                                        color="blue"
                                        style={styles.buttonIcon}
                                        name="facebook"
                                    />
                                    <Text style={styles.fbButtonText}>
                                        facebook
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.googleButton}
                            >
                                <View style={styles.textIcon}>
                                    <Icon
                                        color="red"
                                        style={styles.buttonIcon}
                                        name="google"
                                    />
                                    <Text style={styles.googleButtonText}>
                                        Google
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.seperator} />

                        <TouchableOpacity
                            style={styles.link}
                        >
                            <Text style={styles.linkText}>
                                Don't have a account? Register now
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: payload => dispatch(actions.userLogin(payload)),
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);