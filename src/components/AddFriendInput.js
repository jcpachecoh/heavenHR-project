import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';
import { messages } from '../constants/Messages'

class AddFriendInput extends Component {

  render () {
    return (<div>
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend and press enter"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
      <div className={classnames(styles.friendSex)}>

        <input 
        type="radio" 
        name="sex" 
        value="male" 
        className={classnames(styles.sexFriendInput)} 
        onChange={this.handleChangeSex.bind(this)}/>
        <img src="https://cdn4.iconfinder.com/data/icons/essential-part-3/32/216-Male-24.png" alt="male"/>

        <input type="radio" 
        name="sex"
        value="female" 
        className={classnames(styles.sexFriendInput)} 
        onChange={this.handleChangeSex.bind(this)}/>
        <img src="https://cdn4.iconfinder.com/data/icons/essential-part-3/32/217-Female-24.png" alt="female"/>
      </div>
      <div  className={classnames(styles.messageStatus)} >
        {this.state.status} 
      </div>
    </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: this.props.sex,
      state: ""
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value, status: '' });
  }

  handleChangeSex(e) {
    this.setState({ sex: e.target.value, status: '' });
  }

  handleSubmit (e) {
    const name = this.state.name;
    const sex = this.state.sex;
   
    if(name && sex) {
      if (e.which === 13) {
        this.props.addFriend(name, sex);
        this.setState({ name: '', sex: '', status: messages.success });
      }
    }else {
      if(!name)
        this.setState({ status: messages.NameMessage });
      
      if(!sex)
        this.setState({ status: messages.sexMessage });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
