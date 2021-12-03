import './App.css';
import {Artists} from './Artists';
import {Albums} from './Albums';
import {Tracks} from './Tracks';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/artists' element={<Artists />} />
        <Route path='/artists/:artist' element={<Albums />} />
        <Route path='/artists/:artist/:album' element={<Tracks />} />
      </Routes>
    </div>
  );
}

export default App;