import { Item, GildedRose } from '../gilded-rose'

interface TestData {
  description: string
  sellIn: number
  quality: number
}

export interface QualityTestData extends TestData {
  expectedQuality: number
}

export interface SellInTestData extends TestData {
  expectedSellIn: number
}

const runTests = testFunc => (name: string, testData: TestData[]) => {
  testData.forEach(data => {
    test(data.description, () => {
      const gildedRose = new GildedRose([new Item(name, data.sellIn, data.quality)])

      const item = gildedRose.updateQuality()[0]

      testFunc(data, item)
    })
  })
}

export const testUpdateQuality = (name: string, testData: QualityTestData[]): void => {
  runTests((data, item) => expect(item.quality).toEqual(data.expectedQuality))(name, testData)
}

export const testSellInUpdateQuality = (name: string, testData: SellInTestData[]): void => {
  runTests((data, item) => expect(item.sellIn).toEqual(data.expectedSellIn))(name, testData)
}
