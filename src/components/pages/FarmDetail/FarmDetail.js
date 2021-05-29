import React from "react";
import Page from "../../common/Layout/Page";
import Progress from "../../common/Progress/Progress";

const FarmDetail = ({ id, list }) => {
    let farm = list.find((el) => el.id === id);
    console.log(farm);

    const handleDonation = () => {
        
    }

    return (
        <Page back='/farm'>
            <h1>Farm detail WTF ?!?!!!??</h1>
            <h2>{farm.name}</h2>
            <p>{farm.content}</p>
            <p>{farm.cryptoName}</p>
            <div>
                <h3>Donnez :</h3>
                <ul>
                    {farm.needs.map((el, index) => (
                        <li key={index} className='list-item'>
                            {el.name}
                            <Progress percentage={el.status} />
                        </li>
                    ))}
                </ul>
            </div>
        </Page>
    );
};

export default FarmDetail;
