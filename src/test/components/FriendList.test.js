import React from 'react';
import FriendList from '../../components/FriendList';
import * as TestUtils from 'react-addons-test-utils';
import {addFriend, deleteFriend, starFriend} from '../../actions/FriendsActions';

describe('Testing <FriendList /> component', () => {
    it('Should render FriendList component ', () => {
        const friendsMockData = {
            friendsById: [
              {
                name: 'Theodore Roosevelt',
                sex: 'Male',
                starred: true
              },
              {
                name: 'Abraham Lincoln',
                sex: 'Male',
                starred: false
              },
              {
                name: 'George Washington',
                sex: 'Female',
                starred: false
              }
            ]
          };

        const actions = {
            addFriend: addFriend,
            deleteFriend: deleteFriend,
            starFriend: starFriend
        }; 
        expect(TestUtils.createRenderer().render(
            <FriendList friends = {friendsMockData.friendsById} actions = {actions}  />
          )).toMatchSnapshot()
    });
});
