
var grade = prompt('Введите оценку от 1 до 10')



if(grade >= 5 && grade <= 10){
    console.log('Спасибо за высокую оценку!')
}else if(grade < 5){
    console.log('Мы работаем над улучшением сервиса!')
}else{
    console.log('Вы ввели некорректное значение оценки!')
}
console.log(grade)