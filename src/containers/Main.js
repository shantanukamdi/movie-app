import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { init } from '../actions/index';
import Sidebar from '../components/Sidebar';
import MainContainer from '../components/MainContainer';
import { history } from '../helpers/history';

const Container = styled.div`
    display: flex;
`;

class Main extends Component{
    render() {
        this.props.dispatch(init());
        return (
            <Container>
                <Sidebar />
                <BrowserRouter history={history} >
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
                                component={props => <MainContainer {...props} />}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>

            </Container>
        );
    }
}

export default connect(null)(Main);