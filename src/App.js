/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2022-06-27 10:53:08
 * @Description: 页面/组件/功能的描述
 * @FilePath: /file-app/src/App.js
 */
import './App.css';
import Upload from './components/File/index.tsx'
import Demo from './components/Demo/index.tsx'

function App() {
  return (
    <div className="App">
      <Demo/>
     <Upload/>
    </div>
  );
}

export default App;
