import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'


export default function App() {
  return (
    <SafeAreaView style={[s.safeView, s.flex]}>
      <View style={s.view}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  flex: {
    flex:1,
    backgroundColor: "blue"
  },
  safeView: {
    backgroundColor: "red",
  },
  view: {
    backgroundColor: "green"
  }
})