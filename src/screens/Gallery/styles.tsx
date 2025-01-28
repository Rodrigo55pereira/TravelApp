import { StyleSheet } from "react-native"

const s = StyleSheet.create({
    container: {
        flex: 1,
    },

    subtitle: {
        fontSize: 20,
        color: '#000000',
        marginTop: 40,
    },
    row: {
        flexDirection: 'row',
        //backgroundColor: 'red'
        flexWrap: 'wrap',
    },
    emptyView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
    }
})

export default s