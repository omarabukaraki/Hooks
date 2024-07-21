

import React, { useMemo } from 'react'

import {  useState } from 'react'



//we use the useMemo Hook to improve the performance of my application
//and we use the useMemo to render just the function in the component not all component 
//In this case the counterOne effect in counterTwo because the all component is re render 



const Memo = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    function changeOne() {
        setCounterOne(prev => prev + 1);
    }
    function changeTwo() {
        setCounterTwo(prev => prev + 1);
    }
   //we use the useMemo to render just the function 
  const isEven =  useMemo(()=>{
        let i = 0;
        while(i <2000000000) i++;
        if(counterOne % 2 ===0){
            return 'even';
        }else{
            return 'odd';
        }
    },[counterOne])

    return (
        <>
            <button onClick={changeOne}>{counterOne}</button>
            <h3>{isEven}</h3>
            <button onClick={changeTwo}>{counterTwo}</button>

        </>
    )
}

export default Memo
