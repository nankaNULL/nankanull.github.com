import React from 'react';
import './style.scss';

export default class List extends React.PureComponent{
  render () {
    return (
      <div className="page-list">
        <ul className="container">
          <li className="link-item"><a href="./test/heart.html">给狗贼的小心心 - 马赛克版</a></li>
          <li className="link-item"><a href="./test/heartBeat.html">给狗贼的小心心 - 动画版</a></li>
        </ul>
      </div>
    )
  }
}
