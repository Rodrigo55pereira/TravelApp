import React from "react"
import { Image, StyleProp, Text, TextStyle, TouchableOpacity, View } from "react-native"
import s from "./styles"

type Props = {
    imageSrc: string,
    title: string,
    subtitle: string,
    style: StyleProp<TextStyle>,
    onPress?: () => void
}

const AttractionCard = ({ imageSrc, title, subtitle, onPress, style }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[s.card, style]}>
            <Image style={s.image} source={{ uri: imageSrc }} />
            
            <Text style={s.title}>{title}</Text>
            
            <View style={s.row}>
                <Image style={s.icon} source={require('../../assets/location.png')}/>
                <Text style={s.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(AttractionCard)