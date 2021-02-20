module.exports = function reverse(number) {
    if (number < 0) {
        return [number * (-1)].toString().split('').reverse().join('');
    } else {
        return number.toString().split('').reverse().join('');
    }
}