# Some Interesting Questions

## 1. What will happen when I click on button here?
```
import React from 'react';

function App() {
  const counterElem = <Counter />;
  
  return (
    <div>
      {counterElem}
      {counterElem}
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default App;
```

## 2. What will happen when we change the color after clicking on button several times?
 ```
import React from 'react';

function App() {
  const [color, setColor] = React.useState(null);
  
  return (
    <div>
      {color ? (
        <Counter color={color} />
      ) : (
        <Counter />
      )}
      
      <label htmlFor="color-picker">
        Select color:
        <input
          id="color-picker"
          type="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
      </label>
    </div>
  );
}

function Counter({ color }) {
  const [count, setCount] = React.useState(0);

  return (
    <button
      style={{ color }}
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}

export default App;
```
