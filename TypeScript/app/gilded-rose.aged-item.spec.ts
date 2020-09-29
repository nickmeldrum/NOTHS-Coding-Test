import { Item, GildedRose } from '../app/gilded-rose'

describe('Gilded Rose', () => {
  describe('aged item rules', () => {
    const testData = [
      { description: 'should increase quality by 1', sellIn: 20, quality: 5, expected: 6 },
      {
        description: 'should increase quality by 1 if sellIn is 7',
        sellIn: 7,
        quality: 0,
        expected: 1,
      },
      {
        description: 'should increase quality by 1 if sellIn is 3',
        sellIn: 3,
        quality: 42,
        expected: 43,
      },
      {
        description: 'should increase quality by 2 if sellIn is 0',
        sellIn: 0,
        quality: 5,
        expected: 7,
      },
      {
        description: 'should increase quality by 2 if sellin is negative',
        sellIn: -6,
        quality: 13,
        expected: 15,
      },
      {
        description: 'should not set quality to more than 50',
        sellIn: 3,
        quality: 49,
        expected: 50,
      },
      {
        description: 'should not set quality to more than 50 if at 50',
        sellIn: 8,
        quality: 50,
        expected: 50,
      },
    ]

    testData.forEach(data => {
      test(data.description, () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', data.sellIn, data.quality)])

        const item = gildedRose.updateQuality()[0]

        expect(item.quality).toEqual(data.expected)
      })
    })
  })
})
