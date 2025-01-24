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
            data={categories}
            style={{ marginRight: -32 }}
            renderItem={({ item }) => {
                const selected = selectedCategory === item
                return (
                    <TouchableOpacity onPress={() => onCategoryPress(item)} style={[s.itemContainer, selected ? s.selectedItemContainer : {}]}>
                        <Text style={[s.item, selected ? s.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export default React.memo(Categories)