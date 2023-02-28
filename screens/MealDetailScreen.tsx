import { useDispatch, useSelector } from 'react-redux';
import { useContext, useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoritesContext } from '../store/context/favorites-context';

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

const MealDetailScreen = ({ route, navigation }: Props): JSX.Element => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state: any) => state.favoriteMeals.ids);
    //gets data out of the redux store
    const dispatch = useDispatch();


    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);//'selectedMeal' is possibly 'undefined'.

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        // console.log('Pressed!');
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                // return <Button title="Tap me" onPress={headerButtonPressHandler} />
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}//'star'
                    color='white'
                    onPress={changeFavoriteStatusHandler}></IconButton>
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);
    return (
        <ScrollView style={styles.rootContainer} >
            <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }}></Image>
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            {/* Text cant receive border, so we wrap the text with a view and add border to it.*/}
            <MealDetails
                duration={selectedMeal?.duration}
                complexity={selectedMeal?.complexity}
                affordability={selectedMeal?.affordability}
                textStyle={styles.detailText}
                style={styles.detailText}></MealDetails>
            <View style={styles.outerContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal?.ingredients}></List>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal?.steps}></List>
                    {/* {selectedMeal?.steps.map((step: string) => (
                <Text key={step} >{step}</Text>))} */}
                </View>
            </View>
        </ScrollView>
        // <Text>
        //     This is the Meal Detail screen ({mealId})
        // </Text>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
        borderWidth: 2,
        borderColor: 'black'
    },
    image: {
        width: '100%',
        height: 350,
        borderWidth: 2,
        borderColor: 'accent'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white'
    },
    detailText: {
        color: 'white',
        borderWidth: 2,
        borderColor: 'green'
    },
    listContainer: {
        width: '80%',
        // height: 150,
        borderWidth: 2,
        borderColor: 'blue'
    },
    outerContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'yellow'
    }
});
// function useSelector(arg0: (state: any) => any) {
//     throw new Error('Function not implemented.');
// }

