# JS краткий курс

## ВВодное

Хороший разработчик использует инструмент, а не подчиняется ему. Вы разрабатываете на JavaScript, а не на React, Vue или Angular.

## Переменные


```jsx
//Область видимости таких переменных ограничивается функцией или скриптом (если переменная глобальная)
var a = 2;

{
  var a = 3;
  console.log(a); // 3
}

console.log(a) // 3
```

ECMAScript 6 дал разработчикам инструменты для управления областью видимости на уровне блоков, то есть ключевые слова const и let
```jsx
let a = 2;

{
  let a = 3;
  console.log(a); // 3
}

console.log(a) // 2
```

Const. Когда переменная объявлена через это ключевое слово, изменить её значение уже не удастся:
```jsx
const a = 2;

a = 3 // TypeError

console.log(a) 
```

Примитивные типы данных передаются по значению, а объекты — по ссылкам. 
```jsx
{
  const ARR = [5, 6, 7];

  console.log(ARR); // [5,6,7]
  ARR = 10; // TypeError — мы не можем изменить ссылку на массив...
  ARR[0] = 3; // ...но свободно меняем элементы массива
  console.log(ARR); // [3,6,7]
}
```

Основные особенности let и const:
- let и const не существуют до своего объявления;
- область видимости let и const совпадает с блоком объявления переменной;
- нельзя объявить переменную через const и не присвоить ей значение.
- советуем отказаться от var

## Типы данных

Примитивные типы данных:
- логический (Boolean),
- числа (Number),
- большие числа (BigInt),
- строки (String),
- символы (Symbol),
- undefined,
- null.

Не примитивный тип:
- объект (Object).

Получить тип аргумента можно с помощью оператора typeof

```jsx
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object" 
typeof null // "object" - результат данной операции является официально признанной ошибкой языка
typeof alert // "function"
typeof NaN; // "number"
```

Явное и неявное преобразование в JavaScript. Для приведения любого типа данных к Boolean, необязательно делать именно Boolean(someVar), достаточно !!someVar

**Числа**

Необычные примеры сравнений и вычислений
```jsx
Math.sqrt(-1);         // NaN
"не число" / 2;        // NaN
0 / 0;                 // NaN
NaN === NaN;           // false
isNaN(Math.sqrt(-1));  // true
Number.isNaN(Math.sqrt(-1)); // true
```

В JavaScript вы можете получить максимальный и минимальный 64-битный Number
```jsx
Number.MAX_VALUE; // 1.79e+308
Number.MIN_VALUE; // 5e-324, самое близкое к нулю

Number.MAX_SAFE_INTEGER;  // 2^53 - 1 или 9007199254740991
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true

Number.MIN_SAFE_INTEGER;  // -(2^53 - 1) или -9007199254740991
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true
        
Number.isSafeInteger(Math.pow(2, 54)); // false
Number.isSafeInteger(-Math.pow(2, 54)); // false
// всё это не поддерживается в IE
```

Особенности при вычислении чисел
```jsx
0.1 + 0.2 = 0.30000000000000004;
0.1 + 0.2 === 0.3; // false
```

BigInt — это встроенный объект, предоставляющий способ представлять целые числа больше  наибольшего числа, которое JavaScript может надёжно представить.
```jsx
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n
```

**Строки**
Строки можно писать как в одинарных, так и в двойных кавычках

```jsx
const escapeCodesString = 'a\'b'; // a'b
escapeCodesString.length; // 3
        
const escapeCodesString = "a\"b"; // a"b
escapeCodesString.length; // 3

const escapeCodesString = 'a\\b'; // a\b
escapeCodesString.length; // 3

const escapeCodesString = 'a\n\tb'; // a
                                    //     b
escapeCodesString.length; // 4

// Поддерживаются все символы из Unicode
const utf8String = '中文 español English বাংলা 日本語 ਪੰਜਾਬੀ';
utf8String.length; // 35
```

Как соединить строки? Существует классический оператор +
```jsx
const concatStr = 'hello' + ' world'; // hello world

const name = 'Vasya';
const helloVasya = 'Hello, ' + name + '!'; // Hello, Vasya!
```

В ES6 появился механизм «шаблонных строк», работают быстрее, чем классическое сложение
```jsx
const name = 'Vasya';
const concatStr = `Hello, ${name}!`; // Hello, Vasya!
```

Строки — иммутабельный тип данных, то есть они неизменяемы
```jsx
const someStr = 'собака';

// Возможно обращение к символу по индексу
someStr[1]; // 'о'

// Редактирование невозможно
someStr[1] = 'и';
someStr; // 'собака'
```

При работе со строками могут помочь различные методы, которые уже существуют в строке. Но почему строка имеет методы и свойства, если строка — это не тип данных Object?

Всё просто. Разработчики языка добавили такую возможность в этот тип данных, чтобы работа со строками была в удовольствие.
```jsx
// Обрезаем строку в 135 символов до 30 символов
const longString = 'Мы с бэкенда получили очень длинный текст, 
который неудобно вставлять в интерфейс, 
и хотим обрезать часть строки, заменив конец на "..."'

let shortString = longString;

if (longString.length > 30) {
  shortString = longString.slice(0, 29) + '…';
}

shortString; // 'Мы с бэкенда получили очень д…'

const tweet = 'Мой твит #hash';

// Находим индекс первого вхождения подстроки в строке
tweet.indexOf('#hash'); // 9
// Искомая подстрока отсутствует
tweet.indexOf('#hack'); // -1
```

На строках определены также операции сравнения
```jsx
'a' === 'a'; // true

'a' < 'b';     // true
'a' < 'ab';    // true
'bar' < 'foo'; // true

'1' > '12';    // false
'2' > '12';    // true
'12' < '5';    // true
```

Примеры преобразований строки в число:
```jsx
Number('123');     // 123
Number('12.8');    // 12.8
Number('12.8  ');  // 12.8
Number('  12.8');  // 12.8
Number('   ');     // 0
Number('');        // 0
Number('12.8s')    // NaN
Number('s12.8')    // NaN

parseFloat('123');     // 123
parseFloat('12.8');    // 12.8
parseFloat('12.8  ');  // 12.8
parseFloat('  12.8');  // 12.8
parseFloat('   ');     // NaN
parseFloat('');        // NaN
parseFloat('12.8s');   // 12.8
parseFloat('s12.8');   // NaN
```

Есть ещё много полезных методов

**Операторы сравнения**

несколько операторов сравнения: == и ===
```jsx
// == – обычное сравнение
'01' == 1; // true
null == undefined; // true

// === – строгое сравнение
'1' === 1; // false
null === undefined; // false
```

## Функции

Функция — блок кода, который позволяет переиспользовать существующий код.Также это «вызываемый» объект

**Объявление функций (Function Declaration)**

Обычное объявление. Такую функцию можно вызвать до объявления — благодаря эффекту всплытия (Hoisting).
```jsx
function greet(name) {
  return `Hello ${name}`;
}

greet('Sergey'); // Hello Sergey

//////////////

greet('Sergey'); // Hello Sergey

function greet(name) {
  return `Hello ${name}`;
}
```

**Функциональные выражения (Function Expression)**

Функция будет присвоена переменной и описана без имени. Такую функцию нельзя вызвать до объявления

```jsx
const greet = function (name) {
  return `Hello ${name}`;
};

greet('Sergey'); // Hello Sergey
```

**Стрелочные функции (Arrow function)**

Существенное отличие — это контекст. У стрелочных функций нет своего this. Он берётся из верхнего окружения.

```jsx
const greet = (name) => {
  return `Hello ${name}`;
};

const greet = (name) => `Hello ${name}`;    

const greet = name => `Hello ${name}`;

//----
const test = {
	name: 'we want it',
	makeAnonFunction: function() {
	  return function() {
	    console.log(this.name);
	  };
	},
	
	makeArrowFunction: function() {
	  return () => {
	    console.log(this.name);
	  };
	}//undefined
};
```

**Аргументы функций**

В функции аргументы можно передать по ссылке и по значению.

```jsx
const message = {
  user: {
    messages: 4210
  }
};
        
function incrementCount(count) {
  count++;
}
        
incrementCount(message.user.messages);
message.user.messages; // 4210

//////////////////

//Но если передать всю ссылку на объект, как во втором случае, то после выполнения incrementCount2 можно увидеть ожидаемое увеличенное значение.
function incrementCount2(user) {
  user.messages++;
}
        
incrementCount2(message.user);
message.user.messages; // 4211


//Функции умеют принимать как заданное число аргументов, так и неопределённое.
function sumNumbers() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

sumNumbers(1, 2, 3); // 6

//////////////////////////////////

function sumNumbers() {
  const args = Array.from(arguments); // Это старый способ получения аргументов

  let sum = 0;

  args.forEach(function (num) {
    sum += num;
  });

  return sum;
}

sumNumbers(1, 2, 3); // 6

//////////////////////////////////

function sumNumbers(...args) { // Это способ из ES6+
  return args.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

sumNumbers(1, 2, 3); // 6
```

В функциях можно описывать значения по умолчанию
```jsx
function some(a, b) {
	a = a || 0;
	b = b || function() {};
}

function some(a = function() {}) {
	console.log(a);
}
some(''); // Теперь мы получим пустую строку в консоли
```

Сами функции можно передать в качестве аргументов. Именно это свойство делает их объектами высшего порядка. 
```jsx
// Выбираем только пользователей с тегами "javascript"
function filterMessagesByTag(message) {
	const {tags} = message;

  if (Array.isArray(tags) && tags.includes('javascript')) {
      result.push(message);
  }
}

// Теперь в result лежат отфильтрованные твиты
messages.forEach(filterMessagesByTag);
```

Преобразования можно выделять в целые цепочки вызовов
```jsx
let result = messages
  .filter(filterMessagesByTag)
  .map(getHTML)
  .join('\n');
```

**Особенности функций**

Может возвращать или не возвращать значение (будет неявно возвращать undefined
```jsx
function noop() {
}


function noop() {
	return undefined;
}


function noop() {
	return;
}


console.log(noop()); // undefined
```

Может быть переданы в другие функции в качестве аргумента
```jsx
// Принимаем функцию в функции как аргумент
function modifyItems(items, modify) {
	return items.map(modify); // то же самое можно записать иначе: .map(item => modify(item))
}
const numbers = [1, 2, 3, 4];


// Пример с использованием стрелочной функции
const multiplyBy2 = item => item * 2;
const doubleValues = modifyItems(numbers, multiplyBy2);
// [2, 4, 6, 8]
```

**Каррирование**

По сути это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а f(a)(b)(c)

```jsx
function getRaiser(pow) {
  return function (num) {
    return num ** pow;
  }
}

const squared = getRaiser(2);
squared(2); // 4
squared(3); // 9

const cube = getRaiser(3);
cube(2); // 8
cube(3); // 27

// Или вот так

getRaiser(2)(3); // 9
getRaiser(3)(2); // 8
```

## Массивы

В JavaScript можно объявить массив несколькими способами
```jsx
const arr = new Array();
const arr = []; // чаще всего используется такой вариант — он проще и красивее.
```

Массивы — упорядоченный набор элементов. Каждый его элемент получает номер — индекс элемента. Нумерация начинается с 0:
```jsx
let users = ['Vasya', 'Petya', 'Ivan'];
console.log(users); // ['Vasya', 'Petya', 'Ivan']
console.log(users[0]); // 'Vasya'
console.log(users[2]); // 'Ivan'’

users[1] = 'Николай';
console.log(users[1]) // 'Николай'
```

Элементы массива могут принадлежать к разным типам данных
```jsx
const someArray = ['string', 2, {c: 3}, [4, 5, 6], true, () => null];
```

**Изменение массивов**

В JS есть специальные методы, которые изменяют массив:
- push — добавляет элемент в конец массива и возвращает новую длину массива,
- pop — удаляет последний элемент массива и возвращает его значение,
- shift — удаляет элемент из начала и сдвигает в начало остальную часть массива (второй элемент станет первым, третий — вторым и так далее),
- unshift — добавляет элемент в начало массива и возвращает новую длину массива.
```jsx
const users = ['Vasya', 'Petya', 'Ivan'];

console.log(users.push('Kolya')); // 4
console.log(users); // ['Vasya', 'Petya', 'Ivan', 'Kolya']

console.log(users.pop()); // 'Kolya'
console.log(users); // ['Vasya', 'Petya', 'Ivan']

console.log(users.shift()); // 'Vasya'
console.log(users); // ['Petya', 'Ivan']

console.log(users.unshift('Vasya')); // 3
console.log(users); // ['Vasya', 'Petya', 'Ivan']
```

**Массивы как объекты**

Массив в JS — объект. К нему применимо всё, что применимо к объектам, поэтому ему можно добавить свойство.

Массивы копируются по ссылке, а не по значению. Присвоив массив другой переменной, мы получим две ссылки на одну и ту же область памяти.

**Перебор элементов**

- Цикл for..in выполняет перебор всех свойств объекта
- Цикл for..in оптимизирован под произвольные объекты

**Метод forEach**

не возвращает результат
```jsx
const arr = [1, 2, 3];

arr.forEach((item, i, arr) => {
  console.log(i, item, arr);
});
```

**Метод filter**

Возвращает новый массив
```jsx
const arr = [1, 2, 3];

const comparator = number => number < 2;

const result = arr.filter(comparator); // [1]
```

**Методы every и some**

- метод every вернёт true, если вызов колбека вернёт true для каждого элемента массива;
- метод some вернёт true, если вызов колбека вернёт true хотя бы для одного элемента массива.
```jsx
const arr = [1, 2, 3];

const checker = number => number < 2;

arr.some(checker); // true
```

**Метод map**

Метод для преобразования элементов массива. Создаёт новый массив на основе существующего.Она возвращает значение, которое станет элементом нового массива.
```jsx
const statuses = ['approved', 'rejected', 'waiting'];

statuses.map((status, index) => ({value: index, title: status})); // [{value: 0, title: 'approved'}, ...]
```

**Методы reduce и reduceRight**

Они сводят массив к какому-то одному значению: числу, массиву, объекту. Работают одинаково, только reduce перебирает элементы массива слева направо, а reduceRight — справа налево.
```jsx
const arr = [1, 2, 3, 4, 5];
let result = 0;

arr.forEach(item => {
  result += (item * item + 100); // Занимаемся какой-то логикой, нужно посчитать формулу и сумму всех элементов массива
});
console.log(result) // Здесь какой-то результат

const arr = [1, 2, 3, 4, 5];
arr.reduce((result, item) => result + (item * item + 100), 0);
```

**Необычное свойство length**

Длину массива получают через свойство length и эту длину можно изменять. Так можно укоротить массив. Это не считается «хорошей практикой», поэтому не рекомендуем использовать этот способ.

```jsx
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
arr.length = 3;
console.log(arr); // [1, 2, 3], вернуть длину 5 уже не сможем, будет undefined у элементов
```

## Объекты

Объекты в JavaScript представляют собой хранилище более сложных сущностей. Данный инструмент является одной из основ языка.

```jsx
// Пустой объект
const obj = {};

// Присвоение значения свойства через точечную нотацию
obj.propName = 'foo'; // { propName: 'foo' }
// Получение значения свойства через точечную нотацию
obj.propName; // 'foo'

// Удаление свойства (пользоваться аккуратно)
delete obj.propName;

console.log(obj); // {}
```

Если же ваша цель «обнулить» значение, то воспользуйтесь присваиванием null или undefined
```jsx
const users = ['Tanya', 'Olga', 'Simon', 'Dima']

// Вот так безопаснее:
users[3] = null; // Или undefined
```

Объект может содержать другие объекты, массивы и иные типы данных
```jsx
const someKey = 'surname';

// Объект с предопределённым набором свойств
const message = {
  id: '228',
  text: 'Привет, Вася.\r\nКак дела?',
  user: {
    id: 42,
    name: 'Николай',
    login: 'nikolashka',
		[someKey]: 'Петров',
  },
  'start-year': 2007,
};
message.id; // '228'
message.user.name; // 'Николай'
// Получение значения свойства через квадратные скобки
message['i' + 'd']; // '228'
// Обращение к ключу, содержащему '-'
message['start-year']; // 2007
// Можно делать ключом другую переменную
message.user.surname; // Петров
```

Очень важно уметь итерироваться по ключам объекта. Для этого используют метод Object.keys
```jsx
const keys = Object.keys(message);
console.log(keys); // ['id', 'text', 'user', 'start-year']

const someParams = keys.reduce((result, key) => ([
  ...result,
  {[message[key]]: key},
]), []);
/*
[
	{228: "id"},
	{"Привет, Вася. ↵Как дела?": "text"},
	{[object Object]: "user"},
	{2007: "start-year"},
]
*/
```

- values возвращает значения свойств массива,
- entries возвращает и ключи, и значения.
```jsx
Object.values(message); // ["228", "Привет, Вася.↵Как дела?", {…}, 2007]
Object.entries(message); // [["id", "228"], ["text", "Привет, Вася.↵Как дела?"], ...]
```

Можно проверить наличие свойства у объект.Важное отличие метода hasOwnProperty от оператора in заключается в том, что первый не проверяет существование в цепочке прототипов объекта.Оператор in не умеет различать свойства самого объекта и унаследованные от прототипа
```jsx
function Message() {}

Message.prototype.send = function(user, text) {
	this.isSent = true;
	this[user] = text;
};

const message = new Message();

message.send('Olga', 'You are the best!');

// В консоли увидим следующее:

'Olga' in message; // true
'Not found' in message; // false
'send' in message; // true

//_____
function Message() {}

Message.prototype.send = function(user, text) {
	this.isSent = true;
	this[user] = text;
};

const message = new Message();

message.send('Olga', 'You are the best!');

// В консоли увидим следующее:
message.hasOwnProperty('Olga'); // true
message.hasOwnProperty('Not found'); // false
```

Теперь увидим ожидаемое поведение — send не включается. Потому нужно быть осторожными, делая перебор через for..in. Нужно знать основные отличия for..in от for..of. И внутри for..in проверять — является ли свойство унаследованным от прототипа или нет, иначе можно получить багу из-за незнания, как работает инструмент:
```jsx
for (let key in obj) {
	if (obj.hasOwnProperty(key)) { /* logic */ }
}
```

**Квиз**
```jsx
//Что будет выведено в консоль?
function foo() {
  let user = admin = 'Иннокентий';
  return user;
}

foo();
console.log(typeof user);
//+) undefined, string
//Мы неявно объявили глобальную переменную. Поскольку интерпретатор JS не нашел её объявление ни в функции foo, ни вне её, она стала свойством window. Попробуйте вывести в консоль window.admin или просто admin, и вы увидите Иннокентия. А вот переменная user явно объявлена в функциональной области видимости, а значит к ней нельзя получить доступ извне функции foo.
```

```jsx
//Что будет выведено в консоль?
let user = { name: 'Соня' };
let newUser;

newUser = user;
user.name = 'Софья Петровна';

console.log(newUser.name);
//+ 'Софья Петровна - На самом деле переменные user и newUser хранят ссылки на один и тот же объект

let a = '42';
let b = new String(42);

console.log(a == b)
console.log(a === b)
//true, false

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
//+ 0, 2, 2
//постфиксный инкремент. Он сначала вернул текущее значение, а потом увеличил его на единицу. На этом шаге значение всё ещё 0
//Постфиксный инкремент увеличил значение на единицу, а значит number уже равен 1

function checkAnimal(data) {
  if (data === { animal: 'Кот' }) {
    console.log('Это кот');
  } else if (data == { animal: 'Кот' }) {
    console.log('Всё ещё кот');
  } else {
    console.log('Я таких животных не знаю');
  }
}
checkAnimal({ animal: 'Кот' });
//+) 'Я таких животных не знаю'
//Объекты, в отличии от примитивов, сравниваются по ссылкам. Объект, который мы передали в качестве аргумента, и тот, что внутри функции, хранятся в разных местах в памяти, а значит их ссылки не равны.

function getName(...args) {
  console.log(typeof args);
}
getName('Иннокентий');
//+ 'object' массив — это объект

0;
new Number(0);
'';
' ';
new Boolean(false);
undefined;
//+ 0, '', undefined , Строка ' ' не falsy, поскольку там есть пробел. Функции-конструкторы — это truthy значения.

console.log(typeof typeof 0);
//+ 'string' - Сначала typeof 0 вернёт 'number', дальше typeof 'number' вернёт 'string'

function addToList(item, list) {
  return list.push(item);
}
const result = addToList('стул', ['стол']);
console.log(result);
//+ 2А всё потому, что метод push возвращает не сам новый массив, а его длину.

//Это чистая функция?
function sum(a, b) {
  return a + b;
}
//(+) Да , Чистая функция всегда возвращает тот же результат. Если вы вызовете функцию sum c аргументами 1 и 2, а потом вызовете её с теми же аргументами ещё десять раз, у вас будет тот же результат — 3

//Какой из перечисленных способов модифицирует объект user?
const user = {
  name: 'Иннокентий',
  role: {
    admin: true
  },
};
Object.freeze(user);
//(+) user.role.admin = false ,Object.freeze «замораживает» объект только поверхностно, то есть на вложенные объекты «заморозка» не распространяется.

const arr = [1, 2, 3];
const anotherArr = arr;
arr.length = 0;
console.log(arr, anotherArr);
//+ [], [] , Указав, что длинна массива равна нулю, мы по сути его опустошили. Поскольку массив — это фактически объект, он копируется по ссылке, поэтому изменения в arr повлияли на anotherArr.

let obj1 = {
	value: 1
};
let obj2 = obj1;
obj2 = {};
console.log(obj1);
//Объекты копируются по ссылке, то есть переменные obj1 и obj2 ссылаются на один и тот же объект, который хранится в памяти. Когда мы присвоили переменной obj2 пустой объект, она начала ссылаться уже на него, что не повлияло на obj1.

let firstArr = [{ name: 'Соня' }, 2];
let secondArr = firstArr.slice();
secondArr[0].name = 'Софья Петровна';
secondArr[1] = 200;
console.log(firstArr);
//+) [{ name: 'Софья Петровна' }, 2] , Метод slice без аргументов создал новый массив c такими же элементами, как в firstArr. Поэтому изменение второго элемента в secondArr не повлияло на firstArr и там всё так же 2. Но slice создал только поверхностную копию, так что значение name изменилось в обоих массивах.

function foo() {
	bar()
	return;
  
	function bar() {
		console.log(typeof bar);
	}
}
foo();
//(+) 'function', Здесь необходимо вспомнить особенность Function Declaration (объявления функции). Такую функцию можно использовать до её объявления, потому что когда движок JS ещё только готовится выполнить код, он ищет Function Declaration и создаёт их. То есть на этапе подготовки к выполнению foo, движок нашел функцию bar и создал её, поэтому она доступна до return

const objA = new Object({foo: 'foo'});
const objB = new Object({foo: 'foo'});
console.log(objA == objB);
console.log(objA === objB);
//+ false, false, Объекты хранятся и копируются по ссылке. В условии объекты выглядят одинаково, но по факту они ссылаются на разные области памяти, а значит не равны. Примитивы в свою очередь сравниваются по значению
const foo = 'Я строка';
const bar = 'Я строка';
console.log(foo == bar);
console.log(foo === bar);
(-) true, false

const objA = {
  name: 'Иннокентий'
};
const objB = objA;
objB.name = 'Соня';
delete objA.name;
console.log(objA.name);
console.log(objB.name);
//+ undefined, undefined, Объекты были скопированы по ссылке, то есть указывают на одну и ту же область памяти. Удалив ключ name в objA, мы удалили его также и для objB

const arr = [10, 1, 9, 100];
arr.sort();
console.log(arr);
//+ [1, 10, 100, 9] ,Почему результат сортировки выглядит так, будто что-то пошло не так? На самом деле метод отсортировал элементы, но сначала преобразовал их в строки, а потом расставил в порядке следования кодовых символов Unicode. Если нужно задать определенный порядок сортировки, важно в качестве аргумента передать методу sort колбэк.
```

