import React from 'react';
import styled from 'styled-components';

const GridComponent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 5px;
`;

const Grid = (props) => {
    return (
        <GridComponent>
            {props.children}
        </GridComponent>
    );
};

export default Grid;
