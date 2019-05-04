import React, { Component } from 'react';

class Student extends Component {

  render() {
    return (
    	<p className="App-intro">
			中文姓名： 洪英祖 <br/>
			英文名字： Ryan <br/>
			性別： 男 <br/>
			出生日期： 1994年08月11日 <br/>

			現職： 全端工程師 <br/>

			Php: laravel lumen phalcon <br/>
			JavaScript: react jquery <br/>
			Nodejs: express socket.io<br/>
			環境: Jenkins docker git Centos Ubuntu <br/>
			資料庫: monogo MySQL <br/>

			這是我較為熟悉的框架與技能，程式工作經驗約三年 <br/>
			自評優勢為學習速度較佳，喜好有挑戰的事物 <br/>

			目前比起薪資, 更希望能夠有一個發揮自己全部潛能的地方.<br/>
	    </p>
    );
  }
}

export default Student;