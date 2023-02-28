import { useContext } from 'react';
import {useSelector} from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';

const FavoritesScreen = (): JSX.Element => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state: any) => state.favoriteMeals.ids);
    // const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));
    
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meal yet!</Text>
            </View>
        );
    }
    return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue'
    }
});