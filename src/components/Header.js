import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.h2`
    color: #0496FF;
    font-weight: 400;
    padding-left: 10px;
    margin-bottom: 20px;
`;


const Header = (props) => {
    return(
        <HeaderComponent>
            {props.header + ' Movies'}
        </HeaderComponent>
    );
};

export default Header;