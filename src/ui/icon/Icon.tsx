import React from 'react';
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface iconProps {
    name: string,
    style: object,
    color: string,
    size: number
}

const icon = (props: iconProps) => {

    if (!icons[props.name]) {
        return null;
    }

    return (
        <FontAwesomeIcon
            icon={icons[props.name]}
            style={props.style}
            color={props.color}
            size={props.size}
        />
    )
}
icon.defaultProps = {
    color: '#000',
    style: {},
}

export default icon;