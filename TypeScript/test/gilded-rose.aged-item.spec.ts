import { QualityTestData, testUpdateQuality } from './helper'

describe('Gilded Rose', () => {
  describe('aged item rules', () => {
    const testData: QualityTestData[] = [
      { description: 'should increase quality by 1', sellIn: 20, quality: 5, expectedQuality: 6 },
      {
        description: 'should increase quality by 1 if sellIn is 7',
        sellIn: 7,
        quality: 0,
        expectedQuality: 1,
      },
      {
        description: 'should increase quality by 1 if sellIn is 3',
        sellIn: 3,
        quality: 42,
        expectedQuality: 43,
      },
      {
        description: 'should increase quality by 2 if sellIn is 0',
        sellIn: 0,
        quality: 5,
        expectedQuality: 7,
      },
      {
        description: 'should increase quality by 2 if sellin is negative',
        sellIn: -6,
        quality: 13,
        expectedQuality: 15,
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

    testUpdateQuality('Aged Brie', testData)
  })
})
