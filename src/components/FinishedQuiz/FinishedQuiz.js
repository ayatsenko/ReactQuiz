import React from 'react'
import classes from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const FinishedQuiz = props => {
  console.log('FinishedQuiz', props)
  // eslint-disable-next-line react/prop-types
  const successCount = Object.keys(props.results).reduce((total, key) => {
    // eslint-disable-next-line react/prop-types
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {props.quiz.map((quizItem, index) => {
                  // eslint-disable-next-line no-debugger
                  // debugger
                  const cls = [
                    'fa',
                    // eslint-disable-next-line react/prop-types
                    props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                    // eslint-disable-next-line react/prop-types
                    classes[props.results[quizItem.id]]
                  ]
                  return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />&nbsp;
                        </li>
                  )
                })}
            </ul>

            {/* eslint-disable-next-line react/prop-types */}
            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                {/* eslint-disable-next-line react/prop-types */}
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to="/">
                    <Button type="success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
  )
}

export default FinishedQuiz
