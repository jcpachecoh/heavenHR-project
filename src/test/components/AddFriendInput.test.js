import React from 'react';
import AddFriendInput from '../../components/AddFriendInput';
import * as TestUtils from 'react-addons-test-utils';
import {addFriend} from '../../actions/FriendsActions';



describe('Testing <AddFriendInput /> component', () => {
    it('Should render AddFriendInput component ', () => {
        expect(TestUtils.createRenderer().render(
            <AddFriendInput addFriend={addFriend} />
          )).toMatchSnapshot()
    });

   /* describe('handle state when user enter a name', () => {
        it('should set state name when user type name', () => {
            const onKeyDown = sinon.spy();
            const wrapper = mount(<AddFriendInput addFriend={addFriend}/>);
            const input = wrapper.find('input');
            input.simulate('keyDown', {keyCode: 40});
            expect(onKeyDown.called).to.be.true;
        });
    });*/
});


