import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><h1>Rockets</h1></div>} />
        <Route path="/missions" element={<div><h1>Missions</h1></div>} />
        <Route path="/profile" element={<div><h1>profile</h1></div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
