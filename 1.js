let a = prompt('inter value');
let b = +a;

if (typeof b === 'number' && !isNaN(b)) {
    if (b % 2 === 0) {
        console.log('value is even');
    } else {
        console.log('value is odd');
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}