import { FlatList, View, StyleSheet } from 'react-native';
import { ListRenderItemInfo } from 'react-native';
import Meal from '../../models/meal';
import MealItem from './MealItem';


interface Props {
    items: Meal[];
}

const MealsList = ({ items }: any): JSX.Element => {
    const renderMealItem = (itemData: ListRenderItemInfo<any>) => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            style: item.style,
            textStyle: item.textStyle
        };

        return (
            <MealItem
                {...mealItemProps}
            // title={itemData.item.title}
            // imageUrl={itemData.item.imageUrl}
            // duration={itemData.item.duration}
            // complexity={itemData.item.complexity}
            // affordability={itemData.item.affordability}
            />
        );
    }
    return (
        <View style={styles.container}>
            {/* <Text>Meals Overview Screen - {catId}</Text> */}
            <FlatList
                data={items}//{displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}></FlatList>
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});