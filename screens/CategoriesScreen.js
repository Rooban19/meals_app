import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
	const renderGridItem = itemdata => {
		return (
			<CategoryGridTile
				title={itemdata.item.title}
				color={itemdata.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: itemdata.item.id,
						},
					});
				}}
			/>
		);
	};

	return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

CategoriesScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Meal Categories',
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
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoriesScreen;
