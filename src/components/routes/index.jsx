import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../home";
import Cart from "../cart";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = styled.div`
  background-color: #ffffff;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  box-shadow: 0 8px 6px -8px black;
`;

const MainContainer = styled.div`
  background-color: #f5f5f5;
  min-height: calc(100vh - 50px);
  width: 100vw;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100vw;
  box-sizing: border-box;
  justify-content: space-between;
  padding-inline-start: 0;
  padding: 0 40px;
`;

const StyledLink = styled.li`
  & a {
    text-decoration: none;
  }
`;

const Routes = () => {
    return <Router>
      <Header>
        <nav>
          <LinkList>
            <StyledLink>
              <Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link>
            </StyledLink>
            <StyledLink>
              <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
            </StyledLink>
          </LinkList>
        </nav>
      </Header>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <MainContainer>
        <Switch>
        <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainContainer>
  </Router>;
}

export default Routes;