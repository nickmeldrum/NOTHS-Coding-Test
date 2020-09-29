import { Item, NormalItem, LegendaryItem, AgedItem, BackstagePassItem } from './'

export const itemFactory = (from: Item): NormalItem => {
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
