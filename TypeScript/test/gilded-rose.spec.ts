import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    it('should not have negative sellin', function() {
        const gildedRose = new GildedRose([ new Item('foo', -1, 0) ]);
        expect(() => gildedRose.updateQuality()).to.throw();
    });
});
