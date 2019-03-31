import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Sidebar from '../components/Sidebar';
import MainContainer from '../components/MainContainer';
import { connect } from 'react-redux';
import { init } from '../actions/index';

const Container = styled.div`
    display: flex;
`;

class Main extends Component{
    render() {
        this.props.dispatch(init());
        return (
            <Container>
                <Sidebar />
                <MainContainer />
            </Container>
        );
    }
}

export default connect(null)(Main);