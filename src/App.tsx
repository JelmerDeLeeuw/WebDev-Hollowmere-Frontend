import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/default';
import Login from './pages/login';
import User from './pages/user';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/user" element={<User />} />
        <Route path="*" element={<Navigate to="/pages/login" />} />
      </Route>
    </Routes>
  );
}

export default App;
