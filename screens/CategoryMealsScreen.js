import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
	const catId = props.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(category => category.id === catId);
	return (
		<View style={styles.screen}>
			<Text> The Category Meal Screen! </Text>
			<Text> {selectedCategory.title} </Text>
			<Button
				title="Go to MealDetails"
				onPress={() => {
					props.navigation.navigate('MealDetail');
				}}
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
