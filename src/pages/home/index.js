import React from 'react';
import { Card, Button, Input } from '@alifd/next';
import _ from "lodash";
import GridLayout from '@/components/gridLayout';
import { API } from '@/api';
import io from 'socket.io-client';
import './style.scss';

const socket = io.connect(`192.168.1.129:3000`);

export default class Home extends React.PureComponent {
  state = {
    gridLayoutItem: [],
    layout: [],
    isCollect: false,
    chatList: [],
    chatConnect: ''
  };

  componentDidMount() {
    this.generateLayout();
    // 连接
    socket.on('connect', () => {
      console.log("conntect");
    });
    // 接收
    socket.on('message', data => {
      let chatList = _.cloneDeep(this.state.chatList);
      if (Object.keys(data).length > 0) {
        chatList.push(data);
        this.setState({ chatList })
      }
    });
  }

  componentWillUnmount() {
    // 监听与服务器连接断开事件
    socket.on('disconnect', () => {
      console.log('连接断开成功');
    });
  }

  test = () => {
    API.apiTest().then(res => {
      console.log(res);
    })
  }

  addComponent = () => {
    const { gridLayoutItem } = this.state;
    const index = gridLayoutItem.length == 0 ? 1 : gridLayoutItem[gridLayoutItem.length - 1].id + 1;
    gridLayoutItem.push({
      id: index,
      title: "title" + index,
      content: "content" + index
    })
    this.setState({ gridLayoutItem }, () => {
      this.generateLayout()
    })
  }

  onRemoveItem = (id) => {
    const { gridLayoutItem, layout } = this.state;
    this.setState({
      gridLayoutItem: gridLayoutItem.filter(item => item.id !== id),
    }, () => {
      this.generateLayout()
    })
  }

  generateDOM() {
    return this.state.gridLayoutItem.map((item, index) => {
      return (
        <div key={item.id} style={{ padding: 10 }}>
          <div className="clearfix border-b" >
            <span style={{ float: 'left' }}>{item.title}</span>
            <span className="pointer" style={{ float: 'right' }} onClick={this.onRemoveItem.bind(this, item.id)}>x</span>
          </div>
          <div className="text" key={index}>
            <span>{item.content}</span>
          </div>
        </div>
      );
    });
  }

  generateLayout() {
    const { gridLayoutItem, layout } = this.state;
    let newLayout = gridLayoutItem.map((item, index) => {
      let isNewLayout = layout.length === 0 || (layout.length + 1 === gridLayoutItem.length && index === layout.length);
      if (isNewLayout) {
        return {
          x: index % 3 * 4,
          y: parseInt(index / 3) * 4,
          w: 4,
          h: 4,
          i: item.id.toString()
        }
      } else {
        return layout.filter(layoutItem => item.id == layoutItem.i)[0]
      }
    });
    this.setState({ layout: newLayout })
  }

  onLayoutChange = (layout) => {
    this.setState({ layout })
  }

  onResizeStop = (layout, oldItem, newItem) => {
    // console.log(oldItem)
    // console.log(newItem)
  }

  handleClick = () => {
    this.setState({ isCollect: !this.state.isCollect })
  }

  // 聊天消息发送
  sendMessage = () => {
    const { chatConnect } = this.state;
    if (chatConnect) {
      socket.emit('message', chatConnect)
      this.setState({ chatConnect: '' })
    }
  }

  render() {
    const { isCollect, layout, chatList, chatConnect } = this.state;

    return (
      <div className="page-home grid-drag-handle" style={{ padding: 20, background: '#fff' }}>
        <Card title="fusion design 效果测试">
          <Button type="normal" className="mr-10">Normal</Button>
          <Button type="primary" className="mr-10">Prirmary</Button>
          <Button type="secondary">Secondary</Button>
        </Card>
        <Card title="iconfont 效果测试" className="color-primary mt-10">
          <p><i id="some_elemenent" className="yuwan icon-bilibili"> LOGO </i></p>
          <p><i className="yuwan icon-zhiboguankanshu"> 观看人数 </i></p>
          <p><i className="yuwan icon-Bbi"> 投币 </i></p>

          <p><i className={'pointer yuwan ' + (isCollect ? "icon-shoucangtianchong" : "icon-shoucang")} onClick={this.handleClick}> 收藏 </i></p>
          <p><i className="yuwan icon-zan"> 点赞 </i></p>
        </Card>
        <Card title="react-grid-layout 拖拽布局" className="color-primary mt-10 " contentHeight="auto" >
          <div>
            <div style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: 10 }}>
              <Button type="primary" onClick={this.addComponent}>添加组件</Button>
            </div>
            <GridLayout
              layout={layout}
              isDraggable={true}
              isResizable={true}
              onLayoutChange={this.onLayoutChange}
              onResizeStop={this.onResizeStop}
            >
              {this.generateDOM()}
            </GridLayout>
          </div>
        </Card>
        <Card title="websocket 聊天室" className="color-primary mt-10" contentHeight="auto" >
          <div className="chat-room">
            <ul className="room-list">
              {
                chatList.map(item => <li className="list-item" key={item.createAt}>
                  <p>
                    <span className="mr-10">{item.user}</span>
                    <span className="text-gray">{item.createAt}</span>
                  </p>
                  <p className="item-content">{item.content}</p>
                </li>)
              }
            </ul>
            <div>
              <Input value={chatConnect} onChange={chatConnect => this.setState({ chatConnect })} />
              <Button type="primary" onClick={this.sendMessage} className="ml-10">提交</Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
