import './App.css';
import Home from './components/home';
import {Routes,Route,Navigate} from 'react-router-dom';
import Affilities from './components/affilities';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='solutions/affiliates/' element={<Affilities/>}/>
        {/* <Route path='/signup' element={<Signup/>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
