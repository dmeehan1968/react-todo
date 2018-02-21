// @flow
import * as React from 'react'
import { render, Artboard, Document, Page, View, Text, StyleSheet } from 'react-sketchapp'
import { ThemeProvider, themedComponent } from '../src/Theme'
import ProjectList from '../src/Project/ProjectList'
import type { Project } from '../src/types'

/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-unused-styles */

const styles = StyleSheet.create({
  document: {

  },
  page: {

  },
  artboard: {
    marginTop: 75,
  },
  viewport: {
    backgroundColor: '#eee',
    padding: 10,
  },
  iPhoneX: {
    backgroundColor: 'white',
    height: 812,
    width: 375,
  },
  view: {

  },
  text: {

  },
})

const ViewPort = ({ device, children }: {device: string, children?: React.Node}) => (
  <View
    name={'ViewPort-' + device}
    style={styles.viewport}
  >
    <View
      name="Title"
    >
      <Text>{device}</Text>
    </View>
    <View
      name={'Content-' + device}
      style={styles[device]}
    >
      {children}
    </View>
  </View>
)

const projects: Array<Project> = [
  {
    id: 0,
    title: 'Beach Vacation',
    tasks: [
      {
        id: 0,
        title: 'Buy Beach Ball',
      },
    ],
    color: 'blue',
  },
  {
    id: 1,
    title: 'Home',
    tasks: [],
    color: 'green',
  },
  {
    id: 2,
    title: 'Kids',
    tasks: [],
  },
  {
    id: 3,
    title: 'Birthday Party',
    tasks: [],
  },
  {
    id: 4,
    title: 'Groceries',
    tasks: [],
  },
  {
    id: 5,
    title: 'Finance',
    tasks: [],
  },
  {
    id: 6,
    title: 'Reminders',
    tasks: [],
  },
]

const theme = StyleSheet.create({
  ProjectList: {
    flexGrow: 1,
    // backgroundColor: 'red',
  },
  'TableViewCell': {
    // backgroundColor: 'blue',
    justifyContent: 'center',
    padding: 10,
  },
  'TableViewCell.titleTextStyle': {
    fontSize: 24,
  },
  'TableViewCell.subTitleTextStyle': {
    // color: '#aaa',
  },
})

const StyledProjectList = themedComponent(ProjectList)

export default () => {
  render((
    <Document style={styles.document}>
      <Page style={styles.page}>
        <Artboard name="Project List" style={styles.artboard}>
          <ViewPort device="iPhoneX">
            <ThemeProvider theme={theme}>
              <StyledProjectList
                projects={projects}
              />
            </ThemeProvider>
          </ViewPort>
        </Artboard>
        <Artboard name="Empty Project List" style={styles.artboard}>
          <ViewPort device="iPhoneX">
            <ThemeProvider theme={theme}>
              <StyledProjectList
                projects={[]}
              />
            </ThemeProvider>
          </ViewPort>
        </Artboard>
      </Page>
    </Document>
))

}
