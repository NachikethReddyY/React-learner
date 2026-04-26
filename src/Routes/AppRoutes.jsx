import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ReactFacts from "../ReactFacts";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/facts" element={<ReactFacts />} />
                <Route path="/reactfacts" element={<ReactFacts />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
