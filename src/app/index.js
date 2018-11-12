console.log('application starting..');

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/app'
import configureStore from './redux/configureStore'
const store = configureStore();

const AppProvider = () => (<App/>)

const Base = () => (
    <Provider store={store}>
        <React.Fragment>
            <CssBaseline/>
            <AppProvider/>
        </React.Fragment>
    </Provider>
);

const renderApp = () => {
    render(
        <Base/>, document.getElementById('root'));
}
if (module.hot) {
    module
        .hot
        .accept('./components/app', renderApp)
}
renderApp()