# rules:

## base rules: 

 * max quality value = 50 (except sulfuras (legendary) = 80)
min quality value = 0
 * quality decreases at a rate: 1 a day? <- assumption from code not requirements
 * quality decreases at a rate: 2 a day once sellin value = 0 (inferred)
(evaluate quality before sellin)
 * sellin min value = 0
 * sellin decreases at a rate of 1 a day

## custom item rules

 * 'sulfuruas' never decreases quality (also never loses sellin value?)
 * 'Aged Brie' increases by 1 instead of decreasing until it hits 50
 * 'backstage passes' increases by 1 until sellin <= 10, then increases by 2 until sellin <= 5, then increases by 3, until Sellin = 0, quality = 0
 * 'conjured' decrease at 2 a day until sellin = 0, then decrease at 4 a day. - (confirm this as interpretation of "twice as fast as normal items")


## Questions about requirements:

 * how do we know if an item is conjured?
 * confirm interpretation of twice as fast as normal items
 * confirm inferrence from code that by default quality decreases by 1 each day
