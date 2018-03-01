// @flow
import * as React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import { themedComponent } from '../../Theme'
import combineStyles from '../../utils/combineStyles'

// type Uri = string
//
// type ImageSource = {
//   uri: Uri,
//   height?: number,
//   width?: number,
// }
//
//
// type Props2 = {
//   primaryAction: React.Node,
//   secondaryAction: React.Node,
// }
//
// <TableViewCell
//   primaryAction={
//     <TableViewCellSingleLine
//       text={this.props.text}
//       onPress={this.props.onPress}
//     />
//   }
//   secondaryAction={
//     <TableViewCellDisclosureIndicator
//       onPress={this.props.onDisclosurePress}
//     />
//   }
// />
//
type Props = {
  name?: string,
  style?: StyleSheet.StyleProp,
  primaryAction: React.Node,
  compact: boolean,
  compactStyle?: StyleSheet.StyleProp,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class TableViewCell extends React.Component<Props> {

  static defaultProps = {
    name: 'TableViewCell',
    compact: false,
  }

  render = () => (
    <View
      name={this.props.name}
      style={combineStyles(this.props.style, this.props.compact && this.props.compactStyle)}
    >
      {this.props.primaryAction}
    </View>
  )
}

export const StyledTableViewCell = themedComponent(TableViewCell)
