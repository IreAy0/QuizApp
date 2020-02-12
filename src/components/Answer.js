import React from 'react';

export const SET_ERROR = 'SET_ERROR';
export const SET_CURRENT_ANSWER = 'SET_CURRENT_ANSWER';

export default function Answer(props) {
  let classes =['answer'];
  const handleClick = e =>{
    props.dispatch({type: SET_CURRENT_ANSWER, currentAnswer:e.target.value})
    // setCurrentAnswer(e.target.value)
    props.dispatch({type: SET_ERROR, error: ''})
    // setError('');
  
  } ;
  
  if (props.selected){
    classes.push('selected');
  }
  return (
    <button  value={props.letter} 
    onClick={handleClick} 
    className={classes.join(' ')}>

<span className="letter">{props.letter}</span>{props.Answer}
        </button>
  );
}

// good practice: always create a new folder for types then import it to your component