import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class GenreMovies extends Component {

    render() {
        return (
            <div>
                <h1>Genres</h1>
            </div>
        )
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
        // onInitialRender: () => dispatch(getPopularMovies('popular'))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(GenreMovies);