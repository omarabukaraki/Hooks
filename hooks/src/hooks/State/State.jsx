
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



import React, { useState } from 'react'
import img_1 from '../../assets/a-cup-of-black-tea.jpg';
import img_2 from '../../assets/about.jpg';

const State = () => {

const [img,setImg] = useState(img_1);

const changeImg = ()=>{
   if(img === img_1){
     setImg(img_2);
   }else{
    setImg(img_1);
   }
};

  return  (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         <img style={{borderRadius:'20px'}} src={img} width={'400px'} height={'300px'}/>
         <button onClick={changeImg} style={{width:'200px',marginTop:'20px'}}>Toggle Switch</button>
        
    </div>
  )
}

export default State
