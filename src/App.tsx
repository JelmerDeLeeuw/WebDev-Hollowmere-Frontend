import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/default';
import Login from './pages/login';
import Home from './pages/home';
import ProtectedRoute from './components/ProtectRoute';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/pages/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/pages/home" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/pages/home" replace />} />
      </Route>
    </Routes>
  );
}

export default App;