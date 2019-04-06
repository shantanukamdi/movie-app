import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    display: flex;
    flex-direction: column;

    width: 230px;
    padding: 10px;

    align-items: center;
    text-align: center;

    & img {
        width: 100%;
        height: 380px;
        box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        margin-bottom: 10px;
    }
`;

const ImageComponent = (props) => {
    return (
        <Image>
            {props.children}
        </Image>
    );
};

export default ImageComponent;