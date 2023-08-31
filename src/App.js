import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound';
import Rockets from './Pages/rockets/Rockets';
import { fetchRocketsData } from './redux/rockets/rocketsSlice';
import { fetchMission } from './redux/mission/missionSlice';
import Mission from './Pages/Mission/Mission';
import MyProfile from './Pages/MyProfile/MyProfile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
