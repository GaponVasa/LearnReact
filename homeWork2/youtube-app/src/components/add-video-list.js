import React from 'react';
import { Descriotion } from './description';

export class AddVideoList extends React.Component {

  render() {
    const{link, title, handler, id}=this.props;
    const DummyLink = "#"
    return(
      <li className="list-group-item">
        <a 
          className="d-flex"
          href={DummyLink}
          onClick={()=>handler(id)}
        >
          <img 
            className="media-object" 
            src={link} 
            alt={title}
          />
          <div className="media-body ml-2">
            <Descriotion aboutText={""} text={title}/>
          </div>
        </a>
      </li>
    )
  }
}