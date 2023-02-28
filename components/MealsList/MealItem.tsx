import { View, Text, Pressable, Image, StyleSheet, Platform, TextStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import MealDetails from '../MealDetails';
import type { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    id: string,
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
    style: TextStyle;
    textStyle: TextStyle;
}

// type MealProps = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;
type MealProp = StackNavigationProp<RootStackParamList, 'MealDetail'>;

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability, style, textStyle }: Props): JSX.Element => {
    const navigation = useNavigation<MealProp>();

    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }}></Image>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                        style={style}
                        textStyle={textStyle}
                    />
                </View>
            </Pressable>

        </View >
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        // overflow: 'hidden',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

    buttonPressed: {
        opacity: 0.5
    },
})