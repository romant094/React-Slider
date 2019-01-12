import React from 'react';

import './app.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './header';
import Main from './main';
import Menu from './menu';

const url = process.env.PUBLIC_URL + '/img/bg.jpg';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 48px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

function App() {
    return (
        <div className="app">
            <HeaderWrapper>
                <Grid>
                    <Header />
                </Grid>
            </HeaderWrapper>

            <MenuWrapper>
                <Grid>
                    <Menu />
                </Grid>
            </MenuWrapper>
            <MainWrapper>
                <Grid>
                    <Main />
                </Grid>
            </MainWrapper>
        </div>
    );
}

export default App;