// @flow
import * as React from 'react'
import {
  StyleSheet,
} from 'react-native'

import { themedComponent } from '../../Theme'

import FlatList from '../../FlatList'
import combineStyles from '../../utils/combineStyles'

import { StyledTableViewCell } from './TableViewCell'

type Props<T> = {
  name?: string,
  style?: StyleSheet.StyleProp,
  data: Array<T>,
  renderPrimaryAction: (item: T, dense: boolean) => React.Node,
  keyExtractor?: (item: T, index: number) => string,
  compact: boolean,
  compactStyle?: StyleSheet.StyleProp,
}

export default class TableView extends React.Component<Props<*>> {

  static defaultProps = {
    name: 'TableView',
    compact: false,
  }

  renderItem = (item: any): React.Node => (
    <StyledTableViewCell
      compact={this.props.compact}
      primaryAction={this.props.renderPrimaryAction(item, this.props.compact)}
    />
  )

  render = () => (
    <FlatList
      name={this.props.name}
      data={this.props.data}
      style={combineStyles(this.props.style, this.props.compact && this.props.compactStyle)}
      keyExtractor={this.props.keyExtractor}
      renderItem={this.renderItem}
    />
  )
}

export const StyledTableView = themedComponent(TableView)
