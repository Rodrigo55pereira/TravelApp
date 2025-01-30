import React from "react"
import { Image, ImageSourcePropType, StyleProp, Text, TextStyle, View } from "react-native"

import s from "./styles"

type Props = {
    text?: string,
    icon: ImageSourcePropType,
    style?: StyleProp<TextStyle>
}

const InfoCard = ({ text = 'Default Text', icon, style }: Props) => {
    return (
        <View style={s.container}>
            <Image source={icon} style={s.icon} />
            <Text style={[s.title, style]}>{text}</Text>
        </View>
    )
}

export default React.memo(InfoCard)


// Utilizando javascript pra definir propriedades padronizado:

// Title.defaultProps = {
//     text: "Default Text"
// }