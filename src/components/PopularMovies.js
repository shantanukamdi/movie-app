import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { getPopularMovies, getMovieDetails, getMovieCredits } from '../actions';
import { withRouter } from 'react-router-dom';
import HeaderComponent from './Header';
import GridComponent from './Grid';
import ImageComponent from './ImageCard';

const MainContainerWrapper = styled.div`
    padding-top: 10px;
    padding-left: 20px;
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
                <HeaderComponent header={this.props.menuItem.selectedMenuItem} />

                <GridComponent>
                    { 
                        this.props.popularMovie.movies === null 
                            ? console.log('Still initializing') 
                            : this.props.popularMovie.movies.results.map((element, index) => {
                                return (
                                   <NavLink to={`/movie/${element.id}`}>
                                        <ImageComponent 
                                        key={index}
                                        onClick={() => {
                                            this.props.onHandleGetMovieDetails(element);
                                            this.props.onHandleGetMovieCredits(element);
                                        }}
                                    >
                                        <img 
                                            src={"https://image.tmdb.org/t/p/w342/"+element.poster_path} 
                                            alt={element.title}
                                            />
                                        <p style={{ fontSize: '12px', color: '#0496FF' }}>
                                            { element.title }
                                        </p>
                                    </ImageComponent>
                                   </NavLink>
                                );
                            })

                    }
                </GridComponent>
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
        onInitialRender: () => dispatch(getPopularMovies('popular')),
        onHandleGetMovieDetails: (movieId) => dispatch(getMovieDetails(movieId.id)),
        onHandleGetMovieCredits: (movieId) => dispatch(getMovieCredits(movieId.id))
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PopularMovies));