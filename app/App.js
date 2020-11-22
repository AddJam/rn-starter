/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native'
import RNText from 'app/components/common/RNText'
import RNButton from 'app/components/common/RNButton'
import { colors } from 'app/config'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.container}>
            <RNText>Welcome</RNText>
            <RNText>Button Pressed {count} times</RNText>
            <RNButton label={'Press Me'} onPress={() => setCount(count + 1)} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 120,
  },
})

export default App
