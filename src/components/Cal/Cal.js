import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () =>{
    const [inputValue,setInputValue] =useState(0);


    const allButArr= [
        {value:0 , btFun : ()=> {setInputValue(0)}}, 
        {value:1 , btFun : ()=> {setInputValue(1)}}, 
        {value:2 , btFun : ()=> {setInputValue(2)}},
        {value:3 , btFun : ()=> {setInputValue(3)}},
        {value:4 , btFun : ()=> {setInputValue(4)}},
        {value:5 , btFun : ()=> {setInputValue(5)}}
    ];
    
        return(
            <div>
                <p>This is my Cal.js {inputValue}</p>
                <CalWrapper allButArr={allButArr}/>
            </div>
        )
};

export default Cal;
