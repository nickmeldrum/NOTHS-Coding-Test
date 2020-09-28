steps:

 1. ensure we understand the requirements well enough
 2. ensure we understand the existing code base
 3. get the existing code base a bit more solid:
    1. get some tests around existing implemented rules (all except conjured)
    2. get some code consistency e.g. prettier etc.
 4. refactor to improve quality of existing code - it's too coupled atm
    1. possible different implementations? obvious 1st step is inheritance - different types of Item that implement their own version of updateQuantity. This means we decouple the rules, but inheritance comes with it's own problematic coupling... shoudl be minimal in this case... but consider "prefering composition" or a more functional approach before refactoring...
 5. once refactor implement new conjured rules with appropriate testing
