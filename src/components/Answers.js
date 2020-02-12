import React from 'react';
import Answer from "./Answer";
function Answers(props) {
  return (
  <>
    <Answer letter='a' Answer={props.question.answer_a}
    // dispach={props.handleClick}
    dispatch={props.dispatch}
    selected={props.currentAnswer === 'a'}/>
    
    <Answer letter='b'  
    dispatch={props.dispatch}
    // handleClick={props.handleClick} 
    Answer={props.question.answer_b} 
    selected={props.currentAnswer === 'b'}/>

    <Answer letter='c' 
    dispatch={props.dispatch}
    // handleClick={props.handleClick} 
    Answer={props.question.answer_c} 
    selected={props.currentAnswer === 'c'}/>

    <Answer letter='d' 
    dispatch={props.dispatch}
    // handleClick={props.handleClick} 
    Answer={props.question.answer_d} 
    selected={props.currentAnswer === 'd'}/>
  </>
  );
}

export default Answers;


