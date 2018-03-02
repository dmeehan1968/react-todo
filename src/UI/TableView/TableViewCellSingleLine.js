// @flow
import * as React from 'react'
import {
  Text,
  View,
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
  textStyle?: StyleSheet.StyleProp,
  compactTextStyle?: StyleSheet.StyleProp,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class TableViewCellSingleLine extends React.Component<Props> {

  static defaultProps = {
    name: 'TableViewCellSingleLine',
  }

  render = (): React.Node => (
    <View
      name={this.props.name}
      style={combineStyles(this.props.style, this.props.compact && this.props.compactStyle)}
    >
      <Text
        style={combineStyles(this.props.textStyle, this.props.compact && this.props.compactTextStyle)}
      >
        {this.props.children}
      </Text>
    </View>
  )
}

export const StyledTableViewCellSingleLine = themedComponent(TableViewCellSingleLine)
