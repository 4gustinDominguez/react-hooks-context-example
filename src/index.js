import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = props => {
  const [count = 0, setCount] = useState(props.count);
  const [text = '', setText] = useState();

  return (
    <div>
      <p>
        The current {text || 'count'} is {count}.
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <p>
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
