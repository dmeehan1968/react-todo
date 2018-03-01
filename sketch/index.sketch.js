// @flow
import * as React from 'react'
import { render, Artboard, Document, Page, View, Text, StyleSheet } from 'react-sketchapp'
import { ThemeProvider } from '../src/Theme'

import { StyledTableViewCellSingleLine } from '../src/UI/TableView/TableViewCellSingleLine'
import { StyledTableView } from '../src/UI/TableView/TableView'

/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-unused-styles */

const styles = StyleSheet.create({
  artboard: {
    marginTop: 75,
    flexDirection: 'row',
  },
  sample: {
    backgroundColor: '#eee',
    padding: 16,
    justifyContent: 'space-between',
  },

  sampleContent: {
    backgroundColor: 'white',
  },

  sampleTitle: {
    marginTop: 16,
    fontWeight: 'bold',
  },
})

const theme = StyleSheet.create({
  TableView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  'TableView.denseStyle': {
    paddingVertical: 4,
  },
  TableViewCell: {
    height: 48,
    justifyContent: 'center',
  },
  'TableViewCell.compactStyle': {
    height: 40,
  },
  TableViewCellSingleLine: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
  },
  'TableViewCellSingleLine.compactStyle': {
    fontSize: 13,
  },
})

const Sample = ({ title, children, width = 375}: { title: string, children: React.Node, width?: number }) => (
  <View name="Sample" style={styles.sample}>
    <View name="SampleContent" style={[styles.sampleContent, { width }]}>
      {children}
    </View>
    <Text name="SampleTitle" style={styles.sampleTitle}>{title}</Text>
  </View>
)

const renderSingleLine = (item, compact) => (
  <StyledTableViewCellSingleLine compact={compact}>{item.title}</StyledTableViewCellSingleLine>
)

export default () => {
  render((
    <ThemeProvider theme={theme}>
      <Document style={styles.document}>
        <Page style={styles.page}>
          <Artboard name="TableViewCell" style={styles.artboard}>
            <Sample title="Single Line, Text Only">
              <StyledTableView
                name="singleLineTextOnly"
                data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Single Line Text' }))}
                renderPrimaryAction={renderSingleLine}
              />
            </Sample>
            <Sample title="Single Line, Text Only">
              <StyledTableView
                name="singleLineTextOnly"
                compact
                data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Single Line Text' }))}
                renderPrimaryAction={renderSingleLine}
              />
            </Sample>
          </Artboard>
        </Page>
      </Document>
    </ThemeProvider>
  ))

}
