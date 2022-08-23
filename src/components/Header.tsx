import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = styled.li`
  a {
    display: inline-block;
    padding: 50px 30px 0;
    cursor: pointer;
  }
`;

const Menus = styled.ul`
  display: flex;
  ${Menu}:first-child {
    span {
      color: #a50000;
    }
  }
  ${Menu}:nth-child(5) {
    span {
      color: #186a9c;
    }
  }
`;

const SubMenu = styled.ul`
  display: none;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  li {
    width: 100%;
    text-align: center;
    a {
      width: 100%;
      padding: 5px;
    }
  }
  margin-bottom: 20px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  width: 1200px;
  margin: 0 auto;
`;

const HeaderBox = styled.header`
  display: flex;
  width: 100%;
  min-height: 80px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
  &:hover {
    color: ${(props) => props.theme.headerHoverColor};
    background-color: rgba(0, 0, 0, 0.5);
    ${SubMenu} {
      display: flex;
    }
  }
`;

function Header() {
  return (
    <HeaderBox>
      <Nav>
        <Menus>
          <Menu>
            <span>
              <Link to="/">summer sale</Link>
            </span>
          </Menu>
          <Menu>
            <span>
              <Link to="/big-size">big size!</Link>
            </span>
          </Menu>
          <Menu>
            <span>
              <Link to="/new">new 7% DC</Link>
            </span>
          </Menu>
          <Menu>
            <span>
              <Link to="/best">best</Link>
            </span>
          </Menu>
          <Menu>
            <span>
              <Link to="/made">made</Link>
            </span>

            <SubMenu>
              <li>
                <Link to="/made/basic">basic</Link>
              </li>
              <li>
                <Link to="/made/air">air</Link>
              </li>
              <li>
                <Link to="/made/black">black</Link>
              </li>
            </SubMenu>
          </Menu>
          <Menu>
            <span>
              <Link to="/special">special</Link>
            </span>

            <SubMenu>
              <li>
                <Link to="/made/basic">1+1</Link>
              </li>
              <li>
                <Link to="/made/air">cody set</Link>
              </li>
            </SubMenu>
          </Menu>
          <Menu>
            <span>
              <Link to="/store">store</Link>
            </span>

            <SubMenu>
              <li>
                <Link to="/made/basic">outer</Link>
              </li>
              <li>
                <Link to="/made/air">top</Link>
              </li>
              <li>
                <Link to="/made/black">shirts</Link>
              </li>
              <li>
                <Link to="/made/black">bottom</Link>
              </li>
              <li>
                <Link to="/made/black">shoes</Link>
              </li>
              <li>
                <Link to="/made/black">acc</Link>
              </li>
              <li>
                <Link to="/made/black">premium</Link>
              </li>
            </SubMenu>
          </Menu>
          <Menu>
            <span>
              <Link to="/community">community</Link>
            </span>

            <SubMenu>
              <li>
                <Link to="/made/basic">당일발송</Link>
              </li>
              <li>
                <Link to="/made/air">입고지연</Link>
              </li>
              <li>
                <Link to="/made/black">notice</Link>
              </li>
              <li>
                <Link to="/made/black">리뷰</Link>
              </li>
              <li>
                <Link to="/made/black">멤버십</Link>
              </li>
              <li>
                <Link to="/made/black">채용공고</Link>
              </li>
            </SubMenu>
          </Menu>
        </Menus>
      </Nav>
    </HeaderBox>
  );
}

export default Header;
