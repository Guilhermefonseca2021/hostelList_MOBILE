import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";

export default function Home() {
    const participants = ['Guilherme', 'Kallyel', 'Diego', 'Rodrigo', 'Jessica', 'Grazi', 'Emilly', 'Fernanda']

    function handleAddPerson() {
        console.log('voce clicou no botao adicionar!')
    }

    function handleParticipantRemove(name: string) {
        console.log(`clico em remover ${name}`)
    }
    //view - div
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Quarta, 21 de setembro de 2022</Text>
 
            <View style={styles.form}>
                <TextInput style={styles.input} 
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    // keyboardType="email-address"
                />

                <TouchableOpacity style={styles.buttonStyle} onPress={handleAddPerson}>
                    <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant  
                        name={item} 
                        key={item}
                        onRemove={() =>  handleParticipantRemove(`${item}`)} 
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}