import React from "react"
import { FlatList, Text, TouchableOpacity } from "react-native"
import s from "./styles"

type Props = {
    categories: string[],
    selectedCategory: string,
    onCategoryPress: React.Dispatch<React.SetStateAction<string>>
}

const Categories = ({ categories, selectedCategory, onCategoryPress }: Props) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item)}
            data={categories}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item
                return (
                    <TouchableOpacity
                        onPress={() => onCategoryPress(item)}
                        style={[
                            s.itemContainer, selected ? s.selectedItemContainer : {},
                            index === 0 ? { marginLeft: 32 } : {}
                        ]}
                    >
                        <Text style={[s.item, selected ? s.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export default React.memo(Categories)