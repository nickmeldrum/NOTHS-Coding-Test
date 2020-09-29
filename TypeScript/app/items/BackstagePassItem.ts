import { Item, NormalItem } from './'

export class BackstagePassItem extends NormalItem {
  constructor(from: Item) {
    super(from)
  }

  updateQuality(): void {
    let factor = 1

    if (this.sellIn > 5 && this.sellIn <= 10) factor = 2
    if (this.sellIn > 0 && this.sellIn <= 5) factor = 3
    if (this.sellIn <= 0) factor = -this.quality

    this.quality += factor

    if (this.quality > 50) this.quality = 50
  }
}
