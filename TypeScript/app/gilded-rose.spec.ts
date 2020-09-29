import { Item, GildedRose } from '../app/gilded-rose'

describe('Gilded Rose', () => {
  test('should not have negative sellin', () => {
    const gildedRose = new GildedRose([new Item('foo', -1, 0)])
    expect(() => gildedRose.updateQuality()).toThrow()
  })
})
