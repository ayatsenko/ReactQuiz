import React from 'react'
import classes from './AnswerItem.module.scss'

const AnswerItem = (props) => {
  // console.log('Item', props)

  const cls = [classes.AnswerItem]

  // eslint-disable-next-line react/prop-types
  if (props.state) {
    // eslint-disable-next-line react/prop-types
    cls.push(classes[props.state])
  }

  return (
    <li
        className={cls.join(' ')}
        onClick={() =>
        // eslint-disable-next-line react/prop-types
          props.onAnswerClick(props.answer.id)}
    >
      {/* eslint-disable-next-line react/prop-types */}
        { props.answer.text }

    </li>
  )
}

export default AnswerItem
