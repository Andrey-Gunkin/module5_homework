let map = new Map();
map.set('1', 'string');
map.set(1, 'number');
map.set(true, 'boolean');

for (let key of map.keys()) {
    console.log('Ключ - ' + key + ', Значение - ' + map.get(key));
}