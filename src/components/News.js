import React, { Component } from 'react'
import NewItem from './NewsItem';

export class News extends Component {
  render() {
    return (
      <div>
        This is news Component
        <NewItem />
      </div>
    )
  }
}

export default News
