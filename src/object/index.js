/**
  Создать и вернуть пустой объект
 */
function createObject() {
let ax = {};
return ax; 
} 

/**
 * Вернуть кол-во свойств объекта
 *
 * Пример
 * const obj = {
 *   name: 'Name',
 *   age: 11,
 * }
 *
 * getCountOfProp(a) = 2
 *
 * @param object
 */
function getCountOfProp(object) {
  let a = 0;
  for (let key in object)
  {
    a++
  }
  return a;
}

/**
 * Вернуть копию объекта
 * @param obj
 */
function copyObject(obj) {
  for (let key in copyObject) {
    
  }
   
}

/**
 * Вернуть новый объект, включающий значения обоих
 * const a = { name: 'Max', };
 * const b = { age: 18, };
 * Пример
 * mergeObject(a, b) = { name: 'Max', age: 18, }
 */
function mergeObject(objectA, objectB) {
  let obj = Object.assign({}, objectA, objectB);

  return obj;
}

/**
 * Проверить наличие ключа
 * const a = { name: '1' }
 * hasKey(a, 'name') = true
 */
function hasKey(object, key) {
  return (key in object)
}

/**
 * Добавить значение в объект
 * вернуть то же объект
 * Примет
 * const a = { name: '1' };
 * const key = 'age';
 * const value = '18';
 * addToObject(a, key, value) = { name: '1', age: 18 }
 */
function addToObject(object, key, value) {
object[key]=value;
return object;
}

module.exports = {
  createObject,
  getCountOfProp,
  copyObject,
  mergeObject,
  hasKey,
  addToObject,
};
