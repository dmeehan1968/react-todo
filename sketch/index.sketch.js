// @flow
import * as React from 'react'
import { render, Artboard, Document, Page, View, Text, StyleSheet } from 'react-sketchapp'

const styles = StyleSheet.create({
  document: {

  },
  page: {

  },
  artboard: {
    height: 500,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {

  },
  text: {

  }
})
export default () => {
  render((
    <Document style={styles.document}>
      <Page style={styles.page}>
        <Artboard style={styles.artboard}>
          <View style={styles.view}>
            <Text style={styles.text}>Welcome to Sketch</Text>
          </View>
        </Artboard>
      </Page>
    </Document>
))

}
