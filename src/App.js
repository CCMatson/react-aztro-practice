import NavBar from './components/NavBar/NavBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/characters';
import CharacterDetails from './pages/characterDetails'
import SearchChar from './components/search/SearchChar';
import CharDeets from './components/search/CharDeets'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Characters/>}/>
        <Route path='/details' element={<CharacterDetails/>}/>
        <Route path="/search" element={<SearchChar/>}/>
        <Route path="/char/:charName" element={< CharDeets/>}/>
      </Routes>

    </div>
  );
}

export default App;
