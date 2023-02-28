import { Text, FlatList, View, StyleSheet, ListRenderItemInfo } from 'react-native';
import { useEffect, useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';


// interface Props {
//     route: RouteProp<ParamListBase, string>;
// }

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen = ({ route, navigation }: Props): JSX.Element => {
    // const route = useRoute<RouteProp<ParamListBase, string>>();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {//useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title;//find is a part of vanila javascript
        navigation.setOptions({
            title: categoryTitle,
        });//takes all the props of native stack navigator
    }, [catId, navigation]);
    return <MealsList items={displayedMeals}/>;
}

export default MealsOverviewScreen;



