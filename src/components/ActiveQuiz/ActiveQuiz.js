import React from 'react'
import classes from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
  // console.log('ActiveQuiz', props)

  return (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong>{props.answerNumber}</strong>.&nbsp;
                {/* eslint-disable-next-line react/prop-types */}
                {props.question}
            </span>
            {/* eslint-disable-next-line react/prop-types */}
            <small>{props.answerNumber} из {props.quizLenght}</small>
        </p>

        <AnswersList
            state={
                // eslint-disable-next-line react/prop-types
                props.state
            }
            answers={
                // eslint-disable-next-line react/prop-types
                props.answers
            }
            onAnswerClick={
            // eslint-disable-next-line react/prop-types
                props.onAnswerClick
            }
           />
    </div>
  )
}

export default ActiveQuiz
