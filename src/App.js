import NavBar from './components/NavBar/NavBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/characters';
import CharacterDetails from './pages/characterDetails'
import SearchChar from './components/search/SearchChar';
// import CharDeets from './components/search/CharDeets'
// import Games from './components/search/Games'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Characters/>}/>
        <Route path='/details' element={<CharacterDetails/>}/>
        <Route path="/search" element={<SearchChar/>}/>
        {/* <Route path="/search/:charName" element={< CharDeets/>}/>
      <Route path="/games" element={<Games/>}/> */}
      </Routes>

    </div>
  );
}

export default App;
