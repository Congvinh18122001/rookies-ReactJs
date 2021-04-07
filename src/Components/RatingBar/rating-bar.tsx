import './rating-bar.css';
import {useState} from 'react'
import React from 'react';
export interface IRatingBarProps{
    max:number;
}

export interface IRateItemProps{
    active : boolean;
    value:number;
    handleClick:Function;

}


export const RateItem = ({handleClick,value,active}:IRateItemProps)=>{

    return(
       <button className={active?'active':'inactive'} onClick={()=>handleClick(value)}>{value}</button>
    );
}
export function RatingBar({max}:IRatingBarProps){
    const [rate,setRate] = useState<number>(0);
    function handleClick(rate:number){
      setRate((pre)=>{
        pre = rate;
        return pre;
    })
}

    const items = Array.from({length: max},
        (_, index) => ({
          value: index + 1,
        }));
    return (
        <>
        <h2>Rating Bar</h2>
        <h1>{rate}</h1>
        {items.map(item => <RateItem handleClick={handleClick}   key={item.value} value={item.value} active={item.value<=rate}/>)}
      </>
    );
}