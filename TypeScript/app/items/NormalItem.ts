import { Item } from './'

export class NormalItem {
  private item: Item

  constructor(from: Item) {
    this.item = from
  }

  get name(): string {
    return this.item.name
  }
  get sellIn(): number {
    return this.item.sellIn
  }
  set sellIn(value: number) {
    this.item.sellIn = value
  }
  get quality(): number {
    return this.item.quality
  }
  set quality(value: number) {
    this.item.quality = value
  }

  validate(): void {
    this.validateQuality()
    this.validateName()
  }

  protected validateQuality(): void {
    if (this.quality < 0) {
      throw new Error('quality must not be negative')
    }
    if (this.quality > 50) {
      throw new Error('quality for normal items must not be more than 50')
    }
  }

  protected validateName(): void {
    if (this.name === '') {
      throw new Error('must have a name')
    }
  }

  updateQuality(): void {
    const factor = this.quality <= 0 ? 0 : this.sellIn <= 0 ? 2 : 1
    this.quality -= factor
  }

  updateSellIn(): void {
    this.sellIn -= 1
  }
}
