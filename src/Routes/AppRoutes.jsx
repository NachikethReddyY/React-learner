import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ReactFacts from "../pages/ReactFacts";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/facts" element={<ReactFacts />} />
                <Route path="/reactfacts" element={<ReactFacts />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
