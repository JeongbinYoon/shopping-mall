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
  .reviewId {
    min-width: 40px;
    /* border: 1px solid #f00; */
  }
  .reviewRate {
    min-width: 100px;
    /* border: 1px solid #f00; */
  }
  .reviewContent {
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
    border-top: 2px solid ${(props) => props.theme.borderColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    li {
      display: flex;
    }
  }
  .listBody {
    li {
      /* border: 1px solid #00f; */
      display: flex;
      height: 30px;
    }
    .reviewContent {
      font-size: 14px;
    }
    border-bottom: 2px solid ${(props) => props.theme.borderColor};
  }
`;

const Subtitle = styled.h4`
  margin-bottom: 15px;
  font-weight: 700;
`;

function ReviewList() {
  return (
    <ReviewListContainer>
      <div className="util">
        <Subtitle>작성한 리뷰</Subtitle>
        <Link to={"#"}>
          더보기 <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
      <ul className="listHeader">
        <li className="reviewId">번호</li>
        <li className="reviewRate">평점</li>
        <li className="reviewContent">내용</li>
      </ul>
      <ul className="listBody">
        <li>
          <span className="reviewId">1</span>
          <span className="reviewRate">★★★★★</span>
          <p className="reviewContent">
            와우~~보들보들 하구요 촉감이너무 좋네요~ 시원해요~~ 추천~!!!
          </p>
        </li>
        <li>
          <span className="reviewId">1</span>
          <span className="reviewRate">★★★★★</span>
          <p className="reviewContent">
            와우~~보들보들 하구요 촉감이너무 좋네요~ 시원해요~~ 추천~!!!
          </p>
        </li>
        <li>
          <span className="reviewId">1</span>
          <span className="reviewRate">★★★★★</span>
          <p className="reviewContent">
            와우~~보들보들 하구요 촉감이너무 좋네요~ 시원해요~~ 추천~!!!
          </p>
        </li>
        <li>
          <span className="reviewId">1</span>
          <span className="reviewRate">★★★★★</span>
          <p className="reviewContent">
            와우~~보들보들 하구요 촉감이너무 좋네요~ 시원해요~~ 추천~!!!
          </p>
        </li>
      </ul>
    </ReviewListContainer>
  );
}
export default ReviewList;
