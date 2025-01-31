import React from 'react'

import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native'

import s from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Attraction } from '../../interfaces/Attraction'
import { StackNavigationProp } from '@react-navigation/stack'
import Title from '../../components/Title'
import InfoCard from '../../components/InfoCard'

type AttractionDetailsParams = {
    item: Attraction
}

type RootStackParamList = {
    Gallery: { images: string[] }
}

type NavigationProps = StackNavigationProp<RootStackParamList, 'Gallery'>

const AttractionDetails = () => {

    const route = useRoute()
    const navitagion = useNavigation<NavigationProps>()

    const { item } = route?.params as AttractionDetailsParams || {}
    const mainImage = item?.images.length ? item?.images[0] : ''
    const slicedImages = item?.images.length ? item?.images?.slice(0, 5) : []
    const diffImages = item?.images.length - slicedImages?.length

    const onBack = () => {
        navitagion.goBack()
    }

    const onGalleryNavigate = () => {
        navitagion.navigate('Gallery', { images: item?.images })
    }

    return (
        <SafeAreaView style={s.container}>
            <ImageBackground
                imageStyle={{ borderRadius: 20 }}
                style={s.mainImage}
                source={{ uri: mainImage }}
            >
                <View style={s.header}>
                    <Pressable onPress={onBack} hitSlop={8}>
                        <Image style={s.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                    <Pressable hitSlop={8}>
                        <Image style={s.icon} source={require('../../assets/share.png')} />
                    </Pressable>
                </View>
                <Pressable onPress={onGalleryNavigate} style={s.footer}>
                    {slicedImages?.map((image, index) => (
                        <View key={index}>
                            <Image
                                source={{ uri: image }}
                                style={s.miniImage}
                            />
                            {
                                diffImages > 0 && index === slicedImages?.length - 1 ? (
                                    <View style={s.moreImagesContainer}>
                                        <Text style={s.moreImages}>{`+${diffImages}`}</Text>
                                    </View>
                                ) : null
                            }
                        </View>
                    ))}
                </Pressable>
            </ImageBackground>
            <View style={s.headerContainer}>
                <View>
                    <Title style={s.title} text={item?.name}/>
                    <Text style={s.city}>{item?.city}</Text>
                </View>
                    <Title style={s.price} text={item?.entry_price} />
            </View>

            <InfoCard text={item?.address} icon={require('../../assets/location_circle.png')} />
            <InfoCard 
                text={`OPEN
${item?.opening_time} - ${item?.closing_time}`} 
                icon={require('../../assets/schedule.png')} />
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetails)