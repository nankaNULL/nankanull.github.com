import React from 'react'
import './style.scss';

export default class HeartBeat extends React.PureComponent{
  render () {
    return (
      <div className="page-heart-beat">
        <div class="heart-box center">
          <div class="heart" id="left"></div>
          <div class="heart" id="right"></div>
        </div>
        <div class="back-line center">
          <div class="line center" id="line-1"></div>
          <div class="line center" id="line-2"></div>
          <div class="line center" id="line-3"></div>
          <div class="line center" id="line-4"></div>
        </div>
      </div>
    )
  }
}
