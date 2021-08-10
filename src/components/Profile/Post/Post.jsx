import React from "react";
const Post = (props) => {
    return <div> {props.post.map((m) => <div>Body: {m.post} Likes: {m.likes}</div>)}</div>
}

export default Post