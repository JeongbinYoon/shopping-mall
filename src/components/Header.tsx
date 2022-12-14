import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { tokenState } from "../atoms";
import { useEffect } from "react";

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
      padding: 10px;
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
  font-size: 14px;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
  backdrop-filter: blur(5px);
  &:hover {
    color: ${(props) => props.theme.headerHoverColor};
    background-color: rgba(0, 0, 0, 0.5);
    ${SubMenu} {
      display: flex;
    }
  }
  z-index: 100;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 20%;
  left: calc(92.5% + 20px);
  transform: rotate(90deg);
  transform-origin: left bottom;
  button {
    width: fit-content;
    height: 30px;
    background-color: transparent;
    white-space: nowrap;
    text-transform: uppercase;
    border: 0.5px solid transparent;
    &:hover {
      border-bottom: 0.5px solid #333;
      cursor: pointer;
    }
  }
`;

function Header() {
  const [tokenVal, setTokenVal] = useRecoilState<any>(tokenState);
  const token = localStorage.getItem("token");

  const onLogout = () => {
    localStorage.removeItem("token");
    setTokenVal(null);
  };

  useEffect(() => {
    console.log(token);
  }, [tokenVal]);
  return (
    <>
      <HeaderBox>
        <Nav>
          <Menus>
            <Menu>
              <span>
                <Link to="/new">discount</Link>
              </span>
            </Menu>
            <Menu>
              <span>
                <Link to="/best">best</Link>
              </span>
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
                  <Link to="/made/basic">????????????</Link>
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
                  <Link to="/made/black">notice</Link>
                </li>
                <li>
                  <Link to="/made/black">??????</Link>
                </li>
              </SubMenu>
            </Menu>
          </Menus>
        </Nav>
      </HeaderBox>
      <Account>
        {!token && (
          <>
            <Link to={"/login"}>
              <button>login</button>
            </Link>

            <Link to={"/join"}>
              <button>join</button>
            </Link>
          </>
        )}

        {token && (
          <>
            <button onClick={onLogout}>logout</button>
            <Link to={"/mypage"}>
              <button>my page</button>
            </Link>
          </>
        )}
      </Account>
    </>
  );
}

export default Header;
