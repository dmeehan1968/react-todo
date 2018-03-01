// @flow
import * as React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

import { themedComponent } from '../../Theme'
import combineStyles from '../../utils/combineStyles'

type Props = {
  name?: string,
  style?: StyleSheet.StyleProp,
  children?: React.Node,
  compact: boolean,
  compactStyle?: StyleSheet.StyleProp,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class TableViewCellSingleLine extends React.Component<Props> {

  static defaultProps = {
    name: 'TableViewCellSingleLine',
  }

  render = (): React.Node => (
    <Text
      name={this.props.name}
      style={combineStyles(this.props.style, this.props.compact && this.props.compactStyle)}
    >
      {this.props.children}
    </Text>
  )
}

export const StyledTableViewCellSingleLine = themedComponent(TableViewCellSingleLine)
