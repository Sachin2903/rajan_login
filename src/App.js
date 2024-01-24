import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Registration' element={<Registration/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
