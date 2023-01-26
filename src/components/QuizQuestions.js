import React from 'react'
import Button from './Button'

const QuizQuestions = ({ questions, currentQuestion, onClick, getSelected }) => {
  return (
    <div className='quizQuestions'>
        <div className="question">
            <h2>{questions[currentQuestion].question}</h2>
            <img src={questions[currentQuestion].img} alt="" />
        </div>
        <div className="answers">

            <div className="answer">
                <input className='quizAnswer' type="radio" name='answer' id={questions[currentQuestion].a} value={questions[currentQuestion].a} onClick={(e) => getSelected(e)} />
                <label htmlFor="answer-a">{questions[currentQuestion].a}</label>
            </div>

            <div className="answer">
                <input className='quizAnswer' type="radio" name='answer' id={questions[currentQuestion].b} onClick={(e) => getSelected(e)}
                value={questions[currentQuestion].b}
                  />
                <label htmlFor="answer-b">{questions[currentQuestion].b}</label>
            </div>

            <div className="answer">
                <input className='quizAnswer' type="radio" name='answer' id={questions[currentQuestion].c} onClick={(e) => getSelected(e)} value={questions[currentQuestion].c}  />
                <label htmlFor="answer-c">{questions[currentQuestion].c}</label>
            </div>

            <div className="answer">
                <input className='quizAnswer' type="radio" name='answer' id={questions[currentQuestion].d} onClick={(e) => getSelected(e)} value={questions[currentQuestion].d} />
                <label htmlFor="answer-d">{questions[currentQuestion].d}</label>
            </div>

        </div>
        <Button text={'Next'} onClick={onClick} /> 
    </div>
  )
}

export default QuizQuestions