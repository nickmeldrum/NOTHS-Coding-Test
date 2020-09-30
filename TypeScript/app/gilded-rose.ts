import { itemFactory, Item } from './items'

export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality(): Array<Item> {
    this.items.forEach(i => itemFactory(i).update())
    return this.items
  }
}
