import { isEmptyObject } from '../Object'

describe('Utils/Object', () => {
  describe('isEmptyObject', () => {
    it('returns true if Object has no keys', () => {
      const myObject = {}

      expect(isEmptyObject(myObject)).toEqual(true)
    })

    it('returns false if Object has keys', () => {
      const myObject = {
        myProp: 'value',
      }

      expect(isEmptyObject(myObject)).toEqual(false)
    })
  })
})
