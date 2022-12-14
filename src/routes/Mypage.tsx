import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MyDashboard from "../components/MyDashboard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  margin-top: 80px;
  .innerContainer {
    display: flex;
    /* border: 1px solid #f00; */
  }
`;

const Title = styled.h2`
  margin: 50px 0;
  font-size: 24px;
  text-align: center;
`;

const Nav = styled.nav`
  width: 200px;
  min-width: 120px;
  h3 {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 700;
  }
  ul > li {
    margin-bottom: 30px;
  }
  ul ul {
    font-size: 14px;
    li {
      margin: 10px 0;
    }
  }
  @media ${(props) => props.theme.mobile} {
    & {
      display: none;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Subtitle = styled.h4`
  margin-bottom: 15px;
  font-weight: 700;
`;

const MyOrder = styled.div`
  /* border: 1px solid tomato; */
  margin-bottom: 20px;
  .order {
    display: flex;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    ol {
      display: flex;
      justify-content: space-around;
      width: 70%;
      margin: 0 30px;
    }
    ol li {
      margin: 30px 0;
      &.angleRight {
        display: flex;
        align-items: center;
        color: #eee;
        font-size: 24px;
      }
    }
    ol li a {
      display: flex;
      flex-direction: column;
      align-items: center;
      white-space: nowrap;
      .count {
        color: #ccc;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
    .orderStatus {
      display: flex;
      align-items: center;
      width: 30%;
      background-color: #f5f5f5;
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px 30px;
        li {
          display: flex;
          margin: 10px 0;
          justify-content: space-between;
        }
      }
    }
  }
  @media ${(props) => props.theme.tabletS} {
    .order {
      flex-direction: column;
      ol {
        width: 100%;
      }
      .orderStatus {
        width: 100%;
        ul {
          flex-direction: row;
          justify-content: space-between;
          li {
            display: flex;
            width: 100%;
            margin: 0;
            margin-right: 50px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
`;
function Mypage() {
  return (
    <>
      <Header />
      <Container>
        <Title>???????????????</Title>
        <div className="innerContainer">
          <Nav>
            <ul>
              <li>
                <h3>???????????? ??????</h3>
                <ul>
                  <li>???????????? ??????</li>
                  <li>?????? ?????? ??????</li>
                </ul>
              </li>
              <li>
                <h3>????????????</h3>
                <ul>
                  <li>?????? ??????</li>
                  <li>?????? ??????</li>
                  <li>?????? ??????</li>
                </ul>
              </li>
              <li>
                <h3>?????? ?????????</h3>
              </li>
              <li>
                <h3>????????????</h3>
              </li>
              <li>
                <h3>1:1??????</h3>
              </li>
            </ul>
          </Nav>
          <Content>
            <MyOrder className="myOrder">
              <Subtitle>?????? ?????? ??????</Subtitle>
              <div className="order">
                <ol>
                  <li>
                    <Link to={"#"}>
                      <span className="count">0</span>
                      <span>????????????</span>
                    </Link>
                  </li>
                  <li className="angleRight">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span className="count">0</span>
                      <span>????????????</span>
                    </Link>
                  </li>
                  <li className="angleRight">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span className="count">0</span>
                      <span>?????? ??????</span>
                    </Link>
                  </li>
                  <li className="angleRight">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span className="count">0</span>
                      <span>?????? ???</span>
                    </Link>
                  </li>
                  <li className="angleRight">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span className="count">0</span>
                      <span>?????? ??????</span>
                    </Link>
                  </li>
                  <li className="angleRight">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span className="count">0</span>
                      <span>????????????</span>
                    </Link>
                  </li>
                </ol>
                <div className="orderStatus">
                  <ul>
                    <li>
                      <span>??????</span>
                      <span>0</span>
                    </li>
                    <li>
                      <span>??????</span>
                      <span>0</span>
                    </li>
                    <li>
                      <span>??????</span>
                      <span>0</span>
                    </li>
                  </ul>
                </div>
              </div>
            </MyOrder>
            <MyDashboard />
          </Content>
        </div>
      </Container>
    </>
  );
}

export default Mypage;
