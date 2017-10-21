var vows = require('vows'),
assert = require('assert');

var theGoodThings = require('./the-good-things');

var Strawberry   = theGoodThings.Strawberry,
Banana       = theGoodThings.Banana,
PeeledBanana = theGoodThings.PeeledBanana;

vows.describe('The Good Things').addBatch({
'A strawberry': {
    topic: new(Strawberry),

    'is red': function (strawberry) {
        assert.equal (strawberry.color, '#ff0000');
    },
    'and tasty': function (strawberry) {
        assert.isTrue (strawberry.isTasty());
    }
},
'A banana': {
    topic: new(Banana),

    'when peeled *synchronously*': {
        topic: function (banana) {
            return banana.peelSync();
        },
        'returns a `PeeledBanana`': function (result) {
            assert.instanceOf (result, PeeledBanana);
        }
    },
    'when peeled *asynchronously*': {
        topic: function (banana) {
            banana.peel(this.callback);
        },
        'results in a `PeeledBanana`': function (err, result) {
            assert.instanceOf (result, PeeledBanana);
        }
    }
}
}).export(module);