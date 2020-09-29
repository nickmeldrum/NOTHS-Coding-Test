import { Item, GildedRose } from './gilded-rose'
import { QualityTestData, testUpdateQuality } from './test/helper'

describe('Gilded Rose', () => {
  describe('legendary item rules', () => {
    test('should not have negative quality', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, -1)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    test('should throw if quality is less than 80', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 45)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    test('should throw if quality is more than 80', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 85)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    const testData: QualityTestData[] = [
      {
        description: 'should keep quality at 80 if sellIn is more than 0',
        sellIn: 20,
        quality: 80,
        expectedQuality: 80,
      },
      {
        description: 'should keep quality at 80 if sellIn is 0',
        sellIn: 0,
        quality: 80,
        expectedQuality: 80,
      },
      {
        description: 'should keep quality at 80 if sellIn is negative',
        sellIn: -10,
        quality: 80,
        expectedQuality: 80,
      },
    ]

    testUpdateQuality('Sulfuras, Hand of Ragnaros', testData)
  })
})
