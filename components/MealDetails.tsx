import { View, Text, StyleSheet, TextStyle } from 'react-native';


interface Props {
    duration: number;
    complexity: string;
    affordability: string;
    style: TextStyle;//this style oveerides the text styles for detailItem
    textStyle: TextStyle;
}
const MealDetails = ({ duration, complexity, affordability, style, textStyle }: Props): JSX.Element => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
});