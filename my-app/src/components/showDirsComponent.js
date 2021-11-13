import React, { Component } from 'react';
import iconFolder from "../icons/iconFolder.png"

class ShowDirs extends Component {
    
  showDirs(childrenInside){
    const items = childrenInside.map((e) => 
      (e.type==="dir")?
      <ul key={"ul"+e.id}>
        <li key={e.id} className="Item">
          {<img src={ iconFolder } className="IconFolder" alt="logo" />} {e.name}
          {this.showDirs(e.children)}
        </li> 
      </ul>
    :
      <ul key={"ul"+e.id} className="Item">
        <li key={e.id}>
          {e.type} {e.name}
        </li>
      </ul>       
    );
    return items;
  }
  render() {
    const { directories } = this.props;
  
    return (
      <ul>{this.showDirs(directories)}</ul>
    );
  }
}

export default ShowDirs;