// @flow
import * as React from 'react'
import { render, Artboard, Document, Page, View, Text, StyleSheet } from 'react-sketchapp'
import { ThemeProvider } from '../src/Theme'

import { StyledTableViewCellSingleLine } from '../src/UI/TableView/TableViewCellSingleLine'
import { StyledTableViewCellTwoLine } from '../src/UI/TableView/TableViewCellTwoLine'
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

const theme = {
  TableView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  'TableView.denseStyle': {
    paddingVertical: 4,
  },
  TableViewCell: {
  },
  'TableViewCell.compactStyle': {
  },
  TableViewCellSingleLine: {
    justifyContent: 'center',
    height: 48,
  },
  'TableViewCellSingleLine.textStyle': {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
  },
  'TableViewCellSingleLine.compactStyle': {
    height: 40,
  },
  'TableViewCellSingleLine.compactTextStyle': {
    fontSize: 13,
  },
  TableViewCellTwoLine: {
    justifyContent: 'center',
    height: 72,
  },
  'TableViewCellTwoLine.compactStyle': {
    height: 60,
  },
  'TableViewCellTwoLine.textStyle': {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
  },
  'TableViewCellTwoLine.secondaryTextStyle': {
    fontSize: 14,
    color: '#aaa',
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
  },
  'TableViewCellTwoLine.compactTextStyle': {
    fontSize: 13,
  },
  'TableViewCellTwoLine.compactSecondaryTextStyle': {
    fontSize: 13,
  },
}

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

const renderTwoLine = (item: any, compact: boolean) => (
  <StyledTableViewCellTwoLine
    compact={compact}
    secondaryText={item.secondaryText}
  >
    {item.title}
  </StyledTableViewCellTwoLine>
)

export default () => {
  render((
      <Document style={styles.document}>
        <Page style={styles.page}>
          <ThemeProvider theme={theme}>
            <Artboard name="TableViewCell Normal" style={styles.artboard}>
              <Sample title="Single Line, Text Only">
                <StyledTableView
                  name="singleLineTextOnly"
                  data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Single Line Text' }))}
                  renderPrimaryAction={renderSingleLine}
                />
              </Sample>
              <Sample title="Single Line, Compact, Text Only">
                <StyledTableView
                  name="singleCompactLineTextOnly"
                  compact
                  data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Single Line Text' }))}
                  renderPrimaryAction={renderSingleLine}
                />
              </Sample>
            </Artboard>
          </ThemeProvider>
          <ThemeProvider theme={theme} fontScale='huge'>
            <Artboard name="TableViewCell Huge" style={styles.artboard}>
              <Sample title="Single Line, Text Only">
                <StyledTableView
                  name="singleLineTextOnly"
                  data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Single Line Text' }))}
                  renderPrimaryAction={renderSingleLine}
                />
              </Sample>
              <Sample title="Single Line, Compact, Text Only">
                <StyledTableView
                  name="singleCompactLineTextOnly"
                  compact
                  data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Single Line Text' }))}
                  renderPrimaryAction={renderSingleLine}
                />
              </Sample>
            </Artboard>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Artboard name="TableViewCell" style={styles.artboard}>
              <Sample title="Two Line, Text Only">
                <StyledTableView
                  name="twoLineTextOnly"
                  data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Two Line Text', secondaryText: 'Secondary Text' }))}
                  renderPrimaryAction={renderTwoLine}
                />
              </Sample>
              <Sample title="Two Line, Compact, Text Only">
                <StyledTableView
                  name="twoLineCompactTextOnly"
                  compact
                  data={Array(8).fill({}).map((item, index) => ({ id: index, title:'Two Line Text', secondaryText: 'Secondary Text' }))}
                  renderPrimaryAction={renderTwoLine}
                />
              </Sample>
            </Artboard>
          </ThemeProvider>
        </Page>
      </Document>
    ))

}
