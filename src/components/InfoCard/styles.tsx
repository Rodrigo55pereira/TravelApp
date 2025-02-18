import { StyleSheet } from "react-native"

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    icon: {
        width: 40,
        height: 40
    },
    title: {
        fontSize: 12,
        color: '#000',
        flexWrap: 'wrap',
        maxWidth: '90%',
        marginHorizontal: 8
    },
})

export default s