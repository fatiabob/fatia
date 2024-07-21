import Contact from './components/Contact';
import Porto from './components/Porto';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact  element={<Porto />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route element={<Porto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
