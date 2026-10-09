import { Outlet } from 'react-router-dom';
import '../styles/Layout.less'; 
import Header from '../components/Header.tsx';

function Layout() {
    const pathname = useLocation();
    const hideHeader = pathname === '/login';
    
    return (
        <div className="layout">
            {!hideHeader && <Header />}
            <main>
                <Outlet />
            </main>
        </div>    
    );
}

export default Layout;
