import { Item, NormalItem } from './'

export class LegendaryItem extends NormalItem {
  constructor(from: Item) {
    super(from)
  }

  validateQuality(): void {
    if (this.quality < 0) {
      throw new Error('quality must not be negative')
    }
    if (this.quality > 80) {
      throw new Error('quality for legendary items must be 80')
    }
    if (this.quality < 80) {
      throw new Error('quality for legendary items must be 80')
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateQuality(): void {}
}
