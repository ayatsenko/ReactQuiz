import React from 'react'
import classes from './Backdrop.module.scss'

const Backdrop = props => <div className={classes.Backdrop} onClick={
    // eslint-disable-next-line react/prop-types
    props.onClick
} />

export default Backdrop
