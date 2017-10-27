import React from 'react';
import FriendListItem from '../../components/FriendListItem';
import * as TestUtils from 'react-addons-test-utils';
import {addFriend, deleteFriend, starFriend} from '../../actions/FriendsActions';

describe('Testing <FriendListItem /> component', () => {
    it('Should render FriendListItem component ', () => {
        const friendsMockData = {
            friendsById: [
              {
                key: 0,
                id: 0,
                name: 'Theodore Roosevelt',
                sex: 'Male',
                starred: true
              },
              {
                key: 1,
                id: 1,
                name: 'Abraham Lincoln',
                sex: 'Male',
                starred: false
              },
              { 
                key: 2,
                id: 2,
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
            <FriendListItem  key={friendsMockData.friendsById[0].key}
            id={friendsMockData.friendsById[0].id}
            name={friendsMockData.friendsById[0].name}
            sex={friendsMockData.friendsById[0].sex}
            starred={friendsMockData.friendsById[0].starred}
            {...actions}  />
          )).toMatchSnapshot()
    });
});
