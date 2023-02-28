import { View, Text, StyleSheet } from 'react-native';


interface Props {
    children: string;
}

const Subtitle = ({ children }: Props): JSX.Element => {
    return (<View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>);
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
});