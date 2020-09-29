import { Item, GildedRose } from '../app/gilded-rose'

describe('Gilded Rose', () => {
  test('should not have negative sellin', () => {
    const gildedRose = new GildedRose([new Item('foo', -1, 0)])
    expect(() => gildedRose.updateQuality()).toThrow()
  })

  test('should not have negative quality', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, -1)])
    expect(() => gildedRose.updateQuality()).toThrow()
  })

  test('should not have an empty name', () => {
    const gildedRose = new GildedRose([new Item('', 5, 5)])
    expect(() => gildedRose.updateQuality()).toThrow()
  })
})
