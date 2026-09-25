import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/default';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/pages/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/pages/login" />} />
      </Route>
    </Routes>
  );
}

export default App;
