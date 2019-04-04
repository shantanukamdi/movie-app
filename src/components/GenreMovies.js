import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderComponent from './Header';

const MainContainerWrapper = styled.div`
    padding-top: 10px;
    padding-left: 10px;
`;
class GenreMovies extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainContainerWrapper>
                <HeaderComponent header={this.props.menuItem.selectedMenuItem} />
            </MainContainerWrapper>
        )
    }
}

const mapStateToProps = state => {
    const { menuItem, popularMovie } = state;
    console.log('State in Genre Movie COmponent', state);
    return {
        menuItem,
        popularMovie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onInitialRender: () => dispatch(getPopularMovies('popular'))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(GenreMovies);