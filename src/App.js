import './App.css';
import { Header, Channels, Footer } from './containers';
import { Navbar, Error } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComponentLibrary from './containers/component_library/ComponentLibrary';

function App() {
    return (
        <Router>
            <div className="App">
                <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Header />}/>
                    <Route path="/channels" element={<Channels />}/>
                    <Route path="/components" element={<ComponentLibrary />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
                <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
