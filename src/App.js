import NavBar from './components/NavBar/NavBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/characters';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/characters' element={<Characters/>}/>
      </Routes>

    </div>
  );
}

export default App;
