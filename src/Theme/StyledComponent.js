// @flow
import * as React from 'react'
import PropTypes from 'prop-types'

export default function StyledComponent<T: React.ComponentType<any>> (Component: T): React.ComponentType<React.ElementConfig<T>> {

  return class StyledComponent extends React.Component<React.ElementProps<typeof Component>> {
    static displayName = 'Styled' + (Component.displayName || Component.name || 'Component')

    static contextTypes = {
      theme: PropTypes.object,
    }

    static getStyleName() {
      return Component.displayName || Component.name || 'Component'
    }

    getStyle = () => this.context.theme[this.constructor.getStyleName()]

    render = () => {
      const { style, ...otherProps} = this.props
      return (
        <Component {...otherProps} style={[this.getStyle(), style]} />
          )}
    }
}

// export default StyledComponent
