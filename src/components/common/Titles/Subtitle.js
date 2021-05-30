import styled from "styled-components";
import "../../../index.css";

const SubTitle = styled.h3`
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    text-align: ${(props) => props.align || "center"};
    color: ${(props) => props.color || ""};
`;

export default SubTitle;
