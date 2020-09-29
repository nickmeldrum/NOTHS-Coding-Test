import {
  QualityTestData,
  SellInTestData,
  testSellInUpdateQuality,
  testUpdateQuality,
} from './helper'

describe('Gilded Rose', () => {
  describe('normal item rules', () => {
    const testData: QualityTestData[] = [
      {
        description: 'should decrease quality by 1 if sellIn is more than 0',
        sellIn: 2,
        quality: 5,
        expectedQuality: 4,
      },
      {
        description: 'should decrease quality by 2 if sellIn is 0',
        sellIn: 0,
        quality: 5,
        expectedQuality: 3,
      },
      {
        description: 'should decrease quality by 2 if sellIn is negative',
        sellIn: -5,
        quality: 43,
        expectedQuality: 41,
      },
    ]

    const sellInTestData: SellInTestData[] = [
      {
        description: 'should decrease sellin by 1 if sellIn is more than 0',
        sellIn: 2,
        quality: 5,
        expectedSellIn: 1,
      },
      {
        description: 'should decrease sellin by 1 if sellIn is 0',
        sellIn: 0,
        quality: 5,
        expectedSellIn: -1,
      },
      {
        description: 'should decrease sellin by 1 if sellIn is negative',
        sellIn: -5,
        quality: 5,
        expectedSellIn: -6,
      },
    ]

    testUpdateQuality('some normal item', testData)
    testSellInUpdateQuality('some normal item', sellInTestData)
  })
})
