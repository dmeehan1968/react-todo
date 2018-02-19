// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'

type ThemeProviderProps = {
  theme: StyleSheet.Styles,
  children?: React.Node
}

//eslint-disable-next-line react/prefer-stateless-function
export default class ThemeProvider extends React.Component<ThemeProviderProps> {
  getChildContext() {
    return {
      theme: this.props.theme,
      themeProvider: this,
    }
  }

  static childContextTypes = {
    theme: PropTypes.object,
    themeProvider: PropTypes.object,
  }

  getComponentName = (Component: React.ComponentType<any>): string => (
    Component.displayName || Component.name || 'Component'
  )

  getStyles = (Component: React.ComponentType<any>): Object | void => {
    const name = this.getComponentName(Component)
    const propKeys = Object.keys(Component.propTypes || {})
    const reducer = (acc, key) => {
      if (/style$/i.test(key)) {
        const value = key.length === 5 ? this.props.theme[name] : this.props.theme[[name,key].join('.')]
        return typeof value !== 'undefined'
          ? { ...acc,[key]: value }
          : acc
      }
      return acc
    }
    return propKeys.reduce(reducer, {})
  }

  render() {
    return this.props.children
  }
}
