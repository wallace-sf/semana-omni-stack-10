module.exports = function (String) {
    return String.split(',').map(subString => subString.trim())
}