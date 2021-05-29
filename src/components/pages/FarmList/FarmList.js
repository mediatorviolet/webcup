import React from "react";
import { Link } from "react-router-dom";
import Page from "../../common/Layout/Page";
import Card from "../../common/Card/Card";
import Section from "../../common/Layout/Section";
import SubTitle from "../../common/Titles/Subtitle";

const FarmList = ({ list }) => {
    return (
        <Page>
            <Section>
                <SubTitle>Les projets de fermes à cryptomonnaie</SubTitle>
                <p className='text-center my-5'>
                    Nulla interdum ante rutrum euismod consequat. Pellentesque
                    ornare suscipit vulputate. Nulla libero metus, imperdiet
                    luctus ex ut, facilisis efficitur metus. Praesent elementum
                    lectus eget risus efficitur tristique. Nullam non sodales
                    justo. Vivamus blandit eros eu gravida fringilla. Curabitur
                    malesuada a orci sed lobortis. Vestibulum quis facilisis
                    quam.
                </p>
                <div className='d-flex row justify-content-between mt-5'>
                    {list.map((el, index) => (
                        <Card key={index} farm={el} />
                    ))}
                </div>
            </Section>
        </Page>
    );
};

export default FarmList;
