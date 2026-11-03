import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const token = sessionStorage.getItem('token');

    return token ? <Outlet /> : <Navigate to="/pages/login" replace />;
}

export default ProtectedRoute;
