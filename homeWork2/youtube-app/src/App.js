import React, { Component } from 'react';

import './App.css';
import YTSearch from 'youtube-api-search';
import {AddVideoList} from './components/add-video-list.js';
import {AddMainVideo} from './components/add-main-video.js';
import {DebounceInput} from 'react-debounce-input';


class App extends Component {
  constructor(){
    super();
    this.state ={
      serchInput:'wolraks toi',
      dataArray:[],
      videoId:"",
      title:"",
      channelTitle:"",
      dataTime:"",
      description:""
    }
  }

  yotubeSerch = (serchText)=>{
    const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;
    YTSearch({ key: API_KEY, term: serchText }, data => {
      //console.log(data);
      this.setState({
          dataArray: data,
          videoId:data[0].id.videoId,
          channelTitle:data[0].snippet.channelTitle,
          title: data[0].snippet.title,
          dataTime:data[0].snippet.publishedAt,
          description: data[0].snippet.description
        });
    });
  }

  changeFirstVideo = (id)=>{
    const {dataArray}= this.state;
    this.setState({
      videoId:dataArray[id].id.videoId,
      title: dataArray[id].snippet.title,
      description: dataArray[id].snippet.description
    });
  }

  createList = ()=>{
    const {dataArray} = this.state;
    return dataArray.map((el, ind)=>{
      return <AddVideoList 
              link={el.snippet.thumbnails.default.url} 
              title={el.snippet.title}
              handler={this.changeFirstVideo}
              id={ind}
              key={ind}
            />
    })
  }

  changeInpuText=(event)=>{
      this.setState({
        serchInput:event.target.value
      })
      this.yotubeSerch(event.target.value);
  }

  onlyDate=(string)=>{return string.slice(0,10)};

  render() {
    const {serchInput,videoId, title, description, channelTitle, dataTime} = this.state;
    let isEmptyDataArray = (this.state.dataArray.length === 0);

    if(isEmptyDataArray){this.yotubeSerch(this.state.serchInput)};

    return (
      <main className="container">
          <div className=" navbar input-group">
              <DebounceInput 
                type="text" 
                className="form-control"
                placeholder="Search" 
                value={serchInput}
                minLength={5}
                debounceTimeout={400}
                onChange={this.changeInpuText}
              />
              <div className="input-group-append">
                <span className="input-group-text">Enter text</span>
              </div>
          </div>
          <div className="row">
            <AddMainVideo
              videoId={videoId}
              title={title}
              dataTime={this.onlyDate(dataTime)}
              channelTitle={channelTitle}
              description={description}
            />

            <ul className="col-md-4 list-group">
              {this.createList()}
            </ul>
          </div>
      </main>
    );
  }
}

export default App;