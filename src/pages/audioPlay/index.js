import React from 'react';
import { Icon, Button } from '@alifd/next';
import './style.scss';
import moment from 'moment';

const musicLists = [{
  url: '/images/蓝褶 - 小城谣 ft.Clever勺子（Cover 胡碧乔）.mp3',
  name: '小城谣 ft.Clever勺子（Cover 胡碧乔）',
  author: '蓝褶'
},{
  url: '/images/李雪莱 - 好想你.mp3',
  name: '好想你',
  author: '李雪莱'
},{
  url: '/images/相対性理論 - ヤミヤミ (黑暗) [mqms].mp3',
  name: 'ヤミヤミ (黑暗) [mqms]',
  author: '相対性理論'
}];

export default class AudioPlay extends React.PureComponent{
  state = {
    isPlay: false,
    bufferedTime: 0, // 缓冲长度 / 2.9
    currentTime: 0, // 当前播放位置 / 0.24
    duration: 0, // 音频长度 / 10.31
    musicInfo: {},
    musicIndex: 0,
  }

  componentDidMount () {
    this.setState({
      musicInfo: musicLists[0], 
      musicIndex: 0,
      isPlay: false,
      bufferedTime: 0,
      currentTime: 0,
    })
    this.audioPlay.oncanplay = () => {
      this.setState({duration: this.audioPlay.duration})
    }
  }

  // 设置当前播放时间
  setTimeParams = () => {
    let buffered = this.audioPlay.buffered; // 缓冲timeRanges对象
    let params = {
      bufferedTime: buffered.length ? buffered.end(0) : 0,
      currentTime: this.audioPlay.currentTime
    }
    this.setState({...params})
  }

  // 重置播放器 
  resetPlayer = () => {
    this.audioPlay.oncanplay = () => {
      let params = {
        bufferedTime: 0,
        currentTime: 0,
        duration: this.audioPlay.duration
      }
      this.setState({...params});
      this.state.isPlay ? this.audioPlay.play() : this.audioPlay.pause();
    };
  }

  // 格式化时间
  formatTime = (time) => {
    return moment(time * 1000).format('mm:ss');
  }

  // 点击播放，暂停
  handleAudioPlay = () => {
    this.setState({isPlay: !this.state.isPlay})
      
    let playbackRate = this.audioPlay.playbackRate; // 音频播放速度
    let volume = this.audioPlay.volume; // 音量 / 1
    if ( !this.state.isPlay ) {
      this.audioPlay.play();
      this.audioPlay.ontimeupdate = this.listenPlay;
    } else {
      this.audioPlay.pause();
    }
  }

  // 监听播放进度
  listenPlay = () => {
    this.setTimeParams();
    this.audioPlay.ended && this.handleNextPlay();
  }

  // 下一首
  handleNextPlay = () => {
    let idx = this.state.musicIndex === musicLists.length - 1 ? 0 : this.state.musicIndex + 1;
    this.setMusicIndex(idx);
  }

  // 上一首
  handlePrevPlay = () => {
    let idx = this.state.musicIndex === 0 ? musicLists.length - 1 : this.state.musicIndex - 1;
    this.setMusicIndex(idx);
  }

  // 设置当前播放的是菜单第几首
  setMusicIndex = (idx) => {
    this.setState({
      musicInfo: musicLists[idx],
      musicIndex: idx
    })
    this.resetPlayer();
  }

  onDragStart = () => {
    console.log("onDragStart")
  }

  onDragEnd = () => {
    console.log("onDragEnd")
  }

  onDragOver = () => {
    console.log("onDragOver")
  }

  onDragEnter = () => {
    console.log("onDragEnter")
  }

  onDragLeave = () => {
    console.log("onDragLeave")
  }

  onDrag = (e) => {
    console.log("onDrag")
    console.log(e.clientX)
    // this.setState
  }
  
  render () {
    const { isPlay, bufferedTime, currentTime, duration, musicInfo } = this.state;

    return (
      <div className="page-audio-play">
        <div className="play-action">
          <span>{musicInfo.name}</span>
          <i className="yuwan icon-play-next prev" onClick={this.handlePrevPlay}></i> 
          <i className={'yuwan ' + (isPlay ? 'icon-play' : 'icon-pause')} onClick={this.handleAudioPlay}></i> 
          <i className="yuwan icon-play-next" onClick={this.handleNextPlay}></i> 
        </div>
        <audio 
          src={musicInfo.url}
          ref={(audio) => this.audioPlay = audio} />
        <div className="progress">
          <div className="progress-bar">
            <div className="bar-total"></div>
            <div className="bar-buffer" style={{width: bufferedTime / duration * 100 + '%'}}></div>
            <div className="bar-current" style={{width: currentTime / duration * 100 + '%'}}></div>
            <div 
              className="bar-box" 
              style={{left: currentTime / duration * 100 + '%'}}
              onDragStart={this.onDragStart}
              onDragEnd={this.onDragEnd}
              onDragOver={this.onDragOver}
              onDragEnter={this.onDragEnter}
              onDragLeave={this.onDragLeave}
              onDrag={this.onDrag}>
            </div>
          </div>
          <div className="progress-time">
            <span>{this.formatTime(currentTime)}</span> / <span>{this.formatTime(duration)}</span>
          </div>
        </div>
        <ul className="music-list">
        {
          musicLists.map((item, index) => <li className="list-item" key={index} onClick={this.setMusicIndex.bind(this,index)}><span>{item.author + ' - ' + item.name}</span></li>)
        }
        </ul>
      </div>
    )
  }
}
