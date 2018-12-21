import { isEmptyObject } from '../Object'

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
})
