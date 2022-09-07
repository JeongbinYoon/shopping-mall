import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  margin: 0 auto;
  margin-top: 110px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  .util {
    display: flex;
    justify-content: space-between;
    .findAccount a {
      margin-left: 10px;
    }
  }
`;

const Input = styled.input`
  height: 50px;
  margin-bottom: 15px;
  padding-left: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  &.loginBtn {
    margin: 15px 0 20px 0;
    background-color: #186a9c;
    color: #fff;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
`;

const JoinBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 20px;
  padding-left: 15px;
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
`;

function Login() {
  return (
    <>
      <Header />
      <Container>
        <Title>로그인</Title>
        <Form>
          <Area>
            <Input type="text" placeholder="아이디" />
          </Area>

          <Area>
            <Input type="password" placeholder="비밀번호" />
          </Area>

          <div className="util">
            <div className="autoLogin">
              <input type="checkbox" id="autoLogin" />
              <label htmlFor="autoLogin">자동 로그인</label>
            </div>
            <div className="findAccount">
              <Link to={"#"}>
                <span>아이디 찾기</span>
              </Link>
              <Link to={"#"}>
                <span>비밀번호 찾기</span>
              </Link>
            </div>
          </div>

          <Input className="loginBtn" type="submit" value="로그인" />
        </Form>

        <JoinBtn className="joinBtn" to={"/join"}>
          회원가입
        </JoinBtn>
      </Container>
    </>
  );
}

export default Login;
