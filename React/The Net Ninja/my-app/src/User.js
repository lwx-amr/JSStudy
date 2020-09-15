import React from 'react';

const User = ({users, deleteUser}) => {
    const usersList = users.map((user) => {
      const {name, club, age, id} = user;
      if(age < 30) {
        return (
          <div className="User-header" key={id}>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
              <p>Club: {club}</p>
              <button onClick={() => {deleteUser(id)}}>
                Delete user
              </button>
          </div>
        );
      } else {
        return null;
      }
    });
    return (
      <div className="User">
        {usersList}
      </div>
    );
}
export default User;