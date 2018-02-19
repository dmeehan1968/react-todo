// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'

type ThemeProviderProps = {
  theme: StyleSheet.Styles,
  children?: React.Node
}

export default class ThemeProvider extends React.Component<ThemeProviderProps> {

  _theme: { [key: string]: StyleSheet.Styles }

  getChildContext() {
    return {
      themeProvider: this,
    }
  }

  static childContextTypes = {
    themeProvider: PropTypes.object,
  }

  constructor(props: Object, context: any) {
    super(props, context)
    this._cacheTheme(this.props.theme)
  }

  componentWillReceiveProps = (newProps: Object) => {
    this._cacheTheme(newProps.theme)
  }

  _cacheTheme = (theme: StyleSheet.Styles) => {
    const reducer = (acc, key) => {
      if (/^[^.]+$/.test(key)) {
        return { ...acc, [key]: this._getStylesForString(key) }
      }
      return acc
    }
    this._theme = Object.keys(theme).reduce(reducer, {})
  }

  _getStylesForString = (name: string): Object => {
    const regex = new RegExp(`^(${name})(?:\\.(.+))?$`, 'i')
    const reducer = (acc, key) => {
      const match = key.match(regex)
      if (match) {
        const styleName = match[2]? match[2] : 'style'
        return { ...acc, [styleName]: this.props.theme[key]}
      }
      return acc
    }

    return Object.keys(this.props.theme).reduce(reducer, {})
  }

  getStyles = (Component: React.ComponentType<any>): Object => (
    this._theme[Component.displayName || Component.name || 'Component']
  )

  render() {
    return this.props.children
  }
}
