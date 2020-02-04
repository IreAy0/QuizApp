import React from 'react';


export default function Answer(props) {
  let classes =['answer'];

  if (props.selected){
    classes.push('selected');
  }
  return (
    <button  value={props.letter} 
    onClick={props.handleClick} 
    className={classes.join(' ')}>

<span className="letter">{props.letter}</span>{props.Answer}
        </button>
  );
}
