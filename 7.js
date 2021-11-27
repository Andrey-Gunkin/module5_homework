let arr = [33, null, 0, 43, '', 4];
let even = 0; 
let odd = 0;
let zero = 0;

for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        if (arr[i] == 0) {
            zero++;
        } else if (i % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
}

console.log(even + ' четные');
console.log(odd + ' нечетные');
console.log(zero + ' нулевые');