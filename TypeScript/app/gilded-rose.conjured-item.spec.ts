import { QualityTestData, testUpdateQuality } from './test/helper'

describe('Gilded Rose', () => {
  describe('conjured item rules', () => {
    const testData: QualityTestData[] = [
      {
        description: 'should decrease by 2 a day if sellIn is positive',
        sellIn: 20,
        quality: 50,
        expectedQuality: 48,
      },
      {
        description: 'should decrease by 4 a day if sellIn is 0',
        sellIn: 0,
        quality: 13,
        expectedQuality: 9,
      },
      {
        description: 'should decrease by 4 a day if sellIn is negative',
        sellIn: -5,
        quality: 25,
        expectedQuality: 21,
      },
    ]

    testUpdateQuality('Conjured Mana Cake', testData)
  })
})
