import React from "react";

function ClientAxios(props) {
	const { posts } = props;
	console.log(posts);

	if (!posts || posts.length === 0) return <h2>nothing here, sorry</h2>;
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

export default ClientAxios;
