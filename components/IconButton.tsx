import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    icon: any;
    color: string;
    onPress: () => void;
}

const IconButton = ({ icon, color, onPress }: Props): JSX.Element => {
    return (//style: if pressed, apply styles.pressed
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})