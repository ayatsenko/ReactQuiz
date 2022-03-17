import React from 'react'
import classes from './Button.module.scss'

const Button = props => {
  const cls = [
    classes.Button,
    // eslint-disable-next-line react/prop-types
    classes[props.type]
  ]
  return (
        <button
          onClick={
              // eslint-disable-next-line react/prop-types
              props.onClick
          }
          className={cls.join(' ')}
          disabled={
              // eslint-disable-next-line react/prop-types
              props.disabled
          }
        >
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </button>
  )
}

export default Button
