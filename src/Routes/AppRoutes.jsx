import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ReactFacts from "../pages/ReactFacts";
import TravelJournal from "../pages/traveljournal";
import ChefClaude from "../pages/ClaudeChef";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/facts" element={<ReactFacts />} />
                <Route path="/reactfacts" element={<ReactFacts />} />
                <Route path="/traveljournal" element={<TravelJournal />} />
                <Route path="/claudechef" element={<ChefClaude />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
