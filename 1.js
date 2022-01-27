let a = +prompt('inter value');

if (typeof a === 'number' && !isNaN(a)) {
    if (a % 2 === 0) {
        console.log('value is even');
    } else {
        console.log('value is odd');
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}
