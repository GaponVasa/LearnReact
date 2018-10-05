import React from 'react';
import { Spinner } from './spinner';
import { Descriotion } from './description';

export class AddMainVideo extends React.Component {

  addSpinner=()=>{
    const{videoId}=this.props;
    const srcMain = "https://www.youtube.com/embed/" ;

    if(!videoId){
      return(
        <div className="d-flex justify-content-center">
          <Spinner/>
        </div>
      );
    }else{
      return(
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="random" src={srcMain+videoId}/>
        </div>
      );
    }
  }

  render() {
    const {title, description, channelTitle, dataTime} = this.props;
    
    return(
      <div className="video-detail col-md-8">
        {this.addSpinner()}
        <div className="details">
          <Descriotion aboutText={"Title"} text={title}/>
          <Descriotion aboutText={"Channel"} text={channelTitle}/>
          <Descriotion aboutText={"Publish"} text={dataTime}/>
          <Descriotion aboutText={"Description"} text={description}/>
        </div>
      </div>
    )
      
  }
}