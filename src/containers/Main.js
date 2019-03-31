import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Sidebar from '../components/Sidebar';

class Main extends Component{
    render() {
        return (
            <div>
                <Sidebar />
            </div>
        );
    }
}

export default Main;