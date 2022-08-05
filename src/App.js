import './App.css';
import { Header, Channels, Footer } from './containers';
import { Navbar, Error } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="gradient__bg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Header />}/>
                    <Route path="/channels" element={<Channels />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
                <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
