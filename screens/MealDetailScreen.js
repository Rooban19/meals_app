import React from 'react';
import { ScrollView, Image, View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import listItem from '../components/listItem';

import { MEALS } from '../data/dummy-data';
 

const MealDetailScreen = props => {
	
	const mealId = props.navigation.getParam('mealId');

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text>{selectedMeal.duration}m</Text>
				<Text>{selectedMeal.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal.affordability.toUpperCase()}</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map(ingredient => (
				<Text key={ingredient}>{ingredient}</Text>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map(step => (
				<Text key={step}>{step}</Text>
			))}
			<View style={styles.screen}></View>
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = navigationData => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find(meal => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorites"
					iconName="ios-star"
					onPress={() => {
						console.log('Favvv');
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center',
	},
	
});

export default MealDetailScreen;
