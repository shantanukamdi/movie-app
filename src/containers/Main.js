import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { init } from '../actions/index';
import Sidebar from '../components/Sidebar';
import PopularMovies from '../components/PopularMovies';
import GenreMovies from '../components/GenreMovies';

const Container = styled.div`
    display: flex;
`;

class Main extends Component{
    render() {
        this.props.dispatch(init());
        return (
            <Container>
                {/* Removed BrowserRouter to solve the re-render issue.
                    URL was getting updated, but not component.
                */}
                <Sidebar />
                    <div>
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
                                component={(props) => <PopularMovies {...props} />} />}
                            />
                             <Route 
                                path="/genres/:genre/"
                                exact
                                component={(props) => <GenreMovies {...props} />} />}
                            />
                        </Switch>
                    </div>
            </Container>
        );
    }
}

export default connect(null)(Main);