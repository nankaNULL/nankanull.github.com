import React from 'react';
import PropTypes from 'prop-types';
import { loadFiles } from './util';
import _ from 'lodash';
import classNames from 'classnames';
import './style.scss';

let Person = function () {};
Person.prototype.name = "emm",
Person.prototype.age = 21,
Person.prototype.job = "software Engineer",
Person.prototype.sayName = function () {
  console.log(this.name)
}

let person1 = new Person();
let keys = Object.keys(Person.prototype);
console.log(keys)
console.log(Object.keys(person1))
person1.name = "newname";
console.log(Object.keys(person1))
console.log(Object.getOwnPropertyNames(person1.__proto__))
console.log(Object.getOwnPropertyNames(Person.prototype))


export default class live2d extends React.PureComponent{
  state = {
    loadlive2d: null,
    currModel: {
      name: 'model-2',
      height: '750',
      width: '500',
      message: '我是 model-2 点击能触发一个音效',
      offset: '93%',
    },
    modalId: 2
  }

  componentDidMount () {
    this.initLoadLive2d();
  }

  // 初始化 live2d
  initLoadLive2d = () => {
    const { currModel } = this.state;
    loadFiles('./constants/live2d/js/live2d.js')
    .then(() => {
      this.setState({loadlive2d: window.loadlive2d}, () => {
        loadlive2d("live2d", `./constants/live2d/${currModel.name}/model.json`)
      })
    })
  }

  modalChange = ( modalId ) => {
    this.setState({ 
      modalId,
      currModel: Object.assign({}, this.state.currModel, {
        name: `model-${modalId}`,
        message: `我是 model-${modalId} 点击能触发一个音效`
      })
    }, () => {
      window.loadlive2d("live2d", `./constants/live2d/${this.state.currModel.name}/model.json`)
    });
  }
  
  render () {
    const { currModel, modalId } = this.state;
    const boxStyle = {
      width: `${currModel.width}px`, 
      height: `${currModel.height}px`,
    }
    const modals = [1, 2, 3, 4, 5, 6];
    return (
      <div className="page-component-live2d" style={boxStyle}>
        <canvas 
          id="live2d" 
          width={currModel.width} 
          height={currModel.height}>
        </canvas>
        <div className="modal-tab">
          {
            modals.map((item, index) => (
              <div key={index} 
                className={classNames("tab-item pointer", { active: item == modalId })}
                onClick={this.modalChange.bind(this, item)}>
                modal {item}
              </div>
              
            ))
          }
          <div></div>
        </div>
      </div>
    )
  }
}