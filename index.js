/*!
 * range-like-python <https://github.com/jchenjiandongx/range-like-python>
 *
 * Copyright (c) 2018 chenjiandongx
 * Licensed under the MIT license.
 */

module.exports = function*(start, stop, step = 1) {
    let args = [...arguments];

    if (args.length === 0) {
        return
    } else if (args.length === 1) {
        start = 0;
        [stop] = args
    } else if (args.length === 2) {
        [start, stop] = args
    } else if (args.length === 3) {
        [start, stop, step] = args
    }

    function isInteger(...num) {
        for (let n of num) {
            if (!((typeof n === 'number') && (n % 1 === 0))) {
                return false;
            }
        }
        return true;
    }

    if (!(isInteger(start, stop, step))) {
        return;
    }
    if (step < 0 || stop < start) {
        return;
    }
    for (let i = start; i < stop; i += step) {
        yield i;
    }
}