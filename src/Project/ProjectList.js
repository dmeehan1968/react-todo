// @flow

import * as React from 'react'
import {
  StyleSheet,
} from 'react-native'

import type { Project, ProjectPressHandler } from '../types'

type Props = {
  projects: Array<Project>,
  onPress: ProjectPressHandler,
  style?: StyleSheet.StyleProp,
}

export default class ProjectList extends React.Component<Props> {

  static defaultProps = {
    onPress: () => undefined,
  }

  render() {
    return (
    )
  }
}
