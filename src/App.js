import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './components/Movies';
// import SingleMovie from './components/SingleMovie';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Movies/>} />
            {/* <Route path="/:id" element={<SingleMovie />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
