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

// type Uri = string
//
// type ImageSource = {
//   uri: Uri,
//   height?: number,
//   width?: number,
// }
//
//
// type Props2 = {
//   avatar?: Uri | ImageSource | React.Node,
//   text: string | React.Node,
//   secondaryText?: string | React.Node,
//   disclosureIndicator?: boolean,
//   icon?: Uri | ImageSource | React.Node,
// }
//
//
//
export const TableViewCellAccessoryTypes = {
  none: 'none',
  disclosure: 'disclosure',
  detail: 'detail',
  detailDisclosure: 'detailDisclosure',
  checkmark: 'checkmark',
}

type TableViewCellAccessoryType = $Keys<typeof TableViewCellAccessoryTypes>

type Props = {
  name?: string,
  title: string,
  subTitle?: ?string,
  onPress?: () => void,
  onDisclosurePress?: () => void,
  onDetailPress?: () => void,
  accessoryType?: TableViewCellAccessoryType,
  // accessoryType?: 'none' | 'detail' | 'detailDisclosure' | 'disclosure' | 'checkmark',
  imageUrl?: string,

  style?: StyleSheet.StyleProp,
  primaryActionStyle?: StyleSheet.StyleProp,
  titleViewStyle?: StyleSheet.StyleProp,
  titleStyle?: StyleSheet.StyleProp,
  titleTextStyle?: StyleSheet.StyleProp,
  subTitleStyle?: StyleSheet.StyleProp,
  subTitleTextStyle?: StyleSheet.StyleProp,
  secondaryActionStyle?: StyleSheet.StyleProp,
  disclosureAccessoryTextStyle?: StyleSheet.StyleProp,
  detailAccessoryTextStyle?: StyleSheet.StyleProp,
  imageViewStyle?: StyleSheet.StyleProp,
  imageStyle?: StyleSheet.StyleProp,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class TableViewCell extends React.Component<Props> {

  static defaultProps = {
    accessoryType: TableViewCellAccessoryTypes.none,
    onPress: () => undefined,
    onDisclosurePress: () => undefined,
    onDetailPress: () => undefined,
  }

  renderPrimaryAction = () => (
    <View
      name="primaryAction"
      onPress={this.props.onPress}
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
    if (this.props.accessoryType === TableViewCellAccessoryTypes.none) {
      return
    }

    return (
      <View
        name="secondaryAction"
        style={this.props.secondaryActionStyle}
      >
        {this.renderDetailIndicator()}
        {this.renderDisclosureIndicator()}
      </View>
    )
  }

  renderDisclosureIndicator = () => {
    if (this.props.accessoryType !== TableViewCellAccessoryTypes.disclosure
    && this.props.accessoryType !== TableViewCellAccessoryTypes.detailDisclosure) {
      return
    }

    return (
      <Text
        name="disclosureIndicator"
        style={this.props.disclosureAccessoryTextStyle}
        onPress={this.props.onDisclosurePress}
      >
        &gt;
      </Text>
    )
  }

  renderDetailIndicator = () => {
    if (this.props.accessoryType !== TableViewCellAccessoryTypes.detail
    && this.props.accessoryType !== TableViewCellAccessoryTypes.detailDisclosure) {
      return
    }

    return (
      <Text
        name="detailIndicator"
        style={this.props.detailAccessoryTextStyle}
        onPress={this.props.onDetailPress}
      >
        {'\u24D8'}
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
      style={this.props.style}
    >
      {this.renderPrimaryAction()}
      {this.renderSecondaryAction()}
    </View>
  )
}

export const StyledTableViewCell = themedComponent(TableViewCell)
