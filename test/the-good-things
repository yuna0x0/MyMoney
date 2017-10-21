exports.Strawberry = function () {
    this.color = '#ff0000';
};
exports.Strawberry.prototype = {
    isTasty: function () { return true }
};

exports.Banana = function () {
    this.color = '#fff333';
};
exports.Banana.prototype = {
    peel: function (callback) {
        process.nextTick(function () {
            callback(null, new(exports.PeeledBanana));
        });
    },
    peelSync: function () { return new(exports.PeeledBanana) }
};

exports.PeeledBanana = function () {};