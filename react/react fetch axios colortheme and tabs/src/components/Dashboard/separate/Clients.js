import React, { useEffect, useState } from 'react';
import loader from '../../../helpers/loader';
import Client from './Client';

function Clients() {

    const Loading = loader(Client);

    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://jsonplaceholder.typicode.com/todos`;
        fetch(apiUrl)
        .then((res) => res.json())
        .then((posts) => {
            console.log(posts);
            setAppState({ loading: false, posts: posts });
        });
    }, [setAppState]);

        return(
            <Loading isLoading={appState.loading} posts={appState.posts} />
        );
    };

export default Clients;