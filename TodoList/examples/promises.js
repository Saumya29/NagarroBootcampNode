/**
 * Created by championswimmer on 13/06/17.
 */


function asyncFun1(data1, data2, callback) {
    //do something with data1 and data2
    callback(data1 + data2);
}
function asyncFun2(data1, data2, callback) {
    //do something with data1 and data2
    callback(data1 - data2);
}
function asyncFun3(data1, data2, callback) {
    //do something with data1 and data2
    callback();
}

// asyncFun1(1,2, function (r1, cb) {
//     asyncFun2(r1,4, function (r2) {
//         asyncFun3(5,6, function () {
//             r1
//             cb()
//         })
//     })
// });


var f = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve();
    }, 5000)

});

f.then(function () {
   console.log('runs after 5 sec')
});



