import React from 'react'

import { FlatList, Image, Pressable, SafeAreaView, TouchableOpacity, View } from 'react-native'

import s from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'

type GalleryParams = {
    images: string[]
}

const Gallery = () => {

    const route = useRoute()
    const navigation = useNavigation()
    const { images } = route?.params as GalleryParams || {}

    const onBack = () => {
        navigation.goBack()
    }


    return (
        <SafeAreaView style={s.container}>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ paddingHorizontal: 24, marginBottom: 32 }}
                    data={images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={s.image} />
                    )}
                />
                <Pressable onPress={onBack} hitSlop={8} style={s.backContainer}>
                    <Image
                        source={require('../../assets/back.png')}
                        style={s.backIcon}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Gallery)