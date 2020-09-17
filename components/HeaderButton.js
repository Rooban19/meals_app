import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { Header } from 'react-native/Libraries/NewAppScreen';

const CustomHeaderButton = props => {
	return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={'white'} />;
};

export default CustomHeaderButton;
