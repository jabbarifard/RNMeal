import { FlatList, ListRenderItemInfo } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
// import type { ParamListBase } from '../App';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/routers/lib/typescript/src/types';

// interface CategoryItemData {
//     title: string;
//     color: string;
// }
// const renderCategoryItem = (itemData: ListRenderItemInfo<CategoryItemData>): JSX.Element => {
//     const pressHandler = () => {

//     }
//     return (
//         <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={ } />
//     );
// }

interface CategoryItemData {
    title: string;
    color: string;
    id: string;
}
type Props = DrawerScreenProps<ParamListBase, 'Categories'>;//'MealsCategories'>;

const CategoriesScreen = ({ navigation }: Props): JSX.Element => {
    const renderCategoryItem = (itemData: ListRenderItemInfo<CategoryItemData>): JSX.Element => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler} />
        );
    }
    return (
        <FlatList data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        ></FlatList>
    );
}

export default CategoriesScreen;

