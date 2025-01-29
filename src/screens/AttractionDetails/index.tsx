import React from 'react'

import { SafeAreaView, Text } from 'react-native'

import s from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Attraction } from '../../interfaces/Attraction'

type AttractionDetailsParams = {
    item : Attraction
}

const AttractionDetails = () => {

    const route = useRoute()
    const navitagion = useNavigation()
    const { item } = route?.params as AttractionDetailsParams || {}

    const onBack = () => {
        navitagion.goBack()
    }

    return (
        <SafeAreaView style={s.container}>
            <Text onPress={onBack} style={{ margin: 32 }}>Back</Text>
            <Text>{item?.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetails)