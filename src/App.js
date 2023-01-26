import questions from './questions';
import { useState } from 'react';
import Header from './components/Header';
import QuizQuestions from './components/QuizQuestions';
import Button from './components/Button';

function App() {
  const [quizQuestions, setQuizQuestions] = useState(questions)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(true)
  
  // Create nextQuestion function
  const nextQuestion = () => {
    // Run deselectAnswers
    deselectAnswers()
    setAnswered(false)
  
    if(selectedAnswer !== ''){
      setAnswered(true)
       // Check if the selectedAnswer is equal to the correct answer
      if(selectedAnswer === quizQuestions[currentQuestion].correct){
      // Increment score by 1
      setScore(score + 1)
    }
    // Increment to next question
    setCurrentQuestion(currentQuestion + 1)
    }
    // Reset selectedAnswer
    setSelectedAnswer('')
  }

  // Create a functiong called getSelected
  const getSelected = (e) => {
    // setSelectedAnswer to the id of the option selected
    setSelectedAnswer(e.target.value)
  }

  const deselectAnswers = () => {
    // Select all the quizAnswers in the dom
    const quizAnswers = document.querySelectorAll('.quizAnswer')
    // Loop through each and un check each checked item
    quizAnswers.forEach(answer => answer.checked = false)
  }
  // Restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
  }

  return (
    <div className="quiz">
      <Header />
      {answered ? '' : <h2 className='notAnswered'>Please select an answer</h2> }
      {currentQuestion >= quizQuestions.length ? <h1 className='finalScore'>You scored {score} / {quizQuestions.length} <Button onClick={restartQuiz} text={'Restart'} /></h1> : <QuizQuestions questions={questions} currentQuestion={currentQuestion} onClick={nextQuestion} getSelected={getSelected} />} 
    </div>
  );
}

export default App;
