import React from "react";
import {
    View,
    Text,
    Animated,
    TouchableNativeFeedback,
} from "react-native";

import styles from './style';
import Icon from '../../ui/icon/Icon';

export interface transactionProps {
    id: number,
    date: Date,
    amount: number,
    transactionId: string,
    status: string
}


class TransactionItem extends React.Component<transactionProps> {
    animatedValue: Animated.Value;
    isOpen: boolean;

    constructor(props: transactionProps) {
        super(props);
        this.isOpen = false;
        this.animatedValue = new Animated.Value(0);

        this.state = {
            transaction: this.props.transaction.item
        }
    }

    expandInfo = () => {
        requestAnimationFrame(() => {
            Animated.timing(this.animatedValue, {
                toValue: this.isOpen ? 0 : 1,
                duration: 500,
            }).start();

            this.isOpen = !this.isOpen
        });
    }

    render() {

        const animatedExpandInfoStyle = {
            height: this.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100],
                extrapolate: 'clamp',
            }),
            opacity: this.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            })
        }

        const animatedChevronStyle = {
            transform: [
                {
                    rotate: this.animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '90deg'],
                        extrapolate: 'clamp',
                    })
                }
            ],
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end'
        }

        const { transaction } = this.state;

        return (
            <React.Fragment>

                <TouchableNativeFeedback
                    onPress={this.expandInfo}
                >
                    <View style={styles.transactionItemContainer}>
                        <View style={styles.transactionShortInfo}>
                            {
                                transaction.id % 2 == 0 ?
                                    <View style={[styles.iconContainer, { backgroundColor: 'green' }]}>
                                        <Icon size={24} color={'#fff'} name={'faCheck'} />
                                    </View>
                                    :
                                    <View style={[styles.iconContainer, { backgroundColor: 'red' }]}>
                                        <Icon size={24} color={'#fff'} name={'faTimes'} />
                                    </View>
                            }
                            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>
                                    {transaction.amount}
                                </Text>
                            </View>
                            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text>
                                    {transaction.date}
                                </Text>
                            </View>
                            <Animated.View style={animatedChevronStyle}>
                                <Icon name={'faChevronRight'} />
                            </Animated.View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <Animated.View style={animatedExpandInfoStyle}>
                    <Text>
                        More details will be available here
                    </Text>
                </Animated.View>
            </React.Fragment>
        )
    }
}
export default TransactionItem;
