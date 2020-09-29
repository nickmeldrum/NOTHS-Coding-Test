import { Item, GildedRose } from '../app/gilded-rose'

describe('Gilded Rose', () => {
  describe('backstage passes rules', () => {
    const testData = [
      {
        description: 'should increase quality by 1 if sellIn is more than 10',
        sellIn: 20,
        quality: 5,
        expected: 6,
      },
      {
        description: 'should increase quality by 2 if sellIn is 10',
        sellIn: 10,
        quality: 5,
        expected: 7,
      },
      {
        description: 'should increase quality by 2 if sellin is 6',
        sellIn: 6,
        quality: 6,
        expected: 8,
      },
      {
        description: 'should increase quality by 3 if sellIn is 5',
        sellIn: 5,
        quality: 1,
        expected: 4,
      },
      {
        description: 'should increase quality by 3 if sellIn is 1',
        sellIn: 1,
        quality: 0,
        expected: 3,
      },
      {
        description: 'should set quality to 0 if sellIn is 0',
        sellIn: 0,
        quality: 23,
        expected: 0,
      },
      {
        description: 'should set quality to 0 if sellIn is negative',
        sellIn: -5,
        quality: 0,
        expected: 0,
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
        const gildedRose = new GildedRose([
          new Item('Backstage passes to a TAFKAL80ETC concert', data.sellIn, data.quality),
        ])

        const item = gildedRose.updateQuality()[0]

        expect(item.quality).toEqual(data.expected)
      })
    })
  })
})
