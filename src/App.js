import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";

const App = () => {
  const posts = useSelector((state) => {
    return state.postReducer;
  });
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) &&
            posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
