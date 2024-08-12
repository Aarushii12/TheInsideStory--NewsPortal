import React, { Component } from 'react'
import Load from './Load.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Load} alt="loading" />


      </div>
    )
  }
}

export default Spinner
