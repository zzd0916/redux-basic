
import { FETCH_POSTS, NEW_POST } from './types';

//分发操作
// export function fetchPosts() {
//     return function (dispatch) {
//         console.log(dispatch)
//         fetch("http://jsonplaceholder.typicode.com/posts")
//         .then(res =>  res.json())
//         .then(posts => 
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             }) 
//         )
//     }
// }


export const fetchPosts = () => dispatch =>{
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res =>  res.json())
    .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        }) 
    )
}

export const createPost = postData => dispatch =>{
    fetch("http://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post =>
        dispatch({
            type: NEW_POST,
            payload: post
        })     
    )
}