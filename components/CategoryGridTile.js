import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {
	let TouchableComp = TouchableNativeFeedback;

	if (Platform.OS === 'android' && Platform.version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.gridItem}>
			<TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
				<View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
					<Text style={styles.title} numberOfLines={2}>
						{props.title}
					</Text>
				</View>
			</TouchableComp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 10,
		overflow: 'hidden',
		elevation: 10,
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,

		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 18,
		textAlign: 'right',
	},
});

export default CategoryGridTile;
