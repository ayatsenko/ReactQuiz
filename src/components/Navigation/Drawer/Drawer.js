import React, { Component } from 'react'
import classes from './Drawer.module.scss'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [
  { to: '/', label: 'Список', exact: true },
  { to: '/auth', label: 'Авторизация', exact: false },
  { to: '/quiz-creator', label: 'Создать тест', exact: false }
]

class Drawer extends Component {
    clickHandler = () => {
      // eslint-disable-next-line react/prop-types
      this.props.onClose()
    }

    renderLinks = () => {
      return links.map((link, index) => {
        return (
          <li key={index}>
             <NavLink
                 to={link.to}
                 activeClassName={classes.active}
                 onClick={this.clickHandler}
             >
                 {link.label}
             </NavLink>
          </li>
        )
      })
    }

    render () {
      // console.log('Drawer', this.props)

      const cls = [classes.Drawer]

      // eslint-disable-next-line react/prop-types
      if (!this.props.isOpen) {
        cls.push(classes.close)
      }

      return (
        <React.Fragment>
           <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {/* eslint-disable-next-line react/prop-types */}
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
        </React.Fragment>
      )
    }
}

export default Drawer
