import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContainerWrapper = styled.div`
    border: 1px solid black;
    padding: 20px;
    width: 80%;
`; 

const SelectedMenuItem = styled.h2`
    color: palevioletred;
    display: block;
`;

class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainerWrapper>
                <SelectedMenuItem>
                    {this.props.menuItem.selectedMenuItem}
                </SelectedMenuItem>
                Movies
            </MainContainerWrapper>
        );
    }
}

const mapStateToProps = state => {
    const { menuItem } = state;
    return {
        menuItem
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);