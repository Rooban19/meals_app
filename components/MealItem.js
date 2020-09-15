import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';

const MealItem = props => {
	return (
		<View style={styles.mealItem}>
			<TouchableNativeFeedback onPress={props.onSelectMeal}>
				<View>
					<View>
						<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
							<ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
								<View style={styles.titleContainer}>
									<Text style={styles.title}>{props.title.toUpperCase()}</Text>
								</View>
							</ImageBackground>
						</View>
						<View style={{ ...styles.mealRow, ...styles.melaDetail }}>
							<Text>{props.duration}m</Text>
							<Text>{props.complexity.toUpperCase()}</Text>
							<Text>{props.affordability.toUpperCase()}</Text>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
		borderRadius: 20,
		overflow: 'hidden',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '85%',
	},
	melaDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.7)',
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 15,
		color: 'white',

		textAlign: 'center',
	},
});

export default MealItem;
