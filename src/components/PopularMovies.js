import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getPopularMovies } from '../actions';
import { withRouter } from 'react-router-dom';

const MainContainerWrapper = styled.div`
    padding-top: 10px;
    padding-left: 10px;
`; 

const SelectedMenuItem = styled.h2`
    color: palevioletred;
    display: block;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
`;

const Image = styled.div`
    display: flex;

    & img {
        margin: 20px;
        width: 300px;
        height: 450px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.6);
        border-radius: 10px;
    }
`;

class PopularMovies extends Component {

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

                <Grid>
                    { 
                        this.props.popularMovie.movies === null 
                            ? console.log('Still initializing') 
                            : this.props.popularMovie.movies.results.map((element, index) => {
                                return (
                                    <Image key={index}>
                                        <img src={"https://image.tmdb.org/t/p/w342/"+element.poster_path} />
                                    </Image>
                                );
                            })

                    }
                </Grid>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PopularMovies));