import React, {
    useState,
    useEffect
} from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    ActivityIndicator
} from 'react-native';

import style from './style';
import Icon from '../../../ui/icon/Icon';
import TopBar from '../../../ui/topbar/TopBar';
import Loading from '../../../ui/loading/loading';


const bookings = props => {

    const [isBookingLoaded, setBookingLoaded] = useState(false);

    const [bookings, setBookings] = useState([]);

    const [count, setCount] = useState(0);

    const fetchBookings = () => {

        if (count > 3) {
            return;
        }
        let _count = count + 1
        setCount(_count);

        const bookingArray = bookings

        for (let i = 1; i <= 10; i++) {
            bookingArray.push(i * count);
        }

        setBookings(bookingArray);
        setTimeout(() => {
            setBookingLoaded(true);
        }, 500);
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <View style={style.container}>

            <TopBar title="My Bookings" />

            {
                !isBookingLoaded ? <Loading message={'Hold on, fetching your ride list'} />
                    :
                    <FlatList
                        data={bookings}
                        renderItem={(booking) => <BookingItem booking={booking} />}
                        keyExtractor={booking => booking}
                        onEndReached={() => fetchBookings()}
                        showsHorizontalScrollIndicator={false}
                    />
            }

        </View>
    );
}

const BookingItem = props => {
    return (
        <View style={style.bookingItem}>
            <View style={style.bookingInfo}>
                <View style={style.imageContainer}>
                    <Image
                        style={style.cabImage}
                        source={require('../../../assets/images/car.png')}
                    />
                </View>
                <View style={style.dateBox}>
                    <Text style={style.date}>
                        20 Jun, 2019 10:30 AM
                    </Text>
                </View>
                <View style={style.priceBox}>
                    <Icon name="faRupeeSign" size={12} />
                    <Text style={style.price}>
                        800
                    </Text>
                </View>
                <View style={style.rideStatusContainer}>
                    {
                        Math.floor(Math.random() * 10) % 2 == 0 ?
                            <Icon name='faCheck' color="green" />
                            :
                            <Icon name='faBan' color="red" />
                    }
                </View>
            </View>
            <View style={style.addressContainer}>
                <View style={[style.addressIcon, { backgroundColor: 'green' }]} />
                <Text style={style.addressText}
                    numberOfLines={2}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </Text>
            </View>
            <View style={style.addressContainer}>
                <View style={[style.addressIcon, { backgroundColor: 'red' }]} />
                <Text style={style.addressText}
                    numberOfLines={2}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </Text>
            </View>
        </View>
    );
}

export default bookings;