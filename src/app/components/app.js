import './app.scss';
import React from 'react';

import Header from './header'
import Editor from '../containers/editor';

const App = () => {
    const header = <Header key='header'/>
    const editor = <Editor key='editor'/>;
    return [header, editor];
}

export default App;