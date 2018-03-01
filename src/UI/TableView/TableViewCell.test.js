// @flow
import React from 'react'
import checkPropTypes from 'check-prop-types'
import { shallow, ShallowWrapper, type EnzymeSelector } from 'enzyme'
import toJson from 'enzyme-to-json'

import TableViewCell, { TableViewCellAccessoryTypes } from './TableViewCell'

class SUT {
  wrapper: ShallowWrapper

  constructor(props: {}) {
    this.wrapper = shallow(<TableViewCell title="My Title" {...props} />)
  }

  find(selector: EnzymeSelector): ShallowWrapper {
    return this.wrapper.find(selector)
  }

  toJSON(): string {
    return toJson(this.wrapper)
  }
}

describe('TableViewCell', () => {

  describe('title', () => {

    it('is required', () => {

      const result = checkPropTypes(TableViewCell.propTypes, {}, 'prop', TableViewCell.name)
      expect(result).toContain('The prop `title` is marked as required in `TableViewCell`, but its value is `undefined`')

    })

    it('renders', () => {
      const sut = new SUT({ title: 'My Title' })
      expect(sut.toJSON()).toMatchSnapshot()
    })
  })

  describe('subtitle', () => {
    it('renders', () => {
      const sut = new SUT({ subtitle: 'My Subtitle' })
      expect(sut.toJSON()).toMatchSnapshot()
    })
  })

  describe('primaryAction', () => {
    it('press', () => {
      const onPress = jest.fn()
      const sut = new SUT({ onPress })
      sut.find('[name="primaryAction"]').simulate('press')
      expect(onPress).toHaveBeenCalledTimes(1)
    })
  })

  describe('accessoryType', () => {
    it('supports none', () => {
      const sut = new SUT({ accessoryType: TableViewCellAccessoryTypes.none })
      expect(sut.toJSON()).toMatchSnapshot()
    })

    describe('disclosure', () => {

      it('press', () => {
        const onPress = jest.fn()
        const sut = new SUT({
          accessoryType: TableViewCellAccessoryTypes.disclosure,
          onDisclosurePress: onPress,
        })
        sut.find('[name="disclosureIndicator"]').simulate('press')
        expect(onPress).toHaveBeenCalledTimes(1)
      })

    })

    describe('detail', () => {
      it('press', () => {
        const onPress = jest.fn()
        const sut = new SUT({
          accessoryType: TableViewCellAccessoryTypes.detail,
          onDetailPress: onPress,
        })
        sut.find('[name="detailIndicator"]').simulate('press')
        expect(onPress).toHaveBeenCalledTimes(1)
      })
    })

    describe('disclosureDetail', () => {

      let onDisclosurePress
      let onDetailPress
      let sut

      beforeEach(() => {
        onDisclosurePress = jest.fn()
        onDetailPress = jest.fn()
        sut = new SUT({
          accessoryType: TableViewCellAccessoryTypes.detailDisclosure,
          onDisclosurePress,
          onDetailPress,
        })
      })

      it('disclosure press', () => {
        sut.find('[name="disclosureIndicator"]').simulate('press')
        expect(onDisclosurePress).toHaveBeenCalledTimes(1)
        expect(onDetailPress).toHaveBeenCalledTimes(0)
      })

      it('detail press', () => {
        sut.find('[name="detailIndicator"]').simulate('press')
        expect(onDetailPress).toHaveBeenCalledTimes(1)
        expect(onDisclosurePress).toHaveBeenCalledTimes(0)
      })
    })

  })
})
