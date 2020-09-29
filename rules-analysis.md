# rules:

## base rules: 

 * max quality value = 50 (except sulfuras (legendary) = 80)
 * min quality value = 0
 * quality decreases at a rate: 1 a day? <- assumption from code not requirements
 * quality decreases at a rate: 2 a day once sellin value = 0 (inferred) (evaluate quality before sellin)
 * sellin can go negative (assumed)
 * sellin decreases at a rate of 1 a day

## custom item rules

 item categories:

  * normal
  * aged
  * legendary
  * backstage passes
  * conjured

 * 'sulfuruas' never decreases quality (also never loses sellin value? - according to code sellin does still increase?)
 * 'backstage passes' increases by 1 until sellin <= 10, then increases by 2 until sellin <= 5, then increases by 3, until Sellin = 0, quality = 0
 * 'conjured' decrease at 2 a day until sellin = 0, then decrease at 4 a day. - (confirm this as interpretation of "twice as fast as normal items")


## Questions about requirements:

 * how do we know if an item is conjured?
 * confirm interpretation of twice as fast as normal items
 * confirm inferrence from code that by default quality decreases by 1 each day
 * how we know if item is legendary? just Sulfuras?
 * does "never have to be sold" for sulfuras mean that sellin doesn't decrease?
 * analysis is non specific about whether aged brie changes quality in the same way as tickets - making the assumption (based on existing code analysis) that aged brie quality just increases in 1 a day until it hits 50 (but implementation actually increases it by 2 if sellIn is 0 or below - which is very strange IRL - keep to existing implementation but query this!)
