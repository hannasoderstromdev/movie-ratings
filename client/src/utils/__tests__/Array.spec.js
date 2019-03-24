import { insertionSort } from '../Array'

describe('Array', () => {
  describe('insertionSort', () => {
    it('sorts', () => {
      const arrUnsorted = [
        { id: 'id01', name: 'Crime' },
        { id: 'id02', name: 'Drama' },
        { id: 'id03', name: 'Fantasy' },
        { id: 'id04', name: 'Mystery' },
        { id: 'id05', name: 'Action' },
        { id: 'id06', name: 'Adventure' },
        { id: 'id07', name: 'Sci-fi' },
      ]

      const expected = [
        { id: 'id05', name: 'Action' },
        { id: 'id06', name: 'Adventure' },
        { id: 'id01', name: 'Crime' },
        { id: 'id02', name: 'Drama' },
        { id: 'id03', name: 'Fantasy' },
        { id: 'id04', name: 'Mystery' },
        { id: 'id07', name: 'Sci-fi' },
      ]

      expect(insertionSort(arrUnsorted, 'name')).toEqual(expected)
    })
  })
})
