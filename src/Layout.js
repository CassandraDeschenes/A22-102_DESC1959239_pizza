import './css/Page.css';
import {Outlet} from 'react-router-dom';
import Header from './Header';

const Layout = () => (
    <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header/>
        <main className="mdl-layout__content">
            <div className="page-content">
                <Outlet/>

            </div>
        </main>
        </div>
    </div>
);

export default Layout;