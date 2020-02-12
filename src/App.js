import React, {useState, useReducer} from 'react';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import './App.css';



export const SET_CURRENT_ANSWER = 'SET_CURRENT_ANSWER';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SET_ERROR = 'SET_ERROR';
export const SET_SHOW_RESULTS = 'SET_SHOW_RESULTS';
export const SET_ANSWERS = 'SET_ANSWERS';
export const RESET_QUIZ = 'RESET_QUIZ';


function quizReducer(state, action) {
  switch (action.type) {
      case SET_CURRENT_ANSWER:
          return {
              ...state,
              currentAnswer: action.currentAnswer,
          };
      case SET_CURRENT_QUESTION:
          return {
              ...state,
              currentQuestion: action.currentQuestion,
          };
      case SET_ERROR:
          return {
              ...state,
              error: action.error,
          };
      case SET_SHOW_RESULTS:
          return {
              ...state,
              showResults: action.showResults,
          };
      case SET_ANSWERS:
          return {
              ...state,
              answers: action.answers,
          };
      case RESET_QUIZ:
          return {
              ...state,
              answers: [],
              currentQuestion: 0,
              currentAnswer: '',
              showResults: false,
              error: '',
          };
      default:
          return state;
  }
}

function App() {
  const initialState = {
    currentQuestion: 0,
    currentAnswer:'',
    answers:[],
    showResults: false,
    error: '',
  };
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {currentQuestion, currentAnswer, answers, showResults, error} = state;
  




// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [currentAnswer, setCurrentAnswer] = useState("");
// const [answers, setAnswers] = useState([]);
// const [error, setError] = useState(' ');
// const [showResults, setShowResults] = useState(false);



  const questions = [ 
    {
        id: 1,
        question: 'Which statement about Hooks is not true?',
        answer_a:
            'Hooks are 100% backwards-compatible and can be used side by side with classes',
        answer_b: 'Hooks are still in beta and not available yet',
        answer_c:
            "Hooks are completely opt-in, there's no need to rewrite existing code",
        answer_d: 'All of the above',
        correct_answer: 'b',
    },
    {
        id: 2,
        question: 'Which one is not a Hook?',
        answer_a: 'useState()',
        answer_b: 'useConst()',
        answer_c: 'useReducer()',
        answer_d: 'All of the above',
        correct_answer: 'b',
    },
    {
        id: 3,
        question: 'What Hook should be used for data fetching?',
        answer_a: 'useDataFetching()',
        answer_b: 'useApi()',
        answer_c: 'useEffect()',
        answer_d: 'useRequest()',
        correct_answer: 'c',
    },
];

const question = questions[currentQuestion];

 

const next = () => {
  const answer = {questionId: question.id, answer: currentAnswer};
  if (!currentAnswer){
    // setError('Pleases select an option');
    dispatch({type: SET_ERROR, error: 'Please select an option'})
    return;
  }
  answers.push(answer);
  // setAnswers(answers);
  dispatch({type: SET_ANSWERS, answers})
  // setCurrentAnswer('');
  dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''})

  if (currentQuestion + 1 < questions.length){
    // setCurrentQuestion(currentQuestion + 1);
    dispatch({type: SET_CURRENT_QUESTION, currentQuestion: currentQuestion + 1})
    return;
  }
  // setShowResults(true)
  dispatch({type: SET_SHOW_RESULTS, showResults: true})
}
const renderError = () =>{
  if(!error){
    return;
  }
return <div className="error">{error}</div>
}

const renderResultMark = (question, answer) => {
  if(question.correct_answer === answer.answer){
    return <span className="correct">Correct</span>
  }
  return <span className='failed'>Failed</span>
}
 
 const renderResultsData = () => {
   return answers.map(answer => {
     const question = questions.find(
        question => question.id === answer.questionId
     );
   return <div key={question.id}>{question.question} - {renderResultMark(question, answer)}</div>
   });
 };
 
const restart = () =>{
 
  dispatch({type: RESET_QUIZ});
  
}



if (showResults){
return (
  <div className="container results">
    <h2>Results</h2>
   <ul>{renderResultsData()}</ul>
    <button className='btn btn-primary' onClick={restart}>
     Restart
    </button>
  </div>
)
}
else {
  return (
    <div className="container">
      <Progress total={questions.length} current={currentQuestion + 1} />
      <Question question={question.question} />
    {renderError()}
    {/* // handleClick={handleClick} was changed to dispatch={dispatch} */}
    <Answers  question={question} 
    currentAnswer={currentAnswer}
    //  handleClick={handleClick}
    dispatch={dispatch}
     /> 
     
    <button className='btn btn-primary' onClick={next}>
      Confirm and Continue
    </button>
    </div>
    
  );
}

}
export default App;

//Good practice: set the reducers in a different file...the reducer function and types