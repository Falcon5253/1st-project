typeof(9);
// Предположение: number
// Фактический: number

typeof(1.2);
// Предположение: number
// Фактический: number

typeof(NaN);
// Предположение: Nan
// Фактический: number

typeof('Hello World');
// Предположение: string
// Фактический: string

typeof(true);
// Предположение: bool
// Фактический: boolean

typeof(2 != 1);
// Предположение: bool
// Фактический: boolean


'сыр' + 'ы';
// Предположение: сыры
// Фактический: сыры

'сыр' - 'ы';
// Предположение: сыр
// Фактический: NaN

'2' + '4';
// Предположение: 24
// Фактический: 24

'2' - '4';
// Предположение: NaN
// Фактический: -2

'Сэм' + 5;
// Предположение: Сэм5
// Фактический: Сэм5

'Сэм' - 5;
// Предположение: NaN
// Фактический: NaN

99 * 'шары';
// Предположение: шарышарышарышарышарышарышарышарышарышарышарышарышарышарышарышарышарышарышарышары...
// Фактический: NaN


//Прямоугольник
first_side = prompt('Введите первую сторону прямоугольника: ', 4);
second_side = prompt('Введите вторую сторону прямоугольника: ', 5);
console.log('Стороны прямоугольника: ' + first_side + ' ' + second_side);
console.log('Периметр: ' + (Number(first_side)+Number(second_side))*2);
console.log('Площадь: ' + first_side*second_side);
console.log('Отношение периметра к площади: ' + (Number(first_side)+Number(second_side))*2/(first_side*second_side));


//Конвертор температуры
celsius = prompt ('Введите температуру в градусах цельсия', 0);
fahrenheit = (celsius*1.8)+32;
alert (celsius + '°C = ' + fahrenheit + '°F');
fahrenheit = prompt ('Введите температуру в градусах фаренгейта: ', 0);
celsius = (fahrenheit-32)/1.8;
alert (`${ fahrenheit } °F = ${celsius} °C`);


//Високосный год
god = prompt('Введите год: ', 0);
let text;
if (god%4==0 && god%100!=0){
    text = 'ВИСОКОСНЫЙ :)';
}
else {
    text = 'не високосный :(';
}
alert('Год ' + text);


//Проверка равны ли числа или их сумма 10
let one = prompt('Введите первое число для проверки', 5);
let two = prompt('Введите второе число для проверки', 5);
if(one == 10 || two == 10 || Number(one)+Number(two)==10){
    alert('Числа прошли проверку успешно (одно из них или их сумма РАВНЫ 10)');
}
else{
    alert('Числа не прошли проверку (ни одно из них, ни их сумма НЕ РАНВЫ 10)');
}


//Считаем овец
let number = prompt('Введите количество овец: ', 5);
text = '';
for (let i = 0; i < number; i++){
    text += (i+1) + ' овечка... ';
}
console.log(text);


//Четное-нечетное
for (let i = 0; i<16; i++){
    if (i % 2 == 0){
        console.log(i + ' четное');
    }
    else{
        console.log(i + ' нечетное');
    }
}


//Елка в новом году
let elka = '';
let size = prompt('Введите размер елки: ', 5);
zvezda = true;
for(let i = 0; i < size; i++){
    if(zvezda){
        zvezda = false;
        for(let l = 0; l < Number(i)+1; l++){
            elka += '*';
        }
        elka += '\n';
    }
    else{
        zvezda = true;
        for(let l = 0; l < Number(i)+1; l++){
            elka += '#';
        }
        elka += '\n';
    }
}
console.log(elka);


//Сортировка 3х чисел
num1 = prompt('Введите первое число для сортировки: ', 1);
num2 = prompt('Введите второе число для сортировки: ', 2);
num3 = prompt('Введите третье число для сортировки: ', 3);
text = '';
if (num1 < num2 && num1 < num3){
    text += num1 + ', ';
    if(num2 < num3){
        text += num2 + ', ' + num3;
    }
    else{
        text += num3 + ', ' + num2;
    }
}
else if (num2 < num1 && num2 < num3){
    text =+ num2 + ', ';
    if(num1 < num3){
        text += num1 + ', ' + num3;
    }
    else{
        text += num3 + ', ' + num1;
    }
}
else{
    text += num3 + ', ';
    if(num1 < num2){
        text += num1 + ', ' + num2;
    }
    else{
        text += num2 + ', ' + num1;
    }
}
console.log('Числа: ' + num1 + ', ' + num2 + ', ' + num3 + '\nПосле сортировки: ' + text);


//Максимальное значение
num1 = prompt('Введите первое число для нахождения максимального значения: ', 1);
num2 = prompt('Введите второе число для нахождения максимального значения: ', 2);
num3 = prompt('Введите третье число для нахождения максимального значения: ', 3);
num4 = prompt('Введите четвертое число для нахождения максимального значения: ', 4);
num5 = prompt('Введите пятое число для нахождения максимального значения: ', 5);
let max = num1;
if(max<num2){
    max = num2;
}
if(max<num3){
    max=num3;
}
if(max<num4){
    max = num4;
}
if(max<num5){
    max = num5;
}
console.log('Числа ' +num1 + ', ' +num2 + ', '+num3 + ', '+num4 + ', '+num5);
console.log('Максимальное из них: ' + max);