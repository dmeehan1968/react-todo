// @flow
import * as React from 'react'
import { render, Artboard, Document, Page, View, Text, StyleSheet } from 'react-sketchapp'

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

  }
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
export default () => {
  render((
    <Document style={styles.document}>
      <Page style={styles.page}>
        <Artboard name="Project List" style={styles.artboard}>
          <ViewPort device="iPhoneX">
          </ViewPort>
        </Artboard>
        <Artboard name="Empty Project List" style={styles.artboard}>
          <ViewPort device="iPhoneX">
          </ViewPort>
        </Artboard>
      </Page>
    </Document>
))

}
