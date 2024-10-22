import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div id="root">
        <Header />
        <main className="mx-3" style={{ flex: 1}}>
            <Outlet />
        </main>
        <Footer />
        </div>
    );
}

export default App;