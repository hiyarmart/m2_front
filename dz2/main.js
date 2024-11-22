// 1
var array = [10, 20, 30, 50, 235, 3000];

var result = [];

for(var i = 0; i < array.length; i++) {
    var value = String(array[i])[0];
    if(value === '1' || value === '2' || value === '5') {
        result.push(array[i]);
    }
}
console.log(result)

// 2

for (var i = 20 ; i >= 0; i--){
    console.log(i)
}
// 3

var trafficLIght = prompt('Введите цвет цветофора').toLocaleLowerCase().trim();

if (trafficLIght === 'красный') {
    alert('Stop')
}else if (trafficLIght === 'желтый') {
    alert('Стоянка')
}else if (trafficLIght === 'зеленый') {
    alert('Go')
}else {
    alert('Неизвестный цвет')
}