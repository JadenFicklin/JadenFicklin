import './App.css';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OpacityProvider } from './customComponents/OpacityContext';

function App() {
    return (
        <>
            <Router>
                <OpacityProvider>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/*" element={<Landing />} />
                    </Routes>
                </OpacityProvider>
            </Router>
        </>
    );
}

export default App;
