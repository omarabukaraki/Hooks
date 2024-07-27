// import React, { useEffect , useState} from 'react'

// const Effect = () => {

//     //component lifeCycle
//     // Mount -> update -> UnMount

//     // useEffect(fun, dep)
//     // u can use many useEffect 
//     //The use effect is function that run when the content in the array change.

//     const [counter, setCounter] = useState(0);
//     const [counterX, setCounterX] = useState(0);


//     useEffect(()=>{
//         console.log('Mount counter')
//         return ()=>{
//             console.log('unMount counter')
//         }
//     }, [counter]);


//     useEffect(()=>{
//         console.log('Mount counterX')
//         return ()=>{
//             console.log('unMount counterX')
//         }
//     }, [counterX]);


//     function updateCounter(){
//         return setCounter(prev => prev + 1);;
//     }
//     function updateCounterX(){
//         return setCounterX(prev => prev + 1);;
//     }

//   return (
//     <div>
//         <>{counter}</>
//       <button onClick={updateCounter}>Change Counter</button>
//       <button onClick={updateCounterX}>Change Counter X</button>

//     </div>
//   )
// }

// export default Effect



// import React, { useEffect } from 'react';
// import { useState } from 'react';

// const Effect = () => {

//     const [users, setUser] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [usersWithFilter, setFilteredUser] = useState([]);


//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=>response.json())
//         .then(result=>{setUser(result)})
//         .catch(e=>console.log(e));  
//     },[]);

//     useEffect(()=>{
//           if(users.length !==0){
//             console.log(users)
//           }
//     },[users]);

//     useEffect(()=>{
//         setFilteredUser(users)
//     },[users]);

//     useEffect(()=>{
//         let result =  users.filter((user)=>{
//             return user.name.toLowerCase().includes(inputValue.trim())
//         });
//         setFilteredUser(result);
//     },[inputValue]);

//     function printInput(e){
//       setInputValue(e.target.value);  
//     }


//   return (
//    <>
//      <input className='inputFiled' onInput={printInput}/>
//      {usersWithFilter?.map((user)=>{
//         return user !== '' ? <div key={user.id} >
//         <p style={{fontSize:'12px'}}>{user.name}</p>
//          </div> : <></>
//      })}
//    </>
//   )
// }

// export default Effect


//pagination idea using hooks useState and useEffect.


import React, { useEffect, useState } from 'react'

const Effect = () => {

  const [todos, setTodos] = useState([]);
  const [limit,setLimit] = useState(5);

  useEffect(() => {
    fetch(`https://dummyjson.com/todos?limit=${limit}&skip=0`)
    .then(res => res.json())
    .then((result=>{
      setTodos(result);
      console.log(result);
    }));
  }, [limit]);

  const showMore = ()=>{
    console.log(limit);
    setLimit(n=>n+10);
  }

  return (
 <div>
     <div style={{display:'flex',flexWrap:'wrap'}}>
      {
      todos.todos?.map(todo=>{
        return <div  key={todo.id} style={{backgroundColor:'red', width:'100px',margin:'10px'}}>
          <p >{todo.todo}</p>
        </div>
      })
      }
    </div>
     <button onClick={showMore}>show more</button>
 </div>
  )
}

export default Effect
























