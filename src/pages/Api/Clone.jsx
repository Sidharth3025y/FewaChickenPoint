import React, { useEffect, useState } from "react";

const Clone = () => {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then ((response) =>response.json())
     .then ((data)=> setPosts(data) )
     .catch((error)=> console.log("Error API LOADING...", error ));
 
   },[]);
  return (
    <div>
      <h1>The datas are:</h1>
      {posts.length === 0 ? (
        <p>Loading posts....</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clone;