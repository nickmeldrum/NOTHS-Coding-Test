import { Item, GildedRose } from '../app/gilded-rose'

describe('Gilded Rose', () => {
  describe('legendary item rules', () => {
    test('should throw if quality is less than 80', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 45)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    test('should throw if quality is more than 80', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 85)])
      expect(() => gildedRose.updateQuality()).toThrow()
    })

    const testData = [
      {
        description: 'should keep quality at 80 if sellIn is more than 0',
        sellIn: 20,
        quality: 80,
        expected: 80,
      },
      {
        description: 'should keep quality at 80 if sellIn is 0',
        sellIn: 0,
        quality: 80,
        expected: 80,
      },
      {
        description: 'should keep quality at 80 if sellIn is negative',
        sellIn: -10,
        quality: 80,
        expected: 80,
      },
    ]

    testData.forEach(data => {
      test(data.description, () => {
        const gildedRose = new GildedRose([
          new Item('Sulfuras, Hand of Ragnaros', data.sellIn, data.quality),
        ])

        const item = gildedRose.updateQuality()[0]

        expect(item.quality).toEqual(data.expected)
      })
    })
  })
})
