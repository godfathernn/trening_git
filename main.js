'use strict';

//Интерация по массивам! :
/*
Простой перебор всех эементов
Array.forEach(function(*, number, Array), *);
*/
// forEach - метод простого перебора всех элементов
//массива. Запускает функцию callback для каждого // из элементов. Ничего не возвращает.
var arr = [1, 2, 3, 4, 5];
arr.forEach( function(item, index, array) {
	console.log(item, index, array);
});

//Итераторы! :
	// Простой перебор всех элементов 
//Array.forEach(function(*, number, Array), *);
// Мапирование 
//Array.map(function(*, number, Array):* ВоЗврашает значение, *):Array;


/********* MAP *********/
// map - метод для мапирования. Мапирование - определение // соответствия между двумя наборами данных. Возвращает // новый массив, значения которого берутся из итератора.

// Остаток от деления на два для каждого элемента
// массива arr.
var leftover = arr.map(function(item, i, arr) {
return item % 2;
});

//Результат работы map'a сохраняеться в переменную leftover
console.log(leftover);


/********* Фильтрация *********/
// Фильтрация 
// Array.filter(function(*, number, Array): boolean, *): Array;


/********* Проверка значений  *********/
//Array.some(function(*, number, Array):boolean, *): boolean; 
//Array.every(function(*, number, Array):boolean, *): boolean

// some/every - методы проверки массива. Some проверяет
// соответствует ли хотя бы один элемент массива некоему
// условию. Every аналогичен some, но проверяет все элементы.

// Итератор --some возвращает true или false на каждой итерации. // Как только итератор вернул true, some прекращает работу
// и возвращает true. Если ни на одном из шагов не вернется // true, some возвращает false.
var atleastOneNumberisEven = arr.some(function(item, i, array) {
	console.log(item);
return item % 2 === 0;
});
console.log(atleastOneNumberisEven);

//--ever

// Итератор every работает аналогично some, но его логика // обратна: он работает до тех пор, пока функция возвращает // true.
var allNumbersAreOdd = arr.every(function(item, i, array) {
	return item % 2 !== 0;
	});
console.log(allNumbersAreOdd);


/********* REDUCE *********/
// Свертка массива в одно значение 
//  Array.reduce(function(*, *):*, *, *): *; 
//  Array.reduceRight(function(*, *):*, *, *): *;

var sum = arr.reduce(function(prevValue, item){
	console.log(prevValue, item);
	return prevValue + item;

}, 0);

console.log(sum);

function get() {
  var getVarName = function tmp(){
    var n = /getVarName\(([^)]+?)\)/.exec(tmp.caller !== null ? tmp.caller.toString() : '');

    return n !== null ? n[1] : false;
  }

  let myVarName123456 = 1;
  console.log(getVarName(myVarName123456)); // myVarName123456
}
get();
