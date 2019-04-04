import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.h2`
    color: palevioletred;
    display: block;
    padding-left: 20px;
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