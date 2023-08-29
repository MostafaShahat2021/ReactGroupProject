import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound';
import Rockets from './components/rockets/Rockets';
import { fetchRocketsData } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Rockets />}
        />
        <Route
          path="/missions"
          element={(
            <div>
              <h1>Missions</h1>
            </div>
          )}
        />
        <Route
          path="/profile"
          element={(
            <div>
              <h1>profile</h1>
            </div>
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
