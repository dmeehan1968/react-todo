// @flow
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { Project, ProjectPressHandler } from '../types'

type Props = Project & {
  onPress: ProjectPressHandler,
  style?: StyleSheet.StyleProp,
  textStyle?: StyleSheet.StyleProp,
}

export default class ProjectListItem extends React.Component<Props> {

  static defaultProps = {
    onPress: () => undefined,
  }

  handlePress = () => {
    this.props.onPress(this.props.id)
  }

  render() {
    return (
      <View
        name="ProjectListItem"
        style={this.props.style}
        onPress={this.handlePress}
      >
        <Text
          style={this.props.textStyle}
        >
          {this.props.title}
        </Text>
      </View>
    )
  }
}
