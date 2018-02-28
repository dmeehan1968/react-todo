// @flow
import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import {
  themedComponent,
} from '../Theme'

type Props = {
  style: StyleSheet.StyleProp,
  textStyle: StyleSheet.StyleProp,
}

const ProjectListEmpty = ({style, textStyle}: Props) => (
  <View name="ProjectListEmpty" style={style}>
    <Text style={textStyle}>No Projects</Text>
  </View>
)

export default ProjectListEmpty
export const StyledProjectListEmpty = themedComponent(ProjectListEmpty)
