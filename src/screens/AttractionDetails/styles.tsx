import { StyleSheet, Dimensions } from "react-native"
import { ContinousBaseGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture"

const { height } = Dimensions.get('window')

const s = StyleSheet.create({
    container: {
        margin: 32,
    },
    mainImage: {
        width: '100%',
        height: height / 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16
    },
    footer: {
        backgroundColor: 'rgba(256, 256, 256, 0.35)',
        margin: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 8,
    },
    miniImage: {
        width: 40,
        height: 40,
        margin: 8,
        borderRadius: 10
    },
    moreImages: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    moreImagesContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.38)',
        width: 40,
        height: 40,
        top: 8,
        left: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40,
    },
    title: {
        color: '#000',
    },
    city: {
        fontSize: 20,
        color: '#000',
        fontWeight: '400',
        marginTop: 8,
    }
})

export default s