import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      friendsPerPage: 1,
      friends: this.props.friends
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render () {
    const { friends, currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentFriends = friends.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderFriends =  this.state.friend.map((friend, index) => {
      return (
        <FriendListItem
          key={index}
          id={index}
          name={friend.name}
          sex={friend.sex}
          starred={friend.starred}
          {...this.props.actions} />
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(friends.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (<div>
        <ul className={styles.friendList}>
          {renderFriends}
        </ul>
        <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
    </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
