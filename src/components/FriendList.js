import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      friendsPerPage: 2,
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
    const { currentPage, friendsPerPage } = this.state;

    const indexOfLastFriend = currentPage * friendsPerPage;
    const indexOfFirstFriend= indexOfLastFriend - friendsPerPage;
    const currentFriends = this.props.friends.slice(indexOfFirstFriend, indexOfLastFriend);

    const renderFriends = currentFriends.map((friend, index) => {
      let indexFriend;
      if(currentPage !== 1) 
        indexFriend = index + currentPage;
      else
        indexFriend = index;

      return (
        <FriendListItem
          key={indexFriend}
          id={indexFriend}
          name={friend.name}
          sex={friend.sex}
          starred={friend.starred}
          {...this.props.actions} />
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.friends.length / friendsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}>
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
