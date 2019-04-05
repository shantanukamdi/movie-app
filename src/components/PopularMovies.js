import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getPopularMovies } from '../actions';
import { withRouter } from 'react-router-dom';
import HeaderComponent from './Header';

const MainContainerWrapper = styled.div`
    padding-top: 10px;
    padding-left: 20px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 5px;
`;

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

                <Grid>
                    { 
                        this.props.popularMovie.movies === null 
                            ? console.log('Still initializing') 
                            : this.props.popularMovie.movies.results.map((element, index) => {
                                return (
                                    <Image key={index}>
                                        <img src={"https://image.tmdb.org/t/p/w342/"+element.poster_path} />
                                        <p style={{ fontSize: '12px', color: '#0496FF' }}>
                                            { element.title }
                                        </p>
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