import './App.css';
  import Home from './components/home';
  import {Routes,Route,Navigate} from 'react-router-dom';
  import Affilities from './components/affilities';
import InterstitialAds from './components/interstitial-ads';
import PopunderAds from './components/popunder-ads';
import InPagePush from './components/in-page-push';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='solutions/affiliates/' element={<Affilities/>}/>
        <Route path='/interstitial' element={<InterstitialAds/>}/>
        <Route path='/popunder' element={<PopunderAds/>}/>
        <Route path='/in-page-push/' element={<InPagePush/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
