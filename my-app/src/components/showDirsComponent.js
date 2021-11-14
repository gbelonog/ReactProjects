import React, { Component } from 'react';
import iconFolder from "../icons/iconFolder.png";
import pdfIcon  from "../icons/pdfIcon.jpeg";
import docxIcon  from "../icons/docxIcon.png";
import xlsxIcon  from "../icons/xlsxIcon.jpeg";
import unknownIcon  from "../icons/unknownIcon.jpeg";

class ShowDirs extends Component {
  selectFileIcon(name){
    name = name.split('.').pop();
    console.log(name);
    let nameIcon = '';
    switch (name){
      case 'pdf':
        nameIcon = pdfIcon;
        break;
      case 'docx':
        nameIcon = docxIcon;
        break;
      case 'xlsx':
        nameIcon = xlsxIcon;
        break;
      default:
        nameIcon = unknownIcon;
    }
    return <img src={ nameIcon } className="IconFile" alt="" />
  }
  
  showDirs(childrenInside){
    const items = childrenInside.map((e) => 
      (e.type==="dir")?
      <ul key={"ul"+e.id}>
        <li key={e.id} className="Item">
          {<img src={ iconFolder } className="IconFolder" alt="" />} {e.name}
          {this.showDirs(e.children)}
        </li> 
      </ul>
    :
      <ul key={"ul"+e.id} className="Item">
        <li key={e.id}>
          {this.selectFileIcon(e.name)} {e.name}
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