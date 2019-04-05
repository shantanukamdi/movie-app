import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import logo from '../assets/watch.svg';
import theme from '../styles/theme';
import { changeMenuItem, getPopularMovies } from '../actions/index';

import StickyBox from 'react-sticky-box';

const SidebarWrapper = styled.div`
    width: 18%;
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
    &::before {
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
    &:hover {
        cursor: pointer;
    }

    padding: 10px;
`;

const MainMenuItemLink = styled(NavLink)`,
    font-weight: 600;
    display: block;
    padding: 10px;
    &:hover {
        background-color: #4db4ff;
        border-radius: 10px;
    }

    & i {
        color: ${theme.colors.sideBarFontColor};
        width: 1em;
        height: 1em;
        margin-right: 10px;
        
    }
    &.active {
        background-color: #4db4ff;
        border-radius: 10px;
    }
    text-decoration: none;
    color: ${theme.colors.sideBarFontColor};
`;

class Sidebar extends Component {
    render() {
        let state = {
            sideBarMenuItems: [{
                title: 'Popular',
                icon: 'fa fa-heart',
                urlParam: 'popular'
            }, {
                title: 'Top Rated',
                icon: 'fa fa-bar-chart',
                urlParam: 'top_rated'
            }, {
                title: 'Upcoming',
                icon: 'fa fa-ticket',
                urlParam: 'upcoming'
            }]
        };
        return (
            <SidebarWrapper>
                <StickyBox>
                    <SectionSidebar>
                        <Logo>
                            <img src={logo} title="Movie Icon" width="100px" height="100px" />
                        </Logo>

                        <Navigation>
                            <MainMenu>
                                {state.sideBarMenuItems.map((element, index) => {
                                    return (
                                        <MainMenuItem
                                            key={index}
                                            onClick={() => {
                                                this.props.onMenuChange(element.title);
                                                this.props.onDiscoverChange(element.urlParam);
                                            }}
                                        >
                                            <MainMenuItemLink 
                                                to={"/discover/" + element.title} 
                                                key={index}
                                                >
                                                <i className={element.icon} aria-hidden="true"></i>&nbsp;
                                            {element.title}
                                            </MainMenuItemLink>
                                        </MainMenuItem>

                                    );
                                })}
                            </MainMenu>

                            <SecondaryMenu>
                                {this.props.genre.genres &&
                                    this.props.genre.genres.map((element, index) => {
                                        return (
                                            <MainMenuItem
                                                key={index}
                                                onClick={() => {
                                                    this.props.onMenuChange(element.name)
                                                }}
                                            >
                                                <MainMenuItemLink 
                                                    key={index}
                                                    to={"/genres/" + element.name}
                                                    alt={element.name}>
                                                    <i className="fa fa-circle" aria-hidden="true"></i>&nbsp;
                                                {element.name}
                                                </MainMenuItemLink>
                                            </MainMenuItem>

                                        );
                                    })}
                            </SecondaryMenu>


                        </Navigation>
                    </SectionSidebar>
                </StickyBox>
                </SidebarWrapper>
        );
    }
}

const mapStateToProps = state => {
    const { genre } = state;
    return {
        genre
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onMenuChange: (menuItem) => dispatch(changeMenuItem(menuItem)),
        onDiscoverChange: (category) => dispatch(getPopularMovies(category))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));