import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/pages/Home/Home'
import NotFoundPage from './components/pages/NotFound/NotFound'
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/18"></Navigate>} /> {/* by default, redirect to user(12) page */}
                    <Route path="/:id" element={<Home />} />
                    <Route path="*" element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
