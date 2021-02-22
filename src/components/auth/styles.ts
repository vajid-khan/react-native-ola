import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        flex: 0.3,
        backgroundColor: 'green'
    },
    logo: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    form: {
        flex: 0.7,
        marginTop: 50,
        paddingHorizontal: 20
    },
    fieldGroup: {
        marginBottom: 20,
        borderBottomWidth: 1,
    },
    inputLabel: {
        color: 'green',
        fontSize: 20,
    },
    inputBox: {
        flexDirection: 'row',
    },
    input: {
        flex: 0.9,
    },
    inputIcon: {
        flex: 0.1,
        fontSize: 20,
        alignSelf: 'center',
    },
    errorIconContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    seperator: {
        marginVertical: 10
    },
    button: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'uppercase',
    },
    link: {

    },
    linkText: {
        fontSize: 18,
    },
    textIcon: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonIcon: {
        fontSize: 25,
        paddingHorizontal: 5
    },
    socialButtons: {
        flexDirection: 'row',
    },
    fbButton: {
        flex: 0.5,
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'blue'
    },
    fbButtonText: {
        fontSize: 20,
        color: 'blue',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    googleButton: {
        flex: 0.5,
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        borderColor: 'red',
    },
    googleButtonText: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});