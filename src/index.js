import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//new

class Main extends React.Component {
  render() {
    return <App />;
  }
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);

ReactDOM.render(<App />, document.getElementById('root'));