import React, { useState } from 'react';

const PostForm = (props ) => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  function handleSubmit(event){
    event.preventDefault();
    let newPost = {
      name: name,
      body: body,
    };
    props.addPost(newPost);
    setName('');
    setBody('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form group'>
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}/>
      </div>
      <div className='form group'>
      <input
        type="text"
        className="form-control"
        placeholder="Tell us whats on your mind...."
        value={body}
        onChange={handleBodyChange}/>
      </div>
      <button type="submit" className='btn btn-primary' style={{'marginTop': '1em'}}   >Post</button>
    </form>
  );
};

export default PostForm;
