import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { init } from '../actions/index';
import Sidebar from '../components/Sidebar';
import PopularMovies from '../components/PopularMovies';
import GenreMovies from '../components/GenreMovies';
import MovieDetail from '../components/MovieDetail';

const Container = styled.div`
    display: grid;
    grid-template-columns: 220px auto;
`;

const ContentWrapper = styled.div`
`;

class Main extends Component {
    constructor(props) {
        super(props);
        console.log('ctor instantiating');
        this.props.onInit();
    }
    render() {
        return (
            <Container>
                {/* Removed BrowserRouter to solve the re-render issue.
                    URL was getting updated, but not component.
                */}
                <Sidebar />
                <ContentWrapper>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={() => {
                                return <Redirect
                                    from="/"
                                    to="/discover/popular"
                                />
                            }}
                        />
                        <Route
                            path="/discover/:name"
                            exact
                            component={(props) => <PopularMovies {...props} />}
                        />
                        <Route
                            path="/genres/:genre/"
                            exact
                            component={(props) => <GenreMovies {...props} />}
                        />
                        <Route
                            path="/movie/:movieId/"
                            exact
                            component={(props) => <MovieDetail {...props} />}
                        />
                    </Switch>
                </ContentWrapper>
            </Container>
        );
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        onInit: () => dispatch(init())
    }
};

export default connect(null, mapDispatchToProp)(Main);