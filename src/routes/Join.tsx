import styled from "styled-components";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;

  .areas {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }

  .submitBtn {
    height: 50px;
    margin-top: 20px;
    color: #fff;
    font-size: 18px;
    background-color: #186a9c;
    border: none;
  }
`;

const Input = styled.input`
  height: 50px;
  margin-top: 10px;
  padding-left: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  label {
    font-weight: 700;
  }
`;

const IdArea = styled(Area)`
  flex-direction: row;
  padding: 0;
  .idInput {
    width: 360px;
    display: flex;
    flex-direction: column;
  }
  .checkId {
    width: 90px;
    height: 50px;
    margin-top: auto;
    margin-left: auto;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Terms = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-left: 5px;
  }
  input:hover {
    cursor: pointer;
  }
  label:hover {
    cursor: pointer;
  }
  .termsArea {
    padding: 15px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 5px;
    .term {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 14px;
      button {
        color: ${(props) => props.theme.textColor2};
        margin-left: auto;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    .term:last-child {
      margin: 0;
    }
  }

  .checkAll {
    margin-bottom: 10px;
  }
`;

function Join() {
  return (
    <>
      <Header />
      <Container>
        <Title>회원가입</Title>
        <Form>
          <div className="areas">
            <IdArea>
              <div className="idInput">
                <label htmlFor="id">아이디</label>
                <Input type="text" placeholder="아이디를 입력하세요" id="id" />
              </div>
              <button className="checkId">중복 확인</button>
            </IdArea>

            <Area>
              <label htmlFor="pw">비밀번호</label>
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
                id="pw"
              />
            </Area>

            <Area>
              <label htmlFor="pw2">비밀번호 확인</label>
              <Input
                type="password"
                placeholder="비밀번호를 한번 더 입력하세요"
                id="pw2"
              />
            </Area>

            <Area>
              <label htmlFor="name">이름</label>
              <Input type="text" placeholder="이름을 입력하세요" id="name" />
            </Area>

            <Area>
              <label htmlFor="pw2">휴대폰 번호</label>
              <Input
                type="number"
                placeholder="휴대폰 번호를 입력하세요"
                id="pw2"
              />
            </Area>
          </div>

          <Terms>
            <div className="checkAll">
              <input type="checkbox" id="checkAll" />
              <label htmlFor="checkAll">전체 동의</label>
            </div>
            <div className="termsArea">
              <div className="term">
                <input type="checkbox" id="terms14" />
                <label htmlFor="terms14">[필수] 만 14세 이상입니다</label>
              </div>
              <div className="term">
                <input type="checkbox" id="termsService" />
                <label htmlFor="termsService">[필수] 이용약관 동의</label>
                <button>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
              <div className="term">
                <input type="checkbox" id="termsPrivacyCollect" />
                <label htmlFor="termsPrivacyCollect">
                  [필수] 개인정보 수집 및 이용 동의
                </label>

                <button>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </div>
          </Terms>

          <input className="submitBtn" value={"가입완료"} type="submit" />
        </Form>
      </Container>
    </>
  );
}

export default Join;
