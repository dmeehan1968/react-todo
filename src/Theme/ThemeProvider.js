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

    const componentNameAndSubStylesRegex = new RegExp([
      '^',            // start
      '([^.]+)',      // capture componentName
      '(?:\\.(.+))?', // capture optional substyle name
      '$',            // end
    ].join(''))

    const makeThemeFromComponentStyles = (memo, key) => {
      const [, componentName] = key.match(componentNameAndSubStylesRegex) || []
      if (componentName) {
        if (memo[componentName]) {
          return memo   // already processed
        }
        const styles = this._getStylesForString(componentName)
        if (styles) {
          return { ...memo, [componentName]: styles }
        }
      }
      return memo
    }
    this._theme = Object.keys(theme).reduce(makeThemeFromComponentStyles, {})
  }

  _getStylesForString = (componentName: string): Object => {

    const regex = new RegExp([
      '^',                    // start
      `(?:${componentName})`, // match but don't capture component name
      '(?:\\.',               // don't capture the dot
        '(.+)',               // capture substyle name
      ')?',                   // optional '.substyle'
      '$',                    // end
    ].join(''), 'i')          // ignore case

    const collectStyleAndSubstylesForComponent = (styles, key) => {
      const [match , substyleName] = key.match(regex) || []
      if (match) {
        const styleName = substyleName || 'style'
        return { ...styles, [styleName]: this.props.theme[key]}
      }
      return styles
    }

    return Object.keys(this.props.theme).reduce(collectStyleAndSubstylesForComponent, {})
  }

  getStyles = (Component: React.ComponentType<any>): Object => (
    this._theme[Component.displayName || Component.name || 'Component'] || {}
  )

  render() {
    return this.props.children
  }
}
