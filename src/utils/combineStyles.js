// @flow

import { StyleSheet } from 'react-native'

const combineStyles = (...styles: StyleSheet.StyleProp): StyleSheet.StyleProp => {

  const output = styles.reduce((memo, style) => {
    if (Array.isArray(style)) {
      return [ ...memo, ...style ]
    }

    if (typeof style === 'object' || typeof style === 'number') {
      return [ ...memo, style ]
    }

    return memo
  }, [])

  switch (output.length) {
    case 0:
      return undefined
    case 1:
      return output[0]
    default:
      return output
  }
}

export default combineStyles
