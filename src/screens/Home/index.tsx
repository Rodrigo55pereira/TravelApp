import { Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import Title from '../../components/Title'
import s from './styles'
import Categories from '../../components/Categories'

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState('All')

    return (
        <SafeAreaView>
            <View style={s.container}>
                <Title text="Where do" style={{ fontWeight: 'normal' }} />
                <Title text="you want to go?" />

                <Title text="Explore Attractions" style={s.subtitle} />

                <Categories
                    selectedCategory={selectedCategory}
                    onCategoryPress={setSelectedCategory}
                    categories={['All', 'Popular', 'Historical', 'Random', 'Trending', 'Exclusive', 'Others']}
                />

            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home)