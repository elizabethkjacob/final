import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Addtodo from './component/Addtodo';
import List from './component/List';

function App() {
  return (
    <div >
     <Routes>
      <Route path={'/add'} element ={<Addtodo/>}></Route>
      <Route path={'/'} element ={<List/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
