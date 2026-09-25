import { Outlet } from 'react-router-dom';
import '../styles/Layout.less'; 
import Header from '../components/Header.tsx';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>    
  );
}

export default Layout;
