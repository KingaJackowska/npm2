
exports.secCalc = function(number) {
    if (number <= 60) {
        return number + ' sek.';
    }
    if (number > 60 && number < 3600) {
        return Math.floor(number / 60) + ' min. ' + (number % 60) + ' sek.';
    }
    if (number >= 3600) {
        return Math.floor(number / 3600) + 'godz. ' + Math.floor((number % 3600) / 60) + 'min. ' + Math.floor((number % 3600) % 60) + 'sek.';
    }
    else {
        return 'It is not a number! Please insert number.\n';
    };
    process.stdout.write(' END!');
}
