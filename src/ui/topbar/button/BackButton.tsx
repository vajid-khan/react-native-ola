import React from 'react';
import {
    TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation'
import Icon from '../../icon/Icon'

const backButton = props => {
    return (
        <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() => props.navigation.goBack()}
        >
            <Icon name="faArrowLeft" size={20} />
        </TouchableOpacity>
    )
}

export default withNavigation(backButton);