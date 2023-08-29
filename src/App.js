import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound';
import Mission from './Pages/Mission';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Rockets</h1>
            </div>
          }
        />
        <Route path="/missions" element={<Mission />} />
        <Route
          path="/profile"
          element={
            <div>
              <h1>profile</h1>
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
