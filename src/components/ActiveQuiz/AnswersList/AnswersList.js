import React from 'react'
import classes from './AnswersList.module.scss'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
  // console.log('List', props)

  return (
    <ul className={classes.AnswersList}>

        {/* eslint-disable-next-line react/prop-types */}
        {props.answers.map((answer, index) => {
          return (
                <AnswerItem
                    key = {index}
                    answer = {answer}
                    onAnswerClick = {
                        // eslint-disable-next-line react/prop-types
                        props.onAnswerClick
                    }
                    state={
                      // eslint-disable-next-line react/prop-types
                      props.state ? props.state[answer.id] : null
                    }
                />
          )
        })}
    </ul>
  )
}

export default AnswersList
