import React from 'react';
import Answer from "./Answer";
function Answers(props) {
  return (
  <>
    <Answer letter='a' Answer={props.question.answer_a}
    handleClick={props.handleClick}
    selected={props.currentAnswer === 'a'}/>
    
    <Answer letter='b'  
    handleClick={props.handleClick} 
    Answer={props.question.answer_b} 
    selected={props.currentAnswer === 'b'}/>

    <Answer letter='c' 
    handleClick={props.handleClick} 
    Answer={props.question.answer_c} 
    selected={props.currentAnswer === 'c'}/>

    <Answer letter='d' handleClick={props.handleClick} Answer={props.question.answer_d} selected={props.currentAnswer === 'd'}/>
  </>
  );
}

export default Answers;


