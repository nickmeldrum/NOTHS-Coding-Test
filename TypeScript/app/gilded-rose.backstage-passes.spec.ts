import { QualityTestData, testUpdateQuality } from './test/helper'

describe('Gilded Rose', () => {
  describe('backstage passes rules', () => {
    const testData: QualityTestData[] = [
      {
        description: 'should increase quality by 1 if sellIn is more than 10',
        sellIn: 20,
        quality: 5,
        expectedQuality: 6,
      },
      {
        description: 'should increase quality by 2 if sellIn is 10',
        sellIn: 10,
        quality: 5,
        expectedQuality: 7,
      },
      {
        description: 'should increase quality by 2 if sellin is 6',
        sellIn: 6,
        quality: 6,
        expectedQuality: 8,
      },
      {
        description: 'should increase quality by 3 if sellIn is 5',
        sellIn: 5,
        quality: 1,
        expectedQuality: 4,
      },
      {
        description: 'should increase quality by 3 if sellIn is 1',
        sellIn: 1,
        quality: 0,
        expectedQuality: 3,
      },
      {
        description: 'should set quality to 0 if sellIn is 0',
        sellIn: 0,
        quality: 23,
        expectedQuality: 0,
      },
      {
        description: 'should set quality to 0 if sellIn is negative',
        sellIn: -5,
        quality: 0,
        expectedQuality: 0,
      },
      {
        description: 'should not set quality to more than 50',
        sellIn: 3,
        quality: 49,
        expectedQuality: 50,
      },
      {
        description: 'should not set quality to more than 50 if at 50',
        sellIn: 8,
        quality: 50,
        expectedQuality: 50,
      },
    ]

    testUpdateQuality('Backstage passes to a TAFKAL80ETC concert', testData)
  })
})
