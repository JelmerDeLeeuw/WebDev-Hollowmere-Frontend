import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/default';
import Login from './pages/login';
import Home from './pages/home';
import Member from './pages/member';
import ProtectedRoute from './components/ProtectRoute';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/pages/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/pages/home" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/pages/member" element={<Member />} />
        </Route>

        <Route path="*" element={<Navigate to="/pages/home" replace />} />
      </Route>
    </Routes>
  );
}

export default App;