import React from "react";
import { Link } from "react-router-dom";
import Page from "../../common/Layout/Page";

const FarmList = ({ list }) => {
    return (
        <Page>
            <h1>FarmList OMG!!!!!!!!!!!!!!!!!!!</h1>
            {list.map((el, index) => (
                <div className='my-5' key={index}>
                    <h3>{el.name}</h3>
                    <hr />
                    <p>{el.content}</p>
                    <Link to={`/farm/${el.id}`}>Détail</Link>
                </div>
            ))}
        </Page>
    );
};

export default FarmList;
