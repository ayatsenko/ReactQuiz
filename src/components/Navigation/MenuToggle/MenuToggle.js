import React from 'react'
import classes from './MenuToggle.module.scss'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle,
    'fa'
  ]

  // eslint-disable-next-line react/prop-types
  if (props.isOpen) {
    cls.push('fa-times')
    cls.push(classes.open)
  } else {
    cls.push('fa-bars')
  }

  return (
        <i
            className={cls.join(' ')}
            onClick={
              // eslint-disable-next-line react/prop-types
              props.onToggle
            }
        />
  )
}

export default MenuToggle
