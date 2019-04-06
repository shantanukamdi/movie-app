import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderComponent from './Header';
import GridComponent from './Grid';
import ImageComponent from './ImageCard';
import { getGenresMovies, changeMenuItem, init } from '../actions/index';

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
                <GridComponent>
                    {  this.props.genreMovie.movies === null 
                            ? console.log('Still initializing') 
                            : (this.props.genreMovie.movies.results && this.props.genreMovie.movies.results.map((element, index) => {
                                return (
                                    <ImageComponent key={index}>
                                        <img 
                                            src={"https://image.tmdb.org/t/p/w342/"+element.poster_path} 
                                            alt={element.title}
                                            />
                                        <p style={{ fontSize: '12px', color: '#0496FF' }}>
                                            { element.title }
                                        </p>
                                    </ImageComponent>
                                );
                            }))

                    }
                </GridComponent>
            </MainContainerWrapper>
        );
    }
}

const mapStateToProps = state => {
    const { menuItem, genreMovie, genre } = state;
    return {
        menuItem,
        genreMovie,
        genre
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitialRender: (genre) => {
            console.log(genre);
            dispatch(changeMenuItem(genre));
            dispatch(getGenresMovies(genre));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(GenreMovies);