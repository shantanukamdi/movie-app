import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getPopularMovies } from '../actions';
import { Flex, Box } from '@rebass/grid'

const MainContainerWrapper = styled.div`
    padding: 10px;
`; 

const SelectedMenuItem = styled.h2`
    color: palevioletred;
    display: block;
`;

class MainContainer extends Component {

    constructor(props) {
        super(props);
        /** Initially render popular images */
        this.props.onInitialRender();
    }

    render() {
        return (
            <MainContainerWrapper>
                <SelectedMenuItem>
                    {this.props.menuItem.selectedMenuItem}
                </SelectedMenuItem>
                Movies

                <Flex flexWrap='wrap'>
                    { 
                        this.props.popularMovie.movies === null 
                            ? console.log('Still initializing') 
                            : this.props.popularMovie.movies.results.map((element, index) => {
                                return (
                                    <Box key={index} width={300} px={2}>
                                        <img src={"https://image.tmdb.org/t/p/w342/"+element.poster_path} width="200px" height="200px"/>
                                    </Box>
                                );
                            })

                    }
                </Flex>
            </MainContainerWrapper>
        );
    }
}

const mapStateToProps = state => {
    const { menuItem, popularMovie } = state;
    return {
        menuItem,
        popularMovie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitialRender: () => dispatch(getPopularMovies('popular'))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);