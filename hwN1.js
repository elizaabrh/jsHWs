function isSameOrder() {
    var str1 = "strings";
    var str2 = "sgnirts";

    str1 = [...str1];
    str2 = [...str2];

    str1.sort();
    str2.sort();

    var isEqual = true;

    for (let i = 0; i < str1.length; ++i) {
        if (str1[i] !== str2[i])
            isEqual = false;
    }
    return isEqual;
}

console.log(isSameOrder());

function intersect(...args) {
    var arr = [];
    for (let i = 1; i < args.length; ++i) {
        for (let j = 0; j < args[i - 1].length; ++j) {
            for (let k = j; k < args[i - 1].length; ++k) {
                if (args[i - 1][j] === args[i][k]) {
                    arr.push(args[i][k]);
                }
            }
        }
    }
    return arr;
}

console.log(intersect([1, 2, 3, 9, 5], [2, 5, 7, 9, 15], [8, 9, 15, 5, 10]));
console.log(intersect([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [1, 2, 9, 10, 15]));



