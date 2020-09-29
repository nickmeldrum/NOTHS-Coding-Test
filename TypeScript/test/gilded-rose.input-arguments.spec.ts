import { GildedRose } from '../app/gilded-rose'
import { Item } from '../app/items'

describe('Gilded Rose', () => {
  describe('input arguments', () => {
    test('should not throw when no items passed in', () => {
      const gildedRose = new GildedRose()
      expect(() => gildedRose.updateQuality()).not.toThrow()
    })

    test('should allow negative sellin', () => {
      const gildedRose = new GildedRose([new Item('foo', -5, 0)])
      expect(() => gildedRose.updateQuality()).not.toThrow()
    })

    test('should not have negative quality', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, -1)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    test('should not have quality above 50 (unless legendary)', () => {
      const gildedRose = new GildedRose([new Item('foo', 5, 51)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    test('should not have quality above 80 (if legendary)', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 81)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    test('should not have an empty name', () => {
      const gildedRose = new GildedRose([new Item('', 5, 5)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })
  })
})
