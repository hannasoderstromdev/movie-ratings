import { isEmptyObject, removeObjectChildProperty } from '../Object'

describe('Utils/Object', () => {
  describe('isEmptyObject', () => {
    it('returns true if Object is empty', () => {
      const myObject = {}

      expect(isEmptyObject(myObject)).toEqual(true)
    })

    it('returns false if Object has props', () => {
      const myObject = {
        myProp: 'value',
      }

      expect(isEmptyObject(myObject)).toEqual(false)
    })
  })

  describe('removeObjectChildProperty', () => {
    it('returns Object without removed propery', () => {
      const object = {
        thing: {},
        another: {},
        third: {
          toBeDeleted: { thing: 'stuff' },
          toRemain: { thing: 'stuff' },
        },
      }
      const expected = {
        another: {},
        thing: {},
        third: { toRemain: { thing: 'stuff' } },
      }
      expect(removeObjectChildProperty(object, 'third', 'toBeDeleted')).toEqual(
        expected,
      )
    })
  })
})
