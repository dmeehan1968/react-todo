// @flow
import * as React from 'react'
import {
  Image,
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
  disclosureIndicator?: boolean,
  imageUrl?: string,

  style?: StyleSheet.StyleProp,
  primaryActionStyle?: StyleSheet.StyleProp,
  titleViewStyle?: StyleSheet.StyleProp,
  titleStyle?: StyleSheet.StyleProp,
  titleTextStyle?: StyleSheet.StyleProp,
  subTitleStyle?: StyleSheet.StyleProp,
  subTitleTextStyle?: StyleSheet.StyleProp,
  secondaryActionStyle?: StyleSheet.StyleProp,
  disclosureIndicatorTextStyle?: StyleSheet.StyleProp,
  imageViewStyle?: StyleSheet.StyleProp,
  imageStyle?: StyleSheet.StyleProp,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class TableViewCell extends React.Component<Props> {

  renderPrimaryAction = () => (
    <View
      name="primaryAction"
      style={this.props.primaryActionStyle}
    >
      {this.renderImage()}
      <View
        name="titleView"
        style={this.props.titleViewStyle}
      >
        {this.renderTitle()}
        {this.renderSubTitle()}
      </View>
    </View>
  )

  renderTitle = () => (
    <View
      name="title"
      style={this.props.titleStyle}
    >
      <Text
        style={this.props.titleTextStyle}
      >
        {this.props.title}
      </Text>
    </View>
  )

  renderSubTitle = () => {
    if (this.props.subTitle) {
      return (
        <View
          name="subTitle"
          style={this.props.subTitleStyle}
        >
          <Text style={this.props.subTitleTextStyle}>{this.props.subTitle}</Text>
        </View>
      )
    }
    return null
  }

  renderSecondaryAction = () => {
    if (!this.props.disclosureIndicator) {
      return
    }

    return (
      <View
        name="secondaryAction"
        style={this.props.secondaryActionStyle}
      >
        {this.renderDisclosureIndicator()}
      </View>
    )
  }

  renderDisclosureIndicator = () => {
    if (!this.props.disclosureIndicator) {
      return
    }

    return (
      <Text
        style={this.props.disclosureIndicatorTextStyle}
      >
        &gt;
      </Text>
    )
  }

  renderImage = () => {
    if (!this.props.imageUrl) {
      return
    }

    return (
      <View
        name="imageView"
        style={this.props.imageViewStyle}
      >
        <Image source={{uri: this.props.imageUrl}} style={this.props.imageStyle} />
      </View>
    )
  }

  render = () => (
    <View
      name={this.props.name || 'TableViewCell'}
      onPress={this.props.onPress}
      style={this.props.style}
    >
      {this.renderPrimaryAction()}
      {this.renderSecondaryAction()}
    </View>
  )
}

export const StyledTableViewCell = themedComponent(TableViewCell)
