import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContainerWrapper = styled.div`
    margin-left: 5%;
    margin-top: 5%;
`; 

const SelectedMenuItem = styled.h2`
    color: palevioledred;
`;

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: ''
        }
    }

    componentDidUpdate(nextProps) {
        let header = nextProps.match.params.name;
        console.log('Main Container', header);
    }

    render() {
        return (
            <MainContainerWrapper>
                <SelectedMenuItem>
                    {this.state.header}
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