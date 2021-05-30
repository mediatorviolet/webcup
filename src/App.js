import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import FarmList from "./components/pages/FarmList/FarmList";
import FarmDetail from "./components/pages/FarmDetail/FarmDetail";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import OwnProject from "./components/common/Banner/OwnProject";
import Modal from "./components/common/Modal";

function App() {
    const [block, setBlock] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setBlock(true);
            setTimeout(() => {
                setBlock(false);
            }, 10000);
        }, 1000);
    }, []);

    const navItems = [
        { name: "Le concept", path: "/" },
        { name: "Les fermes à crypto", path: "/farm" },
        { name: "Lancer un projet de ferme", path: "#project" },
    ];

    const farmList = [
        {
            id: "1",
            name: "Ferme solaire",
            content:
                "Notre projet de ferme doit voir le jour à Salazie sur un terrain issu d’un héritage familial. L'ensoleillement y est parfait toute l’année, et permettra 200 jours de minage par an. Votre aide est la bienvenue afin que ce projet voit le jour et que nous puissions participer au nouvel ordre économique depuis notre belle île.",
            location: "Salazie",
            cryptoName: "Bitcoin",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "22",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "72",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "59",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/solar_panel1.jpg",
        },
        {
            id: "2",
            name: "Ferme éolienne",
            content:
                "La capitale de l'Ethereum sera St-Benoît, et ça sera en grande partie grâce à vous. En nous aidant à monter cette ferme, vous participerez au développement de l'Est de l'île en lui accordant une place stratégique dans le milieu de la cryptomonnaie réuionnaise, mais aussi à l'échelle de l'Océan Indien.",
            location: "St-Benoît",
            cryptoName: "Ethereum",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "42",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "23",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "44",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/eolic.jpg",
        },
        {
            id: "3",
            name: "Ferme géothermique",
            content:
                "Le Tampon regorge d'opportunités en lien avec la création d'une ferme de minage géothermique. Associez à cela la technologie de VPN Lethean et vous êtes certain d'obtenir un projet de grande qualité. Mais pour cela, nous avons besoin de vous. Le terrain étant difficile d'accès, les moyens humains sont au coeur du chantier. Si vous vous sentez l'âme d'un bûcheron 4.0, rejoignez notre communauté dès à présent.",
            location: "Tampon",
            cryptoName: "Lethean",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "75",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "53",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "29",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/barrage.jpg",
        },
        {
            id: "4",
            name: "Ferme biomasse",
            content:
                "Saint-Leu représente un lieu stratégique pour la construction d'une ferme biomasse. L'ambition de notre ferme est de faire de cette fabuleuse ville le nouveau centre névralgique de la cryptomonnaie, et plus précisement du Zcash dans l'Océan Indien. Rejoignez-nous et évoluez dans un cadre paradisiaque durant toute la durée du chantier. Vous contribuez à un projet qui a du sens pour notre île.",
            location: "St-Leu",
            cryptoName: "Zcash",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "63",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "11",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "27",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/FERME_BIOMASSE1.jpg",
        },
        {
            id: "5",
            name: "Ferme éolienne",
            content:
                "Terre sauvage, St-Joseph saura accueillir une ferme éolienne dans le but de miner du Litecoin. Cette cryptomonnaie a su s'imposer comme l'une des devises majeures ces 20 dernières années. Ce qui en fait un gage de qualité quant à sa production et à sa valeur dans les années qui suivent. Soyez donc sûr d'investir vos matérieaux et temps dans un projet qui saura vous le rendre comme il se doit.",
            location: "St-Joseph",
            cryptoName: "Litecoin",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "69",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "57",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "12",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/FERME_EOLIENNE1.jpg",
        },
        {
            id: "6",
            name: "Ferme éolienne",
            content:
                "L'Ouest de l'île est un cadre idéal au développement d'une ferme éolienne. De part ses vents forts durant la majorité de l'année, elle assure une production en quantité de Trololocoin. C'est donc la garantie pour vous d'investir dans un projet fiable et durable.",
            location: "La Saline",
            cryptoName: "Trololocoin",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "39",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "86",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "10",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/FERME_EOLIENNE1.jpg",
        },
        {
            id: "7",
            name: "Ferme géothermique",
            content:
                "Ville de caractère, l'équipe porteuse de ce projet souhaite développer l'atractivité économique et géostratégique de la ville du Port à l'échelle nationale. L'énergie géothermique s'inscrit dans la volonté des Réunionnais qui aspirent à devenir un exemple sur le plan des énergies renouvelables. Ce projet de ferme de minage a toutes les chances de son côté pour assurer un avenir perein à son activité.",
            location: "Le Port",
            cryptoName: "Dash",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "16",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "5",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "90",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/FERME_GEOTHERMIQUE1.jpg",
        },
        {
            id: "8",
            name: "Ferme biomasse",
            content:
                "L'activité sucrière dans la zone Nord-Est de l'île permettra à la ferme biomasse de Sainte-Marie d'obtenir des résultats de production plus qu'excellents. Fleuron de l'industrie technologique et médicale de l'Océan Indien ces dernières années, grâce à la découvert du vaccin universel contre le SARS Cov-2 en 2026, Sainte-Marie accueillera cette nouvelle activité avec une aisance digne des entreprises de la Silicon Valley.  ",
            location: "St-Marie",
            cryptoName: "Tezos",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "76",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "13",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "53",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/FERME_EOLIENNE2.jpg",
        },
        {
            id: "9",
            name: "Ferme géothermique",
            content:
                "L'usine du Gole est l'endroit parfait pour accueillir une ferme géothermique de grande échelle. Depuis son abandon suite aux échecs commerciaux en matière de vente de canne à sucre, elle n'est qu'un terrain vague aux proies de toutes sortes d'activités illégales. Mettre en place ce projet de ferme géothermique en vue de miner des Ripple serait le plus grand coup de projecteur qu'aura la ville dans toute son histoire. Rejoignez-nous et participez à un évènement sans précédent. ",
            location: "St-Louis",
            cryptoName: "Ripple",
            needs: [
                {
                    name: "Matériels informatiques",
                    status: "51",
                    color: "orange",
                },
                {
                    name: "Matières premières",
                    status: "15",
                    color: "pink",
                },
                {
                    name: "Moyens humains",
                    status: "87",
                    color: "dark-green",
                },
            ],
            image: "/assets/img/FERME_GEOTHERMIQUE2.jpg",
        },
    ];
    return (
        <Router>
            <div className='App'>
                <Navbar item={navItems} />
                {block && <Modal />}
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
