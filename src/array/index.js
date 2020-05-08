/*
Все задачи по темам
https://learn.javascript.ru/array
https://learn.javascript.ru/array-methods
 */

/**
 *  Создать и вернуть новый пустой массив массив
 */
function createArray() {
  let arr = [];
  return arr;
}

/**
 * Создать и вернуть массив указанной длинны
 */
function createEmptyArrayWithLength(len) {
  let arr = [];
  arr.length = len;
  return arr;
}

/**
 * Добавить новое значение в конец существующего массива
 * Вернуть измененный массив
 */
function addToArray(arr, newValue) {
  arr.push(newValue);
  return arr;
}

/**
 * Добавить новое значение в начало существующего массива
 * Вернуть измененный массив
 */
function addToStartArray(arr, newValue) {
  let newArr = arr.slice();
  let a = arr.length;
  let b = a + 1;
    arr.length = b;
      for (let i = 0; i < a; i++)
        {
          arr[i+1] = newArr[i];
          console.log(arr, newArr)
        }
        arr[0]=newValue;
  return arr;
}

/**
 *  Удалить из массива первый элемент
 *  Венруть массив, где первый элемент это измененный массив,
 *  второй - удаленный элемент массива
 */
function removeFromArrayFirst(arr) {
  let a = arr.length;
  let first = arr[0]
  for (let i = 1; i < a; i++)
    {
      arr[i-1] = arr[i];
    }
   b = a - 1;
   arr.length = b;
  let arr1 = [arr, first]
  return arr1;
}

/**
 * Соеденить элементы массива в строку
 *  в качестве соединителя использовать параметр sep
 *  венуть строку. Обход массива делать с помощью цикла for (let i=0; i<arr.length; i++)
 *  пример joinArray(['name', 'age'], "+") => 'name+age'
 */
function joinArray(array, sep) {
  let str = ''
  for (let i = 0; i < array.length; i++)
  {
   if(i == array.length - 1) {
     str = str + array[i];
   }
   else {
     str = str + (array[i] + sep);
 }
  }
return str;
}

/**
 * Создать и вернуть копию массива
 * @param arr
 * @returns {*[]}
 */
function copyArray(arr) {
  let arrCopy = [];
  let a = arr.length;
    for (let i = 0; i < a; i++)
    arrCopy[i] = arr[i];
  return arrCopy;
}

/**
 * Объеденеить 2 массива в 1 новый и вернуть его
 * @param arr
 * @param arr2
 * @returns {any[] | string}
 */
function mergeArray(arr, arr2) {
  let arr3 = [];
  arr3 = arr.concat(arr2);

  return arr3;
}

/**
 * Отфильтровать массив, вернув новый массив, где все элементы больше 2
 *  использовать функцию filter https://learn.javascript.ru/array-methods#filter
 * filterArray([1,3, 5, 2]) => [3,5]
 */
function filterArray(arr) {
  let pos = arr.filter(function(number) {return number > 2}
  );
  return pos;
}

/**
 * Посмотреть как работает функция  filter https://learn.javascript.ru/array-methods#filter
 * Отфильтровать массив не использую функцию filter
 * Вернуть новый массив, к котором для всех элементов функция fn возвращает true
 * Шаги
 *  1. пройти в цикле по всем элементам массива
 *  2. Для каждого элемента вызвать функцию fn
 *  3. Если функция вернула true - включить текущий элемент в результат
 * @param arr
 * @param fn
 */
function filterArrayCustom(arr, fn) {
  let newArr = [];
  let i=0;
  for(let item of arr) {
    if (fn(item)) {
      newArr[i++] = item;
    }
  }
  return newArr;
}

/**
 * Развернуть массив.
 * Вернуть новый массив.
 */
function reverseArray(arr) {
  let newArr=[];
  newArr = arr.concat();
  newArr.reverse();
  return newArr;
}

/**
 * Отсортировать массив по убыванию свойства age
 * вернуть новый массив
 * массив элементов [ { name: 'Max', age: 1 }, { name: 'Max', age: 2 } ]
 * @param arr
 */
function sortArray(arr) {
  let newArr=[];
  newArr = arr.concat();
  newArr.sort((person1, person2) => person2.age - person1.age);
  return newArr;
}

/**
 * Параметр arr - массив из 9ти элементов
 * Создать и вернуть новый массив длинной 3.
 * Первый элемент нового массима - массив из последних 3ех элементов массива arr
 * Второй элемент массива - массив из элементов с 4ого по 6ой массива arr
 * Третий элемент - массив из первый 3эъ элементов массива arr
 *
 * Использовать функцию slice
 *
 * Пример
 *  spliceArray([1,2,3,4,5,6,7,8,9]) -> [ [7, 8, 9], [4, 5, 6], [1, 2, 3] ]
 */
function spliceArray(arr) {
  let nArr=[];
  let i = arr.length - 3,
      u = arr.length;
      for (let a=0; a < 3; a++) 
      {
        nArr[a] = arr.slice(i,u);
        i-=3;
        u-=3;
      }
  return nArr;
}

/**
 * Перевести объект в массив
 * Создать и вернуть массив массивов.
 * Каждый новый массив состоит их двух элементов. 1ый - ключ объекта, 2 - значние ключа объекта
 *
 * Пример
 * objectToArray({ name: 'Max',  age: 22, city: 'FR' })
 *  => [ [ 'name', 'Max' ], ['age' , '22'], [ 'city', 'Fr' ] ]
 * @param obj
 */
function objectToArray(obj) {
  let newArr    = [];
  let keys    = [];
  let values  = [];
  keys   = Object.keys(obj);
  values = Object.values(obj);
  for (let i=0; i< keys.length; i++)
  {
    newArr[i] = new Array( String(keys[i]), String(values[i]) );
  }
  return nArr;
}

/**
 * Перевести массив в объект
 * обратно функции objectToArray
 * @param arr
 */
function arrayToObject(arr) {
  let newObj = {};
  let value;
  for (let i=0; i < arr.length; i++){
    if (isNaN(+arr[i][1])) 
    {value = arr[i][1]} else {value = +arr[i][1]}
    newObj[arr[i][0]] = value;
  }
  return newObj;
}

module.exports = {
  createArray,
  createEmptyArrayWithLength,
  addToArray,
  addToStartArray,
  removeFromArrayFirst,
  joinArray,
  copyArray,
  mergeArray,
  filterArray,
  filterArrayCustom,
  reverseArray,
  sortArray,
  spliceArray,
  objectToArray,
  arrayToObject,
};
