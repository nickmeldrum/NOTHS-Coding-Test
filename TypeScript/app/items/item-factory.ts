import { Item, NormalItem, LegendaryItem, AgedItem, BackstagePassItem, ConjuredItem } from './'

export const itemFactory = (from: Item): NormalItem => {
  switch (from.name) {
    case 'Sulfuras, Hand of Ragnaros':
      return new LegendaryItem(from)
    case 'Aged Brie':
      return new AgedItem(from)
    case 'Backstage passes to a TAFKAL80ETC concert':
      return new BackstagePassItem(from)
    case 'Conjured Mana Cake':
      return new ConjuredItem(from)
    default:
      return new NormalItem(from)
  }
}
