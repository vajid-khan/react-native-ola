import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    addressSection: {
        flex: 0.3,
    },
    heading: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderTopWidth: 1,
        borderTopColor: '#d3d3d3',
    },
    cabSection: {
        flex: 0.605,
        paddingHorizontal: 10,
    },
    bottomButtons: {
        flex: 0.095,
        backgroundColor: 'green',
    },
    addressBox: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    addressIcon: {
        width: 10,
        height: 10,
        margin: 10,
        borderRadius: 10,
    },
    addressText: {
        flex: 0.9,
        fontSize: 18
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    cabItemBox: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#d3d3d3',
    },
    imageContainer: {
        alignItems: 'center',
        paddingVertical: 5,
    },
    cabImage: {
        height: 40,
        width: 40,
    },
    descriptionContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    cabTitle: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cabCapacity: {
        fontSize: 18,
    },
    fareContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    fare: {
        fontSize: 20
    },
    proceedButton: {
        flex: 1,
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center'
    },
    selectedCabItem: {
        backgroundColor: '#eee',
        borderColor: 'green'
    },
    checkIconContainer: {
        position: 'absolute',
        right: 0,
        padding: 10
    },
});