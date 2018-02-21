// @flow
import * as React from 'react'
import ThemeProvider from './ThemeProvider'

export default function themedComponent<T: React.ComponentType<any>> (Component: T): React.ComponentType<React.ElementConfig<T>> {

  return class ThemedComponent extends React.Component<React.ElementProps<typeof Component>> {
    static displayName = 'Styled' + (Component.displayName || Component.name || 'Component')

    static contextTypes = ThemeProvider.childContextTypes

    static getStyleName() {
      return Component.displayName || Component.name || 'Component'
    }

    combineProps = () => {
      const styles = this.context.themeProvider.getStyles(Component)

      return Object.keys(this.props).reduce((memo, propName) => {
        if (styles[propName]) {
          const prop = Array.isArray(styles[propName]) ? styles[propName] : [ styles[propName] ]
          if (Array.isArray(memo[propName])) {
            memo[propName].forEach(v => prop.push(v))
          } else if (memo[propName]) {
            prop.push(memo[propName])
          }
          return {
            ...memo,
            [propName]: prop,
            }
        }
        return memo
      }, this.props)

    }

    render = () => (<Component {...this.combineProps()} />)
  }
}
