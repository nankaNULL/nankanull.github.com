import React from 'react';
import PropTypes from 'prop-types';
import { loadFiles } from './util';

export default class live2d extends React.PureComponent{
  state = {
    loadlive2d: null,
    currModel: {
      name: 'model-2',
      height: '750',
      width: '500',
      message: '我是 model-2 点击能触发一个音效',
      offset: '93%',
    }
  }

  componentDidMount () {
    this.initLoadLive2d();
  }

  // 初始化 live2d
  initLoadLive2d = () => {
    const { currModel } = this.state;
    loadFiles('./constants/live2d/js/live2d.js')
    .then(() => {
      let loadlive2d = window.loadlive2d;
      loadlive2d("live2d", `./constants/live2d/${currModel.name}/model.json`)
    })
  }
  
  render () {
    const { currModel } = this.state;
    const boxStyle = {
      width: `${currModel.width}px`, 
      height: `${currModel.height}px`,
    }
    return (
      <div style={boxStyle}>
        <canvas 
          id="live2d" 
          width={currModel.width} 
          height={currModel.height}>
        </canvas>
      </div>
    )
  }
}