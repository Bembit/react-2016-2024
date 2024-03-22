import React from "react";

function Warning(props) {
  const { posts } = props;

  if (!posts || posts.length === 0) return <h2>nothing here, sorry</h2>;
  else
    return (
      <div className="dashboard_container">
        <ul>
          <h2>Total posts: {posts.length}</h2>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <h6>{post.postId}</h6>
                <p>{post.body}</p>
              </li>
            );
          })}
          ;
        </ul>
      </div>
    );
}

export default Warning;
