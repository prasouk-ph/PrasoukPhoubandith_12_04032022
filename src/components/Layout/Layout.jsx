import { Outlet } from 'react-router-dom'
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import './Layout.css';

function Layout() {
    return (
        <div>
            <Header />
            <SideBar />
            <Outlet />
        </div>
    );
}

export default Layout;