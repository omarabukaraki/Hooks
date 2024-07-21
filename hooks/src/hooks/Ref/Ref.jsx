import React, { useState } from 'react'
import img from '../../assets/a-cup-of-black-tea.jpg';
import { useRef } from 'react';

// we using useRef to access the element from html or dom 
// in react we don't use document.getElement() we use useRef Hook

const Ref = () => {
    const firstItem = useRef();
    const lastItem = useRef();

    //There is other way to use the useRef hook declare variable
    const count = useRef(0); // mutable, we can change the value
    const [constT] = useState(0);// imitable, we can't change the value


    function moveToLastItem(){
        lastItem.current.scrollIntoView({
            behavior:'smooth',block:'center'
        });
    }

    function changeStyle(){
        firstItem.current.style.cssText ='color:blue;background-color:white;border-radius:10px';
    }
  
  return (
    <>
     <button style={{margin:'10px'}} onClick={changeStyle}>Change style</button>
     <button onClick={moveToLastItem}>Go To Last Item</button>
    <h1 style={{fontSize:'20px'}}>Hi in Coffee Shop</h1>
    <section ref={firstItem} style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    <section style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    <section style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    <section style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    <section style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    <section style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    <section style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    <section ref={lastItem} style={{margin:'10px'}}>
        <h1 style={{margin:'6px',fontSize:'18px'}}>Coffee</h1>
        <img style={{width:'160px',height:'120px'}} src={img}/>
    </section>
    
    
    </>
  )
}

export default Ref
