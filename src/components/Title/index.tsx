import React from "react"
import { StyleProp, Text, TextStyle } from "react-native"

import s from "./styles"

type Props = {
    text?: string,
    style?: StyleProp<TextStyle>
}

const Title = ({ text = 'Default Text', style }: Props) => {
    return (
        <Text style={[s.title, style]}>{text}</Text>
    )
}

export default React.memo(Title)


// Utilizando javascript pra definir propriedades padronizado:

// Title.defaultProps = {
//     text: "Default Text"
// }