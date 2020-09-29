import { Item, NormalItem } from './'

export class AgedItem extends NormalItem {
  constructor(from: Item) {
    super(from)
  }

  updateQuality(): void {
    const factor = this.quality === 50 ? 0 : this.sellIn <= 0 ? 2 : 1
    this.quality += factor
  }
}
