import React, { Component } from 'react'
import classes from './QuizList.module.scss'
import { NavLink } from 'react-router-dom'

class QuizList extends Component {
  renderQuizes () {
    return [1, 2, 3].map((quiz, index) => {
      return (
               <li
                   key={index}
               >
                 <NavLink to={'/quiz/' + quiz}>
                     Tест {quiz}
                 </NavLink>
               </li>
      )
    })
  }

  render () {
    return (
        <div className={classes.QuizList}>
            <div>
                <h1>Список тестов</h1>

                <ul>
                    {this.renderQuizes()}
                </ul>
            </div>
        </div>
    )
  }
}

export default QuizList
