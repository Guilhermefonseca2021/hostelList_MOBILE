import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
    const [participants, setParticipants]= useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleAddPerson() {
        if(participantName == '') {
            return Alert.alert('Houve um erro', 'Por favor ensira o nome da pessoa antes de adicionar a lista')
        }
        if(participants.includes(participantName)) {
            return Alert.alert('Participante existe', 'ja existe um na lista como esse nome')
        }

        // participants.push('Ana');
        // setParticipants([...participants, 'Ana'])
        // ou
        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        // const listadDeParticipants = participants.filter(name != name)
        // const filteredList =  participants.filter(participant => participant !== name)
        // setParticipants(filteredList)

        // 1 titulo 2 mensagem 3 butoes
        Alert.alert(`Remover`, `Remover o participante ${name}?`, [
            {
                text: 'sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant  !== name))
            },
            {
                text: 'nao',
                style: 'cancel'
            }
        ])

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
                    // onChangeText={text => setParticipantName(text)} ou...
                    onChangeText={setParticipantName}
                    // keyboardType="email-address"
                    value={participantName} 
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
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda adiciona participantes a sua lista a sua lista de presenca
                    </Text>
                )}
            />
        </View>
    );
}