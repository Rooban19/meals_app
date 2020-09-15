import { createStackNavigator, createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailScreen,
	},
	{	

		mode:'modal',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.primaryColor,
			},
			headerTintColor: 'white',
		},
	},
);

export default createAppContainer(MealsNavigator);
