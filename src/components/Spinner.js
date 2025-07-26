import React, { Component } from 'react'
import Settings from './Settings.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={Settings} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
