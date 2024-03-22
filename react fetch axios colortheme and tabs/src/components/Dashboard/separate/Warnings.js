import React, { useEffect, useState } from "react";
import loader from "../../../helpers/loader";
import Warning from "./Warning";

function Warnings() {
  const Loading = loader(Warning);

  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
    comments: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/comments`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);

  return <Loading isLoading={appState.loading} posts={appState.posts} />;
}

export default Warnings;
