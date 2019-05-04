import React, { Component } from 'react';
import './css/TeacherPic.css';
import teacher from './teacher.jpg';

class TeacherPic extends Component {

  handleOpenPicture = () => {
    
  }

  render() {
    return (
      <div className="Teacher">
        <img src={teacher}></img>
      </div>
    );
  }
}

export default TeacherPic;
