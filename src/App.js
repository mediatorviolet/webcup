import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import FarmList from "./components/pages/FarmList/FarmList";
import FarmDetail from "./components/pages/FarmDetail/FarmDetail";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import OwnProject from "./components/common/Banner/OwnProject";

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
            location: "Salazie",
            cryptoName: "LolCoin",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "12",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "25",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "50",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/solar-panel1.jpg",
            counterParts: [],
        },
        {
            id: "2",
            name: "Ferme des cheveux",
            content: "Miam des cheveux",
            location: "Cilaos",
            cryptoName: "HairyCoin",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "12",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "25",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "50",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/solar-panel1.jpg",
            counterParts: [],
        },
        {
            id: "3",
            name: "Ferme des cheveux",
            content: "Miam des cheveux",
            location: "Cilaos",
            cryptoName: "HairyCoin",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "12",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "25",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "50",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/solar-panel1.jpg",
            counterParts: [],
        },
    ];
    return (
        <Router>
            <div className='App'>
                <Navbar item={navItems} />
                <Route
                    path='/'
                    exact
                    render={(props) => <Home {...props} list={farmList} />}
                />
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
                <OwnProject />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
