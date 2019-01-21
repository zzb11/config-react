import ReactDOM from 'react-dom';
import React from 'react';
import App from './APP';
import 'babel-polyfill';
import './sass/main.scss';

ReactDOM.render(<App />, document.getElementById('app'));
if (module.hot) {
  // accept 函数的第一个参数指出当前文件接受哪些子模块的替换，这里表示只接受 ./AppComponent 这个子模块
  // 第2个参数用于在新的子模块加载完毕后需要执行的逻辑
  module.hot.accept(['./App'], () => {
    // 新的 AppComponent 加载成功后重新执行下组建渲染逻辑
    ReactDOM.render(<App />, document.getElementById('app'));
  });
}
