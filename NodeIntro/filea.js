/**
 * Created by championswimmer on 09/06/17.
 */
"use strict";

var k = 'string';

console.log(this == module.exports);

module.exports = {
    a: 10,
    fun: function () {
        return k;
    }
};


// Do not insert keys into this
// Not a good practice. But it works
// this.a = 10;
// this.fun = function () {
//     return k;
// };



