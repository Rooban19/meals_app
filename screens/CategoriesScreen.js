import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = props => {
	const renderGridItem = itemdata => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: itemdata.item.id,
						},
					});
				}}
			>
				<View>
					<Text> {itemdata.item.title} </Text>
				</View>
			</TouchableOpacity>
		);
	};
	return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
	},
});

export default CategoriesScreen;
