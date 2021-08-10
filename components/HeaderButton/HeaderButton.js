import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons'

import { COLORS } from '../../constants';

const CustomHeaderButton = () => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={35}
            color={COLORS.ACCENT}
        />
    )
}

export default CustomHeaderButton
