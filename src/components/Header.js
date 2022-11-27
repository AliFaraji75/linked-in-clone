import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { signOutAPI } from "../actions";
const Header = (prpos) => {
  const state = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  return (
    <Container>
      <Content>
        <Logo>
          <a href="home">
            <img src="/images/linkdin.png" alt="logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <SearchIcon>
            <img src="/images/iconSearch.svg" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="home" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="home" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="home" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="home" />
                <span>Notification</span>
              </a>
            </NavList>

            <User>
              <a>
                {state.user?.photoURL ? (
                  <img src={state.user.photoURL} alt="user" />
                ) : (
                  <img src="/images/user.svg" alt="user" />
                )}

                <span>
                  me
                  <img src="/images/down-icon.svg" />
                </span>
              </a>
              <Signout onClick={() => dispatch(signOutAPI())}>
                <a>Sign out</a>
              </Signout>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="user" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px 25px;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100vw;
  position: fixed;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  img {
    width: 37px;
    height: 37px;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  width: 40px;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  padding-right: 70px;
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
    
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
  @media (max-width: 600px) {
    justify-content: space-around;
    font-size: 5px;
    font-weight: 700;
    line-height: 1.5;
    min-height: 52px;
    min-width: 40px;
  }

`;

const Signout = styled.div`
  position: absolute;
  background-color: white;
  top: 40px;
  transition-duration: 167ms;
  border-radius: 0 0 5px 5px;
  width: 80px;
  height: 40px;
  text-align: center;
  display: none;
  cursor: pointer;
`;
const User = styled(NavList)`
  a > img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${Signout} {
      align-items: center;
      display: flex;
      justify-content: center;
      @media (max-width: 768px) {
        top: -40px;
      }
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
