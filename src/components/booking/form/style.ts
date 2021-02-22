import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    addressContainer: {
        top: 120,
        width: '95%',
        padding: '3%',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#d3d3d3',
    },
    addressBox: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
    },
    selectedAddressBox: {
        borderColor: '#000',
    },
    addressIcon: {
        height: 8,
        width: 8,
        marginRight: 10,
        borderRadius: 50,
        alignSelf: 'center'
    },
    addressText: {
        flex: 1,
    },
    mapButtons: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    searchBtn: {
        alignItems: 'center',
    },
    myLocation: {
        position: 'absolute',
        bottom: '10%',
        right: '3%',
        padding: 5,
        backgroundColor: '#ffffff',
        borderRadius: 50,
    },
});