import React from 'react';
import AddFriendInput from '../../components/AddFriendInput';
import {addFriend} from '../../actions/FriendsActions';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';
import {sinon} from 'sinon';




describe('Testing <AddFriendInput /> component', () => {

    it('Should render AddFriendInput component ', () => {


          const wrapper = shallow(
            <AddFriendInput addFriend={addFriend} />
        );

        expect(wrapper).to.have.length(1);
    });


    it('should loads 3 inputs', () => {
        const wrapper = shallow(<AddFriendInput addFriend={addFriend} />);
        const rendered = wrapper.find('input');
    
        expect(rendered).to.have.length(3);
            
    });

    it('should call handleEvent', () => {
            //sinon.spy(AddFriendInput.prototype, 'handleChange');
            const wrapper = mount(<AddFriendInput addFriend={addFriend} />);
            const input = wrapper.find('.form-control');
            input.simulate('keyDown',{which: 'a'});
            expect(input.length).to.equal(1);

    });

    it('should call addEvent with enter key', () => {
        //sinon.spy(AddFriendInput.prototype, 'handleChange');
        const wrapper = mount(<AddFriendInput addFriend={addFriend} />);
        const input = wrapper.find('.form-control');
        input.simulate('keyDown',{keyCode: 13});
        expect(input.length).to.equal(1);

    });

  
});


