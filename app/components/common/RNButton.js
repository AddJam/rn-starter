import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from 'app/config'
import RNText from './RNText'

const RNButton = ({ label, onPress, disabled, accessibilityText }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      accessible={true}
      accessibilityLabel={accessibilityText}
      style={styles.container}
    >
      <RNText style={styles.label}>{label}</RNText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: colors.red,
    borderRadius: 40,
    width: '100%',
  },
  label: {
    color: colors.white,
    fontSize: 17,
  },
})

export default RNButton
