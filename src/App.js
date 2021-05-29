import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import FarmList from "./components/pages/FarmList/FarmList";
import FarmDetail from "./components/pages/FarmDetail/FarmDetail";
import Navbar from "./components/common/Navbar/Navbar";

function App() {
    const navItems = [
        { name: "Accueil", path: "/" },
        { name: "Liste fermes", path: "/farm" },
    ];
    return (
        <Router>
            <div className='App'>
                <Navbar item={navItems} />
                <Route path='/' exact component={Home} />
                <Route path='/farm' exact component={FarmList} />
                <Route path='/farm/:id' exact component={FarmDetail} />
            </div>
        </Router>
    );
}

export default App;
