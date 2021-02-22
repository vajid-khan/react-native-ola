import React, {
    useState
} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import _ from 'lodash';
import style from './style';
import { connect } from 'react-redux';
import Icon from '../../ui/icon/Icon';
import TopBar from '../../ui/topbar/TopBar';

const selectCab = props => {

    const [cabSelected, setSelectCab] = useState(null);

    const cabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    selectCabHandler = cab => {
        setSelectCab(cab)
    }

    return (
        <View style={style.container}>

            <TopBar
                title="Ride Details"
            />

            <View style={style.addressSection}>
                <View style={style.addressBox}>
                    <View style={[style.addressIcon, { backgroundColor: 'red' }]} />
                    <Text style={style.addressText}
                        numberOfLine={3}
                    >
                        {props.pickup.address}
                    </Text>
                </View>

                <View style={style.addressBox}>
                    <View style={[style.addressIcon, { backgroundColor: 'green' }]} />
                    <Text style={style.addressText}
                        numberOfLines={3}
                    >
                        {props.drop.address}
                    </Text>
                </View>
            </View>

            <Text style={style.heading}>
                Available Cabs
            </Text>

            <ScrollView style={style.cabSection}
            >
                {
                    _.chunk(cabs, 2).map((cabs, index) => <CabRow
                        cabs={cabs}
                        key={index}
                        onSelect={selectCabHandler}
                        selectedCab={cabSelected}
                    />)
                }

            </ScrollView>
            <View
                style={style.bottomButtons}
            >
                <TouchableOpacity
                    style={style.proceedButton}
                >
                    <Icon
                        name="faArrowRight"
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CabRow = props => {
    return (
        <View style={style.row}>
            {
                props.cabs.map(cab => <CabItem
                    cab={cab}
                    key={cab}
                    {...props}
                />
                )
            }
        </View>
    )
}

const CabItem = props => {
    return (
        <TouchableOpacity
            style={[style.cabItemBox, props.selectedCab == props.cab ? style.selectedCabItem : {}]}
            onPress={() => props.onSelect(props.cab)}
        >

            <View style={style.imageContainer}>
                <Image
                    style={style.cabImage}
                    source={require('../../assets/images/car.png')}
                />
            </View>
            <View style={style.descriptionContainer}>
                <Text style={style.cabTitle}>
                    MINI
                </Text>
                <Text style={style.cabCapacity}>
                    4 person
                </Text>
            </View>

            <View style={style.fareContainer}>
                <Icon name="faRupeeSign" size={12} />
                <Text
                    style={style.fare}
                >
                    800
                </Text>
            </View>

            <View style={style.checkIconContainer}>
                {
                    props.cab == props.selectedCab && <Icon
                        name="faCheckCircle"
                        color="green"
                        size={25}
                        style={style.selectedIcon}
                    />
                }
            </View>
        </TouchableOpacity>
    )
}

const mapStateToProps = state => {
    return {
        pickup: state.booking.pickup,
        drop: state.booking.drop,
    }
}

export default connect(mapStateToProps)(selectCab);