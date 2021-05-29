import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import FarmList from "./components/pages/FarmList/FarmList";
import FarmDetail from "./components/pages/FarmDetail/FarmDetail";
import Navbar from "./components/common/Navbar/Navbar";

function App() {
    const navItems = [
        { name: "Les cryptomonnaies", path: "/" },
        { name: "Les projets", path: "/farm" },
        { name: "Lancer un projet", path: "#" },
    ];
    const farmList = [
        {
            id: "1",
            name: "Farm du lol",
            content: "Lolilol",
            location: "",
            cryptoName: "LolCoin",
            needs: [
                {
                    name: "Truc",
                    status: "12",
                },
                {
                    name: "Chose",
                    status: "25",
                },
                {
                    name: "Machin",
                    status: "50",
                },
            ],
            image: "",
            counterParts: [],
        },
        {
            id: "2",
            name: "Ferme des cheveux",
            content: "Miam des cheveux",
            location: "",
            cryptoName: "HairyCoin",
            needs: [
                {
                    name: "",
                    status: "",
                },
            ],
            image: "",
            counterParts: [],
        },
    ];
    return (
        <Router>
            <div className='App'>
                <Navbar item={navItems} />
                <Route path='/' exact component={Home} />
                <Route
                    path='/farm'
                    exact
                    render={(props) => <FarmList {...props} list={farmList} />}
                />
                <Route
                    path='/farm/:id'
                    exact
                    render={(props) => (
                        <FarmDetail
                            {...props}
                            id={props.match.params.id}
                            list={farmList}
                        />
                    )}
                />
            </div>
        </Router>
    );
}

export default App;
