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

    render = () => {
      const styles = this.context.themeProvider.getStyles(Component)
      const { style: componentStyle, ...otherProps} = this.props
      const { style: themeStyle, ...otherStyles } = styles
      return (
        <Component {...otherProps} style={[themeStyle, componentStyle]} {...otherStyles} />
          )}
    }
}
