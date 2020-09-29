import { Item, GildedRose } from '../app/gilded-rose'

describe('Gilded Rose', () => {
  describe('normal item rules', () => {
    test('should decrease quality by 1 if sellIn is more than 0', () => {
      const gildedRose = new GildedRose([new Item('normal item', 2, 5)])

      const item = gildedRose.updateQuality()[0]

      expect(item.quality).toEqual(4)
    })

    test('should decrease quality by 2 if sellIn is 0', () => {
      const gildedRose = new GildedRose([new Item('normal item', 0, 5)])

      const item = gildedRose.updateQuality()[0]

      expect(item.quality).toEqual(3)
    })

    test('should decrease quality by 2 if sellIn is negative', () => {
      const gildedRose = new GildedRose([new Item('normal item', -5, 43)])

      const item = gildedRose.updateQuality()[0]

      expect(item.quality).toEqual(41)
    })

    test('should decrease sellin by 1 if sellIn is more than 0', () => {
      const gildedRose = new GildedRose([new Item('normal item', 2, 5)])

      const item = gildedRose.updateQuality()[0]

      expect(item.sellIn).toEqual(1)
    })

    test('should decrease sellin by 1 if sellIn is 0', () => {
      const gildedRose = new GildedRose([new Item('normal item', 0, 5)])

      const item = gildedRose.updateQuality()[0]

      expect(item.sellIn).toEqual(-1)
    })
  })
})
