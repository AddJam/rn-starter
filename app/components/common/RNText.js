import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors } from 'app/config'

const RNText = ({
  style,
  bold,
  semibold,
  error,
  title,
  children,
  ...inputProps
}) => {
  const isBold = bold ? styles.bold : null
  const isSemibold = semibold ? styles.semibold : null
  const isTitle = title ? styles.title : null
  const isError = error ? styles.error : null

  return (
    <Text
      style={[styles.text, isBold, isSemibold, isTitle, isError, style]}
      {...inputProps}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.grey,
  },
  semibold: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: '700',
  },
  title: {
    fontSize: 24,
    color: colors.black,
  },
  error: {
    color: colors.red,
  },
})

export default RNText
