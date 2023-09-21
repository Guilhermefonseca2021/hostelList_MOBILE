import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        flex: 1,
        marginLeft: 20,
        color: '#fff'
    },
    buttonStyle: {
        width: 46,
        height: 56,
        borderRadius: 6,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
})