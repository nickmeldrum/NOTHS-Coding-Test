import { itemFactory, Item, NormalItem } from './items'

export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality(): Array<Item> {
    for (let i = 0; i < this.items.length; i++) {
      const item: NormalItem = itemFactory(this.items[i])
      item.validate()
      item.updateQuality()
      item.updateSellIn()
    }
    return this.items
  }
}
