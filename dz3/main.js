// 1
var getMinNumber = (num1 = Number(prompt('Введите 1 число')), num2 = Number(prompt('Введите 2 число'))) => {
    return Math.min(num1, num2)

}

console.log('Минимальное число ',getMinNumber())

// 2

var stringLenght = (a = prompt('Введите что нибудь')) => {
    return a.length

}
console.log('Длина строки: ', stringLenght());


// 3

var calculator = (number1 = Number(prompt('Введите первое число')),operator = prompt('Выберите оператор + - * /') ,number2 = Number(prompt('Введите второе число')) ) => {

    if (operator === '/' && number2 === 0) {
        return alert('На ноль делить нельзя');
    }else if(operator === '/' && number1 === 0){
        return alert('Результат будет 0, так как первое число равно нулю');
    } else if (operator === '+') {
        return number1 + number2;
    } else if (operator === '-') {
        return number1 - number2;
    } else if (operator === '*') {
        return number1 * number2;
    } else if (operator === '/') {
        return number1 / number2;
    } else {
        return alert('Выберите один из операторов + - * /');
    }


}
console.log('Ответ: ', calculator());