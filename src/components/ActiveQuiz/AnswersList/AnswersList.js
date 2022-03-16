import React from 'react'
import classes from './AnswersList.module.scss'

const AnswersList = props => (
    <ul className = {classes.AnswersList}>
        {/* eslint-disable-next-line react/prop-types,array-callback-return */}
        {props.answers.map((answer, index) => {

        })}
    </ul>
)

export default AnswersList
