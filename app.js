function hasOddNumber(arr) {
    return arr.some(function (v) {
        return v % 2 !== 0
    })
}

function hasAZero(num) {
    const newArr = String(num).split('').map(function (n) {
        return Number(n)
    })
    return newArr.some(function (n) {
        return n === 0
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function (n) {
        return n % 2 !== 0;
    })
}

function hasNoDuplicates(arr) {
    return arr.every(function (n) {
        return arr.indexOf(n) === arr.lastIndexOf(n)
    })
}

function hasCertainKey(arr, key) {
    return arr.every(function (k) {
        return k[key]
    })
}

function hasCertainValue(arr, key, value) {
    return arr.every(function (k) {
        return k[key] === value;
    })
}