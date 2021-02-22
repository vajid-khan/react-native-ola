import React, {
    useState, useEffect
} from "react";
import {
    View,
    FlatList,
} from "react-native";

import styles from './style';
import TopBar from '../../ui/topbar/TopBar';
import Loading from '../../ui/loading/loading';
import TransactionItem from './TransactionItem';

import { transactionProps } from './TransactionItem'

const transaction = (props: object) => {

    const [loading, setLoading] = useState(false);
    const [transactions, setTransations] = useState([]);

    const loadTransaction = (() => {
        setLoading(true);

        let userTransactions: transactionProps[] = new Array(30).fill(null).map((item, index) => ({
            id: index,
            date: new Date().toDateString(),
            amount: 123,
            transactionId: '',
            status: ''
        }));

        setTimeout(() => {
            setTransations(userTransactions);
            setLoading(false);
        }, 1000);

    });

    useEffect(() => {
        loadTransaction();
    }, [])

    return (
        <View style={styles.container}>
            <TopBar title={'My Transactions'} />
            {
                loading ? <Loading message={'Loading your transactions'} />
                    :
                    <FlatList
                        data={transactions}
                        renderItem={(item) => <TransactionItem transaction={item} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{ borderBottomColor: '#000', borderWidth: .5 }} />}
                    />
            }
        </View>
    )
}

export default transaction;