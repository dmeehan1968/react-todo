// @flow
import * as React from 'react'
import { StyleSheet } from 'react-native'
import type { Project, ProjectPressHandler } from '../types'
import { themedComponent } from '../Theme'
import {
  StyledTableViewCell,
  TableViewCellAccessoryTypes,
} from '../UI/TableView/TableViewCell'

type Props = Project & {
  onPress: ProjectPressHandler,
  style?: StyleSheet.StyleProp,
  titleTextStyle?: StyleSheet.StyleProp,
}

export default class ProjectListItem extends React.Component<Props> {

  static defaultProps = {
    onPress: () => undefined,
  }

  handlePress = () => {
    this.props.onPress(this.props.id)
  }

  render = (): React.Node => {
    const computedProps = {}
    if (this.props.tasks.length) {
      computedProps.subTitle = `${this.props.tasks.length} overdue`
    }

    return (
      <StyledTableViewCell
        name="ProjectListItem"
        style={this.props.style}
        titleTextStyle={this.props.titleTextStyle}
        onPress={this.handlePress}
        title={this.props.title}
        accessoryType={TableViewCellAccessoryTypes.detailDisclosure}
        imageUrl={require('./img.png')}
        {...computedProps}
      />
    )
  }
}

export const StyledProjectListItem = themedComponent(ProjectListItem)
