import React, {useState} from 'react';

function Post(){
  const [like,setlike] = useState(0)
  const [dislike,setdislike] =useState(0)

}
const Post = ({ name, body, like, dislike }) => {
  return (
    <div className="post">
      <div className="post-header">
        <h2 className="post-title">{name}</h2>
      </div>
      <div className="post-body">
        <p className="post-text">{body}</p>
      </div>
      <div className="post-footer">
        <button className="Button">
          Like ({like})
        </button>
        <button className="Button">
          Dislike ({dislike})
        </button>
      </div>
    </div>
  );
};

export default Post;
