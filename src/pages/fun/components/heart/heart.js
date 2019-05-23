import React from 'react';
import './style.scss';

export default class Heart extends React.PureComponent{
  render () {
    return (
      <div className="page-heart">
        <div id="heart"></div>
      </div>
    )
  }
}
