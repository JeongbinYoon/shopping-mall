import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ReviewListContainer = styled.section`
  width: 50%;
  .util {
    display: flex;
    justify-content: space-between;
    width: 100%;
    a {
      color: ${(props) => props.theme.textColor2};
      font-size: 14px;
      height: fit-content;
    }
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .qnaId {
    min-width: 40px;
    /* border: 1px solid #f00; */
  }
  .qnaTitle {
    width: 100%;
    height: 30px;
    padding-left: 5px;
    text-align: left;
    line-height: 30px;
    overflow: hidden;
    /* border: 1px solid #f00; */
  }

  .listHeader {
    display: flex;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    border-bottom: 1px solid #ddd;
    li {
      display: flex;
    }
  }
  .listBody {
    li {
      /* border: 1px solid #00f; */
      display: flex;
      height: 30px;
      a {
        display: inline-block;
        width: 100%;
      }
    }
    .qnaTitle {
      font-size: 14px;
    }
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const Subtitle = styled.h4`
  margin-bottom: 15px;
  font-weight: 700;
`;

function QnAList() {
  return (
    <ReviewListContainer>
      <div className="util">
        <Subtitle>1:1 문의</Subtitle>
        <Link to={"#"}>
          더보기 <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
      <ul className="listHeader">
        <li className="qnaId">번호</li>
        <li className="qnaTitle">제목</li>
      </ul>
      <ul className="listBody">
        <li>
          <span className="qnaId">1</span>
          <Link to="/">
            <p className="qnaTitle">
              질문 질문 질문 질문 질문 질문 질문 질문질문 질문 질문 질문 질문
              질문 질문 질문{" "}
            </p>
          </Link>
        </li>
        <li>
          <span className="qnaId">1</span>
          <Link to="/">
            <p className="qnaTitle">질문 질문 질문 질문 질문 질문 질문 질문</p>
          </Link>
        </li>
        <li>
          <span className="qnaId">1</span>
          <Link to="/">
            <p className="qnaTitle">
              질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
            </p>
          </Link>
        </li>
        <li>
          <span className="qnaId">1</span>
          <Link to="/">
            <p className="qnaTitle">
              질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
              질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문
            </p>
          </Link>
        </li>
      </ul>
    </ReviewListContainer>
  );
}
export default QnAList;
