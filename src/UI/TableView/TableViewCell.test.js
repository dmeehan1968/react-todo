// @flow
import React from 'react'
import checkPropTypes from 'check-prop-types'
import { shallow, ShallowWrapper } from 'enzyme'
import toJson from 'enzyme-to-json'

import TableViewCell, { TableViewCellAccessoryTypes } from './TableViewCell'

class SUT {
  wrapper: ShallowWrapper

  constructor(props) {
    this.wrapper = shallow(<TableViewCell title="My Title" {...props} />)
  }

  simulate(event: string, ...args) {
    this.wrapper.simulate(event, ...args)
  }

  toJSON() {
    return toJson(this.wrapper)
  }

}

describe('TableViewCell', () => {

  describe('title', () => {

    it('errors on missing title', () => {

      const result = checkPropTypes(TableViewCell.propTypes, {}, 'prop', TableViewCell.name)
      expect(result).toContain('The prop `title` is marked as required in `TableViewCell`, but its value is `undefined`')

    })

    it('renders title', () => {
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

  describe('onPress', () => {
    it('press calls callback', () => {
      const mock = jest.fn()
      const sut = new SUT({ onPress: mock })
      sut.simulate('press')
      expect(mock).toHaveBeenCalledTimes(1)
    })
  })

  describe('accessoryType', () => {
    it('supports none', () => {
      const sut = new SUT({ accessoryType: TableViewCellAccessoryTypes.none })
      expect(sut.toJSON()).toMatchSnapshot()
    })

    it('supports disclosure', () => {
      const sut = new SUT({ accessoryType: TableViewCellAccessoryTypes.disclosure })
      expect(sut.toJSON()).toMatchSnapshot()
    })

    it('supports detail', () => {
      const sut = new SUT({ accessoryType: TableViewCellAccessoryTypes.detail })
      expect(sut.toJSON()).toMatchSnapshot()
    })

    it('supports disclosureDetail', () => {
      const sut = new SUT({ accessoryType: TableViewCellAccessoryTypes.detailDisclosure })
      expect(sut.toJSON()).toMatchSnapshot()
    })

    it('supports checkmark', () => {
      const sut = new SUT({ accessoryType: TableViewCellAccessoryTypes.checkmark })
      expect(sut.toJSON()).toMatchSnapshot()
    })
  })
})
