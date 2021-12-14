
module.exports.hello = (txt) => {
    console.log(`Hello ${txt}`);
};

module.exports.square_root = function square_root(n) {
    let _n;
    if (Number.isInteger(n)) {
        _n = Number.parseInt(n);
        if (Number.isNaN(_n)) {
            throw new Error(`${n} is an Integer that did not parse`);
        }
    } else if (Number.isNaN(Number.parseFloat(n))) {
        throw new Error(`${n} did not parseFloat`);
    } else {
        _n = Number.parseFloat(n);
    }
    return Math.sqrt(_n);
};
