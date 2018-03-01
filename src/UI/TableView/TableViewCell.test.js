// @flow
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { shallow, ShallowWrapper, type EnzymeSelector } from 'enzyme'
import toJson from 'enzyme-to-json'
import checkPropTypes from 'check-prop-types'

import TableViewCell from './TableViewCell'

class SUT {
  wrapper: ShallowWrapper

  constructor(props?: {}) {
    this.wrapper = shallow(<TableViewCell primaryAction={<View />} {...props} />)
  }

  find(selector: EnzymeSelector): ShallowWrapper {
    return this.wrapper.find(selector)
  }

  toJSON(): string {
    return toJson(this.wrapper)
  }
}

describe('TableViewCell', () => {

  describe('properties', () => {

    describe('name', () => {

      it('has a default name', () => {
        const sut = new SUT()
        expect(sut.find(`[name="TableViewCell"]`)).toBeDefined()
      })

      it('can be renamed', () => {
        const name = 'My Name'
        const sut = new SUT({ name })
        expect(sut.find(`[name="${name}"]`)).toBeDefined()
      })
    })

    describe('style', () => {

      it('has no default style', () => {
        const sut = new SUT()
        expect(sut.find('[name="TableViewCell"]').prop('style')).toBeUndefined()
      })

      it('can be styled with object literal', () => {
        const style = { flex: 1 }
        const sut = new SUT({ style })
        expect(sut.find('[name="TableViewCell"]').prop('style')).toEqual(style)
      })

      it('can be styled with stylesheet', () => {
        const style = StyleSheet.create({ flex: 1 })
        const sut = new SUT({ style })
        expect(sut.find('[name="TableViewCell"]').prop('style')).toEqual(style)
      })

      it('can be styled with array', () => {
        const style = [ StyleSheet.create({ flex: 1 }), { flexGrow: 1} ]
        const sut = new SUT({ style })
        expect(sut.find('[name="TableViewCell"]').prop('style')).toEqual(style)
      })
    })

    describe('primaryAction', () => {

      it('is required', () => {
        expect(checkPropTypes(TableViewCell.propTypes, {}, 'props', TableViewCell.name))
          .toContain('The props `primaryAction` is marked as required in `TableViewCell`, but its value is `undefined`')
      })

      it('renders', () => {
        const sut = new SUT({ primaryAction: <Text name="helloWorld">Hello World</Text> })
        expect(sut.find('Text[name="helloWorld"]').children().text()).toEqual('Hello World')
      })
    })
  })
})
