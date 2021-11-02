import React from 'react';
import ReactDOM from 'react-dom';

import MyProvider from './context/MyProvider';
import App from './App';

//Wrap everything with our provider so that everything, including our App has access to the context
ReactDOM.render(
    <MyProvider><App /></MyProvider>, document.querySelector('#root')
);


