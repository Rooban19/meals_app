import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
	const renderMealItem = itemData => {
		return (
			<MealItem
				image={itemData.item.imageUrl}
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelect={() => {}}
			/>
		);
	};

	const catId = props.navigation.getParam('categoryId');
	const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
};

CategoryMealScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(category => category.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealScreen;
