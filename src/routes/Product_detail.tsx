import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidFaStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  ITabInfo,
  selectColorState,
  selectedState,
  selectSizeState,
  tabInfoState,
} from "../atoms";
import Header from "../components/Header";
import itemData from "../detail.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  margin-top: 150px;
  border: 1px solid #f00;
`;

const DetailArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  .imgBox {
    width: 600px;
    height: 700px;
    margin-right: 5%;
    overflow: hidden;
    img {
      /* width: 100%; */
    }
  }
  .itemInfo {
    width: 600px;
    .itemName {
      color: ${(props) => props.theme.textColor};
      font-size: 24px;
      font-weight: 700;
    }
    .itemSummary {
      color: ${(props) => props.theme.textColor2};
      font-size: 14px;
      margin-top: 20px;
      line-height: 1.5em;
    }
    .itemPrice {
      margin-top: 10px;
      color: ${(props) => props.theme.textColor};
      font-size: 20px;
      span {
        display: block;
      }
    }
    .itemOption {
      margin-top: 30px;
      padding: 15px;
      border: 1px solid ${(props) => props.theme.borderColor};
      font-size: 14px;
      .itemColor {
        margin: 20px 0 10px 0;
      }
      .itemColor,
      .itemSize {
        display: flex;
        margin-left: 20px;
        span {
          width: 50px;
          margin-right: 50px;
        }
        div {
          margin-right: 5px;
          padding: 10px;
          border: 1px solid #ccc;
          cursor: pointer;
        }
        div:hover {
          border: 1px solid #333;
        }
        div.active {
          border: 1px solid #333;
        }
      }
    }
    .itemTotal {
      margin: 20px 0;
      text-transform: uppercase;
      font-size: 20px;
      text-align: right;
    }
    .itemButtons {
      display: flex;
      button {
        height: 50px;
        margin-right: 10px;
        background-color: transparent;
        font-size: 18px;
        border: 1px solid ${(props) => props.theme.borderColor};
        cursor: pointer;
      }
      .likeBtn {
        min-width: 50px;
        border-radius: 50%;
      }
      .cartBtn {
        width: 50%;
      }
      .buyBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin: 0%;
        background-color: ${(props) => props.theme.buttonColor};
        color: ${(props) => props.theme.textColorWhite};
        font-size: 18px;
      }
    }
  }
`;

const PrdDetail = styled.div``;

// 탭 메뉴
const PrdTab = styled.ul`
  display: flex;
  height: 50px;
  margin: 50px 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    color: ${(props) => props.theme.textColor2};
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  li.active {
    color: ${(props) => props.theme.textColor};
    border-bottom: 1px solid ${(props) => props.theme.textColor};
  }
`;

// 상품정보
const PrdInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
    margin-bottom: 20px;
  }
`;

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
const QnA = styled.div``;
const SellerInfo = styled.div``;

const selected: any = [];
function Product_detail() {
  // 상품 번호 파라미터
  const { productId } = useParams();

  // 요청해서 받은 데이터
  const data = itemData;
  const itemDetail = data.itemDetail;
  const itemReviews = data.reviews;

  // 옵션 선택

  // 상세정보 탭
  const [tabInfo, setTabInfo] = useRecoilState<ITabInfo>(tabInfoState);
  const tabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const tab = e.target as HTMLLIElement;
    setTabInfo({ tab: tab.innerText });
    const tabs = tab.parentNode?.childNodes;
    [...(tabs as any)]?.map((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
  };

  // console.log(data);

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
    console.log(newRate);

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
  return (
    <>
      <Header />
      <Container>
        <DetailArea>
          <div className="imgBox">
            <img src={itemDetail.thumbnail} alt="대표이미지" />
          </div>
          <div className="itemInfo">
            <h2 className="itemName">{itemDetail.name}</h2>
            <div className="itemPrice">
              <span className="Price">
                KRW {itemDetail.price.toLocaleString()}
              </span>
              <span className="dcPrice">
                KRW{" "}
                {(
                  itemDetail.price -
                  Math.floor((itemDetail.price * itemDetail.discountRate) / 100)
                ).toLocaleString()}
              </span>
            </div>
            <pre className="itemSummary">{itemDetail.summary}</pre>

            <div className="itemOption">
              <span>옵션</span>
              <div className="itemColor">
                <span>색상</span>
                {itemDetail.color.map((color) => (
                  <div key={color}>{color}</div>
                ))}
              </div>

              <div className="itemSize">
                <span>사이즈</span>
                {itemDetail.size.map((size) => (
                  <div key={size}>{size}</div>
                ))}
              </div>

              <div className="selected">
                {selected.map((el: any) => (
                  <div>{`${el.color} / ${el.size}`}</div>
                ))}
              </div>
            </div>

            <div className="itemTotal">total: 0 (0개)</div>

            <div className="itemButtons">
              <button className="likeBtn">♡</button>
              <button className="cartBtn">장바구니</button>
              <Link to={"/"} className="buyBtn">
                구매하기
              </Link>
            </div>
          </div>
        </DetailArea>
        <PrdDetail>
          <PrdTab>
            <li onClick={tabClick} className="prdInfo active">
              상세정보
            </li>
            <li onClick={tabClick} className="review ">
              리뷰
            </li>
            <li onClick={tabClick} className="qna ">
              상품 Q&amp;A
            </li>
            <li onClick={tabClick} className="sellerInfo ">
              판매자정보
            </li>
          </PrdTab>
          {tabInfo.tab === "상세정보" && (
            <PrdInfo>
              {itemDetail.detailImg.map((url) => (
                <img key={url} src={url} alt="상세이미지" />
              ))}
            </PrdInfo>
          )}
          {tabInfo.tab === "리뷰" && (
            <Review>
              {itemReviews.map((review) => (
                <div key={review.reviewId} className="contianer">
                  <div className="rate">
                    {changeRate(review.rate).map((el) => (
                      <span>{el}</span>
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
          )}
          {tabInfo.tab === "상품 Q&A" && <QnA>상품 QA</QnA>}
          {tabInfo.tab === "판매자정보" && <SellerInfo>판매자정보</SellerInfo>}
        </PrdDetail>
      </Container>
    </>
  );
}

export default Product_detail;
