// import React, { useReducer } from 'react'

// const Reducer = () => {

//     // const [state, dispatch] = useReducer(reducer, initState)
//     // reducer: is the action that edit in initState ,dispatch is functions 
//     // state,initState is variable or states

//     const initState = {count: 0};

//     const reducer = (state, action)=>{
//         if(action.type === 'up'){
//             return {count: state.count + 1};
//         }else if(action.type === 'down'){
//             return {count: state.count - 1};
//         }
//     };

//     const [state, dispatch] = useReducer(reducer, initState)


//   return (
//     <>
//     <div>{state.count}</div>
//     <button onClick={()=>{dispatch({type:'up'})}}>Up</button>
//     <button onClick={()=>{dispatch({type:'down'})}}>Down</button>
//     </>
//  )
// }

// export default Reducer



import React, { useReducer } from 'react'

import './Reducer.css'


const Reducer = () => {


    const initState = {
        name: '',
        email: '',
        password: ''
    };

    const reducer = (state, action) => {
        
        if (action.type === 'name') {
            return ;
        }
        return state;
    };


    const [state, dispatch] = useReducer(reducer, initState);


    const handelSubmit = () => {
        event.preventDefault()
        console.log(state)
    };


    return (
        <>
            <form>
                <div className='inputFiled' >
                    <label  >Name </label>
                    <input id={'name'}  onChange={()=>{
                        dispatch({ type:  'name', value: '' })
                    }} />
                </div>

                <div className='inputFiled'>
                    <label  >Email </label>
                    <input id={'email'}  onChange={()=>{
                    dispatch({ type:  'email', value: '' })
                }} />
                </div>

                <div className='inputFiled' >
                    <label  >Password </label>
                    <input id={'password'} onChange={()=>{
                    dispatch({ type:  'password', value: '' })
                }}/>
                </div>
                <div className='btns'>
                    <button onClick={handelSubmit}>Submit</button>
                    <button>Rest</button>
                </div>
            </form>
        </>
    )
}

export default Reducer


