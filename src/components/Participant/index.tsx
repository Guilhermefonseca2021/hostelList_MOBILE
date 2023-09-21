import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { styles } from './styles'

type PropsParticipant = {
    name: string;
    onRemove: () => void;
}

export function Participant({ name, onRemove }: PropsParticipant) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.buttonStyle} onPress={onRemove}>
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
        </View>
    )
}