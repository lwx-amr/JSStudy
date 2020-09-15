import React, { Component } from "react";
import axios  from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({
          posts: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    const {posts} = this.state;
    const postsList = (posts.length)? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="Poke Ball" />
            <div className="card-content">
              <Link to={'/' + post.id}><span className="card-title">{post.title}</span></Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : ( <div className="center">No posts yet!</div> );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <div className="posts">
          {postsList}
        </div>
      </div>
    );
  }
}

export default Home;