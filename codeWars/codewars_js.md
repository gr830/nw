# 8

Разве две функции getMax1 и getMax2 не должны быть эквивалентными и возвращать одно и то же значение? Сможете ли вы обнаружить проблему и исправить ее?
```js
var max = {
  name: 'Max Headroom'
};

function getMax1() {
  return max;
}

function getMax2() {
  return max;
}
```

Кажется, ни один из этих кодовых вариантов не помнит своего имени! Не могли бы вы помочь?
```js
function Warrior(n){
  let name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
```

Научите Снупи и Скуби-Ду лаять, используя методы объекта. В настоящее время лаять может только Снупи, а не Скуби-Ду.
```js
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
```

Преобразовать число в символ ascii
```js
var ArrowFunc = function(arr) {
  return arr.map( el => String.fromCharCode(el)).join(''); //Complete this function
}

console.log(ArrowFunc([84,101,115,116])) //Test
```

Завершите объект Person, выполнив функцию FillFriends, чтобы заполнить массив _friends для объекта Person.
```js
var Person = function() {
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(friends) {
      friends.forEach(friend => {
        this._friends.push(friend);
      });
    }
  };
  return person;
};
```

В JavaScript существует особый случай, когда строгое сравнение одной и той же переменной возвращает false! Попробуйте узнать, что нужно сделать, чтобы получить такой результат!
```js
function findStrangeValue() {
  return NaN;
}
```

Вы выполняете вычисление 2 + 2 * 2 + 2 * 2 и ожидаете получить ответ 32, но вместо этого функция продолжает возвращать 10. Исправьте функцию, чтобы она возвращала 32 без изменения числа или операторов.
```js
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}
```

Дорогой Пак, Это первое упражнение. Выясните, что не так, и исправьте код. У вас есть 15 минут, чтобы отправить решение. Удачи.
```js
function yourFutureCareer() {
    let career = Math.random();
    if (career <= 0.32) {
        return 'FrontEnd Developer';
    } else if (career <= 0.65) {
        return 'BackEnd Developer';
    } else {
        return 'Full-Stack Developer';
    }
}
```

Math.roundTo(number, Precision), который округляет заданное число до десятичных знаков.
```js
Math.roundTo = function (number, precision) {
  return Number(number.toFixed(precision));
}
```

Отладка объекта Создавая игру типа зорка, вы создаете объект комнат. К сожалению, игра не работает. Найдите все ошибки в объекте комнат, чтобы ваша игра снова заработала.
```js
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
  }},
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}
```

Мы хотим реализовать функцию Array.prototype.filter(), аналогичную существующей Array.prototype.filter(). Другая похожая функция — _.filter() в underscore.js и lodash.js.
```js
Array.prototype.filter = function(func) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};
```

Number.prototype.times, который принимает функцию f в качестве аргумента и выполняет ее столько раз, сколько раз равно целому числу, для которого она вызвана например, (100).times
```js
Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i);
  }
}
```

Возвращает новый массив, содержащий только квадраты чисел, которые появились во входном массиве.
```js
let squaresOnly = a => a.filter(e => !(e ** 0.5 % 1));
```

Вам дана программа sumSquares, которая принимает массив в качестве входных данных и возвращает сумму квадратов каждого элемента в массиве
```js
const sumSquares = (array) => array.reduce( (acc,el) => {
    return acc += el ** 2
},0)
```

Сократите его так, чтобы он соответствовал строгим требованиям к количеству символов для этого Ката.
```js
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", 'Large', master, true)
  }
}
```

Напишите функцию, которая будет брать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.
```js
function lovefunc(f1, f2){
    const flower1 = f1 % 2 === 0
    const flower2 = f2 % 2 === 0

    return flower1 === true && flower2 === false ||  flower1 === false && flower2 === true ? true : false
}
console.log(lovefunc(2,2))// false
```