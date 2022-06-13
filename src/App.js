import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import PageNotFound from './components/pageNotFound/PageNotFound';
import { Route,Routes } from 'react-router-dom'
import ReduxLogin from './pages/reduxLogin/ReduxLogin'

function App() {
  return (
    <div className="App">
      <div className='blur' style={{top: '-10%', right: '0%'}}></div>
      <div className='blur blur_to' style={{top: '40%', left: '-8rem'}}></div>
      {/* <Home/> */}
      <div className=''>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/reduxLogin' element={<ReduxLogin/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
