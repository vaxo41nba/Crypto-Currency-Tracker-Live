import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchUpdateData, watchLoadData } from './sagas/saga';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import reducer from './redux/rootReducer';
import CurrencyPage from './CurrencyPage/index';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchUpdateData);
sagaMiddleware.run(watchLoadData);

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route
						exact
						path="/:name/:symbol"
						render={(props) => <CurrencyPage {...props} />}
					/>
				</Switch>
			</Router>
		</Provider>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
