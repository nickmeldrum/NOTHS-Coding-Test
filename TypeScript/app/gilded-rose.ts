export class Item {
  name: string
  sellIn: number
  quality: number

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

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

export class AgedItem extends NormalItem {
  constructor(from: Item) {
    super(from)
  }

  updateQuality(): void {
    const factor = this.quality === 50 ? 0 : this.sellIn <= 0 ? 2 : 1
    this.quality += factor
  }
}

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

const itemFactory = (from: Item): NormalItem => {
  switch (from.name) {
    case 'Sulfuras, Hand of Ragnaros':
      return new LegendaryItem(from)
    case 'Aged Brie':
      return new AgedItem(from)
    case 'Backstage passes to a TAFKAL80ETC concert':
      return new BackstagePassItem(from)
    default:
      return new NormalItem(from)
  }
}

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
