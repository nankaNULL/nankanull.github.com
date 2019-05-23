import React from 'react';
import Live2d from '@/components/live2d';
import './style.scss';

export default class List extends React.PureComponent{
  render () {
    return (
      <div className="page-fun clearfix">
        <ul className="container">
          <li className="link-item"><a href="./heart/heart.html">给狗贼的小心心 - 马赛克版</a></li>
          <li className="link-item"><a href="./heart/heartBeat.html">给狗贼的小心心 - 动画版</a></li>
        </ul>  
        <div className="live2d" >
          <Live2d />
        </div>
      </div>
    )
  }
}