# Изучите вводный код JavaScript

```js
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");
```

Переменная указывает на определенный адрес памяти, в которой хранится значение. Переменным присваивается имя, которое можно использовать в коде для доступа к этому значению.
Именование переменных следует определенным правилам: имена могут включать буквы, цифры, знаки доллара и символы подчеркивания, но не могут содержать пробелы и не должны начинаться с цифры.
В JavaScript операторы обычно завершаются точкой с запятой - ; .
Присвоить значение, используя оператор присваивания.
```js
let character;

let character = "Hello";
```

JavaScript имеется семь примитивных типов данных, одним из которых является String, заключена в одинарные (') или двойные (”) кавычки,строки неизменяемы, а это значит, что после их создания их нельзя изменить
```js
let character = "Hello";
let character = 'Hello';
```

Консоль позволяет распечатывать и просматривать выходные данные JavaScript.
```js
let character = 'Hello';
console.log(character);//Hello
```

Переменная объявлена ​​с ключевым словом let, вы можете позже переназначить
```js
let character = 'Hello';
console.log(character);
character = "World";
```

Если имена переменных состоят из более чем одного слова, существуют определенные соглашения об именах, определяющие, как использовать слова с заглавной буквы - camel case.Верблюжий регистр означает, что первое слово в имени полностью написано строчными буквами, но все следующие слова пишутся в заголовке.
```js
let variableOne;
let secondVariable;
let yetAnotherVariable;
let thisIsAnAbsurdlyLongName;
```

Когда вы объявляете переменную без ее инициализации, она считается неинициализированной.

undefined - это специальный тип данных, представляющий значение, которое еще не имеет определения.
```js
let secondCharacter;
console.log(secondCharacter)//undefined
```

Можете присвоить значение одной переменной другой переменно
```js
let first = "One";
let second = "Two";
second = first;
```

С числовым типом данных вы можете выполнять математические операции.
Вы также можете выполнять вычитание (-), умножение (*) и деление (/).
```js
let count = 8;
console.log(count + 1) //9
```

Одной из самых основных структур данных является массив.
Массив — это непримитивный тип данных, который может содержать серию значений. Непримитивные типы данных отличаются от примитивных типов данных тем, что они могут хранить более сложные данные.
Примитивные типы данных, такие как строки и числа, могут одновременно содержать только одно значение.
Если массив содержит значения или элементы, эти значения разделяются запятыми.
Вы можете получить доступ к значениям внутри массива, используя индекс значения. Индекс — это число, представляющее позицию значения в массиве, начиная с 0 для первого значения.
Массивы особенны тем, что они считаются изменяемыми. Это означает, что вы можете изменить значение индекса напрямую.
Обратите внимание, как значение внутри массива строк изменилось напрямую? Это называется мутацией.
length — оно возвращает количество элементов в массиве.
Индексация массива начинается с нуля. Индекс последнего элемента массива на единицу меньше длины массива.
```js
let rows = [];

let rows = ["Naomi", "Quincy","CamperChan"];
console.log(rows[0])//Naomi

rows[2] = 10
console.log(rows);//[ 'Naomi', 'Quincy', 10 ]

//array.length возвращает количество элементов в массиве. Вычитая 1, вы получаете индекс последнего элемента массива
console.log(rows[rows.length-1]);//10

let cities = [ "London", "New York", "Mumbai" ]
console.log(cities)//[ 'London', 'New York', 'Mumbai' ]
cities[cities.length-1] = "Mexico City"
console.log(cities)//[ 'London', 'New York', 'Mexico City' ]
```

Метод в JavaScript — это функция, связанная с определенными значениями или объектами. Примером, с которым вы уже встречались, является метод .log(), который является частью объекта консоли.
Массивы имеют свои собственные методы
```js
let rows = ["Naomi", "Quincy", "CamperChan"];

//позволяет вам «переместить» значение в конец массива.
let pushed = rows.push("freeCodeCamp");
console.log(pushed);//4 - push() возвращает новую длину массива
console.log(rows);//[ 'Naomi', 'Quincy', 'CamperChan', 'freeCodeCamp' ]

//удаляет последний элемент из массива и возвращает этот элемент.
let popped = rows.pop()
console.log(popped);
```

Объявление переменной с ключевым словом let позволяет ее переназначить. Это означает, что вы можете изменить символ позже, чтобы он имел совершенно другое значение.
Константную переменную нельзя переназначить, как переменную let. Этот код выдаст ошибку
```js
const character = "Hello";
const  count = 8;
const  rows = [];
```

Если вам приходится выполнять задачу несколько раз, пока не будет выполнено условие, вы будете использовать цикл. Есть много способов написать цикл.
```js
//с базового цикла for
//Итератор — это переменная, которую вы можете объявить специально в цикле for
//Условие цикла for сообщает циклу, сколько раз он должен выполнить итерацию.Когда условие станет ложным, цикл остановится.
//Ваш оператор итерации сообщит вашему циклу, что делать с итератором после каждого запуска.
for (let i = 0; i < count; i = i + 1) {
  console.log(i)
}
//1...7


//цикл for...of, который перебирает каждый элемент итерируемого объекта и временно присваивает его переменной,вы можете использовать const, поскольку переменная существует только для одной итерации, а не на протяжении всего цикла.
for (const row of rows) {

}

//конкатенация - добавив новую строку к существующей строке
hello = hello + " World";


//escape-последовательность \n, которая интерпретируется как новая строка при регистрации строки
result = result +"\n" + row;


//repeat(), доступный для строк. Этот метод принимает число в качестве аргумента, определяющее количество повторений целевой строки.
const activity = "Code! ";
activity.repeat(3); //"Code! Code! Code!"
```

Функция — это блок кода, который можно повторно использовать во всем приложении.
Синтаксис вызова функции — это имя функции, за которым следуют круглые скобки.
```js
function padRow () {}

//PadRow в настоящее время не возвращает значение
const call = padRow();
console.log(call);//undefined

//Чтобы вернуть что-то еще, вам нужно использовать ключевое слово return
function padRow() {
  return "Hello!";
}

//Вместо этого вы можете определить параметры для функции. Параметры — это специальные переменные, которым присваивается значение при вызове функции, и их можно использовать в функции для динамического изменения результата кода функции.
function padRow(name) {
  return name;
}

//Параметрам необходимо присвоить значение при вызове функции.
//Когда вы передаете значение вызову функции, это значение называется аргументом.
padRow('vlad');

function addTwoNumbers(a, b) {
  return a + b;
}
const sum = addTwoNumbers(5, 10)
console.log(sum);//15

```

Переменные в JavaScript доступны в определенной области. Другими словами, место объявления переменной определяет, где в вашем коде ее можно использовать.
Первая область видимости — глобальная. Переменные, объявленные вне какого-либо «блока».
Когда переменная находится в глобальной области видимости, функция может получить к ней доступ в ее определении.
```js
const title = "Professor ";
function demo(name) {
  return title + name;
}
demo("Naomi") //"Professor Naomi"
```

Переменные также можно объявлять внутри функции. Считается, что эти переменные находятся в локальной области или области блока. Переменная, объявленная внутри функции, может использоваться только внутри этой функции.
```js
function getName() {
  const name = "Camper cat";
  return name;
}
console.log(getName()); // "Camper cat"
console.log(name) // error

//return - также останавливает выполнение вашего кода внутри функции или оператора блока.
function padRow(name) {
  const test = "Testing";
  console.log("This works!")
  return test;
  console.log("This works!") // not works
}
```

пробелы в начале и конце строки следуют шаблону
```js
//··#··
//·###·
//#####

function padRow(rowNumber, rowCount) {
  let rowCountMinRowNumber = " ".repeat(rowCount - rowNumber) 
  return rowCountMinRowNumber + character.repeat(rowNumber) + rowCountMinRowNumber;
}

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//        #       
//       ###      
//      #####     
//     #######    
//    #########   
//   ###########  
//  ############# 
// ###############
```

Оператор сложения — не единственный способ добавить значения к переменной. Оператор сложения-присвоения можно использовать как сокращение, означающее «взять исходное значение переменной
```js
test = test + 1;
test += 1;
```

вы можете использовать оператор приращения ++. Этот оператор увеличивает значение переменной на 
```js
let test = 7;
test++; //8
```

оператор меньше или равно <=
```js
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
```

Комментарии могут быть полезны для объяснения того, почему ваш код использует определенный подход.
Многострочный комментарий c  /*
```js
//

/*

*/
```

Оператор if позволяет запускать блок кода только при выполнении условия.
JavaScript имеется определенный список ложных значений. Некоторые из них включают **false, 0, «», null, undefined и NaN.**
Помимо операторов if, в JavaScript также есть операторы else if. else if операторы позволяют проверять несколько условий в одном блоке кода.Если первое условие ложно, JavaScript проверит следующее условие в цепочке. Если второе условие ложно, JavaScript проверит третье условие и так далее.
Иногда вам может потребоваться запустить другой код, когда все условия if...else if ложны. Вы можете сделать это, добавив блок else.
```js
if (true) {
  console.log("Condition is true");
}

if ("") {
  console.log("Condition is true");
} else if (5 < 10 ) {
  console.log("5 is less than 10");
}
//5 is less than 10

if ("") {
  console.log("Condition is true");
} else if (5 > 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}
//This is the else block
```

Цикл while будет выполняться снова и снова, пока указанное условие не перестанет быть истинным.
Прямо сейчас, если вы измените continueLoop на true, ваш цикл while будет работать вечно. Это называется бесконечным циклом, и вам следует избегать его. Бесконечный цикл может заблокировать вашу систему, и для выхода из нее потребуется полный перезапуск.
```js
while (continueLoop) { }
```

Оператор равенства == используется для проверки равенства двух значений
Оператор равенства может привести к странному поведению в JavaScript. Например, «0» == 0 является истиной, даже если одно из них — строка, а другое — число.
Оператор строгого равенства === используется для проверки того, равны ли два значения и имеют ли они один и тот же тип. Как правило, это оператор равенства, который следует использовать всегда.
```js
"0" == 0 //true
"0" === 0 //false
```

Когда значение Done достигнет значения count, мы хотим, чтобы цикл прекратил выполнение.
```js
let continueLoop = false;
let done = 0;

while (continueLoop) {
  done++;
  if (done === count) {
    continueLoop = false;
  }
}
```

Оператор строгого неравенства !== позволяет вам проверить, не равны ли два значения или имеют ли они разные типы.
```js
while (done !== count) {
  done++;
  rows.push(padRow(done, count));
}
```

полный код
```js
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
  <!-- #       
      ###      
     #####     
    #######    
   #########   
  ###########  
 ############# 
############### -->
```

Выполнять цикл в противоположном направлении, ваш цикл должен выполняться, пока i больше 0
```js
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
```

Метод массива .unshift() позволяет добавлять значение в начало массива, в отличие от .push(), который добавляет значение в конец массива. .unshift() возвращает новую длину массива, к которому он был вызван.
```js
const countDown = [2, 1, 0];
const newLength = countDown.unshift(3);
console.log(countDown); // [3, 2, 1, 0]
console.log(newLength); // 4
```

Массивы также имеют метод .shift(). Это удалит первый элемент массива
```js
const numbers = [1, 2, 3];
numbers.shift(); 
//[2, 3]
```

```js
let inverted = true;

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
```

ДЗ
Учитель закончил выставлять оценки ученикам и нуждается в вашей помощи, чтобы подсчитать средний балл по классу. Завершите функцию getAverage, которая принимает массив результатов тестов и возвращает средний балл.
```js
function getAverage(scores) {
  return scores.reduce( (acc,n) => acc += n,0) / scores.length
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); //71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); //85.4
```

Теперь учителю нужна ваша помощь в переводе оценок учащихся в буквенную оценку.
```js
function getGrade(score) {
  if (score === 100) {
    return "A++"
  } else if (score >= 90 && score <= 99) {
    return "A"
  } else if (score >= 80  &&  score <= 89) {
    return "B"
  } else if (score >= 70  &&  score <= 79) {
    return "C"
  } else if (score >= 60  &&  score <= 69) {
    return "D"
  } else {
    return "F"
  }
}

console.log(getGrade(96)); //"A"
console.log(getGrade(82)); //"B"
console.log(getGrade(56)); //"C"
```

Учитель очень доволен программой, которую вы создали. Но теперь они хотят иметь простой способ проверить, получил ли студент проходной балл. Проходной балл – это все, что не является «F».Ваша функция должна возвращать true, если у учащегося есть проходной балл, и false, если его нет.
```js
function hasPassingGrade(score) {
  return score >= 60
}
console.log(hasPassingGrade(100)); //true
console.log(hasPassingGrade(53)); //false
console.log(hasPassingGrade(87)); //true
```

Теперь, когда у учителя есть вся необходимая информация, он хочет иметь возможность сообщить ученику о результатах.
Дополните функцию StudentMsg параметрами totalScores и StudentScore. Функция должна возвращать строку, представляющую сообщение студенту.
```js
function studentMsg(totalScores, studentScore) {
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You ${ hasPassingGrade(studentScore) ? "passed" : "failed"} the course.`
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
////Class average: 71.7. Your grade: F. You failed the course.
```

# Изучите базовый JavaScript, создав ролевую игру

JavaScript — мощный язык, который позволяет создавать интерактивные веб-сайты.
Этот элемент используется для загрузки JavaScript в ваш HTML-файл.
Код запускается до того, как браузер завершит чтение HTML.Чтобы это исправить, переместите элемент сценария из элемента head и поместите его в конец элемента body (непосредственно перед закрывающим тегом body).
```html
<script>
  // JavaScript code goes here
</script>

<head>
  <script src="index.js"></script>
</head>

<body>
  <script src="index.js"></script>
</body>
```

Одним из самых мощных инструментов является консоль разработчика.Консоль разработчика будет включать ошибки, возникающие в вашем коде, но вы также можете использовать ее для просмотра значений переменных в вашем коде, что полезно при отладке.

JavaScript взаимодействует с HTML с помощью объектной модели документа или DOM. DOM — это дерево объектов, представляющее HTML. Вы можете получить доступ к HTML, используя объект документа, который представляет весь ваш HTML-документ.
Одним из методов поиска определенных элементов в вашем HTML является использование метода querySelector(),принимает в качестве аргумента селектор CSS и возвращает первый элемент, соответствующий этому селектору.
```html
<button id="button1">Go to store</button>
```
```js
let button1 = document.querySelector("#button1");
```

button - у этих элементов есть специальное свойство onclick, которое можно использовать, чтобы определить, что произойдет, когда кто-то нажмет эту кнопку.
Вы можете получить доступ к свойствам в JavaScript несколькими разными способами.
```js
//Первый — с точечной записью.
//При нажатии кнопки будет вызвана myFunction.
button.onclick = myFunction;
```

Свойство InnerText управляет текстом, отображаемым в элементе HTML
```html
<p id="info">Demo content</p> 
```
```js
const info = document.querySelector("#info"); 
//текст элемента p будет изменен
info.innerText = "Hello World"; 
```

Поскольку ваша строка уже заключена в двойные кавычки, вам потребуется экранировать кавычки вокруг Store. Вы можете экранировать их с помощью обратной косой черты \.
```js
text.innerText = "You are in the town square. You see a sign that says \"Store\".";
```

Объекты — это не примитивные типы данных, в которых хранятся пары ключ-значение. Непримитивные типы данных — это изменяемые типы данных, которые не являются неопределенными, нулевыми, логическими, числовыми, строковыми или символьными. Изменяемый означает, что данные могут быть изменены после их создания.Объекты похожи на массивы, за исключением того, что вместо использования индексов для доступа и изменения их данных вы получаете доступ к данным в объектах через свойства.Свойства состоят из ключа и значения. Ключ — это имя свойства, а значение — это данные, хранящиеся в свойстве.
Существует два способа доступа к свойствам объекта: обозначение через точку (.) и обозначение скобок ([]), аналогично массиву.
Точечная нотация — это то, что вы используете, когда заранее знаете имя свойства, к которому пытаетесь получить доступ.
Если свойство объекта, к которому вы пытаетесь получить доступ, содержит пробел в имени, вам нужно будет использовать скобки.
```js
const obj = {
  name: "Quincy Larson"
};

//Если имя свойства (ключ) объекта содержит пробел, вам нужно будет использовать одинарные или двойные кавычки вокруг имени
const spaceObj = {
  "Space Name": "Kirk",
};

const developer = {
  name: "Jessica",
}
// Output: Jessica
console.log(developer.name); 

const spaceObj = {
  "Space Name": "Kirk",
};
spaceObj["Space Name"]; // "Kirk"
```

Обновить отображение элемента
```js
const paragraph = document.querySelector('p');
paragraph.style.display = 'block';
```

Объект Math в JavaScript содержит статические свойства и методы для математических констант и функций. Одним из них является Math.random(),который генерирует случайное число от 0 (включительно) до 1 (исключительно). Другой метод — Math.floor(), который округляет заданное число до ближайшего целого числа.вы можете генерировать случайное число в определенном диапазоне
```js
//вы можете генерировать случайное число в определенном диапазон
Math.floor(Math.random() * 5) + 1;
```

Свойство InnerHTML позволяет вам получать доступ к содержимому HTML-элемента или изменять его с помощью JavaScript.
```js
document.querySelector("#demo").innerHTML = "Hello, innerHTML!";
```

Тернарный оператор является условным оператором и может использоваться как однострочный оператор if-else. Синтаксис: условие? выражение Если Истина: выражение Если False.
```js
score > 0 ? score : default_score
```

Логический оператор ИЛИ ||.
Логический оператор ИЛИ будет использовать первое значение, если оно истинно, то есть любое значение, кроме NaN, null, undefine, 0, -0, 0n, "" и false.
```js
Math.random() > .2 || health < 20;
```

Логический оператор AND &&
```js
if (firstName === "Quincy" && lastName === "Larson") {}
```

Метод .includes() определяет, содержит ли массив элемент, и возвращает значение true или false.
```js
const numbersArray = [1, 2, 3, 4, 5]
const number = 3

if (numbersArray.includes(number)) {
  console.log("The number is in the array.")
}
```

**Игра полностью с урока**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
  </head>
  <body>
    <div id="game">
      <div id="stats">
        <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
        <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
        <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
      </div>
      <div id="controls">
        <button id="button1">Go to store</button>
        <button id="button2">Go to cave</button>
        <button id="button3">Fight dragon</button>
      </div>
      <div id="monsterStats">
        <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
        <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
      </div>
      <div id="text">
        Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

```css
body {
  background-color: #0a0a23;
}

#text {
  background-color: #0a0a23;
  color: #ffffff;
  padding: 10px;
}

#game {
  max-width: 500px;
  max-height: 400px;
  background-color: #ffffff;
  color: #ffffff;
  margin: 30px auto 0px;
  padding: 10px;
}

#controls,
#stats {
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #0a0a23;
}

#monsterStats {
  display: none;
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #ffffff;
  background-color: #c70d0d;
}

.stat {
  padding-right: 10px;
}

button {
  cursor: pointer;
  color: #0a0a23;
  background-color: #feac32;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
}
```

```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },{
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },{
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
```

# Научитесь проверять форму, создав счетчик калорий

Чтобы получить доступ к элементу HTML с заданным именем идентификатора, вы можете использовать метод getElementById()
```js
const calorieCounter = document.getElementById('calorie-counter');
```

В программировании добавление к переменной префикса is или has является обычной практикой для обозначения того, что переменная представляет собой логическое значение.

