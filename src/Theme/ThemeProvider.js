// @flow
import * as React from 'react'
import PropTypes from 'prop-types'

type ThemeProviderProps = {
  theme: Object,
  children?: React.Node
}

//eslint-disable-next-line react/prefer-stateless-function
export default class ThemeProvider extends React.Component<ThemeProviderProps> {
  getChildContext() {
    return { theme: this.props.theme }
  }

  static childContextTypes = {
    theme: PropTypes.string,
  }

  render() {
    return this.props.children
  }
}
