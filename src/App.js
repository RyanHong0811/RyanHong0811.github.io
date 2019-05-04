import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import TeacherPic  from './TeacherPic';
import Intro  from './Intro';
import Iframe  from './Iframe';
import Student  from './Student';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openPic: false,
      content: <Intro/>
    };
  }

  handleChangeContent = (name) => {
    let component;
    if (name === 'Intro') {
      component = <Intro/>
    } else if (name === 'Iframe') {
      component = <Iframe/>
    } else if (name === 'Student') {
      component = <Student/>
    }
    this.setState({
      content: component
    });
  }

  render() {

    return (
        <div className="App">
          {this.state.openPic && <TeacherPic/>}
          <header className="App-header">
            <ul className="App-menu-desktop">
              <li onClick={this.handleChangeContent.bind(this, 'Intro')}>老師介紹</li>
              <li onClick={this.handleChangeContent.bind(this, 'Iframe')}>論文</li>
              <li onClick={this.handleChangeContent.bind(this, 'Student')}>學生的自我介紹</li>
            </ul>
          </header>

          <div class="App-header-content">
            <div class="App-header-content-teacher"/>
            <div class="text-white text-center">
              <div class="col-xs-12 col-md-10 col-md-offset-1">
                <h1 class="display-2">顏淑惠個人網頁介紹</h1>
              </div>
            </div>
          </div>


          <div className="App-content">
            {this.state.content}
          </div>
          <footer className="App-footer">
            <div style={{paddingRight: '10px'}}>
              2019 RyanHong lab2. 
            </div>
          </footer>
        </div>
    );
  }
}

export default App;
