import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Watchlist from "./components/Watchlist.jsx";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Watchlist currUser={"sameer"} />} />
                <Route path="/saurav" element={<Watchlist currUser={"saurav"} />} />
            </Routes>
        </Router>
    );
};

export default App;