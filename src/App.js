import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import NotFoundPage from './components/pages/NotFound/NotFound'
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
