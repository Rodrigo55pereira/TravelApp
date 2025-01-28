import React from 'react'

import { SafeAreaView, Text } from 'react-native'

import s from './styles'


const AttractionDetails = () => {

    return (
        <SafeAreaView style={s.container}>
            <Text>AttractionDetails</Text>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetails)