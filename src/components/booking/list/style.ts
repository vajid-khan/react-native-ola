import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bookingItem: {
        padding: 5,
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3'
    },
    bookingInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    imageContainer: {
        flex: 0.1
    },
    cabImage: {
        width: 30,
        height: 30
    },
    dateBox: {
        flex: 0.5,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    priceBox: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold'
    },
    rideStatusContainer: {
        flex: 0.1,
        alignItems: 'flex-end'
    },
    addressContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    addressIcon: {
        width: 8,
        height: 8,
        margin: 10,
        borderRadius: 10,
    },
    addressText: {
        flex: 1,
        // fontSize: 18,
        // textAlign: 'justify',
        paddingVertical: 5
    },
});