import React from 'react'

import { SafeAreaView, Text } from 'react-native'

import s from './styles'


const Gallery = () => {

    return (
        <SafeAreaView style={s.container}>
            <Text>Gallery</Text>
        </SafeAreaView>
    )
}

export default React.memo(Gallery)