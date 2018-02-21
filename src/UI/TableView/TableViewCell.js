// @flow
import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

import {
  themedComponent,
} from '../../Theme'

type Props = {
  name?: string,
  title: string,
  subTitle?: ?string,
  onPress: () => void,
  style?: StyleSheet.StyleProp,
  primaryActionStyle?: StyleSheet.StyleProp,
  titleStyle?: StyleSheet.StyleProp,
  titleTextStyle?: StyleSheet.StyleProp,
  subTitleStyle?: StyleSheet.StyleProp,
  subTitleTextStyle?: StyleSheet.StyleProp,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class TableViewCell extends React.Component<Props> {

  render = () => (
    <View
      name={this.props.name || 'TableViewCell'}
      onPress={this.props.onPress}
      style={this.props.style}
    >
      <View
        name="primaryAction"
        style={this.props.primaryActionStyle}
      >
        <View
          name="title"
          style={this.props.titleStyle}
        >
          <View style={this.props.titleStyle}>
            <Text
              style={this.props.titleTextStyle}
            >
              {this.props.title}
            </Text>
          </View>

        </View>
        {this.props.subTitle
          ? (
            <View
              name="subTitle"
              style={this.props.subTitleStyle}
            >
              <Text style={this.props.subTitleTextStyle}>{this.props.subTitle}</Text>
            </View>
          )
          : null }
      </View>
    </View>
  )
}

export const StyledTableViewCell = themedComponent(TableViewCell)
