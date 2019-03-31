import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import logo from '../assets/watch.svg';
import theme from '../styles/theme';

const SidebarWrapper = styled.div`
    display: flex;
    width: 20%;
    height: 100vh;
    background-color: ${theme.colors.sideBarColor};
`;
const Logo = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: auto;
`;

const SectionSidebar = styled.section`
    width: 100%;
`;

const Navigation = styled.nav`
    box-sizing: border-box;
`;

const MainMenu = styled.ul`
    margin-top: 20px;
    &:: before {
        content: 'DISCOVER';
        color: rgba(245, 245, 245, 0.8);
        padding-left: 10px;
        font-size: 0.7em;
    }
`;


const SecondaryMenu = styled.ul`
    margin-top: 20px;
    &:: before {
        content: 'GENRES';
        color: rgba(245, 245, 245, 0.8);
        padding-left: 10px;
        font-size: 0.7em;
    }
`;

const MainMenuItem = styled.li`
    font-size: 0.8em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 20px;
    &:hover {
        cursor: pointer;
        background-color: black;
    }

    padding-left: 20px;
    padding-top: 20px;
`;

const MainMenuItemA = styled.a`
    text-decoration: none;
    color: ${theme.colors.fontColor};
    
    & i {
        color: palevioletred;
        width: 1em;
        height: 1em;
        margin-right: 10px;
    
    }
`;

class Sidebar extends Component {
    render() {
        let state = {
            sideBarMenuItems: [{
                title: 'Popular',
                icon: 'fa fa-heart'
            }, {
                title: 'Top Rated',
                icon: 'fa fa-bar-chart'
            }, {
                title: 'Upcoming',
                icon: 'fa fa-ticket'
            }]
        };
        return (
            <SidebarWrapper>
                <SectionSidebar>
                    <Logo>
                        <img src={logo} title="Movie Icon" width="100px" height="100px" />
                    </Logo>

                    <Navigation>
                        <MainMenu>
                            {state.sideBarMenuItems.map((element) => {
                                return (
                                    <MainMenuItem>
                                        <MainMenuItemA href="#" alt="Popular">
                                            <i class={element.icon} aria-hidden="true"></i>&nbsp;
                                        {element.title}
                                        </MainMenuItemA>
                                    </MainMenuItem>

                                );
                            })}
                        </MainMenu>

                        <SecondaryMenu>
                            {state.sideBarMenuItems.map((element) => {
                                return (
                                    <MainMenuItem>
                                        <MainMenuItemA href="#" alt="Popular">
                                            <i class={element.icon} aria-hidden="true"></i>&nbsp;
                                        {element.title}
                                        </MainMenuItemA>
                                    </MainMenuItem>

                                );
                            })}
                        </SecondaryMenu>
                        
                     
                    </Navigation>
                </SectionSidebar>
            </SidebarWrapper>
        );
    }
}

export default Sidebar;