import { Routes, Route } from 'react-router-dom';
import Home from './components/home'; 
import About from './components/about';
import Error from './components/error';

function route() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default route;