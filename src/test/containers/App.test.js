import React from 'react';
import App from '../../containers/App';
import * as TestUtils from 'react-addons-test-utils';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

describe('Testing <App /> component', () => {
    it('Should render App component ', () => {
    
        expect(TestUtils.createRenderer().render(
            <Provider store={store}>
                <App />
            </Provider>
          )).toMatchSnapshot()
    });
});
