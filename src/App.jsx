import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home'
import Header from './components/Header/Header';
import Chart from './Pages/Chart/Chart';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chart' element={<Chart/>}/>


      </Routes>


 
    </div>
  );
}

export default App;
