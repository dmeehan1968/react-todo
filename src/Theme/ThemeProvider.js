// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'

type ComponentName = string
type StylePropertyName = string
type StylePropertyValue = string | number
type StyleName = string

type Style = {
  [StylePropertyName]: StylePropertyValue
}

type Theme = {
  [ComponentName]: Style
}

type ComponentStyle = {
  [StyleName]: Style
}

type CompiledTheme = {
  [ComponentName]: ComponentStyle
}

type Props = {
  theme: Theme,
  fontScale: 'small' | 'normal' | 'large' | 'huge',
  children?: React.Node
}

const fontScaleMap = {
  small: 0.85,
  normal: 1,
  large: 1.15,
  huge: 1.3,
}

export default class ThemeProvider extends React.Component<Props> {

  _rawTheme: Theme
  _compiledTheme: CompiledTheme

  static defaultProps = {
    fontScale: 'normal',
  }

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
    this._rawTheme = { ...theme }
    this._compiledTheme = ThemeProvider._scaleFonts(Object.keys(theme).reduce(makeThemeFromComponentStyles, {}),
      fontScaleMap[this.props.fontScale] || 1)
  }

  static _scaleFonts(originalTheme: CompiledTheme, fontScale: number): CompiledTheme {

    const scaleStyle = (style: Style, prop: StylePropertyName) => {
      if (prop === 'fontSize' && typeof style[prop] === 'number') {
        const value = style[prop]
        return { ...style, [prop]: value * fontScale }
      }
      return style
    }

    const scaleComponent = (component: ComponentStyle, styleName: StyleName) => (
      { ...component, [styleName]: Object.keys(component[styleName]).reduce(scaleStyle, component[styleName]) }
    )

    const scaleTheme = (theme: CompiledTheme, componentName: ComponentName) => (
      { ...theme, [componentName]: Object.keys(theme[componentName]).reduce(scaleComponent, theme[componentName]) }
    )

    return Object.keys(originalTheme).reduce(scaleTheme, originalTheme)
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
    this._compiledTheme[Component.displayName || Component.name || 'Component'] || {}
  )

  render() {
    return this.props.children
  }
}
