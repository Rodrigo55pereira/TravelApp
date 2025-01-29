import { View, SafeAreaView, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Title from '../../components/Title'
import s from './styles'
import Categories from '../../components/Categories'
import AttractionCard from '../../components/AttractionCard'
import { Attraction } from '../../interfaces/Attraction'

import jsonData from '../../data/attractions.json'
import categories from '../../data/categories.json'

const ALL = 'All'

const Home  = () => {

    const navigation: any = useNavigation()

    const [selectedCategory, setSelectedCategory] = useState(ALL)
    const [attraction, setAttraction] = useState<Attraction[]>([])

    useEffect(() => {
        if (selectedCategory === ALL) {
            setAttraction(jsonData)
        } else {
            const filteredAttraction = jsonData.filter(item => item.categories.includes(selectedCategory))
            setAttraction(filteredAttraction)
        }
    }, [selectedCategory])

    useEffect(() => {
        //console.log('jsonData :>> ', jsonData)
        setAttraction(jsonData)
    }, [])

    return (
        <SafeAreaView style={s.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={attraction}
                keyExtractor={item => String(item.id)}
                numColumns={2}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={(
                    <View style={s.emptyView}>
                        <Text style={s.emptyText}>No itens found.</Text>
                    </View>
                )}
                ListHeaderComponent={(
                    <>
                        <View style={{ margin: 32 }}>
                            <Title text="Where do" style={{ fontWeight: 'normal' }} />
                            <Title text="you want to go?" />

                            <Title text="Explore Attractions" style={s.subtitle} />

                        </View>
                        <Categories
                            selectedCategory={selectedCategory}
                            onCategoryPress={setSelectedCategory}
                            categories={['All', ...categories]}
                        />
                    </>
                )}
                renderItem={({ item, index }) => (
                    <AttractionCard
                        key={item.id}
                        style={index % 2 === 0
                            ? { marginRight: 12, marginLeft: 32 }
                            : { marginRight: 32 }}
                        onPress={() => navigation.navigate('AttractionDetails', { item })}
                        imageSrc={item.images.length ? item.images[0] : ''}
                        title={item.name}
                        subtitle={item.city}
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default React.memo(Home)