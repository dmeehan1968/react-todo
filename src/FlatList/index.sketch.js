// @flow

import * as React from 'react'
import { View, StyleSheet } from 'react-native'

type Item = any
type RenderItemFunction = (item: Item) => React.Element<any>
type KeyExtractorFunction = (item: Item, index: number) => string

type Props = {
  name?: string,
  data: Array<Item>,
  renderItem: RenderItemFunction,
  keyExtractor: KeyExtractorFunction,
  ListEmptyComponent?: ?(React.ComponentType<any> | React.Element<any>),
  ItemSeparatorComponent?: ?(React.ComponentType<any> | React.Element<any>),
  ListHeaderComponent?: ?(React.ComponentType<any> | React.Element<any>),
  ListFooterComponent?: ?(React.ComponentType<any> | React.Element<any>),
  style?: StyleSheet.StyleProp,
}

export default class FlatList extends React.Component<Props> {

  static keyExtractor: KeyExtractorFunction = (item: Item) => item.id && item.id.toString()

  static defaultProps = {
    keyExtractor: FlatList.keyExtractor,
  }

  renderComponentOrElement = (Component: ?(React.ComponentType<any> | React.Element<any>)) => {
    if (typeof Component === 'function') {
      return <Component />
    }
    if (React.isValidElement(Component)) {
      return Component
    }
    return null
  }

  renderEmptyList = () => (
    this.props.data.length === 0
      ? this.renderComponentOrElement(this.props.ListEmptyComponent)
      : null
  )

  renderList = () => (
    this.props.data.length
    ? [
        this.renderComponentOrElement(this.props.ListHeaderComponent),
        this.renderListItems(),
        this.renderComponentOrElement(this.props.ListFooterComponent),
      ]
    : null
  )

  renderListItems = () => (
    this.props.data.map((item, index) => (
      <View
        name="Item"
        key={this.props.keyExtractor(item, index)}
      >
        {this.props.renderItem(item)}
        {index < this.props.data.length
          ? this.renderComponentOrElement(this.props.ItemSeparatorComponent)
          : null
        }
      </View>
    ))
  )

  render = () => (
    <View
      name={this.props.name || "FlatList"}
      style={this.props.style}
    >
      {this.renderEmptyList()}
      {this.renderList()}
    </View>
  )
}
