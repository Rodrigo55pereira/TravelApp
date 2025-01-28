import React from "react"
import { Image, StyleProp, Text, TextStyle, View } from "react-native"
import s from "./styles"

type Props = {
    imageSrc: string,
    title: string,
    subtitle: string,
    style: StyleProp<TextStyle>
}

const AttractionCard = ({ imageSrc, title, subtitle, style }: Props) => {
    return (
        <View style={[s.card, style]}>
            <Image style={s.image} source={{ uri: imageSrc }} />
            
            <Text style={s.title}>{title}</Text>
            
            <View style={s.row}>
                <Image style={s.icon} source={require('../../assets/location.png')}/>
                <Text style={s.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default React.memo(AttractionCard)