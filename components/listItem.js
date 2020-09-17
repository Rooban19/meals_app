import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItem = props => {
	return (
		<View style={styles.listItem}>
			<Text>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 20,
	},
});

export default listItem;
