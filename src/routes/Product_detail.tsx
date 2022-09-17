import { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  IReview,
  isLikedState,
  ITabInfo,
  reviewState,
  selectColorState,
  selectedItemState,
  selectOption,
  tabInfoState,
} from "../atoms";
import Header from "../components/Header";
import itemData from "../data/detail.json";
import reviewData from "../review.json";
import Reviews from "../components/Review";
import { onCheckUser } from "../api";

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
    width: 40%;
    margin-right: 5%;
    overflow: hidden;
    object-fit: cover;
    img {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.tabletL} {
    .imgBox {
      width: 600px;
      margin-right: 0;
      overflow: hidden;
      object-fit: cover;
      img {
        width: 100%;
      }
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

      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .itemPrice {
      margin-top: 10px;
      color: ${(props) => props.theme.textColor};
      font-size: 20px;
      span {
        display: block;
      }
      .price.line {
        color: #ccc;
        text-decoration: 1px solid line-through #ccc;
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
          border: 1px solid ${(props) => props.theme.borderColor};
          cursor: pointer;
        }
        div:hover {
          border: 1px solid ${(props) => props.theme.borderDarkColor};
        }
        div.active {
          border: 1px solid ${(props) => props.theme.borderDarkColor};
        }
      }
    }
    .selected {
      margin-top: 15px;
      background-color: #fafafa;
      border: 1px solid ${(props) => props.theme.borderColor};
      padding: 0 15px;
      color: ${(props) => props.theme.textColor};
      > div {
        display: flex;
        margin: 20px 0;
      }
      .priceAndBtn {
        margin-left: auto;
        .price {
          font-size: 18px;
          font-weight: 700;
        }
      }
      .minusBtn {
        margin-left: 15px;
        background-color: transparent;
        color: ${(props) => props.theme.textColor2};
        border: none;
        cursor: pointer;
      }
    }
    .itemTotal {
      margin: 20px 0;
      text-transform: uppercase;
      font-size: 16px;
      text-align: right;
      .priceResult {
        color: #f86364;
        font-size: 28px;
        font-weight: 700;
      }
      .KRW {
        font-size: 16px;
      }
    }
    .itemButtons {
      display: flex;
      button {
        height: 50px;
        margin-right: 10px;
        background-color: transparent;
        color: ${(props) => props.theme.textColor2};
        font-size: 18px;
        border: 1px solid ${(props) => props.theme.borderColor};
        cursor: pointer;
      }
      .likeBtn {
        min-width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
      .likeBtn.active {
        color: #f86364;
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

const QnA = styled.div``;
const SellerInfo = styled.div``;

function Product_detail() {
  // 상품 번호 파라미터
  const { productId } = useParams();

  // 요청해서 받은 데이터
  const data = itemData;
  const itemDetail = data;
  const itemReviews = reviewData.reviews;
  const setReviews = useSetRecoilState<IReview[]>(reviewState);
  useEffect(() => {
    setReviews(itemReviews);
  }, []);

  // 옵션 선택
  const [selectedColor, setSelectedColor] =
    useRecoilState<selectOption>(selectColorState);
  const [selectedItem, setSelectedItem] =
    useRecoilState<selectOption[]>(selectedItemState);

  const colorClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    setSelectedColor({
      color: target.innerText,
    });
    const siblings = target.parentNode?.childNodes;
    [...(siblings as any)].map((el) => el.classList.remove("active"));
    target.classList.add("active");
  };

  const itemColorOption = useRef<any>();
  const sizeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (selectedColor.color === null) {
      alert("색상을 먼저 선택해주세요.");
    } else {
      setSelectedItem((current: any) => [
        ...current,
        { color: selectedColor.color, size: target.innerText },
      ]);
      setSelectedColor({ color: null });
      [...itemColorOption.current.childNodes].map((el: any) =>
        el.classList.remove("active")
      );
    }
  };

  // 옵션 삭제
  const deleteOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    // target?.parentNode?.parentNode.removeChild;
    const targetIndex = Number(target.parentElement?.dataset.idx);
    const newArr = [...selectedItem].filter(
      (el: selectOption) => el.size !== null
    );
    newArr.splice(targetIndex, 1);
    setSelectedItem(newArr);
  };

  // 선택한 옵션처리
  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  // 장바구니 담기
  const addCart = () => {
    // 장바구니에 담을 최종 배열
    const selectedPrd = selectedItem.filter(
      (el: selectOption) => el.size !== null
    );
  };

  // 상세정보 탭
  const [tabInfo, setTabInfo] = useRecoilState<ITabInfo>(tabInfoState);
  const tabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const tab = e.target as HTMLLIElement;
    setTabInfo({ tab: tab.innerText });
    const tabs = tab.parentNode?.childNodes;
    [...(tabs as any)]?.map((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
  };

  // 관심상품 등록
  const [isLiked, setIsLiked] = useRecoilState<boolean>(isLikedState);
  const likeBtnClick = (): any => {
    setIsLiked((current) => !current);
  };

  // 구매하기 클릭
  const navigate = useNavigate();
  const onPurchase = () => {
    console.log(localStorage.token);
    if (localStorage.token) {
      const response = onCheckUser(localStorage.token);
      navigate("/order", { state: response });
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }

    alert("hi");
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
              {itemDetail.discountRate ? (
                <>
                  <span className="price line">
                    KRW {itemDetail.price.toLocaleString()}
                  </span>
                  <span className="dcPrice">
                    KRW{" "}
                    {(
                      itemDetail.price -
                      Math.floor(
                        (itemDetail.price * itemDetail.discountRate) / 100
                      )
                    ).toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="price">
                  KRW {itemDetail.price.toLocaleString()}
                </span>
              )}
            </div>
            <pre className="itemSummary">{itemDetail.summary}</pre>

            {/* 옵션 */}
            <div className="itemOption">
              <span>옵션</span>
              <div ref={itemColorOption} className="itemColor">
                <span>색상</span>
                {itemDetail.productDetail.map((opt, idx) => (
                  <div onClick={colorClick} key={idx}>
                    {opt.color}
                  </div>
                ))}
              </div>

              <div className="itemSize">
                <span>사이즈</span>
                {itemDetail.productDetail.map((opt, idx) => (
                  <div onClick={sizeClick} key={idx}>
                    {opt.size}
                  </div>
                ))}
              </div>

              {/* 추가한 옵션 */}
              {selectedItem.filter((el: selectOption) => el.size !== null)
                .length > 0 ? (
                <div className="selected">
                  {selectedItem
                    .filter((el: selectOption) => el.size !== null)
                    .map((el, idx) => (
                      <div key={idx} data-idx={idx}>
                        <span>{`${el.color} / ${el.size}`}</span>
                        <div className="priceAndBtn">
                          {itemDetail.discountRate ? (
                            <span className="price">
                              {(
                                itemDetail.price -
                                Math.floor(
                                  (itemDetail.price * itemDetail.discountRate) /
                                    100
                                )
                              ).toLocaleString()}
                            </span>
                          ) : (
                            <span>{itemDetail.price}</span>
                          )}
                          <button className="minusBtn" onClick={deleteOption}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : null}
            </div>

            <div className="itemTotal">
              total:{" "}
              <span className="priceResult">
                {itemDetail.discountRate
                  ? (
                      selectedItem.filter(
                        (el: selectOption) => el.size !== null
                      ).length *
                      (itemDetail.price -
                        Math.floor(
                          (itemDetail.price * itemDetail.discountRate) / 100
                        ))
                    ).toLocaleString()
                  : (
                      selectedItem.filter(
                        (el: selectOption) => el.size !== null
                      ).length * itemDetail.price
                    ).toLocaleString()}
                <span className="KRW">원</span>{" "}
              </span>
              (
              {
                selectedItem.filter((el: selectOption) => el.size !== null)
                  .length
              }
              개)
            </div>

            <div className="itemButtons">
              {isLiked ? (
                <button onClick={likeBtnClick} className="likeBtn active">
                  <FontAwesomeIcon icon={faSolidHeart} />
                </button>
              ) : (
                <button onClick={likeBtnClick} className="likeBtn">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              )}

              <button onClick={addCart} className="cartBtn">
                장바구니
              </button>
              {/* <Link to={`/order/prd=${productId}`} className="buyBtn"> */}
              <button onClick={onPurchase} className="buyBtn">
                구매하기
              </button>
              {/* </Link> */}
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

          {tabInfo.tab === "리뷰" && <Reviews />}

          {tabInfo.tab === "상품 Q&A" && <QnA>상품 Q&amp;A</QnA>}
          {tabInfo.tab === "판매자정보" && <SellerInfo>판매자정보</SellerInfo>}
        </PrdDetail>
      </Container>
    </>
  );
}

export default Product_detail;
