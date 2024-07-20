
// import React, { useState } from 'react'

// const State = () => {
    
//     const [posts, setPost] = useState();
//     const [postId, setPostId] = useState(1);

//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//         setPost(data)
//     });

//     const changePost = ()=> setPostId(x => x+1);
//     const changePostRemove = ()=> setPostId(x => x-1);


//   return (
//     <>
//       <button onClick={changePost}>change </button>
//       <button onClick={changePostRemove}>return</button>
//       <div style={{display:'flex',flexDirection:'column'}}>
//     {posts?.map((post)=>{
//        return post.id === postId ? (<>{post.id +": "+ post.title}<br/>
//        <p>{post.body}</p>
//        </>) : (<></>)
//     })}</div>
//     </>
//   );
// }

// export default State






// import React from 'react'
// import { useState } from 'react';

// const State = () => {

//     const [counter, setCounter] = useState(0); 
   
//    const updateUp = ()=> setCounter(prev => prev + 1);
//    const updateDown = ()=> setCounter(prev => prev - 1);

    
//   return (
//     <>
//       <p>{counter}</p>
//       <button onClick={updateUp}>+</button>
//       <button onClick={updateDown}>-</button>

//     </>
//   )
// }

// export default State
