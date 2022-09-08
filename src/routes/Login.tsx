import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import { ILogin } from "../atoms";
import { useMutation } from "react-query";
import { onLogin } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
    .findAccount a:last-child::before {
      content: " | ";
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
    background-color: ${(props) => props.theme.pointColor};
    color: #fff;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
  &:focus {
    outline: 1px solid ${(props) => props.theme.pointColor};
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

// 로딩스피너
const LoadingSpinnerRotate = keyframes`
0%{
  transform: rotate(0deg);
  opacity: 50%;
}
50%{
  opacity: 100%;

}
100%{
  transform: rotate(360deg);
  opacity: 50%;
}
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.pointColor};
  font-size: 3em;
  position: fixed;
  top: 0;
  z-index: 100;
  span {
    margin-top: -400px;
    animation: ${LoadingSpinnerRotate} 1.5s infinite;
  }
`;

function Login() {
  // 로그인 정보 post
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(onLogin);

  // 로그인 버튼 클릭시 input값 전달
  const { register, handleSubmit, setValue } = useForm<ILogin>();
  const handleValid = ({ username, password }: ILogin) => {
    mutate({
      username,
      password,
    });
    setValue("username", "");
    setValue("password", "");
  };

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(handleValid)}>
          <Area>
            <Input
              {...register("username", { required: "아이디를 입력하세요" })}
              type="id"
              placeholder="아이디"
            />
          </Area>

          <Area>
            <Input
              {...register("password", { required: "비밀번호를 입력하세요" })}
              type="password"
              placeholder="비밀번호"
            />
          </Area>

          <div className="util">
            <div className="saveId">
              <input type="checkbox" id="saveId" />
              <label htmlFor="saveId">아이디 저장</label>
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

      {isLoading ? (
        <LoadingSpinner>
          <span>
            <FontAwesomeIcon icon={faSpinner} />
          </span>
        </LoadingSpinner>
      ) : (
        <>
          {isError && console.log(error)}
          {isSuccess && navigate("/")}
        </>
      )}
    </>
  );
}

export default Login;
