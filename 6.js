let arr = [34, '', 44, 55];
let x = true;
for (i = 1; i < arr.length; i++) {
    if (arr[0] != arr[i]) {
        x = false;
        break;
    }
}
console.log(x);