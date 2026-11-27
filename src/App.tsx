import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/default';
import Login from './pages/login';
import Home from './pages/home';
import Armory from './pages/armory';
import Archive from './pages/archive';
import ProtectedRoute from './components/ProtectRoute';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/pages/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/armory" element={<Armory />} />
          <Route path="/pages/archive" element={<Archive />} />
        </Route>

        <Route path="*" element={<Navigate to="/pages/home" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
