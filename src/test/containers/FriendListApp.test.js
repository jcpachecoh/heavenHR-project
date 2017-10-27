import React from 'react';
import FriendListApp from '../../containers/FriendListApp';
import * as TestUtils from 'react-addons-test-utils';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

describe('Testing <FriendListApp /> component', () => {
    it('Should render FriendListApp component ', () => {
    
        expect(TestUtils.createRenderer().render(
            <Provider store={store}>
                <FriendListApp />
            </Provider>
          )).toMatchSnapshot()
    });
});
