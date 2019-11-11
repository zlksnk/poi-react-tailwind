import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'

import App from './components/App';

const HotReloadedApp = hot(module)(App)

ReactDOM.render(<HotReloadedApp />, document.querySelector("#app"))
