import React, {useState} from "react";
import PostForm from './Components/PostForm/postForm'
import Navbar from './Components/NavBar/navBar'
import PostList from "./Components/PostList/postList";
import Post from "./Components/Post/Post"
import './App.css'

function App() {
  const [posts, setPosts] = useState([{"name": "Bobby bill", "body":" i dont really have much"}]);

  function addPost (newPost){
    let tempPost = [...posts, newPost]
    setPosts(tempPost);
  };

  return (
    <div>
      <Navbar/>
        <div className="Main-Container">
          <div className="row">
            <div className="col-mid-6">        
              <div className="border-box">
                <PostForm addPost={addPost} />
              </div>
            </div>
              <div className="border-box">
                <PostList posts={posts} />
              </div>
          </div>
      </div> 
    </div>
  );
};

export default App;