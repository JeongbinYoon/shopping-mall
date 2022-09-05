import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidFaStar } from "@fortawesome/free-regular-svg-icons";
import { IReview, reviewState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";

// 리뷰
const Review = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  .contianer {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    .rate {
      min-width: 100px;
      margin-bottom: 10px;
      color: #f2953a;
    }
    .info {
      .option {
        font-weight: 700;
      }
      .option::after {
        color: ${(props) => props.theme.textColor2};
        content: " | ";
      }
      .content {
        margin-top: 15px;
        line-height: 1.5em;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .photos {
        display: flex;
        .photoBox {
          width: 50px;
          height: 50px;
          margin: 15px 5px 0 0;
          overflow: hidden;
          cursor: pointer;
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }

      .createDate {
        display: inline-block;
        margin-top: 15px;
        color: ${(props) => props.theme.textColor2};
      }
    }

    .userId {
      min-width: 150px;
      margin-left: auto;
      padding-left: 20px;
      overflow: hidden;
      word-wrap: break-word;
    }

    @media ${(props) => props.theme.mobile} {
      flex-direction: column;
      .userId {
        margin: 0;
        line-height: 1.2em;
        padding: 0;
      }
    }
  }
`;

// 리뷰 평점 표현
const changeRate = (rate: number) => {
  const star = <FontAwesomeIcon icon={faStar} />;
  const halfStar = <FontAwesomeIcon icon={faStarHalfStroke} />;
  const emptyStar = <FontAwesomeIcon icon={solidFaStar} />;
  const rateInt = Math.floor(rate);
  const rateFloat = rate.toString().split(".")[1];
  let rateEmpty = 5 - rateInt;
  if (rateFloat) {
    rateEmpty = 5 - rateInt - 1;
  }
  let newRate = [];
  // 정수만큼 star
  for (let i = 0; i < rateInt; i++) {
    newRate.push(star);
  }
  // 소수 만큼 half star
  if (rateFloat) {
    newRate.push(halfStar);
  }
  // 빈 자리 empty star
  if (rateEmpty !== 0) {
    for (let i = 0; i < rateEmpty; i++) {
      newRate.push(emptyStar);
    }
  }

  return newRate;
};
// 날짜 변경
const changeReviewDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const changeDate = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()}`;
  return changeDate;
};

function Reviews() {
  const reviews = useRecoilValue<IReview[]>(reviewState);
  return (
    <Review>
      {reviews.map((review) => (
        <div key={review.reviewId} className="contianer">
          <div className="rate">
            {changeRate(review.rate).map((el, idx) => (
              <span key={idx}>{el}</span>
            ))}
          </div>
          <div className="info">
            <div>
              <span className="option">{`${review.option.size} / ${review.option.color}`}</span>
              <span>{`${review.height}cm / ${review.weight}kg`}</span>
            </div>
            <pre className="content">{review.content}</pre>
            {review.photos !== null ? (
              <div className="photos">
                {review.photos.map((photo) => (
                  <div key={photo} className="photoBox">
                    <img src={photo} alt="포토리뷰 이미지" />
                  </div>
                ))}
              </div>
            ) : null}

            <span className="createDate">
              {changeReviewDate(review.create_date)}
            </span>
          </div>
          <div className="userId">{review.userId}</div>
        </div>
      ))}
    </Review>
  );
}

export default Reviews;
