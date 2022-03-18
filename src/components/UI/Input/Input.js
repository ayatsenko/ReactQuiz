import React from 'react'
import classes from './Input.module.scss'

function isInvalid ({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  // eslint-disable-next-line react/prop-types
  const inputType = props.type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  // eslint-disable-next-line no-constant-condition
  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>
                {/* eslint-disable-next-line react/prop-types */}
                {props.label}
            </label>
            <input
                type={inputType}
                id={htmlFor}
                value={
                    // eslint-disable-next-line react/prop-types
                    props.value
                }
                onChange={
                    // eslint-disable-next-line react/prop-types
                    props.onChange
                }
            />

            {
             isInvalid(props)
             // eslint-disable-next-line react/prop-types
               ? <span>{props.errorMessage || 'Введите верное значение'}</span>
               : null
            }

            {/* eslint-disable-next-line react/prop-types */}
        </div>
  )
}

export default Input
