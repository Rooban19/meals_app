import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FiltersScreen from '../screens/FiltersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
		},
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetails: MealDetailScreen,
	},
	{
		// initialRouteName: 'Categories',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
			headerTitle: 'A Screen',
		},
	},
);

const Favnavigator = createStackNavigator(
	{
		Favorite: FavoritesScreen,
		MealDetails: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
			headerTitle: 'Your Favorites',
		},
	},
);

const MealsFavTabNavigatior = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: tabinfo => {
					return <Ionicons name="ios-restaurant" size={25} color={tabinfo.tintColor} />;
				},
			},
		},
		Favorites: {
			screen: Favnavigator,
			navigationOptions: {
				tabBarLabel: 'Favorites!',
				tabBarIcon: tabinfo => {
					return <Ionicons name="ios-star" size={25} color={tabinfo.tintColor} />;
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.accentColor,
		},
	},
);

const FilterNav = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
			headerTitle: 'Your Favorites',
		},
	},
);
const MainNavigator = createDrawerNavigator(
	{
		MealsFavs: MealsFavTabNavigatior,
		Filter: FilterNav,
	},{
		contetOptions:{
			activeTintColor:Colors.accentColor,
			labelStyle:{ fontFamily:'open-sans'}
		}
	}
	 
);
export default createAppContainer(MainNavigator);
