# Quick Start

Эта страница познакомит вас с 80% концепций React, которые вы будете использовать ежедневно

## Создание и вложение компонентов

Компоненты React — это функции JavaScript, которые возвращают разметку
```jsx
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

Имена компонентов React всегда должны начинаться с заглавной буквы, а теги HTML должны быть строчными.

## Написание разметки с помощью JSX

JSX строже HTML. Вам нужно закрыть теги вроде <br />. Ваш компонент также не может возвращать несколько тегов JSX. Вам нужно обернуть их в общий родительский элемент, например <div>...</div>или пустую <>...</>обертку

```jsx
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```
## Добавление стилей

```jsx
<img className="avatar" />
```

```css
.avatar {
  border-radius: 50%;
}
```

## Отображение данных

Фигурные скобки позволяют вам «выйти обратно» в JavaScript, чтобы вы могли встроить некоторую переменную из вашего кода и отобразить ее пользователю.
```jsx
return (
  <h1>
    {user.name}
  </h1>
);
```

Например, className="avatar"передает "avatar"строку как класс CSS, но src={user.imageUrl}считывает значение переменной JavaScript user.imageUrl, а затем передает это значение как src атрибуту

В фигурные скобки JSX можно помещать и более сложные выражения
```jsx
alt={'Photo of ' + user.name}
```

Вы можете использовать styleатрибут, когда ваши стили зависят от переменных JavaScript
```jsx
//объект внутри 
style={{}} 
```
## Условный рендеринг

Использовать оператор ifдля условного включения JS
```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

Использовать условный ?оператор
```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

Более короткий логический &&синтаксис
```jsx
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

## Рендеринг списков
```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```
key - вы должны передать строку или число, которое уникально идентифицирует этот элемент

## Реагирование на события

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    // Не вызывайте функцию обработчика событий: вам нужно только передать ее вниз . React вызовет ваш обработчик событий, когда пользователь нажмет кнопку.
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## Обновление экрана

Добавьте состояние к вашему компоненту

Если вы визуализируете один и тот же компонент несколько раз, каждый получит свое собственное состояние

```jsx
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

## Using Hooks

Вы можете вызывать хуки только в верхней части своих компонентов (или других хуков). Если вы хотите использовать useStateв условии или цикле, извлеките новый компонент и поместите его туда.

## Обмен данными между компонентам

Чтобы оба компонента отображались одинаково count необходимо переместить состояние от отдельных кнопок «вверх» к ближайшему компоненту.

Информация, которую вы передаете таким образом, называется props.
```jsx
//MyApp
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

//MyButton
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```

# Мышление в React

Компоненты, которые появляются внутри другого компонента в макете, должны отображаться как дочерние элементы в иерархии

Принцип единственной ответственности , то есть компонент в идеале должен выполнять только одну задачу

ProductTable
- ProductCategoryRow
- ProductRow

Часто проще сначала создать статическую версию, а потом добавить интерактивность

Props — это способ передачи данных от родителя к потомку.

Вы можете либо строить «сверху вниз», начиная с создания компонентов, расположенных выше в иерархии

В более простых примерах обычно проще идти сверху вниз, а в более крупных проектах проще идти снизу вверх.

После создания компонентов у вас будет библиотека повторно используемых компонентов, которые визуализируют вашу модель данных. 

Думайте о состоянии как о минимальном наборе изменяющихся данных, которые ваше приложение должно запомнить

Самый важный принцип структурирования состояния — сохранять его DRY (Don't Repeat Yours).

Помните: React использует односторонний поток данных, передавая данные вниз по иерархии компонентов от родительского к дочернему компоненту.

Добавьте обратный поток данныx
```jsx
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
  )
}

//SearchBar
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
  )
}

```

# Установка
```jsx
npm install react react-dom
```


```html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <p>This paragraph is a part of HTML.</p>
    <nav id="navigation"></nav>
    <p>This paragraph is also a part of HTML.</p>
  </body>
</html>
```

```jsx
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
```

Когда вы внедряете React в существующий проект, обычно начинают с небольших интерактивных компонентов (вроде кнопок), а затем постепенно продолжают «двигаться вверх», пока в конечном итоге вся ваша страница не будет построена с помощью React. 

# Настройка редактора

VS Code — один из самых популярных редакторов, используемых сегодня

Линтеры кода находят проблемы в вашем коде по мере его написания, помогая вам исправить их на ранних этапах. ESLint — популярный линтер с открытым исходным кодом для JavaScript.

Prettier очистит ваш код, переформатировав его в соответствии с предустановленными, настраиваемыми правилами. 

# Использование TypeScript
```jsx
npm install @types/react @types/react-dom
```

Написание TypeScript с React очень похоже на написание JavaScript с React. Ключевое отличие при работе с компонентом заключается в том, что вы можете предоставить типы для props вашего компонента.

```jsx
//typeлибо interface
interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}
```

**useState** 
```jsx
type Status = "idle" | "loading" | "success" | "error";
const [status, setStatus] = useState<Status>("idle");

type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success', data: any }
  | { status: 'error', error: Error };
const [requestState, setRequestState] = useState<RequestState>({ status: 'idle' })
```

**useReducer**
```jsx
import {useReducer} from 'react';

//interface Stateописывает форму состояния
interface State {
   count: number 
};

//type CounterActionописывает различные действия
type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

//const initialState: State предоставляет тип для начального состояния
const initialState: State = { count: 0 };

//задает типы аргументов функции-редуктора и возвращаемого значения
function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**useContext**

Hook useContext— это метод передачи данных вниз по дереву компонентов без необходимости передавать props через компоненты.

```jsx
import { createContext, useContext, useState, useMemo } from 'react';

// This is a simpler example, but you can imagine a more complex object here
type ComplexObject = {
  kind: string
};

// The context is created with `| null` in the type, to accurately reflect the default value.
const Context = createContext<ComplexObject | null>(null);

// The `| null` will be removed via the check in the Hook.
const useGetComplexObject = () => {
  const object = useContext(Context);
  if (!object) { throw new Error("useGetComplexObject must be used within a Provider") }
  return object;
}

export default function MyApp() {
  const object = useMemo(() => ({ kind: "complex" }), []);

  return (
    <Context.Provider value={object}>
      <MyComponent />
    </Context.Provider>
  )
}

function MyComponent() {
  const object = useGetComplexObject();

  return (
    <div>
      <p>Current object: {object.kind}</p>
    </div>
  )
}
```

**useMemo**

Повторно запуская функцию только при изменении зависимостей

```jsx
const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
```

**useCallback**

Они useCallbackпредоставляют стабильную ссылку на функцию, пока зависимости, переданные во второй параметр, одинаковы.

```jsx
const handleClick = useCallback(() => {
  // ...
}, [todos]);
```

**События ДОМ**

Явно задать тип события

```jsx
import { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState("Change me");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
}
```

**Дети**

Два распространенных пути описания дочерних элементов компонена
```jsx
//широкое определение дочерних элементо
interface ModalRendererProps {
  title: string;
  children: React.ReactNode;
}

//представляет собой только элементы JS
interface ModalRendererProps {
  title: string;
  children: React.ReactElement;
}
```

**Реквизит стиля**

Для описания объекта, переданного в stylepro
```jsx
interface MyComponentProps {
  style: React.CSSProperties;
}
```

# Инструменты разработчика React

React Developer Tools

# Компилятор React

Компилятор использует свои знания правил JavaScript и React для автоматического запоминания значений или групп значений в ваших компонентах и ​​хуках
```jsx
npx react-compiler-healthcheck@experimental
```

Проверьте, сколько компонентов можно успешно оптимизировать: чем больше, тем лучше

Плагин eslint отобразит любые нарушения правил React в вашем редакторе
```jsx
npm install eslint-plugin-react-compiler@experimental
```

# Встроенные React Hooks

Хуки позволяют использовать различные функции React из ваших компонентов. 

useState объявляет переменную состояния, которую можно обновить напрямую.
useReducer объявляет переменную состояния с логикой обновления внутри функции-редуктора.

```jsx
function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...
}
```

**Context Hook**

Контекст позволяет компоненту получать информацию от удаленных родителей, не передавая ее как props. Например, компонент верхнего уровня вашего приложения может передавать текущую тему пользовательского интерфейса всем компонентам ниже, независимо от того, насколько глубоко.

```jsx
function Button() {
  const theme = useContext(ThemeContext);
  // ...
}
```

**Ref Hooks**

Ссылки позволяют компоненту хранить некоторую информацию, которая не используется для рендеринга.

useRef - объявляет ссылку. В ней можно хранить любое значение, но чаще всего она используется для хранения узла DOM.
useImperativeHandle - позволяет вам настроить ссылку, представленную вашим компонентом. Это используется редко.

```jsx
function Form() {
  const inputRef = useRef(null);
  // ...
}
```

**Effect Hook**

Эффекты позволяют компоненту подключаться и синхронизироваться с внешними системами. Это включает в себя работу с сетью, DOM браузера, анимацию, виджеты, написанные с использованием другой библиотеки пользовательского интерфейса, и другой код, не относящийся к React.

```jsx
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
}
```
Существуют два редко используемых варианта useEffectс разницей во времени:

useLayoutEffectс - рабатывает до того, как браузер перерисует экран. Вы можете измерить макет здесь.
useInsertionEffectс - рабатывает до того, как React вносит изменения в DOM. Библиотеки могут вставлять сюда динамический CSS.

**Performance Hooks**

Распространенный способ оптимизировать производительность повторного рендеринга — пропустить ненужную работу

useMemo - позволяет кэшировать результат трудоемкого вычисления.
useCallback - позволяет кэшировать определение функции перед передачей его оптимизированному компоненту.

```jsx
function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

**Извлечение собственного хука из компонента**

Названия крючков всегда начинаются c use

Вы можете написать его самостоятельно. Объявите вызываемую функцию useOnlineStatusи переместите в нее весь дублирующийся код из компонентов, которые вы написали ранее

!Пользовательские хуки позволяют вам делиться логикой состояния, а не самим состояние

!Пользовательские хуки позволяют вам делиться логикой состояния , но не самим состоянием. Каждый вызов хука полностью независим от любого другого вызова того же хука.
```jsx
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  //зависемость  
  }, []);
  return isOnline;
}

//StatusBar
import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
```


