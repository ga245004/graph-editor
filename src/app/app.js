console.log('application starting..');

import React from 'react';
import {render} from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import './app.scss';

const App = () => {
    return <Button variant="contained" color="primary">
        Hello World
    </Button>
}

const Base = () => (
    <React.Fragment>
        <CssBaseline/>
        <App/>
    </React.Fragment>
);

render(
    <Base/>, document.getElementById('root'));