import React, { Component } from 'react'
import classes from './Layout.css'

// eslint-disable-next-line no-unused-vars
class Layout extends Component {
  render () {
    return (
            <div className={classes.Layout}>

                <main>
                    {/* eslint-disable-next-line react/prop-types */}
                    {this.props.children}
                </main>
            </div>
    )
  }
}

export default Layout
