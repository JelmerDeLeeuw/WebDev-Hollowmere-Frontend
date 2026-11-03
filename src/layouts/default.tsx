import { Outlet, useLocation } from 'react-router-dom';
import '../styles/Layout.less'; 
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

function Layout() {
    const { pathname } = useLocation();
    const hideHeader = pathname === '/pages/login';
    
    return (
        <div className="layout">
            {!hideHeader && <Header />}
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer />
        </div>    
    );
}

export default Layout;
