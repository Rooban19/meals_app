import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';
const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor }}
				thumbColor={Colors.primaryColor}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = props => {
	const { navigation } = props;
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactosFree, setIsLactosFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactosFree,
			vegan: isVegan,
			isVegetarian: isVegetarian,
		};
		console.log(appliedFilters);
	}, [isGlutenFree, isLactosFree, isVegan, isVegetarian]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available filters / Restrictions</Text>
			<FilterSwitch label={'Gluten-Free'} state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
			<FilterSwitch label={'Lactos-Free'} state={isLactosFree} onChange={newValue => setIsLactosFree(newValue)} />
			<FilterSwitch label={'Vegan'} state={isVegan} onChange={newValue => setIsVegan(newValue)} />
			<FilterSwitch label={'Vegetarian '} state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
		</View>
	);
};

FiltersScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Filter Screen',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title="Menu" iconName="ios-save" onPress={navData.navigation.getParam('save')} />
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginLeft: 40,
		marginVertical: 10,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
	},
});

export default FiltersScreen;
