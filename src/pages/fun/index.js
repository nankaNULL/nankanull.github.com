import React from 'react';
import { Link } from 'react-router-dom';
import Live2d from '@/components/live2d';
import './style.scss';

export default class List extends React.PureComponent{
  render () {
    return (
      <div className="page-fun clearfix">
        <ul className="container">
          <li className="link-item">
            <Link to="/home">给狗贼的小心心 - 马赛克版</Link>
          </li>
          <li className="link-item">
            <a href="/home">给狗贼的小心心 - 动画版</a>
          </li>
        </ul>  
        <div className="live2d" >
          <Live2d />
        </div>
      </div>
    )
  }
}