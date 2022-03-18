import React, { Component } from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../components/UI/Button/Button'
import { createControl } from '../../form/formFrame'
import Input from '../../components/UI/Input/Input'
import Auxilary from '../../hoc/Auxilary/Auxilary'

function createOptionControl (number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMesage: 'Значение не может быть пустым',
      id: number
    }, { required: true }
  )
}

function createFormControl () {
  return {
    question: createControl(
      {
        label: 'Введите вопрос',
        errorMesage: 'Вопрос не может быть пустым'
      },
      {
        equired: true
      }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

class QuizCreator extends Component {
    state = {
      quiz: [],
      fromControls: createFormControl()
    }

  submitHandler = event => {
    event.preventDefault()
  }

  addQuestionHandler = () => {
    console.log('addQuestionHandler')
  }

  createQuizHandler = () => {
    console.log('createQuizHandler')
  }

  changeHandler = (value, controlName) => {
    console.log('changeHandler')
  }

  renderControls () {
    return Object.keys(this.state.fromControls).map((controlName, index) => {
      const control = this.state.fromControls[controlName]

      return (
          <Auxilary key={controlName + index}>
            <Input
                label={control.label}
                value={control.value}
                valid={control.valid}
                shouldValidate={!!control.validation}
                touched={control.touched}
                errorMessage={control.errorMessage}
                onChange={event => this.changeHandler(event.target.value, controlName)}
             />
            { index === 0 ? <hr /> : null}
          </Auxilary>
      )
    })
  }

  render () {
    return (
      <div className={classes.QuizCreator}>
         <div>
            <h1>Созадние тестов</h1>
                <form onSubmit={this.submitHandler}>

                    { this.renderControls() }

                    <select></select>

                    <Button
                        type="primary"
                        onClick={this.addQuestionHandler}
                    >
                        Добавить вопрос
                    </Button>
                    <Button
                        type="success"
                        onClick={this.createQuizHandler}
                    >
                        Созадть тест
                    </Button>
                </form>
         </div>
      </div>
    )
  }
}

export default QuizCreator
