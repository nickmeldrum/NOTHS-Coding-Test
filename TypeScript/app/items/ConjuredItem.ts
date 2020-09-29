import { Item, NormalItem } from './'

export class ConjuredItem extends NormalItem {
  constructor(from: Item) {
    super(from)
  }

  updateQuality(): void {
    const factor = this.quality <= 0 ? 0 : this.sellIn <= 0 ? 4 : 2
    this.quality -= factor
  }
}
