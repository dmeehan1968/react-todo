// @flow

import * as React from 'react'
import {
  StyleSheet,
} from 'react-native'

import FlatList from '../FlatList'
import type { Project, ProjectPressHandler } from '../types'
import ProjectListItem from './ProjectListItem'
import ProjectListEmpty from './ProjectListEmpty'

type Props = {
  projects: Array<Project>,
  onPress: ProjectPressHandler,
  style?: StyleSheet.StyleProp,
  itemStyle?: StyleSheet.StyleProp,
}

export default class ProjectList extends React.Component<Props> {

  static defaultProps = {
    onPress: () => undefined,
  }

  renderItem = (project: Project) => (
    <ProjectListItem
      {...project}
      style={this.props.itemStyle}
      onPress={this.props.onPress}
    />
  )

  keyExtractor = (project: Project): string => project.id.toString()

  render() {
    return (
      <FlatList
        name="ProjectList"
        style={this.props.style}
        data={this.props.projects}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ListEmptyComponent={ProjectListEmpty}
      />
    )
  }
}
