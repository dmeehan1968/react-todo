// @flow
import * as React from 'react'
import PropTypes from 'prop-types'

export default (Component: React.ComponentType<any>) => (

  //eslint-disable-next-line react/prefer-stateless-function, react/no-multi-comp
  class extends React.Component<React.ElementProps<typeof Component>> {
    static displayName = 'Styled' + (Component.displayName || 'Component')

    static contextTypes = {
      theme: PropTypes.string,
    }

    static getStyleName() {
      return Component.displayName || Component.name || 'Component'
    }

    getStyle = () => this.context.theme[this.constructor.getStyleName()]

    render = () => (
        <Component {...this.props} style={this.getStyle()}>
          {this.props.children}
        </Component>
      )
    }
)
