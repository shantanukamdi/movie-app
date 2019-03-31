import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContainerWrapper = styled.div`
    margin-left: 2%;
    margin-top: 1%;
`; 

const SelectedMenuItem = styled.h2`
    color: palevioledred;
`;

class MainContainer extends Component {
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