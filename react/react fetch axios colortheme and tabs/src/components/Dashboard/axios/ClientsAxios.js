import React, { useEffect, useState } from "react";
import axios from 'axios';
import loader from "../../../helpers/loader";
import ClientAxios from "./ClientAxios";

function ClientsAxios() {
  const Loading = loader(ClientAxios);

  const [appState, setAppState] = useState({
	loading: false,
	posts: null,
  	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
		axios.get(apiUrl).then((posts) => {
			const allPosts = posts.data;
			setAppState({ loading: false, posts: allPosts });
		});
	}, [] )
	// we are not setting appstate

  return <Loading isLoading={appState.loading} posts={appState.posts} />;
}

export default ClientsAxios;
